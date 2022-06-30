import { useEffect, useState } from 'react'
import { mapResponseApiToMovements } from 'utils/mapResponseApiToMovements'
import { movement } from 'utils/types/movement'
import { movementsResponseApi } from 'utils/types/movementsResponseApi'

const URL = 'https://rickandmortyapi.com/api/character/'

export default function useMovements() {
	const [movements, setMovements] = useState<Array<movement>>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string>()

	const getMovements = (): Promise<movementsResponseApi> => {
		setLoading(true)
		return fetch(URL)
			.then((response) => response.json())
			.catch((error) => setError(error.message))
	}

	useEffect(() => {
		getMovements()
			.then((movement) => {
				setLoading(false)
				setMovements(mapResponseApiToMovements(movement.results))
			})
			.catch((error) => setError(error.message))
	}, [])

	return { movements, loading, error }
}
