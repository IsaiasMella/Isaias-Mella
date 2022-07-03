import React, { Component } from 'react'
import './DownloadCV.css'

class DownloadCV extends Component {
    componentDidMount() {
        if (typeof window.orientation !== "undefined"){
            document.getElementById('cv-movile').click()
            window.close()
        }
    }
    render() {
        return (
            <div className='cv__container' >
                <object
                    className='cv'
                    data={require('../../../Docs/CV_Mella_Isaias.pdf')}
                    type='application/pdf'
                >
                    <a href={require('../../../Docs/CV_Mella_Isaias.pdf')} id='cv-movile'
                    download='Mella-Isaias-CV'
                    ></a>
                </object>
            </div>
        );
    }

}

export default DownloadCV