"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(821609),
    s = n(975571),
    l = n(430795),
    o = n(652215),
    d = n(375708),
    c = n(212283);
function u() {
    let e = r.useCallback(() => {
            window.open(s.A.getArticleURL(o.MVz.CLIPS), "_blank", "noopener,noreferrer");
        }, []),
        t = r.useCallback(() => {
            l.yO({ clipsEnabled: !0, trackAnalytics: !0 });
        }, []);
    return (0, i.jsxs)("div", {
        className: c.o,
        children: [
            (0, i.jsx)(a.$, { onClick: e, text: d.intl.string(d.t.hvVgAZ), variant: "secondary", size: "sm" }),
            (0, i.jsx)(a.$, { onClick: t, text: d.intl.string(d.t.h8rgrK), variant: "primary", size: "sm" }),
        ],
    });
}
