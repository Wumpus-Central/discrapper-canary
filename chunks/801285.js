l.d(t, { default: () => G }), l(321073);
var s = l(627968),
    a = l(64700),
    n = l(503698),
    i = l.n(n),
    r = l(158954),
    o = l(311907),
    c = l(3026),
    d = l(397927),
    u = l(297413),
    m = l(966327),
    h = l(964486),
    _ = l(736653),
    x = l(505527),
    g = l(649963),
    j = l(734057),
    f = l(287809),
    p = l(486020),
    v = l(690521),
    w = l(562153),
    C = l(841549),
    N = l(969632),
    b = l(951727),
    y = l(573481),
    A = l(652215),
    S = l(985018),
    I = l(974841),
    M = l(965914);
let T = x.v.VOTE;
function k() {
    let e = (0, _.Ay)();
    return (0, s.jsxs)(d.ppr, {
        theme: e,
        children: [
            (0, s.jsx)(d.G8R, { darkSrc: M, lightSrc: M, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(d.SGT, {
                note: S.intl.string(S.t.bwytdh),
                noteClassName: I.BI,
                className: I._U,
                children: S.intl.string(S.t.vhQK3o),
            }),
        ],
    });
}
function V(e) {
    let { emoji: t, emojiSize: l, imageClassNames: a, textClassNames: n } = e,
        i = null == t.id ? v.Ay.getURL(t.name) : p.Ay.getEmojiURL({ id: t.id, animated: t.animated ?? !1, size: l });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: a, src: i, alt: t.name })
        : (0, s.jsx)("span", { className: n, children: t.name });
}
function U(e) {
    let { poll: t, reactionVoteCounts: l, selectedAnswerId: a, onSelectAnswer: n } = e;
    return (0, s.jsx)(d.VQ0, {
        look: "custom",
        orientation: "vertical",
        "aria-label": S.intl.string(S.t["qbir+4"]),
        selectedItem: a,
        onItemSelect: n,
        children: t.answers.map((e) => {
            let t = String(e.answer_id),
                n = l[t] ?? 0,
                { emoji: r, text: o } = e.poll_media,
                u = S.intl.formatToPlainString(S.t.wqBc7A, { numVotes: n, option: o }),
                m = a === t;
            return (0, s.jsxs)(
                d.VQ0.Item,
                {
                    id: t,
                    disableItemStyles: !0,
                    className: i()({ [I.Ym]: !m, [I.yw]: m }),
                    "aria-label": u,
                    selectedItem: a,
                    children: [
                        null != r
                            ? (0, s.jsx)(V, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: I.Zg,
                                  textClassNames: i()(I.Zg, I.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, s.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, s.jsx)(c.A, { position: "left", "aria-hidden": !0, children: o }),
                        }),
                        (0, s.jsxs)(d.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: I.Oo,
                            children: ["(", n.toLocaleString(), ")"],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function E(e) {
    let { user: t, channel: l } = e,
        a = (0, o.bG)([f.default], () => f.default.getUser(t.id), [t]),
        n = w.Ay.useName(l.guild_id, l.id, t);
    return (0, s.jsxs)("div", {
        className: I.Mg,
        onContextMenu: (e) => (0, C.wQ)(e, t, l),
        children: [
            (0, s.jsx)("div", {
                className: I.x$,
                children: (0, s.jsx)(m.A, {
                    user: a ?? t,
                    size: d._3J.SIZE_32,
                    "aria-hidden": !0,
                    guildId: l.guild_id,
                }),
            }),
            (0, s.jsxs)("div", {
                className: I.v3,
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: "text-md/normal",
                        className: I.UU,
                        "aria-label": n,
                        children: (0, s.jsx)("span", { className: I.Ci, children: n }),
                    }),
                    (0, s.jsx)(u.A, {
                        user: t,
                        className: I.rW,
                        usernameClass: i()(I.Xh, I.Ci),
                        discriminatorClass: I.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { message: t, reaction: l, channel: n } = e,
        { reactors: i, hasMore: o } = (0, y.A)({ channelId: n.id, messageId: t.id, reaction: l }),
        c = a.useRef(null),
        u = a.useRef(null),
        [m, _] = a.useState(!1),
        x = a.useCallback(async () => {
            let e = u.current;
            _(!0);
            let s = await g.ao({ channelId: n.id, messageId: t.id, emoji: l.emoji, limit: A.WxW, after: e, type: T });
            (u.current = s[s.length - 1].id), _(!1);
        }, [n.id, t.id, l.emoji]);
    (0, h.Ay)(() => {
        x();
    });
    let j = a.useCallback(() => {
            let { current: e } = c;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && o && !m && x();
        }, [c, o, m, x]),
        f = a.useCallback(
            (e, t) => (1 === e ? 52 * (0 === t) : 52 * (0 === e && ((0 === t && 0 === i.length) || null != i[t]))),
            [i],
        ),
        p = a.useCallback(
            (e) => {
                let { section: t, row: l } = e,
                    a = i[l];
                return 1 === t
                    ? 0 === l
                        ? (0, s.jsx)(d.y$y, { className: I.u1 }, "hasMore")
                        : null
                    : 0 === i.length && m
                      ? (0, s.jsx)(d.y$y, { className: I.u1 }, "loadingMore")
                      : null != a && (0, s.jsx)(E, { channel: n, user: a }, a.id);
            },
            [n, m, i],
        ),
        v = a.useMemo(() => {
            let e = [];
            return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e;
        }, [o, m, i.length]);
    return (0, s.jsx)(r.Eie, {
        className: I.Ov,
        fade: !0,
        ref: c,
        sections: v,
        sectionHeight: 0,
        rowHeight: f,
        renderRow: p,
        onScroll: o ? j : void 0,
    });
}
function G(e) {
    let { message: t, initialAnswerId: l, onClose: n, transitionState: i } = e,
        c = (0, o.bG)([j.A], () => j.A.getChannel(t.getChannelId())),
        [u, m] = a.useState(l),
        h = a.useMemo(() => {
            if (null != t.reactions) return (0, b.Ej)(t.reactions, u);
        }, [t.reactions, u]),
        _ = a.useMemo(() => (0, N.aw)(t.reactions), [t.reactions]),
        x = a.useMemo(
            () =>
                (function (e) {
                    let t = {};
                    for (let l of e) {
                        let e = l.count_details?.vote ?? 0,
                            s = l.emoji.id;
                        null != s && (t[s] = e);
                    }
                    return t;
                })(t.reactions),
            [t.reactions],
        ),
        g = x[u],
        f = a.useMemo(() => {
            let e = {};
            return (
                t.poll?.answers.forEach((t) => {
                    t?.answer_id != null && t.poll_media?.text != null && (e[t.answer_id] = t.poll_media.text);
                }),
                e
            );
        }, [t.poll?.answers]),
        p = S.intl.formatToPlainString(S.t.wqBc7A, { numVotes: g, option: f[u] });
    if (null == c) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == t.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(r.dWK, {
        transitionState: i,
        onClose: n,
        size: "lg",
        children: [
            (0, s.jsx)(r.rQ0, { title: t.poll.question.text, subtitle: S.intl.format(S.t.XRkuof, { count: _ }) }),
            (0, s.jsx)("div", { className: I.jH }),
            (0, s.jsxs)("div", {
                className: I.rf,
                children: [
                    (0, s.jsx)(d.HOs, {
                        className: I.XG,
                        fade: !0,
                        children: (0, s.jsx)(U, {
                            poll: t.poll,
                            selectedAnswerId: u,
                            onSelectAnswer: m,
                            reactionVoteCounts: x,
                        }),
                    }),
                    (0, s.jsx)(d.VQ0.Panel, {
                        id: u,
                        "aria-label": p,
                        className: I.nd,
                        children:
                            null != h && g > 0
                                ? (0, s.jsx)(R, { message: t, reaction: h, channel: c })
                                : (0, s.jsx)(k, {}),
                    }),
                ],
            }),
        ],
    });
}
