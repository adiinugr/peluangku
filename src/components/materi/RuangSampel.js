import React from 'react'

import Wasit from '../../assets/img/wasit.jpg'
import MateriComp from './MateriComp'

const RuangSampel = () => {
    return (
        <MateriComp
            title="Apa Itu Ruang Sampel?"
            image={Wasit}
            content={
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
            }
            prevLink="/materi/arti-peluang"
            nextLink="/test/ruang-sampel"
        />
    )
}

export default RuangSampel
