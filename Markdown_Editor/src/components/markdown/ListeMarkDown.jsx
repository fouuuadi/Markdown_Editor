import React from 'react'
//import MarkDown from './MarkDown'
import { useState } from 'react'

function ListeMarkDown(){

const [Tableau, setTableau] = useState([
{nom:"Fichier 1", contenu: "Je suis le fichier 1"},
{nom:"Fichier 2", contenu: "Je suis le fichier 2"},
{nom:"Fichier 3", contenu: "Je suis le fichier 3"},
])

const downloadFile = (file) => {
    const element = document.createElement('a');
    const fileBlob = new Blob([file.contenu], { type: 'text/markdown' });
    element.href = URL.createObjectURL(fileBlob);
    element.download = `${file.nom}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };



// code fait par Hugo Martins (assisté par ChatGPT de l'ordre d'environ 10% du code actuel sur la page)
return (
    <div className='section2'>
      {Tableau.map((e, index) => (
        <div key={index} className='item'>
          <input 
            type="text" 
            value={e.nom} 
            onChange={(event) => {
              const newNom = event.target.value;
              setTableau(Tableau.map((item, i) => i === index ? { ...item, nom: newNom } : item));
            }} 
            placeholder="Nom du fichier"
          />
          <button className="btn_list_markdown" onClick={() => setTableau(Tableau.filter((_, i) => i !== index))}>Supprimer le fichier</button>
          <button className="btn_list_markdown" onClick={() => downloadFile(e)}>Télécharger</button>
          <ModifierMarkDown Tableau={Tableau} setTableau={setTableau} index={index} />
        </div>
      ))}
      <AjouterMarkDown Tableau={Tableau} setTableau={setTableau} />
    </div>
  );
}



export function AjouterMarkDown({Tableau, setTableau}){
    return (
        <div className='section2_btn'>
            <button className="btn_list_markdown" onClick={() => setTableau([])}>Supprimer tout les fichiers</button>
            <button className="btn_list_markdown" onClick={() => setTableau([...Tableau, {nom:'Nouveau fichier', contenu:'bonjour'}])}>Ajouter un fichier</button>            
        </div>
    )
}


export function ModifierMarkDown({Tableau, setTableau, index}) {
    const [TextArea, setTextArea] = useState(false);
    const [newContent, setNewContent] = useState(Tableau[index].contenu);


    return (
        <>
          <div>
            <button className="btn_list_markdown" onClick={() => setTextArea(true)}>Modifier le fichier</button>
          </div>
          <div>
            {TextArea && (
              <div>
                <textarea defaultValue={newContent} onChange={(event) => setNewContent(event.target.value)} />
                <br />
                <button className="btn_list_markdown" onClick={() => {
                  setTextArea(false);
                  setTableau(Tableau.map((item, i) => i === index ? { ...item, contenu: newContent } : item));
                }}>Enregistrer les modifications</button>
              </div>
            )}
          </div>
        </>
      );
    }
    
    export default ListeMarkDown;


