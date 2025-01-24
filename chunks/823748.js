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
    P = n(413523),
    M = n(358221),
    R = n(677601),
    L = n(541716),
    k = n(236091),
    O = n(663993),
    D = n(252618),
    w = n(540059),
    B = n(201493),
    U = n(605236),
    H = n(174130),
    G = n(588322),
    F = n(446226),
    V = n(517525),
    z = n(445384),
    W = n(613464),
    K = n(705563),
    Y = n(730647),
    q = n(66999),
    X = n(826763),
    J = n(180216),
    Q = n(51486),
    $ = n(168843),
    ee = n(442336),
    et = n(57304),
    en = n(605953),
    ei = n(374306),
    el = n(984370),
    er = n(910611),
    ea = n(915718),
    es = n(518311),
    eo = n(180539),
    ec = n(882378),
    ed = n(207868),
    eu = n(576171),
    eh = n(754688),
    ep = n(41776),
    em = n(6242),
    ef = n(757692),
    eg = n(933843),
    eC = n(134483),
    ex = n(703656),
    ev = n(359110),
    e_ = n(854709),
    eI = n(14091),
    eE = n(6025),
    eb = n(897473),
    eZ = n(922482),
    eN = n(504185),
    eS = n(657218),
    eT = n(66556),
    ej = n(739830),
    eA = n(377929),
    ey = n(900157),
    eP = n(108427),
    eM = n(171368),
    eR = n(430670),
    eL = n(524329),
    ek = n(995532),
    eO = n(738643),
    eD = n(433355),
    ew = n(592125),
    eB = n(703558),
    eU = n(486472),
    eH = n(731290),
    eG = n(430824),
    eF = n(158776),
    eV = n(19780),
    ez = n(768119),
    eW = n(944486),
    eK = n(914010),
    eY = n(594174),
    eq = n(979651),
    eX = n(933557),
    eJ = n(287746),
    eQ = n(325708),
    e$ = n(335615),
    e0 = n(992744),
    e1 = n(923029),
    e2 = n(194082),
    e3 = n(176505),
    e4 = n(981631),
    e7 = n(918559),
    e6 = n(354459),
    e5 = n(921944),
    e9 = n(440493),
    e8 = n(157925),
    te = n(388032),
    tt = n(247627);
