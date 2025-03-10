n.d(t, { Z: () => x }), n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(925329),
    s = n(672811),
    o = n(891180),
    a = n(615161),
    c = n(565574),
    d = n(396678),
    u = n(889150),
    f = n(388032),
    h = n(63770);
function m() {
    return (0, r.jsx)('span', {
        className: h.ellipsis,
        children: '\u2022'
    });
}
function x() {
    var e;
    let [{ preset: t, resolution: n, fps: x, muteStreamAudio: p, sourceApplication: g }] = (0, a.E_)(),
        [_, v] = null !== (e = (0, d.Z)(t)) && void 0 !== e ? e : [n, x],
        j = (0, s.L)(t),
        b = (0, o.M)(_);
    return (0, r.jsxs)('div', {
        className: h.root,
        children: [
            null != g
                ? (0, r.jsx)(i.Z, {
                      game: null,
                      pid: g.pid
                  })
                : (0, r.jsx)(c.Z, {}),
            (0, r.jsxs)('div', {
                className: h.summary,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: null != g ? g.name : j
                    }),
                    (0, r.jsxs)(l.Text, {
                        className: h.summaryDetail,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: [
                            null != g &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('span', {
                                            className: h.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(l.ewm, {
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                j
                                            ]
                                        }),
                                        (0, r.jsx)(m, {})
                                    ]
                                }),
                            f.NW.format(u.Z['7A4ZyM'], { resolution: b }),
                            (0, r.jsx)(m, {}),
                            f.NW.format(u.Z.CmJX8P, { frameRate: v }),
                            p &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(m, {}),
                                        (0, r.jsxs)('span', {
                                            className: h.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(l.OyP, {
                                                    className: h.mutedIcon,
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                }),
                                                f.NW.string(u.Z.FzMGWV)
                                            ]
                                        })
                                    ]
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
