"use strict";
n.d(t, { F: () => o });
var r = n(579473),
    i = n(171690);
function s(e) {
    return null != e ? (0, r.dv)(e) : void 0;
}
function a(e) {
    return {
        linearGradient: e.linear_gradient,
        radialGradient: e.radial_gradient,
        image: s(e.image),
        tooltipImage: s(e.tooltip_image),
        tooltipTitle: e.tooltip_title,
        tooltipSubtitle: e.tooltip_subtitle,
    };
}
function o(e) {
    return {
        id: e.id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        heroImage: s(e.hero_image),
        heroVideo: s(e.hero_video),
        sponsorImage: s(e.sponsor_image),
        cta: (0, i.h)(e.cta),
        questIds: e.quest_ids,
        questHomeEntrypoint: null != e.quest_home_entrypoint ? a(e.quest_home_entrypoint) : void 0,
        shelfImage: s(e.shelf_image),
        shelfVideo: s(e.shelf_video),
    };
}
