n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(230711),
    a = n(931547),
    s = n(981631),
    o = n(526761),
    d = n(388032);
function c(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === s.O0b.PAST_DUE
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.LZC, { size: 16 }),
                    (0, i.jsx)(a.Z, {
                        message: d.intl.string(d.t.eSuJEx),
                        ctaMessage: d.intl.string(d.t.RXsxqa),
                        onClick: () => {
                            r.Z.open(s.oAB.SUBSCRIPTIONS, o.cP);
                        }
                    })
                ]
            })
          : null;
}
