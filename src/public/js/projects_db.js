'use strict';

const container = document.querySelector('.projects__wrap-content');

fetch('./json/projects_db.json')
	.then(response => response.json())
	.then(projects_db => {
		let title, URL;

		for (let project of projects_db.projects) {
			for (let property in project) {
				switch (property) {
					case 'title':
						title = project[property];
						break;
					case 'url':
						URL = project[property];
				}
			}

			container.insertAdjacentHTML('beforeend', `
				<a href="#!" class="projects__block project" style="background: url(${URL});">
					<div class="project__block-title">
						<h5 class="project__title">${title}</h5>
					</div>
				</a>
			`);
		}
	});