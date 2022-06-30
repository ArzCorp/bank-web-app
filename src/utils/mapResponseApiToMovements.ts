import { movement } from './types/movement'
import { movementsResponseApi } from './types/movementsResponseApi'

export const mapResponseApiToMovements = (
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
