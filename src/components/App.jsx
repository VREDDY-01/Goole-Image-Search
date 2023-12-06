import React from "react";
import SearchBar from "./SerachBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

const App = ()=>{
    const [images,setImages] = React.useState([]);
    const handleSearchSubmit = async (term)=>{
        const response = await unsplash.get('/search/photos',{
            params:{query:term}
        });
        const results = response.data.results;
        setImages(results);
    }
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={handleSearchSubmit}/>
            <ImageList images={images}/>
        </div>
    );
}

export default App;