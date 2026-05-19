"use strict";
n.d(t, { y: () => r });
var i = n(651162);
class r {
    title;
    body;
    categoryStoreListingId;
    bannerTextColor;
    bannerBodyTextColor;
    disableCta;
    bannerURL;
    bannerAnimatedURL;
    logoURL;
    ctaText;
    ctaRoute;
    isDismissible;
    dismissibleContentVersion;
    constructor(e) {
        (this.type = i.g.WIDE_BANNER),
            (this.title = e.title),
            (this.body = e.body),
            (this.categoryStoreListingId = e.category_store_listing_id),
            (this.bannerTextColor = e.banner_text_color),
            (this.bannerBodyTextColor = e.banner_body_text_color),
            (this.disableCta = e.disable_cta),
            (this.bannerURL = e.wide_banner_url),
            (this.bannerAnimatedURL = e.wide_banner_animated_url),
            (this.logoURL = e.logo_url),
            (this.ctaText = e.cta_text),
            (this.ctaRoute = e.cta_route),
            (this.isDismissible = e.is_dismissible),
            (this.dismissibleContentVersion = e.dismissible_content_version);
    }
    static fromServer(e) {
        return new r(e);
    }
}
