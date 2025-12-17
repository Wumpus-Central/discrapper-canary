n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(313789),
    a = n(518596),
    o = n(931547),
    s = n(981631),
    c = n(526761),
    u = n(388032);
function d(e) {
    let { subscription: t } = e;
    return null == t
        ? null
        : t.status === s.O0b.PAST_DUE
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.LZC, { size: 16 }),
                    (0, r.jsx)(o.Z, {
                        message: u.intl.string(u.t.eSuJE2),
                        ctaMessage: u.intl.string(u.t.RXsxqb),
                        onClick: () => {
                            (0, a.openUserSettings)(l.n.SUBSCRIPTIONS_PANEL, {
                                section: s.oAB.SUBSCRIPTIONS,
                                subsection: c.cP,
                            });
                        },
                    }),
                ],
            })
          : null;
}
