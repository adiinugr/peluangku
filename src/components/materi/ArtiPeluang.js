import React from 'react'

import PaperTest from '../../assets/img/paper-test.jpg'

const ArtiPeluang = () => {
    return (
        <div className="w-full rounded p-4 lg:border shadow-md border-myColor-second">
            <div className="bg-myColor-second text-gray-100 text-lg font-medium p-3 mb-6 rounded-md" >
                Apa Itu Peluang?
            </div>
            <div className="w-full flex justify-center mb-6">
                <div className="max-w-lg">
                    <img src={PaperTest} alt="" />
                </div>
            </div>
            <div>
                <p>
                    Kata <strong>peluang</strong> nampaknya sudah tidak asing lagi di telinga kita. Sering kita mendengar <em>"Peluangku masuk kampus ini kayaknya kecil deh"</em>, atau <em>"Aku gak belajar kemarin, jadi hampir gak ada peluang untuk lulus ujian"</em>. Dari sini kamu pasti bisa menebak atau mengira-ngira apa arti dari Peluang. Ya, kurang lebih maksudnya seberapa besar kemungkinan suatu kejadian bisa terjadi.
                    </p>
                <br />
                <p>
                    Nah, di matematika juga demikian. Hanya saja kita menyatakan peluang bukan dengan kata <em>kecil</em> atau <em>besar</em>, tapi menggunakan bilangan dari 0 sampai 1. Peluang 0 berarti mustahil terjadi sedangkan peluang 1 memiliki arti sebaliknya yaitu pasti terjadi. Jadi, jika seseorang bertanya apakah kamu punya peluang untuk sukses, jawab dengan lantang
                    </p>
                <br />
                <div className="bg-teal-100 p-4 border-t-2 border-b-2 border-teal-700">
                    <p className="font-medium text-teal-800 text-center">Ya, dan peluangku untuk sukses adalah 1</p>
                </div>
                <br />
                <p>
                    Ini bukan kesombongan tapi sebuah sikap optimis. Sehubungan dengan itu, kita pasti sering dihadapkan dengan sebuah pilihan. Biasanya kita dengan mudah bilang <em>"Pilih yang ini aja"</em> atau <em>"Yang itu lebih bagus"</em>. Namun apabila kita seorang pelaku bisnis tentu tidak bisa mengambil keputusan hanya dengan bermodal <em>feeling</em>. Nah, di sinilah kita gunakan konsep peluang. Dengan peluang kita bisa mendapatkan hasil yang akurat karena prosesnya menggunakan perhitungan secara matematis. Selanjutnya, hasil peluang ini kita gunakan sebagai dasar dari pengambilan keputusan.
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

export default ArtiPeluang
