n.d(t, { G: () => c });
var a = n(951288),
    i = n(120356),
    r = n.n(i),
    l = n(481060),
    s = n(981631),
    o = n(492938);
let c = (e) => {
    let { showStatus: t, width: n, opacity: i, size: c = "default" } = e,
        d = "small" === c ? l.EFr.SIZE_24 : l.EFr.SIZE_32;
    return (0, a.jsxs)("div", {
        className: r()(o.nameplatePlaceholderUserRow, { [o.smallRow]: "small" === c }),
        style: { opacity: i },
        children: [
            (0, a.jsx)(l.qEK, {
                src: null,
                size: d,
                status: t ? s.Skl.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: o.nameplatePlaceholderAvatar,
            }),
            (0, a.jsx)("div", {
                className: r()(o.nameplatePlaceholderBar, { [o.smallBar]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
