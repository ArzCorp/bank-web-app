import '@testing-library/jest-dom'
import { render, waitFor, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('index.js, render', () => {
	it('page home', async () => {
		const mockResults = [{}]
		global.fetch = jest.fn().mockImplementation((url) => {
			return new Promise((resolve) => {
				resolve({
					json: () =>
						Promise.resolve({
							results: mockResults,
						}),
				})
			})
		})
		render(<Home />)
		await waitFor(() => screen.getByText('SALDO DISPONIBLE'))
	})
})
