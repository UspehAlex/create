"use client"

import type React from "react"

import { useState } from "react"
import BlockEditor from "./BlockEditor"

interface CreateBlockButtonProps {
  onCreateBlock: (data: any) => void
}

const CreateBlockButton: React.FC<CreateBlockButtonProps> = ({ onCreateBlock }) => {
  const [isCreating, setIsCreating] = useState(false)

  const handleSave = (data: any) => {
    onCreateBlock(data)
    setIsCreating(false)
  }

  if (isCreating) {
    return <BlockEditor onSave={handleSave} onCancel={() => setIsCreating(false)} />
  }

  return (
    <button
      onClick={() => setIsCreating(true)}
      className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dark transition-colors mb-6"
    >
      Create New Block
    </button>
  )
}

export default CreateBlockButton

