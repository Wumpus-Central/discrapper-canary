n.d(t, { A: () => ef });
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
    x = n(480900),
    S = n(311043),
    _ = n(486020),
    I = n(60465),
    y = n(409626),
    N = n(422069),
    j = n(652215),
    T = n(624458),
    b = n(821124),
    v = n(202384),
    M = n(513461),
    R = n(709977),
    D = n(212455),
    L = n(224640),
    P = n(430993),
    k = n(696208),
    O = n(604121),
    G = n(534514),
    U = n(834730),
    w = n(915089),
    F = n(375708),
    H = n(786147);
let B = () =>
        n
            .e("44678")
            .then(n.t.bind(n, 144759, 19))
            .then((e) => {
                let { default: t } = e;
                return t;
            }),
    V = (e) => {
        let t = (0, w.GV)();
        return (0, l.jsxs)(L.d, {
            ...e,
            size: "sm",
            children: [
                (0, l.jsx)("div", { className: H.Mp, children: (0, l.jsx)(O.a, { importData: B, className: H.WG }) }),
                (0, l.jsx)(P.c, {
                    children: (0, l.jsxs)("div", {
                        className: H.lq,
                        children: [
                            (0, l.jsx)(G.D, {
                                variant: "heading-lg/semibold",
                                className: H.wx,
                                id: t,
                                children: F.intl.format(F.t.z9qozJ, { guildName: e.guildName }),
                            }),
                            (0, l.jsx)(U.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: F.intl.string(F.t.nwpqyc),
                            }),
                        ],
                    }),
                }),
                (0, l.jsx)(k.H, {
                    actions: [
                        {
                            variant: "primary",
                            onClick: () => {
                                e.onAccept(), e.onClose();
                            },
                            text: F.intl.string(F.t.NuzmOA),
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        });
    };
var K = n(228366),
    z = n(857071);
let W = null,
    $ = null;
function q() {
    let e = z.A.mostRecentLurkedGuildId();
    null != e ? ((W = e), ($ = null)) : (($ = null != W ? W : null), (W = null));
}
class J extends r.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([z.A], q);
    }
    shouldShowPopout(e) {
        return $ === e;
    }
}
let Z = new J(K.h);
var Y = n(821609),
    X = n(35787);
let Q = (e) => {
    let { guild: t, onClose: i } = e;
    return (0, l.jsxs)("div", {
        className: X.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: X.Sl, src: n(960416) }),
            (0, l.jsxs)("div", {
                className: X.Qs,
                children: [
                    (0, l.jsx)(G.D, {
                        variant: "heading-md/semibold",
                        children: F.intl.format(F.t.THgVCC, { guild: t.name }),
                    }),
                    (0, l.jsx)(U.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: F.intl.string(F.t["1yq3nO"]),
                    }),
                    (0, l.jsx)("div", {
                        className: X.UD,
                        children: (0, l.jsx)(Y.$, { variant: "primary", text: F.intl.string(F.t.hLw0wc), onClick: i }),
                    }),
                ],
            }),
        ],
    });
};
var ee = n(698405),
    et = n(557722),
    en = n(976860),
    el = n(363195),
    ei = n(560010),
    es = n(696451),
    ea = n(71393),
    er = n(834942),
    eo = n(576705),
    ec = n(287809),
    ed = n(488926),
    eu = n(137577),
    eh = n(786051),
    em = n(360469),
    eA = n(53516),
    eg = n(968884);
