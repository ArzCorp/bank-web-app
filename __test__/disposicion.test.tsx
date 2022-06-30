import '@testing-library/jest-dom'
import { render, waitFor, screen } from '@testing-library/react'
import React from 'react'
import Provision from '../pages/disposicion'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

describe('Disposición', () => {
	it('Render page', () => {
		const router: NextRouter = {
			basePath: '',
			pathname: '/',
			route: '/',
			query: {},
			asPath: '/',
			back: jest.fn(),
			beforePopState: jest.fn(),
			prefetch: jest.fn(),
			push: jest.fn(),
			reload: jest.fn(),
			replace: jest.fn(),
			events: {
				on: jest.fn(),
				off: jest.fn(),
				emit: jest.fn(),
			},
			isFallback: false,
			isLocaleDomain: false,
			isReady: true,
			defaultLocale: 'en',
			domainLocales: [],
			isPreview: false,
		}
		render(
			<RouterContext.Provider value={router}>
				<Provision />
			</RouterContext.Provider>
		)

		const element = screen.getByText('Disposición').textContent
		expect(element).toEqual('Disposición')
	})
})
