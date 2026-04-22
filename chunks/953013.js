n.d(t, { o: () => j }), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    u = n(191023),
    o = n(428689),
    d = n(432017),
    c = n(588975),
    h = n(173936),
    g = n(797285),
    m = n(978940),
    I = n(960027),
    E = n(46054),
    A = n(190012),
    f = n(465364),
    p = n(21119),
    S = n(994500),
    N = n(741961),
    x = n(287809),
    T = n(562153),
    _ = n(985018),
    y = n(7434);
function v(e) {
    let { icon: t, ...n } = e;
    switch (t) {
        case "image":
            return (0, l.jsx)(u.x, { ...n });
        case "video":
            return (0, l.jsx)(o.n, { ...n });
        case "audio":
            return (0, l.jsx)(d.T, { ...n });
        case "attachment":
            return (0, l.jsx)(c.P, { ...n });
        case "link":
            return (0, l.jsx)(h.q, { ...n });
        case "sticker":
            return (0, l.jsx)(g.t, { ...n });
        case "call-active":
            return (0, l.jsx)(m._, { ...n });
        case "call-ended":
            return (0, l.jsx)(I.z, { ...n });
    }
}
let C = i.memo(function (e) {
        let { message: t } = e;
        return (0, f.Ay)(t, { formatInline: !0, noStyleAndInteraction: !0 }).content;
    }),
    R = i.memo(function (e) {
        let { markup: t, channelId: n } = e;
        return (0, f.jp)(E.A.parseInlineReply, { content: t, channelId: n });
    });
function D(e) {
    let { channel: t, typingUserIds: n } = e,
        i = (0, a.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let l = [];
                    for (let i of e) {
                        let e = x.default.getUser(i);
                        null != e && l.push(T.Ay.getName(n, t, e));
                    }
                    let [i, r, s, a] = l;
                    return null == i
                        ? null
                        : null == r
                          ? _.intl.format(_.t.lJ9sZX, { a: i })
                          : null == s
                            ? _.intl.format(_.t.rB0CUa, { a: i, b: r })
                            : null == a
                              ? _.intl.format(_.t.StKThj, { a: i, b: r, c: s })
                              : _.intl.string(_.t.uVDhqZ);
                })(n, t.id, t.guild_id),
            [n, t.id, t.guild_id],
        );
    return null == i
        ? null
        : (0, l.jsx)("div", { className: y.Sl, children: (0, l.jsx)("span", { className: y.BK, children: i }) });
}
function b(e) {
    let t,
        { channel: n, message: i } = e,
        r = (0, A.BC)(i, n);
    if (null == r) return null;
    let { authorLabel: a, color: u, trailingIcon: o } = r;
    return (
        "text" === r.type
            ? (t = r.text)
            : "markup" === r.type
              ? (t = (0, l.jsx)(R, { markup: r.markup, channelId: i.channel_id }))
              : "message" === r.type && (t = (0, l.jsx)(C, { message: r.message })),
        (0, l.jsxs)("div", {
            className: s()(y.Sl, { [y.Vz]: "text-feedback-positive" === u }),
            children: [
                (0, l.jsxs)("span", { className: y.BK, children: [null != a && `${a}: `, t] }),
                null != o && (0, l.jsx)(v, { icon: o, size: "xxs", color: "currentColor", className: y.sl }),
            ],
        })
    );
}
function j(e) {
    let { channel: t, message: n, showTypingPreview: i } = e,
        r = (0, a.bG)([x.default], () => {
            if (!i) return [];
            let e = x.default.getCurrentUser()?.id ?? null;
            var n = t.id;
            let l = N.A.getTypingUsers(n),
                r = [];
            for (let t in l) t !== e && r.push(t);
            return r.sort((e, t) => {
                let n = +!!S.A.isFriend(e),
                    l = +!!S.A.isFriend(t);
                if (n !== l) return l - n;
                let i = p.A.getUserAffinity(e)?.communicationProbability ?? 0;
                return (p.A.getUserAffinity(t)?.communicationProbability ?? 0) - i;
            });
        }, [t.id, i]);
    return r.length > 0
        ? (0, l.jsx)(D, { channel: t, typingUserIds: r })
        : null == n
          ? null
          : (0, l.jsx)(b, { channel: t, message: n });
}
