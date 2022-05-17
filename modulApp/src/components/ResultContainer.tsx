import Cube from '../classes/cube.class'
import RightTriangle from '../classes/rightTriangle.class'
import Tetrahedron from '../classes/tetrahedron.class'

const ResultContainer: React.FC = () => {
	const container = []
	// 	const num = parseInt((document.getElementById('quantity') as HTMLInputElement).value)
	for (let i = 0; i < 1; i++) {
		container.push(new Cube(Math.random()))
		container.push(new Tetrahedron(Math.random(), new RightTriangle(3, 4, 5)))
		container.push(new RightTriangle(3, 4, 5))
	}
	return (
		<div>
			{container.map((e, i) => {
				return <p key={i}>{e.show()}</p>
			})}
		</div>
	)
}

export default ResultContainer