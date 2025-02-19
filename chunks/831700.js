n.d(t, { Z: () => en }), n(47120), n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(846519),
    s = n(481060),
    c = n(475179),
    u = n(239091),
    d = n(146773),
    p = n(888651),
    h = n(619915),
    f = n(339340),
    g = n(201895),
    m = n(718589),
    b = n(933557),
    v = n(557135),
    y = n(873696),
    _ = n(446226),
    O = n(305325),
    j = n(281956),
    C = n(66999),
    x = n(554747),
    P = n(378844),
    S = n(335353),
    I = n(896835),
    N = n(359110),
    Z = n(155409),
    w = n(695346),
    E = n(447564),
    T = n(592125),
    A = n(430824),
    D = n(607744),
    R = n(496675),
    L = n(306680),
    M = n(9156),
    k = n(979651),
    G = n(934415),
    B = n(63063),
    U = n(98597),
    W = n(648501),
    V = n(473403),
    F = n(830993),
    H = n(653577),
    z = n(207055),
    q = n(981631),
    Y = n(647086),
    Q = n(388032),
    J = n(436804);
function K(e, t, n) {
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
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class ee extends U.ZP {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, G.rY)(e, k.Z, A.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        return n ? J.containerUserOver : null != t ? (e > t ? J.containerDragAfter : J.containerDragBefore) : J.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n } = this.props,
            i = null === (e = (0, y.D)(this.props.subtitle)) || void 0 === e ? void 0 : e.subtitle,
            { hovered: l } = this.state;
        return (0, r.jsx)(H.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: l
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(z.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: q.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: J.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, r.jsx)(s.ua7, {
                  text: Q.NW.string(Q.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: i, onFocus: o, onBlur: a } = t;
                      return (0, r.jsx)(s.P3F, {
                          className: l()(J.iconItem, J.alwaysShown),
                          onClick: () => {
                              (0, I.X)('VoiceChannel') ? (0, E.k)(e, 'VoiceChannel') : window.open(B.Z.getArticleURL(q.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': Q.NW.string(Q.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: i,
                          onFocus: o,
                          onBlur: a,
                          children: (0, r.jsx)(s.hh5, {
                              size: 'xs',
                              color: 'currentColor',
                              className: J.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: o, mentionCount: a, locked: c, sorting: u, isUserOver: d, connectChannelDropTarget: p, connectChannelDragSource: h, connectUserDropTarget: f, connectDragPreview: b, canReorderChannel: v, canMoveMembers: y, showTutorial: _, hasActiveEvent: O, embeddedApps: j, isSubscriptionGated: C, isFavoriteSuggestion: x, withGuildIcon: P } = this.props,
            { shouldShowActivities: I, shouldShowGuildVerificationPopout: N } = this.state,
            w = this.getVoiceStatesCount(),
            E = (0, r.jsxs)('li', {
                className: l()(this.getModeClass(), { [J.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, r.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(s.yRy, {
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (I && !u && !d && !N) || N,
                            children: () =>
                                (0, r.jsx)(s.ua7, {
                                    text: this.getTooltipText(),
                                    children: (s) => {
                                        var { onClick: u, onContextMenu: d } = s,
                                            p = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = (function (e, t) {
                                                        if (null == e) return {};
                                                        var n,
                                                            r,
                                                            i = {},
                                                            l = Object.keys(e);
                                                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                        return i;
                                                    })(e, t);
                                                if (Object.getOwnPropertySymbols) {
                                                    var l = Object.getOwnPropertySymbols(e);
                                                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                }
                                                return i;
                                            })(s, ['onClick', 'onContextMenu']);
                                        return (0, r.jsx)(S.Z, {
                                            channel: e,
                                            children: (0, r.jsxs)(
                                                V.Z,
                                                $(
                                                    X(
                                                        {
                                                            className: J.iconVisibility,
                                                            iconClassName: l()({ [J.iconLive]: O }),
                                                            hasActiveEvent: O,
                                                            channel: e,
                                                            selected: !x && t,
                                                            connected: n,
                                                            unread: n ? i : void 0,
                                                            resolvedUnreadSetting: o,
                                                            mentionCount: a,
                                                            locked: c,
                                                            subtitle: this.renderSubtitle(),
                                                            onClick: () => {
                                                                this.handleClick(), null == u || u();
                                                            },
                                                            onContextMenu: (e) => {
                                                                this.handleContextMenu(e), null == d || d();
                                                            },
                                                            connectDragPreview: b,
                                                            isFavoriteSuggestion: x,
                                                            'aria-label': (0, g.ZP)({
                                                                channel: e,
                                                                unread: i,
                                                                mentionCount: a,
                                                                userCount: w,
                                                                embeddedActivitiesCount: j.length,
                                                                isSubscriptionGated: C
                                                            }),
                                                            'aria-describedby': (0, m.Z)({
                                                                channel: e,
                                                                embeddedApps: j
                                                            }),
                                                            withGuildIcon: P
                                                        },
                                                        p
                                                    ),
                                                    {
                                                        children: [x && this.renderAcceptSuggestionButton(), x && this.renderRemoveSuggestionButton(), !x && this.renderOpenChatButton(), !x && this.renderInviteButton(), !x && this.renderEditButton(), !x && this.renderChannelInfo(), !x && this.renderHDSplashedIcon()]
                                                    }
                                                )
                                            )
                                        });
                                    }
                                })
                        })
                    }),
                    this.renderVoiceUsers()
                ]
            });
        return (
            y && (E = f(E)),
            v && (E = p(h(E))),
            _ &&
                (E = (0, r.jsx)(Z.Z, {
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: E
                })),
            E
        );
    }
    constructor(...e) {
        super(...e),
            K(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            K(this, 'activitiesHideTimeout', new a.V7()),
            K(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            K(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    v.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    });
            }),
            K(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = A.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                $(X({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            K(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            K(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            K(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            K(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, j.n)(t) && (0, O.hk)(t), this.handleVoiceConnect();
            }),
            K(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: i } = this.props;
                t &&
                    (e.stopPropagation(),
                    (0, s.ZDy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                            return (t) => (0, r.jsx)(e, X({ channel: i }, t));
                        },
                        { modalKey: f.a }
                    ));
            }),
            K(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !i && !s) {
                    let n = w.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(F.Z, {
                        onAction: this.closePopout,
                        guild: o,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: l,
                        shouldShowSettingNudge: n
                    });
                }
                if (s)
                    return (0, r.jsx)(P.Z, {
                        type: P.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            K(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(s.ua7, {
                        text: Q.NW.string(Q.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: o, onFocus: a, onBlur: u } = t;
                            return (0, r.jsx)(s.P3F, {
                                className: l()(J.iconItem, n ? J.alwaysShown : null),
                                onClick: () => {
                                    c.Z.updateChatOpen(e.id, !0), (0, N.Kh)(e.id);
                                },
                                'aria-label': Q.NW.string(Q.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: o,
                                onFocus: a,
                                onBlur: u,
                                children: (0, r.jsx)(s.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: J.actionIcon
                                })
                            });
                        }
                    });
            }),
            K(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? Q.NW.string(Q.t.rZfiNj) : null;
            });
    }
}
let et = (0, d.B)((0, p.Q)(ee));
function en(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: a, collapsed: s, voiceStates: c } = e,
        u = (0, o.cj)([L.ZP], () => ({
            unread: L.ZP.hasUnread(n.id),
            mentionCount: L.ZP.getMentionCount(n.id)
        })),
        d = (0, o.e7)([M.ZP], () => M.ZP.resolveUnreadSetting(n)),
        p = (0, o.cj)([T.Z, D.Z, R.Z], () => {
            let e = T.Z.getChannel(n.parent_id),
                r = D.Z.getCheck(n.guild_id);
            return {
                canManageChannel: R.Z.can(q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === Y._ || (null != e ? R.Z.can(q.Plq.MANAGE_CHANNELS, e) : R.Z.can(q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: R.Z.can(q.Plq.MOVE_MEMBERS, n),
                locked: !R.Z.can(q.Plq.CONNECT, n),
                bypassLimit: R.Z.can(q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        f = (0, o.e7)([k.Z], () => k.Z.hasVideo(n.id)),
        g = (0, h.ZP)(n),
        m = (0, b.ZP)(n),
        v = (0, x.qY)(n.id),
        { isSubscriptionGated: y, needSubscriptionToAccess: O } = (0, C.Z)(n.id),
        j = (0, _.Z)(),
        P = (0, o.e7)([M.ZP], () => M.ZP.isFavorite(t.id, n.id)),
        S = e.connected || (null == j ? void 0 : j.channelId) === n.id,
        I = (0, W.Z)({
            channel: n,
            isChannelSelected: a,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: y,
            needSubscriptionToAccess: O,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        N = S && null == I;
    return (0, r.jsx)(
        et,
        $(
            X(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: q.IIU.PLAYING,
                    video: f,
                    hasActiveEvent: null != v,
                    isSubscriptionGated: y,
                    needSubscriptionToAccess: O
                },
                u,
                p,
                e
            ),
            {
                connected: S,
                isFavoriteSuggestion: l && !P,
                forceShowButtons: N,
                channelInfo: I,
                resolvedUnreadSetting: d
            }
        )
    );
}
