function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }
  
  const TableBody = ({ linkData, removeLink }) => {
    return (
      <tbody>
        {linkData.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>
              <a href={row.url} target="_blank" rel="noreferrer">
                {row.url}
              </a>
            </td>
            <td>
              <button onClick={() => removeLink(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    )
  }
  
  function Table(props) {
    return (
      <table>
        <TableHeader />
        <TableBody
          linkData={props.linkData}
          removeLink={props.removeLink}
        />
      </table>
    )
  }
  
  export default Table
  