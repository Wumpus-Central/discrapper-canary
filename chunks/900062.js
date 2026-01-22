n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(51183),
    a = n(444435);

function s(e) {
    var t, n;
    let { item: s } = e;
    if ("contentInventory" !== s.data.kind) return null;
    let { extra: o } = s.data.content;
    if ("custom_status_extra" !== o.type) return null;
    let c = {
            id: (null == (n = o.emoji_id) ? void 0 : n.toString()) === "0" ? null : o.emoji_id,
            name: null != (t = o.emoji_name) ? t : "",
            animated: o.emoji_animated,
        },
        u = null != c.id || c.name.length > 0,
        d = null != o.status && o.status.length > 0;
    return (0, r.jsx)("div", {
        className: a.kL,
        children: (0, r.jsx)("div", {
            className: a.Nr,
            children: (0, r.jsxs)("div", {
                className: a.Qs,
                children: [
                    u &&
                        (0, r.jsx)("div", {
                            className: a.qq,
                            children: (0, r.jsx)(l.A, {
                                emoji: c,
                                animate: !0,
                                hideTooltip: !1,
                            }),
                        }),
                    d &&
                        (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "text-strong",
                            className: a.qS,
                            children: o.status,
                        }),
                ],
            }),
        }),
    });
}
