n.d(t, { Z: () => to }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(843611),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    m = n(755721),
    g = n(481060),
    b = n(475179),
    y = n(239091),
    _ = n(377993),
    C = n(697309),
    v = n(457868),
    x = n(561472),
    O = n(36311),
    j = n(112724),
    E = n(902840),
    S = n(110924),
    I = n(317381),
    P = n(82888),
    Z = n(917107),
    T = n(296797),
    N = n(622822),
    A = n(100527),
    w = n(413523),
    R = n(358221),
    M = n(677601),
    D = n(541716),
    L = n(236091),
    k = n(663993),
    U = n(252618),
    B = n(201493),
    G = n(266454),
    H = n(174130),
    F = n(588322),
    V = n(591472),
    z = n(446226),
    W = n(517525),
    q = n(445384),
    Y = n(613464),
    K = n(705563),
    X = n(730647),
    Q = n(66999),
    J = n(826763),
    $ = n(180216),
    ee = n(168843),
    et = n(442336),
    en = n(57304),
    er = n(605953),
    ei = n(374306),
    el = n(984370),
    ea = n(910611),
    eo = n(915718),
    es = n(518311),
    ec = n(882378),
    eu = n(207868),
    ed = n(473065),
    ep = n(576171),
    eh = n(754688),
    ef = n(41776),
    em = n(370774),
    eg = n(134483),
    eb = n(703656),
    ey = n(359110),
    e_ = n(607802),
    eC = n(14091),
    ev = n(6025),
    ex = n(897473),
    eO = n(922482),
    ej = n(504185),
    eE = n(657218),
    eS = n(407908),
    eI = n(66556),
    eP = n(739830),
    eZ = n(377929),
    eT = n(900157),
    eN = n(108427),
    eA = n(892001),
    ew = n(402130),
    eR = n(524329),
    eM = n(995532),
    eD = n(738643),
    eL = n(433355),
    ek = n(592125),
    eU = n(703558),
    eB = n(486472),
    eG = n(430824),
    eH = n(158776),
    eF = n(19780),
    eV = n(944486),
    ez = n(914010),
    eW = n(594174),
    eq = n(979651),
    eY = n(933557),
    eK = n(287746),
    eX = n(325708),
    eQ = n(335615),
    eJ = n(992744),
    e$ = n(923029),
    e0 = n(194082),
    e1 = n(176505),
    e2 = n(981631),
    e8 = n(918559),
    e3 = n(354459),
    e4 = n(921944),
    e7 = n(408491),
    e6 = n(440493),
    e5 = n(157925),
    e9 = n(388032),
    te = n(161655);
function tt(e, t, n) {
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
function tn(e) {
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
                tt(e, t, n[t]);
            });
    }
    return e;
}
function tr(e, t) {
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
let ti = (0, k.Un)({
    createPromise: () => Promise.all([n.e("22173"), n.e("76892")]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: te.loader,
            children: (0, r.jsx)(g.$jN, {}),
        }),
    name: "ForumChannel",
});
class tl extends i.PureComponent {
    componentDidMount() {
        (0, eN.e)("guild_channel");
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        s()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            s()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await n.e("24783").then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tr(tn({}, n), {
                            channel: t,
                            guild: i,
                        }),
                    );
            });
    }
    openThreadContextMenu(e, t) {
        s()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tr(tn({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = eW.default.getUser(t.getRecipientId());
        s()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("55599")]).then(
                    n.bind(n, 131404),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tr(tn({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t,
                        }),
                    );
            });
    }
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t } = this.props;
        return !t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((s()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e2.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(ej.Z, { channel: e }, e.id);
            case e2.d4z.GUILD_VOICE:
            case e2.d4z.DM:
            case e2.d4z.GROUP_DM:
            case e2.d4z.PUBLIC_THREAD:
            case e2.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    M.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                    },
                    "call-".concat(e.id),
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((s()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(P.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: i } = this.props;
        if ((s()(null != e, "Missing channel in Channel.renderChat"), n))
            return (s()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(J.Z, { guildId: t.id })
                : (0, r.jsx)(X.l, {
                      guildId: t.id,
                      children: (0, r.jsx)($.Z, {
                          channelId: e.id,
                          guildId: t.id,
                      }),
                  });
        if (i)
            return (0, r.jsx)(O.Z, {
                guild: t,
                channelId: e.id,
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                s()(null != t, "directory channels must exist within a guild"),
                (0, r.jsx)(B.Z, {
                    channel: e,
                    guild: t,
                })
            );
        if (e.isForumLikeChannel()) {
            s()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, r.jsx)(
                ti,
                {
                    channel: e,
                    guild: t,
                    sidebarState: n,
                },
                e.id,
            );
        }
        return (0, r.jsx)(
            eK.Z,
            {
                channel: e,
                guild: t,
                chatInputType: D.Ie.NORMAL,
            },
            null != t ? t.id : "home",
        );
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: i,
            section: l,
            showCall: a,
            showActivityPanel: o,
            showFramePanel: c,
        } = this.props;
        if ((s()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (l === e2.ULH.PROFILE && e.isPrivate() && !a && !o && !c)
            return (0, r.jsx)(ew.Z, { channel: e }, "private-channel-profile-".concat(e.id));
        else if (l === e2.ULH.MEMBERS)
            switch (e.type) {
                case e2.d4z.GROUP_DM:
                    return (0, r.jsx)(_.Z, { channel: e }, "private-channel-recipients-".concat(e.id));
                case e2.d4z.GUILD_DIRECTORY:
                case e2.d4z.GUILD_FORUM:
                case e2.d4z.GUILD_MEDIA:
                case e2.d4z.GUILD_ANNOUNCEMENT:
                case e2.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e2.TPd.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (u = e.guild_id) ? u : e.id;
                    return (0, r.jsx)(eQ.Z, { channel: e }, "channel-members-".concat(d));
                case e2.d4z.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, r.jsx)(eQ.Z, { channel: t }, "channel-members-".concat(t.id));
                    break;
                case e2.d4z.PUBLIC_THREAD:
                case e2.d4z.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, r.jsx)(
                            v.Z,
                            {
                                channel: e,
                                guild: n,
                            },
                            "channel-members-".concat(e.id),
                        );
            }
        else if (l === e2.ULH.SEARCH)
            return (0, r.jsx)(eC.Z, {
                guildId: null == n ? void 0 : n.id,
                channelId: e.id,
            });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: i,
            showWelcomeModal: l,
            isLurking: a,
            isUnavailable: o,
            showRealNameModal: s,
        } = this.props;
        return (
            null == e ||
                null == t ||
                o ||
                i ||
                (s &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("53900").then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => q.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("90542").then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eR.y0)(t, a),
                            modalKey: "Guild Welcome Screen Modal",
                        },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: t,
                section: n,
                channelSidebarState: i,
                guildSidebarState: l,
                width: a,
                channelIsContentGated: o,
            } = this.props;
        if (null == l && null == i) return null;
        if (n === e2.ULH.SIDEBAR_CHAT && null != i) {
            if (o) return null;
            switch (i.type) {
                case ex.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eE.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case ex.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.Z : eT.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ex.tI.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eT.Z, {
                        channelId: i.channelId,
                        baseChannelId: i.baseChannelId,
                    });
                    break;
                case ex.tI.VIEW_CHANNEL:
                case ex.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== ex.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)("div", {
                    style: { width: e2.$Y6 },
                    className: te.guildSidebar,
                    children: (0, r.jsx)(Y.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ev.Z.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let s = (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e2.PrS - s;
        return (
            (c += C.qO),
            (0, r.jsx)(eX.Z, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type)
                        ? eX.y.PostSidebar
                        : eX.y.ThreadSidebar,
                maxWidth: c,
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: t,
                formattedChannelName: n,
                isUnavailable: i,
                layout: l,
                section: o,
                hasModalOpen: s,
                guildSidebarState: c,
                hasTextActivityInPanelMode: u,
            } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(eJ.Z, {});
        if (null == e) return (0, r.jsx)(e$.Z, { channelId: this.props.channelId });
        let f = o === e2.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(U.yY, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e2.d4z.GUILD_VOICE,
                    className: a()(te.chat, {
                        [te.threadSidebarOpen]: f || m,
                        [te.threadSidebarFloating]: f && p,
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(x.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: te.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage,
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: a()(te.content, { [te.noChat]: l === e2.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            tt(this, "state", {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1,
            }),
            tt(this, "handleTitleParentClick", () => {
                let { parentChannel: e } = this.props;
                null != e && (0, ey.Kh)(e.id);
            }),
            tt(this, "_handleContextMenu", (e, t) => {
                switch (t.type) {
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e2.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tt(this, "handleContextMenu", (e) => {
                s()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
                    this._handleContextMenu(e, this.props.channel);
            }),
            tt(this, "handleParentContextMenu", (e) => {
                s()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
                    this._handleContextMenu(e, this.props.parentChannel);
            }),
            tt(this, "handleThreadSidebarResize", (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t,
                });
            }),
            tt(this, "openUserProfile", () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [A.Z.CHANNEL_HEADER],
                    });
            }),
            tt(this, "renderJoinRequestInterviewButtons", () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(K.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0,
                      })
                    : null;
            }),
            tt(this, "renderClipsEnabledIndicatorToolbarItem", () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(L.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tt(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e3.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          W.Z,
                          {
                              size: e0.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t,
                          },
                          "live-indicator",
                      );
            }),
            tt(this, "renderHeaderToolbar", () => {
                let {
                    channel: e,
                    parentChannel: t,
                    isLurking: n,
                    showCall: i,
                    showActivityPanel: l,
                    showFramePanel: a,
                } = this.props;
                s()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                        break;
                    case e2.d4z.DM:
                        o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(eo.Z, { channel: e }, "calls")),
                            o.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            o.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: e9.intl.string(e9.t.Xjlbvr),
                                        location: "ChannelHeaderToolbar-DM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            ),
                            o.push(
                                (0, r.jsx)(
                                    ed.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a,
                                    },
                                    "profile",
                                ),
                            ),
                            o.push((0, r.jsx)(ec.Z, { channel: e }, "safety_tools"));
                        break;
                    case e2.d4z.GROUP_DM:
                        if (
                            (o.push(this.renderJoinRequestInterviewButtons()),
                            o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(eo.Z, { channel: e }, "calls")),
                            o.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            !e.isManaged())
                        ) {
                            let t = e9.intl.string(e9.t.Xjlbvr);
                            o.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: "ChannelHeaderToolbar-GroupDM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            );
                        }
                        o.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        e.isModeratorReportChannel() && o.push((0, r.jsx)(eS.Z, { channel: e })),
                            null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(eI.Z, { channel: t }, "browser")),
                            e.isVocalThread() && o.push((0, r.jsx)(eu.Z, { channel: e }, "thread-call")),
                            o.push((0, r.jsx)(eP.Z, { channel: e }, "notifications")),
                            o.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            e.isArchivedThread() || o.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            null != t && (0, E.Lp)(e) && o.push((0, r.jsx)(er.Z, { channel: e }, "summaries")),
                            o.push((0, r.jsx)(eZ.Z, { channel: e }, "threads-overflow"));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                        o.push((0, r.jsx)(H.Z, { channel: e }, "favorites")),
                            o.push((0, r.jsx)(eI.Z, { channel: e }, "browser")),
                            n || o.push((0, r.jsx)(et.Z, { channel: e }, "notifications")),
                            o.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            o.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            (0, E.Lp)(e) && o.push((0, r.jsx)(er.Z, { channel: e }, "summaries"));
                        break;
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        n ||
                            (o.push((0, r.jsx)(ei.Z, { channel: e }, "forum-onboarding")),
                            o.push((0, r.jsx)(et.Z, { channel: e }, "notifications"))),
                            __OVERLAY__ || o.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e2.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                }
                return o;
            }),
            tt(this, "renderMobileToolbar", () => {
                let { channel: e } = this.props;
                s()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.DM:
                        break;
                    case e2.d4z.GROUP_DM:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                    case e2.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                }
                return t;
            }),
            tt(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zx, {
                          size: m.zx.Sizes.MIN,
                          color: m.zx.Colors.PRIMARY,
                          className: te.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e("54642").then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tn({ channel: t }, n));
                              }),
                          children: e9.intl.string(e9.t["3aOv+v"]),
                      })
                    : null;
            }),
            tt(this, "renderHeaderBar", () => {
                let {
                    channel: e,
                    channelName: t,
                    parentChannel: n,
                    guild: i,
                    guildId: l,
                    showCall: o,
                    showActivityPanel: c,
                    showFramePanel: u,
                    hasVideo: d,
                    showHeaderGuildBreadcrumb: p,
                    isFavorites: h,
                } = this.props;
                s()(null != e, "Missing channel in Channel.renderHeaderBar"),
                    s()(null != t, "Should not be null if channel is not null.");
                let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, ey.Kh)(e.id) : void 0,
                    b =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    y = c || u,
                    _ = o || y;
                return (0, r.jsxs)("div", {
                    className: te.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: d && o ? e2.BRd.DARK : void 0,
                            children: (o) =>
                                (0, r.jsxs)(
                                    el.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, e_.X$)()),
                                        showDivider: h && !(0, e_.X$)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(te.title, o, { [te.gdm]: e.type === e2.d4z.GROUP_DM }),
                                        transparent: _,
                                        hidden: u,
                                        "aria-label": e9.intl.string(e9.t.BIYAqa),
                                        children: [
                                            p &&
                                                (0, r.jsx)(ea.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: "right",
                                                }),
                                            (0, ea.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: f,
                                                handleParentClick: b,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)(m.zx, {
                                                      onClick: () => (0, eb.XU)(e.guild_id, e.id),
                                                      className: te.followButton,
                                                      look: m.zx.Looks.FILLED,
                                                      color: m.zx.Colors.PRIMARY,
                                                      size: m.zx.Sizes.MIN,
                                                      children: e9.intl.string(e9.t.k5WiPT),
                                                  })
                                                : (0, ea.v0)(e, i),
                                        ],
                                    },
                                    "header-".concat(e.id),
                                ),
                        }),
                        (0, r.jsx)(eg.Z, { channelId: e.id }),
                    ],
                });
            });
    }
}
let ta = (0, j.Z)(tl),
    to = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, p.e7)([eV.Z], () => eV.Z.getChannelId()),
            s = (0, p.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
            c = (0, p.e7)([ek.Z], () => (null != n ? n : ek.Z.getChannel(o)), [o, n]),
            m = (0, p.e7)([ek.Z], () => ek.Z.getChannel(s), [s]),
            g = null == c ? void 0 : c.parent_id,
            y = (0, p.e7)([ek.Z], () => ek.Z.getChannel(g), [g]),
            _ = (0, p.e7)([eG.Z], () => eG.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: C } = (0, Q.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            v = (0, p.e7)([R.Z], () => {
                let e = null != o ? R.Z.getParticipants(o) : [],
                    t = null != o ? R.Z.getActivityParticipants(o) : [];
                return e.length - t.length > 0;
            }, [o]),
            x = (0, z.Z)(),
            O = (0, p.e7)([eV.Z], () => {
                var e;
                return (
                    (null != (e = null == x ? void 0 : x.channelId) ? e : eV.Z.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            j = (0, p.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            P = (0, p.e7)([eF.Z], () => eF.Z.isConnected()),
            A = (0, S.Z)(P),
            M = P && !1 === A;
        i.useEffect(() => {
            O &&
                M &&
                null != j &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, w.gN)({
                        applicationId: j.applicationId,
                        instanceId: j.compositeInstanceId,
                    }),
                );
        }, [M, c, O, j]);
        let D = (0, p.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            L = (0, p.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            k = null != D && !(0, Z.Z)(null == c ? void 0 : c.id) && L === e8.Ez.PANEL,
            U = (0, p.e7)(
                [eq.Z],
                () => null != c && c.isVocalThread() && !u().isEmpty(eq.Z.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            B = null != c && c.isPrivate() && !k && v,
            H = (null == c ? void 0 : c.isGuildVocal()) || B || U,
            F = (0, p.e7)([V.Z], () => V.Z.getFrameLayoutMode() === e7.U.FOCUSED),
            { welcomeModalChannelId: W } = (0, d.TH)(),
            q = (0, p.e7)([ef.Z], () => null != c && ef.Z.isLurking(c.guild_id), [c]),
            Y = (0, p.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, q), [c, q]),
            K = (0, p.e7)(
                [R.Z, I.ZP],
                () =>
                    null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e8.Ez.PANEL
                        ? I.ZP.getFocusedLayout() === e8.MI.NO_CHAT
                            ? e2.AEg.NO_CHAT
                            : e2.AEg.NORMAL
                        : null != o
                          ? R.Z.getLayout(o)
                          : e2.AEg.NORMAL,
                [o],
            ),
            X = (0, p.e7)([R.Z], () => (null != c ? R.Z.getSelectedParticipant(c.id) : null)),
            J = (0, N.$5)(c),
            $ = (0, ep.Z)(null == _ ? void 0 : _.id),
            ee = (0, eD.Z)(W, null == _ ? void 0 : _.id),
            { section: et, channelSidebarState: en } = (0, p.cj)(
                [eL.ZP],
                () => ({
                    section: eL.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eL.ZP.getSidebarState(o),
                }),
                [o, c],
            ),
            er = null == _ ? void 0 : _.id,
            ei = (0, p.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(er), [er]),
            el = (0, p.e7)([ez.Z], () => ez.Z.getGuildId()) === e2.I_8,
            ea = (0, em.D)(),
            eo = (0, eY.ZP)(c),
            es = (0, eY.ZP)(c, !0),
            ec = null != c && s === c.id,
            eu = null != c && c.isGuildStageVoice();
        (0, T.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eb.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e5.Df) {
                    let { channelId: e } =
                        null != (n = (0, eh.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let ed = {
                channel: c,
                inCurrentVoiceChannel: ec,
            },
            eg = i.useRef(ed);
        i.useEffect(() => {
            eg.current = ed;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eg.current;
                null != l && null != e && eu && e.id === l && !t && ((0, eO.Cq)(e), a(null));
            }, [l, eu]);
        let ey = (0, E.ts)(c),
            e_ = null != c && c.isPrivate(),
            eC = (0, S.Z)(e_),
            ev = (0, S.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = eC && !e_,
                t = eC && e_ && (null == c ? void 0 : c.id) !== ev;
            (e || t) && (0, G.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, ev, e_, eC]);
        let ex = (0, f.f9)();
        return (0, r.jsx)(
            ta,
            tr(
                tn(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: eo,
                        formattedChannelName: es,
                        parentChannel: y,
                        voiceChannel: m,
                        layout: K,
                        needSubscriptionToAccess: C,
                        isLurking: q,
                        hasModalOpen: ex,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: ei,
                        guild: _,
                        showCall: !C && H,
                        showActivityPanel: k,
                        showFramePanel: F,
                        channelIsContentGated: J,
                        isMobile: (0, p.e7)(
                            [eH.Z],
                            () =>
                                (null == c ? void 0 : c.type) === e2.d4z.DM && eH.Z.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, p.e7)(
                            [eB.Z],
                            () => (null == c ? void 0 : c.guild_id) != null && eB.Z.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: $,
                        showWelcomeModal: !Y && ee,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e2.d4z.GUILD_ANNOUNCEMENT &&
                                (null == _ ? void 0 : _.features.has(e2.oNc.NEWS))) ||
                            !1,
                    },
                    (0, p.cj)([eq.Z], () => ({ hasVideo: null != c && eq.Z.hasVideo(c.id) }), [c]),
                ),
                {
                    inCall: ec,
                    selectedParticipant: X,
                    showChannelSummaries: ey,
                    isFavorites: el,
                    showHeaderGuildBreadcrumb: el || ea,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: k,
                    embeddedActivity: D,
                },
            ),
        );
    });
