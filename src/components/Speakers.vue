<template>
    <div id="speakers">
        <h3 class="text-center">Speakers for the event</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4" >
            <div class="col" v-for="{id, name, post, occupancy, imgLink} of guestSpeakers" :key="id">
                <div class="card">
                    <img :src=imgLink class="card-img-top"
                        :alt=name />
                    <div class="card-body">
                        <h5 class="card-title">{{post}} : {{name}}</h5>
                        <p class="card-text">
                            {{occupancy || ''}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgLinks: ['../assets/img/rebecca-chisamba.jpeg'],
            guestSpeakers: [
                { id: 1, name: 'Dr. Rebecca Chisamba', post: 'Guest of Honour', occupancy: '', imgLink: "https://newsdayassets.blob.core.windows.net/newcontainer/rebecca-chisamba.jpeg" },
                { id: 2, name: 'Dr. Solomon Guramatunhu', post: 'Keynote Speaker', occupancy: '', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/solomon-guramatunhu.jpg' },
                { id: 3, name: 'Dr. Abigael Jemedze', post: 'Guest Speaker', occupancy: 'Specialist Obstetrician and Gynaecologist', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/abigael-jemedza.jpeg' },
                { id: 4, name: 'Dr. Fungisai N. Hove', post: 'Guest Speaker', occupancy: 'Obstetrician and Gynaecologist', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/fungisai-hove.jpeg' },
                { id: 5, name: 'Rumbidzai Kanhukamwe', post: 'Guest Speaker', occupancy: 'Cancer Survivor', imgLink: 'https://newsdayassets.blob.core.windows.net/newcontainer/rumbidzai-kanhukamwe.jpeg' },
            ]
        }
    }
}
</script>