import db from "../db";
import{User, Cat} from "../models/user.model";


export const UserRepository_func = async() => {

    async function findAllUser() {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const result = await db.query<User>(query);
        const rows = result.rows;
        return rows ;
    }

    async function findAllCats(){
        const query = `
            SELECT * FROM test_sushi
        `;

        console.log(query)

        const result = await db.query<Cat>(query);
        const rows = result.rows;
        return rows ;
    }

    return {
        findAllUser,
        findAllCats

    }
}


// export default new UserRepository();