"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(110259),
    a = n(311907),
    s = n(139286),
    o = n(989837),
    l = n(520117);
let u = 1e3;
function c(e) {
    let {
            applicationId: t,
            applicationFlags: n,
            sectionName: c,
            sectionPosition: d,
            sectionOverallPosition: _,
            promotionalLabel: f,
            numFriendsWhoPlay: p,
        } = e,
        h = (0, a.bG)([o.A], () => o.A.entrypoint()),
        m = r.useCallback(() => {
            (0, s.x)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: c,
                    section_position: d,
                    section_overall_position: _,
                    source: h,
                    promotional_label: f,
                    num_friends_who_play: p,
                },
            });
        }, [p]),
        g = 0.5;
    return { trackItemImpressionRef: (0, l.A)({ onVisible: m, threshold: g, minTimeVisibleMs: u }) };
}
