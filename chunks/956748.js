n.d(t, { G: () => c });
var a = n(54381),
    l = n(120356),
    i = n.n(l),
    r = n(481060),
    s = n(981631),
    o = n(492938);
let c = (e) => {
    let { showStatus: t, width: n, opacity: l, size: c = "default" } = e,
        d = "small" === c ? r.EFr.SIZE_24 : r.EFr.SIZE_32;
    return (0, a.jsxs)("div", {
        className: i()(o.nameplatePlaceholderUserRow, { [o.smallRow]: "small" === c }),
        style: { opacity: l },
        children: [
            (0, a.jsx)(r.qEK, {
                src: null,
                size: d,
                status: t ? s.Skl.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.nameplatePlaceholderAvatar,
            }),
            (0, a.jsx)("div", {
                className: i()(o.nameplatePlaceholderBar, { [o.smallBar]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
