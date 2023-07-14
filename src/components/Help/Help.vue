<template>
    <div class="Container">
        <img src="../../assets/back.jpg" alt="error" class="firstImage"/>
        <div class="firstData">
            <div class="firstText">
                <h1 class="Title">Professional Help</h1>
                <h4 class="white">If you want to accelerate your progress, we can help.</h4>
                <br>
                <h4 class="white">We offer support, consulting, training, and handy features that take your experience to a whole new level.</h4>
            </div>
        </div>
        <div class="secondData">
            <div class="pictureContain">
                <img class="Picture" src ="../../assets/network.png">
                <img class="Picture" src ="../../assets/sun.png">
                <img class="Picture" src ="../../assets/human.png">
            </div>
            <div class="Option">
                <div class="SmallContainer">
                    <div class="Content">
                        Deployment and Configuration
                    </div>
                    <div>
                        Our team works closely with you to deploy and configure the solution to optimize results in your particular environment while keeping in mind your long-term plans for growth. We analyze your environment in order to design the most successful architecture for deployment.
                    </div>
                </div>
                <div class="SmallContainer">
                    <div class="Content">
                        Annual Help and Support
                    </div>
                    <div>
                        Help Service includes help with system optimization and adaptation, our premium service provides daily revision, customizations and optimization. Our support includes bug fixes, patches, and updates to our latest version. 
                        <a href="#">See more</a>
                    </div>
                </div>
                <div class="SmallContainer">
                    <div class="Content">
                        Professional Hours
                    </div>
                    <div>
                        We offer professional hours for development or customization projects. This includes the definition and deployment of custom use cases, the creation of custom dashboards, integration with third-party tools, and others.
                    </div>
                </div>
            </div>
            <div class="GgContain">
                <!-- <img class="thirdImage" src="../../assets/ggform1.png" />
                <img class="thirdImage" src="../../assets/ggform2.png" />
                <img class="thirdImage" src="../../assets/ggform3.png" />    -->
                <iframe :src="googleFormUrl" class="Gg">

                </iframe>
            </div>
            <div class="Footer">
                <div>
                    <a href="#" class="link white">support@owlh.net</a>
                </div>    
            </div>
        </div>   
    </div>
</template>
  
<script>
    export default {
    name: 'help',
    data() {
        return {
            googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfm3GiBYZlo7nr81BmQZs_sbUkb_JpRniub0nmsaDf5ZtNSQg/viewform"
            }
        }
}
</script>
<style src ="./Help.css" scoped></style>