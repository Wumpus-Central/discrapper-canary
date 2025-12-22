n.d(t, { Z: () => ts }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(828700),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    g = n(481060),
    m = n(475179),
    b = n(239091),
    y = n(697309),
    O = n(457868),
    x = n(561472),
    j = n(112724),
    v = n(902840),
    C = n(110924),
    I = n(317381),
    _ = n(82888),
    S = n(917107),
    E = n(296797),
    Z = n(622822),
    P = n(100527),
    T = n(413523),
    N = n(358221),
    R = n(598006),
    w = n(677601),
    A = n(541716),
    D = n(236091),
    L = n(663993),
    M = n(252618),
    k = n(201493),
    U = n(266454),
    G = n(174130),
    H = n(588322),
    F = n(591472),
    B = n(446226),
    V = n(517525),
    z = n(445384),
    W = n(613464),
    Y = n(705563),
    q = n(730647),
    K = n(66999),
    Q = n(826763),
    X = n(180216),
    J = n(168843),
    $ = n(442336),
    ee = n(57304),
    et = n(605953),
    en = n(374306),
    er = n(984370),
    ei = n(910611),
    el = n(915718),
    ea = n(518311),
    es = n(882378),
    eo = n(207868),
    ec = n(473065),
    ed = n(576171),
    eu = n(754688),
    ep = n(41776),
    eh = n(370774),
    ef = n(471760),
    eg = n(801604),
    em = n(703656),
    eb = n(359110),
    ey = n(607802),
    eO = n(673676),
    ex = n(6025),
    ej = n(897473),
    ev = n(922482),
    eC = n(504185),
    eI = n(657218),
    e_ = n(407908),
    eS = n(66556),
    eE = n(739830),
    eZ = n(377929),
    eP = n(900157),
    eT = n(108427),
    eN = n(892001),
    eR = n(402130),
    ew = n(271172),
    eA = n(524329),
    eD = n(995532),
    eL = n(738643),
    eM = n(433355),
    ek = n(592125),
    eU = n(703558),
    eG = n(486472),
    eH = n(430824),
    eF = n(158776),
    eB = n(19780),
    eV = n(944486),
    ez = n(914010),
    eW = n(594174),
    eY = n(979651),
    eq = n(933557),
    eK = n(287746),
    eQ = n(325708),
    eX = n(335615),
    eJ = n(992744),
    e$ = n(923029),
    e0 = n(194082),
    e1 = n(176505),
    e4 = n(981631),
    e7 = n(918559),
    e3 = n(354459),
    e8 = n(921944),
    e2 = n(408491),
    e9 = n(440493),
    e5 = n(157925),
    e6 = n(388032),
    te = n(978966);
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
let ti = (0, L.Un)({
    createPromise: () => Promise.all([n.e("22173"), n.e("193")]).then(n.bind(n, 346975)),
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
        (0, eT.e)("guild_channel");
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
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("24783"), n.e("45917")]).then(n.bind(n, 439635));
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
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tr(tn({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = eW.default.getUser(t.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, b.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("66165"), n.e("56826"), n.e("65102")]).then(
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
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e4.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    eC.Z,
                    {
                        channel: e,
                        popoutType: R.P.NO_POPOUT,
                    },
                    e.id,
                );
            case e4.d4z.GUILD_VOICE:
            case e4.d4z.DM:
            case e4.d4z.GROUP_DM:
            case e4.d4z.PUBLIC_THREAD:
            case e4.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    w.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: R.P.NO_POPOUT,
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
        if ((o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(_.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: i } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(Q.Z, { guildId: t.id })
                : (0, r.jsx)(q.l, {
                      guildId: t.id,
                      children: (0, r.jsx)(X.Z, {
                          channelId: e.id,
                          guildId: t.id,
                      }),
                  });
        if (i)
            return (0, r.jsx)(ew.Z, {
                guild: t,
                channelId: e.id,
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, r.jsx)(k.Z, {
                    channel: e,
                    guild: t,
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != t, "forum channels must exist within a guild");
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
                chatInputType: A.Ie.NORMAL,
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
            showActivityPanel: s,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (l === e4.ULH.PROFILE && e.isPrivate() && !a && !s && !c)
            return (0, r.jsx)(eR.Z, { channel: e }, "private-channel-profile-".concat(e.id));
        else if (l === e4.ULH.MEMBERS)
            switch (e.type) {
                case e4.d4z.GROUP_DM:
                    return (0, r.jsx)(ef.Z, { channel: e }, "private-channel-recipients-".concat(e.id));
                case e4.d4z.GUILD_DIRECTORY:
                case e4.d4z.GUILD_FORUM:
                case e4.d4z.GUILD_MEDIA:
                case e4.d4z.GUILD_ANNOUNCEMENT:
                case e4.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e4.TPd.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (d = e.guild_id) ? d : e.id;
                    return (0, r.jsx)(eX.Z, { channel: e }, "channel-members-".concat(u));
                case e4.d4z.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, r.jsx)(eX.Z, { channel: t }, "channel-members-".concat(t.id));
                    break;
                case e4.d4z.PUBLIC_THREAD:
                case e4.d4z.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, r.jsx)(
                            O.Z,
                            {
                                channel: e,
                                guild: n,
                            },
                            "channel-members-".concat(e.id),
                        );
            }
        else if (l === e4.ULH.SEARCH)
            return (0, r.jsx)(eO.Z, {
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
            isUnavailable: s,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                s ||
                i ||
                (o &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e("53900").then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => z.Z.viewPrompt(e9.r.REAL_NAME_PROMPT, t),
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
                            onCloseCallback: () => (0, eA.y0)(t, a),
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
                channelIsContentGated: s,
            } = this.props;
        if (null == l && null == i) return null;
        if (n === e4.ULH.SIDEBAR_CHAT && null != i) {
            if (s) return null;
            switch (i.type) {
                case ej.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eI.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case ej.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? H.Z : eP.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ej.tI.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eP.Z, {
                        channelId: i.channelId,
                        baseChannelId: i.baseChannelId,
                    });
                    break;
                case ej.tI.VIEW_CHANNEL:
                case ej.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== ej.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = l.details;
                return (0, r.jsx)("div", {
                    style: { width: e4.$Y6 },
                    className: te.guildSidebar,
                    children: (0, r.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => ex.Z.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = (null == t ? void 0 : t.type) != null && e4.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e4.PrS - o;
        return (
            (c += y.qO),
            (0, r.jsx)(eQ.Z, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e4.TPd.GUILD_THREADS_ONLY.has(t.type)
                        ? eQ.y.PostSidebar
                        : eQ.y.ThreadSidebar,
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
                section: s,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: d,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(eJ.Z, {});
        if (null == e) return (0, r.jsx)(e$.Z, { channelId: this.props.channelId });
        let f = s === e4.ULH.SIDEBAR_CHAT,
            g = null != c && !f,
            m = !e.isForumLikeChannel() && !o,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(M.yY, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e4.d4z.GUILD_VOICE,
                    className: a()(te.chat, {
                        [te.threadSidebarOpen]: f || g,
                        [te.threadSidebarFloating]: f && p,
                    }),
                    children: [
                        m
                            ? (0, r.jsx)(x.Z, {
                                  style: { right: f ? u : void 0 },
                                  className: te.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage,
                              })
                            : null,
                        h || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: a()(te.content, { [te.noChat]: l === e4.AEg.NO_CHAT }),
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
                null != e && (0, eb.Kh)(e.id);
            }),
            tt(this, "_handleContextMenu", (e, t) => {
                switch (t.type) {
                    case e4.d4z.GUILD_VOICE:
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e4.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tt(this, "handleContextMenu", (e) => {
                o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
                    this._handleContextMenu(e, this.props.channel);
            }),
            tt(this, "handleParentContextMenu", (e) => {
                o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
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
                o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"),
                    (0, eN.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [P.Z.CHANNEL_HEADER],
                    });
            }),
            tt(this, "renderJoinRequestInterviewButtons", () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(Y.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0,
                      })
                    : null;
            }),
            tt(this, "renderClipsEnabledIndicatorToolbarItem", () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(D.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tt(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e3.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          V.Z,
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
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let s = [];
                if (e.isSystemDM()) return s;
                switch (e.type) {
                    case e4.d4z.GUILD_STAGE_VOICE:
                    case e4.d4z.GUILD_VOICE:
                        break;
                    case e4.d4z.DM:
                        s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(el.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            s.push(
                                (0, r.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: e6.intl.string(e6.t.Xjlbvs),
                                        location: "ChannelHeaderToolbar-DM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a,
                                    },
                                    "profile",
                                ),
                            ),
                            s.push((0, r.jsx)(es.Z, { channel: e }, "safety_tools"));
                        break;
                    case e4.d4z.GROUP_DM:
                        if (
                            (s.push(this.renderJoinRequestInterviewButtons()),
                            s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(el.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            !e.isManaged())
                        ) {
                            let t = e6.intl.string(e6.t.Xjlbvs);
                            s.push(
                                (0, r.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: "ChannelHeaderToolbar-GroupDM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            );
                        }
                        s.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                        e.isModeratorReportChannel() && s.push((0, r.jsx)(e_.Z, { channel: e })),
                            null == t || t.isForumLikeChannel() || s.push((0, r.jsx)(eS.Z, { channel: t }, "browser")),
                            e.isVocalThread() && s.push((0, r.jsx)(eo.Z, { channel: e }, "thread-call")),
                            s.push((0, r.jsx)(eE.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            e.isArchivedThread() || s.push((0, r.jsx)(J.Z, { channelId: e.id }, "members")),
                            null != t && (0, v.Lp)(e) && s.push((0, r.jsx)(et.Z, { channel: e }, "summaries")),
                            s.push((0, r.jsx)(eZ.Z, { channel: e }, "threads-overflow"));
                        break;
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                        s.push((0, r.jsx)(G.Z, { channel: e }, "favorites")),
                            s.push((0, r.jsx)(eS.Z, { channel: e }, "browser")),
                            n || s.push((0, r.jsx)($.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(ee.Z, { channel: e }, "pins")),
                            s.push((0, r.jsx)(J.Z, { channelId: e.id }, "members")),
                            (0, v.Lp)(e) && s.push((0, r.jsx)(et.Z, { channel: e }, "summaries"));
                        break;
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                        n ||
                            (s.push((0, r.jsx)(en.Z, { channel: e }, "forum-onboarding")),
                            s.push((0, r.jsx)($.Z, { channel: e }, "notifications"))),
                            __OVERLAY__ || s.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.GUILD_DIRECTORY:
                        s.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                }
                return s;
            }),
            tt(this, "renderMobileToolbar", () => {
                let { channel: e } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e4.d4z.GUILD_STAGE_VOICE:
                    case e4.d4z.GUILD_VOICE:
                    case e4.d4z.DM:
                        break;
                    case e4.d4z.GROUP_DM:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                        break;
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                    case e4.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(J.Z, { channelId: e.id }, "members"));
                }
                return t;
            }),
            tt(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)("div", {
                          className: te.followButton,
                          children: (0, r.jsx)(g.Button, {
                              variant: "secondary",
                              size: "sm",
                              text: e6.intl.string(e6.t["3aOv+h"]),
                              onClick: () =>
                                  (0, g.ZDy)(async () => {
                                      let { default: e } = await n.e("96964").then(n.bind(n, 807007));
                                      return (n) => (0, r.jsx)(e, tn({ channel: t }, n));
                                  }),
                          }),
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
                    showCall: s,
                    showActivityPanel: c,
                    showFramePanel: d,
                    hasVideo: u,
                    showHeaderGuildBreadcrumb: p,
                    isFavorites: h,
                } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderBar"),
                    o()(null != t, "Should not be null if channel is not null.");
                let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, eb.Kh)(e.id) : void 0,
                    m =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    b = c || d,
                    y = s || b;
                return (0, r.jsxs)("div", {
                    className: te.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: u && s ? e4.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    er.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, ey.X$)()),
                                        showDivider: h && !(0, ey.X$)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(te.title, s, { [te.gdm]: e.type === e4.d4z.GROUP_DM }),
                                        transparent: y,
                                        hidden: d,
                                        "aria-label": e6.intl.string(e6.t.BIYAqa),
                                        children: [
                                            p &&
                                                (0, r.jsx)(ei.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: "right",
                                                }),
                                            (0, ei.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: f,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)("div", {
                                                      className: te.followButton,
                                                      children: (0, r.jsx)(g.Button, {
                                                          onClick: () => (0, em.XU)(e.guild_id, e.id),
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: e6.intl.string(e6.t.k5WiPf),
                                                      }),
                                                  })
                                                : (0, ei.v0)(e, i),
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
    ts = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            s = (0, p.e7)([eV.Z], () => eV.Z.getChannelId()),
            o = (0, p.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
            c = (0, p.e7)([ek.Z], () => (null != n ? n : ek.Z.getChannel(s)), [s, n]),
            g = (0, p.e7)([ek.Z], () => ek.Z.getChannel(o), [o]),
            b = null == c ? void 0 : c.parent_id,
            y = (0, p.e7)([ek.Z], () => ek.Z.getChannel(b), [b]),
            O = (0, p.e7)([eH.Z], () => eH.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: x } = (0, K.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            j = (0, p.e7)([N.Z], () => {
                let e = null != s ? N.Z.getParticipants(s) : [],
                    t = null != s ? N.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            }, [s]),
            _ = (0, B.Z)(),
            P = (0, p.e7)([eV.Z], () => {
                var e;
                return (
                    (null != (e = null == _ ? void 0 : _.channelId) ? e : eV.Z.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            R = (0, p.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            w = (0, p.e7)([eB.Z], () => eB.Z.isConnected()),
            A = (0, C.Z)(w),
            D = w && !1 === A;
        i.useEffect(() => {
            P &&
                D &&
                null != R &&
                null != c &&
                m.Z.selectParticipant(
                    c.id,
                    (0, T.gN)({
                        applicationId: R.applicationId,
                        instanceId: R.compositeInstanceId,
                    }),
                );
        }, [D, c, P, R]);
        let L = (0, p.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            M = (0, p.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            k = null != L && !(0, S.Z)(null == c ? void 0 : c.id) && M === e7.Ez.PANEL,
            G = (0, p.e7)(
                [eY.Z],
                () => null != c && c.isVocalThread() && !d().isEmpty(eY.Z.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            H = null != c && c.isPrivate() && !k && j,
            V = (null == c ? void 0 : c.isGuildVocal()) || H || G,
            z = (0, p.e7)([F.Z], () => F.Z.getFrameLayoutMode() === e2.U.FOCUSED),
            { welcomeModalChannelId: W } = (0, u.TH)(),
            Y = (0, p.e7)([ep.Z], () => null != c && ep.Z.isLurking(c.guild_id), [c]),
            q = (0, p.e7)([eD.Z], () => eD.Z.hasSeen(null == c ? void 0 : c.guild_id, Y), [c, Y]),
            Q = (0, p.e7)(
                [N.Z, I.ZP],
                () =>
                    null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e7.Ez.PANEL
                        ? I.ZP.getFocusedLayout() === e7.MI.NO_CHAT
                            ? e4.AEg.NO_CHAT
                            : e4.AEg.NORMAL
                        : null != s
                          ? N.Z.getLayout(s)
                          : e4.AEg.NORMAL,
                [s],
            ),
            X = (0, p.e7)([N.Z], () => (null != c ? N.Z.getSelectedParticipant(c.id) : null)),
            J = (0, Z.$5)(c),
            $ = (0, ed.Z)(null == O ? void 0 : O.id),
            ee = (0, eL.Z)(W, null == O ? void 0 : O.id),
            { section: et, channelSidebarState: en } = (0, p.cj)(
                [eM.ZP],
                () => ({
                    section: eM.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eM.ZP.getSidebarState(s),
                }),
                [s, c],
            ),
            er = null == O ? void 0 : O.id,
            ei = (0, p.e7)([eM.ZP], () => eM.ZP.getGuildSidebarState(er), [er]),
            el = (0, p.e7)([ez.Z], () => ez.Z.getGuildId()) === e4.I_8,
            ea = (0, eh.D)(),
            es = (0, eq.ZP)(c),
            eo = (0, eq.ZP)(c, !0),
            ec = null != c && o === c.id,
            ef = null != c && c.isGuildStageVoice();
        (0, E.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, em.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e5.Df) {
                    let { channelId: e } =
                        null != (n = (0, eu.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let eg = {
                channel: c,
                inCurrentVoiceChannel: ec,
            },
            eb = i.useRef(eg);
        i.useEffect(() => {
            eb.current = eg;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eb.current;
                null != l && null != e && ef && e.id === l && !t && ((0, ev.Cq)(e), a(null));
            }, [l, ef]);
        let ey = (0, v.ts)(c),
            eO = null != c && c.isPrivate(),
            ex = (0, C.Z)(eO),
            ej = (0, C.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ex && !eO,
                t = ex && eO && (null == c ? void 0 : c.id) !== ej;
            (e || t) && (0, U.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e8.L.AUTO });
        }, [null == c ? void 0 : c.id, ej, eO, ex]);
        let eC = (0, f.useHasAnyModalOpen)();
        return (0, r.jsx)(
            ta,
            tr(
                tn(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: s,
                        channel: c,
                        channelName: es,
                        formattedChannelName: eo,
                        parentChannel: y,
                        voiceChannel: g,
                        layout: Q,
                        needSubscriptionToAccess: x,
                        isLurking: Y,
                        hasModalOpen: eC,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: ei,
                        guild: O,
                        showCall: !x && V,
                        showActivityPanel: k,
                        showFramePanel: z,
                        channelIsContentGated: J,
                        isMobile: (0, p.e7)(
                            [eF.Z],
                            () =>
                                (null == c ? void 0 : c.type) === e4.d4z.DM && eF.Z.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, p.e7)(
                            [eG.Z],
                            () => (null == c ? void 0 : c.guild_id) != null && eG.Z.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: $,
                        showWelcomeModal: !q && ee,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e4.d4z.GUILD_ANNOUNCEMENT &&
                                (null == O ? void 0 : O.features.has(e4.GuildFeatures.NEWS))) ||
                            !1,
                    },
                    (0, p.cj)([eY.Z], () => ({ hasVideo: null != c && eY.Z.hasVideo(c.id) }), [c]),
                ),
                {
                    inCall: ec,
                    selectedParticipant: X,
                    showChannelSummaries: ey,
                    isFavorites: el,
                    showHeaderGuildBreadcrumb: el || ea,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: k,
                    embeddedActivity: L,
                },
            ),
        );
    });
