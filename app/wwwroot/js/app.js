import "https://code.jquery.com/jquery-3.6.1.js";

const { createApp } = Vue

createApp({
  data() {
    return {
      names: httpGet( "api/tasks"),
      selected: '',
      prefix: '',
      first: '',
      last: ''
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter((n) =>
        n.toLowerCase().startsWith(this.prefix.toLowerCase())
      )
    }
  },
  watch: {
    selected(name) {
      ;[this.last, this.first] = name.split(', ')
    }
  },
  methods: {
    create() {
      if (this.hasValidInput()) {
        const fullName = `${this.first}, ${this.last}`
        if (!this.names.includes(fullName)) {
          httpGet( "api/tasks/add/" + this.first + "/" + this.last)
          this.names.push(fullName)
          this.first = this.last = ''
        }
      }
    },
    hasValidInput() {
      return this.first.trim() && this.last.trim()
    }
  }
}).mount('#app')

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