class ep extends i.PureComponent {
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
        return a()(null != n, "This guildID cannot be null"), (0, l.jsx)(Q, { onClose: t, guild: n });
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: F.intl.string(F.t.aIz1oV),
                subtitle: F.intl.string(F.t["13tjTU"]),
                variant: "primary",
                confirmText: F.intl.string(F.t["cY+Oob"]),
                onConfirm: () => T.A.removeGuildJoinRequest(e.id),
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
        E.R();
    };
    handleVerifyPhone = () => {
        (0, d.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("11377"),
                    n.e("45073"),
                    n.e("89545"),
                    n.e("84704"),
                    n.e("86197"),
                ]).then(n.bind(n, 615715));
                return (t) => (0, l.jsx)(e, { reason: et.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: eA.V },
        );
    };
    handleResendVerification = () => {
        g.A.verifyResend();
        let e = ec.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: F.intl.string(F.t.LykQYk), subtitle: F.intl.format(F.t.azKEPy, { email: e }) });
    };
    handleTextAreaClick = () => {
        let { showLurkerModeUpsellPopout: e } = this.props;
        this.setState({ shouldShowLurkerModeUpsellPopout: e });
    };
    handleJoinServer = async () => {
        this.setState({ submitting: !0 });
        let e = this.props.channel.getGuildId();
        try {
            await f.A.joinGuild(e, { source: j.Q4z.CHAT_INPUT_BLOCKER });
        } catch {
            this.setState({ submitting: !1 });
        }
    };
    handleGoBack = () => {
        this.setState({ submitting: !0 }), (0, en.JK)().goBack();
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
            (0, l.jsx)(ee.A, { type: ee.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === M.B5.APPROVED;
        if (null == e || null == t || !n || (0, b.NK)(t)) return null;
        let i = () => {
            T.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        };
        return (0, l.jsx)(u.aF, {
            renderModal: (t) => (0, l.jsx)(V, { ...t, onAccept: i, guildName: e.name }),
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
                missingVerificationRole: E,
                verificationRole: S,
                useReducedMotion: _,
                isStaff: I,
                guildJoinRequest: y,
                showLinkedLobbyApplicationLoadingIndicator: N,
                requiredLinkedLobbyApplication: T,
                pendingGameProfileReturn: b,
                guild: v,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: R, shouldShowLurkerModeSuccessPopout: D } = this.state,
            L = { theme: d, useReducedMotion: _ };
        if (e && !g && null != b)
            null != b.gameIconUrl && (L.imageSrc = b.gameIconUrl),
                (L.message = F.intl.format(F.t["qxH/YE"], { gameName: b.gameName })),
                (L.buttonText = F.intl.string(F.t.DjifDP)),
                (L.buttonIcon = h.r),
                (L.buttonVariant = "primary"),
                (L.onButtonClick = b.onReturnToGameProfile);
        else if (e && !g) {
            if (((L.message = F.intl.string(F.t.Hl0Mqh)), null != p && p >= 1e3)) {
                let e = 1e3 * Math.floor(p / 1e3);
                L.subtitle = F.intl.formatToPlainString(F.t.C5bgrC, { count: e.toLocaleString() });
            }
            (L.buttonText = F.intl.string(F.t["3aOv+h"])),
                (L.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((L.onSecondaryButtonClick = this.handleJoinServer),
                    (L.secondaryButtonText = F.intl.string(F.t.RLch70)));
        } else if (n)
            (L.message = F.intl.string(F.t["Eg3/c9"])),
                (L.buttonText = F.intl.string(F.t.fiNVin)),
                (L.onButtonClick = C ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (C)
            switch (y?.applicationStatus) {
                case M.B5.SUBMITTED:
                    (L.message = F.intl.string(F.t["5iLvSx"])),
                        (L.subtitle = F.intl.string(F.t.FdsK4h)),
                        (L.buttonText = F.intl.string(F.t.mqtdmQ)),
                        (L.onButtonClick = this.handleCancelApplication);
                    break;
                case M.B5.REJECTED:
                    (L.message = F.intl.string(F.t.lk30cY)),
                        (L.buttonText = F.intl.string(F.t["8RrsHr"])),
                        (L.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (L.message = F.intl.string(F.t.rEBKvg)),
                        (L.buttonText = F.intl.string(F.t["r8/DT+"])),
                        (L.buttonVariant = "primary"),
                        (L.onButtonClick = this.handleShowMemberVerification);
            }
        else
            null != v && null != S && E
                ? ((L.message = F.intl.format(F.t.HbivnU, { roleName: `@${S.name}` })),
                  null === S.tags.guild_connections &&
                      ((L.buttonText = F.intl.string(F.t["6Ge2LG"])), (L.onButtonClick = () => (0, x.b)(S, v.id))))
                : N || null == T
                  ? i && !I
                      ? ((L.message = F.intl.string(F.t["2dThMM"])),
                        (L.buttonText = F.intl.string(F.t["50gfOv"])),
                        (L.onButtonClick = this.handleVerifyPhone))
                      : s
                        ? ((L.message = F.intl.string(F.t.FkGPS5)),
                          (L.buttonText = F.intl.string(F.t.lm1UKt)),
                          (L.onButtonClick = this.handleResendVerification))
                        : a
                          ? ((L.message = F.intl.formatToPlainString(F.t.IH7RMF, { min: j.$8o.MEMBER_AGE })),
                            (L.countdown = r))
                          : o &&
                            ((L.message = F.intl.formatToPlainString(F.t["2JA2GH"], { min: j.$8o.ACCOUNT_AGE })),
                            (L.countdown = c))
                  : ((L.imageSrc = T.getIconURL(em.iu.SMALL) ?? void 0),
                    (L.message = F.intl.format(F.t.EvDn1D, { name: T.name })),
                    null != T.connectionEntrypointUrl &&
                        ((L.buttonText = F.intl.string(F.t.S0W8Z5)),
                        (L.onButtonClick = () => {
                            window.open(T.connectionEntrypointUrl, "_blank");
                        })));
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: D,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, l.jsx)(eh.A, {
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
                                          (0, l.jsx)(A.D, {
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
function ef(e) {
    let { channel: t, children: n } = e,
        s = t.getGuildId(),
        a = (0, r.bG)([ea.A], () => ea.A.getGuild(s)),
        o = (0, r.bG)([er.A], () => er.A.getCheck(s)),
        c = t.type === j.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(j.GuildFeatures.NEWS),
        d = (0, r.bG)([ei.A], () => (c ? ei.A.getFollowerStatsForChannel(t.id) : null)),
        u = (0, r.bG)([z.A], () => z.A.isLurking(s)),
        h = (0, r.bG)([ec.default], () => ec.default.getCurrentUser()),
        m = h?.isStaff() ?? !1,
        A = (0, r.bG)([es.Ay], () => null != h && (es.Ay.getMember(s, h.id)?.isPending ?? !1)),
        g = !!(0, R.Qd)(a),
        p = (0, r.bG)([Z], () => Z.shouldShowPopout(s)),
        f = (0, r.bG)([eo.A], () => eo.A.can(j.xBc.SEND_MESSAGES, t)),
        E = (0, r.bG)([D.A], () => D.A.getRequest(s)),
        { showLinkedLobbyApplicationLoadingIndicator: x, requiredLinkedLobbyApplication: T } = (0, eu.A)(t.linkedLobby),
        b = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([N.A], () => {
                    let e = N.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                l = i.useCallback(() => {
                    null != n &&
                        I.A.returnToGameProfile({
                            gameId: n.gameId,
                            source: y.Ob.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                        });
                }, [n]),
                s = (0, r.bG)([S.A], () => (n?.gameId != null ? S.A.getGame(n.gameId) : null));
            i.useEffect(() => {
                if (s?.id != null) return () => I.A.clearGameProfilePendingReturn(s.id);
            }, [s?.id]);
            let a = s?.name;
            if (null == s || null == a) return null;
            let o =
                s?.iconHash != null && "" !== s.iconHash
                    ? _.Ay.getGameAssetURL({ id: s.id, hash: s.iconHash, size: j.eQT })
                    : void 0;
            return { gameId: s.id, gameName: a, gameIconUrl: o, onReturnToGameProfile: l };
        })({ channelId: t.id }),
        v = {
            ...o,
            guild: a,
            isLurking: u,
            isFollowable: c,
            shouldShowLurkerModeSuccessPopout: p,
            showLurkerModeUpsellPopout: u && null != a && ed.MJ(j.xBc.SEND_MESSAGES, t),
            theme: el.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: g,
            showMemberVerificationModal: A && g,
            guildJoinRequestStatus: E?.applicationStatus ?? M.B5.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: x,
            requiredLinkedLobbyApplication: T,
            useReducedMotion: C.A.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: b,
        };
    return (0, l.jsx)(ep, { ...v, channel: t, children: n });
}
