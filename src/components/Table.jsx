function Table(){
    /* responsible for rendering the text head with the appropriate column*/
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </table>
    )
}
function Tablebody(){
    /*responsible for rendering the data for our table*/
    return (
        <tbody></tbody>
    )
}

export default Table