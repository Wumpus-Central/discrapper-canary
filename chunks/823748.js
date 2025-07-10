(n.d(t, { Z: () => td }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(114858),
    p = n(442837),
    h = n(704215),
    f = n(952265),
    m = n(755721),
    g = n(481060),
    b = n(475179),
    _ = n(239091),
    y = n(377993),
    C = n(697309),
    x = n(457868),
    v = n(561472),
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
    k = n(236091),
    L = n(663993),
    U = n(252618),
    B = n(201493),
    F = n(266454),
    H = n(174130),
    G = n(588322),
    V = n(591472),
    z = n(446226),
    W = n(517525),
    Y = n(445384),
    q = n(613464),
    K = n(705563),
    X = n(730647),
    Q = n(66999),
    J = n(826763),
    $ = n(180216),
    ee = n(51486),
    et = n(168843),
    en = n(442336),
    er = n(57304),
    ei = n(605953),
    el = n(405954),
    ea = n(374306),
    eo = n(984370),
    es = n(910611),
    ec = n(915718),
    eu = n(518311),
    ed = n(882378),
    ep = n(207868),
    eh = n(473065),
    ef = n(576171),
    em = n(754688),
    eg = n(41776),
    eb = n(370774),
    e_ = n(134483),
    ey = n(703656),
    eC = n(359110),
    ex = n(854709),
    ev = n(14091),
    eO = n(6025),
    ej = n(897473),
    eE = n(922482),
    eS = n(856393),
    eI = n(657218),
    eP = n(407908),
    eZ = n(66556),
    eT = n(739830),
    eN = n(377929),
    eA = n(900157),
    ew = n(108427),
    eR = n(892001),
    eM = n(402130),
    eD = n(524329),
    ek = n(995532),
    eL = n(738643),
    eU = n(433355),
    eB = n(592125),
    eF = n(703558),
    eH = n(486472),
    eG = n(731290),
    eV = n(430824),
    ez = n(158776),
    eW = n(19780),
    eY = n(768119),
    eq = n(944486),
    eK = n(914010),
    eX = n(594174),
    eQ = n(979651),
    eJ = n(933557),
    e$ = n(287746),
    e0 = n(325708),
    e1 = n(335615),
    e2 = n(992744),
    e3 = n(923029),
    e7 = n(194082),
    e8 = n(176505),
    e5 = n(981631),
    e6 = n(918559),
    e4 = n(354459),
    e9 = n(921944),
    te = n(408491),
    tt = n(440493),
    tn = n(157925),
    tr = n(388032),
    ti = n(100658);
function tl(e, t, n) {
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
function ta(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                tl(e, t, n[t]);
            }));
    }
    return e;
}
function to(e, t) {
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
let ts = (0, L.Un)({
    createPromise: () => Promise.all([n.e('22173'), n.e('71879')]).then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: ti.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    name: 'ForumChannel'
});
class tc extends i.PureComponent {
    componentDidMount() {
        (0, ew.e)('guild_channel');
    }
    componentDidUpdate(e) {
        (null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal());
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        (s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            s()(null != i, 'Missing guild in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        to(ta({}, n), {
                            channel: t,
                            guild: i
                        })
                    );
            }));
    }
    openThreadContextMenu(e, t) {
        (s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, to(ta({}, n), { channel: t }));
            }));
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eX.default.getUser(t.getRecipientId());
        (s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('56399')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        to(ta({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t
                        })
                    );
            }));
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: r } = this.props;
        return (!(0, N.aC)(e) || (n && r)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e5.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eS.Z, { channel: e }, e.id);
            case e5.d4z.GUILD_VOICE:
            case e5.d4z.DM:
            case e5.d4z.GROUP_DM:
            case e5.d4z.PUBLIC_THREAD:
            case e5.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    M.Z,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t
                    },
                    'call-'.concat(e.id)
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((s()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)) return null;
        let n = this.props.height - 200;
        return (0, r.jsx)(P.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: i, needSubscriptionToAccess: l } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderChat'), l))
            return (s()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(J.Z, { guildId: n.id })
                : (0, r.jsx)(X.l, {
                      guildId: n.id,
                      children: (0, r.jsx)($.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if ((0, N.aC)(e) && (!i || !t))
            return (0, r.jsx)(O.Z, {
                guild: n,
                channelId: e.id
            });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                s()(null != n, 'directory channels must exist within a guild'),
                (0, r.jsx)(B.Z, {
                    channel: e,
                    guild: n
                })
            );
        if (e.isForumLikeChannel()) {
            s()(null != n, 'forum channels must exist within a guild');
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth
            };
            return (0, r.jsx)(
                ts,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            e$.Z,
            {
                channel: e,
                guild: n,
                chatInputType: D.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: a, showCall: o, showActivityPanel: c, showFramePanel: u } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (a === e5.ULH.PROFILE && t.isPrivate() && !o && !c && !u) return (0, r.jsx)(eM.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e5.ULH.MEMBERS)
            switch (t.type) {
                case e5.d4z.GROUP_DM:
                    return (0, r.jsx)(y.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e5.d4z.GUILD_DIRECTORY:
                case e5.d4z.GUILD_FORUM:
                case e5.d4z.GUILD_MEDIA:
                case e5.d4z.GUILD_ANNOUNCEMENT:
                case e5.d4z.GUILD_TEXT:
                    var d;
                    let p = !0 === e5.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (d = t.guild_id) ? d : t.id;
                    return (0, r.jsx)(e1.Z, { channel: t }, 'channel-members-'.concat(p));
                case e5.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(e1.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e5.d4z.PUBLIC_THREAD:
                case e5.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != i)
                        return (0, r.jsx)(
                            x.Z,
                            {
                                channel: t,
                                guild: i
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (a === e5.ULH.SEARCH && null != e) return (0, r.jsx)(ev.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: i, showWelcomeModal: l, isLurking: a, isUnavailable: o, showRealNameModal: s } = this.props;
        return (
            null == e ||
                null == t ||
                o ||
                i ||
                (s &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, to(ta({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => Y.Z.viewPrompt(tt.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, to(ta({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eD.y0)(t, a),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: a, nsfwAllowed: o, width: s } = this.props;
        if (null == l && null == i) return null;
        if (n === e5.ULH.SIDEBAR_CHAT && null != i) {
            if ((0, N.aC)(t) && (!o || !a)) return null;
            switch (i.type) {
                case ej.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eI.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case ej.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? G.Z : eA.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
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
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)('div', {
                    style: { width: e5.$Y6 },
                    className: ti.guildSidebar,
                    children: (0, r.jsx)(q.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eO.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let c = (null == t ? void 0 : t.type) != null && e5.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = s - e5.PrS - c;
        return (
            (u += C.qO),
            (0, r.jsx)(e0.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e5.TPd.GUILD_THREADS_ONLY.has(t.type) ? e0.y.PostSidebar : e0.y.ThreadSidebar,
                maxWidth: u,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: o, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(e2.Z, {});
        if (null == e) return (0, r.jsx)(e3.Z, { channelId: this.props.channelId });
        let f = o === e5.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(U.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e5.d4z.GUILD_VOICE,
                    className: a()(ti.chat, {
                        [ti.threadSidebarOpen]: f || m,
                        [ti.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(v.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: ti.uploadArea,
                                  channel: e,
                                  draftType: eF.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: a()(ti.content, { [ti.noChat]: l === e5.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, r.jsx)(ee.Z, {})
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            tl(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tl(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eC.Kh)(e.id);
            }),
            tl(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e5.d4z.GUILD_VOICE:
                    case e5.d4z.GUILD_ANNOUNCEMENT:
                    case e5.d4z.GUILD_TEXT:
                    case e5.d4z.GUILD_FORUM:
                    case e5.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e5.d4z.ANNOUNCEMENT_THREAD:
                    case e5.d4z.PUBLIC_THREAD:
                    case e5.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e5.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tl(this, 'handleContextMenu', (e) => {
                (s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel));
            }),
            tl(this, 'handleParentContextMenu', (e) => {
                (s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel));
            }),
            tl(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tl(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                (s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eR.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [A.Z.CHANNEL_HEADER]
                    }));
            }),
            tl(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e8.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(K.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tl(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(k.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tl(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e4.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          W.Z,
                          {
                              size: e7.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            tl(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l, showFramePanel: a } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e5.d4z.GUILD_STAGE_VOICE:
                    case e5.d4z.GUILD_VOICE:
                        break;
                    case e5.d4z.DM:
                        (o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(ec.Z, { channel: e }, 'calls')),
                            o.push((0, r.jsx)(er.Z, { channel: e }, 'pins')),
                            o.push(
                                (0, r.jsx)(
                                    eu.Z,
                                    {
                                        channel: e,
                                        tooltip: tr.intl.string(tr.t.Xjlbvr),
                                        location: 'ChannelHeaderToolbar-DM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            ),
                            o.push(
                                (0, r.jsx)(
                                    eh.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l || a
                                    },
                                    'profile'
                                )
                            ),
                            o.push((0, r.jsx)(ed.Z, { channel: e }, 'safety_tools')),
                            o.push((0, r.jsx)(el.Z, { channel: e }, 'chat-wallpaper')));
                        break;
                    case e5.d4z.GROUP_DM:
                        if ((o.push(this.renderJoinRequestInterviewButtons()), o.push(this.renderClipsEnabledIndicatorToolbarItem()), o.push(this.renderStreamQualityLiveIndicatorToolbarItem()), o.push((0, r.jsx)(ec.Z, { channel: e }, 'calls')), o.push((0, r.jsx)(er.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = tr.intl.string(tr.t.Xjlbvr);
                            o.push(
                                (0, r.jsx)(
                                    eu.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: 'ChannelHeaderToolbar-GroupDM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            );
                        }
                        (o.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members')), o.push((0, r.jsx)(el.Z, { channel: e }, 'chat-wallpaper')));
                        break;
                    case e5.d4z.ANNOUNCEMENT_THREAD:
                    case e5.d4z.PRIVATE_THREAD:
                    case e5.d4z.PUBLIC_THREAD:
                        (o.push((0, r.jsx)(eP.Z, { channel: e })), null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(eZ.Z, { channel: t }, 'browser')), e.isVocalThread() && o.push((0, r.jsx)(ep.Z, { channel: e }, 'thread-call')), o.push((0, r.jsx)(eT.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(er.Z, { channel: e }, 'pins')), e.isArchivedThread() || o.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members')), null != t && (0, E.Lp)(e) && o.push((0, r.jsx)(ei.Z, { channel: e }, 'summaries')), o.push((0, r.jsx)(eN.Z, { channel: e }, 'threads-overflow')));
                        break;
                    case e5.d4z.GUILD_ANNOUNCEMENT:
                    case e5.d4z.GUILD_TEXT:
                        (o.push((0, r.jsx)(H.Z, { channel: e }, 'favorites')), o.push((0, r.jsx)(eZ.Z, { channel: e }, 'browser')), n || o.push((0, r.jsx)(en.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(er.Z, { channel: e }, 'pins')), o.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members')), (0, E.Lp)(e) && o.push((0, r.jsx)(ei.Z, { channel: e }, 'summaries')));
                        break;
                    case e5.d4z.GUILD_FORUM:
                    case e5.d4z.GUILD_MEDIA:
                        (n || (o.push((0, r.jsx)(ea.Z, { channel: e }, 'forum-onboarding')), o.push((0, r.jsx)(en.Z, { channel: e }, 'notifications'))), __OVERLAY__ || o.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members')));
                        break;
                    case e5.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members'));
                }
                return o;
            }),
            tl(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e5.d4z.GUILD_STAGE_VOICE:
                    case e5.d4z.GUILD_VOICE:
                    case e5.d4z.DM:
                        break;
                    case e5.d4z.GROUP_DM:
                        t.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members'));
                        break;
                    case e5.d4z.ANNOUNCEMENT_THREAD:
                    case e5.d4z.PRIVATE_THREAD:
                    case e5.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members'));
                        break;
                    case e5.d4z.GUILD_ANNOUNCEMENT:
                    case e5.d4z.GUILD_TEXT:
                    case e5.d4z.GUILD_FORUM:
                    case e5.d4z.GUILD_MEDIA:
                    case e5.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(et.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tl(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(m.zx, {
                          size: m.zx.Sizes.MIN,
                          color: m.zx.Colors.PRIMARY,
                          className: ti.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, ta({ channel: t }, n));
                              }),
                          children: tr.intl.string(tr.t['3aOv+v'])
                      })
                    : null;
            }),
            tl(this, 'renderHeaderBar', (e) => {
                let { channel: t, channelName: n, parentChannel: i, guild: l, guildId: o, showCall: c, showActivityPanel: u, showFramePanel: d, hasVideo: p, showHeaderGuildBreadcrumb: h, isFavorites: f } = this.props;
                (s()(null != t, 'Missing channel in Channel.renderHeaderBar'), s()(null != n, 'Should not be null if channel is not null.'));
                let b = t.isDM() && !t.isSystemDM() ? this.openUserProfile : h ? () => (0, eC.Kh)(t.id) : void 0,
                    _ = (null == i ? void 0 : i.guild_id) != null && (null == i ? void 0 : i.id) != null ? this.handleTitleParentClick : void 0,
                    y = u || d,
                    C = c || y,
                    x = !C || (!1 === e && !y);
                return (0, r.jsxs)('div', {
                    className: ti.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: p && c ? e5.BRd.DARK : void 0,
                            children: (e) =>
                                (0, r.jsxs)(
                                    eo.Z,
                                    {
                                        guildId: o,
                                        channelId: t.id,
                                        channelType: t.type,
                                        hideSearch: t.isDirectory() || (f && !(0, ex.X)()),
                                        showDivider: f && !(0, ex.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(ti.title, e),
                                        transparent: C,
                                        showToolbar: x,
                                        'aria-label': tr.intl.string(tr.t.BIYAqa),
                                        children: [
                                            h &&
                                                (0, r.jsx)(es.TS, {
                                                    channel: t,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, es.ud)({
                                                channel: t,
                                                channelName: n,
                                                parentChannel: i,
                                                guild: l,
                                                hasVideo: p,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: b,
                                                handleParentClick: _,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            h
                                                ? (0, r.jsx)(m.zx, {
                                                      onClick: () => (0, ey.XU)(t.guild_id, t.id),
                                                      className: ti.followButton,
                                                      look: m.zx.Looks.FILLED,
                                                      color: m.zx.Colors.PRIMARY,
                                                      size: m.zx.Sizes.MIN,
                                                      children: tr.intl.string(tr.t.k5WiPT)
                                                  })
                                                : (0, es.v0)(t, l)
                                        ]
                                    },
                                    'header-'.concat(t.id)
                                )
                        }),
                        (0, r.jsx)(e_.Z, { channelId: t.id })
                    ]
                });
            }));
    }
}
let tu = (0, j.Z)(tc),
    td = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, p.e7)([eq.Z], () => eq.Z.getChannelId()),
            s = (0, p.e7)([eq.Z], () => eq.Z.getVoiceChannelId()),
            c = (0, p.e7)([eB.Z], () => (null != n ? n : eB.Z.getChannel(o)), [o, n]),
            m = (0, p.e7)([eB.Z], () => eB.Z.getChannel(s), [s]),
            g = null == c ? void 0 : c.parent_id,
            _ = (0, p.e7)([eB.Z], () => eB.Z.getChannel(g), [g]),
            y = (0, p.e7)([eV.Z], () => eV.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: C } = (0, Q.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, p.e7)(
                [R.Z],
                () => {
                    let e = null != o ? R.Z.getParticipants(o) : [],
                        t = null != o ? R.Z.getActivityParticipants(o) : [];
                    return e.length - t.length > 0;
                },
                [o]
            ),
            v = (0, z.Z)(),
            O = (0, p.e7)([eq.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eq.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            j = (0, p.e7)([I.ZP], () => (null != c ? I.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            P = (0, p.e7)([eW.Z], () => eW.Z.isConnected()),
            N = (0, S.Z)(P),
            A = P && !1 === N;
        i.useEffect(() => {
            O &&
                A &&
                null != j &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, w.gN)({
                        applicationId: j.applicationId,
                        instanceId: j.compositeInstanceId
                    })
                );
        }, [A, c, O, j]);
        let M = (0, p.e7)([I.ZP], () => I.ZP.getCurrentEmbeddedActivity()),
            D = (0, p.e7)([I.ZP], () => I.ZP.getActivityPanelMode()),
            k = null != M && !(0, Z.Z)(null == c ? void 0 : c.id) && D === e6.Ez.PANEL,
            L = (0, p.e7)([eQ.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eQ.Z.getVoiceStatesForChannel(c.id)), [c]),
            U = null != c && c.isPrivate() && !k && x,
            B = (null == c ? void 0 : c.isGuildVocal()) || U || L,
            H = (0, p.e7)([V.Z], () => V.Z.getFrameLayoutMode() === te.U.FOCUSED),
            { welcomeModalChannelId: G } = (0, d.TH)(),
            W = (0, p.e7)([eg.Z], () => null != c && eg.Z.isLurking(c.guild_id), [c]),
            Y = (0, p.e7)([ek.Z], () => ek.Z.hasSeen(null == c ? void 0 : c.guild_id, W), [c, W]),
            q = (0, p.e7)([R.Z, I.ZP], () => (null != I.ZP.getConnectedActivityLocation() && I.ZP.getActivityPanelMode() === e6.Ez.PANEL ? (I.ZP.getFocusedLayout() === e6.MI.NO_CHAT ? e5.AEg.NO_CHAT : e5.AEg.NORMAL) : null != o ? R.Z.getLayout(o) : e5.AEg.NORMAL), [o]),
            K = (0, p.e7)([R.Z], () => (null != c ? R.Z.getSelectedParticipant(c.id) : null)),
            X = (0, p.e7)([eX.default], () => eX.default.getCurrentUser()),
            J = (0, ef.Z)(null == y ? void 0 : y.id),
            $ = (0, eL.Z)(G, null == y ? void 0 : y.id),
            { section: ee, channelSidebarState: et } = (0, p.cj)(
                [eU.ZP],
                () => ({
                    section: eU.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eU.ZP.getSidebarState(o)
                }),
                [o, c]
            ),
            en = null == y ? void 0 : y.id,
            er = (0, p.e7)([eU.ZP], () => eU.ZP.getGuildSidebarState(en), [en]),
            ei = (0, p.e7)([eK.Z], () => eK.Z.getGuildId()) === e5.I_8,
            el = (0, eb.D)(),
            ea = (0, eJ.ZP)(c),
            eo = (0, eJ.ZP)(c, !0),
            es = null != c && s === c.id,
            ec = null != c && c.isGuildStageVoice();
        ((0, T.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, ey.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === tn.Df) {
                    let { channelId: e } = null != (n = (0, em.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []));
        let eu = {
                channel: c,
                inCurrentVoiceChannel: es
            },
            ed = i.useRef(eu);
        (i.useEffect(() => {
            ed.current = eu;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ed.current;
                null != l && null != e && ec && e.id === l && !t && ((0, eE.Cq)(e), a(null));
            }, [l, ec]));
        let ep = (0, E.ts)(c),
            eh = null != c && c.isPrivate(),
            e_ = (0, S.Z)(eh),
            eC = (0, S.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = e_ && !eh,
                t = e_ && eh && (null == c ? void 0 : c.id) !== eC;
            (e || t) && (0, F.Q3)(h.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e9.L.AUTO });
        }, [null == c ? void 0 : c.id, eC, eh, e_]);
        let ex = (0, f.f9)();
        return (0, r.jsx)(
            tu,
            to(
                ta(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: ea,
                        formattedChannelName: eo,
                        parentChannel: _,
                        voiceChannel: m,
                        layout: q,
                        needSubscriptionToAccess: C,
                        isLurking: W,
                        hasModalOpen: ex,
                        section: ee,
                        channelSidebarState: et,
                        guildSidebarState: er,
                        guild: y,
                        searchId: (0, p.e7)([eY.Z], () => eY.Z.getCurrentSearchId()),
                        showCall: !C && B,
                        showActivityPanel: k,
                        showFramePanel: H,
                        nsfwAgree: (0, p.e7)([eG.Z], () => eG.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, p.e7)([ez.Z], () => (null == c ? void 0 : c.type) === e5.d4z.DM && ez.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, p.e7)([eH.Z], () => (null == c ? void 0 : c.guild_id) != null && eH.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: J,
                        showWelcomeModal: !Y && $,
                        showFollowButton: ((null == c ? void 0 : c.type) === e5.d4z.GUILD_ANNOUNCEMENT && (null == y ? void 0 : y.features.has(e5.oNc.NEWS))) || !1
                    },
                    (0, p.cj)([eQ.Z], () => ({ hasVideo: null != c && eQ.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: es,
                    selectedParticipant: K,
                    nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
                    showChannelSummaries: ep,
                    isFavorites: ei,
                    showHeaderGuildBreadcrumb: ei || el,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: k,
                    embeddedActivity: M
                }
            )
        );
    });
