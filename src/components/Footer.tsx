import footerLogo from '../assets/footerLogo.png';


export const Footers = () => {

  return (
    <>

      <footer className="footer">

        <div className="footerBody">

          <div className="footerSec">
            <div className="footerLinksContainer">
              <img src={footerLogo} alt="" className="footerLogo" />
              <p className="footerText1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt amet odio assumenda quisquam illum quam dolores quasi, reiciendis dolor quas mollitia quidem aliquam ipsum inventore cupiditate exercitationem labore placeat!</p>
            </div>
          </div>

          <div className="footerSec">
            <div className="footerLinksContainer">
              <h5 className="footerTextLinksHead">Quick Links</h5>
              <div className="footerLinksBox">
                <a href="" className="footerLinksText">clases</a>
                <a href="" className="footerLinksText">about</a>
                <a href="" className="footerLinksText">contact</a>
                <a href="" className="footerLinksText">contact</a>
                <a href="" className="footerLinksText">contact</a>
                <a href="" className="footerLinksText">contact</a>
              </div>
            </div>
          </div>

          <div className="footerSec">
            <div className="footerLinksContainer">
              <h5 className="footerTextLinksHead">main categories</h5>
              <div className="footerLinksBox">
                <a href="" className="footerLinksText">al</a>
                <a href="" className="footerLinksText">ol</a>
                <a href="" className="footerLinksText">contact</a>
                <a href="" className="footerLinksText">contact</a>
                <a href="" className="footerLinksText">contact</a>
                <a href="" className="footerLinksText">contact</a>
              </div>
            </div>
          </div>

          <div className="footerSec">
            <div className="footerLinksContainer">
              <h5 className="footerTextLinksHead">social</h5>
              <div className="footerLinksSocial">
                <a href="" className="footerLinksScoicalLink"><i className="fa-brands fa-facebook footerLinksScoicalIcon"></i></a>
                <a href="" className="footerLinksScoicalLink"><i className="fa-brands fa-facebook footerLinksScoicalIcon"></i></a>
                <a href="" className="footerLinksScoicalLink"><i className="fa-brands fa-facebook footerLinksScoicalIcon"></i></a>
                <a href="" className="footerLinksScoicalLink"><i className="fa-brands fa-facebook footerLinksScoicalIcon"></i></a>
                <a href="" className="footerLinksScoicalLink"><i className="fa-brands fa-facebook footerLinksScoicalIcon"></i></a>
                <a href="" className="footerLinksScoicalLink"><i className="fa-brands fa-facebook footerLinksScoicalIcon"></i></a>
              </div>
              <div className="flex items-center gap-4 mt-16 mb-16 emengencyCallBox">
                <i className="fa-solid fa-phone-volume emengencyCallIcon"></i>
                <h3 className="emengencyCallText">+123456789</h3>
              </div>
            </div>
          </div>

        </div>
      </footer >
      <div className="secondFooter">
        <p className="secondFooterText">&copy; 2025 and all right reserved by <span className="secondFooterText2">tuitora</span></p>
        <p className="secondFooterText3">developed by novonex software solutuion</p>
      </div>

    </>

  )

}