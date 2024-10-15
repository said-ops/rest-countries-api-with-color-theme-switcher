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
    },

    //function to fetch single countrie details
    details : null,
    detailsLoading :false,
    detailsError:null,
    fetchDetails : async (id)=>{
        try {
            set({detailsLoading:true,detailsError:null})
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            const data = await response.json()
            set({detailsLoading:false,details:data[0]})
            if(!response.ok)
                throw new Error("failed to fetch details");
                
        } catch (error) {
            set({detailsError:error.message,detailsLoading:false})
        }
    }
}))

export default useHomeStore