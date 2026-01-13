n.d(t, { Z: () => B }), n(388685);
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
    j = n(271383),
    x = n(430824),
    C = n(496675),
    E = n(19780),
    S = n(306680),
    _ = n(9156),
    I = n(594174),
    P = n(109446),
    Z = n(98597),
    N = n(648501),
    T = n(473403),
    A = n(304471),
    w = n(981631),
    R = n(647086),
    D = n(642915);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
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
class U extends Z.ZP {
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
                  className: D.channelInfo,
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
                    [D.disabled]: this.isDisabled(),
                    [D.selected]: n,
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
                        (0, r.jsxs)(T.ZP, {
                            ref: this.channelItemRef,
                            className: D.iconVisibility,
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
                            channelTypeOverride: O ? w.d4z.GUILD_TEXT : void 0,
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
            M(this, "state", {
                shouldShowThreadsPopout: !1,
                shouldShowActivities: !1,
            }),
            M(this, "channelItemRef", i.createRef()),
            M(this, "enterTimer", 0),
            M(this, "exitTimer", 0),
            M(this, "handleMouseEnter", () => {
                (this.props.channelIsContentGated && null == this.props.embeddedApps) ||
                    (this.resetTextChannelPopoutTimers(),
                    (this.enterTimer = setTimeout(() => {
                        null != this.props.embeddedApps && this.props.embeddedApps.length > 0
                            ? this.setState({ shouldShowActivities: !0 })
                            : this.props.channelIsContentGated || this.setState({ shouldShowThreadsPopout: !0 });
                    }, 200)));
            }),
            M(this, "handleMouseLeave", () => {
                this.resetTextChannelPopoutTimers(),
                    (this.exitTimer = setTimeout(() => {
                        this.state.shouldShowActivities && this.setState({ shouldShowActivities: !1 }),
                            this.state.shouldShowThreadsPopout && this.setState({ shouldShowThreadsPopout: !1 });
                    }, 250));
            }),
            M(this, "handleThreadsPopoutClose", () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowThreadsPopout: !1 });
            }),
            M(this, "handleActivitiesPopoutClose", () => {
                this.resetTextChannelPopoutTimers(), this.setState({ shouldShowActivities: !1 });
            }),
            M(this, "handleClosePopout", () => {
                this.state.shouldShowActivities && this.handleActivitiesPopoutClose(),
                    this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose();
            }),
            M(this, "handleMouseDown", () => {
                this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                let { channel: e } = this.props,
                    t = e.getGuildId();
                c.Z.preload(null != t ? t : w.ME, e.id);
            }),
            M(this, "renderPopout", (e) => {
                let { channel: t, sorting: n, embeddedApps: i, channelIsContentGated: l } = this.props,
                    { shouldShowActivities: a } = this.state;
                return t.isModeratorReportChannel() || l
                    ? null
                    : null != i && i.length > 0 && a && !n
                      ? (0, r.jsx)(A.Z, {
                            onAction: this.handleActivitiesPopoutClose,
                            channel: t,
                        })
                      : (0, r.jsx)(P.Z, L(k({}, e), { channel: this.props.channel }));
            }),
            M(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props;
                if (t.type === w.d4z.GROUP_DM)
                    return void (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(k({}, n), {
                                    channel: t,
                                    selected: !0,
                                }),
                            );
                    });
                if (t.type === w.d4z.DM) {
                    let i = I.default.getUser(t.getRecipientId());
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
                                    L(k({}, n), {
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
                        return (n) => (0, r.jsx)(e, L(k({}, n), { channel: t }));
                    });
                let i = x.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, u.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(
                            n.bind(n, 373651),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                L(k({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            });
    }
}
let G = (0, d.B)(U);
function B(e) {
    let { channel: t, guild: n, disableSorting: i, isFavoriteCategory: l, muted: a, selected: s } = e,
        { hasActiveThreads: c, hasMoreActiveThreads: u } = (0, v.JQ)(t),
        d = (0, o.cj)([S.ZP], () => ({
            unread: S.ZP.hasUnread(t.id),
            ackMessageId: S.ZP.ackMessageId(t.id),
            isLowImportanceMention: S.ZP.getIsMentionLowImportance(t.id),
        })),
        g = (0, o.e7)([_.ZP], () => _.ZP.resolveUnreadSetting(t)),
        m = (0, o.cj)([O.Z, C.Z], () => {
            let e = O.Z.getChannel(t.parent_id);
            return {
                canManageChannel: C.Z.can(w.Plq.MANAGE_CHANNELS, t),
                canReorderChannel:
                    !0 !== i &&
                    (n.id === R._ ||
                        (null != e ? C.Z.can(w.Plq.MANAGE_CHANNELS, e) : C.Z.can(w.Plq.MANAGE_CHANNELS, n))),
            };
        }),
        x = (0, o.e7)([y.Z], () => y.Z.shouldIndicateNewChannel(n.id, t.id)),
        { needSubscriptionToAccess: I, isSubscriptionGated: P } = (0, b.Z)(t.id),
        Z = (0, o.e7)([_.ZP], () => _.ZP.isFavorite(n.id, t.id)),
        T = (0, h.$5)(t),
        A = (0, p.NX)(t.id),
        D = (0, N.Z)({
            channel: t,
            isChannelCollapsed: !1,
            isChannelSelected: s,
            isSubscriptionGated: P,
            needSubscriptionToAccess: I,
            isNewChannel: x,
            muted: a,
            enableActivities: A,
            resolvedUnreadSetting: g,
        }),
        M = (0, f.ZP)(t);
    return (0, o.e7)([E.Z, j.ZP], () => E.Z.getChannelId() !== t.id && j.ZP.isCurrentUserGuest(t.getGuildId()))
        ? null
        : (0, r.jsx)(
              G,
              L(k({}, d, m, e), {
                  hasActiveThreads: c,
                  hasMoreActiveThreads: u,
                  isSubscriptionGated: P,
                  needSubscriptionToAccess: I,
                  isNewChannel: x && e.canBeNewChannel,
                  isFavoriteSuggestion: l && !Z,
                  channelIsContentGated: T,
                  channelInfo: D,
                  embeddedApps: M,
                  resolvedUnreadSetting: g,
                  hasChannelInfo: null != D,
                  enableActivities: A,
              }),
          );
}
