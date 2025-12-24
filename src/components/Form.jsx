import { useState } from "react"

function Form({ onNewLink }) {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    onNewLink({ name, url })

    setName("")
    setUrl("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="linkName">Link Name:</label>
      <input
        id="linkName"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <label htmlFor="linkURL">Link URL:</label>
      <input
        id="linkURL"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <br /><br />

      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form
