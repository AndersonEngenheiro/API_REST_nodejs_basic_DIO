import db from "../db";
import{User, Cat} from "../models/user.model";


class UserRepository {

    async findAllUser(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const result = await db.query<User>(query);
        const rows = result.rows;
        return rows ;
    }

    async findAllCats(): Promise<Cat[]> {
        const query = `
            SELECT * FROM test_sushi
        `;

        console.log(query)

        const result = await db.query<Cat>(query);
        const rows = result.rows;
        return rows ;
    }
}

export default new UserRepository();