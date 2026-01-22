n.d(t, { A: () => u });
var r = n(64700),
    i = n(110259),
    a = n(311907),
    s = n(139286),
    o = n(989837),
    l = n(520117);
let c = 1000;
function u(e) {
    let {
            applicationId: t,
            applicationFlags: n,
            sectionName: u,
            sectionPosition: d,
            sectionOverallPosition: f,
            promotionalLabel: p,
            numFriendsWhoPlay: _,
        } = e,
        h = (0, a.bG)([o.A], () => o.A.entrypoint()),
        m = r.useCallback(() => {
            (0, s.x)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: u,
                    section_position: d,
                    section_overall_position: f,
                    source: h,
                    promotional_label: p,
                    num_friends_who_play: _,
                },
            });
        }, [_]),
        g = 0.5;
    return {
        trackItemImpressionRef: (0, l.A)({
            onVisible: m,
            threshold: g,
            minTimeVisibleMs: c,
        }),
    };
}
