"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Heart, Plus, Minus } from "lucide-react"

export default function CreativeProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = {
    name: "Quantum X Smartwatch",
    price: 299.99,
    description:
      "Experience the future on your wrist with the Quantum X Smartwatch. Featuring an always-on OLED display, advanced health monitoring, and seamless connectivity, this smartwatch is your perfect companion for a connected lifestyle.",
    images: [
      "/placeholder.svg?height=400&width=400&text=Front",
      "/placeholder.svg?height=400&width=400&text=Side",
      "/placeholder.svg?height=400&width=400&text=Back",
    ],
    features: ["Always-on OLED display", "Heart rate & ECG monitoring", "5-day battery life", "Water-resistant (50m)"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 flex flex-col justify-between"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-3xl font-semibold mb-6"
              >
                ${product.price.toFixed(2)}
              </motion.p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-600 text-white p-2 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={20} />
                </motion.button>
                <span className="text-2xl font-semibold">{quantity}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-600 text-white p-2 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={20} />
                </motion.button>
              </div>
              <motion.button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </motion.button>
              <motion.button
                className="w-full border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-full font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </motion.button>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={`Product image ${selectedImage + 1}`}
                className="w-4/5 h-auto object-cover rounded-2xl shadow-lg"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {product.images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    selectedImage === index ? "bg-purple-600" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>
        <motion.div
          layout
          className="p-8 bg-gradient-to-br from-purple-50 to-blue-50"
        >
          <motion.button
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            className="flex items-center space-x-2 font-semibold text-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Product Details</span>
            <motion.span animate={{ rotate: isDescriptionOpen ? 180 : 0 }}>▼</motion.span>
          </motion.button>
          <AnimatePresence>
            {isDescriptionOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-4 text-gray-600">{product.description}</p>
                <h3 className="font-semibold mt-4 mb-2 text-purple-600">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}