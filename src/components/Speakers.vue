<template>
    <div>
        <section class="text-center mt-4 " id="details">
            <h3 >Event Details</h3>
            <table class="table table-borderless" style="text-align: center; font-size: 20px;">
                <tr class="">
                    <td class="text-center"><b>Date</b></td>
                    <td class="text-center">28 October 2022</td>
                </tr>
                <tr class="">
                    <td class="text-center"><b>Time</b></td>
                    <td class="text-center">10:00 - 12:00 CAT</td>
                </tr>
                <tr class="">
                    <td class="text-center"><b>Registration</b></td>
                    <td class="text-center">USD $30</td>
                </tr>
                <tr class="">
                    <td class="text-center"><b>Dress Code</b></td>
                    <td class="text-center">High Tea Etiquette with a touch of <span style="color: rgba(255, 0, 0, 0.35)">pink</span></td>
                </tr>
            </table>
        </section>
        <section id="speakers" class="mt-4 pt-2" >
            <h3 class="text-center m-2">Speakers for the event</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="{id, name, post, occupancy, imgLink} of guestSpeakers" :key="id">
                    <div class="card">
                        <img :src=imgLink class="card-img-top" :alt=name />
                        <div class="card-body">
                            <h5 class="card-title">{{post}}</h5>
                            <p class="card-text">{{name}} <br> {{occupancy}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgLinks: ['../assets/img/rebecca-chisamba.jpeg'],
            guestSpeakers: [
                { id: 1, name: 'Dr. Rebecca Chisamba', post: 'Guest of Honour', occupancy: '', imgLink: "https://newsdayassets.blob.core.windows.net/newcontainer/rebecca-chisamba.jpeg" },
                // { id: 2, name: 'Dr. Solomon Guramatunhu', post: 'Keynote Speaker', occupancy: '', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/solomon-guramatunhu.jpg' },
                { id: 2, name: 'Dr. Solomon Guramatunhu', post: 'Keynote Speaker', occupancy: '', imgLink: 'https://th.bing.com/th/id/OIP.DX7are6H2joOZOrYdeL_7wHaE8?pid=ImgDet&rs=1' },
                { id: 5, name: 'Rumbidzai Kanhukamwe', post: 'Guest Speaker', occupancy: 'Cancer Survivor', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/rumbidzai-kanhukamwe.jpeg' },
                { id: 3, name: 'Dr. Abigael Jemedze', post: 'Guest Speaker', occupancy: 'Specialist Obstetrician and Gynaecologist', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/abigael-jemedza.jpeg' },
                { id: 4, name: 'Dr. Fungisai N. Hove', post: 'Guest Speaker', occupancy: 'Obstetrician and Gynaecologist', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/fungisai-hove.jpeg' },
            ]
        }
    }
}
</script>