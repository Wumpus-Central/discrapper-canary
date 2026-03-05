n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(311907),
    o = n(139033),
    c = n(314116),
    d = n(397927),
    u = n(830215),
    h = n(857182),
    m = n(686956),
    A = n(775602),
    g = n(315982),
    p = n(624458),
    f = n(821124),
    _ = n(202384),
    E = n(513461),
    x = n(709977),
    C = n(212455),
    S = n(466244),
    I = n(158476),
    T = n(857071),
    N = n(552227),
    b = n(698405),
    y = n(557722),
    v = n(976860),
    j = n(544028),
    R = n(560010),
    M = n(696451),
    D = n(71393),
    O = n(834942),
    L = n(576705),
    P = n(287809),
    w = n(488926),
    k = n(137577),
    U = n(786051),
    G = n(652215),
    F = n(360469),
    H = n(53516),
    B = n(985018),
    V = n(690427);
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
        return a()(null != n, "This guildID cannot be null"), (0, i.jsx)(N.A, { onClose: t, guild: n });
    };
    handleCancelApplication = () => {
        let { guild: e } = this.props;
        null != e &&
            (0, c.A)({
                title: B.intl.string(B.t.aIz1oV),
                subtitle: B.intl.string(B.t["13tjTU"]),
                variant: "primary",
                confirmText: B.intl.string(B.t["cY+Oob"]),
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
        null != e && (0, _.Ze)(e.id);
    };
    handleClaimAccount = () => {
        g.R();
    };
    handleVerifyPhone = () => {
        (0, d.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("84704"), n.e("24676")]).then(n.bind(n, 615715));
                return (t) => (0, i.jsx)(e, { reason: y.d.GUILD_PHONE_REQUIRED, ...t });
            },
            { modalKey: H.V },
        );
    };
    handleResendVerification = () => {
        u.A.verifyResend();
        let e = P.default.getCurrentUser()?.email;
        null != e && (0, o.A)({ title: B.intl.string(B.t.LykQYk), subtitle: B.intl.format(B.t.azKEPy, { email: e }) });
    };
    handleTextAreaClick = () => {
        let { showLurkerModeUpsellPopout: e } = this.props;
        this.setState({ shouldShowLurkerModeUpsellPopout: e });
    };
    handleJoinServer = async () => {
        this.setState({ submitting: !0 });
        let e = this.props.channel.getGuildId();
        try {
            await m.A.joinGuild(e, { source: G.Q4z.CHAT_INPUT_BLOCKER });
        } catch {
            this.setState({ submitting: !1 });
        }
    };
    handleGoBack = () => {
        this.setState({ submitting: !0 }), (0, v.JK)().goBack();
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
            a()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
            (0, i.jsx)(b.A, { type: b.w.CHAT, guild: e, closePopout: this.closeLurkerModeUpsellPopout })
        );
    };
    renderMemberVerificationSuccessModal = () => {
        let { guild: e, guildJoinRequest: t } = this.props,
            n = t?.applicationStatus === E.B5.APPROVED;
        if (null == e || null == t || !n || (0, f.NK)(t)) return null;
        let l = () => {
            p.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
        };
        return (0, i.jsx)(d.aFV, {
            renderModal: (t) => (0, i.jsx)(S.A, { ...t, onAccept: l, guildName: e.name }),
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
                theme: u,
                children: h,
                canSendMessages: m,
                channelFollowingUsersSeen: A,
                showLurkerModeUpsellPopout: g,
                showMemberVerificationModal: p,
                useReducedMotion: f,
                isStaff: _,
                guildJoinRequest: x,
                showLinkedLobbyApplicationLoadingIndicator: C,
                requiredLinkedLobbyApplication: S,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: I, shouldShowLurkerModeSuccessPopout: T } = this.state,
            N = { theme: u, useReducedMotion: f };
        if (e && !m) {
            if (((N.message = B.intl.string(B.t.Hl0Mqh)), null != A && A >= 1e3)) {
                let e = 1e3 * Math.floor(A / 1e3);
                N.subtitle = B.intl.formatToPlainString(B.t.C5bgrC, { count: e.toLocaleString() });
            }
            (N.buttonText = B.intl.string(B.t["3aOv+h"])),
                (N.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((N.onSecondaryButtonClick = this.handleJoinServer),
                    (N.secondaryButtonText = B.intl.string(B.t.RLch70)));
        } else if (n)
            (N.message = B.intl.string(B.t["Eg3/c9"])),
                (N.buttonText = B.intl.string(B.t.fiNVin)),
                (N.onButtonClick = p ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (p)
            switch (x?.applicationStatus) {
                case E.B5.SUBMITTED:
                    (N.message = B.intl.string(B.t["5iLvSx"])),
                        (N.subtitle = B.intl.string(B.t.FdsK4h)),
                        (N.buttonText = B.intl.string(B.t.mqtdmQ)),
                        (N.onButtonClick = this.handleCancelApplication);
                    break;
                case E.B5.REJECTED:
                    (N.message = B.intl.string(B.t.lk30cY)),
                        (N.buttonText = B.intl.string(B.t["8RrsHr"])),
                        (N.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (N.message = B.intl.string(B.t.rEBKvg)),
                        (N.buttonText = B.intl.string(B.t["r8/DT+"])),
                        (N.buttonVariant = "primary"),
                        (N.onButtonClick = this.handleShowMemberVerification);
            }
        else
            C || null == S
                ? l && !_
                    ? ((N.message = B.intl.string(B.t["2dThMM"])),
                      (N.buttonText = B.intl.string(B.t["50gfOv"])),
                      (N.onButtonClick = this.handleVerifyPhone))
                    : s
                      ? ((N.message = B.intl.string(B.t.FkGPS5)),
                        (N.buttonText = B.intl.string(B.t.lm1UKt)),
                        (N.onButtonClick = this.handleResendVerification))
                      : a
                        ? ((N.message = B.intl.formatToPlainString(B.t.IH7RMF, { min: G.$8o.MEMBER_AGE })),
                          (N.countdown = r))
                        : o &&
                          ((N.message = B.intl.formatToPlainString(B.t["2JA2GH"], { min: G.$8o.ACCOUNT_AGE })),
                          (N.countdown = c))
                : ((N.imageSrc = S.getIconURL(F.iu.SMALL) ?? void 0),
                  (N.message = B.intl.format(B.t.EvDn1D, { name: S.name })),
                  null != S.connectionEntrypointUrl &&
                      ((N.buttonText = B.intl.string(B.t.S0W8Z5)),
                      (N.onButtonClick = () => {
                          window.open(S.connectionEntrypointUrl, "_blank");
                      })));
        return (0, i.jsx)(d.YNO, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: T,
            onRequestClose: () => this.setState({ shouldShowLurkerModeSuccessPopout: !1 }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, i.jsx)(U.A, {
                    ...N,
                    children: (0, i.jsxs)("div", {
                        ref: this.textAreaContainerRef,
                        children: [
                            this.renderMemberVerificationSuccessModal(),
                            g
                                ? (0, i.jsx)(d.YNO, {
                                      targetElementRef: this.upsellTargetRef,
                                      renderPopout: this.renderLurkerModeUpsellPopout,
                                      shouldShow: I,
                                      position: "top",
                                      children: (e) =>
                                          (0, i.jsx)(d.DUT, {
                                              innerRef: this.upsellTargetRef,
                                              ...e,
                                              className: V._,
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
function W(e) {
    let { channel: t, children: n } = e,
        l = t.getGuildId(),
        s = (0, r.bG)([D.A], () => D.A.getGuild(l)),
        a = (0, r.bG)([O.A], () => O.A.getCheck(l)),
        o = t.type === G.rbe.GUILD_ANNOUNCEMENT && null != s && s.features.has(G.GuildFeatures.NEWS),
        c = (0, r.bG)([R.A], () => (o ? R.A.getFollowerStatsForChannel(t.id) : null)),
        d = (0, r.bG)([T.A], () => T.A.isLurking(l)),
        u = (0, r.bG)([P.default], () => P.default.getCurrentUser()),
        h = u?.isStaff() ?? !1,
        m = (0, r.bG)([M.Ay], () => null != u && (M.Ay.getMember(l, u.id)?.isPending ?? !1)),
        g = !!(0, x.Qd)(s),
        p = (0, r.bG)([I.A], () => I.A.shouldShowPopout(l)),
        f = (0, r.bG)([L.A], () => L.A.can(G.xBc.SEND_MESSAGES, t)),
        _ = (0, r.bG)([C.A], () => C.A.getRequest(l)),
        { showLinkedLobbyApplicationLoadingIndicator: S, requiredLinkedLobbyApplication: N } = (0, k.A)(t.linkedLobby),
        b = {
            ...a,
            guild: s,
            isLurking: d,
            isFollowable: o,
            shouldShowLurkerModeSuccessPopout: p,
            showLurkerModeUpsellPopout: d && null != s && w.MJ(G.xBc.SEND_MESSAGES, t),
            theme: j.A.theme,
            canSendMessages: f,
            channelFollowingUsersSeen: null != c ? c.usersSeenEver : null,
            hasVerificationGate: g,
            showMemberVerificationModal: m && g,
            guildJoinRequestStatus: _?.applicationStatus ?? E.B5.STARTED,
            guildJoinRequest: _,
            showLinkedLobbyApplicationLoadingIndicator: S,
            requiredLinkedLobbyApplication: N,
            useReducedMotion: A.A.useReducedMotion,
            isStaff: h,
        };
    return (0, i.jsx)(K, { ...b, channel: t, children: n });
}
