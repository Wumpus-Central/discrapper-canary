(n.d(t, { default: () => et }), n(388685), n(539854), n(642613), n(358797), n(415506));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
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
    O = n(712057),
    y = n(660189),
    v = n(372900),
    T = n(566006),
    x = n(620652),
    S = n(815605),
    E = n(222677),
    R = n(995774),
    I = n(665906),
    P = n(210887),
    N = n(314897),
    C = n(592125),
    w = n(271383),
    Z = n(542578),
    A = n(375954),
    M = n(496675),
    _ = n(699516),
    k = n(594174),
    L = n(768581),
    D = n(176354),
    U = n(5192),
    V = n(709054),
    B = n(91047),
    G = n(981631),
    H = n(388032),
    W = n(111932),
    F = n(20493);
function z(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                z(e, t, n[t]);
            }));
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
            [a, s] = r.useState(!0),
            [c, u] = r.useState([]),
            d = r.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, S.Zn)(t, c[0], n, {
                    emojiSize: x.M.LARGE,
                    messageId: l
                });
                return (0, i.jsx)(x.Z, {
                    className: W.__invalid_effect,
                    effect: e,
                    emojiSize: x.M.LARGE,
                    onComplete: () => s(!1)
                });
            }, [c, t, n, l]);
        return (
            r.useEffect(() => {
                let e = !1;
                return (
                    s(!0),
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
                className: W.burstEmojiSection,
                children: [
                    d,
                    (0, i.jsx)(p.Z, {
                        className: o()(W.burstEmoji, { [W.hideEmoji]: a }),
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
        let { emoji: t, count: n, isSelected: l, setSelected: a, reactionType: s, colors: u } = e,
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
                    })(t, 0, W.emoji, o()(W.emoji, W.emojiText)),
                [t]
            ),
            m = s === T.O.BURST,
            f = m ? H.t.VmiNjY : H.t.cNfs19,
            g = H.intl.formatToPlainString(f, {
                name: d,
                n: n
            }),
            b = r.useMemo(() => {
                let e = {};
                if (m) {
                    var t, n, i, r;
                    let { backgroundColor: o = '', opacity: a = 1 } = null != u ? u : {};
                    l ? ((e.background = null != (t = (0, c.wK)(o, a)) ? t : ''), (e.border = '1px solid '.concat(null != (n = (0, c.wK)(o, 1.1 * a)) ? n : ''))) : ((e.background = null != (i = (0, c.wK)(o, 0.025)) ? i : ''), (e.border = '1px solid '.concat(null != (r = (0, c.wK)(o, 0.05)) ? r : '')));
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
            O = r.useCallback(() => {
                a({
                    emoji: t,
                    reactionType: s
                });
            }, [t, s, a]);
        return (0, i.jsx)(h.ua7, {
            position: 'left',
            text: d,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: r } = e;
                return (0, i.jsxs)(h.P3F, {
                    className: o()({
                        [W.reactionDefault]: !l,
                        [W.reactionSelected]: l
                    }),
                    'aria-label': g,
                    onClick: O,
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
    let { emoji: t, user: n, message: r, channel: l, guildId: o, reactionType: a, onRemoveReactor: s, disableManage: c = !1 } = e,
        d = (0, u.e7)([N.default], () => N.default.getId()),
        p = (0, u.e7)([k.default], () => k.default.getUser(n.id), [n]),
        g = (0, I.$R)(l),
        j = (0, u.e7)([M.Z], () => M.Z.can(G.Plq.MANAGE_MESSAGES, l) && g) || d === n.id,
        O = (0, u.e7)([w.ZP, C.Z, _.Z], () => U.ZP.getName(o, l.id, n));
    return (0, i.jsxs)(b.Z, {
        className: W.reactorDefault,
        onContextMenu: (e) => (0, B.Pv)(e, n, l),
        align: b.Z.Align.CENTER,
        children: [
            (0, i.jsx)(b.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: F.marginReset,
                children: (0, i.jsx)(f.Z, {
                    user: null != p ? p : n,
                    size: h.EFr.SIZE_24
                })
            }),
            (0, i.jsx)(b.Z.Child, {
                children: (0, i.jsxs)(h.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: W.name,
                    children: [
                        null != O &&
                            '' !== O &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : W.nickname,
                                children: O
                            }),
                        (0, i.jsx)(m.Z, {
                            user: n,
                            className: null != O && '' !== O ? W.tagFaded : null,
                            usernameClass: W.username,
                            discriminatorClass: W.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                j &&
                (0, i.jsx)(h.P3F, {
                    onClick: function () {
                        (E.WO({
                            channelId: l.id,
                            messageId: r.id,
                            emoji: t,
                            location: E.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: a === T.O.BURST }
                        }),
                            null == s || s());
                    },
                    children: (0, i.jsx)(h.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: W.remove
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
        (this.setState({ loadingMore: !0 }),
            E.U0({
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
            }));
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
                className: W.reactorsContainer,
                children: [
                    l === T.O.BURST &&
                        (0, i.jsx)(Y, {
                            emoji: n.emoji,
                            channelId: r.getChannelId(),
                            messageId: r.id
                        }),
                    (0, i.jsx)(h.aVo, {
                        className: W.reactors,
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
        (super(...e),
            z(this, 'scrollerRef', r.createRef()),
            z(this, 'state', {
                lastId: null,
                loadingMore: !1
            }),
            z(this, 'handleScroll', () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore();
            }),
            z(this, 'getRowHeight', (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 44 * (0 === t);
                if (0 === e) {
                    if (0 === t && 0 === n.length) return 440;
                    if (null != this.props.reactors[t]) return 44;
                }
                return 0;
            }),
            z(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { message: r, guildId: l, channel: o, reaction: a, reactors: s, reactionType: c, disableManage: u } = this.props,
                    d = s[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(h.$jN, { className: W.spinnerMore }, 'hasMore')
                        : null
                    : 0 === s.length && this.state.loadingMore
                      ? (0, i.jsx)(h.$jN, { className: W.spinner }, 'loadingMore')
                      : null != d &&
                        (0, i.jsx)(
                            $,
                            {
                                message: r,
                                emoji: a.emoji,
                                guildId: l,
                                channel: o,
                                user: d,
                                reaction: a,
                                reactionType: c,
                                disableManage: u
                            },
                            d.id
                        );
            }));
    }
}
let ee = u.ZP.connectStores([Z.Z], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        r = Z.Z.getReactions(t.getChannelId(), t.id, n.emoji, G.pTL, i);
    if (null == r)
        return {
            reactors: [],
            hasMore: !1
        };
    let l = Array.from(r.values()),
        o = (i === T.O.BURST ? n.burst_count : n.count) > l.length;
    return {
        reactors: l,
        hasMore: o
    };
})(Q);
function et(e) {
    let { message: t, selectedReaction: n, disableManage: l = !1, disableTabs: o = !1, onClose: a, transitionState: s, 'aria-label': c = H.intl.string(H.t.gHp0Cw) } = e,
        p = (0, u.e7)([C.Z], () => C.Z.getChannel(t.getChannelId())),
        m = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)(
            [A.Z, y.Z],
            () => {
                var e, n;
                let i = null != (n = A.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = y.Z.getMessage(V.default.castMessageIdAsChannelId(t.id))) ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [t]
        ),
        b = r.useMemo(() => {
            let e = [];
            return (
                f.forEach((t) => {
                    (t.burst_count > 0 && e.push(J(K({}, t), { count: 0 })), t.count > 0 && e.push(J(K({}, t), { burst_count: 0 })));
                }),
                e.sort((e, t) => {
                    let n = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
            );
        }, [f]),
        j = b[0],
        [x, S] = (function (e, t, n) {
            let [i, l] = r.useState(null != e ? e : t);
            return (
                r.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? T.O.VOTE : e.burst_count > 0 ? T.O.BURST : T.O.NORMAL,
                                    n = (0, R.ir)(e.emoji, i.emoji),
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
                      reactionType: j.burst_count > 0 ? T.O.BURST : T.O.NORMAL
                  }
                : null,
            b
        ),
        E = r.useMemo(() => {
            var e;
            return null == x ? null : null != (e = f.find((e) => (0, R.ir)(e.emoji, x.emoji))) ? e : null;
        }, [f, x]),
        I = (0, u.e7)([g.Z], () => g.Z.saturation),
        N = (0, u.e7)([P.Z], () => (0, d.wj)(P.Z.theme));
    if (
        (r.useEffect(() => {
            (0 === f.length || (null == x && null == E)) && setImmediate(a);
        }, [a, f.length, E, x]),
        null == x || null == E)
    )
        return (0, i.jsx)(h.$jN, {});
    if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(v.Z.Provider, {
        value: null != m ? m : void 0,
        children: (0, i.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: s,
            size: h.CgR.DYNAMIC,
            className: W.container,
            parentComponent: 'MessageReactions',
            children: [
                o
                    ? null
                    : (0, i.jsx)(h.Ttm, {
                          className: W.scroller,
                          fade: !0,
                          children: b.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, i.jsx)(
                                  q,
                                  {
                                      isSelected: en(x, e, n ? T.O.BURST : T.O.NORMAL),
                                      setSelected: S,
                                      reactionType: n ? T.O.BURST : T.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, O.Z)(e.burst_colors, I, N) : void 0
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
                    reaction: E,
                    guildId: m,
                    channel: p,
                    reactionType: x.reactionType,
                    disableManage: l
                })
            ]
        })
    });
}
let en = (e, t, n) => s().isEqual(e.emoji, t.emoji) && e.reactionType === n;
