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
    setTextPlain(html);
  }

  function HandleExport() {
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

  return (
    <div className='page2'>
      <header>
        <h1>Markdown Editor</h1>
        <div className='btn_page2'>
          <Button action={() => navigate('/')} label="Page 1" color="none" />
        </div>
        
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
      </section>

      <div className='js-ct'>
        <section className='writeMd'>
          <textarea value={md} onChange={HandleChangeMd} rows="10" cols="50" placeholder="Écris ton Markdown ici..."></textarea>
        </section>
        <section className='toHtml'>
          <div className='content' dangerouslySetInnerHTML={{ __html: textPlain }} />
        </section>
      </div>
    </div>
  );
}

export default UpdateMarkdown;