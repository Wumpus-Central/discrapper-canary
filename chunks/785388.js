n.r(t),
    n.d(t, {
        default: function () {
            return Q;
        }
    }),
    n(47120),
    n(653041),
    n(177593),
    n(411104);
var i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(392711),
    r = n.n(l),
    c = n(866442),
    d = n(442837),
    u = n(780384),
    h = n(481060),
    m = n(596454),
    p = n(129861),
    f = n(700582),
    g = n(607070),
    v = n(600164),
    b = n(633302),
    T = n(712057),
    x = n(660189),
    _ = n(372900),
    j = n(566006),
    C = n(620652),
    S = n(815605),
    E = n(222677),
    I = n(995774),
    R = n(665906),
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
    W = n(232186);
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
    return null == e.id ? b.ZP.convertSurrogateToName(e.name) : ':'.concat(e.name, ':');
}
let J = (e) => {
    let { emoji: t, channelId: n, messageId: a } = e,
        [l, r] = o.useState(!0),
        [c, d] = o.useState([]),
        u = o.useMemo(() => {
            if (null == c || c.length < 1) return;
            let e = (0, S.Zn)(t, c[0], n, {
                emojiSize: C.M.LARGE,
                messageId: a
            });
            return (0, i.jsx)(C.Z, {
                className: H.__invalid_effect,
                effect: e,
                emojiSize: C.M.LARGE,
                onComplete: () => r(!1)
            });
        }, [c, t, n, a]);
    return (
        o.useEffect(() => {
            let e = !1;
            return (
                r(!0),
                !(async function () {
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
                    children: K(t)
                })
            ]
        })
    );
};
class X extends o.PureComponent {
    render() {
        let { emoji: e, count: t, isSelected: n, setSelected: o, reactionType: a, colors: l } = this.props,
            r = K(e),
            d = (function (e, t, n, o) {
                let a =
                    null == e.id
                        ? U.ZP.getURL(e.name)
                        : k.ZP.getEmojiURL({
                              id: e.id,
                              animated: e.animated,
                              size: 24
                          });
                return null != a && '' !== a
                    ? (0, i.jsx)('img', {
                          className: n,
                          src: a,
                          alt: e.name
                      })
                    : (0, i.jsx)('span', {
                          className: o,
                          children: e.name
                      });
            })(e, 24, H.emoji, s()(H.emoji, H.emojiText)),
            u = a === j.O.BURST,
            m = u ? G.t.VmiNjY : G.t.cNfs19,
            p = G.intl.formatToPlainString(m, {
                name: r,
                n: t
            }),
            f = {},
            g = {};
        if (u) {
            let { backgroundColor: e = '', opacity: t = 1, accentColor: i = '' } = null != l ? l : {};
            if (((g.color = i), n)) {
                var v;
                f.background = null !== (v = (0, c.wK)(e, t)) && void 0 !== v ? v : '';
            }
        }
        return (0, i.jsx)(h.Tooltip, {
            position: 'left',
            text: r,
            children: (l) => {
                let { onMouseEnter: r, onMouseLeave: c } = l;
                return (0, i.jsxs)(h.Clickable, {
                    className: s()({
                        [H.reactionDefault]: !n,
                        [H.reactionSelected]: n
                    }),
                    'aria-label': p,
                    onClick: () =>
                        o({
                            emoji: e,
                            reactionType: a
                        }),
                    onMouseEnter: r,
                    onMouseLeave: c,
                    style: f,
                    children: [
                        d,
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
function Y(e) {
    let { emoji: t, user: n, message: o, channel: a, guildId: s, reactionType: l, onRemoveReactor: r, disableManage: c = !1 } = e,
        u = (0, d.e7)([Z.default], () => Z.default.getId()),
        m = (0, d.e7)([L.default], () => L.default.getUser(n.id), [n]),
        g = (0, R.$R)(a),
        b = (0, d.e7)([P.Z], () => P.Z.can(V.Plq.MANAGE_MESSAGES, a) && g) || u === n.id,
        T = (0, d.e7)([A.ZP, y.Z, w.Z], () => B.ZP.getName(s, a.id, n));
    return (0, i.jsxs)(v.Z, {
        className: H.reactorDefault,
        onContextMenu: (e) => (0, D.Pv)(e, n, a),
        align: v.Z.Align.CENTER,
        children: [
            (0, i.jsx)(v.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: W.marginReset,
                children: (0, i.jsx)(f.Z, {
                    user: null != m ? m : n,
                    size: h.AvatarSizes.SIZE_24
                })
            }),
            (0, i.jsx)(v.Z.Child, {
                children: (0, i.jsxs)(h.Text, {
                    tag: 'strong',
                    variant: 'text-md/normal',
                    className: H.name,
                    children: [
                        null != T &&
                            '' !== T &&
                            (0, i.jsx)('span', {
                                className: n.isPomelo() ? '' : H.nickname,
                                children: T
                            }),
                        (0, i.jsx)(p.Z, {
                            user: n,
                            className: null != T && '' !== T ? H.tagFaded : null,
                            usernameClass: H.username,
                            discriminatorClass: H.discriminator,
                            forceUsername: !0
                        })
                    ]
                })
            }),
            !c &&
                b &&
                (0, i.jsx)(h.Clickable, {
                    onClick: function () {
                        E.WO({
                            channelId: a.id,
                            messageId: o.id,
                            emoji: t,
                            location: E.TW.MESSAGE,
                            userId: n.id,
                            options: { burst: l === j.O.BURST }
                        }),
                            null == r || r();
                    },
                    children: (0, i.jsx)(h.XSmallIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: H.remove
                    })
                })
        ]
    });
}
class q extends o.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (!r().isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) &&
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
            E.U0({
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
        let { hasMore: e, reactors: t, reaction: n, message: o, reactionType: a } = this.props,
            s = [];
        return (
            0 === t.length && this.state.loadingMore ? s.push(length) : (s.push(t.length), e && s.push(1)),
            (0, i.jsxs)('div', {
                className: H.reactorsContainer,
                children: [
                    a === j.O.BURST &&
                        (0, i.jsx)(J, {
                            emoji: n.emoji,
                            channelId: o.getChannelId(),
                            messageId: o.id
                        }),
                    (0, i.jsx)(h.List, {
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
                if (1 === e) return 0 === t ? 44 : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return 440;
                    if (null != this.props.reactors[t]) return 44;
                }
                return 0;
            }),
            z(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { message: o, guildId: a, channel: s, reaction: l, reactors: r, reactionType: c, disableManage: d } = this.props,
                    u = r[n];
                if (1 === t) return 0 === n ? (0, i.jsx)(h.Spinner, { className: H.spinnerMore }, 'hasMore') : null;
                return 0 === r.length && this.state.loadingMore
                    ? (0, i.jsx)(h.Spinner, { className: H.spinner }, 'loadingMore')
                    : null != u &&
                          (0, i.jsx)(
                              Y,
                              {
                                  message: o,
                                  emoji: l.emoji,
                                  guildId: a,
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
        o = O.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
    if (null == o)
        return {
            reactors: [],
            hasMore: !1
        };
    let a = Object.values(o),
        s = (i === j.O.BURST ? n.burst_count : n.count) > a.length;
    return {
        reactors: a,
        hasMore: s
    };
})(q);
function Q(e) {
    var t;
    let { message: n, selectedReaction: a, disableManage: s = !1, disableTabs: l = !1, onClose: r, transitionState: c, 'aria-label': m = G.intl.string(G.t.gHp0Cw) } = e,
        p = (0, d.e7)([y.Z], () => y.Z.getChannel(n.getChannelId())),
        f = null == p ? void 0 : p.getGuildId(),
        v = (0, d.e7)(
            [M.Z, x.Z],
            () => {
                var e, t;
                let i = null !== (t = M.Z.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = x.Z.getMessage(F.default.castMessageIdAsChannelId(n.id))) || void 0 === e ? void 0 : e.firstMessage;
                return null != i ? i.reactions : [];
            },
            [n]
        );
    let b =
            ((t = v),
            o.useMemo(() => {
                let e = [];
                return (
                    t.forEach((t) => {
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
            }, [t])),
        C = b[0],
        [S, E] = (function (e, t, n) {
            let [i, a] = o.useState(null != e ? e : t);
            return (
                o.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? j.O.VOTE : e.burst_count > 0 ? j.O.BURST : j.O.NORMAL;
                                return (0, I.ir)(e.emoji, i.emoji) && t === i.reactionType;
                            }) &&
                        a(t);
                }, [i, a, n, t]),
                [i, a]
            );
        })(
            a,
            null != C
                ? {
                      emoji: C.emoji,
                      reactionType: C.burst_count > 0 ? j.O.BURST : j.O.NORMAL
                  }
                : null,
            v
        ),
        R = o.useMemo(() => {
            var e;
            return null == S ? null : null !== (e = v.find((e) => (0, I.ir)(e.emoji, S.emoji))) && void 0 !== e ? e : null;
        }, [v, S]),
        Z = (0, d.e7)([g.Z], () => g.Z.saturation),
        A = (0, d.e7)([N.Z], () => (0, u.wj)(N.Z.theme));
    if (
        (o.useEffect(() => {
            (0 === v.length || (null == S && null == R)) && setImmediate(r);
        }, [r, v.length, R, S]),
        null == S || null == R)
    )
        return (0, i.jsx)(h.Spinner, {});
    if (null == p) throw Error('MessageReactions.render: Message does not have a channelId');
    return (0, i.jsx)(_.Z.Provider, {
        value: null != f ? f : void 0,
        children: (0, i.jsxs)(h.ModalRoot, {
            'aria-label': m,
            transitionState: c,
            size: h.ModalSize.DYNAMIC,
            className: H.container,
            children: [
                l
                    ? null
                    : (0, i.jsx)(h.Scroller, {
                          className: H.scroller,
                          fade: !0,
                          children: b.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, i.jsx)(
                                  X,
                                  {
                                      isSelected: ee(S, e, n ? j.O.BURST : j.O.NORMAL),
                                      setSelected: E,
                                      reactionType: n ? j.O.BURST : j.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, T.Z)(e.burst_colors, Z, A) : void 0
                                  },
                                  ''
                                      .concat(n ? 'burst-' : 'normal-')
                                      .concat(null !== (t = e.emoji.id) && void 0 !== t ? t : '', ':')
                                      .concat(e.emoji.name)
                              );
                          })
                      }),
                (0, i.jsx)($, {
                    message: n,
                    reaction: R,
                    guildId: f,
                    channel: p,
                    reactionType: S.reactionType,
                    disableManage: s
                })
            ]
        })
    });
}
let ee = (e, t, n) => r().isEqual(e.emoji, t.emoji) && e.reactionType === n;
