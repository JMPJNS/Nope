import { v4 as uuidv4 } from 'uuid'

export class Row {
    id: string
    colls: Column<ColumnType>[]
    created: string

    constructor() {
        this.id = uuidv4()
        this.colls = []
        this.created = new Date().toISOString()
    }
}

export class Column<T extends ColumnType> {
    id: string
    type: T
    data?: ColumnDataType<T>
    created: string

    constructor(type: T, data?: ColumnDataType<T>) {
        this.id = uuidv4()
        this.type = type
        this.created = new Date().toISOString()
        this.data = data
    }
}

export enum ColumnType {
    Number,
    String,
    Boolean,
    Date,
    Timespan,
    Image,
    ColumnReference,
    RowReference,
    Note
}

type ColumnDataType <K extends ColumnType> =
    K extends ColumnType.Number ? number :
    K extends ColumnType.String ? string :
    K extends ColumnType.Boolean ? boolean :
    K extends ColumnType.Date ? Date :
    K extends ColumnType.Timespan ? {start: Date, end: Date} :
    K extends ColumnType.Image ? string : // URL To Image
    K extends ColumnType.ColumnReference ? string : // id to other Column
    K extends ColumnType.RowReference ? string : // id to other Row
    K extends ColumnType.Note ? string : any // markdown stored as string