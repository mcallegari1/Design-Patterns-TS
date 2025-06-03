import PermissionType from "./PermissionType";

interface DataBaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
    {
        email: 'admin@admin.com',
        password: 'admin',
        permission: PermissionType.ADMIN,
    },
    {
        email: 'mateus@mateus.com',
        password: 'teste123',
        permission: PermissionType.USER
    }
];

export default DataBase;