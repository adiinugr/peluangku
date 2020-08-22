import React from 'react'
import MathJax from 'react-mathjax'

import Dadu from '../../assets/img/dadu.jpg'
import MateriComp from './MateriComp'

const tex = `P(A)=\\frac{n(A)}{n(S)}`
const tex2 = `P(A)=\\frac{n(A)}{n(S)}=\\frac{1}{6}`
const tex3 = `\\frac{1}{6}`

const Peluang = () => {
    return (
        <MateriComp
            title="Menentukan Peluang Suatu Kejadian"
            image={Dadu}
            content={
                <div>
                    <p>
                        Kenapa kita belajar ruang sampel dan kejadian sebelumnya? Alasannya adalah karena kita butuh itu untuk menentukan peluang. Yups, untuk ruang sampel S dan kejadian A dapat ditentukan <span className="font-medium">peluang kejadian A yaitu sama dengan banyak anggota A dibagi banyak anggota S</span>. Secara matematis dapat dirumuskan sebagai berikut.
                    </p>
                    <br />
                    <div className="text-center">
                        <MathJax.Provider>
                            <MathJax.Node formula={tex} />
                        </MathJax.Provider>
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
                        Contoh termudah adalah ketika kita melempar sebuah dadu. Berapakah kira-kira peluang muncul mata dadu 6? Untuk menjawab pertanyaan tersebut kita perlu menentukan ruang sampel dan kejadiannya. Ruang sampelnya <span className="font-medium">S = &#123;1, 2, 3, 4, 5, 6&#125;</span> dan kejadiannya <span className="font-medium">A = &#123;6&#125;</span>. Maka dengan mudah dapat ditentukan <span className="font-medium">n(A) = 1</span> dan <span className="font-medium">n(S) = 6</span>. Sehingga diperoleh
                    </p>
                    <br />
                    <div className="text-center">
                        <MathJax.Provider>
                            <MathJax.Node formula={tex2} />
                        </MathJax.Provider>
                    </div>
                    <br />
                    <p>
                        <MathJax.Provider>
                            Jadi, peluang muncul mata dadu 6 pada pelemparan sebuah dadu adalah <MathJax.Node inline formula={tex3} />. Dari sini bisa dipahami bahwa nilai dari peluang bergantung pada kejadian dan ruang sampelnya. Bagaimana? Tidak sulit bukan belajar peluang?
                         </MathJax.Provider>
                    </p>
                </div>
            }
            prevLink="/materi/kejadian"
            nextLink="/finish-materi"
        />
    )
}

export default Peluang
