n.d(t, { A: () => $ });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(311907),
    o = n(139033),
    c = n(314116),
    d = n(192308),
    u = n(725570),
    h = n(477155),
    m = n(265872),
    A = n(939249),
    g = n(830215),
    p = n(857182),
    _ = n(686956),
    f = n(775602),
    E = n(315982),
    C = n(563729),
    x = n(624458),
    S = n(821124),
    I = n(202384),
    N = n(513461),
    v = n(709977),
    T = n(212455),
    y = n(466244),
    b = n(158476),
    j = n(857071),
    R = n(552227),
    M = n(698405),
    L = n(557722),
    D = n(976860),
    P = n(544028),
    O = n(560010),
    w = n(696451),
    U = n(71393),
    k = n(834942),
    G = n(576705),
    F = n(287809),
    H = n(488926),
    B = n(137577),
    V = n(786051),
    z = n(652215),
    K = n(360469),
    W = n(53516),
    Y = n(985018),
    J = n(968884);
class q extends l.PureComponent {
    state = { submitting: !1, shouldShowLurkerModeUpsellPopout: !1, shouldShowLurkerModeSuccessPopout: !1 };
    textAreaContainerRef = l.createRef();
    upsellTargetRef = l.createRef();
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && p.A.fetchChannelFollowerStats(n.id);
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
        return s()(null != n, "This guildID cannot be null"), (0, i.jsx)(R.A, { onClose: t, guild: n });
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: Y.intl.string(Y.t.aIz1oV),
                subtitle: Y.intl.string(Y.t["13tjTU"]),
                variant: "primary",
                confirmText: Y.intl.string(Y.t["cY+Oob"]),
                onConfirm: () => x.A.removeGuildJoinRequest(e.id),
            });
    };
    handleViewApplicationRejection = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, d.openModalLazy)(async () => {
                let { default: t } = await n.e("37548").then(n.bind(n, 856103));
                return (n) => (0, i.jsx)(t, { guildId: e.id, ...n });
            });
    };
    handleShowMemberVerification = () => {
        let { guild: e } = this.props;
        null != e && (0, I.Ze)(e.id);
    };
    handleClaimAccount = () => {
        E.R();
    };
    handleVerifyPhone = () => {
        (0, d.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("84704"), n.e("85543")]).then(n.bind(n, 615715));
                return (t) => (0, i.jsx)(e, { reason: L.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: W.V },
        );
    };
    handleResendVerification = () => {
        g.A.verifyResend();
        let e = F.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: Y.intl.string(Y.t.LykQYk), subtitle: Y.intl.format(Y.t.azKEPy, { email: e }) });
    };
    handleTextAreaClick = () => {
        let { showLurkerModeUpsellPopout: e } = this.props;
        this.setState({ shouldShowLurkerModeUpsellPopout: e });
    };
    handleJoinServer = async () => {
        this.setState({ submitting: !0 });
        let e = this.props.channel.getGuildId();
        try {
            await _.A.joinGuild(e, { source: z.Q4z.CHAT_INPUT_BLOCKER });
        } catch {
            this.setState({ submitting: !1 });
        }
    };
    handleGoBack = () => {
        this.setState({ submitting: !0 }), (0, D.JK)().goBack();
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
            s()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
            (0, i.jsx)(M.A, { type: M.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === N.B5.APPROVED;
        if (null == e || null == t || !n || (0, S.NK)(t)) return null;
        let l = () => {
            x.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        };
        return (0, i.jsx)(u.aF, {
            renderModal: (t) => (0, i.jsx)(y.A, { ...t, onAccept: l, guildName: e.name }),
            onCloseRequest: l,
        });
    };
    render() {
        let {
                isFollowable: e,
                isLurking: t,
                notClaimed: n,
                notPhoneVerified: l,
                notEmailVerified: a,
                newMember: s,
                memberDeadline: r,
                newAccount: o,
                accountDeadline: c,
                theme: d,
                children: u,
                canSendMessages: g,
                channelFollowingUsersSeen: p,
                showLurkerModeUpsellPopout: _,
                showMemberVerificationModal: f,
                useReducedMotion: E,
                isStaff: C,
                guildJoinRequest: x,
                showLinkedLobbyApplicationLoadingIndicator: S,
                requiredLinkedLobbyApplication: I,
                pendingGameProfileReturn: v,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: T, shouldShowLurkerModeSuccessPopout: y } = this.state,
            b = { theme: d, useReducedMotion: E };
        if (e && !g && null != v)
            null != v.gameIconUrl && (b.imageSrc = v.gameIconUrl),
                (b.message = Y.intl.format(Y.t["qxH/YE"], { gameName: v.gameName })),
                (b.buttonText = Y.intl.string(Y.t.DjifDP)),
                (b.buttonIcon = h.r),
                (b.buttonVariant = "primary"),
                (b.onButtonClick = v.onReturnToGameProfile);
        else if (e && !g) {
            if (((b.message = Y.intl.string(Y.t.Hl0Mqh)), null != p && p >= 1e3)) {
                let e = 1e3 * Math.floor(p / 1e3);
                b.subtitle = Y.intl.formatToPlainString(Y.t.C5bgrC, { count: e.toLocaleString() });
            }
            (b.buttonText = Y.intl.string(Y.t["3aOv+h"])),
                (b.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((b.onSecondaryButtonClick = this.handleJoinServer),
                    (b.secondaryButtonText = Y.intl.string(Y.t.RLch70)));
        } else if (n)
            (b.message = Y.intl.string(Y.t["Eg3/c9"])),
                (b.buttonText = Y.intl.string(Y.t.fiNVin)),
                (b.onButtonClick = f ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (f)
            switch (x?.applicationStatus) {
                case N.B5.SUBMITTED:
                    (b.message = Y.intl.string(Y.t["5iLvSx"])),
                        (b.subtitle = Y.intl.string(Y.t.FdsK4h)),
                        (b.buttonText = Y.intl.string(Y.t.mqtdmQ)),
                        (b.onButtonClick = this.handleCancelApplication);
                    break;
                case N.B5.REJECTED:
                    (b.message = Y.intl.string(Y.t.lk30cY)),
                        (b.buttonText = Y.intl.string(Y.t["8RrsHr"])),
                        (b.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (b.message = Y.intl.string(Y.t.rEBKvg)),
                        (b.buttonText = Y.intl.string(Y.t["r8/DT+"])),
                        (b.buttonVariant = "primary"),
                        (b.onButtonClick = this.handleShowMemberVerification);
            }
        else
            S || null == I
                ? l && !C
                    ? ((b.message = Y.intl.string(Y.t["2dThMM"])),
                      (b.buttonText = Y.intl.string(Y.t["50gfOv"])),
                      (b.onButtonClick = this.handleVerifyPhone))
                    : a
                      ? ((b.message = Y.intl.string(Y.t.FkGPS5)),
                        (b.buttonText = Y.intl.string(Y.t.lm1UKt)),
                        (b.onButtonClick = this.handleResendVerification))
                      : s
                        ? ((b.message = Y.intl.formatToPlainString(Y.t.IH7RMF, { min: z.$8o.MEMBER_AGE })),
                          (b.countdown = r))
                        : o &&
                          ((b.message = Y.intl.formatToPlainString(Y.t["2JA2GH"], { min: z.$8o.ACCOUNT_AGE })),
                          (b.countdown = c))
                : ((b.imageSrc = I.getIconURL(K.iu.SMALL) ?? void 0),
                  (b.message = Y.intl.format(Y.t.EvDn1D, { name: I.name })),
                  null != I.connectionEntrypointUrl &&
                      ((b.buttonText = Y.intl.string(Y.t.S0W8Z5)),
                      (b.onButtonClick = () => {
                          window.open(I.connectionEntrypointUrl, "_blank");
                      })));
        return (0, i.jsx)(m.Y, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: y,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(V.A, {
                    ...b,
                    children: (0, i.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            _
                                ? (0, i.jsx)(m.Y, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: T,
                                      position: "top",
                                      children: (e) =>
                                          (0, i.jsx)(A.D, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: J._,
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
function $(e) {
    let { channel: t, children: n } = e,
        l = t.getGuildId(),
        a = (0, r.bG)([U.A], () => U.A.getGuild(l)),
        s = (0, r.bG)([k.A], () => k.A.getCheck(l)),
        o = t.type === z.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(z.GuildFeatures.NEWS),
        c = (0, r.bG)([O.A], () => (o ? O.A.getFollowerStatsForChannel(t.id) : null)),
        d = (0, r.bG)([j.A], () => j.A.isLurking(l)),
        u = (0, r.bG)([F.default], () => F.default.getCurrentUser()),
        h = u?.isStaff() ?? !1,
        m = (0, r.bG)([w.Ay], () => null != u && (w.Ay.getMember(l, u.id)?.isPending ?? !1)),
        A = !!(0, v.Qd)(a),
        g = (0, r.bG)([b.A], () => b.A.shouldShowPopout(l)),
        p = (0, r.bG)([G.A], () => G.A.can(z.xBc.SEND_MESSAGES, t)),
        _ = (0, r.bG)([T.A], () => T.A.getRequest(l)),
        { showLinkedLobbyApplicationLoadingIndicator: E, requiredLinkedLobbyApplication: x } = (0, B.A)(t.linkedLobby),
        S = (0, C.A)({ channelId: t.id }),
        I = {
            ...s,
            guild: a,
            isLurking: d,
            isFollowable: o,
            shouldShowLurkerModeSuccessPopout: g,
            showLurkerModeUpsellPopout: d && null != a && H.MJ(z.xBc.SEND_MESSAGES, t),
            theme: P.A.theme,
            canSendMessages: p,
            channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
            hasVerificationGate: A,
            showMemberVerificationModal: m && A,
            guildJoinRequestStatus: _?.applicationStatus ?? N.B5.STARTED,
            guildJoinRequest: _,
            showLinkedLobbyApplicationLoadingIndicator: E,
            requiredLinkedLobbyApplication: x,
            useReducedMotion: f.A.useReducedMotion,
            isStaff: h,
            pendingGameProfileReturn: S,
        };
    return (0, i.jsx)(q, { ...I, channel: t, children: n });
}
