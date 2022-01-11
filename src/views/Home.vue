<template>
    <div class="home">
        <div class="home__navigation">
            <button
            v-for="(nameFilm, index) in allFilms"
            :key="index"
            @click="click(index)"
            class="navigation__btnFilm"
            
            >
                {{nameFilm.title}}
            </button>
          
        </div>
        <div class="home__mainBlock">
            <div class="mainBlock__searchField">
                <input 
                type="text" 
                name="searchField" 
                id="searchField"
                v-model="search"
                >
                
            </div>

            <!-- <div
            v-for="(post,index) in todosByTitle"
            :key="index"
            class="mainBlock__content"
            >
                <div class="content__box">
                    <div class="box__title">Name Film:</div> 
                    <div class="box__link">
                        {{todosByTitle.title}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Created:</div> 
                    <div class="box__link">
                        {{todosByTitle.created}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Director:</div> 
                    <div class="box__link">
                        {{todosByTitle.director}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Edited:</div> 
                    <div class="box__link">
                        {{todosByTitle.edited}}
                    </div>
                </div>
                 <div class="content__box">
                    <div class="box__title">Episode:</div> 
                    <div class="box__link">
                        {{todosByTitle.episode_id}}
                    </div>
                </div>
                 <div class="content__box">
                    <div class="box__title">Release Date:</div> 
                    <div class="box__link">
                        {{todosByTitle.release_date}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Producer:</div> 
                    <div class="box__link">
                        {{todosByTitle.producer}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Url:</div> 
                    <div class="box__link">
                        {{todosByTitle.url}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Opening Crawl:</div> 
                    <div class="box__link">
                        {{todosByTitle.opening_crawl}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Planets:</div> 
                    <div 
                    v-for="(planets, index) in todosByTitle.planets"
                    :key="index"
                    class="box__link">
                    
                        {{planets}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Species:</div> 
                    <div 
                    v-for="(species, index) in todosByTitle.species"
                    :key="index"                    
                    class="box__link">
                    
                        {{species}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Starships:</div> 
                    <div 
                    v-for="(starships, index) in todosByTitle.starships"
                    :key="index"  
                    class="box__link">
                    
                        {{starships}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Characters:</div> 
                    <div 
                    v-for="(characters, index) in todosByTitle.characters"
                    :key="index"  
                    class="box__link">
                        {{characters}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Vehicles:</div> 
                    <div 
                    v-for="(vehicles, index) in todosByTitle.vehicles"
                    :key="index"  
                    class="box__link">
                        {{vehicles}}
                    </div>
                </div> 
            </div> -->
            <div>
                <div
                v-for="(post,index) in todosByTitle"
                :key="index"
                class="mainBlock__content"
                >   
                    <div class="content__box">
                        <div class="box__title">Name Film:</div> 
                        <div class="box__link">
                            {{post.title  }} {{todosByTitle.title}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Created:</div> 
                        <div class="box__link">
                            {{post.created}} {{todosByTitle.created}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Director:</div> 
                        <div class="box__link">
                            {{post.director}} {{todosByTitle.director}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Edited:</div> 
                        <div class="box__link">
                            {{post.edited}} {{todosByTitle.edited}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Episode:</div> 
                        <div class="box__link">
                            {{post.episode_id}} {{todosByTitle.episode_id}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Release Date:</div> 
                        <div class="box__link">
                            {{post.release_date}} {{todosByTitle.release_date}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Producer:</div> 
                        <div class="box__link">
                            {{post.producer}} {{todosByTitle.producer}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Url:</div> 
                        <div class="box__link">
                            {{post.url}} {{todosByTitle.url}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Opening Crawl:</div> 
                        <div class="box__link">
                            {{post.opening_crawl}} {{todosByTitle.opening_crawl}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Planets:</div> 
                        <div 
                        v-for="(planets, index) in post.planets"
                        :key="index"
                        class="box__link">
                        
                            {{planets}} 
                        </div>
                        <div 
                        v-for="(planets, index) in todosByTitle.planets"
                        :key="index"
                        class="box__link">
                        
                            {{planets}} 
                        </div>
                    
                    </div>
                    <div class="content__box">
                        <div class="box__title">Species:</div> 
                        <div 
                        v-for="(species, index) in post.species"
                        :key="index"                    
                        class="box__link">
                        
                            {{species}}
                        </div>
                        <div 
                        v-for="(species, index) in todosByTitle.species"
                        :key="index"                    
                        class="box__link">
                        
                            {{species}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Starships:</div> 
                        <div 
                        v-for="(starships, index) in post.starships"
                        :key="index"  
                        class="box__link">
                        
                            {{starships}}
                        </div>
                        <div 
                        v-for="(starships, index) in todosByTitle.starships"
                        :key="index"  
                        class="box__link">
                        
                            {{starships}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Characters:</div> 
                        <div 
                        v-for="(characters, index) in post.characters"
                        :key="index"  
                        class="box__link">
                            {{characters}}
                        </div>
                        <div 
                        v-for="(characters, index) in todosByTitle.characters"
                        :key="index"  
                        class="box__link">
                            {{characters}}
                        </div>
                    </div>
                    <div class="content__box">
                        <div class="box__title">Vehicles:</div> 
                        <div 
                        v-for="(vehicles, index) in post.vehicles"
                        :key="index"  
                        class="box__link">
                            {{vehicles}}
                        </div>
                        <div 
                        v-for="(vehicles, index) in todosByTitle.vehicles"
                        :key="index"  
                        class="box__link">
                            {{vehicles}}
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: '',
            allFilms: [],
            search: '',
        }
    },
    computed: {
        todosByTitle: function() {
           
            if (this.search.length) {
                return this.allFilms.filter((item) => {
                    return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||  item.characters.indexOf(this.search) > -1   || item.species.indexOf(this.search) > -1  || item.vehicles.indexOf(this.search) > -1 
                })
            } else if(this.allFilms[this.id]) {
                
                return this.allFilms[this.id]
                
            }
        },
    },
    mounted(){
        if (localStorage.search) {
            this.search = localStorage.search
          
        }
    },
    watch: {
        search(newSearch) {
            localStorage.search = newSearch;
            const film = JSON.stringify(this.todosByTitle)
            localStorage.setItem('Films', film)
         
        },
        
    },
    beforeMount() {
        fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(json => {
            this.allFilms = json.results;
        })
    },
    methods: {
        click(id){
            this.id = id;
            console.log(this.allFilms[id].episode_id);
            return this.search = "";
        },
        
    }
}
</script>