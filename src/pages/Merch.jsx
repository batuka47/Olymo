import { useState } from 'react'

function MerchOrderForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        color: 'Цагаан',
        size: 'XL',
    })
    
    const [selectedImage, setSelectedImage] = useState('/merchFront.png')
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        
        // Update image when color changes
        if (name === 'color') {
            if (value === 'Цагаан') {
                setSelectedImage('/merchFront.png')
            } else if (value === 'Хар') {
                setSelectedImage('/merchBack.png')
            }
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(formData, null, 2))
    }
  return (
    <div className="bg-white px-6 sm:py-12 sm:mt-32 flex flex-col items-center">
      <div className="max-w-6xl w-full rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image Section */}
        <div className="flex flex-col">
          <img src={selectedImage} alt="Olymo Merch" className="rounded-xl w-full object-contain" />
          <div className="flex gap-4 mt-4">
            {['/merchFront.png', '/merchBack.png', '/merchHar.png'].map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt="" 
                className={`w-16 h-16 rounded-lg hover:scale-105 transition cursor-pointer ${selectedImage === img ? 'border-2 border-purple-500' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center">
          <h2 className="sm:text-4xl text-xl yeseva font-bold mb-4">OLYMO OFFICIAL MERCH</h2>
          <p className="sm:text-2xl text-lg font-bold mb-2 sm:mt-8">Үнэ: <span className="text-black">79'000₮</span></p>
          <p className="mb-6 sm:text-xl text-base text-black sm:mt-8">Stay ready with Olymo platform</p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:mt-32">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700 mb-1">Нэр</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Бат-Энх"
                  className="border-2 border-purple-500 rounded-lg px-4 py-2"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700 mb-1">Өнгө</label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="border-2 border-purple-500 rounded-lg px-4 py-2"
                >
                  <option>Цагаан</option>
                  <option>Хар</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700 mb-1">Утас</label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+976 XXXX-XXXX"
                  className="border-2 border-purple-500 rounded-lg px-4 py-2"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-medium text-gray-700 mb-1">Хэмжээ</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="border-2 border-purple-500 rounded-lg px-4 py-2"
                >
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full hover:bg-purple-700 text-black border-2 border-purple-700 hover:text-white py-3 rounded-md text-lg font-semibold"
            >
              Илгээх
            </button>

            <p className="text-base text-purple-700 mt-2">
              ⓘ Тантай эргээд холбогдох учир та мэдээллээ зөв оруулна уу.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}


export default MerchOrderForm
