n.d(t, { Z: () => o });
var i = n(990547),
    l = n(213609),
    r = n(541099),
    a = n(312871);
function o(e) {
    let { sectionName: t, numItems: n, numVisibleItems: o } = e;
    return {
        trackSectionImpressionRef: (0, a.Z)({
            onVisible: () => {
                (0, l.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: {
                        section_name: t,
                        num_items: n,
                        num_visible_items: o,
                        source: r.Z.entrypoint(),
                    },
                });
            },
            threshold: 1,
        }),
    };
}
