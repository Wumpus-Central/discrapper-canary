n.d(t, {
    EmojiStudioModal: () => u,
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(534225),
    a = n(473280);

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let u = (e) => {
    let { transitionState: t, guildId: n } = e,
        u = "userImage" in e ? e.userImage : void 0,
        o = "emoji" in e ? e.emoji : void 0,
        c = s(
            {
                guildId: n,
            },
            null != o
                ? {
                      emoji: o,
                  }
                : null != u
                  ? {
                        userImage: u,
                    }
                  : {},
        );
    return (0, l.jsx)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        size: r.rIJ.DYNAMIC,
        fullscreenOnMobile: !1,
        className: a.CR,
        parentComponent: "Modal",
        children: (0, l.jsx)(r.$mQ, {
            "data-migration-pending": !0,
            scrollbarType: "none",
            className: a.jE,
            children: (0, l.jsx)(i.l, s({}, c)),
        }),
    });
};
