var nuovo = new Vue({
  el: '#chat-view',
  data: {
    utenti: [
      {
        nome: 'utente1',
        avatar: 'img/avatar_2.jpg',
        messaggi: []
      },
      {
        nome: 'utente2',
        avatar: 'img/avatar_3.jpg',
        messaggi: []

      },
      {
        nome: 'utente3',
        avatar: 'img/avatar_4.jpg',
        messaggi: []
      },
      {
        nome: 'utente4',
        avatar: 'img/avatar_5.jpg',
        messaggi: []
      },
      {
        nome: 'utente5',
        avatar: 'img/avatar_6.jpg',
        messaggi: []
      },
      {
        nome: 'utente6',
        avatar: 'img/avatar_7.jpg',
        messaggi: []
      },
      {
        nome: 'utente7',
        avatar: 'img/avatar_8.jpg',
        messaggi: []
      },
      {
        nome: 'utente8',
        avatar: 'img/avatar_2.jpg',
        messaggi: []
      },
      {
        nome: 'utente9',
        avatar: 'img/avatar_3.jpg',
        messaggi: []
      },
      {
        nome: 'utente10',
        avatar: 'img/avatar_4.jpg',
        messaggi: []
      },
      {
        nome: 'utente11',
        avatar: 'img/avatar_5.jpg',
        messaggi: []
      },
      {
        nome: 'utente12',
        avatar: 'img/avatar_6.jpg',
        messaggi: []
      },
      {
        nome: 'utente13',
        avatar: 'img/avatar_7.jpg',
        messaggi: []
      },
      {
        nome: 'utente14',
        avatar: 'img/avatar_8.jpg',
        messaggi: []
      }
    ],
    utenteSelezionato: 'img/avatar_2.jpg',
    nomeSelezionato: 'Utente1',
    personaCercata: '',
    messaggioUtente: '',
    inviato: 'message-sent',
    ricevuto: 'message-received',
    indice: '0',
    messaggi: [
      {
        testo: 'ciao',
        mittente: 'io'
      },
    ]
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
    newMessage(){
      var parola = '';
      parola = this.messaggioUtente;
      var oggetto = {
        testo: parola,
        mittente:'io'
      }
      if (parola != ''){
        this.utenti[this.indice].messaggi.push(oggetto)

      }
      this.messaggioUtente= ''
    },
    messageRec(){
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
    }
  }
});
