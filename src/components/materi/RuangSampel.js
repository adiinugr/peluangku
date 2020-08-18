import React from 'react'

import Wasit from '../../assets/img/wasit.jpg'

const RuangSampel = () => {
    return (
        <div className="w-full rounded p-4 lg:border border-myColor-second">
            <div className="bg-myColor-second text-gray-100 text-lg font-medium p-3 mb-6 rounded-md" >
                Apa Itu Ruang Sampel?
            </div>
            <div className="w-full flex justify-center mb-6">
                <div className="max-w-lg">
                    <img src={Wasit} alt="" />
                </div>
            </div>
            <div>
                <p>
                    Ketika seorang wasit melempar koin sebelum kick of kira-kira apa yang muncul? Ya, bisa gambar bisa juga angka. Contoh lain ketika kita melempar sebuah dadu saat bermain ular tangga, mata dadu berapakah yang mungkin muncul?
                    Tentunya bisa 1, 2, 3, 4, 5, dan juga 6. Kemunkinan-kemungkinan inilah yang kita sebut sebagai ruang sampel.
                    </p>
                <br />
                <div className="bg-teal-100 p-4 border-t-2 border-b-2 border-teal-700">
                    <p className="font-medium text-teal-800 text-center"> Jadi, <strong>ruang sampel</strong> adalah himpunan semua kemungkinan hasil dari suatu percobaan, dilambangkan dengan S.</p>
                </div>
                <br />
                <p>
                    Karena ruang sampel berbentuk himpunan, maka ke depan kita akan menuliskannya dengan notasi himpunan. Misal kita diminta untuk menentuan ruang sampel dari pelemparan <strong>sebuah koin</strong>, maka jawabanya adalah <strong>S = &#123; A, G &#125;</strong>. A berati angka dan G berarti gambar. Sedangkan ruang sampel dari pelemparan <strong>sebuah dadu</strong> adalah <strong>S = &#123; 1, 2, 3, 4, 5, 6 &#125;</strong>. Dari sini bisa dipahami bahwa ruang sampel bisa berbeda-beda bergantung dari kejadiannya.
                    </p>
            </div>
            <div className="flex mt-6 justify-center">
                <div>
                    <button className="btn-prev-next rounded-l">
                        Prev
                    </button>
                </div>
                <div>
                    <button className="btn-prev-next rounded-r">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RuangSampel
