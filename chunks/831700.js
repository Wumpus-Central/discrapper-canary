n.d(t, { Z: () => ei }), n(388685), n(415506);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(846519),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    h = n(146773),
    p = n(888651),
    f = n(619915),
    g = n(117358),
    m = n(201895),
    b = n(718589),
    _ = n(933557),
    y = n(557135),
    O = n(873696),
    v = n(446226),
    C = n(305325),
    S = n(281956),
    j = n(66999),
    E = n(554747),
    x = n(378844),
    P = n(340541),
    I = n(335353),
    w = n(896835),
    N = n(359110),
    Z = n(155409),
    T = n(695346),
    A = n(447564),
    R = n(592125),
    D = n(430824),
    L = n(607744),
    k = n(496675),
    M = n(306680),
    U = n(9156),
    G = n(979651),
    B = n(934415),
    V = n(63063),
    H = n(98597),
    F = n(648501),
    z = n(473403),
    W = n(830993),
    Y = n(653577),
    K = n(207055),
    q = n(981631),
    Q = n(647086),
    X = n(388032),
    J = n(915887);
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
class en extends H.ZP {
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
            i = null == (e = (0, O.D)(this.props.subtitle)) ? void 0 : e.subtitle,
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
        return (0, r.jsx)(K.Z, {
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
                  text: X.intl.string(X.t.gpF6QU),
                  children: (t) => {
                      let { onMouseEnter: n, onMouseLeave: i, onFocus: l, onBlur: s } = t;
                      return (0, r.jsx)(c.P3F, {
                          className: o()(J.iconItem, J.alwaysShown),
                          onClick: () => {
                              (0, w.X)('VoiceChannel') ? (0, A.k)(e, 'VoiceChannel') : window.open(V.Z.getArticleURL(q.BhN.HD_STREAMING_POTION), '_blank');
                          },
                          'aria-label': X.intl.string(X.t.gpF6QU),
                          onMouseEnter: n,
                          onMouseLeave: i,
                          onFocus: l,
                          onBlur: s,
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
        let { channel: e, selected: t, connected: n, unread: i, resolvedUnreadSetting: l, mentionCount: s, locked: a, sorting: u, isUserOver: d, connectChannelDropTarget: h, connectChannelDragSource: p, connectUserDropTarget: f, connectDragPreview: g, canReorderChannel: _, canMoveMembers: y, showTutorial: O, hasActiveEvent: v, embeddedApps: C, isSubscriptionGated: S, isFavoriteSuggestion: j, withGuildIcon: E } = this.props,
            { shouldShowActivities: x, shouldShowGuildVerificationPopout: w } = this.state,
            N = (0, P.jW)({ location: 'voice_channel' }).entrypoints,
            T = this.getVoiceStatesCount(),
            A = (0, r.jsxs)('li', {
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
                            shouldShow: (x && !u && !d && !w) || w,
                            children: () =>
                                (0, r.jsx)(c.ua7, {
                                    text: this.getTooltipText(),
                                    children: (c) => {
                                        var { onClick: u, onContextMenu: d } = c,
                                            h = (function (e, t) {
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
                                                z.ZP,
                                                et(
                                                    ee(
                                                        {
                                                            ref: this.channelItemRef,
                                                            className: J.iconVisibility,
                                                            iconClassName: o()({ [J.iconLive]: v }),
                                                            hasActiveEvent: v,
                                                            channel: e,
                                                            selected: !j && t,
                                                            connected: n,
                                                            unread: n ? i : void 0,
                                                            resolvedUnreadSetting: l,
                                                            mentionCount: s,
                                                            locked: a,
                                                            subtitle: this.renderSubtitle(),
                                                            onClick: () => {
                                                                this.handleClick(), null == u || u();
                                                            },
                                                            onContextMenu: (e) => {
                                                                this.handleContextMenu(e), null == d || d();
                                                            },
                                                            connectDragPreview: g,
                                                            isFavoriteSuggestion: j,
                                                            'aria-label': (0, m.ZP)({
                                                                channel: e,
                                                                unread: i,
                                                                mentionCount: s,
                                                                userCount: T,
                                                                embeddedActivitiesCount: C.length,
                                                                isSubscriptionGated: S
                                                            }),
                                                            'aria-describedby': (0, b.Z)({
                                                                channel: e,
                                                                embeddedApps: C
                                                            }),
                                                            withGuildIcon: E
                                                        },
                                                        h
                                                    ),
                                                    {
                                                        children: [
                                                            j &&
                                                                (0, r.jsxs)(r.Fragment, {
                                                                    children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
                                                                }),
                                                            !j &&
                                                                (0, r.jsxs)(r.Fragment, {
                                                                    children: [this.renderOpenChatButton(), this.renderInviteButton(), N ? this.renderOptionsButton({ onContextMenu: this.handleContextMenu }) : this.renderEditButton(), this.renderChannelInfo(), this.renderHDSplashedIcon()]
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
            y && (A = f(A)),
            _ && (A = h(p(A))),
            O &&
                (A = (0, r.jsx)(Z.Z, {
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
            $(this, 'activitiesHideTimeout', new a.V7()),
            $(this, 'closeGuildVerificationPopout', () => {
                this.setState({ shouldShowGuildVerificationPopout: !1 });
            }),
            $(this, 'handleVoiceConnect', () => {
                let { locked: e, connected: t, channel: n, unverifiedAccount: r, needSubscriptionToAccess: i } = this.props;
                r && this.setState({ shouldShowGuildVerificationPopout: !0 }),
                    y.Z.handleVoiceConnect({
                        channel: n,
                        connected: t,
                        needSubscriptionToAccess: i,
                        locked: e
                    });
            }),
            $(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = D.Z.getGuild(t.getGuildId());
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
                null != t && (0, S.n)(t) && (0, C.hk)(t), this.handleVoiceConnect();
            }),
            $(this, 'handleVoiceStatusClick', (e) => {
                let { connected: t, channel: n } = this.props;
                t && (e.stopPropagation(), (0, g.Z)({ channel: n }));
            }),
            $(this, 'renderPopout', () => {
                let { channel: e, voiceStates: t, sorting: n, isUserOver: i, selected: l, guild: o } = this.props,
                    { shouldShowActivities: s, shouldShowGuildVerificationPopout: a } = this.state;
                if (s && !n && !i && !a) {
                    let n = T.SE.getSetting().includes(o.id);
                    return (0, r.jsx)(W.Z, {
                        onAction: this.closePopout,
                        guild: o,
                        channel: e,
                        voiceStates: t,
                        isChannelSelected: l,
                        shouldShowSettingNudge: n
                    });
                }
                if (a)
                    return (0, r.jsx)(x.Z, {
                        type: x.R.VOICE,
                        guildId: e.guild_id,
                        closePopout: this.closeGuildVerificationPopout
                    });
                throw Error('VoiceChannel.renderPopout: There must always be something to render');
            }),
            $(this, 'renderOpenChatButton', () => {
                let { channel: e, locked: t, forceShowButtons: n } = this.props;
                if (!t)
                    return (0, r.jsx)(c.ua7, {
                        text: X.intl.string(X.t.ZXxLQk),
                        children: (t) => {
                            let { onMouseEnter: i, onMouseLeave: l, onFocus: s, onBlur: a } = t;
                            return (0, r.jsx)(c.P3F, {
                                className: o()(J.iconItem, n ? J.alwaysShown : null),
                                onClick: () => {
                                    u.Z.updateChatOpen(e.id, !0), (0, N.Kh)(e.id);
                                },
                                'aria-label': X.intl.string(X.t.ZXxLQk),
                                onMouseEnter: i,
                                onMouseLeave: l,
                                onFocus: s,
                                onBlur: a,
                                children: (0, r.jsx)(c.kBi, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: J.actionIcon
                                })
                            });
                        }
                    });
            }),
            $(this, 'getTooltipText', () => {
                let { connected: e } = this.props;
                return this.isFull() && !e ? X.intl.string(X.t.rZfiNj) : null;
            });
    }
}
let er = (0, h.B)((0, p.Q)(en));
function ei(e) {
    let { guild: t, channel: n, disableSorting: i, isFavoriteCategory: l, selected: o, collapsed: a, voiceStates: c } = e,
        u = (0, s.cj)([M.ZP], () => ({
            unread: M.ZP.hasUnread(n.id),
            mentionCount: M.ZP.getMentionCount(n.id)
        })),
        d = (0, s.e7)([U.ZP], () => U.ZP.resolveUnreadSetting(n)),
        h = (0, s.cj)([R.Z, L.Z, k.Z], () => {
            let e = R.Z.getChannel(n.parent_id),
                r = L.Z.getCheck(n.guild_id);
            return {
                canManageChannel: k.Z.can(q.Plq.MANAGE_CHANNELS, n),
                canReorderChannel: !0 !== i && (t.id === Q._ || (null != e ? k.Z.can(q.Plq.MANAGE_CHANNELS, e) : k.Z.can(q.Plq.MANAGE_CHANNELS, t))),
                canMoveMembers: k.Z.can(q.Plq.MOVE_MEMBERS, n),
                locked: !k.Z.can(q.Plq.CONNECT, n),
                bypassLimit: k.Z.can(q.Plq.MOVE_MEMBERS, n),
                unverifiedAccount: !r.canChat
            };
        }),
        p = (0, s.e7)([G.Z], () => G.Z.hasVideo(n.id)),
        g = (0, f.ZP)(n),
        m = (0, _.ZP)(n),
        b = (0, E.qY)(n.id),
        { isSubscriptionGated: y, needSubscriptionToAccess: O } = (0, j.Z)(n.id),
        C = (0, v.Z)(),
        S = (0, s.e7)([U.ZP], () => U.ZP.isFavorite(t.id, n.id)),
        x = e.connected || (null == C ? void 0 : C.channelId) === n.id,
        P = (0, F.Z)({
            channel: n,
            isChannelSelected: o,
            isChannelCollapsed: a,
            voiceStates: c,
            isSubscriptionGated: y,
            needSubscriptionToAccess: O,
            enableConnectedUserLimit: !0,
            enableActivities: !0
        }),
        I = x && null == P;
    return (0, r.jsx)(
        er,
        et(
            ee(
                {
                    channelName: m,
                    embeddedApps: g,
                    embeddedActivityType: q.IIU.PLAYING,
                    video: p,
                    hasActiveEvent: null != b,
                    isSubscriptionGated: y,
                    needSubscriptionToAccess: O
                },
                u,
                h,
                e
            ),
            {
                connected: x,
                isFavoriteSuggestion: l && !S,
                forceShowButtons: I,
                channelInfo: P,
                resolvedUnreadSetting: d
            }
        )
    );
}
