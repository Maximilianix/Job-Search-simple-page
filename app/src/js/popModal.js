// This script supports IE9+ 
export const popModal = () => {
    // Opening modal window function 
    function openModal() {
        // Get trigger element 
        const modalTrigger = document.getElementsByClassName('jsModalTrigger');


        // Set onclick event handler for all trigger elements 
        for (let i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function () {
                const jTitle = this.querySelector('h2').innerHTML;
                const jLocation = this.parentNode.querySelector('.jLocation').innerHTML;
                const target = this.getAttribute('href').substr(1);
                const modalWindow = document.getElementById(target);
                modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open';
                setModalInfo(jTitle, jLocation)
            }
        }

    }

    // Set modal job info
    function setModalInfo(jTitle, jLocation) {
        document.getElementById('jobTitle').innerHTML = jTitle;
        document.getElementById('jobCompany').innerHTML = jLocation;
    }

    function closeModal() {
        // Get close button 
        const closeButton = document.getElementsByClassName('jsModalClose');
        const closeOverlay = document.getElementsByClassName('jsOverlay');

        // Set onclick event handler for close buttons 
        for (let i = 0; i < closeButton.length; i++) {
            closeButton[i].onclick = function () {
                const modalWindow = this.parentNode.parentNode;
                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

        // Set onclick event handler for modal overlay 
        for (let i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].onclick = function () {
                const modalWindow = this.parentNode;
                modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }

    }
    openModal();
    closeModal();
}
