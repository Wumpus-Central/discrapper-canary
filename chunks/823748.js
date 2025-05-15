n.d(t, { Z: () => ts }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    S = n(317381),
    P = n(82888),
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
    eo = n(984370),
    ea = n(910611),
    es = n(915718),
    ec = n(518311),
    eu = n(882378),
    ed = n(207868),
    ep = n(473065),
    eh = n(576171),
    ef = n(754688),
    em = n(41776),
    eg = n(134483),
    eb = n(703656),
    e_ = n(359110),
    ex = n(854709),
    ey = n(14091),
    eC = n(6025),
    ev = n(897473),
    ej = n(922482),
    eO = n(856393),
    eE = n(657218),
    eI = n(407908),
    eS = n(66556),
    eP = n(739830),
    eZ = n(377929),
    eN = n(900157),
    eT = n(108427),
    eA = n(892001),
    ew = n(402130),
    eR = n(524329),
    ek = n(995532),
    eM = n(738643),
    eL = n(433355),
    eD = n(592125),
    eU = n(703558),
    eB = n(486472),
    eG = n(731290),
    eF = n(430824),
    eH = n(158776),
    eV = n(19780),
    ez = n(768119),
    eW = n(944486),
    eY = n(914010),
    eq = n(594174),
    eK = n(979651),
    eX = n(933557),
    eQ = n(287746),
    eJ = n(325708),
    e$ = n(335615),
    e0 = n(992744),
    e1 = n(923029),
    e2 = n(194082),
    e3 = n(176505),
    e7 = n(981631),
    e8 = n(918559),
    e5 = n(354459),
    e4 = n(921944),
    e6 = n(440493),
    e9 = n(157925),
    te = n(388032),
    tt = n(100658);
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
function tr(e) {
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
                tn(e, t, n[t]);
            });
    }
    return e;
}
function ti(e, t) {
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
let tl = (0, L.Un)({
    createPromise: () => n.e('49131').then(n.bind(n, 346975)),
    webpackId: 346975,
    renderLoader: () =>
        (0, r.jsx)('div', {
            className: tt.loader,
            children: (0, r.jsx)(g.$jN, {})
        }),
    name: 'ForumChannel'
});
class to extends i.PureComponent {
    componentDidMount() {
        (0, eT.e)('guild_channel');
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
                        ti(tr({}, n), {
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
                return (n) => (0, r.jsx)(e, ti(tr({}, n), { channel: t }));
            });
    }
    openDMContextMenu(e, t) {
        s()(null != t, 'Missing channel in Channel.openDMContextMenu');
        let i = eq.default.getUser(t.getRecipientId());
        s()(null != i, 'Missing user in Channel.openDMContextMenu'),
            (0, _.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('5639'), n.e('70205'), n.e('98783'), n.e('53912'), n.e('56826'), n.e('31084')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        ti(tr({}, n), {
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
            case e7.d4z.GUILD_STAGE_VOICE:
                return (0, r.jsx)(eO.Z, { channel: e }, e.id);
            case e7.d4z.GUILD_VOICE:
            case e7.d4z.DM:
            case e7.d4z.GROUP_DM:
            case e7.d4z.PUBLIC_THREAD:
            case e7.d4z.PRIVATE_THREAD:
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
        return (0, r.jsx)(P.Z, {
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
                tl,
                {
                    channel: e,
                    guild: n,
                    sidebarState: t
                },
                e.id
            );
        }
        return (0, r.jsx)(
            eQ.Z,
            {
                channel: e,
                guild: n,
                chatInputType: k.Ie.NORMAL
            },
            null != n ? n.id : 'home'
        );
    }
    renderSidebar() {
        let { searchId: e, channel: t, parentChannel: n, guild: i, needSubscriptionToAccess: l, section: o, showCall: a, showActivityPanel: c } = this.props;
        if ((s()(null != t, 'Missing channel in Channel.renderSidebar'), __OVERLAY__ || l));
        else if (o === e7.ULH.PROFILE && t.isPrivate() && !a && !c) return (0, r.jsx)(ew.Z, { channel: t }, 'private-channel-profile-'.concat(t.id));
        else if (o === e7.ULH.MEMBERS)
            switch (t.type) {
                case e7.d4z.GROUP_DM:
                    return (0, r.jsx)(x.Z, { channel: t }, 'private-channel-recipients-'.concat(t.id));
                case e7.d4z.GUILD_DIRECTORY:
                case e7.d4z.GUILD_FORUM:
                case e7.d4z.GUILD_MEDIA:
                case e7.d4z.GUILD_ANNOUNCEMENT:
                case e7.d4z.GUILD_TEXT:
                    var u;
                    let d = !0 === e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? t.id : null != (u = t.guild_id) ? u : t.id;
                    return (0, r.jsx)(e$.Z, { channel: t }, 'channel-members-'.concat(d));
                case e7.d4z.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, r.jsx)(e$.Z, { channel: n }, 'channel-members-'.concat(n.id));
                    break;
                case e7.d4z.PUBLIC_THREAD:
                case e7.d4z.PRIVATE_THREAD:
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
        else if (o === e7.ULH.SEARCH && null != e) return (0, r.jsx)(ey.Z, { searchId: e });
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
                            return (n) => (0, r.jsx)(e, ti(tr({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => W.Z.viewPrompt(e6.r.REAL_NAME_PROMPT, t),
                            modalKey: 'Guild Hub Real Name Modal'
                        }
                    ),
                l &&
                    (0, g.ZDy)(
                        async () => {
                            let { default: e } = await n.e('77578').then(n.bind(n, 184782));
                            return (n) => (0, r.jsx)(e, ti(tr({}, n), { guildId: t }));
                        },
                        {
                            onCloseCallback: () => (0, eR.y0)(t, o),
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
        if (n === e7.ULH.SIDEBAR_CHAT && null != i) {
            if ((null == t ? void 0 : t.isNSFW()) && (!a || !o)) return null;
            switch (i.type) {
                case ev.tI.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(eE.Z, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location
                    });
                    break;
                case ev.tI.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? H.Z : eN.Z;
                    e = (0, r.jsx)(n, { channelId: i.channelId });
                    break;
                case ev.tI.VIEW_CHANNEL:
                case ev.tI.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== ev.jL.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t } = l.details;
                return (0, r.jsx)('div', {
                    style: { width: e7.$Y6 },
                    className: tt.guildSidebar,
                    children: (0, r.jsx)(Y.Z, {
                        guildId: e,
                        userId: t,
                        onClose: () => eC.Z.closeGuildSidebar(e)
                    })
                });
            }
        if (null == e) return null;
        let u = (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = s - e7.PrS - u;
        return (
            c && (d += y.qO),
            (0, r.jsx)(eJ.Z, {
                sidebarType: (null == t ? void 0 : t.type) != null && e7.TPd.GUILD_THREADS_ONLY.has(t.type) ? eJ.y.PostSidebar : eJ.y.ThreadSidebar,
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
        if (i) return (0, r.jsx)(e0.Z, {});
        if (null == e) return (0, r.jsx)(e1.Z, { channelId: this.props.channelId });
        let f = a === e7.ULH.SIDEBAR_CHAT,
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
                    'data-has-border': e.type !== e7.d4z.GUILD_VOICE,
                    className: o()(tt.chat, {
                        [tt.threadSidebarOpen]: f || m,
                        [tt.threadSidebarFloating]: f && p
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(v.Z, {
                                  style: { right: f ? d : void 0 },
                                  className: tt.uploadArea,
                                  channel: e,
                                  draftType: eU.d.ChannelMessage
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)('div', {
                            className: o()(tt.content, { [tt.noChat]: l === e7.AEg.NO_CHAT }),
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
            tn(this, 'state', {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1
            }),
            tn(this, 'handleTitleParentClick', () => {
                let { parentChannel: e } = this.props;
                null != e && (0, e_.Kh)(e.id);
            }),
            tn(this, '_handleContextMenu', (e, t) => {
                switch (t.type) {
                    case e7.d4z.GUILD_VOICE:
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        this.openChannelContextMenu(e, t);
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                        this.openThreadContextMenu(e, t);
                        break;
                    case e7.d4z.DM:
                        this.openDMContextMenu(e, t);
                }
            }),
            tn(this, 'handleContextMenu', (e) => {
                s()(null != this.props.channel, 'Missing channel in Channel.handleContextMenu'), this._handleContextMenu(e, this.props.channel);
            }),
            tn(this, 'handleParentContextMenu', (e) => {
                s()(null != this.props.parentChannel, 'Missing parentChannel in Channel.handleParentContextMenu'), this._handleContextMenu(e, this.props.parentChannel);
            }),
            tn(this, 'handleThreadSidebarResize', (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t
                });
            }),
            tn(this, 'openUserProfile', () => {
                let { channel: e } = this.props;
                s()(null == e ? void 0 : e.isPrivate(), 'Missing private channel in Channel.openUserProfile'),
                    (0, eA.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [T.Z.CHANNEL_HEADER]
                    });
            }),
            tn(this, 'renderJoinRequestInterviewButtons', () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e3.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(q.Z, {
                          channelId: e.id,
                          showTrailingDivider: !0
                      })
                    : null;
            }),
            tn(this, 'renderClipsEnabledIndicatorToolbarItem', () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e ? (0, r.jsx)(M.Z, { channelId: null != t ? t.id : null }) : null;
            }),
            tn(this, 'renderStreamQualityLiveIndicatorToolbarItem', () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e5.fO.STREAM
                    ? null
                    : (0, r.jsx)(
                          z.Z,
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
                let { channel: e, parentChannel: t, isLurking: n, showCall: i, showActivityPanel: l } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let o = [];
                if (e.isSystemDM()) return o;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                        break;
                    case e7.d4z.DM:
                        o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            o.push((0, r.jsx)(es.Z, { channel: e }, 'calls')),
                            o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')),
                            o.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: te.intl.string(te.t.Xjlbvr)
                                    },
                                    'invite'
                                )
                            ),
                            o.push(
                                (0, r.jsx)(
                                    ep.Z,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: i || l
                                    },
                                    'profile'
                                )
                            ),
                            o.push((0, r.jsx)(eu.Z, { channel: e }, 'safety_tools')),
                            o.push((0, r.jsx)(ei.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e7.d4z.GROUP_DM:
                        if ((o.push(this.renderJoinRequestInterviewButtons()), o.push(this.renderClipsEnabledIndicatorToolbarItem()), o.push(this.renderStreamQualityLiveIndicatorToolbarItem()), o.push((0, r.jsx)(es.Z, { channel: e }, 'calls')), o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), !e.isManaged())) {
                            let t = te.intl.string(te.t.Xjlbvr);
                            o.push(
                                (0, r.jsx)(
                                    ec.Z,
                                    {
                                        channel: e,
                                        tooltip: t
                                    },
                                    'invite'
                                )
                            );
                        }
                        o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), o.push((0, r.jsx)(ei.Z, { channel: e }, 'chat-wallpaper'));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        o.push((0, r.jsx)(eI.Z, { channel: e })), null == t || t.isForumLikeChannel() || o.push((0, r.jsx)(eS.Z, { channel: t }, 'browser')), e.isVocalThread() && o.push((0, r.jsx)(ed.Z, { channel: e }, 'thread-call')), o.push((0, r.jsx)(eP.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), e.isArchivedThread() || o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), null != t && (0, E.Lp)(e) && o.push((0, r.jsx)(er.Z, { channel: e }, 'summaries')), o.push((0, r.jsx)(eZ.Z, { channel: e }, 'threads-overflow'));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                        o.push((0, r.jsx)(F.Z, { channel: e }, 'favorites')), o.push((0, r.jsx)(eS.Z, { channel: e }, 'browser')), n || o.push((0, r.jsx)(et.Z, { channel: e }, 'notifications')), o.push((0, r.jsx)(en.Z, { channel: e }, 'pins')), o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members')), (0, E.Lp)(e) && o.push((0, r.jsx)(er.Z, { channel: e }, 'summaries'));
                        break;
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                        n || (o.push((0, r.jsx)(el.Z, { channel: e }, 'forum-onboarding')), o.push((0, r.jsx)(et.Z, { channel: e }, 'notifications'))), __OVERLAY__ || o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.GUILD_DIRECTORY:
                        o.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                }
                return o;
            }),
            tn(this, 'renderMobileToolbar', () => {
                let { channel: e } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderToolbar');
                let t = [];
                if (e.isSystemDM()) return t;
                switch (e.type) {
                    case e7.d4z.GUILD_STAGE_VOICE:
                    case e7.d4z.GUILD_VOICE:
                    case e7.d4z.DM:
                        break;
                    case e7.d4z.GROUP_DM:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.ANNOUNCEMENT_THREAD:
                    case e7.d4z.PRIVATE_THREAD:
                    case e7.d4z.PUBLIC_THREAD:
                        e.isArchivedThread() || t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                        break;
                    case e7.d4z.GUILD_ANNOUNCEMENT:
                    case e7.d4z.GUILD_TEXT:
                    case e7.d4z.GUILD_FORUM:
                    case e7.d4z.GUILD_MEDIA:
                    case e7.d4z.GUILD_DIRECTORY:
                        t.push((0, r.jsx)(ee.Z, { channelId: e.id }, 'members'));
                }
                return t;
            }),
            tn(this, 'renderFollowButton', () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)(g.zxk, {
                          size: g.zxk.Sizes.MIN,
                          color: g.zxk.Colors.PRIMARY,
                          className: tt.followButton,
                          onClick: () =>
                              (0, g.ZDy)(async () => {
                                  let { default: e } = await n.e('54642').then(n.bind(n, 720589));
                                  return (n) => (0, r.jsx)(e, tr({ channel: t }, n));
                              }),
                          children: te.intl.string(te.t['3aOv+v'])
                      })
                    : null;
            }),
            tn(this, 'renderHeaderBar', () => {
                let { channel: e, channelName: t, parentChannel: n, guild: i, guildId: l, showCall: a, showActivityPanel: c, hasVideo: u, headerGuildBreadcrumbPosition: d, isFavorites: p } = this.props;
                s()(null != e, 'Missing channel in Channel.renderHeaderBar'), s()(null != t, 'Should not be null if channel is not null.');
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : void 0,
                    f = (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null ? this.handleTitleParentClick : void 0;
                return (0, r.jsxs)('div', {
                    className: tt.subtitleContainer,
                    children: [
                        (0, r.jsx)(g.f6W, {
                            theme: u && a ? e7.BRd.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    eo.Z,
                                    {
                                        guildId: l,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, ex.X)()),
                                        showDivider: p && !(0, ex.X)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: o()(tt.title, s),
                                        transparent: a || c,
                                        'aria-label': te.intl.string(te.t.BIYAqa),
                                        children: [
                                            'left' === d &&
                                                (0, r.jsx)(ea.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'right'
                                                }),
                                            (0, ea.ud)({
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
                                                (0, r.jsx)(ea.TS, {
                                                    channel: e,
                                                    guild: i,
                                                    caretPosition: 'left'
                                                }),
                                            (0, ea.v0)(e, i)
                                        ]
                                    },
                                    'header-'.concat(e.id)
                                )
                        }),
                        (0, r.jsx)(eg.Z, { channelId: e.id })
                    ]
                });
            });
    }
}
let ta = (0, O.Z)(to),
    ts = i.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [l, o] = i.useState(null),
            a = (0, h.e7)([eW.Z], () => eW.Z.getChannelId()),
            s = (0, h.e7)([eW.Z], () => eW.Z.getVoiceChannelId()),
            c = (0, h.e7)([eD.Z], () => (null != n ? n : eD.Z.getChannel(a)), [a, n]),
            p = (0, h.e7)([eD.Z], () => eD.Z.getChannel(s), [s]),
            g = null == c ? void 0 : c.parent_id,
            _ = (0, h.e7)([eD.Z], () => eD.Z.getChannel(g), [g]),
            x = (0, h.e7)([eF.Z], () => eF.Z.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: y } = (0, X.Z)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            C = (0, h.e7)(
                [w.Z],
                () => {
                    let e = null != a ? w.Z.getParticipants(a) : [],
                        t = null != a ? w.Z.getActivityParticipants(a) : [];
                    return e.length - t.length > 0;
                },
                [a]
            ),
            v = (0, V.Z)(),
            j = (0, h.e7)([eW.Z], () => {
                var e;
                return (null != (e = null == v ? void 0 : v.channelId) ? e : eW.Z.getVoiceChannelId()) === (null == c ? void 0 : c.id);
            }),
            O = (0, h.e7)([S.ZP], () => (null != c ? S.ZP.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            P = (0, h.e7)([eV.Z], () => eV.Z.isConnected()),
            T = (0, I.Z)(P),
            R = P && !1 === T;
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
        let k = (0, h.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
            M = (0, h.e7)([S.ZP], () => S.ZP.getActivityPanelMode()),
            L = null != k && !(0, Z.Z)(null == c ? void 0 : c.id) && M === e8.Ez.PANEL,
            D = (0, h.e7)([eK.Z], () => null != c && c.isVocalThread() && !u().isEmpty(eK.Z.getVoiceStatesForChannel(c.id)), [c]),
            B = null != c && c.isPrivate() && !L && C,
            F = (null == c ? void 0 : c.isGuildVocal()) || B || D,
            { welcomeModalChannelId: H } = (0, d.TH)(),
            z = (0, h.e7)([em.Z], () => null != c && em.Z.isLurking(c.guild_id), [c]),
            W = (0, h.e7)([ek.Z], () => ek.Z.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            Y = (0, h.e7)([w.Z, S.ZP], () => (null != S.ZP.getConnectedActivityLocation() && S.ZP.getActivityPanelMode() === e8.Ez.PANEL ? (S.ZP.getFocusedLayout() === e8.MI.NO_CHAT ? e7.AEg.NO_CHAT : e7.AEg.NORMAL) : null != a ? w.Z.getLayout(a) : e7.AEg.NORMAL), [a]),
            q = (0, h.e7)([w.Z], () => (null != c ? w.Z.getSelectedParticipant(c.id) : null)),
            K = (0, h.e7)([eq.default], () => eq.default.getCurrentUser()),
            Q = (0, eh.Z)(null == x ? void 0 : x.id),
            J = (0, eM.Z)(H, null == x ? void 0 : x.id),
            { section: $, channelSidebarState: ee } = (0, h.cj)(
                [eL.ZP],
                () => ({
                    section: eL.ZP.getSection(a, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eL.ZP.getSidebarState(a)
                }),
                [a, c]
            ),
            et = null == x ? void 0 : x.id,
            en = (0, h.e7)([eL.ZP], () => eL.ZP.getGuildSidebarState(et), [et]),
            er = (0, h.e7)([eY.Z], () => eY.Z.getGuildId()) === e7.I_8,
            ei = (0, eX.ZP)(c),
            el = (0, eX.ZP)(c, !0),
            eo = null != c && s === c.id,
            ea = null != c && c.isGuildStageVoice();
        (0, N.Z)({ onTransition: void 0 }),
            i.useEffect(() => {
                var e, t, n;
                let r = (0, eb.s1)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e9.Df) {
                    let { channelId: e } = null != (n = (0, ef.Qj)(null == r || null == (t = r.location) ? void 0 : t.pathname)) ? n : {};
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
                null != l && null != e && ea && e.id === l && !t && ((0, ej.Cq)(e), o(null));
            }, [l, ea]);
        let eu = (0, E.ts)(c),
            ed = null != c && c.isPrivate(),
            ep = (0, I.Z)(ed),
            eg = (0, I.Z)(null == c ? void 0 : c.id);
        i.useEffect(() => {
            let e = ep && !ed,
                t = ep && ed && (null == c ? void 0 : c.id) !== eg;
            (e || t) && (0, G.EW)(f.z.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e4.L.AUTO });
        }, [null == c ? void 0 : c.id, eg, ed, ep]);
        let e_ = (0, m.f9)(),
            ex = (0, U.Q3)('Channel');
        return (0, r.jsx)(
            ta,
            ti(
                tr(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: a,
                        channel: c,
                        channelName: ei,
                        formattedChannelName: el,
                        parentChannel: _,
                        voiceChannel: p,
                        layout: Y,
                        needSubscriptionToAccess: y,
                        isLurking: z,
                        hasModalOpen: e_,
                        section: $,
                        channelSidebarState: ee,
                        guildSidebarState: en,
                        guild: x,
                        searchId: (0, h.e7)([ez.Z], () => ez.Z.getCurrentSearchId()),
                        showCall: !y && F,
                        showActivityPanel: L,
                        nsfwAgree: (0, h.e7)([eG.Z], () => eG.Z.didAgree(null == c ? void 0 : c.guild_id)),
                        isMobile: (0, h.e7)([eH.Z], () => (null == c ? void 0 : c.type) === e7.d4z.DM && eH.Z.isMobileOnline(c.getRecipientId()), [c]),
                        isUnavailable: (0, h.e7)([eB.Z], () => (null == c ? void 0 : c.guild_id) != null && eB.Z.isUnavailable(c.guild_id), [c]),
                        showRealNameModal: Q,
                        showWelcomeModal: !W && J,
                        showFollowButton: ((null == c ? void 0 : c.type) === e7.d4z.GUILD_ANNOUNCEMENT && (null == x ? void 0 : x.hasFeature(e7.oNc.NEWS))) || !1
                    },
                    (0, h.cj)([eK.Z], () => ({ hasVideo: null != c && eK.Z.hasVideo(c.id) }), [c])
                ),
                {
                    inCall: eo,
                    selectedParticipant: q,
                    nsfwAllowed: (null == K ? void 0 : K.nsfwAllowed) === !0,
                    showChannelSummaries: eu,
                    isFavorites: er,
                    headerGuildBreadcrumbPosition: er ? 'left' : 'right',
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: L,
                    isRefreshEnabled: ex,
                    embeddedActivity: k
                }
            )
        );
    });
