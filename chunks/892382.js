(n.d(t, { default: () => T }), n(388685));
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
    Z = n(758449),
    w = n(598077),
    C = n(592125),
    y = n(246946),
    I = n(626135),
    f = n(981631),
    N = n(388032),
    O = n(612657),
    k = n(588866),
    E = n(20493);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
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
class S extends s.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: n } = this.props,
            s = new w.Z(e.inviter);
        return (0, r.jsxs)(j.Z, {
            className: a()(O.row, k.card),
            children: [
                (0, r.jsxs)(j.Z, {
                    align: j.Z.Align.CENTER,
                    className: O.userColumn,
                    children: [
                        (0, r.jsx)(g.Z, {
                            user: s,
                            size: h.EFr.SIZE_24,
                            className: O.avatar
                        }),
                        (0, r.jsx)(m.Z, {
                            user: s,
                            hideDiscriminator: t,
                            usernameClass: O.username,
                            discriminatorClass: O.discrimClass
                        })
                    ]
                }),
                (0, r.jsx)(j.Z, {
                    align: j.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: O.boostZIndex,
                    children: (0, r.jsx)(h.Text, {
                        className: O.code,
                        variant: 'text-sm/normal',
                        children: n ? '...' : e.code
                    })
                }),
                (0, r.jsxs)(j.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: j.Z.Align.CENTER,
                    justify: j.Z.Justify.END,
                    className: O.boostZIndex,
                    children: [
                        (0, r.jsx)(h.Text, {
                            className: O.countdown,
                            variant: 'text-sm/normal',
                            children: (0, r.jsx)(v.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1
                            })
                        }),
                        (0, r.jsx)(p.Z, {
                            className: O.revokeInvite,
                            onClick: this.handleRevokeInvite
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            _(this, 'handleRevokeInvite', () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            }));
    }
}
class D extends s.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        (d.tn
            .get({
                url: f.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new Z.Z(
                            R(P({}, e), {
                                maxUses: e.max_uses,
                                maxAge: e.max_age,
                                createdAt: e.created_at
                            })
                        )
                );
                this.setState({
                    loading: !1,
                    invites: t
                });
            }),
            I.default.track(
                f.rMx.OPEN_MODAL,
                R(P({}, (0, x.v_)(C.Z.getChannel(e))), {
                    type: 'Group DM Invites',
                    source: 'Group DM Menu'
                })
            ));
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, r.jsx)(h.$jN, {
                  className: E.marginTop20,
                  type: h.$jN.Type.SPINNING_CIRCLE
              })
            : l().isEmpty(t)
              ? this.renderEmpty()
              : (0, r.jsxs)('div', {
                    className: O.container,
                    children: [this.renderHeader(), this.renderInvites()]
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
                    style: { marginBottom: 0 }
                }),
                (0, r.jsx)(h.OZU, {
                    className: E.marginTop20,
                    children: N.intl.string(N.t['03/rlZ'])
                })
            ]
        });
    }
    renderHeader() {
        return (0, r.jsxs)(j.Z, {
            children: [
                (0, r.jsx)(j.Z.Child, {
                    wrap: !0,
                    children: (0, r.jsx)(h.vwX, { children: N.intl.string(N.t.EgHyKy) })
                }),
                (0, r.jsx)(j.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, r.jsx)(h.vwX, { children: N.intl.string(N.t.LBlFEB) })
                }),
                (0, r.jsx)(j.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, r.jsx)(h.vwX, {
                        className: O.alignRight,
                        children: N.intl.string(N.t['1aM27e'])
                    })
                })
            ]
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: t } = this.props;
        return l()(this.state.invites)
            .sortBy((e) => {
                var t;
                return (null != (t = e.inviter.username) ? t : '').toLocaleLowerCase();
            })
            .map((n) =>
                (0, r.jsx)(
                    S,
                    {
                        invite: n,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke
                    },
                    n.code
                )
            )
            .value();
    }
    render() {
        return (0, r.jsxs)(h.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': N.intl.string(N.t['9F90iY']),
            size: h.CgR.MEDIUM,
            parentComponent: 'InviteSettings',
            children: [
                (0, r.jsxs)(h.xBx, {
                    direction: j.Z.Direction.VERTICAL,
                    align: j.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, r.jsx)(h.vwX, {
                            tag: h.RB0.H1,
                            children: N.intl.string(N.t['9F90iY'])
                        }),
                        (0, r.jsx)(h.R94, {
                            type: h.geA.DESCRIPTION,
                            children: N.intl.string(N.t.WDw38P)
                        })
                    ]
                }),
                (0, r.jsx)(h.hzk, { children: this.renderContent() }),
                (0, r.jsx)(h.mzw, {
                    children: (0, r.jsx)(h.zxk, {
                        onClick: this.handleClose,
                        children: N.intl.string(N.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            _(this, 'state', {
                loading: !0,
                invites: null
            }),
            _(this, 'handleRevoke', (e) => {
                (u.ZP.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) }));
            }),
            _(this, 'handleClose', () => {
                let { onClose: e } = this.props;
                null == e || e();
            }));
    }
}
let T = c.ZP.connectStores([y.Z, b.Z], () => ({
    hideDiscriminators: y.Z.hidePersonalInformation,
    hideInviteCodes: y.Z.hideInstantInvites,
    theme: b.Z.theme
}))(D);
