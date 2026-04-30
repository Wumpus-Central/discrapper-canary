n.d(t, { A: () => ep });
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
    A = n(939249),
    g = n(830215),
    p = n(857182),
    f = n(66834),
    C = n(775602),
    E = n(315982),
    x = n(311043),
    S = n(486020),
    _ = n(60465),
    I = n(409626),
    T = n(422069),
    y = n(652215),
    N = n(624458),
    j = n(821124),
    b = n(202384),
    M = n(513461),
    v = n(709977),
    R = n(212455),
    D = n(224640),
    L = n(430993),
    P = n(696208),
    k = n(604121),
    G = n(534514),
    O = n(834730),
    U = n(915089),
    w = n(375708),
    F = n(786147);
let H = () =>
        n
            .e("44678")
            .then(n.t.bind(n, 144759, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    B = (e) => {
        let t = (0, U.GV)();
        return (0, l.jsxs)(D.d, {
            ...e,
            size: "sm",
            children: [
                (0, l.jsx)("div", { className: F.Mp, children: (0, l.jsx)(k.a, { importData: H, className: F.WG }) }),
                (0, l.jsx)(L.c, {
                    children: (0, l.jsxs)("div", {
                        className: F.lq,
                        children: [
                            (0, l.jsx)(G.D, {
                                variant: "heading-lg/semibold",
                                className: F.wx,
                                id: t,
                                children: w.intl.format(w.t.z9qozJ, { guildName: e.guildName }),
                            }),
                            (0, l.jsx)(O.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: w.intl.string(w.t.nwpqyc),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(P.H, {
                    actions: [
                        {
                            variant: "primary",
                            onClick: () => {
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
let X = (e) => {
    let { guild: t, onClose: i } = e;
    return (0, l.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: Y.Sl, src: n(960416) }),
            (0, l.jsxs)("div", {
                className: Y.Qs,
                children: [
                    (0, l.jsx)(G.D, {
                        variant: "heading-md/semibold",
                        children: w.intl.format(w.t.THgVCC, { guild: t.name }),
                    }),
                    (0, l.jsx)(O.E, {
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
    eA = n(968884);
class eg extends i.PureComponent {
    state = { submitting: !1, shouldShowLurkerModeUpsellPopout: !1, shouldShowLurkerModeSuccessPopout: !1 };
    textAreaContainerRef = i.createRef();
    upsellTargetRef = i.createRef();
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && p.A.fetchChannelFollowerStats(n.id);
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
                onConfirm: () => N.A.removeGuildJoinRequest(e.id),
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
        null != e && (0, b.Ze)(e.id);
    };
    handleClaimAccount = () => {
        E.R();
    };
    handleVerifyPhone = () => {
        (0, d.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("6305"),
                    n.e("4469"),
                    n.e("89545"),
                    n.e("84704"),
                    n.e("86197"),
                ]).then(n.bind(n, 615715));
                return (t) => (0, l.jsx)(e, { reason: ee.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: em.V },
        );
    };
    handleResendVerification = () => {
        g.A.verifyResend();
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
            n = t?.applicationStatus === M.B5.APPROVED;
        if (null == e || null == t || !n || (0, j.NK)(t)) return null;
        let i = () => {
            N.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
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
                canSendMessages: g,
                channelFollowingUsersSeen: p,
                showLurkerModeUpsellPopout: f,
                showMemberVerificationModal: C,
                useReducedMotion: E,
                isStaff: x,
                guildJoinRequest: S,
                showLinkedLobbyApplicationLoadingIndicator: _,
                requiredLinkedLobbyApplication: I,
                pendingGameProfileReturn: T,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: N, shouldShowLurkerModeSuccessPopout: j } = this.state,
            b = { theme: d, useReducedMotion: E };
        if (e && !g && null != T)
            null != T.gameIconUrl && (b.imageSrc = T.gameIconUrl),
                (b.message = w.intl.format(w.t["qxH/YE"], { gameName: T.gameName })),
                (b.buttonText = w.intl.string(w.t.DjifDP)),
                (b.buttonIcon = h.r),
                (b.buttonVariant = "primary"),
                (b.onButtonClick = T.onReturnToGameProfile);
        else if (e && !g) {
            if (((b.message = w.intl.string(w.t.Hl0Mqh)), null != p && p >= 1e3)) {
                let e = 1e3 * Math.floor(p / 1e3);
                b.subtitle = w.intl.formatToPlainString(w.t.C5bgrC, { count: e.toLocaleString() });
            }
            (b.buttonText = w.intl.string(w.t["3aOv+h"])),
                (b.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((b.onSecondaryButtonClick = this.handleJoinServer),
                    (b.secondaryButtonText = w.intl.string(w.t.RLch70)));
        } else if (n)
            (b.message = w.intl.string(w.t["Eg3/c9"])),
                (b.buttonText = w.intl.string(w.t.fiNVin)),
                (b.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (C)
            switch (S?.applicationStatus) {
                case M.B5.SUBMITTED:
                    (b.message = w.intl.string(w.t["5iLvSx"])),
                        (b.subtitle = w.intl.string(w.t.FdsK4h)),
                        (b.buttonText = w.intl.string(w.t.mqtdmQ)),
                        (b.onButtonClick = this.handleCancelApplication);
                    break;
                case M.B5.REJECTED:
                    (b.message = w.intl.string(w.t.lk30cY)),
                        (b.buttonText = w.intl.string(w.t["8RrsHr"])),
                        (b.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (b.message = w.intl.string(w.t.rEBKvg)),
                        (b.buttonText = w.intl.string(w.t["r8/DT+"])),
                        (b.buttonVariant = "primary"),
                        (b.onButtonClick = this.handleShowMemberVerification);
            }
        else
            _ || null == I
                ? i && !x
                    ? ((b.message = w.intl.string(w.t["2dThMM"])),
                      (b.buttonText = w.intl.string(w.t["50gfOv"])),
                      (b.onButtonClick = this.handleVerifyPhone))
                    : s
                      ? ((b.message = w.intl.string(w.t.FkGPS5)),
                        (b.buttonText = w.intl.string(w.t.lm1UKt)),
                        (b.onButtonClick = this.handleResendVerification))
                      : a
                        ? ((b.message = w.intl.formatToPlainString(w.t.IH7RMF, { min: y.$8o.MEMBER_AGE })),
                          (b.countdown = r))
                        : o &&
                          ((b.message = w.intl.formatToPlainString(w.t["2JA2GH"], { min: y.$8o.ACCOUNT_AGE })),
                          (b.countdown = c))
                : ((b.imageSrc = I.getIconURL(eh.iu.SMALL) ?? void 0),
                  (b.message = w.intl.format(w.t.EvDn1D, { name: I.name })),
                  null != I.connectionEntrypointUrl &&
                      ((b.buttonText = w.intl.string(w.t.S0W8Z5)),
                      (b.onButtonClick = () => {
                          window.open(I.connectionEntrypointUrl, "_blank");
                      })));
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: j,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, l.jsx)(eu.A, {
                    ...b,
                    children: (0, l.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            f
                                ? (0, l.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: N,
                                      position: "top",
                                      children: (e) =>
                                          (0, l.jsx)(A.D, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: eA._,
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
function ep(e) {
    let { channel: t, children: n } = e,
        s = t.getGuildId(),
        a = (0, r.bG)([es.A], () => es.A.getGuild(s)),
        o = (0, r.bG)([ea.A], () => ea.A.getCheck(s)),
        c = t.type === y.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(y.GuildFeatures.NEWS),
        d = (0, r.bG)([el.A], () => (c ? el.A.getFollowerStatsForChannel(t.id) : null)),
        u = (0, r.bG)([K.A], () => K.A.isLurking(s)),
        h = (0, r.bG)([eo.default], () => eo.default.getCurrentUser()),
        m = h?.isStaff() ?? !1,
        A = (0, r.bG)([ei.Ay], () => null != h && (ei.Ay.getMember(s, h.id)?.isPending ?? !1)),
        g = !!(0, v.Qd)(a),
        p = (0, r.bG)([J], () => J.shouldShowPopout(s)),
        f = (0, r.bG)([er.A], () => er.A.can(y.xBc.SEND_MESSAGES, t)),
        E = (0, r.bG)([R.A], () => R.A.getRequest(s)),
        { showLinkedLobbyApplicationLoadingIndicator: N, requiredLinkedLobbyApplication: j } = (0, ed.A)(t.linkedLobby),
        b = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([T.A], () => {
                    let e = T.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                l = i.useCallback(() => {
                    null != n &&
                        _.A.returnToGameProfile({
                            gameId: n.gameId,
                            source: I.Ob.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                        });
                }, [n]),
                s = (0, r.bG)([x.A], () => (n?.gameId != null ? x.A.getGame(n.gameId) : null));
            i.useEffect(() => {
                if (s?.id != null) return () => _.A.clearGameProfilePendingReturn(s.id);
            }, [s?.id]);
            let a = s?.name;
            if (null == s || null == a) return null;
            let o =
                s?.iconHash != null && "" !== s.iconHash
                    ? S.Ay.getGameAssetURL({ id: s.id, hash: s.iconHash, size: y.eQT })
                    : void 0;
            return { gameId: s.id, gameName: a, gameIconUrl: o, onReturnToGameProfile: l };
        })({ channelId: t.id }),
        D = {
            ...o,
            guild: a,
            isLurking: u,
            isFollowable: c,
            shouldShowLurkerModeSuccessPopout: p,
            showLurkerModeUpsellPopout: u && null != a && ec.MJ(y.xBc.SEND_MESSAGES, t),
            theme: en.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: g,
            showMemberVerificationModal: A && g,
            guildJoinRequestStatus: E?.applicationStatus ?? M.B5.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: N,
            requiredLinkedLobbyApplication: j,
            useReducedMotion: C.A.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: b,
        };
    return (0, l.jsx)(eg, { ...D, channel: t, children: n });
}
