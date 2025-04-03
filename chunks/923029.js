n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(665149),
    c = n(911560),
    u = n(210887),
    d = n(914010),
    p = n(981631),
    h = n(388032),
    f = n(487153);
function m(e) {
    let t,
        { channelId: m } = e;
    i.useEffect(() => {
        c.Z.loadThread(m);
    });
    let g = (0, o.e7)([d.Z], () => d.Z.getGuildId()) === p.I_8,
        b = (0, o.e7)([u.Z], () => u.Z.theme);
    return (
        (t = g
            ? (0, r.jsx)(a.OZU, {
                  note: h.NW.string(h.t['D5SN5+']),
                  children: h.NW.string(h.t.xVTAdX)
              })
            : null != m
              ? (0, r.jsx)(a.$jN, { type: a.$jN.Type.SPINNING_CIRCLE })
              : (0, r.jsx)(a.OZU, {
                    note: h.NW.string(h.t['LTr+x8']),
                    children: h.NW.string(h.t.ai6Lbm)
                })),
        (0, r.jsxs)('div', {
            className: f.noChannel,
            children: [
                l.tq && (0, r.jsx)(s.ZP, { children: null }),
                (0, r.jsxs)(a.ubH, {
                    theme: b,
                    children: [
                        (0, r.jsx)(a.oxh, {
                            darkSrc: g ? n(691270) : n(625065),
                            lightSrc: g ? n(704139) : n(875184),
                            width: 272,
                            height: 222
                        }),
                        t
                    ]
                })
            ]
        })
    );
}
