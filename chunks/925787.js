"use strict";
n.d(t, { F: () => s });
var r = n(171690);
function i(e) {
    return {
        linearGradient: e.linear_gradient,
        radialGradient: e.radial_gradient,
        image: e.image,
        tooltipImage: e.tooltip_image,
        tooltipTitle: e.tooltip_title,
        tooltipSubtitle: e.tooltip_subtitle,
    };
}
function s(e) {
    return {
        id: e.id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        heroImage: e.hero_image,
        heroVideo: e.hero_video,
        sponsorImage: e.sponsor_image,
        cta: (0, r.h)(e.cta),
        questIds: e.quest_ids,
        questHomeEntrypoint: null != e.quest_home_entrypoint ? i(e.quest_home_entrypoint) : void 0,
        shelfImage: e.shelf_image,
        shelfVideo: e.shelf_video,
    };
}
