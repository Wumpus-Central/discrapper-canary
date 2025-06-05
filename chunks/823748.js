n.d(t, { Z: () => tc }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    u = n.n(c),
    d = n(114858),
    p = n(252258),
    h = n(442837),
    f = n(704215),
    m = n(952265),
    g = n(481060),
    b = n(475179),
    _ = n(239091),
    x = n(377993),
    y = n(697309),
    C = n(457868),
    v = n(561472),
    j = n(36311),
    O = n(112724),
    E = n(902840),
    I = n(110924),
    P = n(317381),
    S = n(82888),
    Z = n(917107),
    N = n(296797),
    T = n(100527),
    A = n(413523),
    w = n(358221),
    R = n(677601),
    k = n(541716),
    M = n(236091),
    L = n(663993),
    D = n(252618),
    U = n(540059),
    B = n(201493),
    G = n(605236),
    F = n(174130),
    H = n(588322),
    V = n(446226),
    z = n(517525),
    W = n(445384),
    Y = n(613464),
    q = n(705563),
    K = n(730647),
    X = n(66999),
    Q = n(826763),
    J = n(180216),
    $ = n(51486),
    ee = n(168843),
    et = n(442336),
    en = n(57304),
    er = n(605953),
    ei = n(405954),
    el = n(374306),
    ea = n(984370),
    eo = n(910611),
    es = n(915718),
    ec = n(518311),
    eu = n(882378),
    ed = n(207868),
    ep = n(473065),
    eh = n(576171),
    ef = n(754688),
    em = n(41776),
    eg = n(370774),
    eb = n(134483),
    e_ = n(703656),
    ex = n(359110),
    ey = n(854709),
    eC = n(14091),
    ev = n(6025),
    ej = n(897473),
    eO = n(922482),
    eE = n(856393),
    eI = n(657218),
    eP = n(407908),
    eS = n(66556),
    eZ = n(739830),
    eN = n(377929),
    eT = n(900157),
    eA = n(108427),
    ew = n(892001),
    eR = n(402130),
    ek = n(524329),
    eM = n(995532),
    eL = n(738643),
    eD = n(433355),
    eU = n(592125),
    eB = n(703558),
    eG = n(486472),
    eF = n(731290),
    eH = n(430824),
    eV = n(158776),
    ez = n(19780),
    eW = n(768119),
    eY = n(944486),
    eq = n(914010),
    eK = n(594174),
    eX = n(979651),
    eQ = n(933557),
    eJ = n(287746),
    e$ = n(325708),
    e0 = n(335615),
    e1 = n(992744),
    e2 = n(923029),
    e3 = n(194082),
    e7 = n(176505),
    e8 = n(981631),
    e5 = n(918559),
    e4 = n(354459),
    e6 = n(921944),
    e9 = n(440493),
    te = n(157925),
    tt = n(388032),
    tn = n(100658);
function tr(e, t, n) {
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
function ti(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                tr(e, t, n[t]);
            });
    }
    return e;
}
function tl(e, t) {
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
let ta = (0, L.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: tn.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    name: 'ForumChannel'
});
class to extends i.PureComponent {
    componentDidMount() {
        (0, eA.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: i } = this.props;
        s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            s()(null != i, 'Missing guild in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tl(ti({}, n), {
                            channel: t,
                            guild: i
                        })
                    );
            });
    }
    openThreadContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) => (0, r.jsx)(e, tl(ti({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eK.default.getUser(t.getRecipientId());
        s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('23331')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tl(ti({}, n), {
                            user: i,
                            channelSelected: !0,
                            channel: t
                        })
                    );
            });
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: r } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || (n && r)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e8.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eE.Z, { channel: e }, e.id);
            case e8.d4z.GUILD_VOICE:
            case e8.d4z.DM:
            case e8.d4z.GROUP_DM:
            case e8.d4z.PUBLIC_THREAD:
            case e8.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    R.Z,
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
        let { channel: e, embeddedActivity: t } = this.props,
            n = this.shouldRenderCall();
        if ((s()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), n || (null == t ? void 0 : t.location.kind) === p.E.CONTEXTLESS)) return null;
        let i = this.props.height - 200;
        return (0, r.jsx)(S.Z, {
            maxHeight: i,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: i, needSubscriptionToAccess: l } = this.props;
        if ((s()(null != e, 'Missing channel in Channel.renderChat'), l))
            return (s()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(Q.Z, { guildId: n.id })
                : (0, r.jsx)(K.l, {
                      guildId: n.id,
                      children: (0, r.jsx)(J.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!i || !t))
            return (0, r.jsx)(j.Z, {
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
                ta,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            eJ.Z,
            {
                channel: e,
                guild: n,
                chatInputType: k.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: a, showCall: o, showActivityPanel: c } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (a === e8.ULH.PROFILE && t.isPrivate() && !o && !c) return (0, r.jsx)(eR.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e8.ULH.MEMBERS)
            switch (t.type) {
                case e8.d4z.GROUP_DM:
                    return (0, r.jsx)(x.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e8.d4z.GUILD_DIRECTORY:
                case e8.d4z.GUILD_FORUM:
                case e8.d4z.GUILD_MEDIA:
                case e8.d4z.GUILD_ANNOUNCEMENT:
                case e8.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (u = t.guild_id) ? u : t.id;
                    return (0, r.jsx)(e0.Z, { channel: t }, 'channel-members-'.concat(d));
                case e8.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(e0.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e8.d4z.PUBLIC_THREAD:
                case e8.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != i)
                        return (0, r.jsx)(
                            C.Z,
                            {
                                channel: t,
                                guild: i
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (a === e8.ULH.SEARCH && null != e) return (0, r.jsx)(eC.Z, { searchId: e });
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
                            return (n) => (0, r.jsx)(e, tl(ti({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => W.Z.viewPrompt(e9.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tl(ti({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, ek.y0)(t, a),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: a, nsfwAllowed: o, width: s, isRefreshEnabled: c } = this.props;
        if (null == l && null == i) return null;
        if (n === e8.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!o || !a)) return null;
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
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? H.Z : eT.Z;
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
                    style: { width: e8.$Y6 },
                    className: tn.guildSidebar,
                    children: (0, r.jsx)(Y.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => ev.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let u = (null == t ? void 0 : t.type) != null && e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = s - e8.PrS - u;
        return (
            c && (d += y.qO),
            (0, r.jsx)(e$.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e8.TPd.GUILD_THREADS_ONLY.has(t.type) ? e$.y.PostSidebar : e$.y.ThreadSidebar,
                maxWidth: d,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: o, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(e1.Z, {});
        if (null == e) return (0, r.jsx)(e2.Z, { channelId: this.props.channelId });
        let f = o === e8.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e8.d4z.GUILD_VOICE,
                    className: a()(tn.chat, {
                        [tn.threadSidebarOpen]: f || m,
                        [tn.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(v.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: tn.uploadArea,
                                  channel: e,
                                  draftType: eB.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: a()(tn.content, { [tn.noChat]: l === e8.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, r.jsx)($.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            tr(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tr(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, ex.Kh)(e.id);
            }),
            tr(this, '_handleContextMenu', (e, t) => {
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
            tr(this, 'handleContextMenu', (e) => {
                s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tr(this, 'handleParentContextMenu', (e) => {
                s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tr(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tr(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, ew.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [T.Z.CHANNEL_HEADER]
                    });
            }),
            tr(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e7.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(q.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tr(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(M.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tr(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e4.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          z.Z,
                          {
                              size: e3.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            tr(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let a = [];
                if (e.isSystemDM()) return a;
                switch (e.type) {
                    case e8.d4z.GUILD_STAGE_VOICE:
                    case e8.d4z.GUILD_VOICE:
                        break;
                    case e8.d4z.DM:
                        a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push((0, r.jsx)(es.Z, { channel: e }, 'calls')),
                            a.push((0, r.jsx)(en.Z, { channel: e }, 'pins')),
                            a.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: tt.intl.string(tt.t.Xjlbvr),
                                        location: 'ChannelHeaderToolbar-DM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            ),
                            a.push(
                                (0, r.jsx)(
                                    ep.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l
                                    },
                                    'profile'
                                )
                            ),
                            a.push((0, r.jsx)(eu.Z, { channel: e }, 'safety_tools')),
                            a.push((0, r.jsx)(ei.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e8.d4z.GROUP_DM:
                        if ((a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, r.jsx)(es.Z, { channel: e }, 'calls')), a.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = tt.intl.string(tt.t.Xjlbvr);
                            a.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: t,
                                        location: 'ChannelHeaderToolbar-GroupDM-AddFriendsButton'
                                    },
                                    'invite'
                                )
                            );
                        }
                        a.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), a.push((0, r.jsx)(ei.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                        a.push((0, r.jsx)(eP.Z, { channel: e })), null == t || t.isForumLikeChannel() || a.push((0, r.jsx)(eS.Z, { channel: t }, 'browser')), e.isVocalThread() && a.push((0, r.jsx)(ed.Z, { channel: e }, 'thread-call')), a.push((0, r.jsx)(eZ.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), e.isArchivedThread() || a.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), null != t && (0, E.Lp)(e) && a.push((0, r.jsx)(er.Z, { channel: e }, 'summaries')), a.push((0, r.jsx)(eN.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                        a.push((0, r.jsx)(F.Z, { channel: e }, 'favorites')), a.push((0, r.jsx)(eS.Z, { channel: e }, 'browser')), n || a.push((0, r.jsx)(et.Z, { channel: e }, 'notifications')), a.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), a.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), (0, E.Lp)(e) && a.push((0, r.jsx)(er.Z, { channel: e }, 'summaries'));
                        break;
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                        n || (a.push((0, r.jsx)(el.Z, { channel: e }, 'forum-onboarding')), a.push((0, r.jsx)(et.Z, { channel: e }, 'notifications'))), __OVERLAY__ || a.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e8.d4z.GUILD_DIRECTORY:
                        a.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                }
                return a;
            }),
            tr(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e8.d4z.GUILD_STAGE_VOICE:
                    case e8.d4z.GUILD_VOICE:
                    case e8.d4z.DM:
                        break;
                    case e8.d4z.GROUP_DM:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e8.d4z.ANNOUNCEMENT_THREAD:
                    case e8.d4z.PRIVATE_THREAD:
                    case e8.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e8.d4z.GUILD_ANNOUNCEMENT:
                    case e8.d4z.GUILD_TEXT:
                    case e8.d4z.GUILD_FORUM:
                    case e8.d4z.GUILD_MEDIA:
                    case e8.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tr(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(g.zxk, {
                          size: g.zxk.Sizes.MIN,
                          color: g.zxk.Colors.PRIMARY,
                          className: tn.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, ti({ channel: t }, n));
                              }),
                          children: tt.intl.string(tt.t['3aOv+v'])
                      })
                    : null;
            }),
            tr(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: o, showActivityPanel: c, hasVideo: u, showHeaderGuildBreadcrumb: d, isFavorites: p } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.');
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : d ? () => (0, ex.Kh)(e.id) : void 0,
                    f = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: tn.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: u && o ? e8.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    ea.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, ey.X)()),
                                        showDivider: p && !(0, ey.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(tn.title, s),
                                        transparent: o || c,
                                        'aria-label': tt.intl.string(tt.t.BIYAqa),
                                        children: [
                                            d &&
                                                (0, r.jsx)(eo.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'right'
                                                }),
                                            (0, eo.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: i,
                                                hasVideo: u,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: h,
                                                handleParentClick: f,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            (0, eo.v0)(e, i)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, r.jsx)(eb.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let ts = (0, O.Z)(to),
    tc = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, a] = i.useState(null),
            o = (0, h.e7)([eY.Z], () => eY.Z.getChannelId()),
            s = (0, h.e7)([eY.Z], () => eY.Z.getVoiceChannelId()),
            c = (0, h.e7)([eU.Z], () => (null != n ? n : eU.Z.getChannel(o)), [o, n]),
            p = (0, h.e7)([eU.Z], () => eU.Z.getChannel(s), [s]),
            g = null == c ? void 0 : c.parent_id,
            _ = (0, h.e7)([eU.Z], () => eU.Z.getChannel(g), [g]),
            x = (0, h.e7)([eH.Z], () => eH.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: y } = (0, X.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            C = (0, h.e7)(
                [w.Z],
                () => {
                    let e = null != o ? w.Z.getParticipants(o) : [],
                        t = null != o ? w.Z.getActivityParticipants(o) : [];
                    return e.length - t.length > 0;
                },
                [o]
            ),
            v = (0, V.Z)(),
            j = (0, h.e7)([eY.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eY.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            O = (0, h.e7)([P.ZP], () => (null != c ? P.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            S = (0, h.e7)([ez.Z], () => ez.Z.isConnected()),
            T = (0, I.Z)(S),
            R = S && !1 === T;
        i.useEffect(() => {
            j &&
                R &&
                null != O &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, A.gN)({
                        applicationId: O.applicationId,
                        instanceId: O.compositeInstanceId
                    })
                );
        }, [R, c, j, O]);
        let k = (0, h.e7)([P.ZP], () => P.ZP.getCurrentEmbeddedActivity()),
            M = (0, h.e7)([P.ZP], () => P.ZP.getActivityPanelMode()),
            L = null != k && !(0, Z.Z)(null == c ? void 0 : c.id) && M === e5.Ez.PANEL,
            D = (0, h.e7)([eX.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eX.Z.getVoiceStatesForChannel(c.id)), [c]),
            B = null != c && c.isPrivate() && !L && C,
            F = (null == c ? void 0 : c.isGuildVocal()) || B || D,
            { welcomeModalChannelId: H } = (0, d.TH)(),
            z = (0, h.e7)([em.Z], () => null != c && em.Z.isLurking(c.guild_id), [c]),
            W = (0, h.e7)([eM.Z], () => eM.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            Y = (0, h.e7)([w.Z, P.ZP], () => (null != P.ZP.getConnectedActivityLocation() && P.ZP.getActivityPanelMode() === e5.Ez.PANEL ? (P.ZP.getFocusedLayout() === e5.MI.NO_CHAT ? e8.AEg.NO_CHAT : e8.AEg.NORMAL) : null != o ? w.Z.getLayout(o) : e8.AEg.NORMAL), [o]),
            q = (0, h.e7)([w.Z], () => (null != c ? w.Z.getSelectedParticipant(c.id) : null)),
            K = (0, h.e7)([eK.default], () => eK.default.getCurrentUser()),
            Q = (0, eh.Z)(null == x ? void 0 : x.id),
            J = (0, eL.Z)(H, null == x ? void 0 : x.id),
            { section: $, channelSidebarState: ee } = (0, h.cj)(
                [eD.ZP],
                () => ({
                    section: eD.ZP.getSection(o, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eD.ZP.getSidebarState(o)
                }),
                [o, c]
            ),
            et = null == x ? void 0 : x.id,
            en = (0, h.e7)([eD.ZP], () => eD.ZP.getGuildSidebarState(et), [et]),
            er = (0, h.e7)([eq.Z], () => eq.Z.getGuildId()) === e8.I_8,
            ei = (0, eg.D)(),
            el = (0, eQ.ZP)(c),
            ea = (0, eQ.ZP)(c, !0),
            eo = null != c && s === c.id,
            es = null != c && c.isGuildStageVoice();
        (0, N.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, e_.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === te.Df) {
                    let { channelId: e } = null != (n = (0, ef.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && a(e);
                }
            }, []);
        let ec = {
                channel: c,
                inCurrentVoiceChannel: eo
            },
            eu = i.useRef(ec);
        i.useEffect(() => {
            eu.current = ec;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eu.current;
                null != l && null != e && es && e.id === l && !t && ((0, eO.Cq)(e), a(null));
            }, [l, es]);
        let ed = (0, E.ts)(c),
            ep = null != c && c.isPrivate(),
            eb = (0, I.Z)(ep),
            ex = (0, I.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = eb && !ep,
                t = eb && ep && (null == c ? void 0 : c.id) !== ex;
            (e || t) && (0, G.EW)(f.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e6.L.AUTO });
        }, [null == c ? void 0 : c.id, ex, ep, eb]);
        let ey = (0, m.f9)(),
            eC = (0, U.Q3)('Channel');
        return (0, r.jsx)(
            ts,
            tl(
                ti(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: o,
                        channel: c,
                        channelName: el,
                        formattedChannelName: ea,
                        parentChannel: _,
                        voiceChannel: p,
                        layout: Y,
                        needSubscriptionToAccess: y,
                        isLurking: z,
                        hasModalOpen: ey,
                        section: $,
                        channelSidebarState: ee,
                        guildSidebarState: en,
                        guild: x,
                        searchId: (0, h.e7)([eW.Z], () => eW.Z.getCurrentSearchId()),
                        showCall: !y && F,
                        showActivityPanel: L,
                        nsfwAgree: (0, h.e7)([eF.Z], () => eF.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, h.e7)([eV.Z], () => (null == c ? void 0 : c.type) === e8.d4z.DM && eV.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, h.e7)([eG.Z], () => (null == c ? void 0 : c.guild_id) != null && eG.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: Q,
                        showWelcomeModal: !W && J,
                        showFollowButton: ((null == c ? void 0 : c.type) === e8.d4z.GUILD_ANNOUNCEMENT && (null == x ? void 0 : x.hasFeature(e8.oNc.NEWS))) || !1
                    },
                    (0, h.cj)([eX.Z], () => ({ hasVideo: null != c && eX.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: eo,
                    selectedParticipant: q,
                    nsfwAllowed: (null == K ? void 0 : K.nsfwAllowed) === !0,
                    showChannelSummaries: ed,
                    isFavorites: er,
                    showHeaderGuildBreadcrumb: er || ei,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    isRefreshEnabled: eC,
                    embeddedActivity: k
                }
            )
        );
    });
