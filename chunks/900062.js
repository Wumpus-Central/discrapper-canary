n.d(t, { A: () => r });
var a = n(627968);
n(64700);
var i = n(834730),
    s = n(51183),
    l = n(96098);
function r(e) {
    let { item: t } = e;
    if ("contentInventory" !== t.data.kind) return null;
    let { extra: n } = t.data.content;
    if ("custom_status_extra" !== n.type) return null;
    let r = {
            id: n.emoji_id?.toString() === "0" ? null : n.emoji_id,
            name: n.emoji_name ?? "",
            animated: n.emoji_animated,
        },
        d = null != r.id || r.name.length > 0,
        o = null != n.status && n.status.length > 0;
    return (0, a.jsx)("div", {
        className: l.kL,
        children: (0, a.jsx)("div", {
            className: l.Nr,
            children: (0, a.jsxs)("div", {
                className: l.Qs,
                children: [
                    d &&
                        (0, a.jsx)("div", {
                            className: l.qq,
                            children: (0, a.jsx)(s.A, { emoji: r, animate: !0, hideTooltip: !1 }),
                        }),
                    o &&
                        (0, a.jsx)(i.E, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: l.qS,
                            children: n.status,
                        }),
                ],
            }),
        }),
    });
}
