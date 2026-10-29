n.d(t, { A: () => eh });
var l = n(477900),
    i = n(582128),
    s = n(284009),
    a = n.n(s),
    r = n(17928),
    o = n(139033),
    c = n(314116),
    d = n(477155),
    u = n(192308),
    h = n(725570),
    m = n(265872),
    g = n(939249),
    p = n(830215),
    A = n(857182),
    f = n(66834),
    C = n(775602),
    x = n(315982),
    E = n(480900),
    S = n(311043),
    I = n(60465),
    y = n(409626),
    _ = n(422069),
    j = n(652215),
    v = n(624458),
    b = n(821124),
    N = n(202384),
    T = n(513461),
    M = n(709977),
    R = n(212455),
    D = n(772707),
    k = n(116833),
    L = n(105292);
let P = function (e) {
    let { guild: t, onAccept: n, onClose: i, ...s } = e;
    return (0, l.jsx)(D.k, {
        ...s,
        onClose: function () {
            return (n(), i());
        },
        graphic: {
            type: "dynamic",
            component: k.DynamicGraphicComponent.MEMBER_VERIFICATION_SUCCESS,
            props: { guild: t },
        },
        title: L.intl.formatToPlainString(L.t.TMNpew, { guildName: t.name }),
        subtitle: L.intl.string(L.t.cLuoAc),
    });
};
var O = n(73153),
    G = n(857071);
let U = null,
    w = null;
function F() {
    let e = G.A.mostRecentLurkedGuildId();
    null != e ? ((U = e), (w = null)) : ((w = null != U ? U : null), (U = null));
}
class H extends r.Ay.Store {
    static displayName = "LurkerModePopoutStore";
    initialize() {
        this.syncWith([G.A], F);
    }
    shouldShowPopout(e) {
        return w === e;
    }
}
let B = new H(O.h);
var K = n(297264),
    V = n(834730),
    z = n(821609),
    W = n(521790);
let $ = function (e) {
    let { guild: t, onClose: i } = e;
    return (0, l.jsxs)("div", {
        className: W.kL,
        children: [
            (0, l.jsx)("img", { alt: "", className: W.Sl, src: n(960416) }),
            (0, l.jsxs)("div", {
                className: W.Qs,
                children: [
                    (0, l.jsx)(K.D, {
                        variant: "heading-md/semibold",
                        children: L.intl.format(L.t.THgVCC, { guild: t.name }),
                    }),
                    (0, l.jsx)(V.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: L.intl.string(L.t["1yq3nO"]),
                    }),
                    (0, l.jsx)("div", {
                        className: W.UD,
                        children: (0, l.jsx)(z.$, { variant: "primary", text: L.intl.string(L.t.hLw0wc), onClick: i }),
                    }),
                ],
            }),
        ],
    });
};
var q = n(698405),
    J = n(557722),
    Z = n(976860),
    X = n(363195),
    Y = n(560010),
    Q = n(696451),
    ee = n(71393),
    et = n(834942),
    en = n(576705),
    el = n(287809),
    ei = n(488926),
    es = n(137577),
    ea = n(786051),
    er = n(818023),
    eo = n(53516),
    ec = n(514559);
