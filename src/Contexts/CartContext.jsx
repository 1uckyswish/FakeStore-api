import { createContext, useState} from "react";
//**Start off by creating a context to be set global for the whole page to use it **/

//**This is what will be used to access the data globally **/
export const HeartedContext = createContext()

export default function HeartedContextProvider(props){
    //**create state to hold the data that is Hearted **/
    const [hearted, setHearted] = useState([]);
    //**This array holds an array of objects, so we need to set its value to an empty array **/
    const [total, setTotal] = useState(0)

    //**Lets create a function to add hearted items **/
    //**Add a parameter that will get the whole data from the Product**/
    //**we need to make this function global to have access on other pages**/
    const addProduct = (productToAdd) =>{
        console.log("adding", productToAdd);
        //** add the parameter to make a new array **/
        let listOfProducts = [...hearted, productToAdd];
        console.log(listOfProducts);
        setHearted(listOfProducts);
    };

    //**Lets create a function to Remove hearted items **/
    //**we have to make it available so we need it add it to our array of objects**/
    const removeProduct = (productId)=>{
        console.log("removed", productId);
        //**if the id doesn't match throw them out and keep the ones that do**/
        let updatedProducts = hearted.filter(item => item.id !== productId);
        //** if the vlaue is not inside then it makes a new array and gets updated to state*/
        //**building a new array **/
        setHearted(updatedProducts)
    }

    const getTotal = (productTotal)=>{
        setTotal(hearted.map(item=> item.price + 1))
    }


    return(
        //**Give it the value of state as its value (HEARTED)& a function (addProduct) **/
        <HeartedContext.Provider value={{hearted, addProduct, removeProduct}}>
            {props.children}
        </HeartedContext.Provider>
        //**We then wrap it in APP.jsx to give it access to the other pages **/
        )
}