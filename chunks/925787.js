"use strict";
n.d(t, { F: () => s });
var r = n(579473),
    i = n(171690);
function s(e) {
    var t;
    return {
        id: e.id,
        labelTitle: e.label_title,
        labelSubtitle: e.label_subtitle,
        heroImage: (0, r.dv)(e.hero_image),
        heroVideo: (0, r.dv)(e.hero_video),
        sponsorImage: (0, r.dv)(e.sponsor_image),
        cta: (0, i.h)(e.cta),
        questIds: e.quest_ids,
        questHomeEntrypoint:
            null != e.quest_home_entrypoint
                ? {
                      linearGradient: (t = e.quest_home_entrypoint).linear_gradient,
                      radialGradient: t.radial_gradient,
                      image: (0, r.dv)(t.image),
                      tooltipImage: (0, r.dv)(t.tooltip_image),
                      tooltipTitle: t.tooltip_title,
                      tooltipSubtitle: t.tooltip_subtitle,
                  }
                : void 0,
        shelfImage: (0, r.dv)(e.shelf_image),
        shelfVideo: (0, r.dv)(e.shelf_video),
    };
}
