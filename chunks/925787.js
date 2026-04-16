"use strict";
n.d(t, { F: () => a });
var r = n(579473),
    i = n(171690);
function s(e) {
    return {
        linearGradient: e.linear_gradient,
        radialGradient: e.radial_gradient,
        image: (0, r.dv)(e.image),
        tooltipImage: (0, r.dv)(e.tooltip_image),
        tooltipTitle: e.tooltip_title,
        tooltipSubtitle: e.tooltip_subtitle,
    };
}
function a(e) {
    return {
        id: e.id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        heroImage: (0, r.dv)(e.hero_image),
        heroVideo: (0, r.dv)(e.hero_video),
        sponsorImage: (0, r.dv)(e.sponsor_image),
        cta: (0, i.h)(e.cta),
        questIds: e.quest_ids,
        questHomeEntrypoint: null != e.quest_home_entrypoint ? s(e.quest_home_entrypoint) : void 0,
        shelfImage: (0, r.dv)(e.shelf_image),
        shelfVideo: (0, r.dv)(e.shelf_video),
    };
}
