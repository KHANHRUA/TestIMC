<template>
    <div class="Container">
        <img src="../../assets/back.jpg" class="firstImage"/>
        <div class="firstData">
            <div class="firstText">
                <div class="Data">
                    <h1 class="Title Align">network IDS at scale</h1>
                    <h1 class="Align">easily manage distributed IDS probes</h1>
                    <h1 class="Align">through dispersed traffic sources</h1>
                    <h3 class="Align">an Open Source project to Visualize and Manage Suricata, Zeek & Arkime life cycles</h3>
                </div>
                <div class="Option">
                    <div class="SmallContainer">
                        <button class="Button">
                            OwlH is open source
                        </button>
                        <div class="white">
                            Flexible, scalable, no vendor lock-in and no license cost.
                            <a href="https://owlh.slack.com/" target="_blank" class="white">Join us on Slack</a>
                        </div>
                    </div>
                    <div class="SmallContainer">
                        <button class="Button">
                            Start using OwlH
                        </button>
                        <div class="white">
                            We will help you to be successful with your Owlh first deployment
                        </div>
                    </div>
                    <div class="SmallContainer">
                        <button class="Button">
                            How can we help you
                        </button>
                        <div class="white">
                            Become part of our Open Source 
                            <Router-link to="/community" class="white">Community</Router-link>
                            or access our
                            <Router-link to="/help" class="white">professional support and services.</Router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="secondData">
            <!-- Slider main container -->
            <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"><img class="Img" src="../../assets/1.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/2.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/3.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/4.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/5.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/6.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/7.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/8.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/9.png"></div>
                <div class="swiper-slide"><img class="Img" src="../../assets/10.png"></div>   
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div> 
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev Change"></div>
            <div class="swiper-button-next Change"></div>
            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
            </div>
        </div>
        <div class="firstFooter">
            <div class="Text">
                OwlH was  born to help security engineers to manage, analyze and respond to network threats and anomalies using Open Source Network IDS Suricata and Zeek, offering: 
                <ul>
                    <li class="Li">Centralized Rule management and Network IDS nodes Configuration Management</li>
                    <li class="Li">Software TAP to capture cloud and distributed traffic in cloud and hybrid dispersed environments </li>
                    <li class="Li">Traffic Forensics with Moloch</li>
                    <li class="Li">Centralized Visualization</li>
                    <li class="Li">Compliance Mapping</li>
                </ul>
            </div>
        </div>
        <div class="secondFooter">
            <div class="secondText">
                Current - 
                <a href="https://github.com/OwlH-net/NEWS/blob/master/README.md" target="_blank">v0.11.x</a>
            </div>
        </div>
        <div class="thirdFooter">
            <div class="thirdText">
                How to manage multiple probes 
            <br>
            <div class="br"></div>
                When you have multiple probes, multiple sites, multiple security levels, or do you manage multiple companies, there are different ways to manage your Network IDS probes
            </div>
        </div>
        <div class="newOption">
                <div class="newSmallContainer">
                    <div class="newContent">
                        Stand-alone
                    </div>
                    <div>
                        Define each probe as an stand-alone system
                        <br>
                        <div class="br"></div>
                        Manage probes configuration individually
                    </div>
                </div>
                <div class="newSmallContainer">
                    <div class="newContent">
                        Group
                    </div>
                    <div>
                        Create groups of nodes 
                        <br>
                        <div class="br"></div>
                        share rulesets and services configurations between nodes in a same group 
                    </div>
                </div>
                <div class="newSmallContainer">
                    <div class="newContent">
                        RESTful API
                    </div>
                    <div>
                        Use REST API to manage and configure your probes,  
                        <br>
                        <div class="br"></div>
                        No user Interface, just your app and our API    
                    </div>
                </div>
            </div>
        <div class="fourthFooter">
            <div class="fourthText">
                OwlH Components
            </div>    
        </div>
        <div class="pictureContain">
            <div class="pictures">
                <img class="Picture" src ="../../assets/2,1.png">
                <img class="Picture" src ="../../assets/2,2.png">
                <img class="Picture" src ="../../assets/2,3.png">
            </div>
        </div>
        <div class="newOption">
                <div class="newSmallContainer">
                    <div class="newContent">
                        OwlH NODE - RESTful API
                    </div>
                    <div>
                        Networ IDS solutions
                        <br>
                        <div class="br"></div>
                        Suricata
                        <br>
                        <div class="br"></div>
                        Zeek
                        <br>
                        <div class="br"></div>
                        On-premises - Virtualized - Cloud
                        <br>
                        <div class="br"></div>
                        Plugins
                        <br>
                        <div class="br"></div>
                        Software TAP (STAP) Modes
                        <br>
                        <div class="br"></div>
                        Traffic Dispatcher
                        <br>
                        <div class="br"></div>
                        Threat Intelligence enrichment
                        <br>
                        <div class="br"></div>
                        Traffic Analysis
                    </div>
                </div>
                <div class="newSmallContainer">
                    <div class="newContent">
                        OwlH MASTER - RESTful API
                    </div>
                    <div>
                        Central Management
                        <br>
                        <div class="br"></div>
                        Multiple Nodes
                        <br>
                        <div class="br"></div>
                        Single point of management
                        <br>
                        <div class="br"></div>
                        Plugins
                        <br>
                        <div class="br"></div>
                        Traffic Forensics with Moloch
                        <br>
                        <div class="br"></div>
                        Traffic Dispatcher
                        <br>
                        <div class="br"></div>
                        Threat Intelligence enrichment
                        <br>
                        <div class="br"></div>
                        Traffic Analysis
                    </div>
                </div>
                <div class="newSmallContainer">
                    <div class="newContent">
                        OwlH UI
                    </div>
                    <div>
                        Nodes Management  
                        <br>
                        <div class="br"></div>
                        Manage & Monitor  
                        <br>
                        <div class="br"></div>
                        Open Rules - Ruleset management
                        <br>
                        <div class="br"></div>
                        Rulesets based on thirdparty providers
                        <br>
                        <div class="br"></div>
                        Custom Rulesets
                        <br>
                        <div class="br"></div>
                        Auto update rulesets  
                    </div>
                </div>
            </div>
            <div class="secondPictureContain">
                <div class="secondPictures">
                    <div class="secondPicture">
                        <img src="../../assets/3,1.png">
                        Collect & distribute traffic
                    </div>
                    <div class="secondPicture">
                        <img src="../../assets/3,2.png">
                        Analyze and Enrich
                    </div>
                    <div class="secondPicture">
                        <img src="../../assets/3,3.png">
                        Manage & Visualize
                    </div>
                    <div class="secondPicture">
                        <img src="../../assets/3,4.png">
                        React and Document
                    </div>
                </div>
            </div>
            <div class="secondData">
                <!-- Slider main container -->
                <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide"><img class="Img" src="../../assets/4,1.png"></div>
                    <div class="swiper-slide"><img class="Img" src="../../assets/4,2.png"></div>
                    <div class="swiper-slide"><img class="Img" src="../../assets/4,3.png"></div>  
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div> 
                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev Change"></div>
                <div class="swiper-button-next Change"></div>
                <!-- If we need scrollbar -->
                <div class="swiper-scrollbar"></div>
                </div>
            </div>
            <div class="fifthFooter">
                <div class="Left">
                    <div class="Text1">
                        Open Rules 
                    </div>
                    <ul>
                        <li class="Li">Keep your Suricata network IDS  probes updated.</li>
                        <li class="Li">Define multiple rulesets, and apply all them to a single probe or to a group of probes.</li>
                        <li class="Li">Keep all them updated and synchronized.</li>
                    </ul>
                </div>
                <div class="Right">
                    <h2>Create and manage your threat detection toolset</h2>  
                    <br>
                    <div class="br"></div>
                    <h3>Ruleset based on 3rd party providers </h3> 
                    <br>
                    <div class="br"></div>
                    <h4>
                        => Integrate/import your favorite public or comercial ruleset feeds.
                    </h4>
                    <br>
                    <h4>
                        <div class="br"></div>
                        => Define your scheduled tasks to automatically update them.
                    </h4>
                    <br>
                    <h3>
                        <div class="br"></div>
                        Your Custom Rulesets
                    </h3>
                    <br>
                    <h4>
                        <div class="br"></div>
                        => Clone 3rd party rules and customize them.
                    </h4>
                    <br>
                    <h4>
                        <div class="br"></div>
                        => Create and/or import your own custom single rules or custom rules files.
                    </h4>
                    <h4>
                        <br>
                        <div class="br"></div>
                        => Edit, Enable, Disable, your Rules from the User Interface.
                    </h4>
                </div>    
            </div>
            <div class="sixthFooter">
                <div class="Left">
                    <div class="Text1 default">Software TAP</div>
                    <div class="br"></div>
                    <div>
                        Software TAP helps to collect Traffic from windows and linux servers when there is no a port mirror or span port option. 
                        <br>
                        Useful for Cloud and virtualized environments and for remote and small locations.
                    </div>    
                </div>
                <div class="Right">
                    <h1 class="default">
                        Choose your Software TAP mode: 
                    </h1>
                    <br>
                    <h3>
                        <div class="br"></div>
                        Software TAP PULL mode
                    </h3>
                    <br>
                    <h4>
                        <div class="br"></div>
                        Your traffic is stored locally in your server and OwlH will collect it
                    </h4>
                    <br>
                    <h3>
                        <div class="br"></div>
                        Software TAP REALTIME mode
                    </h3>
                    <br>
                    <h4>
                        <div class="br"></div>
                        Your server will forward traffic in realtime to the OwlH Node component
                    </h4>
                </div>
            </div>
            <div class="fifthFooter">
                <div class="Left">
                    <div class="Text1">
                        Easy deployment 
                    </div>
                    <h2>
                        <div class="br"></div>
                        & Easy to keep updated
                    </h2>
                    <br>
                    <h4>
                        <div class="br"></div>
                        Just tell us what should be on your instance and we will take care of it. 
                    </h4>
                    <br>
                    <h4>
                        <div class="br"></div>
                        OwlH Installer will download and install needed packets and will install and update them to the latest version
                    </h4>
                </div>
                <div class="Right">
                    <h2>OwlH Installer</h2>  
                    <br>
                    <div class="br"></div>
                    <h3>Define your appliance</h3> 
                    <br>
                    <div class="br"></div>
                    <h4>
                        individual components: OwlH Node, OwlH Master, OwlH UI
                    </h4>
                    <br>
                    <h3>
                        <div class="br"></div>
                        OR OwlH all-in-one (node, master and ui)
                    </h3>
                    <br>
                    <h4>
                        <div class="br"></div>
                        just define what should be in the appliance and Installer will prepare it
                    </h4>
                    <h3>
                        <br>
                        <div class="br"></div>
                        Keep OwlH stuff up-to-date
                    </h3>
                    <br>
                    <h4>
                        <div class="br"></div>
                        Define it as scheduled task and installer will keep your OwlH solution updated to latest version
                    </h4>
                </div>    
            </div>
            <div class="seventhFooter">
                <div class="Left1">
                    <h1 class="Text1 default">
                        Install OwlH
                    </h1>
                    <div class="br"></div>
                    <h2 class="default">
                        OwlH all-in-one
                    </h2>
                    <div class="br"></div>
                    <div>
                        help needed?
                        <a>support@owlh.net </a>
                    </div>
                    <h4>
                        current v0.11.x
                    </h4>
                </div>
                <div class="Middle">
                    <div>
                        <h4>Install a CentOS 7 based system</h4>
                        <h4>Download OwlH Installer</h4>
                        <h4>Run installer</h4>
                        <h4>Enjoy experience</h4>
                    </div>
                </div>
                <div class="Right1">
                    <h3 class="Last"># wget http://repo.owlh.net/current-centos/owlh-allinone.sh</h3>
                    <div class="br"></div>
                    <h3 class="Last"># bash owlh-allinone.sh</h3>
                    <div class="br"></div>
                    <h3 class="Last">
                        Point your browser: https://your.owlh.ip, 
                        https://your.owlh.ip:50001/v1/home
                    </h3>
                    <div class="br"></div>
                    <div class="Last">
                        <h3 class="Bold">PLEASE</h3>
                        <h3> - Check your firewall configuration </h3>
                        <a href="https://documentation.owlh.net/en/0.14.0/main/OwlHFirewall.html">(doc)</a>
                    </div>
                </div>    
            </div>
            <div class="fourthFooter">
                <div class="fourthText Text1">
                    OwlH deployment samples
                </div>    
            </div>
            <div class="Example">
                <div class="TextExampleAlign">
                    <div class="TextExample">
                        all-in-one for single site and low network bandwidth.
                        <a href="https://documentation.owlh.net/en/latest/main/OwlHAllinone.html">[ doc ]</a>
                    </div>
                </div>
                <div class="ImgExample">
                    <img class="ImgEx" src="../../assets/5,1.png">
                </div>
            </div>
            <div class="Example">
                <div class="TextExampleAlign">
                    <div class="TextExample">
                        Multiple locations. On-premises, Virtual, Cloud, or Hybrid environments.
                        <a href="https://documentation.owlh.net/en/latest/main/OwlHAllinone.html">[ doc ]</a>
                    </div>
                </div>
                <div class="ImgExample">
                    <img class="ImgEx" src="../../assets/5,2.png">
                </div>
            </div>
            <div class="Example">
                <div class="TextExampleAlign">
                    <div class="TextExample">
                        Software TAP RealTime configuration for cloud and/or remote small locations or isolated servers.
                        <a href="https://documentation.owlh.net/en/latest/main/OwlHAllinone.html">[ doc ]</a>
                    </div>
                </div>
                <div class="ImgExample">
                    <img class="ImgEx" src="../../assets/5,3.png">
                </div>
            </div>
            <div class="Example">
                <div class="TextExampleAlign">
                    <div class="TextExample">
                        Traffic dispatcher for centralized traffic collection and distributed analysis.
                        <a href="https://documentation.owlh.net/en/latest/main/OwlHAllinone.html">[ doc ]</a>
                    </div>
                </div>
                <div class="ImgExample">
                    <img class="ImgEx" src="../../assets/5,4.png">
                </div>
            </div>
            <div class="fourthFooter">
                <div class="fourthText Text1">
                    OwlH custom configurations
                </div>    
            </div>
    </div>
</template>

<script setup>
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
</script>

<script>
export default {
    mounted() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'horizontal',
            modules: [Navigation, Pagination],
            loop: true,
            grabCursor: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
}
</script>
<style src ="./Home.css" scoped>@import "../../node_modules/swiper/css/swiper.css";</style>