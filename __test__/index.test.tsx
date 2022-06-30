import '@testing-library/jest-dom'
import { render, waitFor, screen } from '@testing-library/react'
import React from 'react'
import Home from '../pages/index'

describe('Home', () => {
	it('Render home', async () => {
		const mockResults = [
			{
				name: 'Rick',
				image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			},
		]

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

		await waitFor(() => {
			screen.getByText('SALDO DISPONIBLE')
			const element = screen.getByTestId('Rick')
			expect(element).toHaveTextContent('Rick')
		})
	})
})
