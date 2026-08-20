n.d(t, { A: () => eA });
var l = n(477900),
    i = n(582128),
    s = n(284009),
    a = n.n(s),
    r = n(17928),
    o = n(139033),
    c = n(314116),
    d = n(192308),
    u = n(725570),
    h = n(477155),
    m = n(922016),
    g = n(939249),
    p = n(830215),
    A = n(857182),
    f = n(66834),
    C = n(775602),
    x = n(315982),
    E = n(480900),
    S = n(311043),
    I = n(60465),
    _ = n(409626),
    j = n(422069),
    y = n(652215),
    b = n(624458),
    N = n(821124),
    v = n(202384),
    T = n(513461),
    M = n(709977),
    R = n(212455),
    D = n(224640),
    L = n(430993),
    k = n(696208),
    P = n(604121),
    O = n(297264),
    G = n(834730),
    U = n(915089),
    w = n(375708),
    F = n(788228);
function H() {
    return n
        .e("244678")
        .then(n.t.bind(n, 144759, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let B = function (e) {
    let t = (0, U.GV)();
    return (0, l.jsxs)(D.d, {
        ...e,
        size: "sm",
        children: [
            (0, l.jsx)("div", { className: F.Mp, children: (0, l.jsx)(P.a, { importData: H, className: F.WG }) }),
            (0, l.jsx)(L.c, {
                children: (0, l.jsxs)("div", {
                    className: F.lq,
                    children: [
                        (0, l.jsx)(O.D, {
                            variant: "heading-lg/semibold",
                            className: F.wx,
                            id: t,
                            children: w.intl.format(w.t.z9qozJ, { guildName: e.guildName }),
                        }),
                        (0, l.jsx)(G.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: w.intl.string(w.t.nwpqyc),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(k.H, {
                actions: [
                    {
                        variant: "primary",
                        onClick: function () {
                            e.onAccept(), e.onClose();
                        },
                        text: w.intl.string(w.t.NuzmOA),
                    },
                ],
                actionsFullWidth: !0,
            }),
        ],
    });
};
var V = n(228366),
    K = n(857071);
let z = null,
    W = null;
function $() {
    let e = K.A.mostRecentLurkedGuildId();
    null != e ? ((z = e), (W = null)) : ((W = null != z ? z : null), (z = null));
}
class J extends r.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([K.A], $);
    }
    shouldShowPopout(e) {
        return W === e;
    }
}
let q = new J(V.h);
var Z = n(821609),
    Y = n(299409);
let X = function (e) {
    let { guild: t, onClose: i } = e;
    return (0, l.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: Y.Sl, src: n(960416) }),
            (0, l.jsxs)("div", {
                className: Y.Qs,
                children: [
                    (0, l.jsx)(O.D, {
                        variant: "heading-md/semibold",
                        children: w.intl.format(w.t.THgVCC, { guild: t.name }),
                    }),
                    (0, l.jsx)(G.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: w.intl.string(w.t["1yq3nO"]),
                    }),
                    (0, l.jsx)("div", {
                        className: Y.UD,
                        children: (0, l.jsx)(Z.$, { variant: "primary", text: w.intl.string(w.t.hLw0wc), onClick: i }),
                    }),
                ],
            }),
        ],
    });
};
var Q = n(698405),
    ee = n(557722),
    et = n(976860),
    en = n(363195),
    el = n(560010),
    ei = n(696451),
    es = n(71393),
    ea = n(834942),
    er = n(576705),
    eo = n(287809),
    ec = n(488926),
    ed = n(137577),
    eu = n(786051),
    eh = n(360469),
    em = n(53516),
    eg = n(514559);
class ep extends i.PureComponent {
    state = { submitting: !1, shouldShowLurkerModeUpsellPopout: !1, shouldShowLurkerModeSuccessPopout: !1 };
    textAreaContainerRef = i.createRef();
    upsellTargetRef = i.createRef();
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && A.A.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: l } = this.props;
        l ||
            e.shouldShowLurkerModeSuccessPopout ||
            !t ||
            null == n ||
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    renderSuccessPopout = (e) => {
        let { closePopout: t } = e,
            { guild: n } = this.props;
        return a()(null != n, "This guildID cannot be null"), (0, l.jsx)(X, { onClose: t, guild: n });
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: w.intl.string(w.t.aIz1oV),
                subtitle: w.intl.string(w.t["13tjTU"]),
                variant: "primary",
                confirmText: w.intl.string(w.t["cY+Oob"]),
                onConfirm: () => b.A.removeGuildJoinRequest(e.id),
            });
    };
    handleViewApplicationRejection = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, d.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("298903"), n.e("914382")]).then(n.bind(n, 463325));
                return (n) => (0, l.jsx)(t, { guildId: e.id, ...n });
            });
    };
    handleShowMemberVerification = () => {
        let { guild: e } = this.props;
        null != e && (0, v.Ze)(e.id);
    };
    handleClaimAccount = () => {
        x.R();
    };
    handleVerifyPhone = () => {
        (0, d.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("590275"),
                    n.e("334179"),
                    n.e("14775"),
                    n.e("989545"),
                    n.e("991531"),
                    n.e("311493"),
                    n.e("84704"),
                    n.e("286197"),
                ]).then(n.bind(n, 615715));
                return (t) => (0, l.jsx)(e, { reason: ee.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: em.V },
        );
    };
    handleResendVerification = () => {
        p.A.verifyResend();
        let e = eo.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: w.intl.string(w.t.LykQYk), subtitle: w.intl.format(w.t.azKEPy, { email: e }) });
    };
    handleTextAreaClick = () => {
        let { showLurkerModeUpsellPopout: e } = this.props;
        this.setState({ shouldShowLurkerModeUpsellPopout: e });
    };
    handleJoinServer = async () => {
        this.setState({ submitting: !0 });
        let e = this.props.channel.getGuildId();
        try {
            await f.A.joinGuild(e, { source: y.Q4z.CHAT_INPUT_BLOCKER });
        } catch {
            this.setState({ submitting: !1 });
        }
    };
    handleGoBack = () => {
        this.setState({ submitting: !0 }), (0, et.JK)().goBack();
    };
    handleFollowAnnouncement = () => {
        let { channel: e } = this.props;
        (0, d.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("836178"), n.e("670774")]).then(n.bind(n, 464035));
            return (n) => (0, l.jsx)(t, { channel: e, ...n });
        });
    };
    closeLurkerModeUpsellPopout = () => {
        this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
    };
    renderLurkerModeUpsellPopout = () => {
        let { guild: e } = this.props;
        return (
            a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
            (0, l.jsx)(Q.A, { type: Q.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === T.B5.APPROVED;
        if (null == e || null == t || !n || (0, N.NK)(t)) return null;
        function i() {
            null != e && null != t && b.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        }
        return (0, l.jsx)(u.aF, {
            renderModal: (t) => (0, l.jsx)(B, { ...t, onAccept: i, guildName: e.name }),
            onCloseRequest: i,
        });
    };
    render() {
        let {
                isFollowable: e,
                isLurking: t,
                notClaimed: n,
                notPhoneVerified: i,
                notEmailVerified: s,
                newMember: a,
                memberDeadline: r,
                newAccount: o,
                accountDeadline: c,
                theme: d,
                children: u,
                canSendMessages: p,
                channelFollowingUsersSeen: A,
                showLurkerModeUpsellPopout: f,
                showMemberVerificationModal: C,
                missingVerificationRole: x,
                verificationRole: S,
                useReducedMotion: I,
                isStaff: _,
                guildJoinRequest: j,
                showLinkedLobbyApplicationLoadingIndicator: b,
                requiredLinkedLobbyApplication: N,
                shouldRelaunchLinkedLobbyApplication: v,
                pendingGameProfileReturn: M,
                guild: R,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: D, shouldShowLurkerModeSuccessPopout: L } = this.state,
            k = { theme: d, useReducedMotion: I };
        if (e && !p && null != M)
            null != M.gameIconUrl && (k.imageSrc = M.gameIconUrl),
                (k.message = w.intl.format(w.t["qxH/YE"], { gameName: M.gameName })),
                (k.buttonText = w.intl.string(w.t.DjifDP)),
                (k.buttonIcon = h.r),
                (k.buttonVariant = "primary"),
                (k.onButtonClick = M.onReturnToGameProfile);
        else if (e && !p) {
            if (((k.message = w.intl.string(w.t.Hl0Mqh)), null != A && A >= 1e3)) {
                let e = 1e3 * Math.floor(A / 1e3);
                k.subtitle = w.intl.formatToPlainString(w.t.C5bgrC, { count: e.toLocaleString() });
            }
            (k.buttonText = w.intl.string(w.t["3aOv+h"])),
                (k.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((k.onSecondaryButtonClick = this.handleJoinServer),
                    (k.secondaryButtonText = w.intl.string(w.t.RLch70)));
        } else if (n)
            (k.message = w.intl.string(w.t["Eg3/c9"])),
                (k.buttonText = w.intl.string(w.t.fiNVin)),
                (k.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (C)
            switch (j?.applicationStatus) {
                case T.B5.SUBMITTED:
                    (k.message = w.intl.string(w.t["5iLvSx"])),
                        (k.subtitle = w.intl.string(w.t.FdsK4h)),
                        (k.buttonText = w.intl.string(w.t.mqtdmQ)),
                        (k.onButtonClick = this.handleCancelApplication);
                    break;
                case T.B5.REJECTED:
                    (k.message = w.intl.string(w.t.lk30cY)),
                        (k.buttonText = w.intl.string(w.t["8RrsHr"])),
                        (k.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (k.message = w.intl.string(w.t.rEBKvg)),
                        (k.buttonText = w.intl.string(w.t["r8/DT+"])),
                        (k.buttonVariant = "primary"),
                        (k.onButtonClick = this.handleShowMemberVerification);
            }
        else
            null != R && null != S && x
                ? ((k.message = w.intl.format(w.t.HbivnU, { roleName: `@${S.name}` })),
                  null === S.tags.guild_connections &&
                      ((k.buttonText = w.intl.string(w.t["6Ge2LG"])), (k.onButtonClick = () => (0, E.b)(S, R.id))))
                : b || null == N
                  ? i && !_
                      ? ((k.message = w.intl.string(w.t["2dThMM"])),
                        (k.buttonText = w.intl.string(w.t["50gfOv"])),
                        (k.onButtonClick = this.handleVerifyPhone))
                      : s
                        ? ((k.message = w.intl.string(w.t.FkGPS5)),
                          (k.buttonText = w.intl.string(w.t.lm1UKt)),
                          (k.onButtonClick = this.handleResendVerification))
                        : a
                          ? ((k.message = w.intl.formatToPlainString(w.t.IH7RMF, { min: y.$8o.MEMBER_AGE })),
                            (k.countdown = r))
                          : o &&
                            ((k.message = w.intl.formatToPlainString(w.t["2JA2GH"], { min: y.$8o.ACCOUNT_AGE })),
                            (k.countdown = c))
                  : ((k.imageSrc = N.getIconURL(eh.iu.SMALL) ?? void 0),
                    v
                        ? (k.message = w.intl.format(w.t["SU2mY/"], { name: N.name }))
                        : ((k.message = w.intl.format(w.t.EvDn1D, { name: N.name })),
                          null != N.connectionEntrypointUrl &&
                              ((k.buttonText = w.intl.string(w.t.S0W8Z5)),
                              (k.onButtonClick = () => {
                                  window.open(N.connectionEntrypointUrl, "_blank");
                              }))));
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: L,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, l.jsx)(eu.A, {
                    ...k,
                    children: (0, l.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            f
                                ? (0, l.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: D,
                                      position: "top",
                                      children: (e) =>
                                          (0, l.jsx)(g.D, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: eg._,
                                              onClick: this.handleTextAreaClick,
                                              children: u,
                                          }),
                                  })
                                : u,
                        ],
                    }),
                }),
        });
    }
}
function eA(e) {
    let { channel: t, children: n } = e,
        s = t.getGuildId(),
        a = (0, r.bG)([es.A], () => es.A.getGuild(s)),
        o = (0, r.bG)([ea.A], () => ea.A.getCheck(s)),
        c = t.type === y.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(y.GuildFeatures.NEWS),
        d = (0, r.bG)([el.A], () => (c ? el.A.getFollowerStatsForChannel(t.id) : null)),
        u = (0, r.bG)([K.A], () => K.A.isLurking(s)),
        h = (0, r.bG)([eo.default], () => eo.default.getCurrentUser()),
        m = h?.isStaff() ?? !1,
        g = (0, r.bG)([ei.Ay], () => null != h && (ei.Ay.getMember(s, h.id)?.isPending ?? !1)),
        p = !!(0, M.Qd)(a),
        A = (0, r.bG)([q], () => q.shouldShowPopout(s)),
        f = (0, r.bG)([er.A], () => er.A.can(y.xBc.SEND_MESSAGES, t)),
        x = (0, r.bG)([R.A], () => R.A.getRequest(s)),
        {
            showLinkedLobbyApplicationLoadingIndicator: E,
            requiredLinkedLobbyApplication: b,
            shouldRelaunchLinkedLobbyApplication: N,
        } = (0, ed.A)(t.linkedLobby),
        v = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([j.A], () => {
                    let e = j.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                l = i.useCallback(() => {
                    null != n &&
                        I.default.returnToGameProfile({
                            gameId: n.gameId,
                            source: _.GameProfileSources.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                        });
                }, [n]),
                s = (0, r.bG)([S.A], () => (n?.gameId != null ? S.A.getGame(n.gameId) : null));
            i.useEffect(() => {
                if (s?.id != null) return () => I.default.clearGameProfilePendingReturn(s.id);
            }, [s?.id]);
            let a = s?.name;
            if (null == s || null == a) return null;
            let o = s?.getIconURL(y.eQT) ?? void 0;
            return { gameId: s.id, gameName: a, gameIconUrl: o, onReturnToGameProfile: l };
        })({ channelId: t.id }),
        D = {
            ...o,
            guild: a,
            isLurking: u,
            isFollowable: c,
            shouldShowLurkerModeSuccessPopout: A,
            showLurkerModeUpsellPopout: u && null != a && ec.MJ(y.xBc.SEND_MESSAGES, t),
            theme: en.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: p,
            showMemberVerificationModal: g && p,
            guildJoinRequestStatus: x?.applicationStatus ?? T.B5.STARTED,
            guildJoinRequest: x,
            showLinkedLobbyApplicationLoadingIndicator: E,
            requiredLinkedLobbyApplication: b,
            shouldRelaunchLinkedLobbyApplication: N,
            useReducedMotion: C.Ay.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: v,
        };
    return (0, l.jsx)(ep, { ...D, channel: t, children: n });
}
