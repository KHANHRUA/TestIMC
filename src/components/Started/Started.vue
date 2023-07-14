<template>
    <div class="Container">
        <img src="../../assets/back.jpg" alt="error" class="firstImage"/>
        <div class="firstData">
            <div>
                <img src="../../assets/fire.png" class="secondImage">
            </div>
            <div class="firstText">
                <h1 class="Title">Getting started</h1>
                <h4 class="white">Get the right feedback about your Network IDS ecosystem</h4>
            </div>
        </div>
        <div class="secondData">
            <div class="Option">
                <div class="SmallContainer">
                    <button class="Button">
                        Install OwlH
                    </button>
                    <div>
                        Check our
                        <a href="https://documentation.owlh.net/" target="_blank">doc</a>
                        and
                        <a href="https://www.youtube.com/channel/UCqj6-e9nYt1C8FIY17SIUBw" target="_blank">videos</a>
                    </div>
                </div>
                <div class="SmallContainer">
                    <button class="Button">
                        OwlH Demo Site
                    </button>
                    <div>
                        Check our 
                        <a href="https://demo.owlh.net/" target="_blank">latest UI</a>
                        interface and be kind (admin/admin)
                    </div>
                </div>
                <div class="SmallContainer">
                    <button class="Button">
                        Ask for help
                    </button>
                    <div>
                        Join our
                        <a href="https://owlh.slack.com/" target="_blank">Slack Channel</a>
                    </div>
                </div>
            </div>
            <div class="GgContain">
                <iframe :src="googleFormUrl" class="Gg">
                </iframe>   
            </div>
            <div class="Footer">
                <div>
                    For any other needed information, please send email to
                    <a href="mailto:contact@owlh.net" target="_blank" class="link white">contact@owlh.net</a>
                </div>    
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
    name: 'Started',
    data() {
        return {
            googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScikaTws8PQyOp6iepR2dXDMQADRDaajev8o_61xN4TDB9Dsw/viewform"
            }
        }
}
</script>
<style src ="./Started.css" scoped></style>