import { useState } from 'react'

function Contact() {
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
    <div className="min-h-screen default-black-text sm:pt-32 sm:pb-20 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="sm:text-3xl text-2xl font-bold mb-6 yeseva text-center">Холбоо барих</h1>

        <div className="flex flex-col gap-12 mb-16 ">
          <div className="space-y-8 w-full flex flex-col sm:flex-row justify-between">
            <div className="flex items-start gap-4 sm:w-1/3">
              <img src="/gpsContact.svg" alt="address" className="w-16 h-16 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Хаяг</h3>
                <p className="text-gray-600">БЗД, 25 хороо, Амжилт Кибер сургууль</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:w-1/3">
              <img src="/msgContact.svg" alt="email" className="w-16 h-16 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Цахим хаяг</h3>
                <p className="text-gray-600">olymo.contact@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:w-1/3">
              <img src="/callContact.svg" alt="phone" className="w-16 h-16 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium mb-1">Утас</h3>
                <p className="text-gray-600">+976 89195406</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="sm:text-3xl text-2xl font-bold mb-6 yeseva text-center">Асуулт, санал, хүсэлт гарвал</h1>
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
        </div>
      </div>
    </div>
  )
}

export default Contact
