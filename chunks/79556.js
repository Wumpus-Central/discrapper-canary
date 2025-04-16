n.d(t, { Z: () => U }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(146773),
    h = n(595519),
    p = n(619915),
    f = n(201895),
    g = n(873696),
    m = n(66999),
    b = n(340541),
    _ = n(22082),
    y = n(665906),
    v = n(592125),
    O = n(430824),
    C = n(496675),
    S = n(306680),
    j = n(9156),
    E = n(594174),
    x = n(109446),
    N = n(98597),
    I = n(648501),
    P = n(473403),
    w = n(304471),
    Z = n(981631),
    T = n(647086),
    A = n(915887);
function R(e, t, n) {
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
                R(e, t, n[t]);
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
class k extends N.ZP {
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
        let { channel: e, guild: t, selected: n, muted: i, unread: l, hasActiveThreads: s, hasMoreActiveThreads: c, mentionCount: u, connectChannelDropTarget: d, connectChannelDragSource: h, connectDragPreview: p, canReorderChannel: m, isSubscriptionGated: _, isFavoriteSuggestion: y, subtitle: v, forceTopLevelThread: O, embeddedApps: C, resolvedUnreadSetting: S, withGuildIcon: j, enableActivities: E } = this.props,
            x = (0, b.jW)({ location: 'text_channel' }).entrypoints,
            N = E && null != C && C.length > 0,
            I = (0, g.D)(v),
            w = (0, r.jsx)('li', {
                className: o()(this.getClassName(), {
                    [A.disabled]: this.isDisabled(),
                    [A.selected]: n
                }),
                'data-dnd-name': e.name,
                onMouseEnter: c || N ? this.handleMouseEnter : void 0,
                onMouseLeave: c || N ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(a.yRy, {
                    targetElementRef: this.channelItemRef,
                    position: 'right',
                    renderPopout: this.renderPopout,
                    spacing: 0,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (N && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(P.ZP, {
                            ref: this.channelItemRef,
                            className: A.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !y && n,
                            muted: i,
                            unread: l,
                            mentionCount: u,
                            hasActiveThreads: s,
                            subtitle: null == I ? void 0 : I.subtitle,
                            subtitleColor: null == I ? void 0 : I.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: m ? p : null,
                            isFavoriteSuggestion: y,
                            channelTypeOverride: O ? Z.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: S,
                            withGuildIcon: j,
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
        return m ? d(h(w)) : w;
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1
            }),
            R(this, 'channelItemRef', i.createRef()),
            R(this, 'enterTimer', 0),
            R(this, 'exitTimer', 0),
            R(this, 'handleMouseEnter', () => {
                (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) &&
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({ shouldShowActivities: !0 }) : this.props.canShowThreadPreviewForUser && this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            R(this, 'handleMouseLeave', () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }), this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            R(this, 'handleThreadsPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            R(this, 'handleActivitiesPopoutClose', () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            R(this, 'handleClosePopout', () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            R(this, 'handleMouseDown', () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : Z.ME, e.id);
            }),
            R(this, 'renderPopout', (e) => {
                let { channel: t, sorting: n, embeddedApps: i } = this.props,
                    { shouldShowActivities: l } = this.state;
                return null != i && i.length > 0 && l && !n
                    ? (0, r.jsx)(w.Z, {
                          onAction: this.handleActivitiesPopoutClose,
                          channel: t
                      })
                    : (0, r.jsx)(x.Z, L(D({}, e), { channel: this.props.channel }));
            }),
            R(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props;
                if (t.type === Z.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(D({}, n), {
                                    channel: t,
                                    selected: !0
                                })
                            );
                    });
                if (t.type === Z.d4z.DM) {
                    let i = E.default.getUser(t.getRecipientId());
                    null != i &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('4040'), n.e('53912'), n.e('56826'), n.e('45903')]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    L(D({}, n), {
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
                                L(D({}, n), {
                                    channel: t,
                                    guild: i
                                })
                            );
                    });
            });
    }
}
let M = (0, d.B)(k);
function U(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: o, selected: a } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, y.JQ)(t),
        d = (0, s.cj)([S.ZP], () => ({
            unread: S.ZP.hasUnread(t.id),
            ackMessageId: S.ZP.ackMessageId(t.id),
            isLowImportanceMention: S.ZP.getIsMentionLowImportance(t.id)
        })),
        f = (0, s.e7)([j.ZP], () => j.ZP.resolveUnreadSetting(t)),
        g = (0, s.cj)([v.Z, C.Z], () => {
            let e = v.Z.getChannel(t.parent_id);
            return {
                canManageChannel: C.Z.can(Z.Plq.MANAGE_CHANNELS, t),
                canReorderChannel: !0 !== i && (n.id === T._ || (null != e ? C.Z.can(Z.Plq.MANAGE_CHANNELS, e) : C.Z.can(Z.Plq.MANAGE_CHANNELS, n)))
            };
        }),
        b = (0, s.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: O, isSubscriptionGated: x } = (0, m.Z)(t.id),
        N = (0, s.e7)([j.ZP], () => j.ZP.isFavorite(n.id, t.id)),
        P = (0, s.e7)(
            [E.default],
            () => {
                let e = E.default.getCurrentUser();
                return null != e && (!t.isNSFW() || e.nsfwAllowed);
            },
            [t]
        ),
        w = (0, h.NX)(t.id),
        A = (0, I.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: a,
            isSubscriptionGated: x,
            needSubscriptionToAccess: O,
            isNewChannel: b,
            muted: o,
            enableActivities: w,
            resolvedUnreadSetting: f
        }),
        R = (0, p.ZP)(t);
    return (0, r.jsx)(
        M,
        L(D({}, d, g, e), {
            hasActiveThreads: c,
            hasMoreActiveThreads: u,
            isSubscriptionGated: x,
            needSubscriptionToAccess: O,
            isNewChannel: b && e.canBeNewChannel,
            isFavoriteSuggestion: l && !N,
            canShowThreadPreviewForUser: P,
            channelInfo: A,
            embeddedApps: R,
            resolvedUnreadSetting: f,
            hasChannelInfo: null != A,
            enableActivities: w
        })
    );
}
