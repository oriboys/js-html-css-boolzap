var nuovo = new Vue({
  el: '#chat-view',
  data: {
    utenti: [
      {
        nome: 'utente1',
        avatar: 'img/avatar_2.jpg'
      },
      {
        nome: 'utente2',
        avatar: 'img/avatar_3.jpg'
      },
      {
        nome: 'utente3',
        avatar: 'img/avatar_4.jpg'
      },
      {
        nome: 'utente4',
        avatar: 'img/avatar_5.jpg'
      },
      {
        nome: 'utente5',
        avatar: 'img/avatar_6.jpg'
      },
      {
        nome: 'utente6',
        avatar: 'img/avatar_7.jpg'
      },
      {
        nome: 'utente7',
        avatar: 'img/avatar_8.jpg'
      },
      {
        nome: 'utente8',
        avatar: 'img/avatar_2.jpg'
      },
      {
        nome: 'utente9',
        avatar: 'img/avatar_3.jpg'
      },
      {
        nome: 'utente10',
        avatar: 'img/avatar_4.jpg'
      },
      {
        nome: 'utente11',
        avatar: 'img/avatar_5.jpg'
      },
      {
        nome: 'utente12',
        avatar: 'img/avatar_6.jpg'
      },
      {
        nome: 'utente13',
        avatar: 'img/avatar_7.jpg'
      },
      {
        nome: 'utente14',
        avatar: 'img/avatar_8.jpg'
      }
    ],
    utenteSelezionato: 'img/avatar_2.jpg',
    nomeSelezionato: 'Utente1',
    personaCercata: '',
    messaggioUtente: '',
    messaggiInviati: ['ciao', 'come stai'],
    messaggiRicevuti:['ho da fare']
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
    },
    show(){
      console.log(this.personaCercata);
    },
    newMessage(){
      var parola = '';
      parola = this.messaggioUtente;
      this.messaggiInviati.push(parola)
    },
  }
});
