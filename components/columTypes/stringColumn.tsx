import { Column, ColumnType } from "../../models/row"

const StringColView = ({col}: {col: Column<ColumnType.String>}) => {
    return (
        <h1>{col.data}</h1>
    )
}

export default StringColView