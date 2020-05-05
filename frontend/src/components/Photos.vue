
<template>
    <v-img 
        v-if="activeImage" 
        :key="activeImage" 
        :eager="true" 
        :src="activeImage" 
        contain
        :max-height="height"
    ></v-img>    
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            imageIndex: 0,
            imageTimeout: 5000,
            images: null,
            imageScrollActive: true,
            activeImage: null,
            height: 700
        }
    },
    methods: {
        prevImage(){
            this.imageIndex = this.imageIndex - 1;

            if(this.imageIndex <= 0){
               this.imageIndex = this.images.length - 1; 
            }

            this.activeImage = this.images[this.imageIndex];
        },
        nextImage(){
            this.imageIndex = this.imageIndex + 1;

            if(this.imageIndex >= this.images.length){
               this.imageIndex = 0; 
            }

            this.activeImage = this.images[this.imageIndex];
        },
        scrollImages(){
            if(this.imageScrollActive){
                this.nextImage();
                setTimeout(
                    this.scrollImages,
                    this.imageTimeout
                );
            }
        },
        getImagesFromBackend () {
            const path = `http://localhost:5000/api/images`
                axios.get(path)
                .then(response => {
                this.images = response.data.imageList
                this.activeImage = this.images[0];
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    created () {
        this.getImagesFromBackend();

        setTimeout(
            this.scrollImages,
            this.imageTimeout
        );
    }
}
</script>
