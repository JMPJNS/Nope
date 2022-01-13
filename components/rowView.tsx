import { Row } from "../models/row"
import ColView from "./columnView"

interface IRowViewProps {
    row: Row
}

const RowView: React.FC<IRowViewProps> = ({row}) => {
    return (
        <div key={row.id}>
            {row.colls.map(c => <ColView key={c.id} col={c}></ColView>)}
        </div>
    )
} 

export default RowView
