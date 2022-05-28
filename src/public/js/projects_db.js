'use strict';

const container = document.querySelector('.page-projects__wrap');

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
				<div class="page-projects__image" data-url="${URL}">
					<h5 class="page-projects__heading">${title}</h5>
				</div>
			`);
		}
	});