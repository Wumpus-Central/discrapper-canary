t.d(i, { A: () => p });
var l = t(582128),
    n = t(562708),
    a = t(17928),
    r = t(139286),
    s = t(989837),
    o = t(520117);
function p(e) {
    let {
            applicationId: i,
            applicationFlags: t,
            sectionName: p,
            sectionPosition: d,
            sectionOverallPosition: c,
            promotionalLabel: u,
            numFriendsWhoPlay: f,
        } = e,
        m = (0, a.bG)([s.A], () => s.A.entrypoint()),
        A = l.useCallback(() => {
            (0, r.x)({
                type: n.ImpressionTypes.VIEW,
                name: n.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: i,
                    application_flags: t,
                    section_name: p,
                    section_position: d,
                    section_overall_position: c,
                    source: m,
                    promotional_label: u,
                    num_friends_who_play: f,
                },
            });
        }, [f]);
    return { trackItemImpressionRef: (0, o.A)({ onVisible: A, threshold: 0.5, minTimeVisibleMs: 1e3 }) };
}
