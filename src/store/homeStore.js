import { create } from "zustand";

const useHomeStore = create((set,get)=>({

    countries : [],
    loading : false,
    error : null,
    filterdCountries : [],
    searchTerm:'',
    setTerm:(searchTerm)=>set({searchTerm:searchTerm}),
    theme:localStorage.getItem('theme')||'light',
    setTheme :(theme)=>{
        if(theme==='light') {
            set({theme:'dark'})
        }
        else 
            set({theme:'light'})   
    },

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
       
        if (searchTerm) {
            const filteredCountries = countries.filter((country) =>
              country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            );
            set({ filterdCountries :filteredCountries});
          } else {
            // If searchTerm is empty, reset filteredCountries to show all countries
            set({ filterdCountries: countries });
          }
    }
}))

export default useHomeStore