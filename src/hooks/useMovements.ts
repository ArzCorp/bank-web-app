import { useEffect, useState } from 'react'
import { movement } from 'utils/types/movement'
import { movementsResponseApi } from 'utils/types/movementsResponseApi'

export default function useMovements() {
	const [movements, setMovements] = useState<Array<movement>>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>()

	const mapFromApiToMovements = (
		movementsResponseApi: movementsResponseApi['results']
	): Array<movement> => {
		return movementsResponseApi.map(
			(movementApi: movementsResponseApi['results'][0]) => {
				const {
					name,
					species: description,
					status: time,
					id: amount,
					image: img,
				} = movementApi

				return { name, description, time, amount, img }
			}
		)
	}

	const getMovements = (): Promise<movementsResponseApi> => {
		setLoading(true)
		return fetch('https://rickandmortyapi.com/api/character/')
			.then((response) => {
				return response.json()
			})
			.catch((error) => setError(error.message))
	}

	useEffect(() => {
		getMovements()
			.then((movement) => {
				setLoading(false)
				setMovements(mapFromApiToMovements(movement.results))
			})
			.catch((error) => setError(error.message))
	}, [])

	return { movements, loading, error }
}
