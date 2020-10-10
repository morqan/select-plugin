import {Select} from "./select/select";
import './select/styles.scss'


const select = new Select('#select',{
    placeholder: 'Select element',
    data: [
        {id: 1, value: 'React'},
        {id: 2, value: 'React Native'},
        {id: 3, value: 'Angular'},
        {id: 4, value: 'Veu'},
        {id: 5, value: 'Next'},
    ]
})


window.slct = select
