import {SET_ACTIVE_PLACE} from "../actions/actionTypes";

const initState = {
    activePlace: 0,
    cities : [
        {id: 707860, name: "Hurzuf"},
        {id: 519188, name: "Novinki"},
        {id: 1283378, name: "Gorkhā"},
        {id: 1270260, name: "State of Haryāna"},
        {id: 708546, name: "Holubynka"},
        {id: 1283710, name: "Bāgmatī Zone"},
        {id: 529334, name: "Mar’ina Roshcha"},
        {id: 1269750, name: "Republic of India"},
        {id: 1283240, name: "Kathmandu"},
        {id: 703363, name: "Laspi"},
        {id: 3632308, name: "Merida"},
        {id: 473537, name: "Vinogradovo"},
        {id: 384848, name: "Qarah Gawl al ‘Ulyā"},
        {id: 569143, name: "Cherkizovo"},
        {id: 713514, name: "Alupka"},
        {id: 2878044, name: "Lichtenrade"},
        {id: 464176, name: "Zavety Il’icha"},
        {id: 295582, name: "‘Azriqam"},
        {id: 1271231, name: "Ghūra"},
        {id: 690856, name: "Tyuzler"},
        {id: 464737, name: "Zaponor’ye"},
        {id: 707716, name: "Il’ichëvka"},
        {id: 697959, name: "Partyzans’ke"},
        {id: 803611, name: "Yurevichi"},
        {id: 614371, name: "Gumist’a"},
        {id: 874560, name: "Ptitsefabrika"},
        {id: 874652, name: "Orekhovo"},
        {id: 2347078, name: "Birim"},
        {id: 2051302, name: "Priiskovyy"},
        {id: 563692, name: "Dzhaga"},
        {id: 481725, name: "Tret’ya Rota"},
        {id: 2638976, name: "Ruislip"},
        {id: 2892705, name: "Karow"},
        {id: 2922336, name: "Gatow"},
        {id: 975511, name: "Mkuze"},
        {id: 1280737, name: "Lhasa"},
        {id: 745042, name: "İstanbul"},
        {id: 3496831, name: "Mao"},
        {id: 2017370, name: "Russian Federation"},
        {id: 2045761, name: "De-Friz"},
        {id: 1257986, name: "Rumbak"},
        {id: 476350, name: "Vavibet"},
        {id: 1343000, name: "Surtagān Chib"},
        {id: 456169, name: "Rīgas Rajons"},
        {id: 475279, name: "Verkhneye Shchekotikhino"},
        {id: 711349, name: "Bucha"},
        {id: 798544, name: "Republic of Poland"},
        {id: 3094325, name: "Kuchary"},
        {id: 6255149, name: "North America"},
        {id: 3575514, name: "Brumaire"}
    ]
}

export default function appReducer( state = initState, action) {
    switch (action.type){
        case SET_ACTIVE_PLACE:
            return{
                ...state, activePlace: action.index
            }
        default:
            return state
    }
}