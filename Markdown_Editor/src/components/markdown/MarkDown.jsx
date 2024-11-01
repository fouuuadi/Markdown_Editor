import React from 'react'
import PropTypes from 'prop-types'


function MarkDown({nom, contenu}) {
  return (
    <article className="quote_of_the_day">
        <p>{nom}.md</p>
        <p>{contenu}</p>
    </article>
  )
}

MarkDown.propTypes = {
    nom: PropTypes.string.isRequired,
    contenu : PropTypes.string.isRequired,
};
export default MarkDown;