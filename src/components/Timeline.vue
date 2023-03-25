<script setup>
import SvgIcon from "./Icons/IconBase.vue";
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
        <SvgIcon name="IconRings" />
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          <div>
            <SvgIcon name="IconCheers" />
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
        <SvgIcon name="IconFood" />
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:opposite>
          <SvgIcon name="IconClock" />
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
