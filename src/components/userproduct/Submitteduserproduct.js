import { useState, useEffect } from 'react';
import Fruits from '../farmers/fruits';
import Cereals from '../farmers/cereals';
import NutsAndSeeds from '../farmers/nutsandseeds';
import SpicesAndHearbs from '../farmers/spicesandhearb';
import StemAndTubers from '../farmers/stemandtuber';
import { firestore } from '../../firebase/firebase.utils';
import "tachyons";
import {
  getDocs,
  collection,
  query,
  orderBy
} from 'firebase/firestore';


const ProductSubmitted = () =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllFoodItems = async () => {
        const items = await getDocs(
            query(collection(firestore, 'foodBank'), orderBy('id', 'desc'))
        );
        setProducts(items.docs.map(doc => doc.data()));
    }
    getAllFoodItems();
    }, []);

    const ProductCategory = [
        {
          title: 'Fruits',
          components: <Fruits products={products} />,
          link: '/fruits'
        },
        {
          title: 'Cereals & Legumes',
          components: <Cereals products={products} />,
          link: '/cereals'
        },
        {
          title: 'Stems & Tubers',
          components: <StemAndTubers products={products}  />,
          link: '/stemandtubers'
        },
        {
          title: 'Spices & Hearbs',
          components: <SpicesAndHearbs products={products}  />,
          link: '/spicesandhearbs'
        },
        {
          title: 'Nuts & Seeds',
          components: <NutsAndSeeds products={products}  />,
          link: '/nutsandseeds'
        }
      ];

      return (
        <div>
        
          {
            ProductCategory.map((val, key) => {
              return (
                <main key={key}>
                <span className='product-title'>{val.title}</span>
                {val.components}
                </main>               
              )
            })
          }
   
       </div>
    );

}

export default ProductSubmitted;