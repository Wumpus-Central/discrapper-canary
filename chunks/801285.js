l.d(t, { default: () => W }), l(321073);
var s = l(627968),
    n = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(475825),
    c = l(224640),
    o = l(20742),
    d = l(311907),
    u = l(3026),
    m = l(396478),
    h = l(761508),
    _ = l(834730),
    x = l(778712),
    g = l(289873),
    j = l(573613),
    p = l(297413),
    f = l(966327),
    v = l(964486),
    A = l(736653),
    C = l(505527),
    N = l(649963),
    w = l(734057),
    y = l(287809),
    b = l(486020),
    S = l(690521),
    I = l(562153),
    E = l(841549),
    M = l(969632),
    T = l(951727),
    V = l(573481),
    k = l(652215),
    R = l(985018),
    D = l(736618),
    U = l(965914);
let G = C.v.VOTE;
function q() {
    let e = (0, A.Ay)();
    return (0, s.jsxs)(m.pp, {
        theme: e,
        children: [
            (0, s.jsx)(m.G8, { darkSrc: U, lightSrc: U, width: 106, height: 100, style: { marginBottom: 10 } }),
            (0, s.jsx)(m.SG, {
                note: R.intl.string(R.t.bwytdh),
                noteClassName: D.BI,
                className: D._U,
                children: R.intl.string(R.t.vhQK3o),
            }),
        ],
    });
}
function H(e) {
    let { emoji: t, emojiSize: l, imageClassNames: n, textClassNames: a } = e,
        i = null == t.id ? S.Ay.getURL(t.name) : b.Ay.getEmojiURL({ id: t.id, animated: t.animated ?? !1, size: l });
    return null != i && "" !== i
        ? (0, s.jsx)("img", { className: n, src: i, alt: t.name })
        : (0, s.jsx)("span", { className: a, children: t.name });
}
function O(e) {
    let { poll: t, reactionVoteCounts: l, selectedAnswerId: n, onSelectAnswer: a } = e;
    return (0, s.jsx)(h.V, {
        look: "custom",
        orientation: "vertical",
        "aria-label": R.intl.string(R.t["qbir+4"]),
        selectedItem: n,
        onItemSelect: a,
        children: t.answers.map((e) => {
            let t = String(e.answer_id),
                a = l[t] ?? 0,
                { emoji: r, text: c } = e.poll_media,
                o = R.intl.formatToPlainString(R.t.wqBc7A, { numVotes: a, option: c }),
                d = n === t;
            return (0, s.jsxs)(
                h.V.Item,
                {
                    id: t,
                    disableItemStyles: !0,
                    className: i()({ [D.Ym]: !d, [D.yw]: d }),
                    "aria-label": o,
                    selectedItem: n,
                    children: [
                        null != r
                            ? (0, s.jsx)(H, {
                                  emoji: r,
                                  emojiSize: 16,
                                  imageClassNames: D.Zg,
                                  textClassNames: i()(D.Zg, D.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, s.jsx)(_.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, s.jsx)(u.A, { position: "left", "aria-hidden": !0, children: c }),
                        }),
                        (0, s.jsxs)(_.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: D.Oo,
                            children: ["(", a.toLocaleString(), ")"],
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
function L(e) {
    let { user: t, channel: l } = e,
        n = (0, d.bG)([y.default], () => y.default.getUser(t.id), [t]),
        a = I.Ay.useName(l.guild_id, l.id, t);
    return (0, s.jsxs)("div", {
        className: D.Mg,
        onContextMenu: (e) => (0, E.wQ)(e, t, l),
        children: [
            (0, s.jsx)("div", {
                className: D.x$,
                children: (0, s.jsx)(f.A, { user: n ?? t, size: x._3.SIZE_32, "aria-hidden": !0, guildId: l.guild_id }),
            }),
            (0, s.jsxs)("div", {
                className: D.v3,
                children: [
                    (0, s.jsx)(_.E, {
                        variant: "text-md/normal",
                        className: D.UU,
                        "aria-label": a,
                        children: (0, s.jsx)("span", { className: D.Ci, children: a }),
                    }),
                    (0, s.jsx)(p.A, {
                        user: t,
                        className: D.rW,
                        usernameClass: i()(D.Xh, D.Ci),
                        discriminatorClass: D.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { message: t, reaction: l, channel: a } = e,
        { reactors: i, hasMore: c } = (0, V.A)({ channelId: a.id, messageId: t.id, reaction: l }),
        o = n.useRef(null),
        d = n.useRef(null),
        [u, m] = n.useState(!1),
        h = n.useCallback(async () => {
            let e = d.current;
            m(!0);
            let s = await N.ao({ channelId: a.id, messageId: t.id, emoji: l.emoji, limit: k.WxW, after: e, type: G });
            (d.current = s[s.length - 1].id), m(!1);
        }, [a.id, t.id, l.emoji]);
    (0, v.Ay)(() => {
        h();
    });
    let _ = n.useCallback(() => {
            let { current: e } = o;
            if (null == e) return;
            let t = e.getScrollerState();
            t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 && c && !u && h();
        }, [o, c, u, h]),
        x = n.useCallback(
            (e, t) => (1 === e ? 52 * (0 === t) : 52 * (0 === e && ((0 === t && 0 === i.length) || null != i[t]))),
            [i],
        ),
        j = n.useCallback(
            (e) => {
                let { section: t, row: l } = e,
                    n = i[l];
                return 1 === t
                    ? 0 === l
                        ? (0, s.jsx)(g.y, { className: D.u1 }, "hasMore")
                        : null
                    : 0 === i.length && u
                      ? (0, s.jsx)(g.y, { className: D.u1 }, "loadingMore")
                      : null != n && (0, s.jsx)(L, { channel: a, user: n }, n.id);
            },
            [a, u, i],
        ),
        p = n.useMemo(() => {
            let e = [];
            return 0 === i.length && u ? e.push(1) : (e.push(i.length), c && e.push(1)), e;
        }, [c, u, i.length]);
    return (0, s.jsx)(r.Ei, {
        className: D.Ov,
        fade: !0,
        ref: o,
        sections: p,
        sectionHeight: 0,
        rowHeight: x,
        renderRow: j,
        onScroll: c ? _ : void 0,
    });
}
function W(e) {
    let { message: t, initialAnswerId: l, onClose: a, transitionState: i } = e,
        r = (0, d.bG)([w.A], () => w.A.getChannel(t.getChannelId())),
        [u, m] = n.useState(l),
        _ = n.useMemo(() => {
            if (null != t.reactions) return (0, T.Ej)(t.reactions, u);
        }, [t.reactions, u]),
        x = n.useMemo(() => (0, M.aw)(t.reactions), [t.reactions]),
        g = n.useMemo(
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
        p = g[u],
        f = n.useMemo(() => {
            let e = {};
            return (
                t.poll?.answers.forEach((t) => {
                    t?.answer_id != null && t.poll_media?.text != null && (e[t.answer_id] = t.poll_media.text);
                }),
                e
            );
        }, [t.poll?.answers]),
        v = R.intl.formatToPlainString(R.t.wqBc7A, { numVotes: p, option: f[u] });
    if (null == r) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == t.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, s.jsxs)(c.d, {
        transitionState: i,
        onClose: a,
        size: "lg",
        children: [
            (0, s.jsx)(o.rQ, { title: t.poll.question.text, subtitle: R.intl.format(R.t.XRkuof, { count: x }) }),
            (0, s.jsx)("div", { className: D.jH }),
            (0, s.jsxs)("div", {
                className: D.rf,
                children: [
                    (0, s.jsx)(j.Ip, {
                        className: D.XG,
                        fade: !0,
                        children: (0, s.jsx)(O, {
                            poll: t.poll,
                            selectedAnswerId: u,
                            onSelectAnswer: m,
                            reactionVoteCounts: g,
                        }),
                    }),
                    (0, s.jsx)(h.V.Panel, {
                        id: u,
                        "aria-label": v,
                        className: D.nd,
                        children:
                            null != _ && p > 0
                                ? (0, s.jsx)(P, { message: t, reaction: _, channel: r })
                                : (0, s.jsx)(q, {}),
                    }),
                ],
            }),
        ],
    });
}
