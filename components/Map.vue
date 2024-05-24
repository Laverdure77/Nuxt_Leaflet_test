<template>
    <div style="height:100vh; width:100vw">
        <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]">
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                layer-type="base" name="OpenStreetMap" />
            <LMarker
            :lat-lng="[47.21322, -1.559482]",
            :rotationAngle="10"
            >
                <LIcon
                icon-url="icons/icons8-mode-avion-on-50.png"
                :icon-size="[150,150]"
                />
                
            </LMarker>
        </LMap>
        
    </div>
</template>

<script setup lang='ts'>
import { LMap, LTileLayer, LMarker, LGeoJson, LIcon, LPopup, LTooltip, LControlZoom } from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue'
const zoom = ref(20)
</script>

<style>
body {
    margin: 0;
}
</style>
