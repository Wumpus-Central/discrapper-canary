i.d(e, { A: () => a });
var s = i(110259),
    n = i(139286),
    r = i(989837),
    A = i(520117);
function a(t) {
    let { sectionName: e, numItems: i, numVisibleItems: a } = t;
    return {
        trackSectionImpressionRef: (0, A.A)({
            onVisible: () => {
                (0, n.x)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: { section_name: e, num_items: i, num_visible_items: a, source: r.A.entrypoint() },
                });
            },
            threshold: 1,
        }),
    };
}
