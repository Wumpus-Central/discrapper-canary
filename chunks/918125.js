n.d(a, { Z: () => h });
var s = n(200651),
    r = n(192379),
    c = n(120356),
    o = n.n(c),
    t = n(481060),
    i = n(235449),
    l = n(300234),
    d = n(258033);
function h(e) {
    let { guildId: a, goToThread: n } = e,
        c = (0, i.nA)(a),
        h = r.useCallback(
            (e) => {
                let a = c[e.row];
                return (0, s.jsx)(
                    l.Z,
                    {
                        threadId: a,
                        goToThread: n,
                        showChannelName: !0
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [c, n]
        );
    return (0, s.jsx)(t.aVo, {
        className: o()(d.list, d.activeThreadsList),
        fade: !0,
        sections: [c.length],
        renderSection: () => null,
        sectionHeight: 0,
        rowHeight: 80,
        renderRow: h,
        chunkSize: 20
    });
}
