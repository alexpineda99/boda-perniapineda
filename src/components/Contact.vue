<script setup>
import SvgIcon from "./Icons/IconBase.vue";
</script>

<template>
    <div class="d-flex justify-center align-center flex-column mt-15">
        <SvgIcon name="IconWhatsapp" />
        <p class="font-bold">Confirmación</p>
        <p>Por favor confirma tu</p>
        <p>asistencia antes del 10 de mayo</p>
        <div class="d-flex justify-center w-100 mt-1">
            <v-btn class="w-50" variant="flat" href="https://wa.me/584127239580"  color="#9cb2a5">Contacto Luis</v-btn>
        </div>
        <div class="d-flex justify-center w-100 mt-1">
            <v-btn class="w-50" variant="flat" href="https://wa.me/584246264743" color="#9cb2a5">Contacto Meridiz</v-btn>
        </div>

        <div class="d-flex justify-center align-center flex-column mt-5">

            <p class="font-bold"> Vestimenta </p>
            <SvgIcon name="IconMarry" />
            <p>Elegante</p>

            <p class="mt-5"> Ceremonia y recepción sólo adultos </p>

            <p class="mt-5"> Esperamos contar con su presencia </p>
            <p>Muchas gracias</p>
        </div>
    </div>
</template>
