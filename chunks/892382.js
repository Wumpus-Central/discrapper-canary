r.d(t, { default: () => A }), r(388685);
var s = r(951288),
    n = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(392711),
    l = r.n(o),
    c = r(442837),
    d = r(544891),
    h = r(159691),
    u = r(481060),
    p = r(447543),
    m = r(225433),
    g = r(129861),
    v = r(700582),
    x = r(367907),
    j = r(346486),
    b = r(600164),
    Z = r(210887),
    w = r(758449),
    y = r(598077),
    C = r(592125),
    f = r(246946),
    I = r(626135),
    N = r(981631),
    O = r(388032),
    _ = r(525717),
    k = r(620842),
    E = r(197571);
function P(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                P(e, t, r[t]);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, s);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
class R extends n.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: r } = this.props,
            n = new y.Z(e.inviter);
        return (0, s.jsxs)(b.Z, {
            className: a()(_.row, k.card),
            children: [
                (0, s.jsxs)(b.Z, {
                    align: b.Z.Align.CENTER,
                    className: _.userColumn,
                    children: [
                        (0, s.jsx)(v.Z, {
                            user: n,
                            size: u.EFr.SIZE_24,
                            className: _.avatar,
                        }),
                        (0, s.jsx)(g.Z, {
                            user: n,
                            hideDiscriminator: t,
                            usernameClass: _.username,
                            discriminatorClass: _.discrimClass,
                        }),
                    ],
                }),
                (0, s.jsx)(b.Z, {
                    align: b.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: _.boostZIndex,
                    children: (0, s.jsx)(u.Text, {
                        className: _.code,
                        variant: "text-sm/normal",
                        children: r ? "..." : e.code,
                    }),
                }),
                (0, s.jsxs)(b.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: b.Z.Align.CENTER,
                    justify: b.Z.Justify.END,
                    className: _.boostZIndex,
                    children: [
                        (0, s.jsx)(u.Text, {
                            className: _.countdown,
                            variant: "text-sm/normal",
                            children: (0, s.jsx)(j.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1,
                            }),
                        }),
                        (0, s.jsx)(m.Z, {
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
class T extends n.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: N.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new w.Z(
                            S(D({}, e), {
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
            I.default.track(
                N.rMx.OPEN_MODAL,
                S(D({}, (0, x.v_)(C.Z.getChannel(e))), {
                    type: "Group DM Invites",
                    source: "Group DM Menu",
                }),
            );
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, s.jsx)(u.$jN, {
                  className: E.marginTop20,
                  type: u.$jN.Type.SPINNING_CIRCLE,
              })
            : l().isEmpty(t)
              ? this.renderEmpty()
              : (0, s.jsxs)("div", {
                    className: _.container,
                    children: [this.renderHeader(), this.renderInvites()],
                });
    }
    renderEmpty() {
        return (0, s.jsxs)(u.ubH, {
            theme: this.props.theme,
            children: [
                (0, s.jsx)(u.oxh, {
                    darkSrc: r(914814),
                    lightSrc: r(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, s.jsx)(u.OZU, {
                    className: E.marginTop20,
                    children: O.intl.string(O.t["03/rlZ"]),
                }),
            ],
        });
    }
    renderHeader() {
        return (0, s.jsxs)(b.Z, {
            children: [
                (0, s.jsx)(b.Z.Child, {
                    wrap: !0,
                    children: (0, s.jsx)(u.vwX, { children: O.intl.string(O.t.EgHyKy) }),
                }),
                (0, s.jsx)(b.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(u.vwX, { children: O.intl.string(O.t.LBlFEB) }),
                }),
                (0, s.jsx)(b.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(u.vwX, {
                        className: _.alignRight,
                        children: O.intl.string(O.t["1aM27e"]),
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
            .map((r) =>
                (0, s.jsx)(
                    R,
                    {
                        invite: r,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke,
                    },
                    r.code,
                ),
            )
            .value();
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, s.jsx)(h.u_l, {
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
                p.ZP.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            P(this, "handleClose", () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let A = c.ZP.connectStores([f.Z, Z.Z], () => ({
    hideDiscriminators: f.Z.hidePersonalInformation,
    hideInviteCodes: f.Z.hideInstantInvites,
    theme: Z.Z.theme,
}))(T);
