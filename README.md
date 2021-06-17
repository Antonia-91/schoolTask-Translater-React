# schoolTask-Translater-React

### npm install 


Beskrivning
Övning: Translator

Du skall utveckla en översättningsmaskin med React. 

Det skall finnas ett input fält där besökaren kan skriva en textsträng, sedan skall denna sträng skickas till ett översättnings API (se länk nedan) och visas på skärmen. All översättning skall ske från svenska till något annat språk. 

Sidan skall byggas modulärt, dvs du skall kunna lägga till nya överstätningskomponenter och på det sättet göra det möjligt att översätta från andra språk.

Tekniska krav:

Varje input fält för att skriva in text skall hanteras som kopior av samma komponent. Med attribut (props) skall du kunna skapa nya input fält som översätter till andra språk.
Det skall finnas 1 st översättningskomponent som alla språk som skall översättas använder.
Det skall finnas 1 st resultat komponent som visar översättningen från samtliga input komponenter.
Översättnings API
https://mymemory.translated.net/doc/spec.php