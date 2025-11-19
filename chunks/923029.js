n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(665149),
    c = n(911560),
    d = n(210887),
    u = n(914010),
    p = n(981631),
    h = n(388032),
    f = n(529834);
function g(e) {
    let t,
        { channelId: g } = e;
    i.useEffect(() => {
        c.Z.loadThread(g);
    });
    let m = (0, a.e7)([u.Z], () => u.Z.getGuildId()) === p.I_8,
        b = (0, a.e7)([d.Z], () => d.Z.theme);
    return (
        (t = m
            ? (0, r.jsx)(s.OZU, {
                  note: h.intl.string(h.t["D5SN5/"]),
                  children: h.intl.string(h.t.xVTAdb),
              })
            : null != g
              ? (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE })
              : (0, r.jsx)(s.OZU, {
                    note: h.intl.string(h.t["LTr+x9"]),
                    children: h.intl.string(h.t.ai6Lbr),
                })),
        (0, r.jsxs)("div", {
            className: f.noChannel,
            children: [
                l.tq && (0, r.jsx)(o.ZP, { children: null }),
                (0, r.jsxs)(s.ubH, {
                    theme: b,
                    children: [
                        (0, r.jsx)(s.oxh, {
                            darkSrc: m ? n(691270) : n(625065),
                            lightSrc: m ? n(704139) : n(875184),
                            width: 272,
                            height: 222,
                        }),
                        t,
                    ],
                }),
            ],
        })
    );
}
