import { Column, ColumnType } from "../../models/row"

const NumberColView = ({col}: {col: Column<ColumnType.Number>}) => {
    return (
        <p>{col.data}</p>
    )
}

export default NumberColView