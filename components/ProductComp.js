import Product from "./Product";

function ProductComp({ products }) {
 return (
     <div className="grid grid-cols-1 grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:mt-[-100px] lg:mt-[-150px] xl:mt-[-180px]">
         {products?.slice(0,4).map(({id, title, price, description, category, image, rating}) => {
              return <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
         })}
         <img
             className="col-span-full "
             src="https://links.papareact.com/dyz"
             alt="advertisement"
         />
         <div className="col-span-2" >
            {products?.slice(4,5).map(({id, title, price, description, category, image, rating}) => {
                return <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
        })}
         </div>

         {products?.slice(5).map(({id, title, price, description, category, image, rating}) => {
                return <Product key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
        })}
          
    </div>
  )
}

export default ProductComp;

