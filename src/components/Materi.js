import React from 'react'
import Sejarah from './materi/Sejarah'
import { Switch, Route } from 'react-router-dom'
import ArtiPeluang from './materi/ArtiPeluang'
import RuangSampel from './materi/RuangSampel'
import Kejadian from './materi/Kejadian'
import Peluang from './materi/Peluang'

const Materi = () => {
    return (
        <div className="lg:py-8 lg:px-56">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-start justify-between">
                    <Switch>
                        <Route path="/materi/sejarah" component={Sejarah} />
                        <Route path="/materi/arti-peluang" component={ArtiPeluang} />
                        <Route path="/materi/ruang-sampel" component={RuangSampel} />
                        <Route path="/materi/kejadian" component={Kejadian} />
                        <Route path="/materi/peluang" component={Peluang} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Materi
