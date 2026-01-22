n.d(t, { A: () => o });
var r = n(110259),
    i = n(139286),
    a = n(989837),
    s = n(520117);
function o(e) {
    let { sectionName: t, numItems: n, numVisibleItems: o } = e,
        l = () => {
            (0, i.x)({
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.APP_LAUNCHER_SECTION,
                properties: {
                    section_name: t,
                    num_items: n,
                    num_visible_items: o,
                    source: a.A.entrypoint(),
                },
            });
        },
        c = 1;
    return {
        trackSectionImpressionRef: (0, s.A)({
            onVisible: l,
            threshold: c,
        }),
    };
}
