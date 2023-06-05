import { createContext, useState, useEffect} from "react";
//**Start off by creating a context to be set global for the whole page to use it **/

//**This is what will be used to access the data globally **/
export const HeartedContext = createContext()

export default function HeartedContextProvider(props){
    //**create state to hold the data that is Hearted **/
    const [hearted, setHearted] = useState([]);
    //**This array holds an array of objects, so we need to set its value to an empty array **/

    //**Lets create a function to add hearted items **/
    //**Add a parameter that will get the whole data from the Product**/
    //**we need to make this function global to have access on other pages**/
    const addProduct = (productToAdd) =>{
        //** add the parameter to make a new array **/
        let listOfProducts = [...hearted, productToAdd];
        setHearted(listOfProducts);
    };

    //**Lets create a function to Remove hearted items **/
    //**we have to make it available so we need it add it to our array of objects**/
    const removeProduct = (productId)=>{
        //**if the id doesn't match throw them out and keep the ones that do**/
        let updatedProducts = hearted.filter(item => item.id !== productId);
        //** if the value is not inside then it makes a new array and gets updated to state*/
        //**building a new array **/
        setHearted(updatedProducts)
    }

    //** check local storage to set state */
    useEffect(
        ()=>{
            //** retrieve the data from local storage */
            //* whatever we called the variable to set it in local storage access that string 
            const storedCartedData = localStorage.getItem("Carted");
            //** set the state if there is something inside local storage */
            //* if data is inside the variable in local storage turn into a object
            if(storedCartedData){
                setHearted(JSON.parse(storedCartedData))
            }

        },[]
    )

    //** set the storage */
  useEffect(
        ()=>{
            localStorage.setItem("Carted", JSON.stringify(hearted));
        },[hearted]
    )
    
    return(
        //**Give it the value of state as its value (HEARTED)& a function (addProduct) **/
        <HeartedContext.Provider value={{hearted, addProduct, removeProduct, setHearted}}>
            {props.children}
        </HeartedContext.Provider>
        //**We then wrap it in APP.jsx to give it access to the other pages **/
        )
}