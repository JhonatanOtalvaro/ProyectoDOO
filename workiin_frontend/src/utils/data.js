//query para obtener el usuario

export const userQuery = (userId) =>{
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}