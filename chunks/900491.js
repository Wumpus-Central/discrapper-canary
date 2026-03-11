"use strict";
n.d(t, { A: () => p });
var s = n(627968),
    r = n(64700),
    o = n(397927),
    i = n(975571),
    a = n(305881),
    c = n(652215),
    l = n(985018),
    d = n(928490);
function p(e) {
    let { onContinue: t, onClose: n } = e,
        p = i.A.getArticleURL(c.MVz.XBOX_CONNECTION),
        u = l.intl.format(l.t.CIc3IN, { helpdeskArticleUrl: p }),
        _ = r.useMemo(
            () => [
                { label: l.intl.string(l.t.ihQXsb), icon: o.HKD },
                { label: l.intl.string(l.t.Xt1n4P), icon: o.ofK },
                { label: l.intl.string(l.t.xqVY3p), icon: o.nFg },
                { label: l.intl.string(l.t.iQsKVW), icon: o._xR },
            ],
            [],
        );
    return (0, s.jsx)(a.B, {
        platformType: c.fg2.XBOX,
        headerConnect: l.intl.string(l.t.m8aahn),
        headerReconnect: l.intl.string(l.t.z3rAhq),
        body: u,
        onClose: n,
        onContinue: t,
        img: (0, s.jsx)("img", { src: d.A, width: 230, height: 160, alt: "" }),
        valueProps: _,
    });
}
