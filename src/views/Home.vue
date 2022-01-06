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
            class="mainBlock__content ">
                <div class="content__box">
                    <div class="box__title">Name Film:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].title}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Created:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].created}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Director:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].director}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Edited:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].edited}}
                    </div>
                </div>
                 <div class="content__box">
                    <div class="box__title">Episode:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].episode_id}}
                    </div>
                </div>
                 <div class="content__box">
                    <div class="box__title">Release Date:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].release_date}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Producer:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].producer}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Url:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].url}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Opening Crawl:</div> 
                    <div class="box__link">
                        {{todosByTitle.results[id].opening_crawl}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Planets:</div> 
                    <div 
                    v-for="post in todosByTitle.results[id].planets"
                    :key="post.id"
                    class="box__link">
                    
                        {{post}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Species:</div> 
                    <div 
                    v-for="post in todosByTitle.results[id].species"
                    :key="post.id"
                    class="box__link">
                    
                        {{post}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Starships:</div> 
                    <div 
                    v-for="post in todosByTitle.results[id].starships"
                    :key="post.id"
                    class="box__link">
                    
                        {{post}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Characters:</div> 
                    <div 
                    v-for="post in todosByTitle.results[id].characters"
                    :key="post.id"
                    class="box__link">
                        {{post}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Vehicles:</div> 
                    <div 
                    v-for="post in todosByTitle.results[id].vehicles"
                    :key="post.id"
                    class="box__link">
                        {{post}}
                    </div>
                     v-for="(post, index) in todosByTitle"
            :key="index"
                </div> 
            </div> -->
             <div
          
            class="mainBlock__content"
            >
                <div class="content__box">
                    <div class="box__title">Name Film:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].title}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Created:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].created}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Director:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].director}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Edited:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].edited}}
                    </div>
                </div>
                 <div class="content__box">
                    <div class="box__title">Episode:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].episode_id}}
                    </div>
                </div>
                 <div class="content__box">
                    <div class="box__title">Release Date:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].release_date}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Producer:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].producer}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Url:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].url}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Opening Crawl:</div> 
                    <div class="box__link">
                        {{todosByTitle[id].opening_crawl}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Planets:</div> 
                    <div 
                    v-for="(planets, index) in todosByTitle[id].planets"
                    :key="index"
                    class="box__link">
                    
                        {{planets}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Species:</div> 
                    <div 
                    v-for="(species, index) in todosByTitle[id].species"
                    :key="index"                    
                    class="box__link">
                    
                        {{species}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Starships:</div> 
                    <div 
                    v-for="(starships, index) in todosByTitle[id].starships"
                    :key="index"  
                    class="box__link">
                    
                        {{starships}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Characters:</div> 
                    <div 
                    v-for="(characters, index) in todosByTitle[id].characters"
                    :key="index"  
                    class="box__link">
                        {{characters}}
                    </div>
                </div>
                <div class="content__box">
                    <div class="box__title">Vehicles:</div> 
                    <div 
                    v-for="(vehicles, index) in todosByTitle[id].vehicles"
                    :key="index"  
                    class="box__link">
                        {{vehicles}}
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data(){
        return{
            id: '0',
            allFilms: [],
            search: '',
        }
    },
    computed: {
        todosByTitle: function() {
            return this.allFilms.filter((item) => {
               return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||   item.characters.indexOf(this.search) > -1   || item.species.indexOf(this.search) > -1  || item.vehicles.indexOf(this.search) > -1 
            })
        },
    },
    // computed: mapGetters(["allPosts"]),
    mounted() {
        // this.fetchPost();
        
    },
    beforeMount() {
        fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(json => {
            this.allFilms = json.results;
            
        })
        
    },
    methods: {
        // ...mapActions(["fetchPost"]),
        click(id){
            this.id = id;
           
        }

    }
}
</script>