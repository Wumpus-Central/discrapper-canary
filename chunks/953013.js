n.d(t, { o: () => C }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(397927),
    o = n(46054),
    d = n(190012),
    c = n(465364),
    h = n(21119),
    g = n(994500),
    I = n(741961),
    f = n(287809),
    A = n(562153),
    E = n(985018),
    m = n(126345);
function S(e) {
    let { icon: t, ...n } = e;
    switch (t) {
        case "image":
            return (0, l.jsx)(u.xfq, { ...n });
        case "video":
            return (0, l.jsx)(u.npA, { ...n });
        case "audio":
            return (0, l.jsx)(u.T7G, { ...n });
        case "attachment":
            return (0, l.jsx)(u.PtA, { ...n });
        case "link":
            return (0, l.jsx)(u.qYV, { ...n });
        case "sticker":
            return (0, l.jsx)(u.tEP, { ...n });
        case "call-active":
            return (0, l.jsx)(u._jp, { ...n });
        case "call-ended":
            return (0, l.jsx)(u.zWQ, { ...n });
    }
}
let p = i.memo(function (e) {
        let { message: t } = e;
        return (0, c.Ay)(t, { formatInline: !0, noStyleAndInteraction: !0 }).content;
    }),
    N = i.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, c.jp)(o.A.parseInlineReply, { content: t, channelId: n });
    });
function T(e) {
    let { channel: t, typingUserIds: n } = e,
        i = (0, a.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let l = [];
                    for (let i of e) {
                        let e = f.default.getUser(i);
                        null != e && l.push(A.Ay.getName(n, t, e));
                    }
                    let [i, r, s, a] = l;
                    return null == i
                        ? null
                        : null == r
                          ? E.intl.format(E.t.lJ9sZX, { a: i })
                          : null == s
                            ? E.intl.format(E.t.rB0CUa, { a: i, b: r })
                            : null == a
                              ? E.intl.format(E.t.StKThj, { a: i, b: r, c: s })
                              : E.intl.string(E.t.uVDhqZ);
                })(n, t.id, t.guild_id),
            [n, t.id, t.guild_id],
        );
    return null == i
        ? null
        : (0, l.jsx)("div", { className: m.Sl, children: (0, l.jsx)("span", { className: m.BK, children: i }) });
}
function _(e) {
    let t,
        { channel: n, message: i } = e,
        r = (0, d.BC)(i, n);
    if (null == r) return null;
    let { authorLabel: a, color: u, trailingIcon: o } = r;
    return (
        "text" === r.type
            ? (t = r.text)
            : "markup" === r.type
              ? (t = (0, l.jsx)(N, { markup: r.markup, channelId: i.channel_id }))
              : "message" === r.type && (t = (0, l.jsx)(p, { message: r.message })),
        (0, l.jsxs)("div", {
            className: s()(m.Sl, { [m.Vz]: "text-feedback-positive" === u }),
            children: [
                (0, l.jsxs)("span", { className: m.BK, children: [null != a && `${a}: `, t] }),
                null != o && (0, l.jsx)(S, { icon: o, size: "xxs", color: "currentColor", className: m.sl }),
            ],
        })
    );
}
function C(e) {
    let { channel: t, message: n, showTypingPreview: i } = e,
        r = (0, a.bG)([f.default], () => {
            if (!i) return [];
            let e = f.default.getCurrentUser()?.id ?? null;
            var n = t.id;
            let l = I.A.getTypingUsers(n),
                r = [];
            for (let t in l) t !== e && r.push(t);
            return r.sort((e, t) => {
                let n = +!!g.A.isFriend(e),
                    l = +!!g.A.isFriend(t);
                if (n !== l) return l - n;
                let i = h.A.getUserAffinity(e)?.communicationProbability ?? 0;
                return (h.A.getUserAffinity(t)?.communicationProbability ?? 0) - i;
            });
        }, [t.id, i]);
    return r.length > 0
        ? (0, l.jsx)(T, { channel: t, typingUserIds: r })
        : null == n
          ? null
          : (0, l.jsx)(_, { channel: t, message: n });
}
