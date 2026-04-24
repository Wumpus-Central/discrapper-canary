"use strict";
n.d(t, { A: () => r });
var i = n(110259),
    a = n(139286),
    s = n(989837),
    l = n(520117);
function r(e) {
    let { sectionName: t, numItems: n, numVisibleItems: r } = e;
    return {
        trackSectionImpressionRef: (0, l.A)({
            onVisible: () => {
                (0, a.x)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: { section_name: t, num_items: n, num_visible_items: r, source: s.A.entrypoint() },
                });
            },
            threshold: 1,
        }),
    };
}
