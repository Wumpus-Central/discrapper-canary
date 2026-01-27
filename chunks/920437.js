n.d(t, {
    A: () => q,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(311907),
    o = n(139033),
    c = n(314116),
    u = n(397927),
    d = n(830215),
    p = n(857182),
    h = n(686956),
    f = n(775602),
    g = n(315982),
    m = n(624458),
    b = n(821124),
    A = n(202384),
    y = n(513461),
    _ = n(709977),
    O = n(212455),
    j = n(466244),
    v = n(158476),
    x = n(857071),
    E = n(552227),
    C = n(698405),
    S = n(557722),
    I = n(976860),
    N = n(544028),
    T = n(560010),
    P = n(696451),
    w = n(71393),
    R = n(834942),
    D = n(576705),
    M = n(287809),
    L = n(488926),
    k = n(137577),
    G = n(786051),
    U = n(652215),
    B = n(360469),
    V = n(53516),
    F = n(985018),
    H = n(32385);

function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}

function z(e, t) {
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
class Y extends l.PureComponent {
    componentDidMount() {
        let { isFollowable: e, channelFollowingUsersSeen: t, channel: n } = this.props;
        e && null == t && p.A.fetchChannelFollowerStats(n.id);
    }
    componentDidUpdate(e) {
        let { shouldShowLurkerModeSuccessPopout: t, guild: n, showMemberVerificationModal: r } = this.props;
        r ||
            e.shouldShowLurkerModeSuccessPopout ||
            !t ||
            null == n ||
            this.setState({
                shouldShowLurkerModeSuccessPopout: !0,
            });
    }
    render() {
        let {
                isFollowable: e,
                isLurking: t,
                notClaimed: n,
                notPhoneVerified: l,
                notEmailVerified: i,
                newMember: s,
                memberDeadline: a,
                newAccount: o,
                accountDeadline: c,
                theme: d,
                children: p,
                canSendMessages: h,
                channelFollowingUsersSeen: f,
                showLurkerModeUpsellPopout: g,
                showMemberVerificationModal: m,
                useReducedMotion: b,
                isStaff: A,
                guildJoinRequest: _,
                showLinkedLobbyApplicationLoadingIndicator: O,
                requiredLinkedLobbyApplication: j,
            } = this.props,
            { shouldShowLurkerModeUpsellPopout: v, shouldShowLurkerModeSuccessPopout: x } = this.state,
            E = {
                theme: d,
                useReducedMotion: b,
            };
        if (e && !h) {
            if (((E.message = F.intl.string(F.t.Hl0Mqh)), null != f && f >= 1e3)) {
                let e = 1e3 * Math.floor(f / 1e3);
                E.subtitle = F.intl.formatToPlainString(F.t.C5bgrC, {
                    count: e.toLocaleString(),
                });
            }
            (E.buttonText = F.intl.string(F.t["3aOv+h"])),
                (E.onButtonClick = this.handleFollowAnnouncement),
                t &&
                    ((E.onSecondaryButtonClick = this.handleJoinServer),
                    (E.secondaryButtonText = F.intl.string(F.t.RLch70)));
        } else if (n)
            (E.message = F.intl.string(F.t["Eg3/c9"])),
                (E.buttonText = F.intl.string(F.t.fiNVin)),
                (E.onButtonClick = m ? this.handleShowMemberVerification : this.handleClaimAccount);
        else if (m)
            switch (null == _ ? void 0 : _.applicationStatus) {
                case y.B5.SUBMITTED:
                    (E.message = F.intl.string(F.t["5iLvSx"])),
                        (E.subtitle = F.intl.string(F.t.FdsK4h)),
                        (E.buttonText = F.intl.string(F.t.mqtdmQ)),
                        (E.onButtonClick = this.handleCancelApplication);
                    break;
                case y.B5.REJECTED:
                    (E.message = F.intl.string(F.t.lk30cY)),
                        (E.buttonText = F.intl.string(F.t["8RrsHr"])),
                        (E.onButtonClick = this.handleViewApplicationRejection);
                    break;
                default:
                    (E.message = F.intl.string(F.t.rEBKvg)),
                        (E.buttonText = F.intl.string(F.t["r8/DT+"])),
                        (E.buttonVariant = "primary"),
                        (E.onButtonClick = this.handleShowMemberVerification);
            }
        else if (O || null == j)
            l && !A
                ? ((E.message = F.intl.string(F.t["2dThMM"])),
                  (E.buttonText = F.intl.string(F.t["50gfOv"])),
                  (E.onButtonClick = this.handleVerifyPhone))
                : i
                  ? ((E.message = F.intl.string(F.t.FkGPS5)),
                    (E.buttonText = F.intl.string(F.t.lm1UKt)),
                    (E.onButtonClick = this.handleResendVerification))
                  : s
                    ? ((E.message = F.intl.formatToPlainString(F.t.IH7RMF, {
                          min: U.$8o.MEMBER_AGE,
                      })),
                      (E.countdown = a))
                    : o &&
                      ((E.message = F.intl.formatToPlainString(F.t["2JA2GH"], {
                          min: U.$8o.ACCOUNT_AGE,
                      })),
                      (E.countdown = c));
        else {
            var C;
            (E.imageSrc = null != (C = j.getIconURL(B.iu.SMALL)) ? C : void 0),
                (E.message = F.intl.format(F.t.EvDn1D, {
                    name: j.name,
                })),
                null != j.connectionEntrypointUrl &&
                    ((E.buttonText = F.intl.string(F.t.S0W8Z5)),
                    (E.onButtonClick = () => {
                        window.open(j.connectionEntrypointUrl, "_blank");
                    }));
        }
        return (0, r.jsx)(u.YNO, {
            targetElementRef: this.textAreaContainerRef,
            position: "top",
            align: "left",
            shouldShow: x,
            onRequestClose: () =>
                this.setState({
                    shouldShowLurkerModeSuccessPopout: !1,
                }),
            renderPopout: this.renderSuccessPopout,
            children: (e) =>
                (0, r.jsx)(
                    G.A,
                    z(W({}, E), {
                        children: (0, r.jsxs)("div", {
                            ref: this.textAreaContainerRef,
                            children: [
                                this.renderMemberVerificationSuccessModal(),
                                g
                                    ? (0, r.jsx)(u.YNO, {
                                          targetElementRef: this.upsellTargetRef,
                                          renderPopout: this.renderLurkerModeUpsellPopout,
                                          shouldShow: v,
                                          position: "top",
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  u.DUT,
                                                  z(
                                                      W(
                                                          {
                                                              innerRef: this.upsellTargetRef,
                                                          },
                                                          e,
                                                      ),
                                                      {
                                                          className: H._,
                                                          onClick: this.handleTextAreaClick,
                                                          children: p,
                                                      },
                                                  ),
                                              ),
                                      })
                                    : p,
                            ],
                        }),
                    }),
                ),
        });
    }
    constructor(...e) {
        super(...e),
            K(this, "state", {
                submitting: !1,
                shouldShowLurkerModeUpsellPopout: !1,
                shouldShowLurkerModeSuccessPopout: !1,
            }),
            K(this, "textAreaContainerRef", l.createRef()),
            K(this, "upsellTargetRef", l.createRef()),
            K(this, "renderSuccessPopout", (e) => {
                let { closePopout: t } = e,
                    { guild: n } = this.props;
                return (
                    s()(null != n, "This guildID cannot be null"),
                    (0, r.jsx)(E.A, {
                        onClose: t,
                        guild: n,
                    })
                );
            }),
            K(this, "handleCancelApplication", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, c.A)({
                        title: F.intl.string(F.t.aIz1oV),
                        subtitle: F.intl.string(F.t["13tjTU"]),
                        variant: "primary",
                        confirmText: F.intl.string(F.t["cY+Oob"]),
                        onConfirm: () => m.A.removeGuildJoinRequest(e.id),
                    });
            }),
            K(this, "handleViewApplicationRejection", () => {
                let { guild: e } = this.props;
                null != e &&
                    (0, u.mMO)(async () => {
                        let { default: t } = await n.e("37548").then(n.bind(n, 856103));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                W(
                                    {
                                        guildId: e.id,
                                    },
                                    n,
                                ),
                            );
                    });
            }),
            K(this, "handleShowMemberVerification", () => {
                let { guild: e } = this.props;
                null != e && (0, A.Ze)(e.id);
            }),
            K(this, "handleClaimAccount", () => {
                g.R();
            }),
            K(this, "handleVerifyPhone", () => {
                (0, u.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("84704"), n.e("45668")]).then(n.bind(n, 615715));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                W(
                                    {
                                        reason: S.d.GUILD_PHONE_REQUIRED,
                                    },
                                    t,
                                ),
                            );
                    },
                    {
                        modalKey: V.V,
                    },
                );
            }),
            K(this, "handleResendVerification", () => {
                var e;
                d.A.verifyResend();
                let t = null == (e = M.default.getCurrentUser()) ? void 0 : e.email;
                null != t &&
                    (0, o.A)({
                        title: F.intl.string(F.t.LykQYk),
                        subtitle: F.intl.format(F.t.azKEPy, {
                            email: t,
                        }),
                    });
            }),
            K(this, "handleTextAreaClick", () => {
                let { showLurkerModeUpsellPopout: e } = this.props;
                this.setState({
                    shouldShowLurkerModeUpsellPopout: e,
                });
            }),
            K(this, "handleJoinServer", async () => {
                this.setState({
                    submitting: !0,
                });
                let e = this.props.channel.getGuildId();
                try {
                    await h.A.joinGuild(e, {
                        source: U.Q4z.CHAT_INPUT_BLOCKER,
                    });
                } catch (e) {
                    this.setState({
                        submitting: !1,
                    });
                }
            }),
            K(this, "handleGoBack", () => {
                this.setState({
                    submitting: !0,
                }),
                    (0, I.JK)().goBack();
            }),
            K(this, "handleFollowAnnouncement", () => {
                let { channel: e } = this.props;
                (0, u.mMO)(async () => {
                    let { default: t } = await n.e("66464").then(n.bind(n, 464035));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            W(
                                {
                                    channel: e,
                                },
                                n,
                            ),
                        );
                });
            }),
            K(this, "closeLurkerModeUpsellPopout", () => {
                this.setState({
                    shouldShowLurkerModeUpsellPopout: !1,
                });
            }),
            K(this, "renderLurkerModeUpsellPopout", () => {
                let { guild: e } = this.props;
                return (
                    s()(null != e, "GuildVerification.renderLurkerModeUpsellPopout - guild cannot be undefined"),
                    (0, r.jsx)(C.A, {
                        type: C.w.CHAT,
                        guild: e,
                        closePopout: this.closeLurkerModeUpsellPopout,
                    })
                );
            }),
            K(this, "renderMemberVerificationSuccessModal", () => {
                let { guild: e, guildJoinRequest: t } = this.props,
                    n = (null == t ? void 0 : t.applicationStatus) === y.B5.APPROVED;
                if (null == e || null == t || !n || (0, b.NK)(t)) return null;
                let l = () => {
                    m.A.ackUserGuildJoinRequest(e.id, t.joinRequestId);
                };
                return (0, r.jsx)(u.aFV, {
                    renderModal: (t) =>
                        (0, r.jsx)(
                            j.A,
                            z(W({}, t), {
                                onAccept: l,
                                guildName: e.name,
                            }),
                        ),
                    onCloseRequest: l,
                });
            });
    }
}

