<template>
 <div>
   <div class="image-upload">
     <input class="image-upload__input" multiple type="file" id="img" name="img" accept="image/*" @change="handleChange">
     <svg class="image-upload__icon" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect x="23" width="6" height="52" rx="3" fill="#C5C6CD"/>
       <rect y="28" width="6" height="52" rx="3" transform="rotate(-90 0 28)" fill="#C5C6CD"/>
     </svg>
   </div>
   <div class="image-upload__gallery">
     <div class="image-upload__gallery-item" v-for="(image, index) in images" :key="`images-key-${index}`">
       <img :src="image" class="image-upload__preview" />
     </div>
   </div>
 </div>
</template>

<script>
export  default  {
  data() {
    return {
      images: []
    }
  },
  methods: {
    handleChange(e) {
      this.images = [];
      let fileList = e.target.files;

      fileList.forEach(file => {

        if(!file.type.match("image.*")) {
          return;
        }

        let reader = new FileReader();
        let self = this;

        reader.onload = (e) => {
          self.images.push(e.target.result);
        }
        reader.readAsDataURL(file);
      })
    }
  }
}
</script>

<style lang="scss">
.image-upload {
  position: relative;
  width: 120px;
  height: 120px;
  background-color: #F3F3F3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 3px;

  &__input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  &__gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 16px;
  }

  &__gallery-item {
    width: calc(50% - 8px);
    height: auto;
    margin: 8px 0;
    border: 1px solid #C5C6CD;
    padding: 4px;

    &:nth-child(odd) {
      margin-right: 8px;
    }

    &:nth-child(even) {
      margin-left: auto;
    }
  }

  &__preview {
    max-width: 100%;
    max-height: 100%;
  }

}
</style>