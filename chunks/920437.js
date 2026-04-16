n.d(t, { A: () => z });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(311907),
    o = n(139033),
    c = n(314116),
    d = n(397927),
    u = n(830215),
    h = n(857182),
    m = n(686956),
    A = n(775602),
    g = n(315982),
    _ = n(563729),
    p = n(624458),
    f = n(821124),
    E = n(202384),
    C = n(513461),
    x = n(709977),
    S = n(212455),
    I = n(466244),
    T = n(158476),
    v = n(857071),
    N = n(552227),
    y = n(698405),
    b = n(557722),
    j = n(976860),
    R = n(544028),
    M = n(560010),
    L = n(696451),
    O = n(71393),
    D = n(834942),
    P = n(576705),
    k = n(287809),
    w = n(488926),
    U = n(137577),
    G = n(786051),
    F = n(652215),
    H = n(360469),
    B = n(53516),
    V = n(985018),
    W = n(968884);
class K extends l.PureComponent {
    state = { submitting: !1, shouldShowLurkerModeUpsellPopout: !1, shouldShowLurkerModeSuccessPopout: !1 };
    textAreaContainerRef = l.createRef();
    upsellTargetRef = l.createRef();
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && h.A.fetchChannelFollowerStats(n.id);
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
        return s()(null != n, "This guildID cannot be null"), (0, i.jsx)(N.A, { onClose: t, guild: n });
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: V.intl.string(V.t.aIz1oV),
                subtitle: V.intl.string(V.t["13tjTU"]),
                variant: "primary",
                confirmText: V.intl.string(V.t["cY+Oob"]),
                onConfirm: () => p.A.removeGuildJoinRequest(e.id),
            });
    };
    handleViewApplicationRejection = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, d.mMO)(async () => {
                let { default: t } = await n.e("37548").then(n.bind(n, 856103));
                return (n) => (0, i.jsx)(t, { guildId: e.id, ...n });
            });
    };
    handleShowMemberVerification = () => {
        let { guild: e } = this.props;
        null != e && (0, E.Ze)(e.id);
    };
    handleClaimAccount = () => {
        g.R();
    };
    handleVerifyPhone = () => {
        (0, d.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("84704"), n.e("16398")]).then(n.bind(n, 615715));
                return (t) => (0, i.jsx)(e, { reason: b.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: B.V },
        );
    };
    handleResendVerification = () => {
        u.A.verifyResend();
        let e = k.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: V.intl.string(V.t.LykQYk), subtitle: V.intl.format(V.t.azKEPy, { email: e }) });
    };
    handleTextAreaClick = () => {
        let { showLurkerModeUpsellPopout: e } = this.props;
        this.setState({ shouldShowLurkerModeUpsellPopout: e });
    };
    handleJoinServer = async () => {
        this.setState({ submitting: !0 });
        let e = this.props.channel.getGuildId();
        try {
            await m.A.joinGuild(e, { source: F.Q4z.CHAT_INPUT_BLOCKER });
        } catch {
            this.setState({ submitting: !1 });
        }
    };
    handleGoBack = () => {
        this.setState({ submitting: !0 }), (0, j.JK)().goBack();
    };
    handleFollowAnnouncement = () => {
        let { channel: e } = this.props;
        (0, d.mMO)(async () => {
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
            (0, i.jsx)(y.A, { type: y.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === C.B5.APPROVED;
        if (null == e || null == t || !n || (0, f.NK)(t)) return null;
        let l = () => {
            p.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        };
        return (0, i.jsx)(d.aFV, {
            renderModal: (t) => (0, i.jsx)(I.A, { ...t, onAccept: l, guildName: e.name }),
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
                theme: u,
                children: h,
                canSendMessages: m,
                channelFollowingUsersSeen: A,
                showLurkerModeUpsellPopout: g,
                showMemberVerificationModal: _,
                useReducedMotion: p,
                isStaff: f,
                guildJoinRequest: E,
                showLinkedLobbyApplicationLoadingIndicator: x,
                requiredLinkedLobbyApplication: S,
                pendingGameProfileReturn: I,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: T, shouldShowLurkerModeSuccessPopout: v } = this.state,
            N = { theme: u, useReducedMotion: p };
        if (e && !m && null != I)
            null != I.gameIconUrl && (N.imageSrc = I.gameIconUrl),
                (N.message = V.intl.format(V.t["qxH/YE"], { gameName: I.gameName })),
                (N.buttonText = V.intl.string(V.t.DjifDP)),
                (N.buttonIcon = d.rJJ),
                (N.buttonVariant = "primary"),
                (N.onButtonClick = I.onReturnToGameProfile);
        else if (e && !m) {
            if (((N.message = V.intl.string(V.t.Hl0Mqh)), null != A && A >= 1e3)) {
                let e = 1e3 * Math.floor(A / 1e3);
                N.subtitle = V.intl.formatToPlainString(V.t.C5bgrC, { count: e.toLocaleString() });
            }
            (N.buttonText = V.intl.string(V.t["3aOv+h"])),
                (N.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((N.onSecondaryButtonClick = this.handleJoinServer),
                    (N.secondaryButtonText = V.intl.string(V.t.RLch70)));
        } else if (n)
            (N.message = V.intl.string(V.t["Eg3/c9"])),
                (N.buttonText = V.intl.string(V.t.fiNVin)),
                (N.onButtonClick = _ ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (_)
            switch (E?.applicationStatus) {
                case C.B5.SUBMITTED:
                    (N.message = V.intl.string(V.t["5iLvSx"])),
                        (N.subtitle = V.intl.string(V.t.FdsK4h)),
                        (N.buttonText = V.intl.string(V.t.mqtdmQ)),
                        (N.onButtonClick = this.handleCancelApplication);
                    break;
                case C.B5.REJECTED:
                    (N.message = V.intl.string(V.t.lk30cY)),
                        (N.buttonText = V.intl.string(V.t["8RrsHr"])),
                        (N.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (N.message = V.intl.string(V.t.rEBKvg)),
                        (N.buttonText = V.intl.string(V.t["r8/DT+"])),
                        (N.buttonVariant = "primary"),
                        (N.onButtonClick = this.handleShowMemberVerification);
            }
        else
            x || null == S
                ? l && !f
                    ? ((N.message = V.intl.string(V.t["2dThMM"])),
                      (N.buttonText = V.intl.string(V.t["50gfOv"])),
                      (N.onButtonClick = this.handleVerifyPhone))
                    : a
                      ? ((N.message = V.intl.string(V.t.FkGPS5)),
                        (N.buttonText = V.intl.string(V.t.lm1UKt)),
                        (N.onButtonClick = this.handleResendVerification))
                      : s
                        ? ((N.message = V.intl.formatToPlainString(V.t.IH7RMF, { min: F.$8o.MEMBER_AGE })),
                          (N.countdown = r))
                        : o &&
                          ((N.message = V.intl.formatToPlainString(V.t["2JA2GH"], { min: F.$8o.ACCOUNT_AGE })),
                          (N.countdown = c))
                : ((N.imageSrc = S.getIconURL(H.iu.SMALL) ?? void 0),
                  (N.message = V.intl.format(V.t.EvDn1D, { name: S.name })),
                  null != S.connectionEntrypointUrl &&
                      ((N.buttonText = V.intl.string(V.t.S0W8Z5)),
                      (N.onButtonClick = () => {
                          window.open(S.connectionEntrypointUrl, "_blank");
                      })));
        return (0, i.jsx)(d.YNO, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: v,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(G.A, {
                    ...N,
                    children: (0, i.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            g
                                ? (0, i.jsx)(d.YNO, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: T,
                                      position: "top",
                                      children: (e) =>
                                          (0, i.jsx)(d.DUT, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: W._,
                                              onClick: this.handleTextAreaClick,
                                              children: h,
                                          }),
                                  })
                                : h,
                        ],
                    }),
                }),
        });
    }
}
function z(e) {
    let { channel: t, children: n } = e,
        l = t.getGuildId(),
        a = (0, r.bG)([O.A], () => O.A.getGuild(l)),
        s = (0, r.bG)([D.A], () => D.A.getCheck(l)),
        o = t.type === F.rbe.GUILD_ANNOUNCEMENT && null != a && a.features.has(F.GuildFeatures.NEWS),
        c = (0, r.bG)([M.A], () => (o ? M.A.getFollowerStatsForChannel(t.id) : null)),
        d = (0, r.bG)([v.A], () => v.A.isLurking(l)),
        u = (0, r.bG)([k.default], () => k.default.getCurrentUser()),
        h = u?.isStaff() ?? !1,
        m = (0, r.bG)([L.Ay], () => null != u && (L.Ay.getMember(l, u.id)?.isPending ?? !1)),
        g = !!(0, x.Qd)(a),
        p = (0, r.bG)([T.A], () => T.A.shouldShowPopout(l)),
        f = (0, r.bG)([P.A], () => P.A.can(F.xBc.SEND_MESSAGES, t)),
        E = (0, r.bG)([S.A], () => S.A.getRequest(l)),
        { showLinkedLobbyApplicationLoadingIndicator: I, requiredLinkedLobbyApplication: N } = (0, U.A)(t.linkedLobby),
        y = (0, _.A)({ channelId: t.id }),
        b = {
            ...s,
            guild: a,
            isLurking: d,
            isFollowable: o,
            shouldShowLurkerModeSuccessPopout: p,
            showLurkerModeUpsellPopout: d && null != a && w.MJ(F.xBc.SEND_MESSAGES, t),
            theme: R.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
            hasVerificationGate: g,
            showMemberVerificationModal: m && g,
            guildJoinRequestStatus: E?.applicationStatus ?? C.B5.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: I,
            requiredLinkedLobbyApplication: N,
            useReducedMotion: A.A.useReducedMotion,
            isStaff: h,
            pendingGameProfileReturn: y,
        };
    return (0, i.jsx)(K, { ...b, channel: t, children: n });
}
