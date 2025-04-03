n.d(t, { Z: () => M }), n(47120);
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
    b = n(22082),
    y = n(665906),
    _ = n(592125),
    v = n(430824),
    O = n(496675),
    j = n(306680),
    x = n(9156),
    C = n(594174),
    S = n(109446),
    P = n(98597),
    I = n(648501),
    N = n(473403),
    Z = n(304471),
    w = n(981631),
    E = n(647086),
    T = n(915887);
function A(e, t, n) {
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
function D(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
class L extends P.ZP {
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
                  className: T.channelInfo,
                  children: e
              });
    }
    render() {
        let { channel: e, guild: t, selected: n, muted: i, unread: l, hasActiveThreads: a, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: p, connectDragPreview: h, canReorderChannel: m, isSubscriptionGated: b, isFavoriteSuggestion: y, subtitle: _, forceTopLevelThread: v, embeddedApps: O, resolvedUnreadSetting: j, withGuildIcon: x, enableActivities: C } = this.props,
            S = C && null != O && O.length > 0,
            P = (0, g.D)(_),
            I = (0, r.jsx)('li', {
                className: o()(this.getClassName(), {
                    [T.disabled]: this.isDisabled(),
                    [T.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || S ? this.handleMouseEnter : void 0,
                onMouseLeave: c || S ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(s.yRy, {
                    targetElementRef: this.channelItemRef,
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (S && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(N.ZP, {
                            ref: this.channelItemRef,
                            className: T.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !y && n,
                            muted: i,
                            unread: l,
                            mentionCount: u,
                            hasActiveThreads: a,
                            subtitle: null == P ? void 0 : P.subtitle,
                            subtitleColor: null == P ? void 0 : P.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: m ? h : null,
                            isFavoriteSuggestion: y,
                            channelTypeOverride: v ? w.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: j,
                            withGuildIcon: x,
                            'aria-label': (0, f.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: u,
                                isSubscriptionGated: b
                            }),
                            children: [y && this.renderAcceptSuggestionButton(), y && this.renderRemoveSuggestionButton(), !y && this.renderInviteButton(), !y && this.renderEditButton(), !y && this.renderChannelInfo()]
                        })
                })
            });
        return m ? d(p(I)) : I;
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            A(this, 'channelItemRef', i.createRef()),
            A(this, 'enterTimer', 0),
            A(this, 'exitTimer', 0),
            A(this, 'handleMouseEnter', () => {
                (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) &&
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            A(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            A(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            A(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            A(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            A(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : w.ME, e.id);
            }),
            A(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: i } = this.props,
                    { shouldShowActivities: l } = this.state;
                return null != i && i.length > 0 && l && !n
                    ? (0, r.jsx)(Z.Z, {
                          onAction: this.handleActivitiesPopoutClose,
                          channel: t
                      })
                    : (0, r.jsx)(S.Z, R(D({}, e), { channel: this.props.channel }));
            }),
            A(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === w.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                R(D({}, n), {
                                    channel: t,
                                    selected: !0
                                })
                            );
                    });
                if (t.type === w.d4z.DM) {
                    let i = C.default.getUser(t.getRecipientId());
                    null != i &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    R(D({}, n), {
                                        user: i,
                                        channel: t,
                                        showModalItems: !1
                                    })
                                );
                        });
                    return;
                }
                let i = v.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                R(D({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            });
    }
}
let k = (0, d.B)(L);
function M(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: o, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.JQ)(t),
        d = (0, a.cj)([j.ZP], () => ({
            unread: j.ZP.hasUnread(t.id),
            ackMessageId: j.ZP.ackMessageId(t.id),
            isLowImportanceMention: j.ZP.getIsMentionLowImportance(t.id)
        })),
        f = (0, a.e7)([x.ZP], () => x.ZP.resolveUnreadSetting(t)),
        g = (0, a.cj)([_.Z, O.Z], () => {
            let e = _.Z.getChannel(t.parent_id);
            return {
                canManageChannel: O.Z.can(w.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== i && (n.id === E._ || (null != e ? O.Z.can(w.Plq.MANAGE_CHANNELS, e) : O.Z.can(w.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        v = (0, a.e7)([b.Z], () => b.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: S, isSubscriptionGated: P } = (0, m.Z)(t.id),
        N = (0, a.e7)([x.ZP], () => x.ZP.isFavorite(n.id, t.id)),
        Z = (0, a.e7)(
            [C.default],
            () => {
                let e = C.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        T = (0, p.NX)(t.id),
        A = (0, I.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: P,
            needSubscriptionToAccess: S,
            isNewChannel: v,
            muted: o,
            enableActivities: T,
            resolvedUnreadSetting: f
        }),
        L = (0, h.ZP)(t);
    return (0, r.jsx)(
        k,
        R(D({}, d, g, e), {
            hasActiveThreads: c,
            hasMoreActiveThreads: u,
            isSubscriptionGated: P,
            needSubscriptionToAccess: S,
            isNewChannel: v && e.canBeNewChannel,
            isFavoriteSuggestion: l && !N,
            canShowThreadPreviewForUser: Z,
            channelInfo: A,
            embeddedApps: L,
            resolvedUnreadSetting: f,
            hasChannelInfo: null != A,
            enableActivities: T
        })
    );
}
