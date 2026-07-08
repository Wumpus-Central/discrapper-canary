n.d(t, { A: () => eA });
var l = n(627968),
    i = n(64700),
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
    _ = n(60465),
    I = n(409626),
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
    O = n(534514),
    G = n(834730),
    U = n(915089),
    w = n(375708),
    F = n(786147);
function H() {
    return n
        .e("44678")
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
function q() {
    let e = K.A.mostRecentLurkedGuildId();
    null != e ? ((z = e), (W = null)) : ((W = null != z ? z : null), (z = null));
}
class $ extends r.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([K.A], q);
    }
    shouldShowPopout(e) {
        return W === e;
    }
}
let J = new $(V.h);
var Z = n(821609),
    Y = n(35787);
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
    eg = n(968884);
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
                let { default: t } = await Promise.all([n.e("25099"), n.e("14382")]).then(n.bind(n, 463325));
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
                    n.e("56643"),
                    n.e("65264"),
                    n.e("86380"),
                    n.e("89545"),
                    n.e("91531"),
                    n.e("11493"),
                    n.e("84704"),
                    n.e("86197"),
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
            let { default: t } = await Promise.all([n.e("21315"), n.e("70774")]).then(n.bind(n, 464035));
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
        let i = () => {
            b.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        };
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
                useReducedMotion: _,
                isStaff: I,
                guildJoinRequest: j,
                showLinkedLobbyApplicationLoadingIndicator: b,
                requiredLinkedLobbyApplication: N,
                pendingGameProfileReturn: v,
                guild: M,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: R, shouldShowLurkerModeSuccessPopout: D } = this.state,
            L = { theme: d, useReducedMotion: _ };
        if (e && !p && null != v)
            null != v.gameIconUrl && (L.imageSrc = v.gameIconUrl),
                (L.message = w.intl.format(w.t["qxH/YE"], { gameName: v.gameName })),
                (L.buttonText = w.intl.string(w.t.DjifDP)),
                (L.buttonIcon = h.r),
                (L.buttonVariant = "primary"),
                (L.onButtonClick = v.onReturnToGameProfile);
        else if (e && !p) {
            if (((L.message = w.intl.string(w.t.Hl0Mqh)), null != A && A >= 1e3)) {
                let e = 1e3 * Math.floor(A / 1e3);
                L.subtitle = w.intl.formatToPlainString(w.t.C5bgrC, { count: e.toLocaleString() });
            }
            (L.buttonText = w.intl.string(w.t["3aOv+h"])),
                (L.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((L.onSecondaryButtonClick = this.handleJoinServer),
                    (L.secondaryButtonText = w.intl.string(w.t.RLch70)));
        } else if (n)
            (L.message = w.intl.string(w.t["Eg3/c9"])),
                (L.buttonText = w.intl.string(w.t.fiNVin)),
                (L.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (C)
            switch (j?.applicationStatus) {
                case T.B5.SUBMITTED:
                    (L.message = w.intl.string(w.t["5iLvSx"])),
                        (L.subtitle = w.intl.string(w.t.FdsK4h)),
                        (L.buttonText = w.intl.string(w.t.mqtdmQ)),
                        (L.onButtonClick = this.handleCancelApplication);
                    break;
                case T.B5.REJECTED:
                    (L.message = w.intl.string(w.t.lk30cY)),
                        (L.buttonText = w.intl.string(w.t["8RrsHr"])),
                        (L.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (L.message = w.intl.string(w.t.rEBKvg)),
                        (L.buttonText = w.intl.string(w.t["r8/DT+"])),
                        (L.buttonVariant = "primary"),
                        (L.onButtonClick = this.handleShowMemberVerification);
            }
        else
            null != M && null != S && x
                ? ((L.message = w.intl.format(w.t.HbivnU, { roleName: `@${S.name}` })),
                  null === S.tags.guild_connections &&
                      ((L.buttonText = w.intl.string(w.t["6Ge2LG"])), (L.onButtonClick = () => (0, E.b)(S, M.id))))
                : b || null == N
                  ? i && !I
                      ? ((L.message = w.intl.string(w.t["2dThMM"])),
                        (L.buttonText = w.intl.string(w.t["50gfOv"])),
                        (L.onButtonClick = this.handleVerifyPhone))
                      : s
                        ? ((L.message = w.intl.string(w.t.FkGPS5)),
                          (L.buttonText = w.intl.string(w.t.lm1UKt)),
                          (L.onButtonClick = this.handleResendVerification))
                        : a
                          ? ((L.message = w.intl.formatToPlainString(w.t.IH7RMF, { min: y.$8o.MEMBER_AGE })),
                            (L.countdown = r))
                          : o &&
                            ((L.message = w.intl.formatToPlainString(w.t["2JA2GH"], { min: y.$8o.ACCOUNT_AGE })),
                            (L.countdown = c))
                  : ((L.imageSrc = N.getIconURL(eh.iu.SMALL) ?? void 0),
                    (L.message = w.intl.format(w.t.EvDn1D, { name: N.name })),
                    null != N.connectionEntrypointUrl &&
                        ((L.buttonText = w.intl.string(w.t.S0W8Z5)),
                        (L.onButtonClick = () => {
                            window.open(N.connectionEntrypointUrl, "_blank");
                        })));
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: D,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, l.jsx)(eu.A, {
                    ...L,
                    children: (0, l.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            f
                                ? (0, l.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: R,
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
        A = (0, r.bG)([J], () => J.shouldShowPopout(s)),
        f = (0, r.bG)([er.A], () => er.A.can(y.xBc.SEND_MESSAGES, t)),
        x = (0, r.bG)([R.A], () => R.A.getRequest(s)),
        { showLinkedLobbyApplicationLoadingIndicator: E, requiredLinkedLobbyApplication: b } = (0, ed.A)(t.linkedLobby),
        N = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([j.A], () => {
                    let e = j.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                l = i.useCallback(() => {
                    null != n &&
                        _.default.returnToGameProfile({
                            gameId: n.gameId,
                            source: I.GameProfileSources.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                        });
                }, [n]),
                s = (0, r.bG)([S.A], () => (n?.gameId != null ? S.A.getGame(n.gameId) : null));
            i.useEffect(() => {
                if (s?.id != null) return () => _.default.clearGameProfilePendingReturn(s.id);
            }, [s?.id]);
            let a = s?.name;
            if (null == s || null == a) return null;
            let o = s?.getIconURL(y.eQT) ?? void 0;
            return { gameId: s.id, gameName: a, gameIconUrl: o, onReturnToGameProfile: l };
        })({ channelId: t.id }),
        v = {
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
            useReducedMotion: C.Ay.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: N,
        };
    return (0, l.jsx)(ep, { ...v, channel: t, children: n });
}
