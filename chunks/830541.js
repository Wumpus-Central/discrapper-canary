s.d(t, {
    default: () => B,
}),
    s(896048);
var r = s(627968),
    n = s(64700),
    i = s(503698),
    a = s.n(i),
    l = s(735438),
    o = s.n(l),
    c = s(311907),
    d = s(562465),
    h = s(732955),
    u = s(397927),
    p = s(846293),
    m = s(414079),
    b = s(297413),
    x = s(966327),
    j = s(58149),
    f = s(262295),
    g = s(576470),
    A = s(235986),
    y = s(544028),
    v = s(671759),
    C = s(427157),
    N = s(734057),
    O = s(351906),
    E = s(954571),
    w = s(652215),
    k = s(985018),
    I = s(693737),
    _ = s(506823),
    P = s(473169);

function D(e, t, s) {
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
            r = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                D(e, t, s[t]);
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
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
class M extends n.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: s } = this.props,
            n = new C.A(e.inviter);
        return (0, r.jsxs)(A.A, {
            className: a()(I.nM, _.N),
            children: [
                (0, r.jsxs)(A.A, {
                    align: A.A.Align.CENTER,
                    className: I.CE,
                    children: [
                        (0, r.jsx)(x.A, {
                            user: n,
                            size: u._3J.SIZE_24,
                            className: I.my,
                        }),
                        (0, r.jsx)(b.A, {
                            user: n,
                            hideDiscriminator: t,
                            usernameClass: I.Xh,
                            discriminatorClass: I.OM,
                        }),
                    ],
                }),
                (0, r.jsx)(A.A, {
                    align: A.A.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: I.Kf,
                    children: (0, r.jsx)(u.Text, {
                        className: I.aY,
                        variant: "text-sm/normal",
                        children: s ? "..." : e.code,
                    }),
                }),
                (0, r.jsxs)(A.A, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: A.A.Align.CENTER,
                    justify: A.A.Justify.END,
                    className: I.Kf,
                    children: [
                        (0, r.jsx)(u.Text, {
                            className: I.qW,
                            variant: "text-sm/normal",
                            children: (0, r.jsx)(g.A, {
                                deadline: e.getExpiresAt(),
                                showDays: !1,
                            }),
                        }),
                        (0, r.jsx)(m.A, {
                            className: I.eb,
                            onClick: this.handleRevokeInvite,
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            D(this, "handleRevokeInvite", () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class T extends n.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.Bo.get({
            url: w.Rsh.INSTANT_INVITES(e),
            retries: 3,
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then((e) => {
            let t = e.body.map(
                (e) =>
                    new v.A(
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
            E.default.track(
                w.HAw.OPEN_MODAL,
                R(S({}, (0, j.dI)(N.A.getChannel(e))), {
                    type: "Group DM Invites",
                    source: "Group DM Menu",
                }),
            );
    }
    renderContent() {
        let { loading: e, invites: t } = this.state,
            { hideDiscriminators: s, hideInviteCodes: n } = this.props;
        if (e || null == t)
            return (0, r.jsx)(u.y$y, {
                className: P.QX,
                type: u.y$y.Type.SPINNING_CIRCLE,
            });
        if (o().isEmpty(t)) return this.renderEmpty();
        let i = o()(t)
            .sortBy((e) => {
                var t;
                return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase();
            })
            .value();
        return (0, r.jsxs)(u.XIK, {
            "aria-label": k.intl.string(k.t["9F90ic"]),
            selectionMode: "none",
            children: [
                (0, r.jsxs)(u.A0N, {
                    children: [
                        (0, r.jsx)(u.VeA, {
                            children: k.intl.string(k.t.EgHyKy),
                        }),
                        (0, r.jsx)(u.VeA, {
                            children: k.intl.string(k.t.LBlFEN),
                        }),
                        (0, r.jsx)(u.VeA, {
                            children: k.intl.string(k.t["1aM27d"]),
                        }),
                    ],
                }),
                (0, r.jsx)(u.BFY, {
                    items: i,
                    children: (e) => {
                        let t = new C.A(e.inviter);
                        return (0, r.jsxs)(u.Hjg, {
                            id: e.code,
                            children: [
                                (0, r.jsx)(u.nA6, {
                                    children: (0, r.jsx)(f.A, {
                                        avatar: (0, r.jsx)(x.A, {
                                            user: t,
                                            size: u._3J.SIZE_24,
                                        }),
                                        name: (0, r.jsx)(b.A, {
                                            user: t,
                                            hideDiscriminator: s,
                                            usernameClass: I.Xh,
                                            discriminatorClass: I.OM,
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(u.nA6, {
                                    children: (0, r.jsx)(u.Text, {
                                        className: I.aY,
                                        variant: "text-sm/normal",
                                        children: n ? "..." : e.code,
                                    }),
                                }),
                                (0, r.jsx)(u.nA6, {
                                    children: (0, r.jsxs)(u.BJc, {
                                        direction: "horizontal",
                                        align: "center",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                className: I.qW,
                                                variant: "text-sm/normal",
                                                children: (0, r.jsx)(g.A, {
                                                    deadline: e.getExpiresAt(),
                                                    showDays: !1,
                                                }),
                                            }),
                                            (0, r.jsx)(u.K0, {
                                                size: "sm",
                                                "aria-label": k.intl.string(k.t.N86XcP),
                                                variant: "critical-secondary",
                                                icon: u.ucK,
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
        return (0, r.jsxs)(u.ppr, {
            theme: this.props.theme,
            children: [
                (0, r.jsx)(u.G8R, {
                    darkSrc: s(774125),
                    lightSrc: s(151803),
                    width: 256,
                    height: 130,
                    style: {
                        marginBottom: 0,
                    },
                }),
                (0, r.jsx)(u.SGT, {
                    className: P.QX,
                    children: k.intl.string(k.t["03/rlQ"]),
                }),
            ],
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: t } = this.props;
        return o()(this.state.invites)
            .sortBy((e) => {
                var t;
                return (null != (t = e.inviter.username) ? t : "").toLocaleLowerCase();
            })
            .map((s) =>
                (0, r.jsx)(
                    M,
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
        return (0, r.jsx)(h.aFV, {
            title: k.intl.string(k.t["9F90ic"]),
            subtitle: k.intl.string(k.t.WDw38H),
            actions: [
                {
                    text: k.intl.string(k.t.i4jeWR),
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
            D(this, "state", {
                loading: !0,
                invites: null,
            }),
            D(this, "handleRevoke", (e) => {
                p.Ay.revokeInvite(e),
                    this.setState({
                        invites: this.state.invites.filter((t) => t !== e),
                    });
            }),
            D(this, "handleClose", () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let B = c.Ay.connectStores([O.A, y.A], () => ({
    hideDiscriminators: O.A.hidePersonalInformation,
    hideInviteCodes: O.A.hideInstantInvites,
    theme: y.A.theme,
}))(T);
