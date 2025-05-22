import { useState } from 'react'

function Surtchilgaa() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="default-black-text sm:pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 yeseva text-center">Сурталчилгаа байршуулах</h1>
        <p className="mulish mb-12 text-center">Хамтран ажиллах дэлгэрэнгүй мэдээллийг авах</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Нэр
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#480CA8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#480CA8] focus:border-transparent"
                placeholder="Нэрээ оруулна уу"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Овог
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#480CA8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#480CA8] focus:border-transparent"
                placeholder="Овогоо оруулна уу"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Утас
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#480CA8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#480CA8] focus:border-transparent"
                placeholder="Утасны дугаараа оруулна уу"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Имэйл хаяг
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#480CA8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#480CA8] focus:border-transparent"
                placeholder="Имэйл хаягаа оруулна уу"
              />
            </div>
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Байгууллагын нэр
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#480CA8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#480CA8] focus:border-transparent"
              placeholder="Байгууллагын нэрийг оруулна уу"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Мессэж
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-2 border border-[#480CA8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#480CA8] focus:border-transparent"
              placeholder="Мессэжээ бичнэ үү"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#480CA8] text-white rounded-lg hover:bg-[#3a0a87] transition-colors"
            >
              Илгээх
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Нэмэлт мэдээлэл хэрэгтэй бол бидэнтэй холбогдоорой</p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 border border-[#480CA8] text-[#480CA8] rounded-lg hover:bg-[#480CA8] hover:text-white transition-colors"
          >
            Холбоо барих
          </a>
        </div>
      </div>
    </div>
  )
}

export default Surtchilgaa
