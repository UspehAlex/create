"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Block from "./Block"
import CreateBlockButton from "./CreateBlockButton"

interface ContentPageProps {
  title: string
}

const ContentPage: React.FC<ContentPageProps> = ({ title }) => {
  const [blocks, setBlocks] = useState([])

  useEffect(() => {
    fetchBlocks()
  }, [])

  const fetchBlocks = async () => {
    const response = await fetch("/api/blocks")
    const data = await response.json()
    setBlocks(data)
  }

  const handleCreateBlock = async (data: any) => {
    const response = await fetch("/api/blocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const newBlock = await response.json()
    setBlocks([...blocks, newBlock])
  }

  const handleSaveBlock = async (id: string, data: any) => {
    await fetch("/api/blocks", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...data }),
    })
    setBlocks(blocks.map((block) => (block._id === id ? { ...block, ...data } : block)))
  }

  const handleDeleteBlock = async (id: string) => {
    await fetch("/api/blocks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    setBlocks(blocks.filter((block) => block._id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <CreateBlockButton onCreateBlock={handleCreateBlock} />
      {blocks.map((block) => (
        <Block
          key={block._id}
          id={block._id}
          title={block.title}
          description={block.description}
          link={block.link}
          imageUrl={block.imageUrl}
          onSave={handleSaveBlock}
          onDelete={handleDeleteBlock}
        />
      ))}
    </div>
  )
}

export default ContentPage

