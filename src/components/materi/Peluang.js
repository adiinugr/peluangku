import React from 'react'
import MathJax from 'react-mathjax2'

import Dadu from '../../assets/img/dadu.jpg'

const peluang = 'P(A)=(n(A))/(n(S))'
const peluangA = 'P(A)=(n(A))/(n(S))=1/6'
const seperEnam = '1/6'

const Peluang = () => {
    return (
        <div className="w-full rounded p-4 lg:border border-myColor-second">
            <div className="bg-myColor-second text-gray-100 text-lg font-medium p-3 mb-6 rounded-md" >
                Menentukan Peluang Suatu Kejadian
            </div>
            <div className="w-full flex justify-center mb-6">
                <div className="max-w-lg">
                    <img src={Dadu} alt="" />
                </div>
            </div>
            <MathJax.Context input='ascii'>
                <div>
                    <p>
                        Kenapa kita belajar ruang sampel dan kejadian sebelumnya? Alasannya adalah karena kita butuh itu untuk menentukan peluang. Yups, untuk ruang sampel S dan kejadian A dapat ditentukan <span className="font-medium">peluang kejadian A yaitu sama dengan banyak anggota A dibagi banyak anggota S</span>. Secara matematis dapat dirumuskan sebagai berikut.
                    </p>
                    <br />
                    <div className="text-center">
                        <MathJax.Node>{peluang}</MathJax.Node>
                    </div>
                    <br />
                    <p>Dengan:</p>
                    <div className="ml-8">
                        <p><em>P(A) = peluang kejadian A</em></p>
                        <p><em>n(A) = banyak anggota kejadian A</em></p>
                        <p><em>n(S) = banyak anggota ruang sampel</em></p>
                    </div>
                    <br />
                    <p>
                        Contoh termudah adalah ketika kita melempar sebuah dadu. Berapakah kira-kira peluang muncul mata dadu 6? Untuk menjawab pertanyaan tersebut kita perlu menentukan ruang sampel dan kejadiannya. Ruang sampelnya <span className="font-medium">S = &#123; 1, 2, 3, 4, 5, 6 &#125;</span> dan kejadiannya <span className="font-medium">A = &#123; 6 &#125;</span>. Maka dengan mudah dapat ditentukan <span className="font-medium">n(A) = 1</span> dan <span className="font-medium">n(S) = 6</span>. Sehingga diperoleh
                    </p>
                    <br />
                    <div className="text-center">

                        <MathJax.Node>{peluangA}</MathJax.Node>

                    </div>
                    <br />
                    <p>
                        Jadi, peluang muncul mata dadu 6 pada pelemparan sebuah dadu adalah <MathJax.Node inline>{seperEnam}</MathJax.Node>. Dari sini bisa dipahami bahwa nilai dari peluang bergantung pada kejadian dan ruang sampelnya. Bagaimana? Tidak sulit kan belajar peluang?
                    </p>
                </div>
            </MathJax.Context>
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
        </div >
    )
}

export default Peluang
