const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',()=>{ 
  console.log ('Tonton Culer est rentré à la maison');
})

client.on('message', function (message) {
    if (message.content === '!culer')
      message.channel.send('Oui, je suis la')
    });

client.on ('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
      return channel.send ('Bienvenue '  + member.displayName)
        }).catch(console.error)
  })
  var rand = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42", "43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100",]
  var tamère = ["Ta mère est tellement conne qu'elle a même échoué à l'examen d'urine","Ta mère est tellement conne qu'elle ne comprend même pas ce qu'elle pense","Ta mère est tellement conne qu'elle préfère la pilule au préservatif parce que c'est plus facile à avaler","Ta mère est tellement conne qu'elle s'est acheté une Nintendo pour avoir 32 bites.","Ta mère est tellement conne qu'elle croit que Silicon Valley, c'est là où on se fait refaire les seins","Ta mère est tellement moche que des fois j'me dis qu'être aveugle c'est pas si mal.","Ta mère est tellement moche que même son chien il dit qu'il la connaît pas.","Ta mère est tellement moche que si j'avais sa tête a la place de mon cul j'aurais honte de chier.","Ta mère est tellement conne quelle monte sur une chaise quand on lui demande de parler plus haut","Ta mère est tellement conne qu'elle croit qu'un cunilingus, c'est un nuage","Ta mère est tellement conne qu'elle regarde 'Hélène et les garçons' avec un dictionnaire","Ta mère est tellement conne qu'elle croit que Nymphomane, c'est un super-héros","Ta mère est tellement grosse que sa taille de ceinture c'est Équateur.","Ta mère est tellement grosse que lorsqu'elle est sur la plage , y a Greenpeace qui vient pour la remettre à la mer.",
  "Ta mère est tellement grosse que quand elle se baigne dans la mer du Nord, elle inonde les Pays-Bas.","Ta mère est tellement conne quand elle est du même avis que moi, j'ai l'impression de m'être trompé","Ta mère est tellement conne qu'elle a trébuche sur un téléphone sans fil","Ta mère à cheval avec Jul","Ta mère à cheval sur un âne. Un âne à cheval sur ta mère (c'est selon)","Ta mère a des lunettes si épaisses qu'elle voit l'avenir","Ta mère est tellement conne que quand elle joue avec le chien c'est elle qui va chercher la balle.","Ta mère est tellement conne qu'elle croit que X-men c'est un acteur porno.","Ta mère est tellement conne qu'elle croit que Castex c'est un préservatif","Ta mère elle a fait un Bac G","Ta mère elle a les dents tellement jaunes que quand elle sourit il y a du soleil.","Ta mère elle est vierge.","Ta mère elle est zoophile, elle aime ton père","Ta mère est tellement cochonne qu'elle a épousé un porc....Ton père !!!","Ta mère est tellement conne qu'elle croit que le téléphone sans fil c'est pour appeler les sourds.","Ta mère est tellement conne qu'elle croit que Linux c'est une marque de lessive","Ta mère est tellement conne qu'elle s'est fait renverser par une voiture en stationnement.","Ta mère est tellement conne que quand je lui ai demandé d'aller chez Darty acheter une TV couleur, elle m'a demandé 'Quelle couleur ?'","Ta mère est tellement grosse qu'on la met sur le toit de la maison lors d'un cyclone. (pour pas qu'il s'envole)","Ta mère est tellement grosse qu'elle roule des moquettes pour se faire des tampax.","Ta mère est tellement grosse que quand elle prend un bain, il n'y a plus de place pour mettre d'eau dans la baignoire.","Ta mère est tellement grosse que quand elle entre chez mammouth on croit quec'est le patron.","Ta mère est tellement conne qu'elle dit 'Merci madame' à l'horloge parlante","Ta mère est tellement grosse qu'elle fait de l'acuponcture avec des aiguilles à tricoter!.","Ta mère est tellement grosse que pour lui faire une radio il lui faut un satellite.","Ta mère est tellement grosse que quand Dieu a créé le Monde, il a dit : ' Pousse toi la grosse ' et la lumière fut.","Ta mère elle appuie sur l'accélérateur du SERN.","Ta mère elle pue tellement que les putois l'appellent maman.","Ta mère, elle pue tellement de la gueule qu'on lui raccroche au nez quand elle téléphone.","Ta mère est tellement vieille que son numéro de Sécu est en chiffres romains.","Ta mère est tellement vieille que c'est elle qui a écrit la préface de la Bible.","Ta mère est tellement vieille qu'elle a connu la mer morte malade","Ta mère est tellement vieille qu'elle est en noir et blanc.","Ta mère est tellement vieille que t'es né avec des écailles.","Ta mère elle fait des trous dans les cannelloni","Ta mère elle compose pour Booba","Ta mère elle fait des crêpes au couscous"]


client.on('message', message => {
      if (message.content === `!rand`) {
          message.channel.send(rand[Math.floor(Math.random() * rand.length)])
          console.log(`rand a été utilisé !.`)
      }
  })

  client.on('message', message => {
    if (message.content === '!tamère') {
        message.channel.send(tamère[Math.floor(Math.random() * tamère.length)])
        console.log(`La commande "!tamère" a été utilisé`)
    }
})

client.login(process.env.TOKEN)