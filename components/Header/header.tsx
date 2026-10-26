

export default function Header(){
    return(
      <div className="header-main">
        <div className="header">

            <div className="logo">
                          <img
                             src="/img/imgi_1_housemait-logo-web.svg"
                             alt= "logo"
                             width = {150}
                             height= {100}
                          />
                          
            </div>

            <div className="button button-transparent">
                      <a href="#">
                        Get started
                      </a>
            </div>

        </div>
        </div>
    );
}