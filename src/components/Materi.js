import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Sejarah from './materi/Sejarah'
import ArtiPeluang from './materi/ArtiPeluang'
import RuangSampel from './materi/RuangSampel'
import Kejadian from './materi/Kejadian'
import Peluang from './materi/Peluang'

import NotFound from './NotFound'

const Materi = () => {
    return (
        <div className="py-4 lg:py-8 lg:px-56 bg-gray-100">
            <div className="container mx-auto">
                <div className="bg-white">
                    <Switch>
                        <Route path="/materi/sejarah" component={Sejarah} />
                        <Route path="/materi/arti-peluang" component={ArtiPeluang} />
                        <Route path="/materi/ruang-sampel" component={RuangSampel} />
                        <Route path="/materi/kejadian" component={Kejadian} />
                        <Route path="/materi/peluang" component={Peluang} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Materi
