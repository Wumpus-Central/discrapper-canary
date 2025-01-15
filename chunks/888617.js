n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(990547),
    r = n(213609),
    a = n(541099),
    o = n(312871);
function s(e) {
    let { sectionName: t, numItems: n, numVisibleItems: s } = e;
    return {
        trackSectionImpressionRef: (0, o.Z)({
            onVisible: () => {
                (0, r.h)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.APP_LAUNCHER_SECTION,
                    properties: {
                        section_name: t,
                        num_items: n,
                        num_visible_items: s,
                        source: a.Z.entrypoint()
                    }
                });
            },
            threshold: 1
        })
    };
}
