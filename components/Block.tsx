"use client"

import type React from "react"

import { useState } from "react"
import BlockEditor from "./BlockEditor"

interface BlockProps {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  onSave: (id: string, data: any) => void
  onDelete: (id: string) => void
}

const Block: React.FC<BlockProps> = ({ id, title, description, link, imageUrl, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = (data: any) => {
    onSave(id, data)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <BlockEditor
        id={id}
        title={title}
        description={description}
        link={link}
        imageUrl={imageUrl}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
      />
    )
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {imageUrl && (
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors"
        >
          Visit Link
        </a>
      )}
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Block

