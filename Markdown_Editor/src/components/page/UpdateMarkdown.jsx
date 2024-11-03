<<<<<<< HEAD
import { useState } from 'react'
import { marked } from 'marked'
import Button from '../button/Button';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'; 



function UpdateMarkdown() {

  const navigate = useNavigate();
  

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
=======
import { useState } from 'react';
import { marked } from 'marked';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

function UpdateMarkdown() {
  const navigate = useNavigate();
  const [md, setMd] = useState('');
  const [textPlain, setTextPlain] = useState('');
  const [saveMd, setSaveMd] = useState([]);
  const [fileName, setFileName] = useState('nouveau_fichier'); 

  function HandleChangeMd(e) {
    const mdContent = e.target.value;
    setMd(mdContent);
    const html = marked.parse(mdContent);
>>>>>>> aryles
    setTextPlain(html);
  }

  function HandleExport() {
<<<<<<< HEAD
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
=======
    const blob = new Blob([md], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.md`; // Utilisation du nom du fichier
    link.click();
    console.log('Donnée exportée');
    setSaveMd(prevState => [...prevState, { nom: fileName, contenu: md }]);
  }

  function HandleImport(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setMd(event.target.result);
      const html = marked.parse(event.target.result);
      setTextPlain(html);
      setFileName(file.name.replace('.md', '')); // Mise à jour du nom du fichier
    };
    reader.readAsText(file);
  }

>>>>>>> aryles
  return (
    <>
      <header>
        <h1>Markdown Editor</h1>
<<<<<<< HEAD
        <Button
          action={()=>navigate("/")}
          label="Page 1"
          color="none"
          />
      </header> 
      <section className='header'>
        {/** un button pour export */}
        <button type='submit' onClick={() => HandleExport()} className='btn-export style-btn'>export</button>
        {/** un button pour import */}

        <input type='file' accept='.md' className='btn-import style-btn-import' aria-placeholder='export' />

        {/** able to edit file's name */}
        <button type='submit' onClick={() => HandleEdit()} className='btn-export style-btn'>edit</button>
=======
        <Button action={() => navigate('/')} label="Page 1" color="none" />
      </header>
      <section className='header'>
        <input 
          type="text" 
          value={fileName} 
          onChange={(e) => setFileName(e.target.value)} 
          placeholder="Nom du fichier"
          className="input-filename"
        />
        <button type='submit' onClick={HandleExport} className='btn-export style-btn'>Export</button>
        <input type='file' accept='.md' className='btn-import style-btn-import' aria-placeholder='import' onChange={HandleImport} />
>>>>>>> aryles
      </section>

      <div className='js-ct'>
        <section className='writeMd'>
<<<<<<< HEAD
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
=======
          <textarea value={md} onChange={HandleChangeMd} rows="10" cols="50" placeholder="Écris ton Markdown ici..."></textarea>
        </section>
        <section className='toHtml'>
          <div className='content' dangerouslySetInnerHTML={{ __html: textPlain }} />
        </section>
      </div>
    </>
  );
>>>>>>> aryles
}

export default UpdateMarkdown;
