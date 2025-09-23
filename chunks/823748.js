n.d(t, { Z: () => ts }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(843611),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    g = n(755721),
    m = n(481060),
    b = n(475179),
    y = n(239091),
    _ = n(377993),
    O = n(697309),
    j = n(457868),
    x = n(561472),
    v = n(36311),
    C = n(112724),
    I = n(902840),
    E = n(110924),
    S = n(317381),
    Z = n(82888),
    P = n(917107),
    T = n(296797),
    N = n(622822),
    R = n(100527),
    w = n(413523),
    A = n(358221),
    D = n(677601),
    L = n(541716),
    M = n(236091),
    k = n(663993),
    U = n(252618),
    G = n(201493),
    H = n(266454),
    F = n(174130),
    B = n(588322),
    z = n(591472),
    V = n(446226),
    W = n(517525),
    Y = n(445384),
    q = n(613464),
    K = n(705563),
    Q = n(730647),
    X = n(66999),
    J = n(826763),
    $ = n(180216),
    ee = n(168843),
    et = n(442336),
    en = n(57304),
    er = n(605953),
    ei = n(374306),
    el = n(984370),
    ea = n(910611),
    es = n(915718),
    eo = n(518311),
    ec = n(882378),
    ed = n(207868),
    eu = n(473065),
    ep = n(576171),
    eh = n(754688),
    ef = n(41776),
    eg = n(370774),
    em = n(134483),
    eb = n(703656),
    ey = n(359110),
    e_ = n(607802),
    eO = n(14091),
    ej = n(6025),
    ex = n(897473),
    ev = n(922482),
    eC = n(504185),
    eI = n(657218),
    eE = n(407908),
    eS = n(66556),
    eZ = n(131694),
    eP = n(377929),
    eT = n(900157),
    eN = n(108427),
    eR = n(892001),
    ew = n(402130),
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
    ez = n(944486),
    eV = n(914010),
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
    e8 = n(981631),
    e4 = n(918559),
    e3 = n(354459),
    e2 = n(921944),
    e7 = n(408491),
    e6 = n(440493),
    e9 = n(157925),
    e5 = n(388032),
    te = n(97009);
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
    createPromise: () => Promise.all([n.e("22173"), n.e("9456")]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: te.loader,
            children: (0, r.jsx)(m.$jN, {}),
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
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("24783"), n.e("41815")]).then(n.bind(n, 439635));
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
            (0, y.jW)(e, async () => {
                let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tr(tn({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let i = eW.default.getUser(t.getRecipientId());
        o()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, y.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e("79695"), n.e("98783"), n.e("56826"), n.e("31899")]).then(
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
            case e8.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eC.Z, { channel: e }, e.id);
            case e8.d4z.GUILD_VOICE:
            case e8.d4z.DM:
            case e8.d4z.GROUP_DM:
            case e8.d4z.PUBLIC_THREAD:
            case e8.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    D.Z,
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
        if ((o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(Z.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: i } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(J.Z, { guildId: t.id })
                : (0, r.jsx)(Q.l, {
                      guildId: t.id,
                      children: (0, r.jsx)($.Z, {
                          channelId: e.id,
                          guildId: t.id,
                      }),
                  });
        if (i)
            return (0, r.jsx)(v.Z, {
                guild: t,
                channelId: e.id,
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, r.jsx)(G.Z, {
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
                chatInputType: L.Ie.NORMAL,
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
        else if (l === e8.ULH.PROFILE && e.isPrivate() && !a && !s && !c)
            return (0, r.jsx)(ew.Z, { channel: e }, "private-channel-profile-".concat(e.id));
        else if (l === e8.ULH.MEMBERS)
            switch (e.type) {
                case e8.d4z.GROUP_DM:
                    return (0, r.jsx)(_.Z, { channel: e }, "private-channel-recipients-".concat(e.id));
                case e8.d4z.GUILD_DIRECTORY:
                case e8.d4z.GUILD_FORUM:
                case e8.d4z.GUILD_MEDIA:
                case e8.d4z.GUILD_ANNOUNCEMENT:
                case e8.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e8.TPd.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (d = e.guild_id) ? d : e.id;
                    return (0, r.jsx)(eX.Z, { channel: e }, "channel-members-".concat(u));
                case e8.d4z.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, r.jsx)(eX.Z, { channel: t }, "channel-members-".concat(t.id));
                    break;
                case e8.d4z.PUBLIC_THREAD:
                case e8.d4z.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, r.jsx)(
                            j.Z,
                            {
                                channel: e,
                                guild: n,
                            },
                            "channel-members-".concat(e.id),
                        );
            }
        else if (l === e8.ULH.SEARCH)
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
                    (0, m.ZDy)(
                        async () => {
                            let { default: e } = await n.e("53900").then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tr(tn({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => Y.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, m.ZDy)(
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
        if (n === e8.ULH.SIDEBAR_CHAT && null != i) {
            if (s) return null;
            switch (i.type) {
                case ex.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eI.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case ex.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? B.Z : eT.Z;
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
                    style: { width: e8.$Y6 },
                    className: te.guildSidebar,
                    children: (0, r.jsx)(q.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ej.Z.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = (null == t ? void 0 : t.type) != null && e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e8.PrS - o;
        return (
            (c += O.qO),
            (0, r.jsx)(eQ.Z, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e8.TPd.GUILD_THREADS_ONLY.has(t.type)
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
        let f = s === e8.ULH.SIDEBAR_CHAT,
            g = null != c && !f,
            m = !e.isForumLikeChannel() && !o,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(U.yY, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e8.d4z.GUILD_VOICE,
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
                            className: a()(te.content, { [te.noChat]: l === e8.AEg.NO_CHAT }),
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
                    case e8.d4z.GUILD_VOICE:
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e8.d4z.DM:
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
                    (0, eR.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [R.Z.CHANNEL_HEADER],
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
                return e ? (0, r.jsx)(M.Z, { channelId: null != t ? t.id : null }) : null;
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
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let s = [];
                if (e.isSystemDM()) return s;
                switch (e.type) {
                    case e8.d4z.GUILD_STAGE_VOICE:
                    case e8.d4z.GUILD_VOICE:
                        break;
                    case e8.d4z.DM:
                        s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(es.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            s.push(
                                (0, r.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        tooltip: e5.intl.string(e5.t.Xjlbvr),
                                        location: "ChannelHeaderToolbar-DM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    eu.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a,
                                    },
                                    "profile",
                                ),
                            ),
                            s.push((0, r.jsx)(ec.Z, { channel: e }, "safety_tools"));
                        break;
                    case e8.d4z.GROUP_DM:
                        if (
                            (s.push(this.renderJoinRequestInterviewButtons()),
                            s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push((0, r.jsx)(es.Z, { channel: e }, "calls")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            !e.isManaged())
                        ) {
                            let t = e5.intl.string(e5.t.Xjlbvr);
                            s.push(
                                (0, r.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: "ChannelHeaderToolbar-GroupDM-AddFriendsButton",
                                    },
                                    "invite",
                                ),
                            );
                        }
                        s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                        e.isModeratorReportChannel() && s.push((0, r.jsx)(eE.Z, { channel: e })),
                            null == t || t.isForumLikeChannel() || s.push((0, r.jsx)(eS.Z, { channel: t }, "browser")),
                            e.isVocalThread() && s.push((0, r.jsx)(ed.Z, { channel: e }, "thread-call")),
                            s.push((0, r.jsx)(eZ.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            e.isArchivedThread() || s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            null != t && (0, I.Lp)(e) && s.push((0, r.jsx)(er.Z, { channel: e }, "summaries")),
                            s.push((0, r.jsx)(eP.Z, { channel: e }, "threads-overflow"));
                        break;
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                        s.push((0, r.jsx)(F.Z, { channel: e }, "favorites")),
                            s.push((0, r.jsx)(eS.Z, { channel: e }, "browser")),
                            n || s.push((0, r.jsx)(et.Z, { channel: e }, "notifications")),
                            s.push((0, r.jsx)(en.Z, { channel: e }, "pins")),
                            s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members")),
                            (0, I.Lp)(e) && s.push((0, r.jsx)(er.Z, { channel: e }, "summaries"));
                        break;
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                        n ||
                            (s.push((0, r.jsx)(ei.Z, { channel: e }, "forum-onboarding")),
                            s.push((0, r.jsx)(et.Z, { channel: e }, "notifications"))),
                            __OVERLAY__ || s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e8.d4z.GUILD_DIRECTORY:
                        s.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                }
                return s;
            }),
            tt(this, "renderMobileToolbar", () => {
                let { channel: e } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e8.d4z.GUILD_STAGE_VOICE:
                    case e8.d4z.GUILD_VOICE:
                    case e8.d4z.DM:
                        break;
                    case e8.d4z.GROUP_DM:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                        break;
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                    case e8.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, "members"));
                }
                return t;
            }),
            tt(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(g.zx, {
                          size: g.zx.Sizes.MIN,
                          color: g.zx.Colors.PRIMARY,
                          className: te.followButton,
                          onClick: () =>
                              (0, m.ZDy)(async () => {
                                  let { default: e } = await n.e("54642").then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tn({ channel: t }, n));
                              }),
                          children: e5.intl.string(e5.t["3aOv+v"]),
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
                let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, ey.Kh)(e.id) : void 0,
                    b =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    y = c || d,
                    _ = s || y;
                return (0, r.jsxs)("div", {
                    className: te.subtitleContainer,
                    children: [
                        (0, r.jsx)(m.f6W, {
                            theme: u && s ? e8.BRd.DARK : void 0,
                            children: (s) =>
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
                                        className: a()(te.title, s, { [te.gdm]: e.type === e8.d4z.GROUP_DM }),
                                        transparent: _,
                                        hidden: d,
                                        "aria-label": e5.intl.string(e5.t.BIYAqa),
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
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: f,
                                                handleParentClick: b,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)(g.zx, {
                                                      onClick: () => (0, eb.XU)(e.guild_id, e.id),
                                                      className: te.followButton,
                                                      look: g.zx.Looks.FILLED,
                                                      color: g.zx.Colors.PRIMARY,
                                                      size: g.zx.Sizes.MIN,
                                                      children: e5.intl.string(e5.t.k5WiPT),
                                                  })
                                                : (0, ea.v0)(e, i),
                                        ],
                                    },
                                    "header-".concat(e.id),
                                ),
                        }),
                        (0, r.jsx)(em.Z, { channelId: e.id }),
                    ],
                });
            });
    }
}
let ta = (0, C.Z)(tl),
    ts = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            s = (0, p.e7)([ez.Z], () => ez.Z.getChannelId()),
            o = (0, p.e7)([ez.Z], () => ez.Z.getVoiceChannelId()),
            c = (0, p.e7)([ek.Z], () => (null != n ? n : ek.Z.getChannel(s)), [s, n]),
            g = (0, p.e7)([ek.Z], () => ek.Z.getChannel(o), [o]),
            m = null == c ? void 0 : c.parent_id,
            y = (0, p.e7)([ek.Z], () => ek.Z.getChannel(m), [m]),
            _ = (0, p.e7)([eH.Z], () => eH.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: O } = (0, X.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            j = (0, p.e7)([A.Z], () => {
                let e = null != s ? A.Z.getParticipants(s) : [],
                    t = null != s ? A.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            }, [s]),
            x = (0, V.Z)(),
            v = (0, p.e7)([ez.Z], () => {
                var e;
                return (
                    (null != (e = null == x ? void 0 : x.channelId) ? e : ez.Z.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            C = (0, p.e7)([S.ZP], () => (null != c ? S.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            Z = (0, p.e7)([eB.Z], () => eB.Z.isConnected()),
            R = (0, E.Z)(Z),
            D = Z && !1 === R;
        i.useEffect(() => {
            v &&
                D &&
                null != C &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, w.gN)({
                        applicationId: C.applicationId,
                        instanceId: C.compositeInstanceId,
                    }),
                );
        }, [D, c, v, C]);
        let L = (0, p.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
            M = (0, p.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
            k = null != L && !(0, P.Z)(null == c ? void 0 : c.id) && M === e4.Ez.PANEL,
            U = (0, p.e7)(
                [eY.Z],
                () => null != c && c.isVocalThread() && !d().isEmpty(eY.Z.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            G = null != c && c.isPrivate() && !k && j,
            F = (null == c ? void 0 : c.isGuildVocal()) || G || U,
            B = (0, p.e7)([z.Z], () => z.Z.getFrameLayoutMode() === e7.U.FOCUSED),
            { welcomeModalChannelId: W } = (0, u.TH)(),
            Y = (0, p.e7)([ef.Z], () => null != c && ef.Z.isLurking(c.guild_id), [c]),
            q = (0, p.e7)([eD.Z], () => eD.Z.hasSeen(null == c ? void 0 : c.guild_id, Y), [c, Y]),
            K = (0, p.e7)(
                [A.Z, S.ZP],
                () =>
                    null != S.ZP.getConnectedActivityLocation() && S.ZP.getActivityPanelMode() === e4.Ez.PANEL
                        ? S.ZP.getFocusedLayout() === e4.MI.NO_CHAT
                            ? e8.AEg.NO_CHAT
                            : e8.AEg.NORMAL
                        : null != s
                          ? A.Z.getLayout(s)
                          : e8.AEg.NORMAL,
                [s],
            ),
            Q = (0, p.e7)([A.Z], () => (null != c ? A.Z.getSelectedParticipant(c.id) : null)),
            J = (0, N.$5)(c),
            $ = (0, ep.Z)(null == _ ? void 0 : _.id),
            ee = (0, eL.Z)(W, null == _ ? void 0 : _.id),
            { section: et, channelSidebarState: en } = (0, p.cj)(
                [eM.ZP],
                () => ({
                    section: eM.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eM.ZP.getSidebarState(s),
                }),
                [s, c],
            ),
            er = null == _ ? void 0 : _.id,
            ei = (0, p.e7)([eM.ZP], () => eM.ZP.getGuildSidebarState(er), [er]),
            el = (0, p.e7)([eV.Z], () => eV.Z.getGuildId()) === e8.I_8,
            ea = (0, eg.D)(),
            es = (0, eq.ZP)(c),
            eo = (0, eq.ZP)(c, !0),
            ec = null != c && o === c.id,
            ed = null != c && c.isGuildStageVoice();
        (0, T.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eb.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e9.Df) {
                    let { channelId: e } =
                        null != (n = (0, eh.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let eu = {
                channel: c,
                inCurrentVoiceChannel: ec,
            },
            em = i.useRef(eu);
        i.useEffect(() => {
            em.current = eu;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = em.current;
                null != l && null != e && ed && e.id === l && !t && ((0, ev.Cq)(e), a(null));
            }, [l, ed]);
        let ey = (0, I.ts)(c),
            e_ = null != c && c.isPrivate(),
            eO = (0, E.Z)(e_),
            ej = (0, E.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = eO && !e_,
                t = eO && e_ && (null == c ? void 0 : c.id) !== ej;
            (e || t) && (0, H.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e2.L.AUTO });
        }, [null == c ? void 0 : c.id, ej, e_, eO]);
        let ex = (0, f.f9)();
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
                        layout: K,
                        needSubscriptionToAccess: O,
                        isLurking: Y,
                        hasModalOpen: ex,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: ei,
                        guild: _,
                        showCall: !O && F,
                        showActivityPanel: k,
                        showFramePanel: B,
                        channelIsContentGated: J,
                        isMobile: (0, p.e7)(
                            [eF.Z],
                            () =>
                                (null == c ? void 0 : c.type) === e8.d4z.DM && eF.Z.isMobileOnline(c.getRecipientId()),
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
                            ((null == c ? void 0 : c.type) === e8.d4z.GUILD_ANNOUNCEMENT &&
                                (null == _ ? void 0 : _.features.has(e8.oNc.NEWS))) ||
                            !1,
                    },
                    (0, p.cj)([eY.Z], () => ({ hasVideo: null != c && eY.Z.hasVideo(c.id) }), [c]),
                ),
                {
                    inCall: ec,
                    selectedParticipant: Q,
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
