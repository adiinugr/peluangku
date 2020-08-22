import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TestSejarah from './test/TestSejarah'
import TestArtiPeluang from './test/TestArtiPeluang'
import TestRuangSampel from './test/TestRuangSampel'
import TestKejadian from './test/TestKejadian'
import TestPeluang from './test/TestPeluang'

import NotFound from './NotFound'

const Test = () => {
    return (
        <div className="py-4 lg:py-8 lg:px-56 bg-gray-100" style={{ height: "calc(100vh - 5rem)" }}>
            <div className="container mx-auto">
                <div className="bg-white">
                    <Switch>
                        <Route path='/test/sejarah' component={TestSejarah} />
                        <Route path='/test/arti-peluang' component={TestArtiPeluang} />
                        <Route path='/test/ruang-sampel' component={TestRuangSampel} />
                        <Route path='/test/kejadian' component={TestKejadian} />
                        <Route path='/test/peluang' component={TestPeluang} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Test
