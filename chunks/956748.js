n.d(t, { G: () => s });
var a = n(951288),
    i = n(481060),
    l = n(981631),
    r = n(492938);
let s = (e) => {
    let { showStatus: t, width: n, opacity: s } = e;
    return (0, a.jsxs)("div", {
        className: r.nameplatePlaceholderUserRow,
        style: { opacity: s },
        children: [
            (0, a.jsx)(i.qEK, {
                src: null,
                size: i.EFr.SIZE_32,
                status: t ? l.Skl.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: r.nameplatePlaceholderAvatar,
            }),
            (0, a.jsx)("div", {
                className: r.nameplatePlaceholderBar,
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
