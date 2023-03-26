<script setup>
import SvgIcon from "./Icons/IconBase.vue";
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-timeline align="start">
      <v-timeline-item>
        <template v-slot:opposite>
        </template>
        <div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          <div>
            <div>
              <div>5:30 PM</div>
              <div>Ceremonia</div>
            </div>
          </div>
        </template>
        <Icon icon="mdi:ring" width="3em" />
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          <div>
          <Icon icon="bx:drink" width="3em" />
          </div>
        </template>
        <div>
          <div>5:30 PM</div>
          <div>Reunion</div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          <div>
            <div>5:30 PM</div>
            <div>Cena</div>
          </div>
        </template>
        <Icon icon="fluent:food-24-regular" width="3em" />
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          <Icon icon="material-symbols:nest-clock-farsight-analog-outline" width="3em" />
        </template>
        <div>
          <div>5:30 PM</div>
          <div>Despedida</div>
        </div>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
        </template>
        <div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
