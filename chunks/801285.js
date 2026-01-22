a.d(l, {
    default: () => G,
}),
    a(896048),
    a(321073),
    a(65821);
var t = a(627968),
    s = a(64700),
    n = a(503698),
    i = a.n(n),
    r = a(158954),
    o = a(311907),
    d = a(3026),
    c = a(397927),
    u = a(297413),
    m = a(966327),
    f = a(964486),
    h = a(736653),
    x = a(505527),
    g = a(649963),
    b = a(734057),
    j = a(287809),
    v = a(486020),
    p = a(690521),
    _ = a(562153),
    w = a(841549),
    N = a(969632),
    C = a(951727),
    A = a(573481),
    S = a(652215),
    y = a(985018),
    I = a(974841),
    M = a(965914);
let k = x.v.VOTE;

function V() {
    let e = (0, h.Ay)();
    return (0, t.jsxs)(c.ppr, {
        theme: e,
        children: [
            (0, t.jsx)(c.G8R, {
                darkSrc: M,
                lightSrc: M,
                width: 106,
                height: 100,
                style: {
                    marginBottom: 10,
                },
            }),
            (0, t.jsx)(c.SGT, {
                note: y.intl.string(y.t.bwytdh),
                noteClassName: I.BI,
                className: I._U,
                children: y.intl.string(y.t.vhQK3o),
            }),
        ],
    });
}

function U(e) {
    var l;
    let { emoji: a, emojiSize: s, imageClassNames: n, textClassNames: i } = e,
        r =
            null == a.id
                ? p.Ay.getURL(a.name)
                : v.Ay.getEmojiURL({
                      id: a.id,
                      animated: null != (l = a.animated) && l,
                      size: s,
                  });
    return null != r && "" !== r
        ? (0, t.jsx)("img", {
              className: n,
              src: r,
              alt: a.name,
          })
        : (0, t.jsx)("span", {
              className: i,
              children: a.name,
          });
}

function E(e) {
    let { poll: l, reactionVoteCounts: a, selectedAnswerId: s, onSelectAnswer: n } = e;
    return (0, t.jsx)(c.VQ0, {
        look: "custom",
        orientation: "vertical",
        "aria-label": y.intl.string(y.t["qbir+4"]),
        selectedItem: s,
        onItemSelect: n,
        children: l.answers.map((e) => {
            var l;
            let n = String(e.answer_id),
                r = null != (l = a[n]) ? l : 0,
                { emoji: o, text: u } = e.poll_media,
                m = y.intl.formatToPlainString(y.t.wqBc7A, {
                    numVotes: r,
                    option: u,
                }),
                f = s === n;
            return (0, t.jsxs)(
                c.VQ0.Item,
                {
                    id: n,
                    disableItemStyles: !0,
                    className: i()({
                        [I.Ym]: !f,
                        [I.yw]: f,
                    }),
                    "aria-label": m,
                    selectedItem: s,
                    children: [
                        null != o
                            ? (0, t.jsx)(U, {
                                  emoji: o,
                                  emojiSize: 16,
                                  imageClassNames: I.Zg,
                                  textClassNames: i()(I.Zg, I.at),
                                  "aria-hidden": !0,
                              })
                            : null,
                        (0, t.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            lineClamp: 1,
                            children: (0, t.jsx)(d.A, {
                                position: "left",
                                "aria-hidden": !0,
                                children: u,
                            }),
                        }),
                        (0, t.jsxs)(c.Text, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            className: I.Oo,
                            children: ["(", r.toLocaleString(), ")"],
                        }),
                    ],
                },
                n,
            );
        }),
    });
}

