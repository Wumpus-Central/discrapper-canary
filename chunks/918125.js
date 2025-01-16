a.d(n, {
    Z: function () {
        return h;
    }
});
var r = a(200651),
    s = a(192379),
    c = a(120356),
    t = a.n(c),
    o = a(481060),
    i = a(235449),
    l = a(300234),
    d = a(773159);
function h(e) {
    let { guildId: n, goToThread: a } = e,
        c = (0, i.nA)(n),
        h = s.useCallback(
            (e) => {
                let n = c[e.row];
                return (0, r.jsx)(
                    l.Z,
                    {
                        threadId: n,
                        goToThread: a,
                        showChannelName: !0
                    },
                    ''.concat(e.section, '-').concat(e.row)
                );
            },
            [c, a]
        );
    return (0, r.jsx)(o.List, {
        className: t()(d.list, d.activeThreadsList),
        fade: !0,
        sections: [c.length],
        renderSection: () => null,
        sectionHeight: 0,
        rowHeight: 80,
        renderRow: h,
        chunkSize: 20
    });
}
