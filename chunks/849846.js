n.d(t, { EmojiStudioModal: () => s });
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(534225),
    a = n(473280);
let s = (e) => {
    let { transitionState: t, guildId: n } = e,
        s = "userImage" in e ? e.userImage : void 0,
        u = "emoji" in e ? e.emoji : void 0,
        o = { guildId: n, ...(null != u ? { emoji: u } : null != s ? { userImage: s } : {}) };
    return (0, l.jsx)(i.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        size: i.rIJ.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.CR,
        parentComponent: "Modal",
        children: (0, l.jsx)(i.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: a.jE,
            children: (0, l.jsx)(r.l, { ...o }),
        }),
    });
};
