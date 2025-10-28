n.d(t, { G: () => o });
var a = n(951288),
    r = n(481060),
    l = n(981631),
    i = n(492938);
let o = (e) => {
    let { showStatus: t, width: n, opacity: o } = e;
    return (0, a.jsxs)("div", {
        className: i.nameplatePlaceholderUserRow,
        style: { opacity: o },
        children: [
            (0, a.jsx)(r.qEK, {
                src: null,
                size: r.EFr.SIZE_32,
                status: t ? l.Skl.ONLINE : void 0,
                statusColor: "var(--border-subtle)",
                "aria-hidden": !0,
                imageClassName: i.nameplatePlaceholderAvatar,
            }),
            (0, a.jsx)("div", {
                className: i.nameplatePlaceholderBar,
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
