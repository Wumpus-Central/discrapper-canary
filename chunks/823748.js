n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(392711),
    d = n.n(c),
    u = n(512969),
    h = n(848246),
    p = n(442837),
    m = n(704215),
    f = n(952265),
    g = n(481060),
    C = n(475179),
    x = n(239091),
    v = n(377993),
    _ = n(697309),
    I = n(457868),
    E = n(561472),
    b = n(36311),
    Z = n(112724),
    N = n(902840),
    S = n(110924),
    T = n(317381),
    j = n(82888),
    A = n(917107),
    y = n(296797),
    P = n(358221),
    M = n(677601),
    R = n(541716),
    L = n(236091),
    k = n(663993),
    O = n(252618),
    D = n(540059),
    w = n(201493),
    B = n(605236),
    U = n(174130),
    H = n(588322),
    G = n(446226),
    F = n(517525),
    V = n(445384),
    z = n(613464),
    W = n(705563),
    K = n(730647),
    Y = n(66999),
    q = n(826763),
    X = n(180216),
    J = n(51486),
    Q = n(168843),
    $ = n(442336),
    ee = n(57304),
    et = n(605953),
    en = n(374306),
    ei = n(984370),
    el = n(910611),
    er = n(915718),
    ea = n(518311),
    es = n(180539),
    eo = n(882378),
    ec = n(207868),
    ed = n(246919),
    eu = n(754688),
    eh = n(41776),
    ep = n(6242),
    em = n(757692),
    ef = n(933843),
    eg = n(134483),
    eC = n(703656),
    ex = n(359110),
    ev = n(854709),
    e_ = n(14091),
    eI = n(6025),
    eE = n(897473),
    eb = n(922482),
    eZ = n(504185),
    eN = n(657218),
    eS = n(66556),
    eT = n(739830),
    ej = n(377929),
    eA = n(900157),
    ey = n(108427),
    eP = n(171368),
    eM = n(430670),
    eR = n(524329),
    eL = n(995532),
    ek = n(738643),
    eO = n(433355),
    eD = n(592125),
    ew = n(703558),
    eB = n(486472),
    eU = n(731290),
    eH = n(430824),
    eG = n(158776),
    eF = n(19780),
    eV = n(768119),
    ez = n(944486),
    eW = n(914010),
    eK = n(594174),
    eY = n(979651),
    eq = n(933557),
    eX = n(287746),
    eJ = n(325708),
    eQ = n(335615),
    e$ = n(992744),
    e0 = n(923029),
    e1 = n(194082),
    e2 = n(176505),
    e3 = n(981631),
    e4 = n(918559),
    e7 = n(354459),
    e6 = n(921944),
    e5 = n(440493),
    e9 = n(157925),
    e8 = n(388032),
    te = n(247627);
