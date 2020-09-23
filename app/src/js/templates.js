export const jobTemplate = (job) =>
    `<div class="box">
        <div class="box-content">
            <div class="box-content__title">
                <a class="jsModalTrigger" href="#jsModal">
                    <h2 class="jTitel">${job.title}</h2>
                    <div class="businessImg"></div>
                </a>
                <div class="box-org">
                    <span>${job.company.display_name}</span>
                    <span class="jLocation">${job.location.display_name}</span>
                </div>
            </div>
            <div class="box-content__desc">
                <hr>
                <div class="box-desc">${job.description}</div>
            </div>
            <div class="box-content__tools">
                <button class="job_apply">Quick Apply</button>
                <button class="job_fav" id="${job.id}">&#9734</button>
            </div>
        </div>
    </div>`;

export const modalTemplate = () =>
    `<div id="jsModal" class="modal">
        <div class="modal__overlay jsOverlay"></div>
        <div class="modal__container">
            <div class="wrap">
                <span>Job Title: </span>
                <h2 id="jobTitle"></h2>
            </div>
            <div class="wrap">
                <span>Job Location: </span>
                <p id="jobCompany"></p>
            </div>
            <button class="modal__close jsModalClose">&#10005;</button>
        </div>
        </div>`;