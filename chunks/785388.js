n.d(t, { default: () => et }), n(47120), n(653041), n(230036), n(177593), n(411104);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    l = n.n(s),
    c = n(866442),
    u = n(442837),
    d = n(780384),
    h = n(481060),
    p = n(596454),
    m = n(129861),
    f = n(700582),
    g = n(607070),
    b = n(600164),
    v = n(633302),
    j = n(712057),
    O = n(660189),
    y = n(372900),
    T = n(566006),
    x = n(620652),
    _ = n(815605),
    S = n(222677),
    E = n(995774),
    P = n(665906),
    N = n(210887),
    C = n(314897),
    R = n(592125),
    I = n(271383),
    w = n(542578),
    Z = n(375954),
    A = n(496675),
    M = n(699516),
    L = n(594174),
    k = n(768581),
    D = n(176354),
    U = n(5192),
    B = n(709054),
    F = n(91047),
    W = n(981631),
    V = n(388032),
    G = n(920448),
    H = n(685786);
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
function J(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function K(e) {
    return null == e.id ? v.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
let Y = (e) => {
    let { emoji: t, channelId: n, messageId: r } = e,
        [s, l] = o.useState(!0),
        [c, u] = o.useState([]),
        d = o.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, _.Zn)(t, c[0], n, {
                emojiSize: x.M.LARGE,
                messageId: r
            });
            return (0, i.jsx)(x.Z, {
                className: G.__invalid_effect,
                effect: e,
                emojiSize: x.M.LARGE,
                onComplete: () => l(!1)
            });
        }, [c, t, n, r]);
    return (
        o.useEffect(() => {
            let e = !1;
            return (
                l(!0),
                (async function () {
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
                    className: a()(G.burstEmoji, { [G.hideEmoji]: s }),
                    emojiId: t.id,
                    emojiName: t.name,
                    animated: t.animated,
                    size: 'reaction'
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    children: K(t)
                })
            ]
        })
    );
};
class q extends o.PureComponent {
    render() {
        let { emoji: e, count: t, isSelected: n, setSelected: o, reactionType: r, colors: s } = this.props,
            l = K(e),
            u = (function (e, t, n, o) {
                let r =
                    null == e.id
                        ? D.ZP.getURL(e.name)
                        : k.ZP.getEmojiURL({
                              id: e.id,
                              animated: e.animated,
                              size: 24
                          });
                return null != r && '' !== r
                    ? (0, i.jsx)('img', {
                          className: n,
                          src: r,
                          alt: e.name
                      })
                    : (0, i.jsx)('span', {
                          className: o,
                          children: e.name
                      });
            })(e, 0, G.emoji, a()(G.emoji, G.emojiText)),
            d = r === T.O.BURST,
            p = d ? V.t.VmiNjY : V.t.cNfs19,
            m = V.NW.formatToPlainString(p, {
                name: l,
                n: t
            }),
            f = {},
            g = {};
        if (d) {
            let { backgroundColor: e = '', opacity: t = 1, accentColor: i = '' } = null != s ? s : {};
            if (((g.color = i), n)) {
                var b;
                f.background = null !== (b = (0, c.wK)(e, t)) && void 0 !== b ? b : '';
            }
        }
        return (0, i.jsx)(h.ua7, {
            position: 'left',
            text: l,
            children: (s) => {
                let { onMouseEnter: l, onMouseLeave: c } = s;
                return (0, i.jsxs)(h.P3F, {
                    className: a()({
                        [G.reactionDefault]: !n,
                        [G.reactionSelected]: n
                    }),
                    'aria-label': m,
                    onClick: () =>
                        o({
                            emoji: e,
                            reactionType: r
                        }),
                    onMouseEnter: l,
                    onMouseLeave: c,
                    style: f,
                    children: [
                        u,
                        (0, i.jsx)(h.Text, {
                            variant: 'text-sm/bold',
                            style: g,
                            children: t
                        })
                    ]
                });
            }
        });
    }
}
function $(e) {
    let { emoji: t, user: n, message: o, channel: r, guildId: a, reactionType: s, onRemoveReactor: l, disableManage: c = !1 } = e,
        d = (0, u.e7)([C.default], () => C.default.getId()),
        p = (0, u.e7)([L.default], () => L.default.getUser(n.id), [n]),
        g = (0, P.$R)(r),
        v = (0, u.e7)([A.Z], () => A.Z.can(W.Plq.MANAGE_MESSAGES, r) && g) || d === n.id,
        j = (0, u.e7)([I.ZP, R.Z, M.Z], () => U.ZP.getName(a, r.id, n));
    return (0, i.jsxs)(b.Z, {
        className: G.reactorDefault,
        onContextMenu: (e) => (0, F.Pv)(e, n, r),
        align: b.Z.Align.CENTER,
        children: [
            (0, i.jsx)(b.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: H.marginReset,
                children: (0, i.jsx)(f.Z, {
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
                        null != j &&
                            '' !== j &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : G.nickname,
                                children: j
                            }),
                        (0, i.jsx)(m.Z, {
                            user: n,
                            className: null != j && '' !== j ? G.tagFaded : null,
                            usernameClass: G.username,
                            discriminatorClass: G.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                v &&
                (0, i.jsx)(h.P3F, {
                    onClick: function () {
                        S.WO({
                            channelId: r.id,
                            messageId: o.id,
                            emoji: t,
                            location: S.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: s === T.O.BURST }
                        }),
                            null == l || l();
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
class Q extends o.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (l().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
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
                limit: W.pTL,
                after: i,
                type: n
            }).then((e) => {
                var t;
                return this.setState({
                    loadingMore: !1,
                    lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
                });
            });
    }
    renderSection() {
        return null;
    }
    render() {
        let { hasMore: e, reactors: t, reaction: n, message: o, reactionType: r } = this.props,
            a = [];
        return (
            0 === t.length && this.state.loadingMore ? a.push(length) : (a.push(t.length), e && a.push(1)),
            (0, i.jsxs)('div', {
                className: G.reactorsContainer,
                children: [
                    r === T.O.BURST &&
                        (0, i.jsx)(Y, {
                            emoji: n.emoji,
                            channelId: o.getChannelId(),
                            messageId: o.id
                        }),
                    (0, i.jsx)(h.aVo, {
                        className: G.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: a,
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
            z(this, 'scrollerRef', o.createRef()),
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
                    { message: o, guildId: r, channel: a, reaction: s, reactors: l, reactionType: c, disableManage: u } = this.props,
                    d = l[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(h.$jN, { className: G.spinnerMore }, 'hasMore')
                        : null
                    : 0 === l.length && this.state.loadingMore
                      ? (0, i.jsx)(h.$jN, { className: G.spinner }, 'loadingMore')
                      : null != d &&
                        (0, i.jsx)(
                            $,
                            {
                                message: o,
                                emoji: s.emoji,
                                guildId: r,
                                channel: a,
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
let ee = u.ZP.connectStores([w.Z], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        o = w.Z.getReactions(t.getChannelId(), t.id, n.emoji, W.pTL, i);
    if (null == o)
        return {
            reactors: [],
            hasMore: !1
        };
    let r = Object.values(o),
        a = (i === T.O.BURST ? n.burst_count : n.count) > r.length;
    return {
        reactors: r,
        hasMore: a
    };
})(Q);
function et(e) {
    let { message: t, selectedReaction: n, disableManage: r = !1, disableTabs: a = !1, onClose: s, transitionState: l, 'aria-label': c = V.NW.string(V.t.gHp0Cw) } = e,
        p = (0, u.e7)([R.Z], () => R.Z.getChannel(t.getChannelId())),
        m = null == p ? void 0 : p.getGuildId(),
        f = (0, u.e7)(
            [Z.Z, O.Z],
            () => {
                var e, n;
                let i = null !== (n = Z.Z.getMessage(t.getChannelId(), t.id)) && void 0 !== n ? n : null === (e = O.Z.getMessage(B.default.castMessageIdAsChannelId(t.id))) || void 0 === e ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [t]
        ),
        b = o.useMemo(() => {
            let e = [];
            return (
                f.forEach((t) => {
                    t.burst_count > 0 && e.push(X(J({}, t), { count: 0 })), t.count > 0 && e.push(X(J({}, t), { burst_count: 0 }));
                }),
                e.sort((e, t) => {
                    let n = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
            );
        }, [f]),
        v = b[0],
        [x, _] = (function (e, t, n) {
            let [i, r] = o.useState(null != e ? e : t);
            return (
                o.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? T.O.VOTE : e.burst_count > 0 ? T.O.BURST : T.O.NORMAL;
                                return (0, E.ir)(e.emoji, i.emoji) && t === i.reactionType;
                            }) &&
                        r(t);
                }, [i, r, n, t]),
                [i, r]
            );
        })(
            n,
            null != v
                ? {
                      emoji: v.emoji,
                      reactionType: v.burst_count > 0 ? T.O.BURST : T.O.NORMAL
                  }
                : null,
            f
        ),
        S = o.useMemo(() => {
            var e;
            return null == x ? null : null !== (e = f.find((e) => (0, E.ir)(e.emoji, x.emoji))) && void 0 !== e ? e : null;
        }, [f, x]),
        P = (0, u.e7)([g.Z], () => g.Z.saturation),
        C = (0, u.e7)([N.Z], () => (0, d.wj)(N.Z.theme));
    if (
        (o.useEffect(() => {
            (0 === f.length || (null == x && null == S)) && setImmediate(s);
        }, [s, f.length, S, x]),
        null == x || null == S)
    )
        return (0, i.jsx)(h.$jN, {});
    if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(y.Z.Provider, {
        value: null != m ? m : void 0,
        children: (0, i.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: l,
            size: h.CgR.DYNAMIC,
            className: G.container,
            children: [
                a
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
                                      isSelected: en(x, e, n ? T.O.BURST : T.O.NORMAL),
                                      setSelected: _,
                                      reactionType: n ? T.O.BURST : T.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, j.Z)(e.burst_colors, P, C) : void 0
                                  },
                                  ''
                                      .concat(n ? 'burst-' : 'normal-')
                                      .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : '', ':')
                                      .concat(e.emoji.name)
                              );
                          })
                      }),
                (0, i.jsx)(ee, {
                    message: t,
                    reaction: S,
                    guildId: m,
                    channel: p,
                    reactionType: x.reactionType,
                    disableManage: r
                })
            ]
        })
    });
}
let en = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n;