function T(e) {
    let { user: l, channel: a } = e,
        s = (0, o.bG)([j.default], () => j.default.getUser(l.id), [l]),
        n = _.Ay.useName(a.guild_id, a.id, l);
    return (0, t.jsxs)("div", {
        className: I.Mg,
        onContextMenu: (e) => (0, w.wQ)(e, l, a),
        children: [
            (0, t.jsx)("div", {
                className: I.x$,
                children: (0, t.jsx)(m.A, {
                    user: null != s ? s : l,
                    size: c._3J.SIZE_32,
                    "aria-hidden": !0,
                    guildId: a.guild_id,
                }),
            }),
            (0, t.jsxs)("div", {
                className: I.v3,
                children: [
                    (0, t.jsx)(c.Text, {
                        variant: "text-md/normal",
                        className: I.UU,
                        "aria-label": n,
                        children: (0, t.jsx)("span", {
                            className: I.Ci,
                            children: n,
                        }),
                    }),
                    (0, t.jsx)(u.A, {
                        user: l,
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
    let { message: l, reaction: a, channel: n } = e,
        { reactors: i, hasMore: o } = (0, A.A)({
            channelId: n.id,
            messageId: l.id,
            reaction: a,
        }),
        d = s.useRef(null),
        u = s.useRef(null),
        [m, h] = s.useState(!1),
        x = s.useCallback(async () => {
            let e = u.current;
            h(!0);
            let t = await g.ao({
                channelId: n.id,
                messageId: l.id,
                emoji: a.emoji,
                limit: S.WxW,
                after: e,
                type: k,
            });
            (u.current = t[t.length - 1].id), h(!1);
        }, [n.id, l.id, a.emoji]);
    (0, f.Ay)(() => {
        x();
    });
    let b = s.useCallback(() => {
            let { current: e } = d;
            if (null == e) return;
            let l = e.getScrollerState();
            l.scrollTop + l.offsetHeight >= l.scrollHeight - 52 && o && !m && x();
        }, [d, o, m, x]),
        j = s.useCallback(
            (e, l) => (1 === e ? 52 * (0 === l) : 52 * (0 === e && ((0 === l && 0 === i.length) || null != i[l]))),
            [i],
        ),
        v = s.useCallback(
            (e) => {
                let { section: l, row: a } = e,
                    s = i[a];
                return 1 === l
                    ? 0 === a
                        ? (0, t.jsx)(
                              c.y$y,
                              {
                                  className: I.u1,
                              },
                              "hasMore",
                          )
                        : null
                    : 0 === i.length && m
                      ? (0, t.jsx)(
                            c.y$y,
                            {
                                className: I.u1,
                            },
                            "loadingMore",
                        )
                      : null != s &&
                        (0, t.jsx)(
                            T,
                            {
                                channel: n,
                                user: s,
                            },
                            s.id,
                        );
            },
            [n, m, i],
        ),
        p = s.useMemo(() => {
            let e = [];
            return 0 === i.length && m ? e.push(1) : (e.push(i.length), o && e.push(1)), e;
        }, [o, m, i.length]);
    return (0, t.jsx)(r.Eie, {
        className: I.Ov,
        fade: !0,
        ref: d,
        sections: p,
        sectionHeight: 0,
        rowHeight: j,
        renderRow: v,
        onScroll: o ? b : void 0,
    });
}

function G(e) {
    var l;
    let { message: a, initialAnswerId: n, onClose: i, transitionState: d } = e,
        u = (0, o.bG)([b.A], () => b.A.getChannel(a.getChannelId())),
        [m, f] = s.useState(n),
        h = s.useMemo(() => {
            if (null != a.reactions) return (0, C.Ej)(a.reactions, m);
        }, [a.reactions, m]),
        x = s.useMemo(() => (0, N.aw)(a.reactions), [a.reactions]),
        g = s.useMemo(
            () =>
                (function (e) {
                    let l = {};
                    for (let s of e) {
                        var a, t;
                        let e = null != (a = null == (t = s.count_details) ? void 0 : t.vote) ? a : 0,
                            n = s.emoji.id;
                        null != n && (l[n] = e);
                    }
                    return l;
                })(a.reactions),
            [a.reactions],
        ),
        j = g[m],
        v = s.useMemo(() => {
            var e;
            let l = {};
            return (
                null == (e = a.poll) ||
                    e.answers.forEach((e) => {
                        var a;
                        (null == e ? void 0 : e.answer_id) != null &&
                            (null == (a = e.poll_media) ? void 0 : a.text) != null &&
                            (l[e.answer_id] = e.poll_media.text);
                    }),
                l
            );
        }, [null == (l = a.poll) ? void 0 : l.answers]),
        p = y.intl.formatToPlainString(y.t.wqBc7A, {
            numVotes: j,
            option: v[m],
        });
    if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
    if (null == a.poll) throw Error("PollVotesModal.render: Message does not have a poll");
    return (0, t.jsxs)(r.dWK, {
        transitionState: d,
        onClose: i,
        size: "lg",
        children: [
            (0, t.jsx)(r.rQ0, {
                title: a.poll.question.text,
                subtitle: y.intl.format(y.t.XRkuof, {
                    count: x,
                }),
            }),
            (0, t.jsx)("div", {
                className: I.jH,
            }),
            (0, t.jsxs)("div", {
                className: I.rf,
                children: [
                    (0, t.jsx)(c.HOs, {
                        className: I.XG,
                        fade: !0,
                        children: (0, t.jsx)(E, {
                            poll: a.poll,
                            selectedAnswerId: m,
                            onSelectAnswer: f,
                            reactionVoteCounts: g,
                        }),
                    }),
                    (0, t.jsx)(c.VQ0.Panel, {
                        id: m,
                        "aria-label": p,
                        className: I.nd,
                        children:
                            null != h && j > 0
                                ? (0, t.jsx)(R, {
                                      message: a,
                                      reaction: h,
                                      channel: u,
                                  })
                                : (0, t.jsx)(V, {}),
                    }),
                ],
            }),
        ],
    });
}
