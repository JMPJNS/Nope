import { Column, ColumnType, Row } from "../models/row"
import { v4 as uuidv4 } from 'uuid'

class RowService {
    rowDb: Row[] = [
        {
            id: uuidv4(),
            created: new Date().toISOString(),
            colls: [
                new Column(ColumnType.Number, 2),
                new Column(ColumnType.String, "Hello"),
                new Column(ColumnType.Date, new Date())
            ]
        }
    ]

    async addRow(r: Row) {
        if (this.rowDb.find(x => x.id === r.id)) return
        this.rowDb.push(r)
    }

    async getRow(id: string) {
        return this.rowDb.find(x => x.id === id)
    }

    async deleteRow(id: string) {
        this.rowDb = this.rowDb.filter(x => x.id !== id)
    }

    async getRows(skip: number = 0, take: number = this.rowDb.length) {
        return this.rowDb
    }

    async init() {
        return this
    }
}

export default await new RowService().init()