function ed(e, t) {
    (null != t.gameIconUrl && (e.imageSrc = t.gameIconUrl),
        (e.message = L.intl.format(L.t["qxH/YE"], { gameName: t.gameName })),
        (e.buttonText = L.intl.string(L.t.DjifDP)),
        (e.buttonIcon = d.r),
        (e.buttonVariant = "primary"),
        (e.onButtonClick = t.onReturnToGameProfile));
}
class eu extends i.PureComponent {
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
        return (a()(null != n, "This guildID cannot be null"), (0, l.jsx)($, { onClose: t, guild: n }));
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: L.intl.string(L.t.aIz1oV),
                subtitle: L.intl.string(L.t["13tjTU"]),
                variant: "primary",
                confirmText: L.intl.string(L.t["cY+Oob"]),
                onConfirm: () => v.A.removeGuildJoinRequest(e.id),
            });
    };
    handleViewApplicationRejection = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, u.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("298903"), n.e("914382")]).then(n.bind(n, 463325));
                return (n) => (0, l.jsx)(t, { guildId: e.id, ...n });
            });
    };
    handleShowMemberVerification = () => {
        let { guild: e } = this.props;
        null != e && (0, N.Ze)(e.id);
    };
    handleClaimAccount = () => {
        x.R();
    };
    handleVerifyPhone = () => {
        (0, u.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("590275"),
                    n.e("766806"),
                    n.e("14775"),
                    n.e("989545"),
                    n.e("991531"),
                    n.e("311493"),
                    n.e("84704"),
                    n.e("286197"),
                ]).then(n.bind(n, 615715));
                return (t) => (0, l.jsx)(e, { reason: J.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: eo.V },
        );
    };
    handleResendVerification = () => {
        p.A.verifyResend();
        let e = el.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: L.intl.string(L.t.LykQYk), subtitle: L.intl.format(L.t.azKEPy, { email: e }) });
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
        (this.setState({ submitting: !0 }), (0, Z.JK)().goBack());
    };
    handleFollowAnnouncement = () => {
        let { channel: e } = this.props;
        (0, u.openModalLazy)(async () => {
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
            (0, l.jsx)(q.A, { type: q.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === T.B5.APPROVED;
        if (null == e || null == t || !n || (0, b.NK)(t)) return null;
        function i() {
            null != e && null != t && v.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        }
        return (0, l.jsx)(h.aF, {
            renderModal: (t) => (0, l.jsx)(P, { ...t, onAccept: i, guild: e }),
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
                canSendMessages: h,
                channelFollowingUsersSeen: p,
                showLurkerModeUpsellPopout: A,
                showMemberVerificationModal: f,
                missingVerificationRole: C,
                verificationRole: x,
                useReducedMotion: S,
                isStaff: I,
                guildJoinRequest: y,
                showLinkedLobbyApplicationLoadingIndicator: _,
                requiredLinkedLobbyApplication: v,
                shouldRelaunchLinkedLobbyApplication: b,
                pendingGameProfileReturn: N,
                guild: M,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: R, shouldShowLurkerModeSuccessPopout: D } = this.state,
            k = { theme: d, useReducedMotion: S };
        if (null != N && ((e && !h) || t)) ed(k, N);
        else if (e && !h) {
            if (((k.message = L.intl.string(L.t.Hl0Mqh)), null != p && p >= 1e3)) {
                let e = 1e3 * Math.floor(p / 1e3);
                k.subtitle = L.intl.formatToPlainString(L.t.C5bgrC, { count: e.toLocaleString() });
            }
            ((k.buttonText = L.intl.string(L.t["3aOv+h"])),
                (k.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((k.onSecondaryButtonClick = this.handleJoinServer),
                    (k.secondaryButtonText = L.intl.string(L.t.RLch70))));
        } else if (n)
            ((k.message = L.intl.string(L.t["Eg3/c9"])),
                (k.buttonText = L.intl.string(L.t.fiNVin)),
                (k.onButtonClick = f ? this.handleShowMemberVerification : this.handleClaimAccount));
        else if (f)
            switch (y?.applicationStatus) {
                case T.B5.SUBMITTED:
                    ((k.message = L.intl.string(L.t["5iLvSx"])),
                        (k.subtitle = L.intl.string(L.t.FdsK4h)),
                        (k.buttonText = L.intl.string(L.t.mqtdmQ)),
                        (k.onButtonClick = this.handleCancelApplication));
                    break;
                case T.B5.REJECTED:
                    ((k.message = L.intl.string(L.t.lk30cY)),
                        (k.buttonText = L.intl.string(L.t["8RrsHr"])),
                        (k.onButtonClick = this.handleViewApplicationRejection));
                    break;
                default:
                    ((k.message = L.intl.string(L.t.rEBKvg)),
                        (k.buttonText = L.intl.string(L.t["r8/DT+"])),
                        (k.buttonVariant = "primary"),
                        (k.onButtonClick = this.handleShowMemberVerification));
            }
        else
            null != M && null != x && C
                ? ((k.message = L.intl.format(L.t.HbivnU, { roleName: `@${x.name}` })),
                  null === x.tags.guild_connections &&
                      ((k.buttonText = L.intl.string(L.t["6Ge2LG"])), (k.onButtonClick = () => (0, E.b)(x, M.id))))
                : _ || null == v
                  ? i && !I
                      ? ((k.message = L.intl.string(L.t["2dThMM"])),
                        (k.buttonText = L.intl.string(L.t["50gfOv"])),
                        (k.onButtonClick = this.handleVerifyPhone))
                      : s
                        ? ((k.message = L.intl.string(L.t.FkGPS5)),
                          (k.buttonText = L.intl.string(L.t.lm1UKt)),
                          (k.onButtonClick = this.handleResendVerification))
                        : a
                          ? ((k.message = L.intl.formatToPlainString(L.t.IH7RMF, { min: j.$8o.MEMBER_AGE })),
                            (k.countdown = r))
                          : o
                            ? ((k.message = L.intl.formatToPlainString(L.t["2JA2GH"], { min: j.$8o.ACCOUNT_AGE })),
                              (k.countdown = c))
                            : null != N && ed(k, N)
                  : ((k.imageSrc = v.getIconURL(er.iu.SMALL) ?? void 0),
                    b
                        ? (k.message = L.intl.format(L.t["SU2mY/"], { name: v.name }))
                        : ((k.message = L.intl.format(L.t.EvDn1D, { name: v.name })),
                          null != v.connectionEntrypointUrl &&
                              ((k.buttonText = L.intl.string(L.t.S0W8Z5)),
                              (k.onButtonClick = () => {
                                  window.open(v.connectionEntrypointUrl, "_blank");
                              }))));
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: D,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, l.jsx)(ea.A, {
                    ...k,
                    children: (0, l.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            A
                                ? (0, l.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: R,
                                      position: "top",
                                      children: (e) =>
                                          (0, l.jsx)(g.D, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: ec._,
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
function eh(e) {
    let { channel: t, children: n } = e,
        s = t.getGuildId(),
        a = (0, r.bG)([ee.A], () => ee.A.getGuild(s)),
        o = (0, r.bG)([et.A], () => et.A.getCheck(s)),
        c = t.type === j.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(j.GuildFeatures.NEWS),
        d = (0, r.bG)([Y.A], () => (c ? Y.A.getFollowerStatsForChannel(t.id) : null)),
        u = (0, r.bG)([G.A], () => G.A.isLurking(s)),
        h = (0, r.bG)([el.default], () => el.default.getCurrentUser()),
        m = h?.isStaff() ?? !1,
        g = (0, r.bG)([Q.Ay], () => null != h && (Q.Ay.getMember(s, h.id)?.isPending ?? !1)),
        p = !!(0, M.Qd)(a),
        A = (0, r.bG)([B], () => B.shouldShowPopout(s)),
        f = (0, r.bG)([en.A], () => en.A.can(j.xBc.SEND_MESSAGES, t)),
        x = (0, r.bG)([R.A], () => R.A.getRequest(s)),
        {
            showLinkedLobbyApplicationLoadingIndicator: E,
            requiredLinkedLobbyApplication: v,
            shouldRelaunchLinkedLobbyApplication: b,
        } = (0, es.A)(t.linkedLobby),
        N = (function (e) {
            let { channelId: t } = e,
                n = (0, r.bG)([_.A], () => {
                    let e = _.A.getPendingReturn();
                    return null == e || e.channelId !== t ? null : e;
                }),
                [l, s] = i.useState(null),
                a = null != n && l === n,
                o = i.useCallback(() => {
                    null == n ||
                        a ||
                        (s(n),
                        I.default.returnToGameProfile({
                            gameId: n.gameId,
                            source: n.source ?? y.GameProfileSources.AnnouncementChannelReturn,
                            initialScrollOffset: n.initialScrollOffset,
                            initialTab: n.tab,
                        }));
                }, [n, a]),
                c = (0, r.bG)([S.A], () => (n?.gameId != null ? S.A.getGame(n.gameId) : null));
            i.useEffect(() => {
                if (c?.id != null) return () => I.default.clearGameProfilePendingReturn(c.id);
            }, [c?.id]);
            let d = c?.name;
            if (null == c || null == d) return null;
            let u = c?.getIconURL(j.eQT) ?? void 0;
            return { gameId: c.id, gameName: d, gameIconUrl: u, isReturning: a, onReturnToGameProfile: o };
        })({ channelId: t.id }),
        D = {
            ...o,
            guild: a,
            isLurking: u,
            isFollowable: c,
            shouldShowLurkerModeSuccessPopout: A,
            showLurkerModeUpsellPopout: u && null != a && ei.MJ(j.xBc.SEND_MESSAGES, t),
            theme: X.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: p,
            showMemberVerificationModal: g && p,
            guildJoinRequestStatus: x?.applicationStatus ?? T.B5.STARTED,
            guildJoinRequest: x,
            showLinkedLobbyApplicationLoadingIndicator: E,
            requiredLinkedLobbyApplication: v,
            shouldRelaunchLinkedLobbyApplication: b,
            useReducedMotion: C.Ay.useReducedMotion,
            isStaff: m,
            pendingGameProfileReturn: N,
        };
    return (0, l.jsx)(eu, { ...D, channel: t, children: n });
}
