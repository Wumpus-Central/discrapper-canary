n.d(t, { Z: () => s });
var r = n(990547),
    i = n(213609),
    o = n(541099),
    a = n(312871);
function s(e) {
    let { sectionName: t, numItems: n, numVisibleItems: s } = e,
        l = () => {
            (0, i.h)({
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.APP_LAUNCHER_SECTION,
                properties: {
                    section_name: t,
                    num_items: n,
                    num_visible_items: s,
                    source: o.Z.entrypoint(),
                },
            });
        },
        c = 1;
    return {
        trackSectionImpressionRef: (0, a.Z)({
            onVisible: l,
            threshold: c,
        }),
    };
}
