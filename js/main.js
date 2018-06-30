import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        "title": "Work Example",
        "href": "https://example.com",
        "desc": `Neuter, pius parmas vix demitto de raptus, mirabilis verpa. Cum domina manducare, omnes poetaes promissio germanus, gratis rumores.
Castor magnum abaculus est. Absolutios sunt galataes de neuter saga. Cum verpa potus, omnes burguses magicae castus, emeritis gabaliumes.
Urbs, bursa, et castor. Nunquam perdere cotta. Nunquam tractare deus. Ferox, primus rationes vix anhelare de peritus, flavum coordinatae.
Sunt amicitiaes quaestio superbus, domesticus bromiumes. Sunt idoleumes quaestio brevis, altus brodiumes. Cum fiscina nocere, omnes quadraes anhelare emeritis, raptus hippotoxotaes.
Ubi est mirabilis palus? Nunquam locus demissio. Acipenser de azureus lamia, desiderium bulla! Elevatuss sunt classiss de fidelis homo.
Pol, a bene brodium, peritus fermium! Rusticus luna hic carpseriss nutrix est. Velox, varius ollas vix perdere de fortis, teres fiscina.`,
        "image": {
            "description": "example screenshot of a project involving code",
            "src": "images/example1.png"
        }
    }, {
        "title": "Work Example",
        "href": "https://example.com",
        "desc": `I command this modification, it's called cloudy history. Powerdrain at the galaxy that is when quirky suns harvest.
The nanomachine is more astronaut now than processor. brave and technically unrelated. The distant cosmonaut revolutionary gathers the transformator.
The human particle always examines the parasite. The nanomachine is more planet now than ship. clear and surprisingly ancient.
The sonic shower is a strange captain. Mineral at the radiation dome was the peace of stigma, transfered to a unrelated captain.
All hands walk. Adventure at the habitat nosilyengage was the procedure of resistance, assimilated to a carnivorous cosmonaut.
Harvest nosily like a delighted processor. Galaxy at the cabin was the paralysis of love, questioned to a harmless species.`,
        "image": {
            "description": "example screenshot of a project involving chemistry",
            "src": "images/example2.png"
        }
    }, {
        "title": "Work Example",
        "href": "https://example.com",
        "desc": `With ground beef  drink ramen lassi. Per guest prepare five teaspoons of whiskey with simmered marshmellow for dessert.
Everyone just loves the saltyness of garlic frittata rubd with brown sugar. Try warming caviar sauce tossed with whiskey.
Pork butt combines greatly with juicy pork shoulder. Try varnishing the triple sec rice with tasty salsa verde and sausages sauce, cooked.
Try grilling ghee paste blended with bourbon. Chicken breasts can be garnished with divided cucumber, also try mixing the pie with teriyaki.
Try seasoning the emeril's essence quinoas with niffy champaign and vinegar, sautéed. Try heating melon cheesecake whisked with fish sauce.
Niffy ramen can be made nutty by whisking with beer. Try rubbing the condensed milk nachos with aromatic bourbon and whipped cream, boilled.`,
        "image": {
            "description": "example screenshot of a project involving cats",
            "src": "images/example3.png"
        }
    }

]
ReactDom.render(<ExampleWork work={myWork}/>, document.getElementById('exampleWork'))
