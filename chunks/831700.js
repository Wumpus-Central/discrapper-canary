n.d(t, { Z: () => ei }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(846519),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    p = n(146773),
    h = n(888651),
    f = n(619915),
    g = n(117358),
    m = n(201895),
    b = n(718589),
    y = n(933557),
    _ = n(557135),
    v = n(873696),
    O = n(446226),
    j = n(305325),
    x = n(281956),
    C = n(66999),
    S = n(554747),
    P = n(378844),
    I = n(340541),
    N = n(335353),
    Z = n(896835),
    w = n(359110),
    E = n(155409),
    T = n(695346),
    A = n(447564),
    D = n(592125),
    R = n(430824),
    L = n(607744),
    k = n(496675),
    M = n(306680),
    G = n(9156),
    B = n(979651),
    U = n(934415),
    W = n(63063),
    V = n(98597),
    F = n(648501),
    H = n(473403),
    z = n(830993),
    Y = n(653577),
    q = n(207055),
    Q = n(981631),
    K = n(647086),
    J = n(388032),
    X = n(915887);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
class en extends V.ZP {
    componentWillUnmount() {
        this.activitiesHideTimeout.stop();
    }
    getVoiceStatesCount() {
        var e;
        let { voiceStates: t } = this.props;
        return null != (e = null == t ? void 0 : t.length) ? e : 0;
    }
    isFull() {
        let { channel: e } = this.props;
        return (0, U.rY)(e, B.Z, R.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return X.containerUserOver;
        if (null != t)
            if (e > t) return X.containerDragAfter;
            else return X.containerDragBefore;
        return X.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n } = this.props,
            i = null == (e = (0, v.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: l } = this.state;
        return (0, r.jsx)(Y.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: l
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(q.Z, {
            channel: e,
            collapsed: n,
            collapsedMax: 6,
            voiceStates: t,
            withGuildIcon: i,
            tabIndex: l,
            location: Q.Sbl.GUILD_CHANNEL_LIST
        });
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: X.channelInfo,
                  children: e
              });
    }
    renderHDSplashedIcon() {
        let { channel: e, locked: t } = this.props;
        return t || !e.isHDStreamSplashed
            ? null
            : (0, r.jsx)(c.ua7, {
                  text: J.NW.string(J.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: i, onFocus: l, onBlur: a } = t;
                      return (0, r.jsx)(c.P3F, {
                          className: o()(X.iconItem, X.alwaysShown),
                          onClick: () => {
                              (0, Z.X)('VoiceChannel') ? (0, A.k)(e, 'VoiceChannel') : window.open(W.Z.getArticleURL(Q.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': J.NW.string(J.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: i,
                          onFocus: l,
                          onBlur: a,
                          children: (0, r.jsx)(c.hh5, {
                              size: 'xs',
                              color: 'currentColor',
                              className: X.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: l, mentionCount: a, locked: s, sorting: u, isUserOver: d, connectChannelDropTarget: p, connectChannelDragSource: h, connectUserDropTarget: f, connectDragPreview: g, canReorderChannel: y, canMoveMembers: _, showTutorial: v, hasActiveEvent: O, embeddedApps: j, isSubscriptionGated: x, isFavoriteSuggestion: C, withGuildIcon: S } = this.props,
            { shouldShowActivities: P, shouldShowGuildVerificationPopout: Z } = this.state,
            w = (0, I.jW)({ location: 'voice_channel' }),
            T = this.getVoiceStatesCount(),
            A = (0, r.jsxs)('li', {
                ref: this.ref,
                className: o()(this.getModeClass(), { [X.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: [
                    (0, r.jsx)('div', {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        children: (0, r.jsx)(c.yRy, {
                            targetElementRef: this.channelItemRef,
                            position: 'right',
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: (P && !u && !d && !Z) || Z,
                            children: () =>
                                (0, r.jsx)(c.ua7, {
                                    text: this.getTooltipText(),
                                    children: (c) => {
                                        var { onClick: u, onContextMenu: d } = c,
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
                                            })(c, ['onClick', 'onContextMenu']);
                                        return (0, r.jsx)(N.Z, {
                                            channel: e,
                                            children: (0, r.jsxs)(
                                                H.ZP,
                                                et(
                                                    ee(
                                                        {
                                                            ref: this.channelItemRef,
                                                            className: X.iconVisibility,
                                                            iconClassName: o()({ [X.iconLive]: O }),
                                                            hasActiveEvent: O,
                                                            channel: e,
                                                            selected: !C && t,
                                                            connected: n,
                                                            unread: n ? i : void 0,
                                                            resolvedUnreadSetting: l,
                                                            mentionCount: a,
                                                            locked: s,
                                                            subtitle: this.renderSubtitle(),
                                                            onClick: () => {
                                                                this.handleClick(), null == u || u();
                                                            },
                                                            onContextMenu: (e) => {
                                                                this.handleContextMenu(e), null == d || d();
                                                            },
                                                            connectDragPreview: g,
                                                            isFavoriteSuggestion: C,
                                                            'aria-label': (0, m.ZP)({
                                                                channel: e,
                                                                unread: i,
                                                                mentionCount: a,
                                                                userCount: T,
                                                                embeddedActivitiesCount: j.length,
                                                                isSubscriptionGated: x
                                                            }),
                                                            'aria-describedby': (0, b.Z)({
                                                                channel: e,
                                                                embeddedApps: j
                                                            }),
                                                            withGuildIcon: S
                                                        },
                                                        p
                                                    ),
                                                    {
                                                        children: [
                                                            C &&
                                                                (0, r.jsxs)(r.Fragment, {
                                                                    children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
                                                                }),
                                                            !C &&
                                                                (0, r.jsxs)(r.Fragment, {
                                                                    children: [this.renderOpenChatButton(), this.renderInviteButton(), w ? this.renderOptionsButton({ onContextMenu: this.handleContextMenu }) : this.renderEditButton(), this.renderChannelInfo(), this.renderHDSplashedIcon()]
                                                                })
                                                        ]
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
            _ && (A = f(A)),
            y && (A = p(h(A))),
            v &&
                (A = (0, r.jsx)(E.Z, {
                    childRef: this.ref,
                    tutorialId: 'voice-conversations',
                    position: 'right',
                    offsetX: -20,
                    children: A
                })),
            A
        );
    }
    constructor(...e) {
        super(...e),
            $(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            $(this, 'ref', i.createRef()),
            $(this, 'channelItemRef', i.createRef()),
            $(this, 'activitiesHideTimeout', new s.V7()),
            $(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            $(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    _.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    });
            }),
            $(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = R.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                et(ee({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            $(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            $(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            $(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            $(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, x.n)(t) && (0, j.hk)(t), this.handleVoiceConnect();
            }),
            $(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, g.Z)({ channel: n }));
            }),
            $(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !i && !s) {
                    let n = T.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(z.Z, {
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
            $(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.ua7, {
                        text: J.NW.string(J.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: a, onBlur: s } = t;
                            return (0, r.jsx)(c.P3F, {
                                className: o()(X.iconItem, n ? X.alwaysShown : null),
                                onClick: () => {
                                    u.Z.updateChatOpen(e.id, !0), (0, w.Kh)(e.id);
                                },
                                'aria-label': J.NW.string(J.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: a,
                                onBlur: s,
                                children: (0, r.jsx)(c.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: X.actionIcon
                                })
                            });
                        }
                    });
            }),
            $(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? J.NW.string(J.t.rZfiNj) : null;
            });
    }
}
let er = (0, p.B)((0, h.Q)(en));
function ei(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([M.ZP], () => ({
            unread: M.ZP.hasUnread(n.id),
            mentionCount: M.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([G.ZP], () => G.ZP.resolveUnreadSetting(n)),
        p = (0, a.cj)([D.Z, L.Z, k.Z], () => {
            let e = D.Z.getChannel(n.parent_id),
                r = L.Z.getCheck(n.guild_id);
            return {
                canManageChannel: k.Z.can(Q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === K._ || (null != e ? k.Z.can(Q.Plq.MANAGE_CHANNELS, e) : k.Z.can(Q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: k.Z.can(Q.Plq.MOVE_MEMBERS, n),
                locked: !k.Z.can(Q.Plq.CONNECT, n),
                bypassLimit: k.Z.can(Q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        h = (0, a.e7)([B.Z], () => B.Z.hasVideo(n.id)),
        g = (0, f.ZP)(n),
        m = (0, y.ZP)(n),
        b = (0, S.qY)(n.id),
        { isSubscriptionGated: _, needSubscriptionToAccess: v } = (0, C.Z)(n.id),
        j = (0, O.Z)(),
        x = (0, a.e7)([G.ZP], () => G.ZP.isFavorite(t.id, n.id)),
        P = e.connected || (null == j ? void 0 : j.channelId) === n.id,
        I = (0, F.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: s,
            voiceStates: c,
            isSubscriptionGated: _,
            needSubscriptionToAccess: v,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        N = P && null == I;
    return (0, r.jsx)(
        er,
        et(
            ee(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: Q.IIU.PLAYING,
                    video: h,
                    hasActiveEvent: null != b,
                    isSubscriptionGated: _,
                    needSubscriptionToAccess: v
                },
                u,
                p,
                e
            ),
            {
                connected: P,
                isFavoriteSuggestion: l && !x,
                forceShowButtons: N,
                channelInfo: I,
                resolvedUnreadSetting: d
            }
        )
    );
}
