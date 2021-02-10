import React, {Component} from 'react';
import Header from "../../common/header/header";
import HomeBanner from "../../common/sections/HomeBanner/homeBanner";
import ServiceSectionWrap from "../../common/sections/services";
import AboutSection from "../../common/sections/about";
import SubscriptionSection from "../../common/sections/subscription";
import LatestWork from "../../common/sections/latestWork";
import ClientFeedBack from "../../common/sections/clientFeedback";
import ContactSection from "../../common/sections/contact";
import Footer from "../../common/footer/footer";

class Home extends Component {




    render() {

                // if (windowTop > htOpH) {
                //     if (!(htOp.hasClass(adDcl))) {
                //         htOp.stop();
                //         htOp.addClass(adDcl).css({
                //             'top': (-1 * htOpH) + 'px',
                //         }).animate({
                //             'top': '0px'
                //         }, 250, 'easeOutQuad', function () {});
                //     }
                // } else {
                //     if (htOp.hasClass(adDcl)) {
                //         htOp.stop();
                //         htOp.animate({
                //             'top': (-1 * htOpH) + 'px'
                //         }, 250, 'easeOutQuad', function () {
                //             htOp.removeClass(adDcl).removeAttr('style');
                //         });
                //     }
                // }

        return (
            <div className={'homeWrap'}>
                <Header />
                <HomeBanner />
                <ServiceSectionWrap />
                <AboutSection />
                <SubscriptionSection />
                <LatestWork />
                <ClientFeedBack />
                <ContactSection />
                <Footer />
            </div>
        );
    }
}

export default Home;