import { useState } from 'react'

function Redakts() {
  const sections = [
    {
      title: "Ерөнхий зарчим",
      content: "Олимо платформ дээр байршуулсан бүх мэдээлэл нь үнэн зөв, найдвартай, олон нийтийн ашиг сонирхолд нийцсэн байна. Мэдээлэл байршуулахдаа дараах зарчмуудыг баримтласан болно:",
      points: [
        "Үнэн зөв, баримт дээр суурилсан мэдээлэл",
        "Хувийн ашиг сонирхолгүй, шударга хандлага",
        "Хүний эрх, нууцлалыг хүндэтгэх",
        "Олон нийтийн аюулгүй байдлыг хангах"
      ]
    },
    {
      title: "Мэдээллийн чанар",
      content: "Байршуулах мэдээлэл нь дараах шаардлагыг хангасан байна:",
      points: [
        "Грамматик, орфографийн алдаагүй",
        "Тодорхой, ойлгомжтой хэл дээр бичигдсэн",
        "Зохих зураг, видео материалтай",
        "Эх сурвалж, мэдээллийн эрхтэй"
      ]
    },
    {
      title: "Хориотой мэдээлэл",
      content: "Дараах төрлийн мэдээллийг байршуулахыг хориглосон болно:",
      points: [
        "Худал мэдээлэл, мэдээллийн халдлага",
        "Хүнлэг бус, хүндэтгэлгүй агуулга",
        "Хувийн нууц мэдээлэл",
        "Хууль зөрчсөн агуулга",
        "Ялгаварлан гадуурхах, хүндэтгэлгүй хандлага"
      ]
    },
    {
      title: "Зураг, видео материал",
      content: "Мэдээлэлтэй хамт байршуулах зураг, видео материал нь:",
      points: [
        "Өндөр чанартай, тодорхой",
        "Зохих хэмжээтэй (зураг: 1200x800px эсвэл түүнээс дээш)",
        "Зөвшөөрөлтэй, эрхтэй",
        "Мэдээллийн агуулгатай холбоотой"
      ]
    },
    {
      title: "Мэдээлэл байршуулах процесс",
      content: "Мэдээлэл байршуулах процесс дараах алхмуудаар явагддаг:",
      points: [
        "Мэдээллийг бүрдүүлэх, бэлтгэх",
        "Редакцийн багт илгээх",
        "Шалгалт, баталгаажуулалт",
        "Засвар, залруулга хийх",
        "Платформ дээр байршуулах"
      ]
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="default-black-text sm:pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold yeseva mb-12 text-center">Редакцийн ёс зүй</h1>
        
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className="border border-[#480CA8] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-black/5 transition-colors"
                onClick={() => toggleSection(index)}
              >
                <span className="font-medium text-lg">{section.title}</span>
                <span className="text-xl text-[#480CA8]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4">
                  <p className="text-gray-500 mb-4">{section.content}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-600">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

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

export default Redakts
