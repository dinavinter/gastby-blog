import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import {Bar} from "./Navbar";
import {AuthScreen} from "./Auth";

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
        </div>
        <AuthScreen />
        <div className="content">
            <div className="inner">
                <h1>Boom Deal</h1>
                <p>Hot deals all over the place </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('groups')}}>Groups</a></li> 
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('captcha')}}>Captcha</a></li> 
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('consent')}}>Consent</a></li> 
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('idx')}}>IDX</a></li> 
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('ato')}}>ATO</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('nss')}}>NSS</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('oauth')}}>OAuth</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('liteUi')}}>Lite</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gai')}}>GAI</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('fido')}}>Fido</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
