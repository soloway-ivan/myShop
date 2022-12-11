const { TableSchema, ColumnType, NativeFunction, ForeignKeyUpdateDeleteRule, JSONType } = require("postgres-schema-builder")
const pg = require('pg');
const { Entity, EntitySchema, PrimaryGeneratedColumn, Column, BaseEntity } = require("typeorm");


// @Entity()

module.exports = new EntitySchema({
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        password: {
            type: "varchar"
        }  
    }
})
// export class User extends BaseEntity{
//     @PrimaryGeneratedColumn()
//     id!: Number;

//     @Column()
//     email: string;

//     @Column()
//     password: string;
// }

// const userSchema = TableSchema({
//     email: {
//         type: ColumnType.Varchar,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: ColumnType.Integer,
//         required: true
//     }
// })

// module.exports = pg.model('users', userSchema)