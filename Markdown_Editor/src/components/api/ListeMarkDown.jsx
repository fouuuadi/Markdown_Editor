import React from 'react'
//import MarkDown from './MarkDown'
import { useState } from 'react'

function ListeMarkDown(){

const [Tableau, setTableau] = useState([
{nom:"Fichier 1", contenu: "Je suis le fichier 1"},
{nom:"Fichier 2", contenu: "Je suis le fichier 2"},
{nom:"Fichier 3", contenu: "Je suis le fichier 3"},
])



// code fait par Hugo Martins (assisté par ChatGPT de l'ordre d'environ 10% du code actuel sur la page)
    return ( 
        <div>
            {Tableau.map((e, index) =>(
            <div key = {index} className='quote_of_the_day'>
                {e.nom}
                <button onClick={() =>setTableau(Tableau.filter((_, i) => i !== index))}>Supprimer le fichier</button>
               <ModifierMarkDown Tableau={Tableau} setTableau={setTableau} index={index}/>
            </div>
            ))}
            <AjouterMarkDown Tableau={Tableau} setTableau={setTableau} />
        </div>
    )
  }



export function AjouterMarkDown({Tableau, setTableau}){
    return (
        <div className='api'>
            <button onClick={() => setTableau([])}>Supprimer tout les fichiers</button>
            <button onClick={() => setTableau([...Tableau, {nom:'Nouveau fichier', contenu:'bonjour'}])}>Ajouter un fichier</button>            
        </div>
    )
}


export function ModifierMarkDown({Tableau, setTableau, index}) {
    const [TextArea, setTextArea] = useState(false);
    const [newContent, setNewContent] = useState(Tableau[index].contenu);

    return (
        <>
            <div className='quote_of_the_day'>
                <button onClick={() => setTextArea(true)}>Modifier le fichier</button>
            </div>
            <div>
                {TextArea && (
                    <div>
                        <textarea defaultValue={newContent} onChange={(event) => setNewContent(event.target.value)}/>
                        <br/>
                        <button onClick={() => {
                                                setTextArea(false);
                                                setTableau(Tableau.map((item, i) =>i === index ? { ...item, contenu: newContent } : item));
                                            }
                                        }>Enregistrer les modifications
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ListeMarkDown