function tt(e, t, n) {
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
let tn = (0, k.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: te.loader,
            children: (0, i.jsx)(g.Spinner, {})
        }),
    name: 'ForumChannel'
});
class ti extends l.PureComponent {
    componentDidMount() {
        (0, ey.e)('guild_channel');
    }
    componentDidUpdate(e) {
        null != this.props.channel && null != e.channel && this.props.channel.id !== e.channel.id && this.state.topicExpanded && this.setState({ topicExpanded: !1 }), this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: l } = this.props;
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            o()(null != l, 'Missing guild in Channel.openChannelContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t,
                        guild: l
                    });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openChannelContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channel: t
                    });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let l = eK.default.getUser(t.getRecipientId());
        o()(null != l, 'Missing user in Channel.openDMContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('92453'), n.e('56826'), n.e('95324')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: l,
                        channelSelected: !0,
                        channel: t
                    });
            });
    }
    shouldRenderCall() {
        let { channel: e, showCall: t, nsfwAllowed: n, nsfwAgree: i } = this.props;
        return (!(null == e ? void 0 : e.isNSFW()) || (n && i)) && t;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderCall'), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e3.d4z.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eZ.Z, { channel: e }, e.id);
            case e3.d4z.GUILD_VOICE:
            case e3.d4z.DM:
            case e3.d4z.GROUP_DM:
            case e3.d4z.PUBLIC_THREAD:
            case e3.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
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
        if ((o()(null != e, 'Missing channel in Channel.renderEmbeddedActivityPanel'), t)) return null;
        let n = this.props.height - 200;
        return (0, i.jsx)(j.Z, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar
        });
    }
    renderChat() {
        let { channel: e, nsfwAgree: t, guild: n, nsfwAllowed: l, needSubscriptionToAccess: r } = this.props;
        if ((o()(null != e, 'Missing channel in Channel.renderChat'), r))
            return (o()(null != n, 'premium channels must exist within a guild'), null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(q.Z, { guildId: n.id })
                : (0, i.jsx)(K.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(X.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!l || !t)) return (0, i.jsx)(b.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, 'directory channels must exist within a guild'),
                (0, i.jsx)(w.Z, {
                    channel: e,
                    guild: n
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != n, 'forum channels must exist within a guild');
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth
            };
            return (0, i.jsx)(
                tn,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, i.jsx)(
            eX.Z,
            {
                channel: e,
                guild: n,
                chatInputType: R.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: l, needSubscriptionToAccess: r, section: a, showCall: s, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || r));
        else if (a === e3.ULH.PROFILE && t.isPrivate() && !s && !c) return (0, i.jsx)(eM.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e3.ULH.MEMBERS)
            switch (t.type) {
                case e3.d4z.GROUP_DM:
                    return (0, i.jsx)(v.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e3.d4z.GUILD_DIRECTORY:
                case e3.d4z.GUILD_FORUM:
                case e3.d4z.GUILD_MEDIA:
                case e3.d4z.GUILD_ANNOUNCEMENT:
                case e3.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e3.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (d = t.guild_id) && void 0 !== d ? d : t.id;
                    return (0, i.jsx)(eQ.Z, { channel: t }, 'channel-members-'.concat(u));
                case e3.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(eQ.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e3.d4z.PUBLIC_THREAD:
                case e3.d4z.PRIVATE_THREAD:
                    if (!t.isArchivedThread() && null != l)
                        return (0, i.jsx)(
                            I.Z,
                            {
                                channel: t,
                                guild: l
                            },
                            'channel-members-'.concat(t.id)
                        );
            }
        else if (a === e3.ULH.SEARCH && null != e) return (0, i.jsx)(e_.Z, { searchId: e });
        return null;
    }
    openChannelModal() {
        let { channel: e, guildId: t, hasModalOpen: l, showWelcomeModal: r, isLurking: a, isUnavailable: s, showRealNameModal: o } = this.props;
        return null == e || null == t || s || l
            ? null
            : (o &&
                  (0, g.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e('53900').then(n.bind(n, 784280));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t
                              });
                      },
                      {
                          onCloseCallback: () => V.Z.viewPrompt(e5.r.REAL_NAME_PROMPT, t),
                          modalKey: 'Guild Hub Real Name Modal'
                      }
                  ),
              r &&
                  (0, g.openModalLazy)(
                      async () => {
                          let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t
                              });
                      },
                      {
                          onCloseCallback: () => (0, eR.y0)(t, a),
                          modalKey: 'Guild Welcome Screen Modal'
                      }
                  ),
              null);
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: l, guildSidebarState: r, nsfwAgree: a, nsfwAllowed: s, width: o, isRefreshEnabled: c } = this.props;
        if (null == r && null == l) return null;
        if (n === e3.ULH.SIDEBAR_CHAT && null != l) {
            if ((null == t ? void 0 : t.isNSFW()) && (!s || !a)) return null;
            switch (l.type) {
                case eE.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eN.Z, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location
                    });
                    break;
                case eE.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? H.Z : eA.Z;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case eE.tI.VIEW_CHANNEL:
                case eE.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != r && null == e) {
            if (r.type === eE.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = r.details;
                return (0, i.jsx)('div', {
                    style: { width: e3.$Y6 },
                    className: te.guildSidebar,
                    children: (0, i.jsx)(z.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eI.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let d = (null == t ? void 0 : t.type) != null && e3.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = o - e3.PrS - d;
        return (
            c && (u += _.qO),
            (0, i.jsx)(eJ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e3.TPd.GUILD_THREADS_ONLY.has(t.type) ? eJ.y.PostSidebar : eJ.y.ThreadSidebar,
                maxWidth: u,
                onWidthChange: this.handleThreadSidebarResize,
                children: e
            })
        );
    }
    render() {
        let { channel: e, guild: t, formattedChannelName: n, isUnavailable: l, layout: r, section: s, hasModalOpen: o, guildSidebarState: c, hasTextActivityInPanelMode: d } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            p = this.shouldRenderCall();
        if (l) return (0, i.jsx)(e$.Z, {});
        if (null == e) return (0, i.jsx)(e0.Z, { channelId: this.props.channelId });
        let m = s === e3.ULH.SIDEBAR_CHAT,
            f = null != c && !m,
            g = !e.isForumLikeChannel() && !o,
            C = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.yY, {
                    location: C,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    'data-has-border': e.type !== e3.d4z.GUILD_VOICE,
                    className: a()(te.chat, {
                        [te.threadSidebarOpen]: m || f,
                        [te.threadSidebarFloating]: m && h
                    }),
                    children: [
                        g
                            ? (0, i.jsx)(E.Z, {
                                  style: { right: m ? u : void 0 },
                                  className: te.uploadArea,
                                  channel: e,
                                  draftType: ew.d.ChannelMessage
                              })
                            : null,
                        p || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: a()(te.content, { [te.noChat]: r === e3.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, i.jsx)(J.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            tt(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tt(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                if (null != e) (0, ex.Kh)(e.id);
            }),
            tt(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e3.d4z.GUILD_VOICE:
                    case e3.d4z.GUILD_ANNOUNCEMENT:
                    case e3.d4z.GUILD_TEXT:
                    case e3.d4z.GUILD_FORUM:
                    case e3.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e3.d4z.ANNOUNCEMENT_THREAD:
                    case e3.d4z.PUBLIC_THREAD:
                    case e3.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e3.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tt(this, 'handleContextMenu', (e) => {
                o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tt(this, 'handleParentContextMenu', (e) => {
                o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tt(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tt(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eP.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e3.jXE.CHANNEL_HEADER }
                    });
            }),
            tt(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e2.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(W.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tt(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(L.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tt(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e7.fO.STREAM
                    ? null
                    : (0, i.jsx)(
                          F.Z,
                          {
                              size: e1.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            tt(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: l, showActivityPanel: r } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let a = [];
                if (e.isSystemDM()) return a;
                switch (e.type) {
                    case e3.d4z.GUILD_STAGE_VOICE:
                    case e3.d4z.GUILD_VOICE:
                        break;
                    case e3.d4z.DM:
                        a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push((0, i.jsx)(er.Z, { channel: e }, 'calls')),
                            a.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')),
                            a.push(
                                (0, i.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: e8.intl.string(e8.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            a.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || r
                                    },
                                    'profile'
                                )
                            ),
                            a.push((0, i.jsx)(eo.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e3.d4z.GROUP_DM:
                        if ((a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, i.jsx)(er.Z, { channel: e }, 'calls')), a.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = e8.intl.string(e8.t.Xjlbvr);
                            a.push(
                                (0, i.jsx)(
                                    ea.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        a.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.ANNOUNCEMENT_THREAD:
                    case e3.d4z.PRIVATE_THREAD:
                    case e3.d4z.PUBLIC_THREAD:
                        null != t && !t.isForumLikeChannel() && a.push((0, i.jsx)(eS.Z, { channel: t }, 'browser')), e.isVocalThread() && a.push((0, i.jsx)(ec.Z, { channel: e }, 'thread-call')), a.push((0, i.jsx)(eT.Z, { channel: e }, 'notifications')), a.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')), !e.isArchivedThread() && a.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members')), null != t && (0, N.Lp)(e) && a.push((0, i.jsx)(et.Z, { channel: e }, 'summaries')), a.push((0, i.jsx)(ej.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e3.d4z.GUILD_ANNOUNCEMENT:
                    case e3.d4z.GUILD_TEXT:
                        a.push((0, i.jsx)(U.Z, { channel: e }, 'favorites')), a.push((0, i.jsx)(eS.Z, { channel: e }, 'browser')), !n && a.push((0, i.jsx)($.Z, { channel: e }, 'notifications')), a.push((0, i.jsx)(ee.Z, { channel: e }, 'pins')), a.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members')), (0, N.Lp)(e) && a.push((0, i.jsx)(et.Z, { channel: e }, 'summaries'));
                        break;
                    case e3.d4z.GUILD_FORUM:
                    case e3.d4z.GUILD_MEDIA:
                        !n && (a.push((0, i.jsx)(en.Z, { channel: e }, 'forum-onboarding')), a.push((0, i.jsx)($.Z, { channel: e }, 'notifications'))), !__OVERLAY__ && a.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.GUILD_DIRECTORY:
                        a.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                }
                return a;
            }),
            tt(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e3.d4z.GUILD_STAGE_VOICE:
                    case e3.d4z.GUILD_VOICE:
                    case e3.d4z.DM:
                        break;
                    case e3.d4z.GROUP_DM:
                        t.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.ANNOUNCEMENT_THREAD:
                    case e3.d4z.PRIVATE_THREAD:
                    case e3.d4z.PUBLIC_THREAD:
                        !e.isArchivedThread() && t.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                        break;
                    case e3.d4z.GUILD_ANNOUNCEMENT:
                    case e3.d4z.GUILD_TEXT:
                    case e3.d4z.GUILD_FORUM:
                    case e3.d4z.GUILD_MEDIA:
                    case e3.d4z.GUILD_DIRECTORY:
                        t.push((0, i.jsx)(Q.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tt(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, i.jsx)(g.Button, {
                          size: g.Button.Sizes.MIN,
                          color: g.Button.Colors.PRIMARY,
                          className: te.followButton,
                          onClick: () =>
                              (0, g.openModalLazy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              }),
                          children: e8.intl.string(e8.t['3aOv+v'])
                      })
                    : null;
            }),
            tt(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: l, guildId: r, showCall: s, showActivityPanel: c, hasVideo: d, headerGuildBreadcrumbPosition: u, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: te.subtitleContainer,
                    children: [
                        (0, i.jsx)(g.ThemeProvider, {
                            theme: d && s ? e3.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    ei.Z,
                                    {
                                        guildId: r,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, ev.X)()),
                                        showDivider: h && !(0, ev.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(te.title, o),
                                        transparent: s || c,
                                        'aria-label': e8.intl.string(e8.t.BIYAqa),
                                        children: [
                                            'left' === u &&
                                                (0, i.jsx)(el.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, el.ud)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: l,
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: p,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton
                                            }),
                                            'right' === u &&
                                                (0, i.jsx)(el.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'left'
                                                }),
                                            (0, el.v0)(e, l)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, i.jsx)(eg.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let tl = (0, Z.Z)(ti);
t.Z = l.memo(function (e) {
    var t;
    let { providedChannel: n } = e,
        [r, a] = l.useState(null),
        s = (0, p.e7)([ez.Z], () => ez.Z.getChannelId()),
        o = (0, p.e7)([ez.Z], () => ez.Z.getVoiceChannelId()),
        c = (0, p.e7)([eD.Z], () => (null != n ? n : eD.Z.getChannel(s)), [s, n]),
        g = (0, p.e7)([eD.Z], () => eD.Z.getChannel(o), [o]),
        x = null == c ? void 0 : c.parent_id,
        v = (0, p.e7)([eD.Z], () => eD.Z.getChannel(x), [x]),
        _ = (0, p.e7)([eH.Z], () => eH.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
        { needSubscriptionToAccess: I } = (0, Y.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
        E = (0, p.e7)(
            [P.Z],
            () => {
                let e = null != s ? P.Z.getParticipants(s) : [],
                    t = null != s ? P.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            },
            [s]
        ),
        b = (0, G.Z)(),
        Z = (0, p.e7)([ez.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : ez.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
        }),
        j = (0, p.e7)([T.ZP], () => (null != c ? T.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
        M = (0, p.e7)([eF.Z], () => eF.Z.isConnected()),
        R = (0, S.Z)(M),
        L = M && !1 === R;
    l.useEffect(() => {
        Z && L && null != j && null != c && C.Z.selectParticipant(c.id, j.applicationId);
    }, [L, c, Z, j]);
    let k = (0, p.e7)([T.ZP], () => {
            var e;
            return T.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e3.lds);
        }),
        O = (0, p.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
        w = null != k && !(0, A.Z)(null == c ? void 0 : c.id) && O === e4.Ez.PANEL,
        U = (0, p.e7)([eY.Z], () => null != c && c.isVocalThread() && !d().isEmpty(eY.Z.getVoiceStatesForChannel(c.id)), [c]),
        H = null != c && c.isPrivate() && !w && E,
        F = (null == c ? void 0 : c.isGuildVocal()) || H || U,
        { welcomeModalChannelId: V } = (0, u.TH)(),
        z = (0, p.e7)([eh.Z], () => null != c && eh.Z.isLurking(c.guild_id), [c]),
        W = (0, p.e7)([eL.Z], () => eL.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
        K = (0, p.e7)([P.Z, T.ZP], () => (null != T.ZP.getConnectedActivityChannelId() && T.ZP.getActivityPanelMode() === e4.Ez.PANEL ? (T.ZP.getFocusedLayout() === e4.MI.NO_CHAT ? e3.AEg.NO_CHAT : e3.AEg.NORMAL) : null != s ? P.Z.getLayout(s) : e3.AEg.NORMAL), [s]),
        q = (0, p.e7)([P.Z], () => (null != c ? P.Z.getSelectedParticipant(c.id) : null)),
        X = (0, p.e7)([eK.default], () => eK.default.getCurrentUser()),
        J = (0, ed.Z)(_),
        Q = (0, ek.Z)(V, null == _ ? void 0 : _.id),
        { section: $, channelSidebarState: ee } = (0, p.cj)(
            [eO.ZP],
            () => ({
                section: eO.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                channelSidebarState: eO.ZP.getSidebarState(s)
            }),
            [s, c]
        ),
        et = null == _ ? void 0 : _.id,
        en = (0, p.e7)([eO.ZP], () => eO.ZP.getGuildSidebarState(et), [et]),
        ei = (0, p.e7)([eW.Z], () => eW.Z.getGuildId()) === e3.I_8,
        el = (0, ef.So)(h.q.STREAM_HIGH_QUALITY),
        er = (0, em.o)(q, X),
        ea = (0, ep.lL)('Channel', !0, X, er),
        es = (0, eq.ZP)(c),
        eo = (0, eq.ZP)(c, !0),
        ec = null != c && o === c.id,
        eg = null != c && c.isGuildStageVoice();
    (0, y.Z)({ onTransition: void 0 }),
        l.useEffect(() => {
            var e, t, n;
            let i = (0, eC.s1)();
            if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e9.Df) {
                let { channelId: e } = null !== (n = (0, eu.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                null != e && a(e);
            }
        }, []);
    let ex = {
            channel: c,
            inCurrentVoiceChannel: ec
        },
        ev = l.useRef(ex);
    l.useEffect(() => {
        ev.current = ex;
    }),
        l.useEffect(() => {
            let { channel: e, inCurrentVoiceChannel: t } = ev.current;
            null != r && null != e && eg && e.id === r && !t && ((0, eb.Cq)(e), a(null));
        }, [r, eg]);
    let e_ = (0, N.ts)(c),
        eI = null != c && c.isPrivate(),
        eE = (0, S.Z)(eI),
        eZ = (0, S.Z)(null == c ? void 0 : c.id);
    l.useEffect(() => {
        let e = eE && !eI,
            t = eE && eI && (null == c ? void 0 : c.id) !== eZ;
        (e || t) && (0, B.EW)(m.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e6.L.AUTO });
    }, [null == c ? void 0 : c.id, eZ, eI, eE]);
    let eN = (0, f.f9)(),
        eS = (0, D.Q3)('Channel');
    return (0, i.jsx)(tl, {
        guildId: null == c ? void 0 : c.guild_id,
        channelId: s,
        channel: c,
        channelName: es,
        formattedChannelName: eo,
        parentChannel: v,
        voiceChannel: g,
        layout: K,
        needSubscriptionToAccess: I,
        isLurking: z,
        hasModalOpen: eN,
        section: $,
        channelSidebarState: ee,
        guildSidebarState: en,
        guild: _,
        searchId: (0, p.e7)([eV.Z], () => eV.Z.getCurrentSearchId()),
        showCall: !I && F,
        showActivityPanel: w,
        nsfwAgree: (0, p.e7)([eU.Z], () => eU.Z.didAgree(null == c ? void 0 : c.guild_id)),
        isMobile: (0, p.e7)([eG.Z], () => (null == c ? void 0 : c.type) === e3.d4z.DM && eG.Z.isMobileOnline(c.getRecipientId()), [c]),
        isUnavailable: (0, p.e7)([eB.Z], () => (null == c ? void 0 : c.guild_id) != null && eB.Z.isUnavailable(c.guild_id), [c]),
        showRealNameModal: J,
        showWelcomeModal: !W && Q,
        showFollowButton: ((null == c ? void 0 : c.type) === e3.d4z.GUILD_ANNOUNCEMENT && (null == _ ? void 0 : _.hasFeature(e3.oNc.NEWS))) || !1,
        ...(0, p.cj)([eY.Z], () => ({ hasVideo: null != c && eY.Z.hasVideo(c.id) }), [c]),
        inCall: ec,
        selectedParticipant: q,
        nsfwAllowed: (null == X ? void 0 : X.nsfwAllowed) === !0,
        showChannelSummaries: e_,
        isFavorites: ei,
        headerGuildBreadcrumbPosition: ei ? 'left' : 'right',
        premiumIndicatorEnabled: el || ea.enabled,
        hasTextActivityInPanelMode: w,
        isRefreshEnabled: eS
    });
});
