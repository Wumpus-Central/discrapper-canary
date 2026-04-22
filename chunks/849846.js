l.d(t, { EmojiStudioModal: () => s });
var n = l(627968);
l(64700);
var i = l(935462),
    a = l(534225),
    r = l(250747);
let s = (e) => {
    let { transitionState: t, guildId: l } = e,
        s = "userImage" in e ? e.userImage : void 0,
        o = "emoji" in e ? e.emoji : void 0,
        u = { guildId: l, ...(null != o ? { emoji: o } : null != s ? { userImage: s } : {}) };
    return (0, n.jsx)(i.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.rI.DYNAMIC,
        fullscreenOnMobile: !1,
        className: r.CR,
        parentComponent: "Modal",
        children: (0, n.jsx)(i.$m, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: r.jE,
            children: (0, n.jsx)(a.l, { ...u }),
        }),
    });
};
