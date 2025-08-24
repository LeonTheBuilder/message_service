const a = require('aframework');
const db = a.db;
const DataTypes = a.models.DataTypes;

const Sms = db.define('Sms',
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        phone: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: { //
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        sifStatus: { //
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: 'msg_sms',
        freezeTableName: true,
        charset: 'utf8mb4',
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
                fields: ['phone'],
                unique: false,
            },
        ],
    }
);

module.exports = {
    Sms,
};
