n.d(t, { Z: () => o });
var l = n(990547),
    i = n(213609),
    r = n(541099),
    a = n(312871);
function o(e) {
    let { sectionName: t, numItems: n, numVisibleItems: o } = e;
    return {
        trackSectionImpressionRef: (0, a.Z)({
            onVisible: () => {
                (0, i.h)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: {
                        section_name: t,
                        num_items: n,
                        num_visible_items: o,
                        source: r.Z.entrypoint()
                    }
                });
            },
            threshold: 1
        })
    };
}
