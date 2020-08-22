import React from 'react'

import Dadu from '../../assets/img/dadu.jpg'
import MateriComp from './MateriComp'

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


                    </div>
                    <br />
                    <p>
                        Jadi, peluang muncul mata dadu 6 pada pelemparan sebuah dadu adalah. Dari sini bisa dipahami bahwa nilai dari peluang bergantung pada kejadian dan ruang sampelnya. Bagaimana? Tidak sulit kan belajar peluang?
                    </p>
                </div>
            }
            prevLink="/materi/kejadian"
            nextLink="/finish-materi"
        />
    )
}

export default Peluang
