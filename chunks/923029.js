n.d(t, { Z: () => f });
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(442837),
    s = n(481060),
    o = n(665149),
    c = n(911560),
    d = n(210887),
    u = n(914010),
    h = n(981631),
    p = n(388032),
    m = n(514925);
function f(e) {
    let t,
        { channelId: f } = e;
    l.useEffect(() => {
        c.Z.loadThread(f);
    });
    let g = (0, r.e7)([u.Z], () => u.Z.getGuildId()) === h.I_8,
        _ = (0, r.e7)([d.Z], () => d.Z.theme);
    return (
        (t = g
            ? (0, i.jsx)(s.OZU, {
                  note: p.intl.string(p.t['D5SN5+']),
                  children: p.intl.string(p.t.xVTAdX)
              })
            : null != f
              ? (0, i.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
              : (0, i.jsx)(s.OZU, {
                    note: p.intl.string(p.t['LTr+x8']),
                    children: p.intl.string(p.t.ai6Lbm)
                })),
        (0, i.jsxs)('div', {
            className: m.noChannel,
            children: [
                a.tq && (0, i.jsx)(o.ZP, { children: (0, i.jsx)(l.Fragment, {}) }),
                (0, i.jsxs)(s.ubH, {
                    theme: _,
                    children: [
                        (0, i.jsx)(s.oxh, {
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
