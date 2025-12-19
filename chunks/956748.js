n.d(t, { G: () => c });
var a = n(54381),
    r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(981631),
    o = n(854184);
let c = (e) => {
    let { showStatus: t, width: n, opacity: r, size: c = "default" } = e,
        d = "small" === c ? l.EFr.SIZE_24 : l.EFr.SIZE_32;
    return (0, a.jsxs)("div", {
        className: i()(o.nameplatePlaceholderUserRow, { [o.smallRow]: "small" === c }),
        style: { opacity: r },
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
                className: i()(o.nameplatePlaceholderBar, { [o.smallBar]: "small" === c }),
                style: { maxWidth: null != n ? n : "100px" },
            }),
        ],
    });
};
