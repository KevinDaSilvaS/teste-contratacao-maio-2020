import React from 'react'
import './Page.css'
import first from '../images/first.jpg'
import middle from '../images/middle.jpg'
import last from '../images/last.jpg'

class Page extends React.Component{
    constructor(props){
        super(props);

        this.state = new Object();
    }

    render(){
        return (
        <div>
            <header >
                <nav className="">
                    <div className="nav-wrapper page-header">
                        <a href="#" className="brand-logo logo">Logo</a>
                    </div>
                </nav>
            </header>
            <div className="card custom-card">
                <div className="row col s12 m12">
                    <div className="">
                        <h3 className="title-color">Lorem Ipsum dolor</h3>
                        <p className="column-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                        Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                        Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                        Integer nec urna non nulla rutrum pretium vel a turpis. 
                        Donec euismod semper leo in condimentum. Ut vulputate imperdiet nibh, 
                        quis maximus quam cursus eu. Suspendisse accumsan magna ullamcorper 
                        justo eleifend, at bibendum dolor tincidunt. Pellentesque eleifend, 
                        quam vitae mattis semper, mi dolor mollis massa, sit amet tincidunt 
                        lorem augue ac tortor. Aliquam luctus quis dolor at gravida.</p>
                        <p className="column-text">Quisque scelerisque id odio sit amet fermentum. 
                        Ut eu faucibus neque. Mauris a suscipit est. 
                        Duis auctor, magna et dictum viverra, augue purus laoreet arcu, 
                        sit amet sodales elit nisl vitae lorem. 
                        Donec at tincidunt mi. Nulla facilisi. 
                        Quisque quis metus vel quam condimentum aliquam. 
                        Duis et placerat eros, eu efficitur ex. Cras leo metus, 
                        efficitur quis felis at, laoreet ornare mauris. 
                        Donec dictum quam eget arcu cursus vehicula. 
                        Sed luctus ipsum et elementum mollis. 
                        Ut commodo id urna nec hendrerit. Morbi nec ipsum orci. 
                        Etiam at nulla id nisl sagittis laoreet.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.</p>
                    </div>

                    <hr className="sep-normal"></hr> 

                    <div className="card-wrapper">

                        <div className="col s12 m4">
                            <div className="card image-cards card-first">
                                <img className="img-card" src={first}>
                                </img>
                                <div className="img-card card-filter"></div>
                                
                                <div className="white-line-top">-</div>
                                <h5 className="title-inside-card">Lorem Ipsum</h5>
                                <p className="text-inside-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                                Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                                Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                                Integer nec urna non nulla rutrum pretium vel a turpis. 
                                Donec euismod semper leo in condimentum. Ut vulputate imperdiet nibh, 
                                quis maximus quam cursus eu. Suspendisse accumsan magna ullamcorper 
                                justo eleifend, at bibendum dolor tincidunt. Pellentesque eleifend, 
                                quam vitae mattis semper, mi dolor mollis massa, sit amet tincidunt 
                                lorem augue ac tortor.</p>

                                <div className="arrow">
                                    <i className="material-icons arrow-icon">arrow_forward</i>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card image-cards card-first">
                                <img className="img-card" src={middle}>
                                </img>
                                <div className="img-card card-filter2"></div>
                                <div className="white-line-top">-</div>
                                <h5 className="title-inside-card">Lorem Ipsum</h5>
                                <p className="text-inside-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                                Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                                Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                                Integer nec urna non nulla rutrum pretium vel a turpis. 
                                Donec euismod semper leo in condimentum. Ut vulputate imperdiet nibh, 
                                quis maximus quam cursus eu.</p>

                                <div className="arrow">
                                    <i className="material-icons arrow-icon">arrow_forward</i>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card image-cards card-first">
                                <img className="img-card" src={last}>
                                </img>
                                <div className="img-card card-filter3"></div>
                                <div className="white-line-top">-</div>
                                <h5 className="title-inside-card">Lorem Ipsum</h5>
                                <p className="text-inside-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                                Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                                Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                                Integer nec urna non nulla rutrum pretium vel a turpis.</p>

                                <div className="arrow">
                                    <i className="material-icons arrow-icon">arrow_forward</i>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <hr className="sep-giant"></hr> 

                    <div className="">
                        <h3 className="title-color">Lorem Ipsum dolor</h3>
                        <p className="column-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                        Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                        Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                        Integer nec urna non nulla rutrum pretium vel a turpis. 
                        Donec euismod semper leo in condimentum. Ut vulputate imperdiet nibh, 
                        quis maximus quam cursus eu. Suspendisse accumsan magna ullamcorper 
                        justo eleifend, at bibendum dolor tincidunt. Pellentesque eleifend, 
                        quam vitae mattis semper, mi dolor mollis massa, sit amet tincidunt 
                        lorem augue ac tortor. Aliquam luctus quis dolor at gravida.
                        Quisque scelerisque id odio sit amet fermentum. 
                        Ut eu faucibus neque. Mauris a suscipit est. 
                        Duis auctor, magna et dictum viverra, augue purus laoreet arcu, 
                        sit amet sodales elit nisl vitae lorem. 
                        Donec at tincidunt mi. Nulla facilisi. 
                        Quisque quis metus vel quam condimentum aliquam. 
                        Duis et placerat eros, eu efficitur ex. Cras leo metus, 
                        efficitur quis felis at, laoreet ornare mauris. 
                        Donec dictum quam eget arcu cursus vehicula. 
                        Sed luctus ipsum et elementum mollis. 
                        Ut commodo id urna nec hendrerit. Morbi nec ipsum orci. 
                        Etiam at nulla id nisl sagittis laoreet.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>
            <div className="card custom-card clear-blue">
                <div className="card custom-card middle-card">
                    <div className="row col s12 m12">
                        <div className="space">
                            <div className="circle">-</div>
                            <h5 className="title-inside-final-card">Lorem ipsum</h5>
                            <p className="info-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed luctus ipsum et elementum mollis.</p>

                            <h6 className="second-title-inside">Características Principais</h6>
                            <hr className="separator first-separator"></hr> 
                            <div className="line-blue dot1">-</div>
                            <p className="inside-topics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                            Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                            Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                            Integer nec urna non nulla rutrum pretium vel a turpis. 
                            Donec euismod semper leo in condimentum. Ut vulputate imperdiet nibh, 
                            quis maximus quam cursus eu.</p>
                            <hr className="separator"></hr> 
                            <div className="line-blue dot2">-</div>
                            <p className="inside-topics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                            Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                            Suspendisse rutrum ultricies sapien.</p>
                            <hr className="separator"></hr> 
                            <div className="line-blue dot3">-</div>
                            <p className="inside-topics-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris eros nulla, placerat et congue sit amet, placerat nec felis. 
                            Etiam blandit tempus dolor nec condimentum. Mauris vestibulum ex eget suscipit rhoncus. 
                            Suspendisse rutrum ultricies sapien, id feugiat nibh efficitur ut. 
                            Integer nec urna non nulla rutrum pretium vel a turpis. 
                            Donec euismod semper leo in condimentum. Ut vulputate imperdiet nibh, 
                            quis maximus quam cursus eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris eros nulla, placerat et congue sit amet.Etiam at nulla id nisl sagittis laoreet.Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit.</p>
                            <hr className="separator"></hr> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="final-separator">-</div>
        </div> );
    }
}

export default Page;