function tn(e, t, n) {
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
let ti = (0, O.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 434878)),
    webpackId: 434878,
    renderLoader: () =>
        (0, i.jsx)('div', {
            className: tt.loader,
            children: (0, i.jsx)(g.Spinner, {})
        }),
    name: 'ForumChannel'
});
class tl extends l.PureComponent {
    componentDidMount() {
        (0, eP.e)('guild_channel');
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
        let l = eY.default.getUser(t.getRecipientId());
        o()(null != l, 'Missing user in Channel.openDMContextMenu'),
            (0, x.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('70205'), n.e('31996'), n.e('56826'), n.e('95603')]).then(n.bind(n, 131404));
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
            case e4.d4z.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eN.Z, { channel: e }, e.id);
            case e4.d4z.GUILD_VOICE:
            case e4.d4z.DM:
            case e4.d4z.GROUP_DM:
            case e4.d4z.PUBLIC_THREAD:
            case e4.d4z.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
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
                ? (0, i.jsx)(X.Z, { guildId: n.id })
                : (0, i.jsx)(Y.l, {
                      guildId: n.id,
                      children: (0, i.jsx)(J.Z, {
                          channelId: e.id,
                          guildId: n.id
                      })
                  });
        if (e.isNSFW() && (!l || !t)) return (0, i.jsx)(b.Z, { guild: n });
        if (e.isGuildVocal()) return null;
        if (e.isDirectory())
            return (
                o()(null != n, 'directory channels must exist within a guild'),
                (0, i.jsx)(B.Z, {
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
                ti,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, i.jsx)(
            eJ.Z,
            {
                channel: e,
                guild: n,
                chatInputType: L.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: l, needSubscriptionToAccess: r, section: a, showCall: s, showActivityPanel: c } = this.props;
        if ((o()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || r));
        else if (a === e4.ULH.PROFILE && t.isPrivate() && !s && !c) return (0, i.jsx)(eR.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (a === e4.ULH.MEMBERS)
            switch (t.type) {
                case e4.d4z.GROUP_DM:
                    return (0, i.jsx)(v.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e4.d4z.GUILD_DIRECTORY:
                case e4.d4z.GUILD_FORUM:
                case e4.d4z.GUILD_MEDIA:
                case e4.d4z.GUILD_ANNOUNCEMENT:
                case e4.d4z.GUILD_TEXT:
                    var d;
                    let u = !0 === e4.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null !== (d = t.guild_id) && void 0 !== d ? d : t.id;
                    return (0, i.jsx)(e$.Z, { channel: t }, 'channel-members-'.concat(u));
                case e4.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, i.jsx)(e$.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e4.d4z.PUBLIC_THREAD:
                case e4.d4z.PRIVATE_THREAD:
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
        else if (a === e4.ULH.SEARCH && null != e) return (0, i.jsx)(eI.Z, { searchId: e });
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
                          onCloseCallback: () => z.Z.viewPrompt(e9.r.REAL_NAME_PROMPT, t),
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
                          onCloseCallback: () => (0, eL.y0)(t, a),
                          modalKey: 'Guild Welcome Screen Modal'
                      }
                  ),
              null);
    }
    renderThreadSidebar() {
        let e;
        let { channel: t, section: n, channelSidebarState: l, guildSidebarState: r, nsfwAgree: a, nsfwAllowed: s, width: o, isRefreshEnabled: c } = this.props;
        if (null == r && null == l) return null;
        if (n === e4.ULH.SIDEBAR_CHAT && null != l) {
            if ((null == t ? void 0 : t.isNSFW()) && (!s || !a)) return null;
            switch (l.type) {
                case eb.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eS.Z, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location
                    });
                    break;
                case eb.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? G.Z : ey.Z;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case eb.tI.VIEW_CHANNEL:
                case eb.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != r && null == e) {
            if (r.type === eb.jL.GUILD_MEMBER_MOD_VIEW) {
                let { guildId: e, userId: t } = r.details;
                return (0, i.jsx)('div', {
                    style: { width: e4.$Y6 },
                    className: tt.guildSidebar,
                    children: (0, i.jsx)(W.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eE.Z.closeGuildSidebar(e)
                    })
                });
            }
            return null;
        }
        if (null == e) return null;
        let d = (null == t ? void 0 : t.type) != null && e4.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            u = o - e4.PrS - d;
        return (
            c && (u += _.qO),
            (0, i.jsx)(eQ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e4.TPd.GUILD_THREADS_ONLY.has(t.type) ? eQ.y.PostSidebar : eQ.y.ThreadSidebar,
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
        if (l) return (0, i.jsx)(e0.Z, {});
        if (null == e) return (0, i.jsx)(e1.Z, { channelId: this.props.channelId });
        let m = s === e4.ULH.SIDEBAR_CHAT,
            f = null != c && !m,
            g = !e.isForumLikeChannel() && !o,
            C = null == t ? void 0 : t.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(D.yY, {
                    location: C,
                    subsection: null != n ? n : void 0
                }),
                (0, i.jsxs)('div', {
                    'data-has-border': e.type !== e4.d4z.GUILD_VOICE,
                    className: a()(tt.chat, {
                        [tt.threadSidebarOpen]: m || f,
                        [tt.threadSidebarFloating]: m && h
                    }),
                    children: [
                        g
                            ? (0, i.jsx)(E.Z, {
                                  style: { right: m ? u : void 0 },
                                  className: tt.uploadArea,
                                  channel: e,
                                  draftType: eB.d.ChannelMessage
                              })
                            : null,
                        p || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)('div', {
                            className: a()(tt.content, { [tt.noChat]: r === e4.AEg.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()]
                        })
                    ]
                }),
                this.renderThreadSidebar(),
                (0, i.jsx)(Q.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            tn(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tn(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                if (null != e) (0, ev.Kh)(e.id);
            }),
            tn(this, '_handleContextMenu', (e, t) => {
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
            tn(this, 'handleContextMenu', (e) => {
                o()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tn(this, 'handleParentContextMenu', (e) => {
                o()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tn(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tn(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eM.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        analyticsLocation: { section: e4.jXE.CHANNEL_HEADER }
                    });
            }),
            tn(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e3.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, i.jsx)(K.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tn(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, i.jsx)(k.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tn(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e6.fO.STREAM
                    ? null
                    : (0, i.jsx)(
                          V.Z,
                          {
                              size: e2.ZP.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t
                          },
                          'live-indicator'
                      );
            }),
            tn(this, 'renderHeaderToolbar', () => {
                let { channel: e, parentChannel: t, isLurking: n, showCall: l, showActivityPanel: r } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let a = [];
                if (e.isSystemDM()) return a;
                switch (e.type) {
                    case e4.d4z.GUILD_STAGE_VOICE:
                    case e4.d4z.GUILD_VOICE:
                        break;
                    case e4.d4z.DM:
                        a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push((0, i.jsx)(ea.Z, { channel: e }, 'calls')),
                            a.push((0, i.jsx)(et.Z, { channel: e }, 'pins')),
                            a.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: te.intl.string(te.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            a.push(
                                (0, i.jsx)(
                                    eo.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || r
                                    },
                                    'profile'
                                )
                            ),
                            a.push((0, i.jsx)(ec.Z, { channel: e }, 'safety_tools'));
                        break;
                    case e4.d4z.GROUP_DM:
                        if ((a.push(this.renderJoinRequestInterviewButtons()), a.push(this.renderClipsEnabledIndicatorToolbarItem()), a.push(this.renderStreamQualityLiveIndicatorToolbarItem()), a.push((0, i.jsx)(ea.Z, { channel: e }, 'calls')), a.push((0, i.jsx)(et.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = te.intl.string(te.t.Xjlbvr);
                            a.push(
                                (0, i.jsx)(
                                    es.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        a.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                        null != t && !t.isForumLikeChannel() && a.push((0, i.jsx)(eT.Z, { channel: t }, 'browser')), e.isVocalThread() && a.push((0, i.jsx)(ed.Z, { channel: e }, 'thread-call')), a.push((0, i.jsx)(ej.Z, { channel: e }, 'notifications')), a.push((0, i.jsx)(et.Z, { channel: e }, 'pins')), !e.isArchivedThread() && a.push((0, i.jsx)($.Z, { channelId: e.id }, 'members')), null != t && (0, N.Lp)(e) && a.push((0, i.jsx)(en.Z, { channel: e }, 'summaries')), a.push((0, i.jsx)(eA.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                        a.push((0, i.jsx)(H.Z, { channel: e }, 'favorites')), a.push((0, i.jsx)(eT.Z, { channel: e }, 'browser')), !n && a.push((0, i.jsx)(ee.Z, { channel: e }, 'notifications')), a.push((0, i.jsx)(et.Z, { channel: e }, 'pins')), a.push((0, i.jsx)($.Z, { channelId: e.id }, 'members')), (0, N.Lp)(e) && a.push((0, i.jsx)(en.Z, { channel: e }, 'summaries'));
                        break;
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                        !n && (a.push((0, i.jsx)(ei.Z, { channel: e }, 'forum-onboarding')), a.push((0, i.jsx)(ee.Z, { channel: e }, 'notifications'))), !__OVERLAY__ && a.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e4.d4z.GUILD_DIRECTORY:
                        a.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return a;
            }),
            tn(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e4.d4z.GUILD_STAGE_VOICE:
                    case e4.d4z.GUILD_VOICE:
                    case e4.d4z.DM:
                        break;
                    case e4.d4z.GROUP_DM:
                        t.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e4.d4z.ANNOUNCEMENT_THREAD:
                    case e4.d4z.PRIVATE_THREAD:
                    case e4.d4z.PUBLIC_THREAD:
                        !e.isArchivedThread() && t.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                        break;
                    case e4.d4z.GUILD_ANNOUNCEMENT:
                    case e4.d4z.GUILD_TEXT:
                    case e4.d4z.GUILD_FORUM:
                    case e4.d4z.GUILD_MEDIA:
                    case e4.d4z.GUILD_DIRECTORY:
                        t.push((0, i.jsx)($.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tn(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, i.jsx)(g.Button, {
                          size: g.Button.Sizes.MIN,
                          color: g.Button.Colors.PRIMARY,
                          className: tt.followButton,
                          onClick: () =>
                              (0, g.openModalLazy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          channel: t,
                                          ...n
                                      });
                              }),
                          children: te.intl.string(te.t['3aOv+v'])
                      })
                    : null;
            }),
            tn(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: l, guildId: r, showCall: s, showActivityPanel: c, hasVideo: d, headerGuildBreadcrumbPosition: u, isFavorites: h } = this.props;
                o()(null != e, 'Missing channel in Channel.renderHeaderBar'), o()(null != t, 'Should not be null if channel is not null.');
                let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    m = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, i.jsxs)('div', {
                    className: tt.subtitleContainer,
                    children: [
                        (0, i.jsx)(g.ThemeProvider, {
                            theme: d && s ? e4.BRd.DARK : void 0,
                            children: (o) =>
                                (0, i.jsxs)(
                                    el.Z,
                                    {
                                        guildId: r,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, e_.X)()),
                                        showDivider: h && !(0, e_.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(tt.title, o),
                                        transparent: s || c,
                                        'aria-label': te.intl.string(te.t.BIYAqa),
                                        children: [
                                            'left' === u &&
                                                (0, i.jsx)(er.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'right'
                                                }),
                                            (0, er.ud)({
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
                                                (0, i.jsx)(er.TS, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: 'left'
                                                }),
                                            (0, er.v0)(e, l)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, i.jsx)(eC.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let tr = (0, Z.Z)(tl);
t.Z = l.memo(function (e) {
    var t;
    let { providedChannel: n } = e,
        [r, a] = l.useState(null),
        s = (0, p.e7)([eW.Z], () => eW.Z.getChannelId()),
        o = (0, p.e7)([eW.Z], () => eW.Z.getVoiceChannelId()),
        c = (0, p.e7)([ew.Z], () => (null != n ? n : ew.Z.getChannel(s)), [s, n]),
        g = (0, p.e7)([ew.Z], () => ew.Z.getChannel(o), [o]),
        x = null == c ? void 0 : c.parent_id,
        v = (0, p.e7)([ew.Z], () => ew.Z.getChannel(x), [x]),
        _ = (0, p.e7)([eG.Z], () => eG.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
        { needSubscriptionToAccess: I } = (0, q.Z)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0),
        E = (0, p.e7)(
            [M.Z],
            () => {
                let e = null != s ? M.Z.getParticipants(s) : [],
                    t = null != s ? M.Z.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            },
            [s]
        ),
        b = (0, F.Z)(),
        Z = (0, p.e7)([eW.Z], () => {
            var e;
            return (null !== (e = null == b ? void 0 : b.channelId) && void 0 !== e ? e : eW.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
        }),
        j = (0, p.e7)([T.ZP], () => (null != c ? T.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
        R = (0, p.e7)([eV.Z], () => eV.Z.isConnected()),
        L = (0, S.Z)(R),
        k = R && !1 === L;
    l.useEffect(() => {
        Z && k && null != j && null != c && C.Z.selectParticipant(c.id, (0, P.oW)(j.applicationId));
    }, [k, c, Z, j]);
    let O = (0, p.e7)([T.ZP], () => {
            var e;
            return T.ZP.getSelfEmbeddedActivityForChannel(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : e4.lds);
        }),
        D = (0, p.e7)([T.ZP], () => T.ZP.getActivityPanelMode()),
        B = null != O && !(0, A.Z)(null == c ? void 0 : c.id) && D === e7.Ez.PANEL,
        H = (0, p.e7)([eq.Z], () => null != c && c.isVocalThread() && !d().isEmpty(eq.Z.getVoiceStatesForChannel(c.id)), [c]),
        G = null != c && c.isPrivate() && !B && E,
        V = (null == c ? void 0 : c.isGuildVocal()) || G || H,
        { welcomeModalChannelId: z } = (0, u.TH)(),
        W = (0, p.e7)([ep.Z], () => null != c && ep.Z.isLurking(c.guild_id), [c]),
        K = (0, p.e7)([ek.Z], () => ek.Z.hasSeen(null == c ? void 0 : c.guild_id, W), [c, W]),
        Y = (0, p.e7)([M.Z, T.ZP], () => (null != T.ZP.getConnectedActivityChannelId() && T.ZP.getActivityPanelMode() === e7.Ez.PANEL ? (T.ZP.getFocusedLayout() === e7.MI.NO_CHAT ? e4.AEg.NO_CHAT : e4.AEg.NORMAL) : null != s ? M.Z.getLayout(s) : e4.AEg.NORMAL), [s]),
        X = (0, p.e7)([M.Z], () => (null != c ? M.Z.getSelectedParticipant(c.id) : null)),
        J = (0, p.e7)([eY.default], () => eY.default.getCurrentUser()),
        Q = (0, eu.Z)(null == _ ? void 0 : _.id),
        $ = (0, eO.Z)(z, null == _ ? void 0 : _.id),
        { section: ee, channelSidebarState: et } = (0, p.cj)(
            [eD.ZP],
            () => ({
                section: eD.ZP.getSection(s, null == c ? void 0 : c.isDM()),
                channelSidebarState: eD.ZP.getSidebarState(s)
            }),
            [s, c]
        ),
        en = null == _ ? void 0 : _.id,
        ei = (0, p.e7)([eD.ZP], () => eD.ZP.getGuildSidebarState(en), [en]),
        el = (0, p.e7)([eK.Z], () => eK.Z.getGuildId()) === e4.I_8,
        er = (0, eg.So)(h.q.STREAM_HIGH_QUALITY),
        ea = (0, ef.o)(X, J),
        es = (0, em.lL)('Channel', !0, J, ea),
        eo = (0, eX.ZP)(c),
        ec = (0, eX.ZP)(c, !0),
        ed = null != c && o === c.id,
        eC = null != c && c.isGuildStageVoice();
    (0, y.Z)({ onTransition: void 0 }),
        l.useEffect(() => {
            var e, t, n;
            let i = (0, ex.s1)();
            if ((null == i ? void 0 : null === (e = i.location) || void 0 === e ? void 0 : e.state) === e8.Df) {
                let { channelId: e } = null !== (n = (0, eh.Qj)(null == i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.pathname)) && void 0 !== n ? n : {};
                null != e && a(e);
            }
        }, []);
    let ev = {
            channel: c,
            inCurrentVoiceChannel: ed
        },
        e_ = l.useRef(ev);
    l.useEffect(() => {
        e_.current = ev;
    }),
        l.useEffect(() => {
            let { channel: e, inCurrentVoiceChannel: t } = e_.current;
            null != r && null != e && eC && e.id === r && !t && ((0, eZ.Cq)(e), a(null));
        }, [r, eC]);
    let eI = (0, N.ts)(c),
        eE = null != c && c.isPrivate(),
        eb = (0, S.Z)(eE),
        eN = (0, S.Z)(null == c ? void 0 : c.id);
    l.useEffect(() => {
        let e = eb && !eE,
            t = eb && eE && (null == c ? void 0 : c.id) !== eN;
        (e || t) && (0, U.EW)(m.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e5.L.AUTO });
    }, [null == c ? void 0 : c.id, eN, eE, eb]);
    let eS = (0, f.f9)(),
        eT = (0, w.Q3)('Channel');
    return (0, i.jsx)(tr, {
        guildId: null == c ? void 0 : c.guild_id,
        channelId: s,
        channel: c,
        channelName: eo,
        formattedChannelName: ec,
        parentChannel: v,
        voiceChannel: g,
        layout: Y,
        needSubscriptionToAccess: I,
        isLurking: W,
        hasModalOpen: eS,
        section: ee,
        channelSidebarState: et,
        guildSidebarState: ei,
        guild: _,
        searchId: (0, p.e7)([ez.Z], () => ez.Z.getCurrentSearchId()),
        showCall: !I && V,
        showActivityPanel: B,
        nsfwAgree: (0, p.e7)([eH.Z], () => eH.Z.didAgree(null == c ? void 0 : c.guild_id)),
        isMobile: (0, p.e7)([eF.Z], () => (null == c ? void 0 : c.type) === e4.d4z.DM && eF.Z.isMobileOnline(c.getRecipientId()), [c]),
        isUnavailable: (0, p.e7)([eU.Z], () => (null == c ? void 0 : c.guild_id) != null && eU.Z.isUnavailable(c.guild_id), [c]),
        showRealNameModal: Q,
        showWelcomeModal: !K && $,
        showFollowButton: ((null == c ? void 0 : c.type) === e4.d4z.GUILD_ANNOUNCEMENT && (null == _ ? void 0 : _.hasFeature(e4.oNc.NEWS))) || !1,
        ...(0, p.cj)([eq.Z], () => ({ hasVideo: null != c && eq.Z.hasVideo(c.id) }), [c]),
        inCall: ed,
        selectedParticipant: X,
        nsfwAllowed: (null == J ? void 0 : J.nsfwAllowed) === !0,
        showChannelSummaries: eI,
        isFavorites: el,
        headerGuildBreadcrumbPosition: el ? 'left' : 'right',
        premiumIndicatorEnabled: er || es.enabled,
        hasTextActivityInPanelMode: B,
        isRefreshEnabled: eT
    });
});
