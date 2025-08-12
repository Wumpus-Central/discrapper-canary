n.d(t, { default: () => T }), n(388685);
var r = n(255367),
    s = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(392711),
    l = n.n(o),
    c = n(442837),
    d = n(544891),
    h = n(481060),
    u = n(447543),
    p = n(225433),
    m = n(129861),
    g = n(700582),
    x = n(367907),
    v = n(346486),
    j = n(600164),
    b = n(210887),
    f = n(758449),
    Z = n(598077),
    w = n(592125),
    C = n(246946),
    y = n(626135),
    I = n(981631),
    N = n(388032),
    E = n(234039),
    k = n(423279),
    O = n(881488);
function _(e, t, n) {
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
function P(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
class R extends s.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: n } = this.props,
            s = new Z.Z(e.inviter);
        return (0, r.jsxs)(j.Z, {
            className: a()(E.row, k.card),
            children: [
                (0, r.jsxs)(j.Z, {
                    align: j.Z.Align.CENTER,
                    className: E.userColumn,
                    children: [
                        (0, r.jsx)(g.Z, {
                            user: s,
                            size: h.EFr.SIZE_24,
                            className: E.avatar,
                        }),
                        (0, r.jsx)(m.Z, {
                            user: s,
                            hideDiscriminator: t,
                            usernameClass: E.username,
                            discriminatorClass: E.discrimClass,
                        }),
                    ],
                }),
                (0, r.jsx)(j.Z, {
                    align: j.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: E.boostZIndex,
                    children: (0, r.jsx)(h.Text, {
                        className: E.code,
                        variant: "text-sm/normal",
                        children: n ? "..." : e.code,
                    }),
                }),
                (0, r.jsxs)(j.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: j.Z.Align.CENTER,
                    justify: j.Z.Justify.END,
                    className: E.boostZIndex,
                    children: [
                        (0, r.jsx)(h.Text, {
                            className: E.countdown,
                            variant: "text-sm/normal",
                            children: (0, r.jsx)(v.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1,
                            }),
                        }),
                        (0, r.jsx)(p.Z, {
                            className: E.revokeInvite,
                            onClick: this.handleRevokeInvite,
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "handleRevokeInvite", () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class S extends s.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: I.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new f.Z(
                            D(P({}, e), {
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
            y.default.track(
                I.rMx.OPEN_MODAL,
                D(P({}, (0, x.v_)(w.Z.getChannel(e))), {
                    type: "Group DM Invites",
                    source: "Group DM Menu",
                }),
            );
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, r.jsx)(h.$jN, {
                  className: O.marginTop20,
                  type: h.$jN.Type.SPINNING_CIRCLE,
              })
            : l().isEmpty(t)
              ? this.renderEmpty()
              : (0, r.jsxs)("div", {
                    className: E.container,
                    children: [this.renderHeader(), this.renderInvites()],
                });
    }
    renderEmpty() {
        return (0, r.jsxs)(h.ubH, {
            theme: this.props.theme,
            children: [
                (0, r.jsx)(h.oxh, {
                    darkSrc: n(914814),
                    lightSrc: n(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, r.jsx)(h.OZU, {
                    className: O.marginTop20,
                    children: N.intl.string(N.t["03/rlZ"]),
                }),
            ],
        });
    }
    renderHeader() {
        return (0, r.jsxs)(j.Z, {
            children: [
                (0, r.jsx)(j.Z.Child, {
                    wrap: !0,
                    children: (0, r.jsx)(h.vwX, { children: N.intl.string(N.t.EgHyKy) }),
                }),
                (0, r.jsx)(j.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, r.jsx)(h.vwX, { children: N.intl.string(N.t.LBlFEB) }),
                }),
                (0, r.jsx)(j.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, r.jsx)(h.vwX, {
                        className: E.alignRight,
                        children: N.intl.string(N.t["1aM27e"]),
                    }),
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
            .map((n) =>
                (0, r.jsx)(
                    R,
                    {
                        invite: n,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke,
                    },
                    n.code,
                ),
            )
            .value();
    }
    render() {
        return (0, r.jsxs)(h.Y0X, {
            transitionState: this.props.transitionState,
            "aria-label": N.intl.string(N.t["9F90iY"]),
            size: h.CgR.MEDIUM,
            parentComponent: "InviteSettings",
            children: [
                (0, r.jsxs)(h.xBx, {
                    direction: j.Z.Direction.VERTICAL,
                    align: j.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, r.jsx)(h.vwX, {
                            tag: h.RB0.H1,
                            children: N.intl.string(N.t["9F90iY"]),
                        }),
                        (0, r.jsx)(h.R94, {
                            type: h.geA.DESCRIPTION,
                            children: N.intl.string(N.t.WDw38P),
                        }),
                    ],
                }),
                (0, r.jsx)(h.hzk, { children: this.renderContent() }),
                (0, r.jsx)(h.mzw, {
                    children: (0, r.jsx)(h.zxk, {
                        variant: "primary",
                        text: N.intl.string(N.t.i4jeWV),
                        onClick: this.handleClose,
                    }),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", {
                loading: !0,
                invites: null,
            }),
            _(this, "handleRevoke", (e) => {
                u.ZP.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            _(this, "handleClose", () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let T = c.ZP.connectStores([C.Z, b.Z], () => ({
    hideDiscriminators: C.Z.hidePersonalInformation,
    hideInviteCodes: C.Z.hideInstantInvites,
    theme: b.Z.theme,
}))(S);
