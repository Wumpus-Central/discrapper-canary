n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(308528),
    c = n(442433),
    u = n(676002),
    h = n(811024),
    A = n(685399),
    g = n(323073),
    m = n(963027),
    p = n(5932),
    _ = n(721592),
    x = n(454058),
    f = n(406704),
    E = n(734057),
    C = n(696451),
    I = n(71393),
    S = n(576705),
    b = n(383501),
    N = n(222823),
    T = n(543465),
    j = n(287809),
    v = n(964918),
    y = n(557534),
    R = n(68437),
    O = n(166444),
    L = n(813513),
    D = n(652215),
    M = n(349828),
    G = n(728444);
class U extends y.Ay {
    state = { shouldShowThreadsPopout: !1, shouldShowActivities: !1 };
    channelItemRef = l.createRef();
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
        d.A.preload(t ?? D.ME, e.id);
    };
    renderPopout = (e) => {
        let { channel: t, sorting: n, embeddedApps: l, channelIsContentGated: s } = this.props,
            { shouldShowActivities: a } = this.state;
        return t.isModeratorReportChannel() || s
            ? null
            : null != l && l.length > 0 && a && !n
              ? (0, i.jsx)(L.A, { onAction: this.handleActivitiesPopoutClose, channel: t })
              : (0, i.jsx)(v.A, { ...e, channel: this.props.channel });
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
        if (t.type === D.rbe.GROUP_DM)
            return void (0, c.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !0 });
            });
        if (t.type === D.rbe.DM) {
            let l = j.default.getUser(t.getRecipientId());
            null != l &&
                (0, c.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("42128"),
                        n.e("39778"),
                        n.e("54266"),
                    ]).then(n.bind(n, 385913));
                    return (n) => (0, i.jsx)(e, { ...n, user: l, channel: t, showModalItems: !1 });
                });
            return;
        }
        if (t.isModeratorReportChannel())
            return void (0, c.L3)(e, async () => {
                let { default: e } = await n.e("78580").then(n.bind(n, 907647));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
        let l = I.A.getGuild(t.getGuildId());
        null != l &&
            (0, c.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                    n.bind(n, 370372),
                );
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    };
    renderChannelInfo() {
        let { channelInfo: e } = this.props;
        return null == e ? null : (0, i.jsx)("div", { className: G.yW, children: e });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: l,
                unread: s,
                hasActiveThreads: r,
                hasMoreActiveThreads: d,
                mentionCount: c,
                connectChannelDropTarget: u,
                connectChannelDragSource: h,
                connectDragPreview: A,
                canReorderChannel: g,
                isSubscriptionGated: _,
                isFavoriteSuggestion: x,
                subtitle: f,
                forceTopLevelThread: E,
                embeddedApps: C,
                resolvedUnreadSetting: I,
                withGuildIcon: S,
                enableActivities: b,
            } = this.props,
            N = b && null != C && C.length > 0,
            T = (0, p.M)(f),
            j = (0, i.jsx)("li", {
                className: a()(this.getClassName(), { [G.r9]: this.isDisabled(), [G.wH]: n }),
                "data-dnd-name": e.name,
                onMouseEnter: d || N ? this.handleMouseEnter : void 0,
                onMouseLeave: d || N ? this.handleMouseLeave : void 0,
                children: (0, i.jsx)(o.YNO, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (d && this.state.shouldShowThreadsPopout) || (N && this.state.shouldShowActivities),
                    children: () =>
                        (0, i.jsxs)(O.Ay, {
                            ref: this.channelItemRef,
                            className: G.Ki,
                            channel: e,
                            guild: t,
                            selected: !x && n,
                            muted: l,
                            unread: s,
                            mentionCount: c,
                            hasActiveThreads: r,
                            subtitle: T?.subtitle,
                            subtitleColor: T?.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: g ? A : null,
                            isFavoriteSuggestion: x,
                            channelTypeOverride: E ? D.rbe.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: I,
                            withGuildIcon: S,
                            "aria-label": (0, m.Ay)({ channel: e, unread: s, mentionCount: c, isSubscriptionGated: _ }),
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
            });
        return g ? u(h(j)) : j;
    }
}
let P = (0, u.a)(U);
function k(e) {
    let { channel: t, guild: n, disableSorting: l, isFavoriteCategory: s, muted: a, selected: o } = e,
        { hasActiveThreads: d, hasMoreActiveThreads: c } = (0, f.NR)(t),
        u = (0, r.cf)([N.Ay], () => ({
            unread: N.Ay.hasUnread(t.id),
            ackMessageId: N.Ay.ackMessageId(t.id),
            isLowImportanceMention: N.Ay.getIsMentionLowImportance(t.id),
        })),
        m = (0, r.bG)([T.Ay], () => T.Ay.resolveUnreadSetting(t)),
        p = (0, r.cf)([E.A, S.A], () => {
            let e = E.A.getChannel(t.parent_id);
            return {
                canManageChannel: S.A.can(D.xBc.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== l &&
                    (n.id === M.V ||
                        (null != e ? S.A.can(D.xBc.MANAGE_CHANNELS, e) : S.A.can(D.xBc.MANAGE_CHANNELS, n))),
            };
        }),
        I = (0, r.bG)([x.A], () => x.A.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: j, isSubscriptionGated: v } = (0, _.A)(t.id),
        y = (0, r.bG)([T.Ay], () => T.Ay.isFavorite(n.id, t.id)),
        O = (0, g.vL)(t),
        L = (0, h.Gp)(t.id),
        G = (0, R.A)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: o,
            isSubscriptionGated: v,
            needSubscriptionToAccess: j,
            isNewChannel: I,
            muted: a,
            enableActivities: L,
            resolvedUnreadSetting: m,
        }),
        U = (0, A.Ay)(t);
    return (0, r.bG)([b.A, C.Ay], () => b.A.getChannelId() !== t.id && C.Ay.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, i.jsx)(P, {
              ...u,
              ...p,
              ...e,
              hasActiveThreads: d,
              hasMoreActiveThreads: c,
              isSubscriptionGated: v,
              needSubscriptionToAccess: j,
              isNewChannel: I && e.canBeNewChannel,
              isFavoriteSuggestion: s && !y,
              channelIsContentGated: O,
              channelInfo: G,
              embeddedApps: U,
              resolvedUnreadSetting: m,
              hasChannelInfo: null != G,
              enableActivities: L,
          });
}
