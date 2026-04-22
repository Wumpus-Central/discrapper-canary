n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(172218),
    o = n(311907),
    d = n(265872),
    c = n(308528),
    u = n(442433),
    h = n(676002),
    A = n(811024),
    _ = n(685399),
    m = n(323073),
    g = n(963027),
    p = n(47167),
    f = n(5932),
    E = n(414808),
    x = n(302005),
    I = n(721592),
    C = n(454058),
    b = n(824865),
    N = n(406704),
    S = n(734057),
    v = n(696451),
    T = n(71393),
    y = n(576705),
    R = n(383501),
    j = n(222823),
    L = n(994500),
    O = n(543465),
    G = n(287809),
    D = n(964918),
    M = n(557534),
    U = n(68437),
    P = n(166444),
    w = n(813513);
n(281405);
var k = n(652215),
    V = n(349828),
    B = n(907305);
class H extends M.Ay {
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
        c.A.preload(t ?? k.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: s } = this.props,
            { shouldShowActivities: a } = this.state;
        return t.isModeratorReportChannel() || s
            ? null
            : null != l && l.length > 0 && a && !n
              ? (0, i.jsx)(w.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
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
        if (t.type === k.rbe.GROUP_DM)
            return void (0, u.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === k.rbe.DM) {
            let l = G.default.getUser(t.getRecipientId());
            null != l &&
                (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("97169"),
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
        let l = T.A.getGuild(t.getGuildId());
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
        return null == e ? null : (0, i.jsx)("div", { className: B.yW, children: e });
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
                isFavoriteSuggestion: x,
                subtitle: I,
                forceTopLevelThread: C,
                embeddedApps: N,
                resolvedUnreadSetting: S,
                enableActivities: v,
                showMenuItemPopover: T,
                markMenuItemPopoverAsDismissed: y,
                channelItemRef: R,
                isSuggestedSection: j,
            } = this.props,
            O = R ?? this.channelItemRef,
            D = !T && o,
            M = !T && v && null != N && N.length > 0,
            U = (0, f.M)(I),
            w = (0, i.jsxs)("li", {
                className: a()(this.getClassName(), { [B.r9]: this.isDisabled(), [B.wH]: n }),
                "data-dnd-name": (0, p.m1)(e, G.default, L.A),
                onMouseEnter: D || M ? this.handleMouseEnter : void 0,
                onMouseLeave: D || M ? this.handleMouseLeave : void 0,
                children: [
                    (0, i.jsx)(d.Y, {
                        targetElementRef: O,
                        position: "right",
                        renderPopout: this.renderPopout,
                        onRequestClose: this.handleClosePopout,
                        spacing: 17,
                        shouldShow: (D && this.state.shouldShowThreadsPopout) || (M && this.state.shouldShowActivities),
                        children: () =>
                            (0, i.jsxs)(P.Ay, {
                                ref: this.setChannelItemRef,
                                className: B.Ki,
                                channel: e,
                                guild: t,
                                selected: !x && n,
                                muted: l,
                                unread: s,
                                mentionCount: c,
                                hasActiveThreads: r,
                                subtitle: U?.subtitle,
                                subtitleColor: U?.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: _ ? A : null,
                                isFavoriteSuggestion: x,
                                channelTypeOverride: C ? k.rbe.GUILD_TEXT : void 0,
                                resolvedUnreadSetting: S,
                                transitionExtras: j ? { source: b.A.CHANNEL_LIST_SUGGESTED_SECTION } : void 0,
                                "aria-label": (0, g.Ay)({
                                    channel: e,
                                    unread: s,
                                    mentionCount: c,
                                    isSubscriptionGated: m,
                                }),
                                children: [
                                    x &&
                                        (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                this.renderAcceptSuggestionButton(),
                                                this.renderRemoveSuggestionButton(),
                                            ],
                                        }),
                                    !x &&
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
                    T && (0, i.jsx)(E.A, { targetElementRef: O, markMenuItemPopoverAsDismissed: y }),
                ],
            });
        return _ ? u(h(w)) : w;
    }
}
let F = (0, h.a)(H);
function W(e) {
    let { channel: t, guild: n, disableSorting: s, isFavoriteCategory: a, muted: d, selected: c } = e,
        { hasActiveThreads: u, hasMoreActiveThreads: h } = (0, N.NR)(t),
        g = (0, o.cf)([j.Ay], () => ({
            unread: j.Ay.hasUnread(t.id),
            ackMessageId: j.Ay.ackMessageId(t.id),
            isLowImportanceMention: j.Ay.getIsMentionLowImportance(t.id),
        })),
        p = (0, o.bG)([O.Ay], () => O.Ay.resolveUnreadSetting(t)),
        f = (0, o.cf)([S.A, y.A], () => {
            let e = S.A.getChannel(t.parent_id);
            return {
                canManageChannel: y.A.can(k.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== s &&
                    (n.id === V.Vc ||
                        (null != e ? y.A.can(k.xBc.MANAGE_CHANNELS, e) : y.A.can(k.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        E = (0, o.bG)([C.A], () => C.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: b, isSubscriptionGated: T } = (0, I.A)(t.id),
        L = (0, o.bG)([O.Ay], () => O.Ay.isFavorite(n.id, t.id)),
        G = (0, m.ni)(t),
        D = (0, A.Gp)(t.id),
        M = (0, U.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: c,
            isSubscriptionGated: T,
            needSubscriptionToAccess: b,
            isNewChannel: E,
            muted: d,
            enableActivities: D,
            resolvedUnreadSetting: p,
        }),
        P = (0, _.Ay)(t),
        [w, B] = l.useState(!1),
        H = (0, r.K)(
            l.useCallback((e) => {
                B(e);
            }, []),
        ),
        { showMenuItemPopover: W, markMenuItemPopoverAsDismissed: Y } = (0, x.z)({
            location: "TextChannel",
            isChannelSelected: c,
            isTargetInViewport: w,
            channelType: t.type,
            isPopoverAllowed: n.id !== V.Vc,
        });
    return (0, o.bG)([R.A, v.Ay], () => R.A.getChannelId() !== t.id && v.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(F, {
              ...g,
              ...f,
              ...e,
              hasActiveThreads: u,
              hasMoreActiveThreads: h,
              isSubscriptionGated: T,
              needSubscriptionToAccess: b,
              isNewChannel: E && e.canBeNewChannel,
              isFavoriteSuggestion: a && !L,
              channelIsContentGated: G,
              channelInfo: M,
              embeddedApps: P,
              resolvedUnreadSetting: p,
              hasChannelInfo: null != M,
              enableActivities: D,
              showMenuItemPopover: W,
              markMenuItemPopoverAsDismissed: Y,
              channelItemRef: H,
          });
}
