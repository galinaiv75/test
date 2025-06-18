import { useState } from 'react'
import Form from './Form'
import { Button } from './ui/button'

export default function FormDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Form</Button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <Form onSubmitted={() => setOpen(false)} />
            <div className="mt-4 text-right">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
