n.d(t, { default: () => et }), n(388685), n(539854), n(642613), n(358797), n(415506);
var i = n(255367),
    o = n(73800),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(866442),
    u = n(442837),
    d = n(780384),
    h = n(481060),
    p = n(596454),
    m = n(129861),
    f = n(700582),
    g = n(607070),
    b = n(600164),
    j = n(633302),
    v = n(712057),
    O = n(660189),
    y = n(372900),
    T = n(566006),
    E = n(620652),
    R = n(815605),
    S = n(222677),
    x = n(995774),
    N = n(665906),
    I = n(210887),
    P = n(314897),
    C = n(592125),
    Z = n(271383),
    w = n(542578),
    A = n(375954),
    M = n(496675),
    _ = n(699516),
    L = n(594174),
    k = n(768581),
    U = n(176354),
    D = n(5192),
    V = n(709054),
    B = n(91047),
    G = n(981631),
    H = n(388032),
    F = n(111932),
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
            [a, s] = o.useState(!0),
            [c, u] = o.useState([]),
            d = o.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, R.Zn)(t, c[0], n, {
                    emojiSize: E.M.LARGE,
                    messageId: l
                });
                return (0, i.jsx)(E.Z, {
                    className: F.__invalid_effect,
                    effect: e,
                    emojiSize: E.M.LARGE,
                    onComplete: () => s(!1)
                });
            }, [c, t, n, l]);
        return (
            o.useEffect(() => {
                let e = !1;
                return (
                    s(!0),
                    !(async function () {
                        let n = await (0, U.B6)(t);
                        Array.isArray(n) && n.length > 0 && !e && u(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, i.jsxs)('div', {
                className: F.burstEmojiSection,
                children: [
                    d,
                    (0, i.jsx)(p.Z, {
                        className: r()(F.burstEmoji, { [F.hideEmoji]: a }),
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
    q = o.memo(function (e) {
        let { emoji: t, count: n, isSelected: l, setSelected: a, reactionType: s, colors: u } = e,
            d = o.useMemo(() => X(t), [t]),
            p = o.useMemo(
                () =>
                    (function (e, t, n, o) {
                        let l =
                            null == e.id
                                ? U.ZP.getURL(e.name)
                                : k.ZP.getEmojiURL({
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
                                  className: o,
                                  children: e.name
                              });
                    })(t, 0, F.emoji, r()(F.emoji, F.emojiText)),
                [t]
            ),
            m = s === T.O.BURST,
            f = m ? H.t.VmiNjY : H.t.cNfs19,
            g = H.intl.formatToPlainString(f, {
                name: d,
                n: n
            }),
            b = o.useMemo(() => {
                let e = {};
                if (m) {
                    var t, n, i, o;
                    let { backgroundColor: r = '', opacity: a = 1 } = null != u ? u : {};
                    l ? ((e.background = null != (t = (0, c.wK)(r, a)) ? t : ''), (e.border = '1px solid '.concat(null != (n = (0, c.wK)(r, 1.1 * a)) ? n : ''))) : ((e.background = null != (i = (0, c.wK)(r, 0.025)) ? i : ''), (e.border = '1px solid '.concat(null != (o = (0, c.wK)(r, 0.05)) ? o : '')));
                }
                return e;
            }, [m, u, l]),
            j = o.useMemo(() => {
                let e = {};
                if (m) {
                    let { accentColor: t = '' } = null != u ? u : {};
                    e.color = t;
                }
                return e;
            }, [m, u]),
            v = o.useCallback(() => {
                a({
                    emoji: t,
                    reactionType: s
                });
            }, [t, s, a]);
        return (0, i.jsx)(h.ua7, {
            position: 'left',
            text: d,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: o } = e;
                return (0, i.jsxs)(h.P3F, {
                    className: r()({
                        [F.reactionDefault]: !l,
                        [F.reactionSelected]: l
                    }),
                    'aria-label': g,
                    onClick: v,
                    onMouseEnter: t,
                    onMouseLeave: o,
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
    let { emoji: t, user: n, message: o, channel: l, guildId: r, reactionType: a, onRemoveReactor: s, disableManage: c = !1 } = e,
        d = (0, u.e7)([P.default], () => P.default.getId()),
        p = (0, u.e7)([L.default], () => L.default.getUser(n.id), [n]),
        g = (0, N.$R)(l),
        j = (0, u.e7)([M.Z], () => M.Z.can(G.Plq.MANAGE_MESSAGES, l) && g) || d === n.id,
        v = (0, u.e7)([Z.ZP, C.Z, _.Z], () => D.ZP.getName(r, l.id, n));
    return (0, i.jsxs)(b.Z, {
        className: F.reactorDefault,
        onContextMenu: (e) => (0, B.Pv)(e, n, l),
        align: b.Z.Align.CENTER,
        children: [
            (0, i.jsx)(b.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: z.marginReset,
                children: (0, i.jsx)(f.Z, {
                    user: null != p ? p : n,
                    size: h.EFr.SIZE_24
                })
            }),
            (0, i.jsx)(b.Z.Child, {
                children: (0, i.jsxs)(h.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: F.name,
                    children: [
                        null != v &&
                            '' !== v &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : F.nickname,
                                children: v
                            }),
                        (0, i.jsx)(m.Z, {
                            user: n,
                            className: null != v && '' !== v ? F.tagFaded : null,
                            usernameClass: F.username,
                            discriminatorClass: F.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                j &&
                (0, i.jsx)(h.P3F, {
                    onClick: function () {
                        S.WO({
                            channelId: l.id,
                            messageId: o.id,
                            emoji: t,
                            location: S.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: a === T.O.BURST }
                        }),
                            null == s || s();
                    },
                    children: (0, i.jsx)(h.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: F.remove
                    })
                })
        ]
    });
}
class Q extends o.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
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
            S.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: G.pTL,
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
        let { hasMore: e, reactors: t, reaction: n, message: o, reactionType: l } = this.props,
            r = [];
        return (
            0 === t.length && this.state.loadingMore ? r.push(length) : (r.push(t.length), e && r.push(1)),
            (0, i.jsxs)('div', {
                className: F.reactorsContainer,
                children: [
                    l === T.O.BURST &&
                        (0, i.jsx)(Y, {
                            emoji: n.emoji,
                            channelId: o.getChannelId(),
                            messageId: o.id
                        }),
                    (0, i.jsx)(h.aVo, {
                        className: F.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: r,
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
            W(this, 'scrollerRef', o.createRef()),
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
                    { message: o, guildId: l, channel: r, reaction: a, reactors: s, reactionType: c, disableManage: u } = this.props,
                    d = s[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(h.$jN, { className: F.spinnerMore }, 'hasMore')
                        : null
                    : 0 === s.length && this.state.loadingMore
                      ? (0, i.jsx)(h.$jN, { className: F.spinner }, 'loadingMore')
                      : null != d &&
                        (0, i.jsx)(
                            $,
                            {
                                message: o,
                                emoji: a.emoji,
                                guildId: l,
                                channel: r,
                                user: d,
                                reaction: a,
                                reactionType: c,
                                disableManage: u
                            },
                            d.id
                        );
            });
    }
}
let ee = u.ZP.connectStores([w.Z], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        o = w.Z.getReactions(t.getChannelId(), t.id, n.emoji, G.pTL, i);
    if (null == o)
        return {
            reactors: [],
            hasMore: !1
        };
    let l = Array.from(o.values()),
        r = (i === T.O.BURST ? n.burst_count : n.count) > l.length;
    return {
        reactors: l,
        hasMore: r
    };
})(Q);
function et(e) {
    let { message: t, selectedReaction: n, disableManage: l = !1, disableTabs: r = !1, onClose: a, transitionState: s, 'aria-label': c = H.intl.string(H.t.gHp0Cw) } = e,
        p = (0, u.e7)([C.Z], () => C.Z.getChannel(t.getChannelId())),
        m = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)(
            [A.Z, O.Z],
            () => {
                var e, n;
                let i = null != (n = A.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = O.Z.getMessage(V.default.castMessageIdAsChannelId(t.id))) ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [t]
        ),
        b = o.useMemo(() => {
            let e = [];
            return (
                f.forEach((t) => {
                    t.burst_count > 0 && e.push(J(K({}, t), { count: 0 })), t.count > 0 && e.push(J(K({}, t), { burst_count: 0 }));
                }),
                e.sort((e, t) => {
                    let n = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
            );
        }, [f]),
        j = b[0],
        [E, R] = (function (e, t, n) {
            let [i, l] = o.useState(null != e ? e : t);
            return (
                o.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? T.O.VOTE : e.burst_count > 0 ? T.O.BURST : T.O.NORMAL,
                                    n = (0, x.ir)(e.emoji, i.emoji),
                                    o = t === i.reactionType;
                                return n && o;
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
                      reactionType: j.burst_count > 0 ? T.O.BURST : T.O.NORMAL
                  }
                : null,
            b
        ),
        S = o.useMemo(() => {
            var e;
            return null == E ? null : null != (e = f.find((e) => (0, x.ir)(e.emoji, E.emoji))) ? e : null;
        }, [f, E]),
        N = (0, u.e7)([g.Z], () => g.Z.saturation),
        P = (0, u.e7)([I.Z], () => (0, d.wj)(I.Z.theme));
    if (
        (o.useEffect(() => {
            (0 === f.length || (null == E && null == S)) && setImmediate(a);
        }, [a, f.length, S, E]),
        null == E || null == S)
    )
        return (0, i.jsx)(h.$jN, {});
    if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(y.Z.Provider, {
        value: null != m ? m : void 0,
        children: (0, i.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: s,
            size: h.CgR.DYNAMIC,
            className: F.container,
            parentComponent: 'MessageReactions',
            children: [
                r
                    ? null
                    : (0, i.jsx)(h.Ttm, {
                          className: F.scroller,
                          fade: !0,
                          children: b.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, i.jsx)(
                                  q,
                                  {
                                      isSelected: en(E, e, n ? T.O.BURST : T.O.NORMAL),
                                      setSelected: R,
                                      reactionType: n ? T.O.BURST : T.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, v.Z)(e.burst_colors, N, P) : void 0
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
                    reaction: S,
                    guildId: m,
                    channel: p,
                    reactionType: E.reactionType,
                    disableManage: l
                })
            ]
        })
    });
}
let en = (e, t, n) => s().isEqual(e.emoji, t.emoji) && e.reactionType === n;
