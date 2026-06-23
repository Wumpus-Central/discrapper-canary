e.d(i, { A: () => a });
var n = e(562708),
    s = e(139286),
    r = e(989837),
    A = e(520117);
function a(t) {
    let { sectionName: i, numItems: e, numVisibleItems: a } = t;
    return {
        trackSectionImpressionRef: (0, A.A)({
            onVisible: function () {
                (0, s.x)({
                    type: n.ImpressionTypes.VIEW,
                    name: n.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: { section_name: i, num_items: e, num_visible_items: a, source: r.A.entrypoint() },
                });
            },
            threshold: 1,
        }),
    };
}
