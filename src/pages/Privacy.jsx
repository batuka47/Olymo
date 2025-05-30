function Privacy() {
  return (
    <div className="min-h-screen default-black-text sm:pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-2xl sm:text-3xl 2xl:text-5xl  text-2xl font-bold mb-6 yeseva text-center">Нууцлалын бодлого</h1>
        <p className="mulish mb-12 text-center">"Lorem Ipsum" ХХК-ийн Програм хангамжийн хэлтсээс энэхүү Нууцлалын бодлогыг гаргасан болно.Нууцлалын бодлого нь хэрэглэгчийн мэдээлэлтэй хэрхэн харилцдаг болохыг тодорхойлох юм. Нууцлалын бодлогын зорилго нь манай вебсайтад зочилж, хандаж буй уншигчтай холбоотой мэдээллийн аюулгүй байдлыг хангахад оршино.</p>

        <div className="space-y-8">
          <div className="prose max-w-none">
            <div className="space-y-4">
              <div className="flex items-start sm:ml-10 gap-3 ">
                <img src="/verify.svg" alt="verify" className="sm:w-10 sm:h-10 w-8 h-8 mt-1 flex-shrink-0" />
                <p className="text-black">НУУЦЛАЛЫН БОДЛОГО: Бид хэрэглэгчдээс ямар нэгэн мэдээллийг цуглуулдаггүй.</p>
              </div>

              <div className="flex items-start sm:ml-10 gap-3">
                <img src="/verify.svg" alt="verify" className="sm:w-10 sm:h-10 w-8 h-8 mt-1 flex-shrink-0" />
                <p className="text-black">Бид хэрэглэгчдийн IP хаягийг зөвхөн сэтгэгдэл хэсэгт л харуулахын тулд ашигладаг.</p>
              </div>

              <div className="flex items-start sm:ml-10 gap-3">
                <img src="/verify.svg" alt="verify" className="sm:w-10 sm:h-10 w-8 h-8 mt-1 flex-shrink-0" />
                <p className="text-black">Бид хэрэглэгчдийн байршлын мэдээллийг хянадаггүй бөгөөд цаашид ч хянахгүй.</p>
              </div>

              <div className="flex items-start sm:ml-10 gap-3">
                <img src="/verify.svg" alt="verify" className="sm:w-10 sm:h-10 w-8 h-8 mt-1 flex-shrink-0" />
                <p className="text-black">Бид гуравдагч талд танд бүтээгдэхүүн / үйлчилгээгээ сурталчлах боломжийг олгох зорилгоор тэдэнтэй ямар нэгэн мэдээллийг хуваалцдаггүй.</p>
              </div>

              <div className="flex items-start sm:ml-10 gap-3">
                <img src="/verify.svg" alt="verify" className="sm:w-10 sm:h-10 w-8 h-8 mt-1 flex-shrink-0" />
                <p className="text-black">Хэрэв таньд хэрэглэгчдийн хувийн мэдээлэл цуглуулах болон устгахтай холбоотой хүсэлт, гомдол байвал мэйл хаягаар хандаарай.</p>
              </div>

              <div className="flex items-start sm:ml-10 gap-3">
                <img src="/verify.svg" alt="verify" className="sm:w-10 sm:h-10 w-8 h-8 mt-1 flex-shrink-0" />
                <p className="text-black">Манай Нууцлалын бодлоготой холбоотой аливаа асуулт, сэтгэгдэл, хүсэлтийг мэйл хаягт ирүүлнэ үү.</p>
              </div>
            </div>
          </div>
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

export default Privacy 