"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(821609),
    a = n(975571),
    o = n(607814),
    l = n(652215),
    u = n(375708),
    c = n(212283);
function d() {
    let e = r.useCallback(() => {
            window.open(a.A.getArticleURL(l.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = r.useCallback(() => {
            o.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, i.jsxs)("div", {
        className: c.o,
        children: [
            (0, i.jsx)(s.$, { onClick: e, text: u.intl.string(u.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, i.jsx)(s.$, { onClick: t, text: u.intl.string(u.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
