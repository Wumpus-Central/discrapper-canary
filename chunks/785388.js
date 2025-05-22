n.d(t, { default: () => et }), n(388685), n(539854), n(642613), n(358797), n(415506);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
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
    v = n(660189),
    y = n(372900),
    T = n(566006),
    x = n(620652),
    S = n(815605),
    _ = n(222677),
    P = n(995774),
    E = n(665906),
    C = n(210887),
    R = n(314897),
    I = n(592125),
    w = n(271383),
    N = n(542578),
    Z = n(375954),
    A = n(496675),
    M = n(699516),
    L = n(594174),
    k = n(768581),
    D = n(176354),
    U = n(5192),
    F = n(709054),
    B = n(91047),
    V = n(981631),
    G = n(388032),
    H = n(111932),
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
        let { emoji: t, channelId: n, messageId: o } = e,
            [a, s] = r.useState(!0),
            [c, u] = r.useState([]),
            d = r.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, S.Zn)(t, c[0], n, {
                    emojiSize: x.M.LARGE,
                    messageId: o
                });
                return (0, i.jsx)(x.Z, {
                    className: H.__invalid_effect,
                    effect: e,
                    emojiSize: x.M.LARGE,
                    onComplete: () => s(!1)
                });
            }, [c, t, n, o]);
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
                className: H.burstEmojiSection,
                children: [
                    d,
                    (0, i.jsx)(p.Z, {
                        className: l()(H.burstEmoji, { [H.hideEmoji]: a }),
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
        let { emoji: t, count: n, isSelected: o, setSelected: a, reactionType: s, colors: u } = e,
            d = r.useMemo(() => X(t), [t]),
            p = r.useMemo(
                () =>
                    (function (e, t, n, r) {
                        let o =
                            null == e.id
                                ? D.ZP.getURL(e.name)
                                : k.ZP.getEmojiURL({
                                      id: e.id,
                                      animated: e.animated,
                                      size: 24
                                  });
                        return null != o && '' !== o
                            ? (0, i.jsx)('img', {
                                  className: n,
                                  src: o,
                                  alt: e.name
                              })
                            : (0, i.jsx)('span', {
                                  className: r,
                                  children: e.name
                              });
                    })(t, 0, H.emoji, l()(H.emoji, H.emojiText)),
                [t]
            ),
            m = s === T.O.BURST,
            f = m ? G.t.VmiNjY : G.t.cNfs19,
            g = G.intl.formatToPlainString(f, {
                name: d,
                n: n
            }),
            b = r.useMemo(() => {
                let e = {};
                if (m) {
                    var t, n, i, r;
                    let { backgroundColor: l = '', opacity: a = 1 } = null != u ? u : {};
                    o ? ((e.background = null != (t = (0, c.wK)(l, a)) ? t : ''), (e.border = '1px solid '.concat(null != (n = (0, c.wK)(l, 1.1 * a)) ? n : ''))) : ((e.background = null != (i = (0, c.wK)(l, 0.025)) ? i : ''), (e.border = '1px solid '.concat(null != (r = (0, c.wK)(l, 0.05)) ? r : '')));
                }
                return e;
            }, [m, u, o]),
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
                    className: l()({
                        [H.reactionDefault]: !o,
                        [H.reactionSelected]: o
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
    let { emoji: t, user: n, message: r, channel: o, guildId: l, reactionType: a, onRemoveReactor: s, disableManage: c = !1 } = e,
        d = (0, u.e7)([R.default], () => R.default.getId()),
        p = (0, u.e7)([L.default], () => L.default.getUser(n.id), [n]),
        g = (0, E.$R)(o),
        j = (0, u.e7)([A.Z], () => A.Z.can(V.Plq.MANAGE_MESSAGES, o) && g) || d === n.id,
        O = (0, u.e7)([w.ZP, I.Z, M.Z], () => U.ZP.getName(l, o.id, n));
    return (0, i.jsxs)(b.Z, {
        className: H.reactorDefault,
        onContextMenu: (e) => (0, B.Pv)(e, n, o),
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
                    className: H.name,
                    children: [
                        null != O &&
                            '' !== O &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : H.nickname,
                                children: O
                            }),
                        (0, i.jsx)(m.Z, {
                            user: n,
                            className: null != O && '' !== O ? H.tagFaded : null,
                            usernameClass: H.username,
                            discriminatorClass: H.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                j &&
                (0, i.jsx)(h.P3F, {
                    onClick: function () {
                        _.WO({
                            channelId: o.id,
                            messageId: r.id,
                            emoji: t,
                            location: _.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: a === T.O.BURST }
                        }),
                            null == s || s();
                    },
                    children: (0, i.jsx)(h.Dio, {
                        size: 'xs',
                        color: 'currentColor',
                        className: H.remove
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
        this.setState({ loadingMore: !0 }),
            _.U0({
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
        let { hasMore: e, reactors: t, reaction: n, message: r, reactionType: o } = this.props,
            l = [];
        return (
            0 === t.length && this.state.loadingMore ? l.push(length) : (l.push(t.length), e && l.push(1)),
            (0, i.jsxs)('div', {
                className: H.reactorsContainer,
                children: [
                    o === T.O.BURST &&
                        (0, i.jsx)(Y, {
                            emoji: n.emoji,
                            channelId: r.getChannelId(),
                            messageId: r.id
                        }),
                    (0, i.jsx)(h.aVo, {
                        className: H.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: l,
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
                    { message: r, guildId: o, channel: l, reaction: a, reactors: s, reactionType: c, disableManage: u } = this.props,
                    d = s[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(h.$jN, { className: H.spinnerMore }, 'hasMore')
                        : null
                    : 0 === s.length && this.state.loadingMore
                      ? (0, i.jsx)(h.$jN, { className: H.spinner }, 'loadingMore')
                      : null != d &&
                        (0, i.jsx)(
                            $,
                            {
                                message: r,
                                emoji: a.emoji,
                                guildId: o,
                                channel: l,
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
let ee = u.ZP.connectStores([N.Z], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        r = N.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
    if (null == r)
        return {
            reactors: [],
            hasMore: !1
        };
    let o = Object.values(r),
        l = (i === T.O.BURST ? n.burst_count : n.count) > o.length;
    return {
        reactors: o,
        hasMore: l
    };
})(Q);
function et(e) {
    let { message: t, selectedReaction: n, disableManage: o = !1, disableTabs: l = !1, onClose: a, transitionState: s, 'aria-label': c = G.intl.string(G.t.gHp0Cw) } = e,
        p = (0, u.e7)([I.Z], () => I.Z.getChannel(t.getChannelId())),
        m = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)(
            [Z.Z, v.Z],
            () => {
                var e, n;
                let i = null != (n = Z.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = v.Z.getMessage(F.default.castMessageIdAsChannelId(t.id))) ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [t]
        ),
        b = r.useMemo(() => {
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
        [x, S] = (function (e, t, n) {
            let [i, o] = r.useState(null != e ? e : t);
            return (
                r.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? T.O.VOTE : e.burst_count > 0 ? T.O.BURST : T.O.NORMAL,
                                    n = (0, P.ir)(e.emoji, i.emoji),
                                    r = t === i.reactionType;
                                return n && r;
                            }) &&
                        o(t);
                }, [i, o, n, t]),
                [i, o]
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
        _ = r.useMemo(() => {
            var e;
            return null == x ? null : null != (e = f.find((e) => (0, P.ir)(e.emoji, x.emoji))) ? e : null;
        }, [f, x]),
        E = (0, u.e7)([g.Z], () => g.Z.saturation),
        R = (0, u.e7)([C.Z], () => (0, d.wj)(C.Z.theme));
    if (
        (r.useEffect(() => {
            (0 === f.length || (null == x && null == _)) && setImmediate(a);
        }, [a, f.length, _, x]),
        null == x || null == _)
    )
        return (0, i.jsx)(h.$jN, {});
    if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(y.Z.Provider, {
        value: null != m ? m : void 0,
        children: (0, i.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: s,
            size: h.CgR.DYNAMIC,
            className: H.container,
            children: [
                l
                    ? null
                    : (0, i.jsx)(h.Ttm, {
                          className: H.scroller,
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
                                      colors: null != e.burst_colors ? (0, O.Z)(e.burst_colors, E, R) : void 0
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
                    reaction: _,
                    guildId: m,
                    channel: p,
                    reactionType: x.reactionType,
                    disableManage: o
                })
            ]
        })
    });
}
let en = (e, t, n) => s().isEqual(e.emoji, t.emoji) && e.reactionType === n;
