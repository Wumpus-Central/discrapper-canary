n.d(t, { default: () => ec }), n(388685), n(539854), n(642613), n(358797), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(866442),
    u = n(442837),
    d = n(780384),
    f = n(481060),
    _ = n(596454),
    p = n(129861),
    h = n(700582),
    m = n(607070),
    g = n(600164),
    E = n(633302),
    b = n(712057),
    y = n(660189),
    O = n(372900),
    v = n(566006),
    I = n(620652),
    T = n(815605),
    S = n(222677),
    A = n(995774),
    C = n(665906),
    N = n(210887),
    R = n(314897),
    P = n(592125),
    w = n(271383),
    D = n(542578),
    x = n(375954),
    L = n(496675),
    j = n(699516),
    k = n(594174),
    M = n(768581),
    U = n(176354),
    G = n(5192),
    B = n(709054),
    Z = n(91047),
    F = n(981631),
    V = n(388032),
    H = n(745581),
    Y = n(10198);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = 44,
    Q = 440,
    J = 24,
    $ = 0.025;
function ee(e) {
    return null == e.id ? E.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":");
}
function et(e, t, n, i) {
    let a =
        null == e.id
            ? U.ZP.getURL(e.name)
            : M.ZP.getEmojiURL({
                  id: e.id,
                  animated: e.animated,
                  size: t,
              });
    return null != a && "" !== a
        ? (0, r.jsx)("img", {
              className: n,
              src: a,
              alt: e.name,
          })
        : (0, r.jsx)("span", {
              className: i,
              children: e.name,
          });
}
let en = (e) => {
        let { emoji: t, channelId: n, messageId: a } = e,
            [s, l] = i.useState(!0),
            [c, u] = i.useState([]),
            d = i.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, T.Zn)(t, c[0], n, {
                    emojiSize: I.M.LARGE,
                    messageId: a,
                });
                return (0, r.jsx)(I.Z, {
                    className: H.__invalid_effect,
                    effect: e,
                    emojiSize: I.M.LARGE,
                    onComplete: () => l(!1),
                });
            }, [c, t, n, a]);
        return (
            i.useEffect(() => {
                let e = !1;
                return (
                    l(!0),
                    !(async function () {
                        let n = await (0, U.B6)(t);
                        Array.isArray(n) && n.length > 0 && !e && u(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, r.jsxs)("div", {
                className: H.burstEmojiSection,
                children: [
                    d,
                    (0, r.jsx)(_.Z, {
                        className: o()(H.burstEmoji, { [H.hideEmoji]: s }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: ee(t),
                    }),
                ],
            })
        );
    },
    er = i.memo(function (e) {
        let { emoji: t, count: n, isSelected: a, setSelected: s, reactionType: l, colors: u } = e,
            d = i.useMemo(() => ee(t), [t]),
            _ = i.useMemo(() => et(t, J, H.emoji, o()(H.emoji, H.emojiText)), [t]),
            p = l === v.O.BURST,
            h = p ? V.t.VmiNjY : V.t.cNfs19,
            m = V.intl.formatToPlainString(h, {
                name: d,
                n: n,
            }),
            g = i.useMemo(() => {
                let e = {};
                if (p) {
                    var t, n, r, i;
                    let { backgroundColor: o = "", opacity: s = 1 } = null != u ? u : {};
                    a
                        ? ((e.background = null != (t = (0, c.wK)(o, s)) ? t : ""),
                          (e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * s)) ? n : "")))
                        : ((e.background = null != (r = (0, c.wK)(o, $)) ? r : ""),
                          (e.border = "1px solid ".concat(null != (i = (0, c.wK)(o, 2 * $)) ? i : "")));
                }
                return e;
            }, [p, u, a]),
            E = i.useMemo(() => {
                let e = {};
                if (p) {
                    let { accentColor: t = "" } = null != u ? u : {};
                    e.color = t;
                }
                return e;
            }, [p, u]),
            b = i.useCallback(() => {
                s({
                    emoji: t,
                    reactionType: l,
                });
            }, [t, l, s]);
        return (0, r.jsx)(f.ua7, {
            position: "left",
            text: d,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: i } = e;
                return (0, r.jsxs)(f.P3F, {
                    className: o()({
                        [H.reactionDefault]: !a,
                        [H.reactionSelected]: a,
                    }),
                    "aria-label": m,
                    onClick: b,
                    onMouseEnter: t,
                    onMouseLeave: i,
                    style: g,
                    children: [
                        _,
                        (0, r.jsx)(f.Text, {
                            variant: "text-sm/bold",
                            style: E,
                            children: n,
                        }),
                    ],
                });
            },
        });
    });
