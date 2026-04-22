"use strict";
n.d(t, { A: () => h });
var s = n(627968),
    r = n(64700),
    i = n(983851),
    o = n(500060),
    a = n(177953),
    l = n(687966),
    c = n(975571),
    d = n(305881),
    p = n(652215),
    u = n(985018),
    _ = n(928490);
function h(e) {
    let { onContinue: t, onClose: n } = e,
        h = c.A.getArticleURL(p.MVz.XBOX_CONNECTION),
        C = u.intl.format(u.t.CIc3IN, { helpdeskArticleUrl: h }),
        f = r.useMemo(
            () => [
                { label: u.intl.string(u.t.ihQXsb), icon: i.H },
                { label: u.intl.string(u.t.Xt1n4P), icon: o.o },
                { label: u.intl.string(u.t.xqVY3p), icon: a.n },
                { label: u.intl.string(u.t.iQsKVW), icon: l._ },
            ],
            [],
        );
    return (0, s.jsx)(d.B, {
        platformType: p.fg2.XBOX,
        headerConnect: u.intl.string(u.t.m8aahn),
        headerReconnect: u.intl.string(u.t.z3rAhq),
        body: C,
        onClose: n,
        onContinue: t,
        img: (0, s.jsx)("img", { src: _.A, width: 230, height: 160, alt: "" }),
        valueProps: f,
    });
}
