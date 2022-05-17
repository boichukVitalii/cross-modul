import ReactDOM from 'react-dom'
import ResultContainer from './ResultContainer'

export const RenderResult = () => {
	ReactDOM.render(<ResultContainer />, document.getElementById('result'))
}