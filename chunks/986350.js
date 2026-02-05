n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(29352),
    r = n(652215),
    s = n(985018),
    o = n(144365);
function d(e) {
    let t,
        { message: n, onDeleteMessage: d, children: c } = e,
        u = n.interactionMetadata?.ephemerality_reason,
        m = () => d(n, !0);
    if (null != u) {
        let e = (0, a.R)(u);
        t = (0, i.jsx)("div", { className: o.rd, children: s.intl.format(s.t.wx1tLQ, { handleDelete: m, reason: e }) });
    } else
        t =
            n.type === r.lAJ.STAGE_RAISE_HAND
                ? s.intl.format(s.t["qDAX++"], { handleDelete: m })
                : s.intl.format(s.t.uX3ecL, { count: 1, countMessages: 1, handleDelete: m });
    return (0, i.jsxs)("div", {
        className: o.XO,
        onClick: (e) => e.stopPropagation(),
        children: [(0, i.jsx)(l.bMW, { size: "xs", color: "currentColor", className: o.Kk }), t, c],
    });
}
