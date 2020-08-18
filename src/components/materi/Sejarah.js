import React from 'react'

import FermatAndPascal from '../../assets/img/fermat-&-pascal.jpg'

const Sejarah = () => {
    return (
        <div className="w-full rounded p-4 lg:border shadow-md border-myColor-second">
            <div className="bg-myColor-second text-gray-100 text-lg font-medium p-3 mb-6 rounded-md" >
                Darimana Peluang Berasal?
            </div>
            <div className="w-full flex justify-center mb-6">
                <div className="max-w-lg">
                    <img src={FermatAndPascal} alt="" />
                </div>
            </div>
            <div>
                <p>
                    Ada banyak cerita tentang sejarah peluang, namun yang paling terkenal adalah kisah tentang Fermat dan Pascal dengan seorang penjudi. Yups, siapa yang tidak mengenal dua ilmuan terkenal ini karena sumbangsih mereka dalam matematika sangat luar biasa.
                    </p>
                <br />
                <p>
                    Singkat cerita ketika dewasa Pascal diperkenalkan dengan seorang nobelis Perancis, Chevalier de Mere, yang  juga  seorang  penjudi. Pascal dan de Mere banyak berdiskusi mengenai dasar-dasar matematika yang terkait judi. Pada tahun 1654 Chevalier de Mere menemukan sistem penjudian. Ketika  Chevalier kalah dalam berjudi  dia  meminta  Blaise Pascal menganalisis sistim  perjudiannya.   Saat  itulah   Fermat  dan  Pascal  mulai  melakukan  kegiatan  surat menyurat  terkenal  mengenai  persoalan-persoalan  dalam permainan  judi  ini  yang  dikaji secara matematika dan menemukan bahwa sistim yang dipunyai oleh Chevalier akan mengakibatkan peluang dia kalah 51 %.
                    </p>
                <br />
                <p>
                    Pascal kemudian menulis salah satu topik yang dilontarkan oleh  de   Mere   yang   dikenal   dengan   problème  des  partis  (problem  of  points). Pascal menemukan solusi masalah tersebut yang diistilahkan dengan Aleae Geometria yang dijelaskan di Académie Parisienne. Pascal menuliskan teori Traité du Triangle Arithmétiqueyang dipublikasikan pada tahun 1665.
                    </p>
                <br />
                <p>
                    Apa yang ditulis Pascal tersebut kemudian berkembang menjadi ilmu Peluang yang kita kenal pada saat ini.
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

export default Sejarah
