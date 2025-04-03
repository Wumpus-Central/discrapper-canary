n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(230711),
    a = n(931547),
    o = n(981631),
    s = n(526761),
    c = n(388032);
function u(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === o.O0b.PAST_DUE
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.LZC, { size: 16 }),
                    (0, r.jsx)(a.Z, {
                        message: c.NW.string(c.t.eSuJEx),
                        ctaMessage: c.NW.string(c.t.RXsxqa),
                        onClick: () => {
                            l.Z.open(o.oAB.SUBSCRIPTIONS, s.cP);
                        }
                    })
                ]
            })
          : null;
}
