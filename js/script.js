var nuovo = new Vue({
  el: '#chat-view',
  data: {
    utenti: [
      {
        nome: 'utente1',
        avatar: 'img/avatar_2.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente2',
        avatar: 'img/avatar_3.jpg',
        messaggi: [],
          last: ''

      },
      {
        nome: 'utente3',
        avatar: 'img/avatar_4.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente4',
        avatar: 'img/avatar_5.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente5',
        avatar: 'img/avatar_6.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente6',
        avatar: 'img/avatar_7.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente7',
        avatar: 'img/avatar_8.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente8',
        avatar: 'img/avatar_2.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente9',
        avatar: 'img/avatar_3.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente10',
        avatar: 'img/avatar_4.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente11',
        avatar: 'img/avatar_5.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente12',
        avatar: 'img/avatar_6.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente13',
        avatar: 'img/avatar_7.jpg',
        messaggi: [],
        last: ''
      },
      {
        nome: 'utente14',
        avatar: 'img/avatar_8.jpg',
        messaggi: [],
        last: ''
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
    messaggiRisposta: [
      {
        testo: 'ciao',
        mittente: 'ricevuto'
      },
      {
        testo: 'scusa non posso parlare',
        mittente: 'ricevuto'
      },
      {
        testo: 'sono a lavoro',
        mittente: 'ricevuto'
      },
      {
        testo: 'ci sentiamo stasera',
        mittente: 'ricevuto'
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
        mittente:'ricevuto'
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
      var random = Math.floor(Math.random()*4);
      var parola = '';
      parola = this.messaggioUtente;
      var oggetto = {
        testo: parola,
        mittente:'io'
      }
      if (parola != ''){
        this.utenti[this.indice].messaggi.push(oggetto)
        this.utenti[this.indice].last = this.data;

      }
        setTimeout(() => this.utenti[this.indice].messaggi.push(this.messaggiRisposta[random]), 1000);
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
        mittente: 'io'
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
      // if (this.deleteMex == 'none'){
      //   this.deleteMex = 'show'
      // } else{
      //   this.deleteMex = 'none'
      // }
      console.log(index);
    },
    deleteMessage(index){
      console.log(index);
      this.utenti[this.indice].messaggi.splice(index,1)
    }
  }
});
