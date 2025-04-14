n.d(t, { Z: () => G }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(146773),
    p = n(595519),
    h = n(619915),
    f = n(201895),
    g = n(873696),
    m = n(66999),
    b = n(340541),
    _ = n(22082),
    y = n(665906),
    v = n(592125),
    O = n(430824),
    j = n(496675),
    C = n(306680),
    x = n(9156),
    S = n(594174),
    P = n(109446),
    I = n(98597),
    N = n(648501),
    Z = n(473403),
    E = n(304471),
    w = n(981631),
    T = n(647086),
    A = n(915887);
function D(e, t, n) {
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
function R(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
class k extends I.ZP {
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        clearTimeout(this.enterTimer), clearTimeout(this.exitTimer);
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: A.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: i, unread: l, hasActiveThreads: a, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: p, connectDragPreview: h, canReorderChannel: m, isSubscriptionGated: _, isFavoriteSuggestion: y, subtitle: v, forceTopLevelThread: O, embeddedApps: j, resolvedUnreadSetting: C, withGuildIcon: x, enableActivities: S } = this.props,
            P = (0, b.jW)({ location: 'text_channel' }),
            I = S && null != j && j.length > 0,
            N = (0, g.D)(v),
            E = (0, r.jsx)('li', {
                className: o()(this.getClassName(), {
                    [A.disabled]: this.isDisabled(),
                    [A.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || I ? this.handleMouseEnter : void 0,
                onMouseLeave: c || I ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(s.yRy, {
                    targetElementRef: this.channelItemRef,
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (I && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(Z.ZP, {
                            ref: this.channelItemRef,
                            className: A.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !y && n,
                            muted: i,
                            unread: l,
                            mentionCount: u,
                            hasActiveThreads: a,
                            subtitle: null == N ? void 0 : N.subtitle,
                            subtitleColor: null == N ? void 0 : N.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: m ? h : null,
                            isFavoriteSuggestion: y,
                            channelTypeOverride: O ? w.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: C,
                            withGuildIcon: x,
                            'aria-label': (0, f.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: u,
                                isSubscriptionGated: _
                            }),
                            children: [
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
                                    }),
                                !y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            this.renderChannelInfo(),
                                            P && this.renderOptionsButton({ onContextMenu: this.handleContextMenu }),
                                            !P &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [this.renderInviteButton(), this.renderEditButton()]
                                                })
                                        ]
                                    })
                            ]
                        })
                })
            });
        return m ? d(p(E)) : E;
    }
    constructor(...e) {
        super(...e),
            D(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            D(this, 'channelItemRef', i.createRef()),
            D(this, 'enterTimer', 0),
            D(this, 'exitTimer', 0),
            D(this, 'handleMouseEnter', () => {
                (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) &&
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            D(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            D(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            D(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            D(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            D(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : w.ME, e.id);
            }),
            D(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: i } = this.props,
                    { shouldShowActivities: l } = this.state;
                return null != i && i.length > 0 && l && !n
                    ? (0, r.jsx)(E.Z, {
                          onAction: this.handleActivitiesPopoutClose,
                          channel: t
                      })
                    : (0, r.jsx)(P.Z, L(R({}, e), { channel: this.props.channel }));
            }),
            D(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === w.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(R({}, n), {
                                    channel: t,
                                    selected: !0
                                })
                            );
                    });
                if (t.type === w.d4z.DM) {
                    let i = S.default.getUser(t.getRecipientId());
                    null != i &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    L(R({}, n), {
                                        user: i,
                                        channel: t,
                                        showModalItems: !1
                                    })
                                );
                        });
                    return;
                }
                let i = O.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(R({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            });
    }
}
let M = (0, d.B)(k);
function G(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: o, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.JQ)(t),
        d = (0, a.cj)([C.ZP], () => ({
            unread: C.ZP.hasUnread(t.id),
            ackMessageId: C.ZP.ackMessageId(t.id),
            isLowImportanceMention: C.ZP.getIsMentionLowImportance(t.id)
        })),
        f = (0, a.e7)([x.ZP], () => x.ZP.resolveUnreadSetting(t)),
        g = (0, a.cj)([v.Z, j.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return {
                canManageChannel: j.Z.can(w.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== i && (n.id === T._ || (null != e ? j.Z.can(w.Plq.MANAGE_CHANNELS, e) : j.Z.can(w.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        b = (0, a.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: O, isSubscriptionGated: P } = (0, m.Z)(t.id),
        I = (0, a.e7)([x.ZP], () => x.ZP.isFavorite(n.id, t.id)),
        Z = (0, a.e7)(
            [S.default],
            () => {
                let e = S.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        E = (0, p.NX)(t.id),
        A = (0, N.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: P,
            needSubscriptionToAccess: O,
            isNewChannel: b,
            muted: o,
            enableActivities: E,
            resolvedUnreadSetting: f
        }),
        D = (0, h.ZP)(t);
    return (0, r.jsx)(
        M,
        L(R({}, d, g, e), {
            hasActiveThreads: c,
            hasMoreActiveThreads: u,
            isSubscriptionGated: P,
            needSubscriptionToAccess: O,
            isNewChannel: b && e.canBeNewChannel,
            isFavoriteSuggestion: l && !I,
            canShowThreadPreviewForUser: Z,
            channelInfo: A,
            embeddedApps: D,
            resolvedUnreadSetting: f,
            hasChannelInfo: null != A,
            enableActivities: E
        })
    );
}
