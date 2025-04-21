n.d(t, { Z: () => to }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
    c = n(392711),
    u = n.n(c),
    d = n(512969),
    p = n(252258),
    h = n(442837),
    f = n(704215),
    m = n(952265),
    g = n(481060),
    b = n(475179),
    _ = n(239091),
    y = n(377993),
    C = n(697309),
    x = n(457868),
    v = n(561472),
    j = n(36311),
    O = n(112724),
    E = n(902840),
    I = n(110924),
    P = n(317381),
    S = n(82888),
    Z = n(917107),
    N = n(296797),
    T = n(413523),
    A = n(358221),
    w = n(677601),
    R = n(541716),
    k = n(236091),
    M = n(663993),
    L = n(252618),
    D = n(540059),
    U = n(201493),
    B = n(605236),
    G = n(174130),
    F = n(588322),
    H = n(446226),
    V = n(517525),
    z = n(445384),
    W = n(613464),
    Y = n(705563),
    q = n(730647),
    K = n(66999),
    X = n(826763),
    Q = n(180216),
    J = n(51486),
    $ = n(168843),
    ee = n(442336),
    et = n(57304),
    en = n(605953),
    er = n(405954),
    ei = n(374306),
    el = n(984370),
    eo = n(910611),
    ea = n(915718),
    es = n(518311),
    ec = n(882378),
    eu = n(207868),
    ed = n(473065),
    ep = n(576171),
    eh = n(754688),
    ef = n(41776),
    em = n(134483),
    eg = n(703656),
    eb = n(359110),
    e_ = n(854709),
    ey = n(14091),
    eC = n(6025),
    ex = n(897473),
    ev = n(922482),
    ej = n(856393),
    eO = n(657218),
    eE = n(66556),
    eI = n(739830),
    eP = n(377929),
    eS = n(900157),
    eZ = n(108427),
    eN = n(171368),
    eT = n(336724),
    eA = n(524329),
    ew = n(995532),
    eR = n(738643),
    ek = n(433355),
    eM = n(592125),
    eL = n(703558),
    eD = n(486472),
    eU = n(731290),
    eB = n(430824),
    eG = n(158776),
    eF = n(19780),
    eH = n(768119),
    eV = n(944486),
    ez = n(914010),
    eW = n(594174),
    eY = n(979651),
    eq = n(933557),
    eK = n(287746),
    eX = n(325708),
    eQ = n(335615),
    eJ = n(992744),
    e$ = n(923029),
    e0 = n(194082),
    e1 = n(176505),
    e2 = n(981631),
    e3 = n(918559),
    e7 = n(354459),
    e4 = n(921944),
    e6 = n(440493),
    e8 = n(157925),
    e5 = n(388032),
    e9 = n(100658);
function te(e, t, n) {
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
function tt(e) {
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
                te(e, t, n[t]);
            });
    }
    return e;
}
function tn(e, t) {
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
let tr = (0, M.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: e9.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    name: 'ForumChannel'
});
class ti extends i.PureComponent {
    componentDidMount() {
        (0, eZ.e)('guild_channel');
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
                        tn(tt({}, n), {
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
                return (n) => (0, r.jsx)(e, tn(tt({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eW.default.getUser(t.getRecipientId());
        s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('20875'), n.e('70205'), n.e('4040'), n.e('53912'), n.e('56826'), n.e('31084')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
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
            case e2.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(ej.Z, { channel: e }, e.id);
            case e2.d4z.GUILD_VOICE:
            case e2.d4z.DM:
            case e2.d4z.GROUP_DM:
            case e2.d4z.PUBLIC_THREAD:
            case e2.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    w.Z,
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
                ? (0, r.jsx)(X.Z, { guildId: n.id })
                : (0, r.jsx)(q.l, {
                      guildId: n.id,
                      children: (0, r.jsx)(Q.Z, {
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
                (0, r.jsx)(U.Z, {
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
                tr,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            eK.Z,
            {
                channel: e,
                guild: n,
                chatInputType: R.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: o, showCall: a, showActivityPanel: c } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (o === e2.ULH.PROFILE && t.isPrivate() && !a && !c) return (0, r.jsx)(eT.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (o === e2.ULH.MEMBERS)
            switch (t.type) {
                case e2.d4z.GROUP_DM:
                    return (0, r.jsx)(y.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e2.d4z.GUILD_DIRECTORY:
                case e2.d4z.GUILD_FORUM:
                case e2.d4z.GUILD_MEDIA:
                case e2.d4z.GUILD_ANNOUNCEMENT:
                case e2.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (u = t.guild_id) ? u : t.id;
                    return (0, r.jsx)(eQ.Z, { channel: t }, 'channel-members-'.concat(d));
                case e2.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(eQ.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e2.d4z.PUBLIC_THREAD:
                case e2.d4z.PRIVATE_THREAD:
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
        else if (o === e2.ULH.SEARCH && null != e) return (0, r.jsx)(ey.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: i, showWelcomeModal: l, isLurking: o, isUnavailable: a, showRealNameModal: s } = this.props;
        return (
            null == e ||
                null == t ||
                a ||
                i ||
                (s &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                            return (n) => (0, r.jsx)(e, tn(tt({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => z.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, tn(tt({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eA.y0)(t, o),
                            modalKey: 'Guild Welcome Screen Modal'
                        }
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            { channel: t, section: n, channelSidebarState: i, guildSidebarState: l, nsfwAgree: o, nsfwAllowed: a, width: s, isRefreshEnabled: c } = this.props;
        if (null == l && null == i) return null;
        if (n === e2.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!a || !o)) return null;
            switch (i.type) {
                case ex.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eO.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case ex.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? F.Z : eS.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
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
                return (0, r.jsx)('div', {
                    style: { width: e2.$Y6 },
                    className: e9.guildSidebar,
                    children: (0, r.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eC.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let u = (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = s - e2.PrS - u;
        return (
            c && (d += C.qO),
            (0, r.jsx)(eX.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e2.TPd.GUILD_THREADS_ONLY.has(t.type) ? eX.y.PostSidebar : eX.y.ThreadSidebar,
                maxWidth: d,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: i, layout: l, section: a, hasModalOpen: s, guildSidebarState: c, hasTextActivityInPanelMode: u } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (i) return (0, r.jsx)(eJ.Z, {});
        if (null == e) return (0, r.jsx)(e$.Z, { channelId: this.props.channelId });
        let f = a === e2.ULH.SIDEBAR_CHAT,
            m = null != c && !f,
            g = !e.isForumLikeChannel() && !s,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(L.yY, {
                    location: b,
                    subsection: null != n ? n : void 0
                }),
                (0, r.jsxs)('div', {
                    'data-has-border': e.type !== e2.d4z.GUILD_VOICE,
                    className: o()(e9.chat, {
                        [e9.threadSidebarOpen]: f || m,
                        [e9.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(v.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: e9.uploadArea,
                                  channel: e,
                                  draftType: eL.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: o()(e9.content, { [e9.noChat]: l === e2.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, r.jsx)(J.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            te(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            te(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eb.Kh)(e.id);
            }),
            te(this, '_handleContextMenu', (e, t) => {
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
            te(this, 'handleContextMenu', (e) => {
                s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            te(this, 'handleParentContextMenu', (e) => {
                s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            te(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            te(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eN.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e2.jXE.CHANNEL_HEADER }
                    });
            }),
            te(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e1.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(Y.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            te(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(k.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            te(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e7.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          V.Z,
                          {
                              size: e0.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            te(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                        break;
                    case e2.d4z.DM:
                        o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(ea.Z, { channel: e }, 'calls')),
                            o.push((0, r.jsx)(et.Z, { channel: e }, 'pins')),
                            o.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: e5.intl.string(e5.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            o.push(
                                (0, r.jsx)(
                                    ed.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l
                                    },
                                    'profile'
                                )
                            ),
                            o.push((0, r.jsx)(ec.Z, { channel: e }, 'safety_tools')),
                            o.push((0, r.jsx)(er.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e2.d4z.GROUP_DM:
                        if ((o.push(this.renderJoinRequestInterviewButtons()), o.push(this.renderClipsEnabledIndicatorToolbarItem()), o.push(this.renderStreamQualityLiveIndicatorToolbarItem()), o.push((0, r.jsx)(ea.Z, { channel: e }, 'calls')), o.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e5.intl.string(e5.t.Xjlbvr);
                            o.push(
                                (0, r.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        o.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), o.push((0, r.jsx)(er.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(eE.Z, { channel: t }, 'browser')), e.isVocalThread() && o.push((0, r.jsx)(eu.Z, { channel: e }, 'thread-call')), o.push((0, r.jsx)(eI.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), e.isArchivedThread() || o.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), null != t && (0, E.Lp)(e) && o.push((0, r.jsx)(en.Z, { channel: e }, 'summaries')), o.push((0, r.jsx)(eP.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                        o.push((0, r.jsx)(G.Z, { channel: e }, 'favorites')), o.push((0, r.jsx)(eE.Z, { channel: e }, 'browser')), n || o.push((0, r.jsx)(ee.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(et.Z, { channel: e }, 'pins')), o.push((0, r.jsx)($.Z, { channelId: e.id }, 'members')), (0, E.Lp)(e) && o.push((0, r.jsx)(en.Z, { channel: e }, 'summaries'));
                        break;
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                        n || (o.push((0, r.jsx)(ei.Z, { channel: e }, 'forum-onboarding')), o.push((0, r.jsx)(ee.Z, { channel: e }, 'notifications'))), __OVERLAY__ || o.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return o;
            }),
            te(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e2.d4z.GUILD_STAGE_VOICE:
                    case e2.d4z.GUILD_VOICE:
                    case e2.d4z.DM:
                        break;
                    case e2.d4z.GROUP_DM:
                        t.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.ANNOUNCEMENT_THREAD:
                    case e2.d4z.PRIVATE_THREAD:
                    case e2.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e2.d4z.GUILD_ANNOUNCEMENT:
                    case e2.d4z.GUILD_TEXT:
                    case e2.d4z.GUILD_FORUM:
                    case e2.d4z.GUILD_MEDIA:
                    case e2.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            te(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(g.zxk, {
                          size: g.zxk.Sizes.MIN,
                          color: g.zxk.Colors.PRIMARY,
                          className: e9.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tt({ channel: t }, n));
                              }),
                          children: e5.intl.string(e5.t['3aOv+v'])
                      })
                    : null;
            }),
            te(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: a, showActivityPanel: c, hasVideo: u, headerGuildBreadcrumbPosition: d, isFavorites: p } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.');
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    f = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: e9.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: u && a ? e2.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    el.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, e_.X)()),
                                        showDivider: p && !(0, e_.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: o()(e9.title, s),
                                        transparent: a || c,
                                        'aria-label': e5.intl.string(e5.t.BIYAqa),
                                        children: [
                                            'left' === d &&
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
                                            'right' === d &&
                                                (0, r.jsx)(eo.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'left'
                                                }),
                                            (0, eo.v0)(e, i)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, r.jsx)(em.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let tl = (0, O.Z)(ti),
    to = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, o] = i.useState(null),
            a = (0, h.e7)([eV.Z], () => eV.Z.getChannelId()),
            s = (0, h.e7)([eV.Z], () => eV.Z.getVoiceChannelId()),
            c = (0, h.e7)([eM.Z], () => (null != n ? n : eM.Z.getChannel(a)), [a, n]),
            p = (0, h.e7)([eM.Z], () => eM.Z.getChannel(s), [s]),
            g = null == c ? void 0 : c.parent_id,
            _ = (0, h.e7)([eM.Z], () => eM.Z.getChannel(g), [g]),
            y = (0, h.e7)([eB.Z], () => eB.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: C } = (0, K.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, h.e7)(
                [A.Z],
                () => {
                    let e = null != a ? A.Z.getParticipants(a) : [],
                        t = null != a ? A.Z.getActivityParticipants(a) : [];
                    return e.length - t.length > 0;
                },
                [a]
            ),
            v = (0, H.Z)(),
            j = (0, h.e7)([eV.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eV.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            O = (0, h.e7)([P.ZP], () => (null != c ? P.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            S = (0, h.e7)([eF.Z], () => eF.Z.isConnected()),
            w = (0, I.Z)(S),
            R = S && !1 === w;
        i.useEffect(() => {
            j &&
                R &&
                null != O &&
                null != c &&
                b.Z.selectParticipant(
                    c.id,
                    (0, T.gN)({
                        applicationId: O.applicationId,
                        instanceId: O.compositeInstanceId
                    })
                );
        }, [R, c, j, O]);
        let k = (0, h.e7)([P.ZP], () => P.ZP.getCurrentEmbeddedActivity()),
            M = (0, h.e7)([P.ZP], () => P.ZP.getActivityPanelMode()),
            L = null != k && !(0, Z.Z)(null == c ? void 0 : c.id) && M === e3.Ez.PANEL,
            U = (0, h.e7)([eY.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eY.Z.getVoiceStatesForChannel(c.id)), [c]),
            G = null != c && c.isPrivate() && !L && x,
            F = (null == c ? void 0 : c.isGuildVocal()) || G || U,
            { welcomeModalChannelId: V } = (0, d.TH)(),
            z = (0, h.e7)([ef.Z], () => null != c && ef.Z.isLurking(c.guild_id), [c]),
            W = (0, h.e7)([ew.Z], () => ew.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            Y = (0, h.e7)([A.Z, P.ZP], () => (null != P.ZP.getConnectedActivityLocation() && P.ZP.getActivityPanelMode() === e3.Ez.PANEL ? (P.ZP.getFocusedLayout() === e3.MI.NO_CHAT ? e2.AEg.NO_CHAT : e2.AEg.NORMAL) : null != a ? A.Z.getLayout(a) : e2.AEg.NORMAL), [a]),
            q = (0, h.e7)([A.Z], () => (null != c ? A.Z.getSelectedParticipant(c.id) : null)),
            X = (0, h.e7)([eW.default], () => eW.default.getCurrentUser()),
            Q = (0, ep.Z)(null == y ? void 0 : y.id),
            J = (0, eR.Z)(V, null == y ? void 0 : y.id),
            { section: $, channelSidebarState: ee } = (0, h.cj)(
                [ek.ZP],
                () => ({
                    section: ek.ZP.getSection(a, null == c ? void 0 : c.isDM()),
                    channelSidebarState: ek.ZP.getSidebarState(a)
                }),
                [a, c]
            ),
            et = null == y ? void 0 : y.id,
            en = (0, h.e7)([ek.ZP], () => ek.ZP.getGuildSidebarState(et), [et]),
            er = (0, h.e7)([ez.Z], () => ez.Z.getGuildId()) === e2.I_8,
            ei = (0, eq.ZP)(c),
            el = (0, eq.ZP)(c, !0),
            eo = null != c && s === c.id,
            ea = null != c && c.isGuildStageVoice();
        (0, N.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eg.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e8.Df) {
                    let { channelId: e } = null != (n = (0, eh.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
                    null != e && o(e);
                }
            }, []);
        let es = {
                channel: c,
                inCurrentVoiceChannel: eo
            },
            ec = i.useRef(es);
        i.useEffect(() => {
            ec.current = es;
        }),
            i.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ec.current;
                null != l && null != e && ea && e.id === l && !t && ((0, ev.Cq)(e), o(null));
            }, [l, ea]);
        let eu = (0, E.ts)(c),
            ed = null != c && c.isPrivate(),
            em = (0, I.Z)(ed),
            eb = (0, I.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = em && !ed,
                t = em && ed && (null == c ? void 0 : c.id) !== eb;
            (e || t) && (0, B.EW)(f.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, eb, ed, em]);
        let e_ = (0, m.f9)(),
            ey = (0, D.Q3)('Channel');
        return (0, r.jsx)(
            tl,
            tn(
                tt(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: a,
                        channel: c,
                        channelName: ei,
                        formattedChannelName: el,
                        parentChannel: _,
                        voiceChannel: p,
                        layout: Y,
                        needSubscriptionToAccess: C,
                        isLurking: z,
                        hasModalOpen: e_,
                        section: $,
                        channelSidebarState: ee,
                        guildSidebarState: en,
                        guild: y,
                        searchId: (0, h.e7)([eH.Z], () => eH.Z.getCurrentSearchId()),
                        showCall: !C && F,
                        showActivityPanel: L,
                        nsfwAgree: (0, h.e7)([eU.Z], () => eU.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, h.e7)([eG.Z], () => (null == c ? void 0 : c.type) === e2.d4z.DM && eG.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, h.e7)([eD.Z], () => (null == c ? void 0 : c.guild_id) != null && eD.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: Q,
                        showWelcomeModal: !W && J,
                        showFollowButton: ((null == c ? void 0 : c.type) === e2.d4z.GUILD_ANNOUNCEMENT && (null == y ? void 0 : y.hasFeature(e2.oNc.NEWS))) || !1
                    },
                    (0, h.cj)([eY.Z], () => ({ hasVideo: null != c && eY.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: eo,
                    selectedParticipant: q,
                    nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
                    showChannelSummaries: eu,
                    isFavorites: er,
                    headerGuildBreadcrumbPosition: er ? 'left' : 'right',
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    isRefreshEnabled: ey,
                    embeddedActivity: k
                }
            )
        );
    });
