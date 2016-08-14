import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';

// Import Style
import styles from './Header.css';

export function Header(props, context) { // eslint-disable-line
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes}
        </ul>
      </div>
      <Row className={styles.content}>
        <Col sm={6}>
          <h1 className={styles['site-title']}>
            <FormattedMessage id="siteTitle" />
          </h1>
        </Col>
        <Col sm={6}>
          <h3 className={styles['site-subtitle']}>
            <Link className={styles.newTicket} to="/new">Inserir nova chamada</Link>
          </h3>
        </Col>
      </Row>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
