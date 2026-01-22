n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(29352),
    s = n(652215),
    o = n(985018),
    l = n(144365);
function c(e) {
    var t;
    let n,
        { message: c, onDeleteMessage: u, children: d } = e,
        f = null == (t = c.interactionMetadata) ? void 0 : t.ephemerality_reason,
        p = () => u(c, !0);
    if (null != f) {
        let e = (0, a.R)(f);
        n = (0, r.jsx)("div", {
            className: l.rd,
            children: o.intl.format(o.t.wx1tLQ, {
                handleDelete: p,
                reason: e,
            }),
        });
    } else
        n =
            c.type === s.lAJ.STAGE_RAISE_HAND
                ? o.intl.format(o.t["qDAX++"], { handleDelete: p })
                : o.intl.format(o.t.uX3ecL, {
                      count: 1,
                      countMessages: 1,
                      handleDelete: p,
                  });
    return (0, r.jsxs)("div", {
        className: l.XO,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(i.bMW, {
                size: "xs",
                color: "currentColor",
                className: l.Kk,
            }),
            n,
            d,
        ],
    });
}
