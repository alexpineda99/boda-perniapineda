<script setup>
import SvgIcon from "./Icons/IconBase.vue";
import { Icon } from '@iconify/vue';
import { routerKey, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

let pases = route.params.id;

if (pases === "eyJpZCI6Mn0") {
    pases = 1
} else if (pases === "eyJpZCI6gne") {
    pases = 2
}else if (pases === "eyJpZCI6bn8") {
    pases = 3
} else if (pases === "eyJpZCI6qnz") {
    pases = 4
} else if (pases === "eyJpZCI65nt") {
    pases = 5
} else {
    pases = 8
    console.log("gg");
    router.push("/325238")
}

</script>

<template>
    <div class="d-flex justify-center w-100 flex-column align-center">
        <Icon icon="tabler:cards" width="3em" />
        <span class="font-bold">Pases</span>
        <span class="mb-2">Tenemos reservados</span>

        <div class="main-lugares">Para ti <span class="lugares"> {{ pases }} </span> {{ pases === 1 ? 'Lugar' : 'Lugares' }} </div>

        <div class="d-flex justify-center w-100 flex-column align-center text-center mt-8">
            <Icon icon="ant-design:gift-outlined" width="3em" />
            <p class="font-bold">Sugerencia de regalo</p>
            <p>Nos sentimos muy afortunados de tenerlos en nuestras vidas
                y esperamos celebrar nuestro gran día con ustedes. Si planean
                hacernos un regalo, una contribución monetaria sería muy bienvenida
            </p>


        </div>
        <div class="mt-15 mb-15">
        <img src="../assets/img/Main/watercolor-eucalyptus-leaf-free-png-_1_.png" class="pases-flower">
        </div>
    </div>
</template>
