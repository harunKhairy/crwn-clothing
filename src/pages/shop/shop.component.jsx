import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPriview from '../../components/collection-priview/collection-preview'


class ShopPage extends React.Component {

    state = {
        collections: SHOP_DATA
    }

    render() {

        const { collections } = this.state
        return (
            <div className='shop-page'>
                {collections.map(( {id, ...otherCollectionProps }) => (
                    <CollectionPriview key={id} { ...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage