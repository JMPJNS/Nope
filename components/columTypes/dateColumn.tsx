import { Column, ColumnType } from "../../models/row"

const DateColView = ({col}: {col: Column<ColumnType.Date>}) => {
    return (
        <p>{col.data?.toDateString()}</p>
    )
}

export default DateColView