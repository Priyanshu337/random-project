import React from 'react'
import Comments from '../component/comment'

interface comment {
    value: any
}

function CommentPage({ value }: comment) {

    return (
        <div>
            <Comments value={value} />
        </div>
    )
}

export default CommentPage