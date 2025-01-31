n.d(t, { default: () => Q }), n(47120), n(653041), n(177593), n(411104);
var i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    r = n.n(l),
    c = n(866442),
    d = n(442837),
    u = n(780384),
    h = n(481060),
    m = n(596454),
    p = n(129861),
    g = n(700582),
    f = n(607070),
    v = n(600164),
    T = n(633302),
    x = n(712057),
    _ = n(660189),
    b = n(372900),
    j = n(566006),
    C = n(620652),
    R = n(815605),
    S = n(222677),
    E = n(995774),
    I = n(665906),
    N = n(210887),
    Z = n(314897),
    y = n(592125),
    A = n(271383),
    O = n(542578),
    M = n(375954),
    P = n(496675),
    w = n(699516),
    L = n(594174),
    k = n(768581),
    U = n(176354),
    B = n(5192),
    F = n(709054),
    D = n(91047),
    V = n(981631),
    G = n(388032),
    H = n(891308),
    z = n(232186);
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
function J(e) {
    return null == e.id ? T.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
let K = (e) => {
    let { emoji: t, channelId: n, messageId: o } = e,
        [l, r] = a.useState(!0),
        [c, d] = a.useState([]),
        u = a.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, R.Zn)(t, c[0], n, {
                emojiSize: C.M.LARGE,
                messageId: o
            });
            return (0, i.jsx)(C.Z, {
                className: H.__invalid_effect,
                effect: e,
                emojiSize: C.M.LARGE,
                onComplete: () => r(!1)
            });
        }, [c, t, n, o]);
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                r(!0),
                (async function () {
                    let n = await (0, U.B6)(t);
                    Array.isArray(n) && n.length > 0 && !e && d(n);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [t]),
        (0, i.jsxs)('div', {
            className: H.burstEmojiSection,
            children: [
                u,
                (0, i.jsx)(m.Z, {
                    className: s()(H.burstEmoji, { [H.hideEmoji]: l }),
                    emojiId: t.id,
                    emojiName: t.name,
                    animated: t.animated,
                    size: 'reaction'
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    children: J(t)
                })
            ]
        })
    );
};
class X extends a.PureComponent {
    render() {
        let { emoji: e, count: t, isSelected: n, setSelected: a, reactionType: o, colors: l } = this.props,
            r = J(e),
            d = (function (e, t, n, a) {
                let o =
                    null == e.id
                        ? U.ZP.getURL(e.name)
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
                          className: a,
                          children: e.name
                      });
            })(e, 0, H.emoji, s()(H.emoji, H.emojiText)),
            u = o === j.O.BURST,
            m = u ? G.t.VmiNjY : G.t.cNfs19,
            p = G.intl.formatToPlainString(m, {
                name: r,
                n: t
            }),
            g = {},
            f = {};
        if (u) {
            let { backgroundColor: e = '', opacity: t = 1, accentColor: i = '' } = null != l ? l : {};
            if (((f.color = i), n)) {
                var v;
                g.background = null !== (v = (0, c.wK)(e, t)) && void 0 !== v ? v : '';
            }
        }
        return (0, i.jsx)(h.ua7, {
            position: 'left',
            text: r,
            children: (l) => {
                let { onMouseEnter: r, onMouseLeave: c } = l;
                return (0, i.jsxs)(h.P3F, {
                    className: s()({
                        [H.reactionDefault]: !n,
                        [H.reactionSelected]: n
                    }),
                    'aria-label': p,
                    onClick: () =>
                        a({
                            emoji: e,
                            reactionType: o
                        }),
                    onMouseEnter: r,
                    onMouseLeave: c,
                    style: g,
                    children: [
                        d,
                        (0, i.jsx)(h.Text, {
                            variant: 'text-sm/bold',
                            style: f,
                            children: t
                        })
                    ]
                });
            }
        });
    }
}
function Y(e) {
    let { emoji: t, user: n, message: a, channel: o, guildId: s, reactionType: l, onRemoveReactor: r, disableManage: c = !1 } = e,
        u = (0, d.e7)([Z.default], () => Z.default.getId()),
        m = (0, d.e7)([L.default], () => L.default.getUser(n.id), [n]),
        f = (0, I.$R)(o),
        T = (0, d.e7)([P.Z], () => P.Z.can(V.Plq.MANAGE_MESSAGES, o) && f) || u === n.id,
        x = (0, d.e7)([A.ZP, y.Z, w.Z], () => B.ZP.getName(s, o.id, n));
    return (0, i.jsxs)(v.Z, {
        className: H.reactorDefault,
        onContextMenu: (e) => (0, D.Pv)(e, n, o),
        align: v.Z.Align.CENTER,
        children: [
            (0, i.jsx)(v.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: z.marginReset,
                children: (0, i.jsx)(g.Z, {
                    user: null != m ? m : n,
                    size: h.EFr.SIZE_24
                })
            }),
            (0, i.jsx)(v.Z.Child, {
                children: (0, i.jsxs)(h.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: H.name,
                    children: [
                        null != x &&
                            '' !== x &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : H.nickname,
                                children: x
                            }),
                        (0, i.jsx)(p.Z, {
                            user: n,
                            className: null != x && '' !== x ? H.tagFaded : null,
                            usernameClass: H.username,
                            discriminatorClass: H.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                T &&
                (0, i.jsx)(h.P3F, {
                    onClick: function () {
                        S.WO({
                            channelId: o.id,
                            messageId: a.id,
                            emoji: t,
                            location: S.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: l === j.O.BURST }
                        }),
                            null == r || r();
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
class q extends a.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (r().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
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
                limit: V.pTL,
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
        let { hasMore: e, reactors: t, reaction: n, message: a, reactionType: o } = this.props,
            s = [];
        return (
            0 === t.length && this.state.loadingMore ? s.push(length) : (s.push(t.length), e && s.push(1)),
            (0, i.jsxs)('div', {
                className: H.reactorsContainer,
                children: [
                    o === j.O.BURST &&
                        (0, i.jsx)(K, {
                            emoji: n.emoji,
                            channelId: a.getChannelId(),
                            messageId: a.id
                        }),
                    (0, i.jsx)(h.aVo, {
                        className: H.reactors,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: s,
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
            W(this, 'scrollerRef', a.createRef()),
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
                if (1 === e) return 0 === t ? 44 : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return 440;
                    if (null != this.props.reactors[t]) return 44;
                }
                return 0;
            }),
            W(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { message: a, guildId: o, channel: s, reaction: l, reactors: r, reactionType: c, disableManage: d } = this.props,
                    u = r[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(h.$jN, { className: H.spinnerMore }, 'hasMore')
                        : null
                    : 0 === r.length && this.state.loadingMore
                      ? (0, i.jsx)(h.$jN, { className: H.spinner }, 'loadingMore')
                      : null != u &&
                        (0, i.jsx)(
                            Y,
                            {
                                message: a,
                                emoji: l.emoji,
                                guildId: o,
                                channel: s,
                                user: u,
                                reaction: l,
                                reactionType: c,
                                disableManage: d
                            },
                            u.id
                        );
            });
    }
}
let $ = d.ZP.connectStores([O.Z], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        a = O.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
    if (null == a)
        return {
            reactors: [],
            hasMore: !1
        };
    let o = Object.values(a),
        s = (i === j.O.BURST ? n.burst_count : n.count) > o.length;
    return {
        reactors: o,
        hasMore: s
    };
})(q);
function Q(e) {
    let { message: t, selectedReaction: n, disableManage: o = !1, disableTabs: s = !1, onClose: l, transitionState: r, 'aria-label': c = G.intl.string(G.t.gHp0Cw) } = e,
        m = (0, d.e7)([y.Z], () => y.Z.getChannel(t.getChannelId())),
        p = null == m ? void 0 : m.getGuildId(),
        g = (0, d.e7)(
            [M.Z, _.Z],
            () => {
                var e, n;
                let i = null !== (n = M.Z.getMessage(t.getChannelId(), t.id)) && void 0 !== n ? n : null === (e = _.Z.getMessage(F.default.castMessageIdAsChannelId(t.id))) || void 0 === e ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [t]
        ),
        v = a.useMemo(() => {
            let e = [];
            return (
                g.forEach((t) => {
                    t.burst_count > 0 &&
                        e.push({
                            ...t,
                            count: 0
                        }),
                        t.count > 0 &&
                            e.push({
                                ...t,
                                burst_count: 0
                            });
                }),
                e.sort((e, t) => {
                    let n = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
            );
        }, [g]),
        T = v[0],
        [C, R] = (function (e, t, n) {
            let [i, o] = a.useState(null != e ? e : t);
            return (
                a.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? j.O.VOTE : e.burst_count > 0 ? j.O.BURST : j.O.NORMAL;
                                return (0, E.ir)(e.emoji, i.emoji) && t === i.reactionType;
                            }) &&
                        o(t);
                }, [i, o, n, t]),
                [i, o]
            );
        })(
            n,
            null != T
                ? {
                      emoji: T.emoji,
                      reactionType: T.burst_count > 0 ? j.O.BURST : j.O.NORMAL
                  }
                : null,
            g
        ),
        S = a.useMemo(() => {
            var e;
            return null == C ? null : null !== (e = g.find((e) => (0, E.ir)(e.emoji, C.emoji))) && void 0 !== e ? e : null;
        }, [g, C]),
        I = (0, d.e7)([f.Z], () => f.Z.saturation),
        Z = (0, d.e7)([N.Z], () => (0, u.wj)(N.Z.theme));
    if (
        (a.useEffect(() => {
            (0 === g.length || (null == C && null == S)) && setImmediate(l);
        }, [l, g.length, S, C]),
        null == C || null == S)
    )
        return (0, i.jsx)(h.$jN, {});
    if (null == m) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(b.Z.Provider, {
        value: null != p ? p : void 0,
        children: (0, i.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: r,
            size: h.CgR.DYNAMIC,
            className: H.container,
            children: [
                s
                    ? null
                    : (0, i.jsx)(h.Ttm, {
                          className: H.scroller,
                          fade: !0,
                          children: v.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, i.jsx)(
                                  X,
                                  {
                                      isSelected: ee(C, e, n ? j.O.BURST : j.O.NORMAL),
                                      setSelected: R,
                                      reactionType: n ? j.O.BURST : j.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, x.Z)(e.burst_colors, I, Z) : void 0
                                  },
                                  ''
                                      .concat(n ? 'burst-' : 'normal-')
                                      .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : '', ':')
                                      .concat(e.emoji.name)
                              );
                          })
                      }),
                (0, i.jsx)($, {
                    message: t,
                    reaction: S,
                    guildId: p,
                    channel: m,
                    reactionType: C.reactionType,
                    disableManage: o
                })
            ]
        })
    });
}
let ee = (e, t, n) => r().isEqual(e.emoji, t.emoji) && e.reactionType === n;
