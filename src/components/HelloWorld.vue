<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="row">
      <div class="col-lg-6">
          <full-calendar :events="events"></full-calendar>
      </div>
      <div class="col-lg-6">
        <kanban-board :stages="stages" :blocks="blocks"  @update-block="updateBlock">
          <div v-for="stage in stages" :slot="stage" :key="stage">
            <h2>{{ stage }}</h2>
          </div>
          <div v-for="block in blocks" :slot="block.id" :key="block.id">
            <div>
              <strong>id:</strong> {{ block.id }}
            </div>
            <div>
              {{ block.title }}
            </div>
          </div>
        </kanban-board>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <vue-flux style="width: 256px; height: 256px; overflow: visible;" @showImage="showImage"
          :options="fluxOptions"
          :images="fluxImages"
          :transitions="fluxTransitions"
          ref="slider">
              <flux-pagination slot="pagination"></flux-pagination>
        </vue-flux>
        <button @click="$refs.slider.showImage('next')">NEXT</button>
      </div>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import { VueFlux, FluxPagination, Transitions } from 'vue-flux';
export default {
  name: 'HelloWorld',
  components: {
    VueFlux,
    FluxPagination
 },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
      blocks: [
        {
          id: 1,
          status: 'on-hold',
          title: 'Test'
        },
        {
          id: 2,
          status: 'correct',
          title: 'Correct'
        }
      ],
      events: [
        {
            title  : 'event1',
            start  : '2010-01-01',
        },
        {
            title  : 'event2',
            start  : '2010-01-05',
            end    : '2010-01-07',
        },
        {
            title  : 'event3',
            start  : '2010-01-09T12:30:00',
            allDay : false,
        },
      ],
      fluxOptions: {
         autoplay: true,
         delay: 1500 // [ms]
      },
      fluxImages: [
         'static/female.jpg',
         'static/male.jpg',
         'static/malefemale.jpg'
      ],
      fluxTransitions: {
        // transitionTurn3d: Transitions.transitionTurn3d
        transitionBook: Transitions.transitionBook
      }            
    }
  },
  methods: {
    updateBlock (id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status
    },
    showImage (index, transition) {
      a = 3;
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}

</style>

