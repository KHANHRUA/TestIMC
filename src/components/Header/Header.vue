<template>
    <div> 
        <div>
            <div v-if="bool" id = "Menu" class="MenuContain">
                <div v-if ="Status" class="Temp"  @click="Open()">  
                    <Times class="MenuTemp"></Times>
                </div>
                <div v-else class="Temp"  @click="Open()">
                    <Menu class="Menu"></Menu>
                </div>
            </div>
                <div id ="Modal" class="Modal" @click="Out()">
                </div>
                <div v-if="Status" class="modalContent">
                    <div class="Routes">
                        <Router-link to="/" class="Route" id ="/" :style="{ 'color': currentPath==='/' ? 'rgb(73,170,212)' : 'white' }">
                            OwlH
                        </Router-link>
                        <Router-link to="/getting-started" class="Route"  id ="/getting-started" :style="{ 'color': currentPath==='/getting-started' ? 'rgb(73,170,212)' : 'white' }">
                            Getting Started
                        </Router-link>
                        <a href="https://documentation.owlh.net/" class="Route" target="_blank" to="/getting-started" id ="Doc" :style="{ 'color': currentPath==='/doc' ? 'rgb(73,170,212)' : 'white' }">
                            Documentation
                        </a>
                        <Router-link to="/help" id ="/help" class="Route" :style="{ 'color': currentPath==='/help' ? 'rgb(73,170,212)' : 'white' }">
                            Professional Help
                        </Router-link>
                        <Router-link to="/community" class="Route" id ="/community" :style="{ 'color': currentPath==='/community' ? 'rgb(73,170,212)' : 'white' }">
                            Community
                        </Router-link>
                    </div>
                </div>
        </div>
        <div class = "Container" id="Top">
            <div class="LogoAlign">
                <div v-if="bool" id = "Menu" class="Empty">
            </div>
            <img  class="Logo" src ="../../assets/EmbeddedImage.png" alt="error"/>
            <div class="Text">
                <span>v0.17.x</span>
            </div>
            </div>
            <div class="Control">
            <Router-link to="/" :class="[log ? 'Pages': 'Page']" id ="/" :style="{ 'opacity': currentPath==='/' ? '1' : '0.643' }">
                OwlH
            </Router-link>
            <Router-link to="/getting-started" :class="[log ? 'Pages': 'Page']"  id ="/getting-started" :style="{ 'opacity': currentPath==='/getting-started' ? '1' : '0.643' }">
                Getting Started
            </Router-link>
            <a href="https://documentation.owlh.net/" target="_blank" to="/getting-started" :class="[log ? 'Pages': 'Page']" id ="Doc" :style="{ 'opacity': currentPath==='/document' ? '1' : '0.643' }">
                Documentation
            </a>
            <Router-link to="/help" :class="[log ? 'Pages': 'Page']" id ="/help" :style="{ 'opacity': currentPath==='/help' ? '1' : '0.643' }">
                Professional Help
            </Router-link>
            <Router-link to="/community" :class="[log ? 'Pages': 'Page']" id ="/community" :style="{ 'opacity': currentPath==='/community' ? '1' : '0.643' }">
                Community
            </Router-link>
        </div>
        <div class="IconAlign" @click="OpenSearch()">
            <Search class="Icon"/>
        </div>
    </div>
    <div id ="Modal2" class="Modal" @click="Out2()">
    </div>
    <div class="SearchContain" id="Search">
        <div v-if="bool == 0" class="OutArrow" @click="Out2()">
            <Arrow/>    
        </div>
        <div class="Search">
            <div class="Icons">
                <div v-if="bool">
                    <Arrow></Arrow>
                </div>
                <div v-else>
                    <Search></Search>   
                </div>
            </div>
            <div>
                <input autofocus class="Input" type="text" placeholder="Search in this site">
            </div>
        </div>    
    </div>
</div>
</template>

<script setup>
import Search from '../../components/icons/SearchIcon.vue';
import Menu from '../../components/icons/Menu.vue'
import Times from '../../components/icons/Times.vue'
import Arrow from '../../components/icons/ArrowIcon.vue'
</script>

<script>
export default {
    name: 'Header',
    data(){
        return{
            isTop: false,
            currentPath: window.location.pathname,
            log: 0,
            bool: 1,
            Status: false
        }
    },
    methods: {
        Open() {//open Route modal
            var modal = document.getElementById("Modal");
            var animate = document.getElementById("Top");
            if (this.Status == 0) {
                modal.style.display = "block";
                this.Status = true;
                animate.classList.remove("ContainerAnimationOn");
                animate.classList.add("ContainerAnimationOff");
            }
            else {
                modal.style.display = "none";
                this.Status = false;
                animate.classList.remove("ContainerAnimationOff");
                animate.classList.add("ContainerAnimationOn");
            }
        },
        Out() {//close route modal when click out side
            var modal = document.getElementById("Modal");
            var animate = document.getElementById("Top");
            this.Status = 0;
            modal.style.display = "none";
            animate.classList.remove("ContainerAnimationOff");
            animate.classList.add("ContainerAnimationOn");
        },
        Out2() {//close route modal when click out side
            var modal = document.getElementById("Modal2");
            modal.style.display = "none";
            var animate = document.getElementById("Search");
            animate.style.display = "none";
            animate.classList.remove("AnimationOn");
        },
        OpenSearch() {
            var modal = document.getElementById("Modal2");
            modal.style.display = "block";
            var animate = document.getElementById("Search");
            animate.style.display = "flex";
            animate.classList.add("AnimationOn");
        }
    },
    mounted(){
        const that = this;
        var animate = document.getElementById("Top");
        animate.classList.add("ContainerAnimationOn")//add animation first time
        if (window.innerWidth <= 900) {//check first time mobile or pc
                this.bool = 1;
            }
        else {
            this.bool = 0;
            this.Status = 0;
            var modal = document.getElementById("Modal");
            modal.style.display = "none";
            animate.classList.remove("ContainerAnimationOff");
            animate.classList.add("ContainerAnimationOn");
        }
        let scrollPos = window.scrollY;
        this.currentPath = window.location.pathname;
        if (scrollPos >= 50) {//check first time where the scroll y is
            that.isTop = true,
            document.getElementById("Top").style.backgroundColor = "rgb(41, 41, 41)";
            document.getElementById(this.currentPath).style.color = "rgb(73,170,212)";
            this.log = 0;
        } else {
            that.isTop = false,
            document.getElementById("Top").style.backgroundColor = "inherit";
            document.getElementById(this.currentPath).style.color = "white";
            this.log = 1;
        }
        window.addEventListener('scroll', () => {//check where the scroll y is
            this.currentPath = window.location.pathname;
            scrollPos = window.scrollY;
            if (scrollPos >= 50) {
                that.isTop = true,
                document.getElementById("Top").style.backgroundColor = "rgb(41, 41, 41)";
                document.getElementById(this.currentPath).style.color = "rgb(73,170,212)";
                this.log = 0;
            } else {
                that.isTop = false,
                    document.getElementById("Top").style.backgroundColor = "inherit";
                document.getElementById(this.currentPath).style.color = "white";
                this.log = 1;
            }
        });
        window.addEventListener('resize', () => {//check mobile or pc
            if (window.innerWidth <= 900) {
                this.bool = 1;
            }
            else {
                this.bool = 0;
                this.Status = 0;
                var modal = document.getElementById("Modal");
                modal.style.display = "none";
                animate.classList.remove("ContainerAnimationOff");
                animate.classList.add("ContainerAnimationOn");
            }
        });
    ;
}
    
}
</script>

<style scoped src="./Header.css"/>
