import { useState } from 'react'

function FAQ() {
  const faqs = [
    {
      question: "Олимо гэж юу вэ?",
      answer: "Олимо бол Монголын Их Сургуулиуд, ЕБС-ын сурагчид төдийгүй дэлхийн хаанаас ч нэвтрэх боломжтой түргэн шуурхай, товч тодорхой мэдээ мэдээллийг хүргэдэг боловсролын нэвтэрхий платформ юм."
    },
    {
      question: "Олимо дээр ямар мэдээлэл байршуулах боломжтой вэ?",
      answer: "Олимо дээр боловсрол, олимпиад, тэмцээн уралдаан, спорт, технологи, шинжлэх ухаан, дэлхий дахь сонин хачин, эвент гэх мэдээ мэдээллүүдийг байршуулах боломжтой."
    },
    {
      question: "Олимо дээр хэрхэн 'Онцлох' мэдээ, мэдээлэл байршуулах вэ?",
      answer: "Олимо дээр онцлох мэдээ мэдээлэл байршуулахын тулд байгууллагууд болон хувь хүмүүс эхлэж бидэнтэй холбоо барин төлбөрийн мэдээлэлтэй танилцсаны дараагаар, мэйлээр бидэнд мэдээгээ илгээнэ. Мэдээлэл илгээхдээ дараах зүйлийг оруулах хэрэгтэй: Мэдээний нэр, тайлбар, дэлгэрэнгүй мэдээлэл, огноо цаг, хамаарах ангилал (олимпиад,боловсрол, эвент гэх мэт), мэдээлэлтэй хамаарах зураг шаардлагатай. Илгээгдсэн мэдээг бид шинжилж, зөвшөөрснөөр Олимо дээр 'Онцлох' ангилалд байршуулах болно."
    },
    {
      question: "Олимо платформтой хамтарч ажиллана гэж юу гэсэн үг вэ?",
      answer: "Олимо платформтой хамтарч ажиллана гэдэг нь Олимо платформ нь бусад байгууллагуудтай мэдээ мэдээлэл, олимпиадыг нэгдсэн байдлаар түгээх, байгууллагуудын үйл ажиллагааг Олимогоор дамжуулан олон нийтэд хүргэх боломж нээгдэхийг илэрхийлнэ."
    },
    {
      question: "Олимо дээр мэдээлэл байршуулахдаа ямар шаардлага тавигддаг вэ?",
      answer: "Мэдээлэл байршуулахдаа үнэн зөв, найдвартай мэдээлэл байх, зохих зураг материалтай байх, редакцийн ёс зүйг баримтлах шаардлага тавигддаг."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className=" default-black-text sm:pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold yeseva mb-12 text-center">Түгээмэл асуултууд</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#480CA8] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-black/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl text-[#480CA8]">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Өөр асуулт байвал бидэнтэй холбогдоорой</p>
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

export default FAQ
