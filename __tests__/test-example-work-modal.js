import React from 'react';
import {shallow} from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
const myWork =
    {
        "title": "Work Example",
        "href": "http://example.com",
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
    };
describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myWork} open={false}/>)
    let openComponent = shallow(<ExampleWorkModal example={myWork} open={true}/>)
    let anchors = component.find('a');
    it("Should contain a single anchor element", () => {
        expect(anchors.length).toEqual(1);
    });
    it("Should link to our project", () => {
        expect(anchors.prop("href")).toEqual(myWork.href);
    })
    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true)
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true)
    })
});
