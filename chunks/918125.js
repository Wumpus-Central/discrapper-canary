n.d(a, { Z: () => h });
var s = n(255367),
    r = n(73800),
    o = n(120356),
    t = n.n(o),
    c = n(481060),
    i = n(235449),
    l = n(300234),
    d = n(258033);
function h(e) {
    let { guildId: a, goToThread: n } = e,
        o = (0, i.nA)(a),
        h = r.useCallback(
            (e) => {
                let a = o[e.row];
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
            [o, n]
        );
    return (0, s.jsx)(c.aVo, {
        className: t()(d.list, d.activeThreadsList),
        fade: !0,
        sections: [o.length],
        renderSection: () => null,
        sectionHeight: 0,
        rowHeight: 80,
        renderRow: h,
        chunkSize: 20
    });
}
