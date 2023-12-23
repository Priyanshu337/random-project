import React from 'react'
import UserSearch from '../component/UserSearch'


interface namepage {
    value: any
    setValue: any
}

function NamePage({ value, setValue }: namepage) {


    return (
        <div>
            < UserSearch setValue={setValue} value={value} />
        </div>
    )
}

export default NamePage;