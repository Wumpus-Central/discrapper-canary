n.d(t, { Z: () => er }), n(47120), n(411104);
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
    I = n(335353),
    N = n(896835),
    Z = n(359110),
    w = n(155409),
    E = n(695346),
    T = n(447564),
    A = n(592125),
    D = n(430824),
    R = n(607744),
    L = n(496675),
    k = n(306680),
    M = n(9156),
    G = n(979651),
    B = n(934415),
    U = n(63063),
    W = n(98597),
    V = n(648501),
    F = n(473403),
    H = n(830993),
    z = n(653577),
    Y = n(207055),
    q = n(981631),
    Q = n(647086),
    K = n(388032),
    J = n(915887);
function X(e, t, n) {
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
function $(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function ee(e, t) {
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
class et extends W.ZP {
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
        return (0, B.rY)(e, G.Z, D.Z);
    }
    getModeClass() {
        let { position: e, sortingPosition: t, isUserOver: n } = this.props;
        if (n) return J.containerUserOver;
        if (null != t)
            if (e > t) return J.containerDragAfter;
            else return J.containerDragBefore;
        return J.containerDefault;
    }
    renderSubtitle() {
        var e;
        let { channel: t, connected: n } = this.props,
            i = null == (e = (0, v.D)(this.props.subtitle)) ? void 0 : e.subtitle,
            { hovered: l } = this.state;
        return (0, r.jsx)(z.Z, {
            onClick: this.handleVoiceStatusClick,
            channel: t,
            connected: n,
            subtitle: i,
            hovered: l
        });
    }
    renderVoiceUsers() {
        let { channel: e, voiceStates: t, collapsed: n, withGuildIcon: i, tabIndex: l } = this.props;
        return (0, r.jsx)(Y.Z, {
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
            : (0, r.jsx)(c.ua7, {
                  text: K.NW.string(K.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: i, onFocus: l, onBlur: a } = t;
                      return (0, r.jsx)(c.P3F, {
                          className: o()(J.iconItem, J.alwaysShown),
                          onClick: () => {
                              (0, N.X)('VoiceChannel') ? (0, T.k)(e, 'VoiceChannel') : window.open(U.Z.getArticleURL(q.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': K.NW.string(K.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: i,
                          onFocus: l,
                          onBlur: a,
                          children: (0, r.jsx)(c.hh5, {
                              size: 'xs',
                              color: 'currentColor',
                              className: J.actionIcon
                          })
                      });
                  }
              });
    }
    render() {
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: l, mentionCount: a, locked: s, sorting: u, isUserOver: d, connectChannelDropTarget: p, connectChannelDragSource: h, connectUserDropTarget: f, connectDragPreview: g, canReorderChannel: y, canMoveMembers: _, showTutorial: v, hasActiveEvent: O, embeddedApps: j, isSubscriptionGated: x, isFavoriteSuggestion: C, withGuildIcon: S } = this.props,
            { shouldShowActivities: P, shouldShowGuildVerificationPopout: N } = this.state,
            Z = this.getVoiceStatesCount(),
            E = (0, r.jsxs)('li', {
                ref: this.ref,
                className: o()(this.getModeClass(), { [J.disabled]: this.isDisabled() }),
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
                            shouldShow: (P && !u && !d && !N) || N,
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
                                        return (0, r.jsx)(I.Z, {
                                            channel: e,
                                            children: (0, r.jsxs)(
                                                F.ZP,
                                                ee(
                                                    $(
                                                        {
                                                            ref: this.channelItemRef,
                                                            className: J.iconVisibility,
                                                            iconClassName: o()({ [J.iconLive]: O }),
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
                                                                userCount: Z,
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
                                                        children: [C && this.renderAcceptSuggestionButton(), C && this.renderRemoveSuggestionButton(), !C && this.renderOpenChatButton(), !C && this.renderInviteButton(), !C && this.renderEditButton(), !C && this.renderChannelInfo(), !C && this.renderHDSplashedIcon()]
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
            _ && (E = f(E)),
            y && (E = p(h(E))),
            v &&
                (E = (0, r.jsx)(w.Z, {
                    childRef: this.ref,
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
            X(this, 'state', {
                shouldShowActivities: !1,
                shouldShowGuildVerificationPopout: !1,
                hovered: !1
            }),
            X(this, 'ref', i.createRef()),
            X(this, 'channelItemRef', i.createRef()),
            X(this, 'activitiesHideTimeout', new s.V7()),
            X(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            X(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    _.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    });
            }),
            X(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = D.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, d.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                ee($({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }),
            X(this, 'handleMouseEnter', () => {
                this.activitiesHideTimeout.stop(),
                    this.setState({
                        shouldShowActivities: !0,
                        hovered: !0
                    });
            }),
            X(this, 'handleMouseLeave', () => {
                this.activitiesHideTimeout.start(100, () =>
                    this.setState({
                        shouldShowActivities: !1,
                        hovered: !1
                    })
                );
            }),
            X(this, 'closePopout', () => {
                this.activitiesHideTimeout.stop(), this.setState({ shouldShowActivities: !1 });
            }),
            X(this, 'handleClick', () => {
                let { channel: e } = this.props,
                    t = e.getGuildId();
                null != t && (0, x.n)(t) && (0, j.hk)(t), this.handleVoiceConnect();
            }),
            X(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, g.Z)({ channel: n }));
            }),
            X(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: a, shouldShowGuildVerificationPopout: s } = this.state;
                if (a && !n && !i && !s) {
                    let n = E.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(H.Z, {
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
            X(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.ua7, {
                        text: K.NW.string(K.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: a, onBlur: s } = t;
                            return (0, r.jsx)(c.P3F, {
                                className: o()(J.iconItem, n ? J.alwaysShown : null),
                                onClick: () => {
                                    u.Z.updateChatOpen(e.id, !0), (0, Z.Kh)(e.id);
                                },
                                'aria-label': K.NW.string(K.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: a,
                                onBlur: s,
                                children: (0, r.jsx)(c.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: J.actionIcon
                                })
                            });
                        }
                    });
            }),
            X(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? K.NW.string(K.t.rZfiNj) : null;
            });
    }
}
let en = (0, p.B)((0, h.Q)(et));
function er(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: o, collapsed: s, voiceStates: c } = e,
        u = (0, a.cj)([k.ZP], () => ({
            unread: k.ZP.hasUnread(n.id),
            mentionCount: k.ZP.getMentionCount(n.id)
        })),
        d = (0, a.e7)([M.ZP], () => M.ZP.resolveUnreadSetting(n)),
        p = (0, a.cj)([A.Z, R.Z, L.Z], () => {
            let e = A.Z.getChannel(n.parent_id),
                r = R.Z.getCheck(n.guild_id);
            return {
                canManageChannel: L.Z.can(q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === Q._ || (null != e ? L.Z.can(q.Plq.MANAGE_CHANNELS, e) : L.Z.can(q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: L.Z.can(q.Plq.MOVE_MEMBERS, n),
                locked: !L.Z.can(q.Plq.CONNECT, n),
                bypassLimit: L.Z.can(q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        h = (0, a.e7)([G.Z], () => G.Z.hasVideo(n.id)),
        g = (0, f.ZP)(n),
        m = (0, y.ZP)(n),
        b = (0, S.qY)(n.id),
        { isSubscriptionGated: _, needSubscriptionToAccess: v } = (0, C.Z)(n.id),
        j = (0, O.Z)(),
        x = (0, a.e7)([M.ZP], () => M.ZP.isFavorite(t.id, n.id)),
        P = e.connected || (null == j ? void 0 : j.channelId) === n.id,
        I = (0, V.Z)({
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
        en,
        ee(
            $(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: q.IIU.PLAYING,
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
