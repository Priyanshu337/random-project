import React from 'react'
import ShowImage from '../component/ShowImage'

interface imgDisp {
    value: any
}

function ImagePage({ value }: imgDisp) {
    return (
        <>
            <ShowImage val={value} />
        </>
    )
}

export default ImagePage;