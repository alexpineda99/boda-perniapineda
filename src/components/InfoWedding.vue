<template>
    <div class="container">
        <div class="d-flex justify-center w-100 text-center">Con nuestro amor, la bendición de Dios y en compañia de
            nuestros padres</div>

        <div class="d-flex justify-center w-100 text-center mt-5 h-100">Nosotros</div>
        <img src="../assets/img/Main/watercolor-eucalyptus-leaf-free-png.png" class="info-first-flower">
        <img src="../assets/img/Main/watercolor-eucalyptus-leaf-free-png.png" class="info-second-flower">
        <div class="d-flex w-100 justify-center text-center flex-column mt-5">
            <p>
            <h1 class="mr-16 title-font light-weight"> Luis </h1>
            </p>
            <p>
            <h1 class="light-weight">&</h1>
            </p>
            <p>
            <h1 class="ml-16 title-font light-weight">Meridiz</h1>
            </p>
        </div>

        <div class="d-flex justify-center w-100 text-center mt-10">
            Tenemos el honor de invitarte a nuestra boda
        </div>

        <div class="d-flex w-100 mt-10 justify-center date-wedding align-center">
            <div class="border-date">Sabado</div>
            <div class="ml-2 mr-2 d-flex flex-column align-center mb-9">
                <span>Abril</span>
                <span class="date-number">29</span>
            </div>
            <div class="border-date">2023</div>
        </div>

        <div class="d-flex justify-center mt-10 flex-column align-center"> 
            <span> 5:30 PM</span>
            <span class="font-bold"> Ceremonia y recepcion</span>
            <span> SALÓN ORQUIDEAS</span>
            <span> Av. Centenario esq. Ustariz </span>
            <span> Montero </span>
        </div>


        <div class="d-flex justify-center mt-10 mb-10">
            <v-btn variant="flat" color="#9cb2a5">Ubicación</v-btn>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { Fireworks } from '@fireworks-js/vue'
import type { FireworksOptions } from '@fireworks-js/vue'
import { ref, watch } from 'vue'
const options = ref<FireworksOptions>({ opacity: 0.5 })
</script>
  
<style>
.buttons {
    z-index: 1;
    position: absolute;
    display: flex;
    gap: 4px;
}
</style>