n.d(t, { Z: () => U }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(493683),
    u = n(239091),
    d = n(146773),
    p = n(595519),
    f = n(619915),
    h = n(622822),
    g = n(201895),
    m = n(873696),
    b = n(66999),
    y = n(22082),
    v = n(665906),
    O = n(592125),
    j = n(430824),
    x = n(496675),
    C = n(306680),
    E = n(9156),
    S = n(594174),
    _ = n(109446),
    I = n(98597),
    P = n(648501),
    Z = n(473403),
    N = n(304471),
    T = n(981631),
    A = n(647086),
    w = n(642915);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
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
            : (0, r.jsx)("div", {
                  className: w.channelInfo,
                  children: e,
              });
    }
    render() {
        let {
                channel: e,
                guild: t,
                selected: n,
                muted: i,
                unread: l,
                hasActiveThreads: o,
                hasMoreActiveThreads: c,
                mentionCount: u,
                connectChannelDropTarget: d,
                connectChannelDragSource: p,
                connectDragPreview: f,
                canReorderChannel: h,
                isSubscriptionGated: b,
                isFavoriteSuggestion: y,
                subtitle: v,
                forceTopLevelThread: O,
                embeddedApps: j,
                resolvedUnreadSetting: x,
                withGuildIcon: C,
                enableActivities: E,
            } = this.props,
            S = E && null != j && j.length > 0,
            _ = (0, m.D)(v),
            I = (0, r.jsx)("li", {
                className: a()(this.getClassName(), {
                    [w.disabled]: this.isDisabled(),
                    [w.selected]: n,
                }),
                "data-dnd-name": e.name,
                onMouseEnter: c || S ? this.handleMouseEnter : void 0,
                onMouseLeave: c || S ? this.handleMouseLeave : void 0,
                children: (0, r.jsx)(s.yRy, {
                    targetElementRef: this.channelItemRef,
                    position: "right",
                    renderPopout: this.renderPopout,
                    onRequestClose: this.handleClosePopout,
                    shouldShow: (c && this.state.shouldShowThreadsPopout) || (S && this.state.shouldShowActivities),
                    children: () =>
                        (0, r.jsxs)(Z.ZP, {
                            ref: this.channelItemRef,
                            className: w.iconVisibility,
                            channel: e,
                            guild: t,
                            selected: !y && n,
                            muted: i,
                            unread: l,
                            mentionCount: u,
                            hasActiveThreads: o,
                            subtitle: null == _ ? void 0 : _.subtitle,
                            subtitleColor: null == _ ? void 0 : _.color,
                            onMouseDown: this.handleMouseDown,
                            onContextMenu: this.handleContextMenu,
                            connectDragPreview: h ? f : null,
                            isFavoriteSuggestion: y,
                            channelTypeOverride: O ? T.d4z.GUILD_TEXT : void 0,
                            resolvedUnreadSetting: x,
                            withGuildIcon: C,
                            "aria-label": (0, g.ZP)({
                                channel: e,
                                unread: l,
                                mentionCount: u,
                                isSubscriptionGated: b,
                            }),
                            children: [
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            this.renderAcceptSuggestionButton(),
                                            this.renderRemoveSuggestionButton(),
                                        ],
                                    }),
                                !y &&
                                    (0, r.jsxs)(r.Fragment, {
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
        return h ? d(p(I)) : I;
    }
    constructor(...e) {
        super(...e),
            R(this, "state", {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1,
            }),
            R(this, "channelItemRef", i.createRef()),
            R(this, "enterTimer", 0),
            R(this, "exitTimer", 0),
            R(this, "handleMouseEnter", () => {
                (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                            ? this.setState({ shouldShowActivities: !0 })
                            : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            R(this, "handleMouseLeave", () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                            this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            R(this, "handleThreadsPopoutClose", () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            R(this, "handleActivitiesPopoutClose", () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            R(this, "handleClosePopout", () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
                    this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            R(this, "handleMouseDown", () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : T.ME, e.id);
            }),
            R(this, "renderPopout", (e) => {
                let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
                    { shouldShowActivities: a } = this.state;
                return t.isModeratorReportChannel() || l
                    ? null
                    : null != i && i.length > 0 && a && !n
                      ? (0, r.jsx)(N.Z, {
                            onAction: this.handleActivitiesPopoutClose,
                            channel: t,
                        })
                      : (0, r.jsx)(_.Z, M(D({}, e), { channel: this.props.channel }));
            }),
            R(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props;
                if (t.type === T.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(D({}, n), {
                                    channel: t,
                                    selected: !0,
                                }),
                            );
                    });
                if (t.type === T.d4z.DM) {
                    let i = S.default.getUser(t.getRecipientId());
                    null != i &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("4040"),
                                n.e("56826"),
                                n.e("93896"),
                            ]).then(n.bind(n, 131404));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    M(D({}, n), {
                                        user: i,
                                        channel: t,
                                        showModalItems: !1,
                                    }),
                                );
                        });
                    return;
                }
                if (t.isModeratorReportChannel())
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await n.e("86715").then(n.bind(n, 466676));
                        return (n) => (0, r.jsx)(e, M(D({}, n), { channel: t }));
                    });
                let i = j.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(
                            n.bind(n, 373651),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                M(D({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            });
    }
}
let L = (0, d.B)(k);
function U(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, v.JQ)(t),
        d = (0, o.cj)([C.ZP], () => ({
            unread: C.ZP.hasUnread(t.id),
            ackMessageId: C.ZP.ackMessageId(t.id),
            isLowImportanceMention: C.ZP.getIsMentionLowImportance(t.id),
        })),
        g = (0, o.e7)([E.ZP], () => E.ZP.resolveUnreadSetting(t)),
        m = (0, o.cj)([O.Z, x.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return {
                canManageChannel: x.Z.can(T.Plq.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    (n.id === A._ ||
                        (null != e ? x.Z.can(T.Plq.MANAGE_CHANNELS, e) : x.Z.can(T.Plq.MANAGE_CHANNELS, n))),
            };
        }),
        j = (0, o.e7)([y.Z], () => y.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: S, isSubscriptionGated: _ } = (0, b.Z)(t.id),
        I = (0, o.e7)([E.ZP], () => E.ZP.isFavorite(n.id, t.id)),
        Z = (0, h.$5)(t),
        N = (0, p.NX)(t.id),
        w = (0, P.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: _,
            needSubscriptionToAccess: S,
            isNewChannel: j,
            muted: a,
            enableActivities: N,
            resolvedUnreadSetting: g,
        }),
        R = (0, f.ZP)(t);
    return (0, r.jsx)(
        L,
        M(D({}, d, m, e), {
            hasActiveThreads: c,
            hasMoreActiveThreads: u,
            isSubscriptionGated: _,
            needSubscriptionToAccess: S,
            isNewChannel: j && e.canBeNewChannel,
            isFavoriteSuggestion: l && !I,
            channelIsContentGated: Z,
            channelInfo: w,
            embeddedApps: R,
            resolvedUnreadSetting: g,
            hasChannelInfo: null != w,
            enableActivities: N,
        }),
    );
}
