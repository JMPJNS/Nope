import { Column, ColumnType } from "../models/row"
import DateColView from "./columTypes/dateColumn"
import NumberColView from "./columTypes/numberColumn"
import StringColView from "./columTypes/stringColumn"

const ColView = ({col}: {col: Column<ColumnType>}) => {
    const ColContainer = ({children}: any) => {
        return (
            <div key={col.id}>
                {children}
            </div>
        )
    }
    
    switch(col.type) {
        case ColumnType.String:
            return (<ColContainer>
                <StringColView col={col as any}></StringColView>
            </ColContainer>)
            
        case ColumnType.Number:
            return (<ColContainer>
                <NumberColView col={col as any}></NumberColView>
            </ColContainer>)

        case ColumnType.Date:
            return (<ColContainer>
                <DateColView col={col as any}></DateColView>
            </ColContainer>)
            
        default:
            return (<ColContainer>
                <StringColView col={col as any}></StringColView>
            </ColContainer>)
    }
}

export default ColView
