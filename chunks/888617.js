n.d(t, { Z: () => a });
var i = n(990547),
    l = n(213609),
    r = n(541099),
    o = n(312871);
function a(e) {
    let { sectionName: t, numItems: n, numVisibleItems: a } = e;
    return {
        trackSectionImpressionRef: (0, o.Z)({
            onVisible: () => {
                (0, l.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: {
                        section_name: t,
                        num_items: n,
                        num_visible_items: a,
                        source: r.Z.entrypoint()
                    }
                });
            },
            threshold: 1
        })
    };
}
