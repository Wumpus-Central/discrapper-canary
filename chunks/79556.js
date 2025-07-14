(n.d(t, { Z: () => G }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(146773),
    h = n(595519),
    p = n(619915),
    f = n(622822),
    g = n(201895),
    m = n(873696),
    b = n(66999),
    _ = n(340541),
    O = n(22082),
    y = n(665906),
    v = n(592125),
    C = n(430824),
    j = n(496675),
    E = n(306680),
    S = n(9156),
    x = n(594174),
    I = n(109446),
    P = n(98597),
    N = n(648501),
    w = n(473403),
    Z = n(304471),
    T = n(981631),
    A = n(647086),
    R = n(915887);
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
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
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
class k extends P.ZP {
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        (clearTimeout(this.enterTimer), clearTimeout(this.exitTimer));
    }
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: R.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: i, unread: l, hasActiveThreads: s, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: h, connectDragPreview: p, canReorderChannel: f, isSubscriptionGated: b, isFavoriteSuggestion: O, subtitle: y, forceTopLevelThread: v, embeddedApps: C, resolvedUnreadSetting: j, withGuildIcon: E, enableActivities: S } = this.props,
            x = (0, _.jW)({ location: 'text_channel' }).entrypoints,
            I = S && null != C && C.length > 0,
            P = (0, m.D)(y),
            N = (0, r.jsx)('li', {
                className: o()(this.getClassName(), {
                    [R.disabled]: this.isDisabled(),
                    [R.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || I ? this.handleMouseEnter : void 0,
                onMouseLeave: c || I ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(a.yRy, {
                    targetElementRef: this.channelItemRef,
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (I && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(w.ZP, {
                            ref: this.channelItemRef,
                            className: R.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !O && n,
                            muted: i,
                            unread: l,
                            mentionCount: u,
                            hasActiveThreads: s,
                            subtitle: null == P ? void 0 : P.subtitle,
                            subtitleColor: null == P ? void 0 : P.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: f ? p : null,
                            isFavoriteSuggestion: O,
                            channelTypeOverride: v ? T.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: j,
                            withGuildIcon: E,
                            'aria-label': (0, g.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: u,
                                isSubscriptionGated: b
                            }),
                            children: [
                                O &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [this.renderAcceptSuggestionButton(), this.renderRemoveSuggestionButton()]
                                    }),
                                !O &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            this.renderChannelInfo(),
                                            x && this.renderOptionsButton({ onContextMenu: this.handleContextMenu }),
                                            !x &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [this.renderInviteButton(), this.renderEditButton()]
                                                })
                                        ]
                                    })
                            ]
                        })
                })
            });
        return f ? d(h(N)) : N;
    }
    constructor(...e) {
        (super(...e),
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
                (this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        (this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 }));
                    }, 250)));
            }),
            D(this, 'handleThreadsPopoutClose', () => {
                (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 }));
            }),
            D(this, 'handleActivitiesPopoutClose', () => {
                (this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 }));
            }),
            D(this, 'handleClosePopout', () => {
                (this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose());
            }),
            D(this, 'handleMouseDown', () => {
                (this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose());
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : T.ME, e.id);
            }),
            D(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: i } = this.props,
                    { shouldShowActivities: l } = this.state;
                return t.isModeratorReportChannel()
                    ? null
                    : null != i && i.length > 0 && l && !n
                      ? (0, r.jsx)(Z.Z, {
                            onAction: this.handleActivitiesPopoutClose,
                            channel: t
                        })
                      : (0, r.jsx)(I.Z, M(L({}, e), { channel: this.props.channel }));
            }),
            D(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === T.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    channel: t,
                                    selected: !0
                                })
                            );
                    });
                if (t.type === T.d4z.DM) {
                    let i = x.default.getUser(t.getRecipientId());
                    null != i &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    M(L({}, n), {
                                        user: i,
                                        channel: t,
                                        showModalItems: !1
                                    })
                                );
                        });
                    return;
                }
                if (t.isModeratorReportChannel())
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await n.e('86715').then(n.bind(n, 466676));
                        return (n) => (0, r.jsx)(e, M(L({}, n), { channel: t }));
                    });
                let i = C.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(L({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            }));
    }
}
let U = (0, d.B)(k);
function G(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: o, selected: a } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.JQ)(t),
        d = (0, s.cj)([E.ZP], () => ({
            unread: E.ZP.hasUnread(t.id),
            ackMessageId: E.ZP.ackMessageId(t.id),
            isLowImportanceMention: E.ZP.getIsMentionLowImportance(t.id)
        })),
        g = (0, s.e7)([S.ZP], () => S.ZP.resolveUnreadSetting(t)),
        m = (0, s.cj)([v.Z, j.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return {
                canManageChannel: j.Z.can(T.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== i && (n.id === A._ || (null != e ? j.Z.can(T.Plq.MANAGE_CHANNELS, e) : j.Z.can(T.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        _ = (0, s.e7)([O.Z], () => O.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: C, isSubscriptionGated: I } = (0, b.Z)(t.id),
        P = (0, s.e7)([S.ZP], () => S.ZP.isFavorite(n.id, t.id)),
        w = (0, s.e7)(
            [x.default],
            () => {
                let e = x.default.getCurrentUser();
                return null != e && (!(0, f.aC)(t) || e.nsfwAllowed);
            },
            [t]
        ),
        Z = (0, h.NX)(t.id),
        R = (0, N.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: a,
            isSubscriptionGated: I,
            needSubscriptionToAccess: C,
            isNewChannel: _,
            muted: o,
            enableActivities: Z,
            resolvedUnreadSetting: g
        }),
        D = (0, p.ZP)(t);
    return (0, r.jsx)(
        U,
        M(L({}, d, m, e), {
            hasActiveThreads: c,
            hasMoreActiveThreads: u,
            isSubscriptionGated: I,
            needSubscriptionToAccess: C,
            isNewChannel: _ && e.canBeNewChannel,
            isFavoriteSuggestion: l && !P,
            canShowThreadPreviewForUser: w,
            channelInfo: R,
            embeddedApps: D,
            resolvedUnreadSetting: g,
            hasChannelInfo: null != R,
            enableActivities: Z
        })
    );
}
