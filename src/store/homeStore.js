import { create } from "zustand";

const useHomeStore = create((set,get)=>({

    countries : [],
    laoding : false,
    error : null,
    filterdCountries : [],
    searchTerm:'',
    setTerm:(searchTerm)=>set({searchTerm:searchTerm}),

    //function to fetch all countries 

    fetchCountries : async () => {

        try {
            set({loading:true,error:null})
            const response = await fetch ('https://restcountries.com/v3.1/all')
            const data = await response.json()
            set({countries:data,loading:false})
            if(!response.ok){
                throw new Error("Error fetching data",response.statusText); 
            }
        } catch (error) {
            set({error:error.message , laoding:false})
        }
    },

    //function to filter by searchTerm

    filterCountries : (searchTerm)=>{
        const {countries} = get();
        let filterdCountries = countries.filter(country=>String(country.name.common).toLowerCase().includes(searchTerm))
        set({filterdCountries:filterdCountries})
    }
}))

export default useHomeStore