function ei(e) {
    let {
            emoji: t,
            user: n,
            message: i,
            channel: a,
            guildId: o,
            reactionType: s,
            onRemoveReactor: l,
            disableManage: c = !1,
        } = e,
        d = (0, u.e7)([R.default], () => R.default.getId()),
        _ = (0, u.e7)([k.default], () => k.default.getUser(n.id), [n]),
        m = (0, C.$R)(a),
        E = (0, u.e7)([L.Z], () => L.Z.can(F.Plq.MANAGE_MESSAGES, a) && m) || d === n.id,
        b = (0, u.e7)([w.ZP, P.Z, j.Z], () => G.ZP.getName(o, a.id, n));
    function y() {
        S.WO({
            channelId: a.id,
            messageId: i.id,
            emoji: t,
            location: S.TW.MESSAGE,
            userId: n.id,
            options: { burst: s === v.O.BURST },
        }),
            null == l || l();
    }
    return (0, r.jsxs)(g.Z, {
        className: H.reactorDefault,
        onContextMenu: (e) => (0, Z.Pv)(e, n, a),
        align: g.Z.Align.CENTER,
        children: [
            (0, r.jsx)(g.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: Y.marginReset,
                children: (0, r.jsx)(h.Z, {
                    user: null != _ ? _ : n,
                    size: f.EFr.SIZE_24,
                }),
            }),
            (0, r.jsx)(g.Z.Child, {
                children: (0, r.jsxs)(f.Text, {
                    tag: "strong",
                    variant: "text-md/normal",
                    className: H.name,
                    children: [
                        null != b &&
                            "" !== b &&
                            (0, r.jsx)("span", {
                                className: n.hasUniqueUsername() ? "" : H.nickname,
                                children: b,
                            }),
                        (0, r.jsx)(p.Z, {
                            user: n,
                            className: null != b && "" !== b ? H.tagFaded : null,
                            usernameClass: H.username,
                            discriminatorClass: H.discriminator,
                            forceUsername: !0,
                        }),
                    ],
                }),
            }),
            !c &&
                E &&
                (0, r.jsx)(f.P3F, {
                    onClick: y,
                    children: (0, r.jsx)(f.Dio, {
                        size: "xs",
                        color: "currentColor",
                        className: H.remove,
                    }),
                }),
        ],
    });
}
class ea extends i.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (l().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
            this.setState(
                {
                    lastId: null,
                    loadingMore: !1,
                },
                () => this.loadMore(),
            );
    }
    loadMore() {
        let { message: e, reaction: t, reactionType: n } = this.props,
            { lastId: r } = this.state;
        this.setState({ loadingMore: !0 }),
            S.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: F.pTL,
                after: r,
                type: n,
            }).then((e) => {
                var t;
                return this.setState({
                    loadingMore: !1,
                    lastId: null == (t = e[e.length - 1]) ? void 0 : t.id,
                });
            });
    }
    renderSection() {
        return null;
    }
    render() {
        let { hasMore: e, reactors: t, reaction: n, message: i, reactionType: a } = this.props,
            o = [];
        return (
            0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)),
            (0, r.jsxs)("div", {
                className: H.reactorsContainer,
                children: [
                    a === v.O.BURST &&
                        (0, r.jsx)(en, {
                            emoji: n.emoji,
                            channelId: i.getChannelId(),
                            messageId: i.id,
                        }),
                    (0, r.jsx)(f.aVo, {
                        className: H.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: o,
                        sectionHeight: 0,
                        rowHeight: this.getRowHeight,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                        onScroll: e ? this.handleScroll : void 0,
                    }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            W(this, "scrollerRef", i.createRef()),
            W(this, "state", {
                lastId: null,
                loadingMore: !1,
            }),
            W(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - X &&
                    this.props.hasMore &&
                    !this.state.loadingMore &&
                    this.loadMore();
            }),
            W(this, "getRowHeight", (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 0 === t ? X : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return Q;
                    if (null != this.props.reactors[t]) return X;
                }
                return 0;
            }),
            W(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    {
                        message: i,
                        guildId: a,
                        channel: o,
                        reaction: s,
                        reactors: l,
                        reactionType: c,
                        disableManage: u,
                    } = this.props,
                    d = l[n];
                return 1 === t
                    ? 0 === n
                        ? (0, r.jsx)(f.$jN, { className: H.spinnerMore }, "hasMore")
                        : null
                    : 0 === l.length && this.state.loadingMore
                      ? (0, r.jsx)(f.$jN, { className: H.spinner }, "loadingMore")
                      : null != d &&
                        (0, r.jsx)(
                            ei,
                            {
                                message: i,
                                emoji: s.emoji,
                                guildId: a,
                                channel: o,
                                user: d,
                                reaction: s,
                                reactionType: c,
                                disableManage: u,
                            },
                            d.id,
                        );
            });
    }
}
let eo = u.ZP.connectStores([D.Z], (e) => {
    let { message: t, reaction: n, reactionType: r } = e,
        i = D.Z.getReactions(t.getChannelId(), t.id, n.emoji, F.pTL, r);
    if (null == i)
        return {
            reactors: [],
            hasMore: !1,
        };
    let a = Array.from(i.values()),
        o = (r === v.O.BURST ? n.burst_count : n.count) > a.length;
    return {
        reactors: a,
        hasMore: o,
    };
})(ea);
function es(e) {
    return i.useMemo(() => {
        let t = [];
        return (
            e.forEach((e) => {
                e.burst_count > 0 && t.push(q(K({}, e), { count: 0 })),
                    e.count > 0 && t.push(q(K({}, e), { burst_count: 0 }));
            }),
            t.sort((e, t) => {
                let n = e.burst_count > 0 ? e.burst_count : e.count;
                return (t.burst_count > 0 ? t.burst_count : t.count) - n;
            }),
            t
        );
    }, [e]);
}
function el(e, t, n) {
    let [r, a] = i.useState(null != e ? e : t);
    return (
        i.useEffect(() => {
            null != r &&
                null ==
                    n.find((e) => {
                        let t = null != e.me_vote ? v.O.VOTE : e.burst_count > 0 ? v.O.BURST : v.O.NORMAL,
                            n = (0, A.ir)(e.emoji, r.emoji),
                            i = t === r.reactionType;
                        return n && i;
                    }) &&
                a(t);
        }, [r, a, n, t]),
        [r, a]
    );
}
function ec(e) {
    let {
            message: t,
            selectedReaction: n,
            disableManage: a = !1,
            disableTabs: o = !1,
            onClose: s,
            transitionState: l,
            "aria-label": c = V.intl.string(V.t.gHp0Cw),
        } = e,
        _ = (0, u.e7)([P.Z], () => P.Z.getChannel(t.getChannelId())),
        p = null == _ ? void 0 : _.getGuildId(),
        h = (0, u.e7)([x.Z, y.Z], () => {
            var e, n;
            let r =
                null != (n = x.Z.getMessage(t.getChannelId(), t.id))
                    ? n
                    : null == (e = y.Z.getMessage(B.default.castMessageIdAsChannelId(t.id)))
                      ? void 0
                      : e.firstMessage;
            return null != r ? r.reactions : [];
        }, [t]),
        g = es(h),
        E = g[0],
        [I, T] = el(
            n,
            null != E
                ? {
                      emoji: E.emoji,
                      reactionType: E.burst_count > 0 ? v.O.BURST : v.O.NORMAL,
                  }
                : null,
            g,
        ),
        S = i.useMemo(() => {
            var e;
            return null == I ? null : null != (e = h.find((e) => (0, A.ir)(e.emoji, I.emoji))) ? e : null;
        }, [h, I]),
        C = (0, u.e7)([m.Z], () => m.Z.saturation),
        R = (0, u.e7)([N.Z], () => (0, d.wj)(N.Z.theme));
    if (
        (i.useEffect(() => {
            (0 === h.length || (null == I && null == S)) && setImmediate(s);
        }, [s, h.length, S, I]),
        null == I || null == S)
    )
        return (0, r.jsx)(f.$jN, {});
    if (null == _) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, r.jsx)(O.Z.Provider, {
        value: null != p ? p : void 0,
        children: (0, r.jsxs)(f.Y0X, {
            "aria-label": c,
            transitionState: l,
            size: f.CgR.DYNAMIC,
            className: H.container,
            parentComponent: "MessageReactions",
            children: [
                o
                    ? null
                    : (0, r.jsx)(f.Ttm, {
                          className: H.scroller,
                          fade: !0,
                          children: g.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, r.jsx)(
                                  er,
                                  {
                                      isSelected: eu(I, e, n ? v.O.BURST : v.O.NORMAL),
                                      setSelected: T,
                                      reactionType: n ? v.O.BURST : v.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, b.Z)(e.burst_colors, C, R) : void 0,
                                  },
                                  ""
                                      .concat(n ? "burst-" : "normal-")
                                      .concat(null != (t = e.emoji.id) ? t : "", ":")
                                      .concat(e.emoji.name),
                              );
                          }),
                      }),
                (0, r.jsx)(eo, {
                    message: t,
                    reaction: S,
                    guildId: p,
                    channel: _,
                    reactionType: I.reactionType,
                    disableManage: a,
                }),
            ],
        }),
    });
}
let eu = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n;
