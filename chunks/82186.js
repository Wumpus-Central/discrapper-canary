n.d(t, { E: () => _ }), n(667532);
var r = n(627968);
n(64700);
var a = n(158954),
    o = n(963935),
    i = n(894858),
    l = n(985018),
    s = n(621580);
function c(e) {
    let { node: t, isLast: n } = e,
        o = t.useTitle(),
        l = t.useBadge?.(),
        c = (0, r.jsxs)(a.BJc, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: s.Ze,
            children: [
                (0, r.jsx)(a.EYj, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: s.b,
                    children: o,
                }),
                n && null != l && l,
                !n &&
                    (0, r.jsx)(a.EYj, { variant: "text-md/normal", color: "interactive-text-default", children: "/" }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: s.QF,
        children: n
            ? c
            : (0, r.jsx)(a.DUT, {
                  onClick: () => {
                      i.A.setState({ requestedTargetKey: t.key });
                  },
                  className: s.vk,
                  children: c,
              }),
    });
}
function _(e) {
    let { node: t } = e,
        n = (function (e) {
            let t = [e];
            for (let n = e.parent; null != n && n.type !== o.Z6.SIDEBAR_ITEM; n = n.parent)
                n.type === o.Z6.PANEL && t.unshift(n);
            return t;
        })(t);
    return (0, r.jsx)("nav", {
        "aria-label": l.intl.string(l.t["bM+M/m"]),
        className: s.m7,
        children: (0, r.jsx)(a.BJc, {
            direction: "horizontal",
            role: "list",
            className: s.jD,
            children: n.map((e, t) => (0, r.jsx)(c, { node: e, isLast: t === n.length - 1 }, e.key)),
        }),
    });
}
