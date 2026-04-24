n.d(t, { A: () => eA });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(17928),
    o = n(139033),
    c = n(314116),
    d = n(192308),
    u = n(725570),
    h = n(477155),
    m = n(922016),
    p = n(939249),
    g = n(830215),
    A = n(857182),
    f = n(686956),
    _ = n(775602),
    E = n(315982),
    C = n(311043),
    x = n(486020),
    b = n(60465),
    S = n(409626),
    I = n(422069),
    y = n(652215),
    T = n(624458),
    v = n(821124),
    N = n(202384),
    j = n(513461),
    M = n(709977),
    R = n(212455),
    L = n(224640),
    D = n(430993),
    k = n(696208),
    P = n(604121),
    G = n(534514),
    O = n(834730),
    w = n(915089),
    U = n(985018),
    F = n(786147);
let B = () =>
        n
            .e("44678")
            .then(n.t.bind(n, 144759, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    H = (e) => {
        let t = (0, w.GV)();
        return (0, i.jsxs)(L.d, {
            ...e,
            size: "sm",
            children: [
                (0, i.jsx)("div", { className: F.Mp, children: (0, i.jsx)(P.a, { importData: B, className: F.WG }) }),
                (0, i.jsx)(D.c, {
                    children: (0, i.jsxs)("div", {
                        className: F.lq,
                        children: [
                            (0, i.jsx)(G.D, {
                                variant: "heading-lg/semibold",
                                className: F.wx,
                                id: t,
                                children: U.intl.format(U.t.z9qozJ, { guildName: e.guildName }),
                            }),
                            (0, i.jsx)(O.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: U.intl.string(U.t.nwpqyc),
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(k.H, {
                    actions: [
                        {
                            variant: "primary",
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            text: U.intl.string(U.t.NuzmOA),
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        });
    };
var K = n(228366),
    V = n(857071);
let z = null,
    W = null;
function q() {
    let e = V.A.mostRecentLurkedGuildId();
    null != e ? ((z = e), (W = null)) : ((W = null != z ? z : null), (z = null));
}
class $ extends r.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([V.A], q);
    }
    shouldShowPopout(e) {
        return W === e;
    }
}
let J = new $(K.h);
var Z = n(821609),
    Y = n(35787);
let X = (e) => {
    let { guild: t, onClose: l } = e;
    return (0, i.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, i.jsx)("img", { alt: "", className: Y.Sl, src: n(960416) }),
            (0, i.jsxs)("div", {
                className: Y.Qs,
                children: [
                    (0, i.jsx)(G.D, {
                        variant: "heading-md/semibold",
                        children: U.intl.format(U.t.THgVCC, { guild: t.name }),
                    }),
                    (0, i.jsx)(O.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: U.intl.string(U.t["1yq3nO"]),
                    }),
                    (0, i.jsx)("div", {
                        className: Y.UD,
                        children: (0, i.jsx)(Z.$, { variant: "primary", text: U.intl.string(U.t.hLw0wc), onClick: l }),
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
    ei = n(560010),
    el = n(696451),
    es = n(71393),
    ea = n(834942),
    er = n(576705),
    eo = n(287809),
    ec = n(488926),
    ed = n(137577),
    eu = n(786051),
    eh = n(360469),
    em = n(53516),
    ep = n(968884);
class eg extends l.PureComponent {
    state = { submitting: !1, shouldShowLurkerModeUpsellPopout: !1, shouldShowLurkerModeSuccessPopout: !1 };
    textAreaContainerRef = l.createRef();
    upsellTargetRef = l.createRef();
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && A.A.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: i } = this.props;
        i ||
            e.shouldShowLurkerModeSuccessPopout ||
            !t ||
            null == n ||
            this.setState({ shouldShowLurkerModeSuccessPopout: !0 });
    }
    renderSuccessPopout = (e) => {
        let { closePopout: t } = e,
            { guild: n } = this.props;
        return a()(null != n, "This guildID cannot be null"), (0, i.jsx)(X, { onClose: t, guild: n });
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: U.intl.string(U.t.aIz1oV),
                subtitle: U.intl.string(U.t["13tjTU"]),
                variant: "primary",
                confirmText: U.intl.string(U.t["cY+Oob"]),
                onConfirm: () => T.A.removeGuildJoinRequest(e.id),
            });
    };
    handleViewApplicationRejection = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, d.openModalLazy)(async () => {
                let { default: t } = await n.e("14382").then(n.bind(n, 463325));
                return (n) => (0, i.jsx)(t, { guildId: e.id, ...n });
            });
    };
    handleShowMemberVerification = () => {
        let { guild: e } = this.props;
        null != e && (0, N.Ze)(e.id);
    };
    handleClaimAccount = () => {
        E.R();
    };
    handleVerifyPhone = () => {
        (0, d.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("84704"), n.e("85543")]).then(n.bind(n, 615715));
                return (t) => (0, i.jsx)(e, { reason: ee.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: em.V },
        );
    };
    handleResendVerification = () => {
        g.A.verifyResend();
        let e = eo.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: U.intl.string(U.t.LykQYk), subtitle: U.intl.format(U.t.azKEPy, { email: e }) });
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
            let { default: t } = await n.e("66464").then(n.bind(n, 464035));
            return (n) => (0, i.jsx)(t, { channel: e, ...n });
        });
    };
    closeLurkerModeUpsellPopout = () => {
        this.setState({ shouldShowLurkerModeUpsellPopout: !1 });
    };
    renderLurkerModeUpsellPopout = () => {
        let { guild: e } = this.props;
        return (
            a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
            (0, i.jsx)(Q.A, { type: Q.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === j.B5.APPROVED;
        if (null == e || null == t || !n || (0, v.NK)(t)) return null;
        let l = () => {
            T.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        };
        return (0, i.jsx)(u.aF, {
            renderModal: (t) => (0, i.jsx)(H, { ...t, onAccept: l, guildName: e.name }),
            onCloseRequest: l,
        });
    };
    render() {
        let {
                isFollowable: e,
                isLurking: t,
                notClaimed: n,
                notPhoneVerified: l,
                notEmailVerified: s,
                newMember: a,
                memberDeadline: r,
                newAccount: o,
                accountDeadline: c,
                theme: d,
                children: u,
                canSendMessages: g,
                channelFollowingUsersSeen: A,
                showLurkerModeUpsellPopout: f,
                showMemberVerificationModal: _,
                useReducedMotion: E,
                isStaff: C,
                guildJoinRequest: x,
                showLinkedLobbyApplicationLoadingIndicator: b,
                requiredLinkedLobbyApplication: S,
                pendingGameProfileReturn: I,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: T, shouldShowLurkerModeSuccessPopout: v } = this.state,
            N = { theme: d, useReducedMotion: E };
        if (e && !g && null != I)
            null != I.gameIconUrl && (N.imageSrc = I.gameIconUrl),
                (N.message = U.intl.format(U.t["qxH/YE"], { gameName: I.gameName })),
                (N.buttonText = U.intl.string(U.t.DjifDP)),
                (N.buttonIcon = h.r),
                (N.buttonVariant = "primary"),
                (N.onButtonClick = I.onReturnToGameProfile);
        else if (e && !g) {
            if (((N.message = U.intl.string(U.t.Hl0Mqh)), null != A && A >= 1e3)) {
                let e = 1e3 * Math.floor(A / 1e3);
                N.subtitle = U.intl.formatToPlainString(U.t.C5bgrC, { count: e.toLocaleString() });
            }
            (N.buttonText = U.intl.string(U.t["3aOv+h"])),
                (N.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((N.onSecondaryButtonClick = this.handleJoinServer),
                    (N.secondaryButtonText = U.intl.string(U.t.RLch70)));
        } else if (n)
            (N.message = U.intl.string(U.t["Eg3/c9"])),
                (N.buttonText = U.intl.string(U.t.fiNVin)),
                (N.onButtonClick = _ ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (_)
            switch (x?.applicationStatus) {
                case j.B5.SUBMITTED:
                    (N.message = U.intl.string(U.t["5iLvSx"])),
                        (N.subtitle = U.intl.string(U.t.FdsK4h)),
                        (N.buttonText = U.intl.string(U.t.mqtdmQ)),
                        (N.onButtonClick = this.handleCancelApplication);
                    break;
                case j.B5.REJECTED:
                    (N.message = U.intl.string(U.t.lk30cY)),
                        (N.buttonText = U.intl.string(U.t["8RrsHr"])),
                        (N.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (N.message = U.intl.string(U.t.rEBKvg)),
                        (N.buttonText = U.intl.string(U.t["r8/DT+"])),
                        (N.buttonVariant = "primary"),
                        (N.onButtonClick = this.handleShowMemberVerification);
            }
        else
            b || null == S
                ? l && !C
                    ? ((N.message = U.intl.string(U.t["2dThMM"])),
                      (N.buttonText = U.intl.string(U.t["50gfOv"])),
                      (N.onButtonClick = this.handleVerifyPhone))
                    : s
                      ? ((N.message = U.intl.string(U.t.FkGPS5)),
                        (N.buttonText = U.intl.string(U.t.lm1UKt)),
                        (N.onButtonClick = this.handleResendVerification))
                      : a
                        ? ((N.message = U.intl.formatToPlainString(U.t.IH7RMF, { min: y.$8o.MEMBER_AGE })),
                          (N.countdown = r))
                        : o &&
                          ((N.message = U.intl.formatToPlainString(U.t["2JA2GH"], { min: y.$8o.ACCOUNT_AGE })),
                          (N.countdown = c))
                : ((N.imageSrc = S.getIconURL(eh.iu.SMALL) ?? void 0),
                  (N.message = U.intl.format(U.t.EvDn1D, { name: S.name })),
                  null != S.connectionEntrypointUrl &&
                      ((N.buttonText = U.intl.string(U.t.S0W8Z5)),
                      (N.onButtonClick = () => {
                          window.open(S.connectionEntrypointUrl, "_blank");
                      })));
        return (0, i.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: v,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(eu.A, {
                    ...N,
                    children: (0, i.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            f
                                ? (0, i.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: T,
                                      position: "top",
                                      children: (e) =>
                                          (0, i.jsx)(p.D, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: ep._,
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
        d = (0, r.bG)([ei.A], () => (c ? ei.A.getFollowerStatsForChannel(t.id) : null)),
        u = (0, r.bG)([V.A], () => V.A.isLurking(s)),
        h = (0, r.bG)([eo.default], () => eo.default.getCurrentUser()),
        m = h?.isStaff() ?? !1,
        p = (0, r.bG)([el.Ay], () => null != h && (el.Ay.getMember(s, h.id)?.isPending ?? !1)),
        g = !!(0, M.Qd)(a),
        A = (0, r.bG)([J], () => J.shouldShowPopout(s)),
        f = (0, r.bG)([er.A], () => er.A.can(y.xBc.SEND_MESSAGES, t)),
        E = (0, r.bG)([R.A], () => R.A.getRequest(s)),
        { showLinkedLobbyApplicationLoadingIndicator: T, requiredLinkedLobbyApplication: v } = (0, ed.A)(t.linkedLobby),
        N = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([I.A], () => {
                    let e = I.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                i = l.useCallback(() => {
                    null != n &&
                        b.A.returnToGameProfile({
                            gameId: n.gameId,
                            source: S.Ob.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                        });
                }, [n]),
                s = (0, r.bG)([C.A], () => (n?.gameId != null ? C.A.getGame(n.gameId) : null));
            l.useEffect(() => {
                if (s?.id != null) return () => b.A.clearGameProfilePendingReturn(s.id);
            }, [s?.id]);
            let a = s?.name;
            if (null == s || null == a) return null;
            let o =
                s?.iconHash != null && "" !== s.iconHash
                    ? x.Ay.getGameAssetURL({ id: s.id, hash: s.iconHash, size: y.eQT })
                    : void 0;
            return { gameId: s.id, gameName: a, gameIconUrl: o, onReturnToGameProfile: i };
        })({ channelId: t.id }),
        L = {
            ...o,
            guild: a,
            isLurking: u,
            isFollowable: c,
            shouldShowLurkerModeSuccessPopout: A,
            showLurkerModeUpsellPopout: u && null != a && ec.MJ(y.xBc.SEND_MESSAGES, t),
            theme: en.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: g,
            showMemberVerificationModal: p && g,
            guildJoinRequestStatus: E?.applicationStatus ?? j.B5.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: T,
            requiredLinkedLobbyApplication: v,
            useReducedMotion: _.A.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: N,
        };
    return (0, i.jsx)(eg, { ...L, channel: t, children: n });
}
