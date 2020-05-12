import React from 'react'
import Stores from './Stores'

export default function StoreList() {
    return (
        <div>
            <Stores description='For the best kiddies wear' name='Kids Wears' id='1' />
            <Stores description='Newly imported and cut to size' name='Gucci Wears' id='2' />
            <Stores description='Only the best classics' name='Vintage Wears' id='3' />
        </div>
    )
}
