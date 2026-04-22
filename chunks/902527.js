a.d(t, { A: () => r });
var n = a(110259),
    l = a(139286),
    i = a(989837),
    s = a(520117);
function r(e) {
    let { sectionName: t, numItems: a, numVisibleItems: r } = e;
    return {
        trackSectionImpressionRef: (0, s.A)({
            onVisible: () => {
                (0, l.x)({
                    type: n.ImpressionTypes.VIEW,
                    name: n.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: { section_name: t, num_items: a, num_visible_items: r, source: i.A.entrypoint() },
                });
            },
            threshold: 1,
        }),
    };
}
