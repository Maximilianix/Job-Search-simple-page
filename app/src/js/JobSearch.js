import { jobTemplate, modalTemplate } from './templates';
import { extractFormData } from './utils';
import { storage } from './storage';
import { popModal } from './popModal';



export class JobSearch {

    constructor(searchFormSelector, resultsContainerSelector, loadingElementSelector, modalElementSelector) {
        this.searchForm = document.querySelector(searchFormSelector);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
        this.loadingElement = document.querySelector(loadingElementSelector);
        this.modalElement = document.querySelector(modalElementSelector);
    }

    configureFormListener() {
        this.searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.startLoading();
            this.resultsContainer.innerHTML = '';
            const { search, location } = extractFormData(this.searchForm);
            fetch(`http://localhost:3000/?search=${search}&location=${location}`)
                .then(response => response.json())
                .then(({ results }) => {
                    this.stopLoading();
                    const haveResults = document.querySelector('.no-results').innerHTML
                    if (results === undefined || results.length == 0) {
                        document.querySelector('.no-results').innerHTML = 'Nothing found'
                    } else {
                        document.querySelector('.no-results').innerHTML = ''
                    }
                    return results
                        .map(job => jobTemplate(job))
                        .join('');
                })
                .then(jobs => this.resultsContainer.innerHTML = jobs)
                .then(() => modalTemplate())
                .then(value => this.modalElement.innerHTML = value)
                .then(() => popModal())
                .then(() => storage())
                .catch(() => this.stopLoading());
        });
    }

    startLoading() {
        this.loadingElement.classList.add('loading');
    }

    stopLoading() {
        this.loadingElement.classList.remove('loading');
    }
}