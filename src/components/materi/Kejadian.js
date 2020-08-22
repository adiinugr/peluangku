import React from 'react'

import Koin from '../../assets/img/koin.jpg'
import MateriComp from './MateriComp'

const Kejadian = () => {
    return (
        <MateriComp
            title="Membahas Kejadian pada Peluang"
            image={Koin}
            content={
                <div>
                    <p>
                        Sebelumnya kita sudah belajar tentang ruang sampel. Jika ruang sampel merupakan himpunan semua hasil dari suatu percobaan, maka yang dimaksud
                    </p>
                    <br />
                    <div className="bg-teal-100 p-4 border-t-2 border-b-2 border-teal-700">
                        <p className="font-medium text-teal-800 text-center"> <strong>kejadian</strong> adalah himpunan hasil yang diinginkan dari suatu percoban.</p>
                    </div>
                    <br />
                    <p>
                        Misal kita melempar sebuah koin, hasil apakah yang kita inginkan untuk terjadi? Atau dalam hal ini sisi manakah yang kita harapkan muncul? Jika kita ingin muncul gambar berarti kejadiannya adalah gambar. Dengan notasi matematika kita bisa menulis <strong>A = &#123; G &#125;</strong>. A merupakan simbol untuk kejadian walaupun ini tidak paten. Di beberapa buku ada yang menyebut E.
                </p>
                    <br />
                    <p>
                        Selanjutnya bisa ditebak, apa bila kita menginginkan muncul mata dadu ganjil pada pelemparan sebuah dadu maka kejadiannya adalah <strong>A = &#123; 1, 3, 5 &#125;</strong>. Mudah bukan pembahasan tentang kejadian? Selanjutnya kita akan belajar bagaimana menentukan peluang suatu kejadian.
                    </p>
                </div>
            }
            prevLink="/materi/ruang-sampel"
            nextLink="/test/kejadian"
        />
    )
}

export default Kejadian
