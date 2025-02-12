i.d(t, { default: () => Q }), i(47120), i(653041), i(177593), i(411104);
var n = i(200651),
    a = i(192379),
    o = i(120356),
    s = i.n(o),
    l = i(392711),
    r = i.n(l),
    c = i(866442),
    d = i(442837),
    u = i(780384),
    h = i(481060),
    m = i(596454),
    p = i(129861),
    g = i(700582),
    f = i(607070),
    v = i(600164),
    x = i(633302),
    b = i(712057),
    T = i(660189),
    j = i(372900),
    _ = i(566006),
    C = i(620652),
    R = i(815605),
    S = i(222677),
    N = i(995774),
    I = i(665906),
    E = i(210887),
    Z = i(314897),
    y = i(592125),
    O = i(271383),
    A = i(542578),
    M = i(375954),
    P = i(496675),
    w = i(699516),
    L = i(594174),
    k = i(768581),
    B = i(176354),
    U = i(5192),
    F = i(709054),
    V = i(91047),
    D = i(981631),
    G = i(388032),
    H = i(640303),
    z = i(814632);
function W(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
function K(e) {
    return null == e.id ? x.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
let J = (e) => {
    let { emoji: t, channelId: i, messageId: o } = e,
        [l, r] = a.useState(!0),
        [c, d] = a.useState([]),
        u = a.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, R.Zn)(t, c[0], i, {
                emojiSize: C.M.LARGE,
                messageId: o
            });
            return (0, n.jsx)(C.Z, {
                className: H.__invalid_effect,
                effect: e,
                emojiSize: C.M.LARGE,
                onComplete: () => r(!1)
            });
        }, [c, t, i, o]);
    return (
        a.useEffect(() => {
            let e = !1;
            return (
                r(!0),
                (async function () {
                    let i = await (0, B.B6)(t);
                    Array.isArray(i) && i.length > 0 && !e && d(i);
                })(),
                () => {
                    e = !0;
                }
            );
        }, [t]),
        (0, n.jsxs)('div', {
            className: H.burstEmojiSection,
            children: [
                u,
                (0, n.jsx)(m.Z, {
                    className: s()(H.burstEmoji, { [H.hideEmoji]: l }),
                    emojiId: t.id,
                    emojiName: t.name,
                    animated: t.animated,
                    size: 'reaction'
                }),
                (0, n.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    children: K(t)
                })
            ]
        })
    );
};
class X extends a.PureComponent {
    render() {
        let { emoji: e, count: t, isSelected: i, setSelected: a, reactionType: o, colors: l } = this.props,
            r = K(e),
            d = (function (e, t, i, a) {
                let o =
                    null == e.id
                        ? B.ZP.getURL(e.name)
                        : k.ZP.getEmojiURL({
                              id: e.id,
                              animated: e.animated,
                              size: 24
                          });
                return null != o && '' !== o
                    ? (0, n.jsx)('img', {
                          className: i,
                          src: o,
                          alt: e.name
                      })
                    : (0, n.jsx)('span', {
                          className: a,
                          children: e.name
                      });
            })(e, 0, H.emoji, s()(H.emoji, H.emojiText)),
            u = o === _.O.BURST,
            m = u ? G.t.VmiNjY : G.t.cNfs19,
            p = G.intl.formatToPlainString(m, {
                name: r,
                n: t
            }),
            g = {},
            f = {};
        if (u) {
            let { backgroundColor: e = '', opacity: t = 1, accentColor: n = '' } = null != l ? l : {};
            if (((f.color = n), i)) {
                var v;
                g.background = null !== (v = (0, c.wK)(e, t)) && void 0 !== v ? v : '';
            }
        }
        return (0, n.jsx)(h.ua7, {
            position: 'left',
            text: r,
            children: (l) => {
                let { onMouseEnter: r, onMouseLeave: c } = l;
                return (0, n.jsxs)(h.P3F, {
                    className: s()({
                        [H.reactionDefault]: !i,
                        [H.reactionSelected]: i
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
                        (0, n.jsx)(h.Text, {
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
    let { emoji: t, user: i, message: a, channel: o, guildId: s, reactionType: l, onRemoveReactor: r, disableManage: c = !1 } = e,
        u = (0, d.e7)([Z.default], () => Z.default.getId()),
        m = (0, d.e7)([L.default], () => L.default.getUser(i.id), [i]),
        f = (0, I.$R)(o),
        x = (0, d.e7)([P.Z], () => P.Z.can(D.Plq.MANAGE_MESSAGES, o) && f) || u === i.id,
        b = (0, d.e7)([O.ZP, y.Z, w.Z], () => U.ZP.getName(s, o.id, i));
    return (0, n.jsxs)(v.Z, {
        className: H.reactorDefault,
        onContextMenu: (e) => (0, V.Pv)(e, i, o),
        align: v.Z.Align.CENTER,
        children: [
            (0, n.jsx)(v.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: z.marginReset,
                children: (0, n.jsx)(g.Z, {
                    user: null != m ? m : i,
                    size: h.EFr.SIZE_24
                })
            }),
            (0, n.jsx)(v.Z.Child, {
                children: (0, n.jsxs)(h.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: H.name,
                    children: [
                        null != b &&
                            '' !== b &&
                            (0, n.jsx)('span', {
                                className: i.isPomelo() ? '' : H.nickname,
                                children: b
                            }),
                        (0, n.jsx)(p.Z, {
                            user: i,
                            className: null != b && '' !== b ? H.tagFaded : null,
                            usernameClass: H.username,
                            discriminatorClass: H.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                x &&
                (0, n.jsx)(h.P3F, {
                    onClick: function () {
                        S.WO({
                            channelId: o.id,
                            messageId: a.id,
                            emoji: t,
                            location: S.TW.MESSAGE,
                            userId: i.id,
                            options: { burst: l === _.O.BURST }
                        }),
                            null == r || r();
                    },
                    children: (0, n.jsx)(h.Dio, {
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
        let { message: e, reaction: t, reactionType: i } = this.props,
            { lastId: n } = this.state;
        this.setState({ loadingMore: !0 }),
            S.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: D.pTL,
                after: n,
                type: i
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
        let { hasMore: e, reactors: t, reaction: i, message: a, reactionType: o } = this.props,
            s = [];
        return (
            0 === t.length && this.state.loadingMore ? s.push(length) : (s.push(t.length), e && s.push(1)),
            (0, n.jsxs)('div', {
                className: H.reactorsContainer,
                children: [
                    o === _.O.BURST &&
                        (0, n.jsx)(J, {
                            emoji: i.emoji,
                            channelId: a.getChannelId(),
                            messageId: a.id
                        }),
                    (0, n.jsx)(h.aVo, {
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
                let { reactors: i } = this.props;
                if (1 === e) return 0 === t ? 44 : 0;
                if (0 === e) {
                    if (0 === t && 0 === i.length) return 440;
                    if (null != this.props.reactors[t]) return 44;
                }
                return 0;
            }),
            W(this, 'renderRow', (e) => {
                let { section: t, row: i } = e,
                    { message: a, guildId: o, channel: s, reaction: l, reactors: r, reactionType: c, disableManage: d } = this.props,
                    u = r[i];
                return 1 === t
                    ? 0 === i
                        ? (0, n.jsx)(h.$jN, { className: H.spinnerMore }, 'hasMore')
                        : null
                    : 0 === r.length && this.state.loadingMore
                      ? (0, n.jsx)(h.$jN, { className: H.spinner }, 'loadingMore')
                      : null != u &&
                        (0, n.jsx)(
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
let $ = d.ZP.connectStores([A.Z], (e) => {
    let { message: t, reaction: i, reactionType: n } = e,
        a = A.Z.getReactions(t.getChannelId(), t.id, i.emoji, D.pTL, n);
    if (null == a)
        return {
            reactors: [],
            hasMore: !1
        };
    let o = Object.values(a),
        s = (n === _.O.BURST ? i.burst_count : i.count) > o.length;
    return {
        reactors: o,
        hasMore: s
    };
})(q);
function Q(e) {
    let { message: t, selectedReaction: i, disableManage: o = !1, disableTabs: s = !1, onClose: l, transitionState: r, 'aria-label': c = G.intl.string(G.t.gHp0Cw) } = e,
        m = (0, d.e7)([y.Z], () => y.Z.getChannel(t.getChannelId())),
        p = null == m ? void 0 : m.getGuildId(),
        g = (0, d.e7)(
            [M.Z, T.Z],
            () => {
                var e, i;
                let n = null !== (i = M.Z.getMessage(t.getChannelId(), t.id)) && void 0 !== i ? i : null === (e = T.Z.getMessage(F.default.castMessageIdAsChannelId(t.id))) || void 0 === e ? void 0 : e.firstMessage;
                return null != n ? n.reactions : [];
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
                    let i = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - i;
                }),
                e
            );
        }, [g]),
        x = v[0],
        [C, R] = (function (e, t, i) {
            let [n, o] = a.useState(null != e ? e : t);
            return (
                a.useEffect(() => {
                    null != n &&
                        null ==
                            i.find((e) => {
                                let t = null != e.me_vote ? _.O.VOTE : e.burst_count > 0 ? _.O.BURST : _.O.NORMAL;
                                return (0, N.ir)(e.emoji, n.emoji) && t === n.reactionType;
                            }) &&
                        o(t);
                }, [n, o, i, t]),
                [n, o]
            );
        })(
            i,
            null != x
                ? {
                      emoji: x.emoji,
                      reactionType: x.burst_count > 0 ? _.O.BURST : _.O.NORMAL
                  }
                : null,
            g
        ),
        S = a.useMemo(() => {
            var e;
            return null == C ? null : null !== (e = g.find((e) => (0, N.ir)(e.emoji, C.emoji))) && void 0 !== e ? e : null;
        }, [g, C]),
        I = (0, d.e7)([f.Z], () => f.Z.saturation),
        Z = (0, d.e7)([E.Z], () => (0, u.wj)(E.Z.theme));
    if (
        (a.useEffect(() => {
            (0 === g.length || (null == C && null == S)) && setImmediate(l);
        }, [l, g.length, S, C]),
        null == C || null == S)
    )
        return (0, n.jsx)(h.$jN, {});
    if (null == m) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, n.jsx)(j.Z.Provider, {
        value: null != p ? p : void 0,
        children: (0, n.jsxs)(h.Y0X, {
            'aria-label': c,
            transitionState: r,
            size: h.CgR.DYNAMIC,
            className: H.container,
            children: [
                s
                    ? null
                    : (0, n.jsx)(h.Ttm, {
                          className: H.scroller,
                          fade: !0,
                          children: v.map((e) => {
                              var t;
                              let i = e.burst_count > 0;
                              return (0, n.jsx)(
                                  X,
                                  {
                                      isSelected: ee(C, e, i ? _.O.BURST : _.O.NORMAL),
                                      setSelected: R,
                                      reactionType: i ? _.O.BURST : _.O.NORMAL,
                                      emoji: e.emoji,
                                      count: i ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, b.Z)(e.burst_colors, I, Z) : void 0
                                  },
                                  ''
                                      .concat(i ? 'burst-' : 'normal-')
                                      .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : '', ':')
                                      .concat(e.emoji.name)
                              );
                          })
                      }),
                (0, n.jsx)($, {
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
let ee = (e, t, i) => r().isEqual(e.emoji, t.emoji) && e.reactionType === i;
