jest.mock('api');
jest.mock('mockBusinessesResponsePageOne');

import React from 'react';
import * as Api from 'api';
import mockBusinessesResponsePageOne from 'mockBusinessesResponsePageOne';
import mockBusinessesResponsePageTwo from 'mockBusinessesResponsePageTwo';
import mockBusinessResponse from 'mockBusinessResponse';
import { renderIntoDocument } from 'react-dom/test-utils';
import App from 'App.js';
import Modal from 'react-modal';

const nextTick = (cb) => new Promise((res) => process.nextTick(() => res(cb && cb())));

const pageOne = mockBusinessesResponsePageOne();
const pageTwo = mockBusinessesResponsePageTwo();
const business = mockBusinessResponse();

describe('Context and actions', () => {
	beforeEach(() => {
		Api.getBusinesses.mockImplementation(() => Promise.resolve(pageOne));
	});
	describe('getBusinesses', () => {
		it('should fetch the first page on mount', async () => {
			const app = renderIntoDocument(<App />);
			await nextTick();
			expect(app.state.businesses).toEqual(pageOne.businesses);
			Api.getBusinesses.mockImplementation(() => Promise.resolve(pageTwo));
			app.getBoundActions().incrementPage(app.state.pages.next);
			await nextTick();
			expect(app.state.businesses).toEqual([...pageOne.businesses, ...pageTwo.businesses]);
		});

		describe('incrementPage', () => {
			it('should append the second page when incrementPage is called', async () => {
				const app = renderIntoDocument(<App />);
				await nextTick();
				Api.getBusinesses.mockImplementation(() => Promise.resolve(pageTwo));
				app.getBoundActions().incrementPage(app.state.pages.next);
				await nextTick();
				expect(app.state.businesses).toEqual([...pageOne.businesses, ...pageTwo.businesses]);
			});
		});
	});

	describe('Modals', () => {
		Modal.setAppElement(document.body);

		it('should set the detailsModal when openModal is called', async () => {
			const app = renderIntoDocument(<App />);
			await nextTick();
			Api.getBusinessDetail.mockImplementation(() => Promise.resolve(business));
			app.getBoundActions().openDetailsModal(app.state.businesses[0].id);
			await nextTick();
			expect(app.state.detailsModal).toEqual(business);
		});

		it('should open the error modal when an error occurs', async () => {
			const app = renderIntoDocument(<App />);
			await nextTick();
			Api.getBusinessDetail.mockImplementation(() => Promise.reject());
			app.getBoundActions().openDetailsModal(app.state.businesses[0].id);
			await nextTick();
			expect(app.state.detailsModal).toBe(null);
			expect(app.state.error).toBe(true);
		});

		it('should close a modal', async () => {
			const app = renderIntoDocument(<App />);
			await nextTick();
			Api.getBusinessDetail.mockImplementation(() => Promise.reject());
			app.getBoundActions().openDetailsModal(app.state.businesses[0].id);
			await nextTick();
			app.getBoundActions().closeModal();
			await nextTick();
			expect(app.state.detailsModal).toBe(null);
			expect(app.state.error).toBe(null);
		});
	});
});
