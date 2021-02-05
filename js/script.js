var nuovo = new Vue({
  el: '#chat-view',
  data: {
    utenti: [
      {
        nome: 'utente1',
        avatar: 'img/avatar_2.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente2',
        avatar: 'img/avatar_3.jpg',
        messaggi: [],
          last: '',
          lastMex: ''

      },
      {
        nome: 'utente3',
        avatar: 'img/avatar_4.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente4',
        avatar: 'img/avatar_5.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente5',
        avatar: 'img/avatar_6.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente6',
        avatar: 'img/avatar_7.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente7',
        avatar: 'img/avatar_8.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente8',
        avatar: 'img/avatar_2.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente9',
        avatar: 'img/avatar_3.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente10',
        avatar: 'img/avatar_4.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente11',
        avatar: 'img/avatar_5.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente12',
        avatar: 'img/avatar_6.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente13',
        avatar: 'img/avatar_7.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      },
      {
        nome: 'utente14',
        avatar: 'img/avatar_8.jpg',
        messaggi: [],
        last: '',
        lastMex: ''
      }
    ],
    utenteSelezionato: 'img/avatar_2.jpg',
    nomeSelezionato: 'Utente1',
    personaCercata: '',
    messaggioUtente: '',
    inviato: 'message-sent',
    ricevuto: 'message-received',
    indice: '0',
    classe: 'none',
    deleteMex: 'none',
    data: '',
    lastMex: '',
    messaggiRisposta: [
      {
        testo: 'ciao',
        mittente: 'ricevuto',
        menu: 'none'
      },
      {
        testo: 'scusa non posso parlare',
        mittente: 'ricevuto',
        menu:'none'
      },
      {
        testo: 'sono a lavoro',
        mittente: 'ricevuto',
        menu:'none'
      },
      {
        testo: 'ci sentiamo stasera',
        mittente: 'ricevuto',
        menu:'none'
      },
    ],
    smile: ["fas fa-smile", "fas fa-smile-beam", "fas fa-grin-squint", "fas fa-grin-beam-sweat"]
  },
  methods: {
    selezionaUtente(index){
      var maiuscola = '';
      var minuscola = '';
      this.utenteSelezionato = this.utenti[index].avatar;
      this.nomeSelezionato = this.utenti[index].nome;
      console.log(this.utenteSelezionato);
      maiuscola = this.nomeSelezionato.charAt(0).toUpperCase();
      minuscola = this.nomeSelezionato.substring(1).toLowerCase();
      this.nomeSelezionato = maiuscola + minuscola;
      console.log(this.nomeSelezionato);
      this.indice = index;
    },
    show(){
      console.log(this.personaCercata);
    },
    // newMessage(){
    //   var d = new Date();
    //   var day = d.getDate();
    //   var month = d.getMonth();
    //   var year = d.getFullYear();
    //   var hour = d.getHours();
    //   var minutes = d.getMinutes();
    //   var seconds = d.getSeconds();
    //   this.data = day + '/' + (month + 1) + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
    //   var parola = '';
    //   parola = this.messaggioUtente;
    //   var oggetto = {
    //     testo: parola,
    //     mittente:'io'
    //   }
    //   if (parola != ''){
    //     this.utenti[this.indice].messaggi.push(oggetto)
    //
    //   }
    //   this.messaggioUtente= ''
    // },
    messageRec(){
      var d = new Date();
      var day = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      this.data = day + '/' + (month + 1) + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
      var parola = '';
      parola = this.messaggioUtente;
      var oggetto = {
        testo: parola,
        mittente:'ricevuto',
        menu: 'none'
      }
        if (parola != ''){
          this.utenti[this.indice].messaggi.push(oggetto)
        }

      this.messaggioUtente= ''
    },
    // newMessage con anche risposta automatica
    newMessage(){
      var d = new Date();
      var day = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      this.data = day + '/' + (month + 1) + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
      this.lastMex =  hour + ':' + minutes + ':' + seconds;
      var random = Math.floor(Math.random()*4);
      var sistema = this.messaggiRisposta[random];
      var parola = '';
      parola = this.messaggioUtente;
      var oggetto = {
        testo: parola,
        mittente:'io',
        menu:'none'
      }
      if (parola != ''){
        this.utenti[this.indice].messaggi.push(oggetto)
        this.utenti[this.indice].last = this.data;


      }
      // fare arrow function perche uso this, la funzione normale devo usare self al posto del this
        setTimeout(() => this.utenti[this.indice].messaggi.push(sistema), 1000);
        // setTimeout(function(){
        //   self.utenti[self.indice].messaggi.push(self.messaggiRisposta[random])
        // })
        this.messaggioUtente= ''
    },
    smiles(smile){
      var d = new Date();
      var day = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      this.data = day + '/' + (month + 1) + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
      var nuovo = {
        testo: smile,
        mittente: 'io',
        menu:'none'
      }
      this.utenti[this.indice].messaggi.push(nuovo);
  },
    apriSmile(){
      this.classe = 'show'
    },
    chiudiSmile(){
      this.classe = 'none'
    },
    apriMexMenu(index){
      if (this.utenti[this.indice].messaggi[index].menu == 'none'){
        this.utenti[this.indice].messaggi[index].menu = 'show'
      } else{
        this.utenti[this.indice].messaggi[index].menu = 'none'
      }

    },
    deleteMessage(index){
      console.log(index);
      this.utenti[this.indice].messaggi.splice(index,1)
    }
  }
});
