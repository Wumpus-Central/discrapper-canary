"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(172218),
    o = n(311907),
    c = n(397927),
    d = n(308528),
    u = n(442433),
    h = n(676002),
    A = n(811024),
    m = n(685399),
    _ = n(323073),
    g = n(963027),
    p = n(5932),
    f = n(570622),
    x = n(414808),
    E = n(721592),
    C = n(454058),
    I = n(824865),
    N = n(406704),
    b = n(734057),
    S = n(696451),
    T = n(71393),
    v = n(576705),
    y = n(383501),
    j = n(222823),
    R = n(543465),
    O = n(287809),
    L = n(964918),
    M = n(557534),
    D = n(68437),
    G = n(166444),
    U = n(813513);
n(281405);
var P = n(652215),
    w = n(349828),
    k = n(928409);
class V extends M.Ay {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = s.createRef();
    assignRef = (e, t) => {
        null != e && (e.current = t);
    };
    setChannelItemRef = (e) => {
        (this.channelItemRef.current = e), this.assignRef(this.props.channelItemRef, e);
    };
    enterTimer = null;
    exitTimer = null;
    handleMouseEnter = () => {
        (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
            (this.resetTextChannelPopoutTimers(),
            (this.enterTimer = setTimeout(() => {
                null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                    ? this.setState({ shouldShowActivities: !0 })
                    : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
            }, 200)));
    };
    handleMouseLeave = () => {
        this.resetTextChannelPopoutTimers(),
            (this.exitTimer = setTimeout(() => {
                this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                    this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
            }, 250));
    };
    handleThreadsPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
    };
    handleActivitiesPopoutClose = () => {
        this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
    };
    handleClosePopout = () => {
        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
            this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
    };
    handleMouseDown = () => {
        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
        let { channel: e } = this.props,
            t = e.getGuildId();
        d.A.preload(t ?? P.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: s, channelIsContentGated: l } = this.props,
            { shouldShowActivities: a } = this.state;
        return t.isModeratorReportChannel() || l
            ? null
            : null != s && s.length > 0 && a && !n
              ? (0, i.jsx)(U.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(L.A, { ...e, channel: this.props.channel });
    };
    componentWillUnmount() {
        this.resetTextChannelPopoutTimers();
    }
    resetTextChannelPopoutTimers() {
        null != this.enterTimer && (clearTimeout(this.enterTimer), (this.enterTimer = null)),
            null != this.exitTimer && (clearTimeout(this.exitTimer), (this.exitTimer = null));
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props;
        if (t.type === P.rbe.GROUP_DM)
            return void (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === P.rbe.DM) {
            let s = O.default.getUser(t.getRecipientId());
            null != s &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("34408"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, i.jsx)(e, { ...n, user: s, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, u.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
        let s = T.A.getGuild(t.getGuildId());
        null != s &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: k.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: s,
                unread: l,
                hasActiveThreads: r,
                hasMoreActiveThreads: o,
                mentionCount: d,
                connectChannelDropTarget: u,
                connectChannelDragSource: h,
                connectDragPreview: A,
                canReorderChannel: m,
                isSubscriptionGated: _,
                isFavoriteSuggestion: f,
                subtitle: E,
                forceTopLevelThread: C,
                embeddedApps: N,
                resolvedUnreadSetting: b,
                enableActivities: S,
                showMenuItemPopover: T,
                markMenuItemPopoverAsDismissed: v,
                channelItemRef: y,
                isSuggestedSection: j,
            } = this.props,
            R = y ?? this.channelItemRef,
            O = !T && o,
            L = !T && S && null != N && N.length > 0,
            M = (0, p.M)(E),
            D = (0, i.jsxs)("li", {
                className: a()(this.getClassName(), { [k.r9]: this.isDisabled(), [k.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: O || L ? this.handleMouseEnter : void 0,
                onMouseLeave: O || L ? this.handleMouseLeave : void 0,
                children: [
                    (0, i.jsx)(c.YNO, {
                        targetElementRef: R,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (O && this.state.shouldShowThreadsPopout) || (L && this.state.shouldShowActivities),
                        children: () =>
                            (0, i.jsxs)(G.Ay, {
                                ref: this.setChannelItemRef,
                                className: k.Ki,
                                channel: e,
                                guild: t,
                                selected: !f && n,
                                muted: s,
                                unread: l,
                                mentionCount: d,
                                hasActiveThreads: r,
                                subtitle: M?.subtitle,
                                subtitleColor: M?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: m ? A : null,
                                isFavoriteSuggestion: f,
                                channelTypeOverride: C ? P.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: b,
                                transitionExtras: j ? { source: I.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, g.Ay)({
                                    channel: e,
                                    unread: l,
                                    mentionCount: d,
                                    isSubscriptionGated: _,
                                }),
                                children: [
                                    f &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !f &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                this.renderChannelInfo(),
                                                this.renderInviteButton(),
                                                this.renderEditButton(),
                                            ],
                                        }),
                                ],
                            }),
                    }),
                    T && (0, i.jsx)(x.A, { targetElementRef: R, markMenuItemPopoverAsDismissed: v }),
                ],
            });
        return m ? u(h(D)) : D;
    }
}
let B = (0, h.a)(V);
function H(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: a, muted: c, selected: d } = e,
        { hasActiveThreads: u, hasMoreActiveThreads: h } = (0, N.NR)(t),
        g = (0, o.cf)([j.Ay], () => ({
            unread: j.Ay.hasUnread(t.id),
            ackMessageId: j.Ay.ackMessageId(t.id),
            isLowImportanceMention: j.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, o.bG)([R.Ay], () => R.Ay.resolveUnreadSetting(t)),
        x = (0, o.cf)([b.A, v.A], () => {
            let e = b.A.getChannel(t.parent_id);
            return {
                canManageChannel: v.A.can(P.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === w.Vc ||
                        (null != e ? v.A.can(P.xBc.MANAGE_CHANNELS, e) : v.A.can(P.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        I = (0, o.bG)([C.A], () => C.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: T, isSubscriptionGated: O } = (0, E.A)(t.id),
        L = (0, o.bG)([R.Ay], () => R.Ay.isFavorite(n.id, t.id)),
        M = (0, _.vL)(t),
        G = (0, A.Gp)(t.id),
        U = (0, D.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: d,
            isSubscriptionGated: O,
            needSubscriptionToAccess: T,
            isNewChannel: I,
            muted: c,
            enableActivities: G,
            resolvedUnreadSetting: p,
        }),
        k = (0, m.Ay)(t),
        [V, H] = s.useState(!1),
        F = (0, r.K)(
            s.useCallback((e) => {
                H(e);
            }, []),
        ),
        { showMenuItemPopover: K, markMenuItemPopoverAsDismissed: W } = (0, f.z)({
            location: "TextChannel",
            isChannelSelected: d,
            isTargetInViewport: V,
            channelType: t.type,
            isPopoverAllowed: n.id !== w.Vc,
        });
    return (0, o.bG)([y.A, S.Ay], () => y.A.getChannelId() !== t.id && S.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(B, {
              ...g,
              ...x,
              ...e,
              hasActiveThreads: u,
              hasMoreActiveThreads: h,
              isSubscriptionGated: O,
              needSubscriptionToAccess: T,
              isNewChannel: I && e.canBeNewChannel,
              isFavoriteSuggestion: a && !L,
              channelIsContentGated: M,
              channelInfo: U,
              embeddedApps: k,
              resolvedUnreadSetting: p,
              hasChannelInfo: null != U,
              enableActivities: G,
              showMenuItemPopover: K,
              markMenuItemPopoverAsDismissed: W,
              channelItemRef: F,
          });
}
