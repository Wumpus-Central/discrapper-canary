var a = n(477900);
n(582128);
var s = n(763754),
    i = n(315934),
    r = n(812299);
n.d(
    l,
    {},
    {
        A: function (e) {
            let l = (0, s.Ay)(e.message),
                n = (0, r.y)({
                    message: e.message,
                    channel: e.channel,
                    user: e.message?.author ?? e.userOverride,
                    compact: !!e.compact,
                    isRepliedMessage: !!e.isRepliedMessage,
                }),
                t = {};
            return (null != n && (t[i.w.SYSTEM_TAG] = n), (0, a.jsx)(i.A, { ...e, author: l, decorations: t }));
        },
    },
);
