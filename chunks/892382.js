s.d(t, { default: () => M }), s(388685);
var n = s(951288),
    r = s(647438),
    i = s(120356),
    a = s.n(i),
    o = s(392711),
    l = s.n(o),
    c = s(442837),
    d = s(544891),
    h = s(159691),
    u = s(481060),
    m = s(447543),
    p = s(225433),
    x = s(129861),
    j = s(700582),
    v = s(367907),
    g = s(570908),
    b = s(346486),
    y = s(600164),
    C = s(210887),
    Z = s(758449),
    f = s(598077),
    w = s(592125),
    I = s(246946),
    N = s(626135),
    E = s(981631),
    O = s(388032),
    _ = s(525717),
    k = s(620842),
    D = s(197571);
function P(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = s),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                P(e, t, s[t]);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
class T extends r.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: s } = this.props,
            r = new f.default(e.inviter);
        return (0, n.jsxs)(y.Z, {
            className: a()(_.row, k.card),
            children: [
                (0, n.jsxs)(y.Z, {
                    align: y.Z.Align.CENTER,
                    className: _.userColumn,
                    children: [
                        (0, n.jsx)(j.Z, {
                            user: r,
                            size: u.EFr.SIZE_24,
                            className: _.avatar,
                        }),
                        (0, n.jsx)(x.Z, {
                            user: r,
                            hideDiscriminator: t,
                            usernameClass: _.username,
                            discriminatorClass: _.discrimClass,
                        }),
                    ],
                }),
                (0, n.jsx)(y.Z, {
                    align: y.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: _.boostZIndex,
                    children: (0, n.jsx)(u.Text, {
                        className: _.code,
                        variant: "text-sm/normal",
                        children: s ? "..." : e.code,
                    }),
                }),
                (0, n.jsxs)(y.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: y.Z.Align.CENTER,
                    justify: y.Z.Justify.END,
                    className: _.boostZIndex,
                    children: [
                        (0, n.jsx)(u.Text, {
                            className: _.countdown,
                            variant: "text-sm/normal",
                            children: (0, n.jsx)(b.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1,
                            }),
                        }),
                        (0, n.jsx)(p.Z, {
                            className: _.revokeInvite,
                            onClick: this.handleRevokeInvite,
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            P(this, "handleRevokeInvite", () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class A extends r.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: E.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new Z.Z(
                            R(S({}, e), {
                                maxUses: e.max_uses,
                                maxAge: e.max_age,
                                createdAt: e.created_at,
                            }),
                        ),
                );
                this.setState({
                    loading: !1,
                    invites: t,
                });
            }),
            N.default.track(
                E.rMx.OPEN_MODAL,
                R(S({}, (0, v.v_)(w.Z.getChannel(e))), {
                    type: "Group DM Invites",
                    source: "Group DM Menu",
                }),
            );
    }
    renderContent() {
        let { loading: e, invites: t } = this.state,
            { hideDiscriminators: s, hideInviteCodes: r } = this.props;
        if (e || null == t)
            return (0, n.jsx)(u.$jN, {
                className: D.marginTop20,
                type: u.$jN.Type.SPINNING_CIRCLE,
            });
        if (l().isEmpty(t)) return this.renderEmpty();
        let i = l()(t)
            .sortBy((e) => {
                var t;
                return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase();
            })
            .value();
        return (0, n.jsxs)(u.iA_, {
            "aria-label": O.intl.string(O.t["9F90iY"]),
            selectionMode: "none",
            children: [
                (0, n.jsxs)(u.xDH, {
                    children: [
                        (0, n.jsx)(u.DwJ, { children: O.intl.string(O.t.EgHyKy) }),
                        (0, n.jsx)(u.DwJ, { children: O.intl.string(O.t.LBlFEB) }),
                        (0, n.jsx)(u.DwJ, { children: O.intl.string(O.t["1aM27e"]) }),
                    ],
                }),
                (0, n.jsx)(u.RMI, {
                    items: i,
                    children: (e) => {
                        let t = new f.default(e.inviter);
                        return (0, n.jsxs)(u.SCH, {
                            id: e.code,
                            children: [
                                (0, n.jsx)(u.pj1, {
                                    children: (0, n.jsx)(g.Z, {
                                        avatar: (0, n.jsx)(j.Z, {
                                            user: t,
                                            size: u.EFr.SIZE_24,
                                        }),
                                        name: (0, n.jsx)(x.Z, {
                                            user: t,
                                            hideDiscriminator: s,
                                            usernameClass: _.username,
                                            discriminatorClass: _.discrimClass,
                                        }),
                                    }),
                                }),
                                (0, n.jsx)(u.pj1, {
                                    children: (0, n.jsx)(u.Text, {
                                        className: _.code,
                                        variant: "text-sm/normal",
                                        children: r ? "..." : e.code,
                                    }),
                                }),
                                (0, n.jsx)(u.pj1, {
                                    children: (0, n.jsxs)(u.Kqy, {
                                        direction: "horizontal",
                                        align: "center",
                                        gap: 8,
                                        children: [
                                            (0, n.jsx)(u.Text, {
                                                className: _.countdown,
                                                variant: "text-sm/normal",
                                                children: (0, n.jsx)(b.Z, {
                                                    deadline: e.getExpiresAt(),
                                                    showDays: !1,
                                                }),
                                            }),
                                            (0, n.jsx)(u.hU, {
                                                size: "sm",
                                                "aria-label": O.intl.string(O.t.N86XcH),
                                                variant: "critical-secondary",
                                                icon: u.XHJ,
                                                onClick: () => this.handleRevoke(e),
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        });
                    },
                }),
            ],
        });
    }
    renderEmpty() {
        return (0, n.jsxs)(u.ubH, {
            theme: this.props.theme,
            children: [
                (0, n.jsx)(u.oxh, {
                    darkSrc: s(914814),
                    lightSrc: s(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, n.jsx)(u.OZU, {
                    className: D.marginTop20,
                    children: O.intl.string(O.t["03/rlZ"]),
                }),
            ],
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: t } = this.props;
        return l()(this.state.invites)
            .sortBy((e) => {
                var t;
                return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase();
            })
            .map((s) =>
                (0, n.jsx)(
                    T,
                    {
                        invite: s,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke,
                    },
                    s.code,
                ),
            )
            .value();
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, n.jsx)(h.u_l, {
            title: O.intl.string(O.t["9F90iY"]),
            subtitle: O.intl.string(O.t.WDw38P),
            actions: [
                {
                    text: O.intl.string(O.t.i4jeWV),
                    onClick: this.handleClose,
                },
            ],
            onClose: e,
            transitionState: t,
            children: this.renderContent(),
        });
    }
    constructor(...e) {
        super(...e),
            P(this, "state", {
                loading: !0,
                invites: null,
            }),
            P(this, "handleRevoke", (e) => {
                m.ZP.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            P(this, "handleClose", () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let M = c.ZP.connectStores([I.Z, C.Z], () => ({
    hideDiscriminators: I.Z.hidePersonalInformation,
    hideInviteCodes: I.Z.hideInstantInvites,
    theme: C.Z.theme,
}))(A);
