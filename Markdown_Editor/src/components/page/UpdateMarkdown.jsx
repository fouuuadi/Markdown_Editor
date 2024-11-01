import React, { useState } from 'react'
import { marked } from 'marked'
import '.../index.css'

function UpdateMarkdown() {

  const [md, setMd] = useState(""); // stocker la valeur du markdown;
  const [textPlain, setTextPlain] = useState(""); // pour la conversion en text brut 
  const [saveMd, setSaveMd] = useState([]); // pour sauvegarder les fichers markdown

  function HandleChangeMd(e) {
    // recuperer la valeur du champ 
    const mdContent = e.target.value;
    setMd(mdContent);

    // convertir la valeur du champ
    const html = marked.parse(mdContent)

    // text sans les balises
    /* const textOnly = html.replace(/<\/?[^>]+(>|$)/g, ""); */

    // mettre à jour le text 
    setTextPlain(html);
  }

  function HandleExport() {
    // Créer un fichier blob à partir du contenu Markdown
    const blob = new Blob([md], { type: 'text/markdown' });

    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'fichier.md'; // Nom du fichier exporté

    // Déclencher le téléchargement
    link.click();
    console.log('donnée exportée')

    // savegarder le ficher
    setSaveMd(prevState => [...prevState, md]);
  }

  function HandleEdit() {
    console.log('donnée Edit')
  }

  /* const mdContent = '# Mon Titre\n\nVoici un paragraphe avec **du texte en gras**.'; */


  // creer un textArea pour entrer le markdown
  // (ce champ prend que du markdown)
  //recuperer la valeur de text
  // c'est-a-dire la mettre dans une variable ou un objet
  // et la parser dans le MdRerender
  return (
    <>
      <section className='header'>
        {/** un button pour export */}
        <button type='submit' onClick={() => HandleExport()} className='btn-export style-btn'>export</button>
        {/** un button pour import */}

        <input type='file' accept='.md' className='btn-import style-btn-import' aria-placeholder='export' />

        {/** able to edit file's name */}
        <button type='submit' onClick={() => HandleEdit()} className='btn-export style-btn'>edit</button>
      </section>

      <div className='js-ct'>
        <section className='writeMd'>
          <textarea value={md}
            onChange={HandleChangeMd}
            rows="10"
            cols="50"
            placeholder="Écris ton Markdown ici...">
          </textarea>
        </section>


        <section className='toHtml'>
          {/* <MarkdownRenderer mdContent={mdContent} /> */}

          <div className='content'
            dangerouslySetInnerHTML={{ __html: textPlain }} />

        </section>
      </div>


    </>
  )
}

export default UpdateMarkdown
