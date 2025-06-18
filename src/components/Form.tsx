import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Submitted: ${name} <${email}>`)
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto text-left">
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="name">
          Name
        </label>
        <Input id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="email">
          Email
        </label>
        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  )
}
