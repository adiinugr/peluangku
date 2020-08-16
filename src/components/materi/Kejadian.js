import React from 'react'

import PaperTest from '../../assets/img/paper-test.jpg'

const Kejadian = () => {
    return (
        <div className="w-full rounded p-4 lg:border border-teal-600">
            <div className="bg-teal-700 text-white text-lg font-medium p-3 mb-6 rounded-md" >
                Membahas Kejadian pada Peluang
            </div>
            <div className="w-full flex justify-center mb-6">
                <div className="max-w-lg">
                    <img src={PaperTest} alt="" />
                </div>
            </div>
            <div>
                <p>
                    Sebelumnya kita sudah belajar tentang ruang sampel. Jika ruang sampel merupakan himpunan semua hasil dari suatu percobaan, maka yang dimaksud
                    </p>
                <br />
                <p>
                    <strong>kejadian</strong> adalah himpunan hasil yang diinginkan dari suatu percoban.
                    </p>
                <br />
                <p>
                    Misal kita melempar sebuah koin, hasil apakah yang kita inginkan untuk terjadi? Atau dalam hal ini sisi manakah yang kita harapkan muncul? Jika kita ingin muncul gambar berarti kejadiannya adalah gambar. Dengan notasi matematika kita bisa menulis <strong>A = &#123; G &#125;</strong>. A merupakan simbol untuk kejadian walaupun ini tidak paten. Di beberapa buku ada yang menyebut E.
                </p>
                <br />
                <p>
                    Selanjutnya bisa ditebak, apa bila kita menginginkan muncul mata dadu ganjil pada pelemparan sebuah dadu maka kejadiannya adalah <strong>A = &#123; 1, 3, 5 &#125;</strong>. Mudah bukan pembahasan tentang kejadian? Selanjutnya kita akan belajar bagaimana menentukan peluang suatu kejadian.
                    </p>
            </div>
            <div className="flex mt-6 justify-center">
                <div>
                    <button className="btn-prev-next rounded-l hover:bg-teal-700">
                        Prev
                    </button>
                </div>
                <div>
                    <button className="btn-prev-next rounded-r hover:bg-teal-700">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Kejadian
