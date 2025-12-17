n.d(t, { Z: () => c });
var i = n(54381);
n(473749);
var l = n(442837),
    r = n(481060),
    a = n(596454),
    s = n(339085),
    o = n(502937);
function c(e) {
    let { reactionEmoji: t } = e,
        n = (0, l.e7)([s.ZP], () =>
            (null == t ? void 0 : t.emojiId) != null ? s.ZP.getUsableCustomEmojiById(t.emojiId) : null,
        );
    return (0, i.jsxs)("div", {
        className: o.container,
        children: [
            (0, i.jsxs)("div", {
                className: o.body,
                children: [
                    (0, i.jsxs)("div", {
                        className: o.placeholderLines,
                        children: [
                            (0, i.jsx)(d, {
                                width: "100%",
                                marginBottom: 8,
                            }),
                            (0, i.jsx)(d, {
                                width: "80%",
                                marginBottom: 16,
                            }),
                            (0, i.jsx)(d, {
                                width: "50%",
                                marginBottom: 8,
                            }),
                            (0, i.jsx)(d, {
                                width: "60%",
                                marginBottom: 16,
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: o.placeholderMedia }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: o.footer,
                children: [
                    (0, i.jsxs)("div", {
                        className: o.reaction,
                        children: [
                            null != t
                                ? (0, i.jsx)(a.Z, {
                                      className: o.reactionEmote,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == n ? void 0 : n.animated),
                                  })
                                : (0, i.jsx)(r.EO4, {
                                      size: "sm",
                                      color: "currentColor",
                                      className: o.reactionEmote,
                                  }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                color: "interactive-text-default",
                                children: 17,
                            }),
                        ],
                    }),
                    (0, i.jsx)(d, {
                        width: "24px",
                        marginBottom: 0,
                    }),
                    (0, i.jsx)("div", { className: o.dot }),
                    (0, i.jsx)(d, {
                        width: "24px",
                        marginBottom: 0,
                    }),
                ],
            }),
        ],
    });
}
function d(e) {
    let { width: t, marginBottom: n } = e;
    return (0, i.jsx)("div", {
        className: o.placeholderLine,
        style: {
            width: t,
            marginBottom: n,
        },
    });
}
