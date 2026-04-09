n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(172218),
    o = n(311907),
    d = n(397927),
    c = n(308528),
    u = n(442433),
    h = n(676002),
    A = n(811024),
    _ = n(685399),
    m = n(323073),
    p = n(963027),
    g = n(47167),
    f = n(5932),
    x = n(414808),
    E = n(302005),
    I = n(721592),
    C = n(454058),
    N = n(824865),
    T = n(406704),
    S = n(734057),
    b = n(696451),
    y = n(71393),
    v = n(576705),
    j = n(383501),
    R = n(222823),
    O = n(994500),
    L = n(543465),
    M = n(287809),
    D = n(964918),
    U = n(557534),
    G = n(68437),
    P = n(166444),
    k = n(813513);
n(281405);
var w = n(652215),
    B = n(349828),
    V = n(99566);
class H extends U.Ay {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = l.createRef();
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
        c.A.preload(t ?? w.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: s } = this.props,
            { shouldShowActivities: a } = this.state;
        return t.isModeratorReportChannel() || s
            ? null
            : null != l && l.length > 0 && a && !n
              ? (0, i.jsx)(k.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(D.A, { ...e, channel: this.props.channel });
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
        if (t.type === w.rbe.GROUP_DM)
            return void (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === w.rbe.DM) {
            let l = M.default.getUser(t.getRecipientId());
            null != l &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("22283"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, i.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, u.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
        let l = y.A.getGuild(t.getGuildId());
        null != l &&
            (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("77666")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: V.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: s,
                hasActiveThreads: r,
                hasMoreActiveThreads: o,
                mentionCount: c,
                connectChannelDropTarget: u,
                connectChannelDragSource: h,
                connectDragPreview: A,
                canReorderChannel: _,
                isSubscriptionGated: m,
                isFavoriteSuggestion: E,
                subtitle: I,
                forceTopLevelThread: C,
                embeddedApps: T,
                resolvedUnreadSetting: S,
                enableActivities: b,
                showMenuItemPopover: y,
                markMenuItemPopoverAsDismissed: v,
                channelItemRef: j,
                isSuggestedSection: R,
            } = this.props,
            L = j ?? this.channelItemRef,
            D = !y && o,
            U = !y && b && null != T && T.length > 0,
            G = (0, f.M)(I),
            k = (0, i.jsxs)("li", {
                className: a()(this.getClassName(), { [V.r9]: this.isDisabled(), [V.wH]: n }),
                "data-dnd-name": (0, g.m1)(e, M.default, O.A),
                onMouseEnter: D || U ? this.handleMouseEnter : void 0,
                onMouseLeave: D || U ? this.handleMouseLeave : void 0,
                children: [
                    (0, i.jsx)(d.YNO, {
                        targetElementRef: L,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (D && this.state.shouldShowThreadsPopout) || (U && this.state.shouldShowActivities),
                        children: () =>
                            (0, i.jsxs)(P.Ay, {
                                ref: this.setChannelItemRef,
                                className: V.Ki,
                                channel: e,
                                guild: t,
                                selected: !E && n,
                                muted: l,
                                unread: s,
                                mentionCount: c,
                                hasActiveThreads: r,
                                subtitle: G?.subtitle,
                                subtitleColor: G?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: _ ? A : null,
                                isFavoriteSuggestion: E,
                                channelTypeOverride: C ? w.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: S,
                                transitionExtras: R ? { source: N.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, p.Ay)({
                                    channel: e,
                                    unread: s,
                                    mentionCount: c,
                                    isSubscriptionGated: m,
                                }),
                                children: [
                                    E &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !E &&
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
                    y && (0, i.jsx)(x.A, { targetElementRef: L, markMenuItemPopoverAsDismissed: v }),
                ],
            });
        return _ ? u(h(k)) : k;
    }
}
let F = (0, h.a)(H);
function W(e) {
    let { channel: t, guild: n, disableSorting: s, isFavoriteCategory: a, muted: d, selected: c } = e,
        { hasActiveThreads: u, hasMoreActiveThreads: h } = (0, T.NR)(t),
        p = (0, o.cf)([R.Ay], () => ({
            unread: R.Ay.hasUnread(t.id),
            ackMessageId: R.Ay.ackMessageId(t.id),
            isLowImportanceMention: R.Ay.getIsMentionLowImportance(t.id),
        })),
        g = (0, o.bG)([L.Ay], () => L.Ay.resolveUnreadSetting(t)),
        f = (0, o.cf)([S.A, v.A], () => {
            let e = S.A.getChannel(t.parent_id);
            return {
                canManageChannel: v.A.can(w.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== s &&
                    (n.id === B.Vc ||
                        (null != e ? v.A.can(w.xBc.MANAGE_CHANNELS, e) : v.A.can(w.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        x = (0, o.bG)([C.A], () => C.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: N, isSubscriptionGated: y } = (0, I.A)(t.id),
        O = (0, o.bG)([L.Ay], () => L.Ay.isFavorite(n.id, t.id)),
        M = (0, m.ni)(t),
        D = (0, A.Gp)(t.id),
        U = (0, G.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: c,
            isSubscriptionGated: y,
            needSubscriptionToAccess: N,
            isNewChannel: x,
            muted: d,
            enableActivities: D,
            resolvedUnreadSetting: g,
        }),
        P = (0, _.Ay)(t),
        [k, V] = l.useState(!1),
        H = (0, r.K)(
            l.useCallback((e) => {
                V(e);
            }, []),
        ),
        { showMenuItemPopover: W, markMenuItemPopoverAsDismissed: K } = (0, E.z)({
            location: "TextChannel",
            isChannelSelected: c,
            isTargetInViewport: k,
            channelType: t.type,
            isPopoverAllowed: n.id !== B.Vc,
        });
    return (0, o.bG)([j.A, b.Ay], () => j.A.getChannelId() !== t.id && b.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(F, {
              ...p,
              ...f,
              ...e,
              hasActiveThreads: u,
              hasMoreActiveThreads: h,
              isSubscriptionGated: y,
              needSubscriptionToAccess: N,
              isNewChannel: x && e.canBeNewChannel,
              isFavoriteSuggestion: a && !O,
              channelIsContentGated: M,
              channelInfo: U,
              embeddedApps: P,
              resolvedUnreadSetting: g,
              hasChannelInfo: null != U,
              enableActivities: D,
              showMenuItemPopover: W,
              markMenuItemPopoverAsDismissed: K,
              channelItemRef: H,
          });
}
