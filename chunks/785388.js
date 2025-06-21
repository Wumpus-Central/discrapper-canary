n.d(t, { default: () => et }), n(388685), n(539854), n(642613), n(358797), n(415506);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n.n(s),
    c = n(866442),
    u = n(442837),
    d = n(780384),
    h = n(481060),
    p = n(596454),
    m = n(129861),
    g = n(700582),
    f = n(607070),
    b = n(600164),
    j = n(633302),
    v = n(712057),
    O = n(660189),
    y = n(372900),
    x = n(566006),
    S = n(620652),
    T = n(815605),
    P = n(222677),
    C = n(995774),
    E = n(665906),
    N = n(210887),
    R = n(314897),
    I = n(592125),
    w = n(271383),
    Z = n(542578),
    A = n(375954),
    M = n(496675),
    _ = n(699516),
    k = n(594174),
    L = n(768581),
    D = n(176354),
    U = n(5192),
    F = n(709054),
    B = n(91047),
    V = n(981631),
    H = n(388032),
    G = n(111932),
    z = n(20493);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e) {
    return null == e.id ? j.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
let Y = (e) => {
        let { emoji: t, channelId: n, messageId: l } = e,
            [s, a] = r.useState(!0),
            [c, u] = r.useState([]),
            d = r.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, T.Zn)(t, c[0], n, {
                    emojiSize: S.M.LARGE,
                    messageId: l
                });
                return (0, i.jsx)(S.Z, {
                    className: G.__invalid_effect,
                    effect: e,
                    emojiSize: S.M.LARGE,
                    onComplete: () => a(!1)
                });
            }, [c, t, n, l]);
        return (
            r.useEffect(() => {
                let e = !1;
                return (
                    a(!0),
                    !(async function () {
                        let n = await (0, D.B6)(t);
                        Array.isArray(n) && n.length > 0 && !e && u(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, i.jsxs)('div', {
                className: G.burstEmojiSection,
                children: [
                    d,
                    (0, i.jsx)(p.Z, {
                        className: o()(G.burstEmoji, { [G.hideEmoji]: s }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: 'reaction'
                    }),
                    (0, i.jsx)(h.Text, {
                        variant: 'text-md/medium',
                        children: X(t)
                    })
                ]
            })
        );
    },
    q = r.memo(function (e) {
        let { emoji: t, count: n, isSelected: l, setSelected: s, reactionType: a, colors: u } = e,
            d = r.useMemo(() => X(t), [t]),
            p = r.useMemo(
                () =>
                    (function (e, t, n, r) {
                        let l =
                            null == e.id
                                ? D.ZP.getURL(e.name)
                                : L.ZP.getEmojiURL({
                                      id: e.id,
                                      animated: e.animated,
                                      size: 24
                                  });
                        return null != l && '' !== l
                            ? (0, i.jsx)('img', {
                                  className: n,
                                  src: l,
                                  alt: e.name
                              })
                            : (0, i.jsx)('span', {
                                  className: r,
                                  children: e.name
                              });
                    })(t, 0, G.emoji, o()(G.emoji, G.emojiText)),
                [t]
            ),
            m = a === x.O.BURST,
            g = m ? H.t.VmiNjY : H.t.cNfs19,
            f = H.intl.formatToPlainString(g, {
                name: d,
                n: n
            }),
            b = r.useMemo(() => {
                let e = {};
                if (m) {
                    var t, n, i, r;
                    let { backgroundColor: o = '', opacity: s = 1 } = null != u ? u : {};
                    l ? ((e.background = null != (t = (0, c.wK)(o, s)) ? t : ''), (e.border = '1px solid '.concat(null != (n = (0, c.wK)(o, 1.1 * s)) ? n : ''))) : ((e.background = null != (i = (0, c.wK)(o, 0.025)) ? i : ''), (e.border = '1px solid '.concat(null != (r = (0, c.wK)(o, 0.05)) ? r : '')));
                }
                return e;
            }, [m, u, l]),
            j = r.useMemo(() => {
                let e = {};
                if (m) {
                    let { accentColor: t = '' } = null != u ? u : {};
                    e.color = t;
                }
                return e;
            }, [m, u]),
            v = r.useCallback(() => {
                s({
                    emoji: t,
                    reactionType: a
                });
            }, [t, a, s]);
        return (0, i.jsx)(h.ua7, {
            position: 'left',
            text: d,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: r } = e;
                return (0, i.jsxs)(h.P3F, {
                    className: o()({
                        [G.reactionDefault]: !l,
                        [G.reactionSelected]: l
                    }),
                    'aria-label': f,
                    onClick: v,
                    onMouseEnter: t,
                    onMouseLeave: r,
                    style: b,
                    children: [
                        p,
                        (0, i.jsx)(h.Text, {
                            variant: 'text-sm/bold',
                            style: j,
                            children: n
                        })
                    ]
                });
            }
        });
    });
function $(e) {
    let { emoji: t, user: n, message: r, channel: l, guildId: o, reactionType: s, onRemoveReactor: a, disableManage: c = !1 } = e,
        d = (0, u.e7)([R.default], () => R.default.getId()),
        p = (0, u.e7)([k.default], () => k.default.getUser(n.id), [n]),
        f = (0, E.$R)(l),
        j = (0, u.e7)([M.Z], () => M.Z.can(V.Plq.MANAGE_MESSAGES, l) && f) || d === n.id,
        v = (0, u.e7)([w.ZP, I.Z, _.Z], () => U.ZP.getName(o, l.id, n));
    return (0, i.jsxs)(b.Z, {
        className: G.reactorDefault,
        onContextMenu: (e) => (0, B.Pv)(e, n, l),
        align: b.Z.Align.CENTER,
        children: [
            (0, i.jsx)(b.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: z.marginReset,
                children: (0, i.jsx)(g.Z, {
                    user: null != p ? p : n,
                    size: h.EFr.SIZE_24
                })
            }),
            (0, i.jsx)(b.Z.Child, {
                children: (0, i.jsxs)(h.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: G.name,
                    children: [
                        null != v &&
                            '' !== v &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : G.nickname,
                                children: v
                            }),
                        (0, i.jsx)(m.Z, {
                            user: n,
                            className: null != v && '' !== v ? G.tagFaded : null,
                            usernameClass: G.username,
                            discriminatorClass: G.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                j &&
                (0, i.jsx)(h.P3F, {
                    onClick: function () {
                        P.WO({
                            channelId: l.id,
                            messageId: r.id,
                            emoji: t,
                            location: P.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: s === x.O.BURST }
                        }),
                            null == a || a();
                    },
                    children: (0, i.jsx)(h.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: G.remove
                    })
                })
        ]
    });
}
class Q extends r.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (a().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
            this.setState(
                {
                    lastId: null,
                    loadingMore: !1
                },
                () => this.loadMore()
            );
    }
    loadMore() {
        let { message: e, reaction: t, reactionType: n } = this.props,
            { lastId: i } = this.state;
        this.setState({ loadingMore: !0 }),
            P.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: V.pTL,
                after: i,
                type: n
            }).then((e) => {
                var t;
                return this.setState({
                    loadingMore: !1,
                    lastId: null == (t = e[e.length - 1]) ? void 0 : t.id
                });
            });
    }
    renderSection() {
        return null;
    }
    render() {
        let { hasMore: e, reactors: t, reaction: n, message: r, reactionType: l } = this.props,
            o = [];
        return (
            0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)),
            (0, i.jsxs)('div', {
                className: G.reactorsContainer,
                children: [
                    l === x.O.BURST &&
                        (0, i.jsx)(Y, {
                            emoji: n.emoji,
                            channelId: r.getChannelId(),
                            messageId: r.id
                        }),
                    (0, i.jsx)(h.aVo, {
                        className: G.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: o,
                        sectionHeight: 0,
                        rowHeight: this.getRowHeight,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                        onScroll: e ? this.handleScroll : void 0
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            W(this, 'scrollerRef', r.createRef()),
            W(this, 'state', {
                lastId: null,
                loadingMore: !1
            }),
            W(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore();
            }),
            W(this, 'getRowHeight', (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 44 * (0 === t);
                if (0 === e) {
                    if (0 === t && 0 === n.length) return 440;
                    if (null != this.props.reactors[t]) return 44;
                }
                return 0;
            }),
            W(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { message: r, guildId: l, channel: o, reaction: s, reactors: a, reactionType: c, disableManage: u } = this.props,
                    d = a[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(h.$jN, { className: G.spinnerMore }, 'hasMore')
                        : null
                    : 0 === a.length && this.state.loadingMore
                      ? (0, i.jsx)(h.$jN, { className: G.spinner }, 'loadingMore')
                      : null != d &&
                        (0, i.jsx)(
                            $,
                            {
                                message: r,
                                emoji: s.emoji,
                                guildId: l,
                                channel: o,
                                user: d,
                                reaction: s,
                                reactionType: c,
                                disableManage: u
                            },
                            d.id
                        );
            });
    }
}
let ee = u.ZP.connectStores([Z.Z], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        r = Z.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
    if (null == r)
        return {
            reactors: [],
            hasMore: !1
        };
    let l = Array.from(r.values()),
        o = (i === x.O.BURST ? n.burst_count : n.count) > l.length;
    return {
        reactors: l,
        hasMore: o
    };
})(Q);
function et(e) {
    let { message: t, selectedReaction: n, disableManage: l = !1, disableTabs: o = !1, onClose: s, transitionState: a, 'aria-label': c = H.intl.string(H.t.gHp0Cw) } = e,
        p = (0, u.e7)([I.Z], () => I.Z.getChannel(t.getChannelId())),
        m = null == p ? void 0 : p.getGuildId(),
        g = (0, u.e7)(
            [A.Z, O.Z],
            () => {
                var e, n;
                let i = null != (n = A.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = O.Z.getMessage(F.default.castMessageIdAsChannelId(t.id))) ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [t]
        ),
        b = r.useMemo(() => {
            let e = [];
            return (
                g.forEach((t) => {
                    t.burst_count > 0 && e.push(J(K({}, t), { count: 0 })), t.count > 0 && e.push(J(K({}, t), { burst_count: 0 }));
                }),
                e.sort((e, t) => {
                    let n = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
            );
        }, [g]),
        j = b[0],
        [S, T] = (function (e, t, n) {
            let [i, l] = r.useState(null != e ? e : t);
            return (
                r.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? x.O.VOTE : e.burst_count > 0 ? x.O.BURST : x.O.NORMAL,
                                    n = (0, C.ir)(e.emoji, i.emoji),
                                    r = t === i.reactionType;
                                return n && r;
                            }) &&
                        l(t);
                }, [i, l, n, t]),
                [i, l]
            );
        })(
            n,
            null != j
                ? {
                      emoji: j.emoji,
                      reactionType: j.burst_count > 0 ? x.O.BURST : x.O.NORMAL
                  }
                : null,
            b
        ),
        P = r.useMemo(() => {
            var e;
            return null == S ? null : null != (e = g.find((e) => (0, C.ir)(e.emoji, S.emoji))) ? e : null;
        }, [g, S]),
        E = (0, u.e7)([f.Z], () => f.Z.saturation),
        R = (0, u.e7)([N.Z], () => (0, d.wj)(N.Z.theme));
    if (
        (r.useEffect(() => {
            (0 === g.length || (null == S && null == P)) && setImmediate(s);
        }, [s, g.length, P, S]),
        null == S || null == P)
    )
        return (0, i.jsx)(h.$jN, {});
    if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(y.Z.Provider, {
        value: null != m ? m : void 0,
        children: (0, i.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: a,
            size: h.CgR.DYNAMIC,
            className: G.container,
            parentComponent: 'MessageReactions',
            children: [
                o
                    ? null
                    : (0, i.jsx)(h.Ttm, {
                          className: G.scroller,
                          fade: !0,
                          children: b.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, i.jsx)(
                                  q,
                                  {
                                      isSelected: en(S, e, n ? x.O.BURST : x.O.NORMAL),
                                      setSelected: T,
                                      reactionType: n ? x.O.BURST : x.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, v.Z)(e.burst_colors, E, R) : void 0
                                  },
                                  ''
                                      .concat(n ? 'burst-' : 'normal-')
                                      .concat(null != (t = e.emoji.id) ? t : '', ':')
                                      .concat(e.emoji.name)
                              );
                          })
                      }),
                (0, i.jsx)(ee, {
                    message: t,
                    reaction: P,
                    guildId: m,
                    channel: p,
                    reactionType: S.reactionType,
                    disableManage: l
                })
            ]
        })
    });
}
let en = (e, t, n) => a().isEqual(e.emoji, t.emoji) && e.reactionType === n;