function q(e) {
    var t, n;
    let { channel: l, children: i } = e,
        s = l.getGuildId(),
        o = (0, a.bG)([w.A], () => w.A.getGuild(s)),
        c = (0, a.bG)([R.A], () => R.A.getCheck(s)),
        u = l.type === U.rbe.GUILD_ANNOUNCEMENT && null != o && o.features.has(U.GuildFeatures.NEWS),
        d = (0, a.bG)([T.A], () => (u ? T.A.getFollowerStatsForChannel(l.id) : null)),
        p = (0, a.bG)([x.A], () => x.A.isLurking(s)),
        h = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
        g = null != (t = null == h ? void 0 : h.isStaff()) && t,
        m = (0, a.bG)([P.Ay], () => {
            var e, t;
            return null != h && null != (e = null == (t = P.Ay.getMember(s, h.id)) ? void 0 : t.isPending) && e;
        }),
        b = !!(0, _.Qd)(o),
        A = (0, a.bG)([v.A], () => v.A.shouldShowPopout(s)),
        j = (0, a.bG)([D.A], () => D.A.can(U.xBc.SEND_MESSAGES, l)),
        E = (0, a.bG)([O.A], () => O.A.getRequest(s)),
        { showLinkedLobbyApplicationLoadingIndicator: C, requiredLinkedLobbyApplication: S } = (0, k.A)(l.linkedLobby),
        I = z(W({}, c), {
            guild: o,
            isLurking: p,
            isFollowable: u,
            shouldShowLurkerModeSuccessPopout: A,
            showLurkerModeUpsellPopout: p && null != o && L.MJ(U.xBc.SEND_MESSAGES, l),
            theme: N.A.theme,
            canSendMessages: j,
            channelFollowingUsersSeen: null != d ? d.usersSeenEver : null,
            hasVerificationGate: b,
            showMemberVerificationModal: m && b,
            guildJoinRequestStatus: null != (n = null == E ? void 0 : E.applicationStatus) ? n : y.B5.STARTED,
            guildJoinRequest: E,
            showLinkedLobbyApplicationLoadingIndicator: C,
            requiredLinkedLobbyApplication: S,
            useReducedMotion: f.A.useReducedMotion,
            isStaff: g,
        });
    return (0, r.jsx)(
        Y,
        z(W({}, I), {
            channel: l,
            children: i,
        }),
    );
}
