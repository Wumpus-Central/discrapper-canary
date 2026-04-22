n.d(t, { A: () => c });
var l = n(64700),
    i = n(110259),
    a = n(311907),
    s = n(139286),
    r = n(989837),
    o = n(520117);
function c(e) {
    let {
            applicationId: t,
            applicationFlags: n,
            sectionName: c,
            sectionPosition: d,
            sectionOverallPosition: u,
            promotionalLabel: m,
            numFriendsWhoPlay: p,
        } = e,
        _ = (0, a.bG)([r.A], () => r.A.entrypoint()),
        A = l.useCallback(() => {
            (0, s.x)({
                type: i.ImpressionTypes.VIEW,
                name: i.ImpressionNames.APP_LAUNCHER_ITEM,
                properties: {
                    application_id: t,
                    application_flags: n,
                    section_name: c,
                    section_position: d,
                    section_overall_position: u,
                    source: _,
                    promotional_label: m,
                    num_friends_who_play: p,
                },
            });
        }, [p]);
    return { trackItemImpressionRef: (0, o.A)({ onVisible: A, threshold: 0.5, minTimeVisibleMs: 1e3 }) };
}
