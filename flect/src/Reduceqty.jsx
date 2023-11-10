
const Reduceqty = (data, url) => {

    async function asyncReduce(){
         
         console.log(data)
        const qty=Number(data.qty)
    const reduceTheQty=qty + 1
        const allPropsData = {
            name: data.name,
            Description: data.Description,
            price: data.price,
            qty: reduceTheQty,
            id: data.id,
            src: data.src,
            alt:data.alt,
            added: data.added
          }
          fetch(url,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(allPropsData),
          }).then((res) => {
           if (res.status === 500) {
             throw Error("same id");
           }else{console.log("completed")
           
            }
            }).catch(err => {
              console.log(err.message);
            });
    }
    asyncReduce()
}
 
export default Reduceqty;