import React from 'react'
import Sejarah from './materi/Sejarah'
import { Switch, Route } from 'react-router-dom'
import ApaItuPeluang from './materi/ApaItuPeluang'

const Materi = () => {
    return (
        <div className="lg:py-8 lg:px-56">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-start justify-between">
                    <Switch>
                        <Route path="/materi/sejarah" component={Sejarah} />
                        <Route path="/materi/arti-peluang" component={ApaItuPeluang} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Materi
