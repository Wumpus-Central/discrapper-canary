r.d(t, { default: () => T }), r(388685);
var s = r(200651),
    n = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(392711),
    l = r.n(o),
    c = r(442837),
    d = r(544891),
    h = r(481060),
    u = r(447543),
    p = r(225433),
    m = r(129861),
    g = r(700582),
    x = r(367907),
    j = r(346486),
    v = r(600164),
    b = r(210887),
    Z = r(758449),
    w = r(598077),
    N = r(592125),
    y = r(246946),
    C = r(626135),
    I = r(981631),
    f = r(388032),
    O = r(612657),
    k = r(588866),
    E = r(20493);
function _(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                _(e, t, r[t]);
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
class D extends n.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: r } = this.props,
            n = new w.Z(e.inviter);
        return (0, s.jsxs)(v.Z, {
            className: a()(O.row, k.card),
            children: [
                (0, s.jsxs)(v.Z, {
                    align: v.Z.Align.CENTER,
                    className: O.userColumn,
                    children: [
                        (0, s.jsx)(g.Z, {
                            user: n,
                            size: h.EFr.SIZE_24,
                            className: O.avatar
                        }),
                        (0, s.jsx)(m.Z, {
                            user: n,
                            hideDiscriminator: t,
                            usernameClass: O.username,
                            discriminatorClass: O.discrimClass
                        })
                    ]
                }),
                (0, s.jsx)(v.Z, {
                    align: v.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: O.boostZIndex,
                    children: (0, s.jsx)(h.Text, {
                        className: O.code,
                        variant: 'text-sm/normal',
                        children: r ? '...' : e.code
                    })
                }),
                (0, s.jsxs)(v.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: v.Z.Align.CENTER,
                    justify: v.Z.Justify.END,
                    className: O.boostZIndex,
                    children: [
                        (0, s.jsx)(h.Text, {
                            className: O.countdown,
                            variant: 'text-sm/normal',
                            children: (0, s.jsx)(j.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1
                            })
                        }),
                        (0, s.jsx)(p.Z, {
                            className: O.revokeInvite,
                            onClick: this.handleRevokeInvite
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'handleRevokeInvite', () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class S extends n.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: I.ANM.INSTANT_INVITES(e),
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
            C.default.track(
                I.rMx.OPEN_MODAL,
                R(P({}, (0, x.v_)(N.Z.getChannel(e))), {
                    type: 'Group DM Invites',
                    source: 'Group DM Menu'
                })
            );
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, s.jsx)(h.$jN, {
                  className: E.marginTop20,
                  type: h.$jN.Type.SPINNING_CIRCLE
              })
            : l().isEmpty(t)
              ? this.renderEmpty()
              : (0, s.jsxs)('div', {
                    className: O.container,
                    children: [this.renderHeader(), this.renderInvites()]
                });
    }
    renderEmpty() {
        return (0, s.jsxs)(h.ubH, {
            theme: this.props.theme,
            children: [
                (0, s.jsx)(h.oxh, {
                    darkSrc: r(914814),
                    lightSrc: r(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 }
                }),
                (0, s.jsx)(h.OZU, {
                    className: E.marginTop20,
                    children: f.NW.string(f.t['03/rlZ'])
                })
            ]
        });
    }
    renderHeader() {
        return (0, s.jsxs)(v.Z, {
            children: [
                (0, s.jsx)(v.Z.Child, {
                    wrap: !0,
                    children: (0, s.jsx)(h.vwX, { children: f.NW.string(f.t.EgHyKy) })
                }),
                (0, s.jsx)(v.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(h.vwX, { children: f.NW.string(f.t.LBlFEB) })
                }),
                (0, s.jsx)(v.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(h.vwX, {
                        className: O.alignRight,
                        children: f.NW.string(f.t['1aM27e'])
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
            .map((r) =>
                (0, s.jsx)(
                    D,
                    {
                        invite: r,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke
                    },
                    r.code
                )
            )
            .value();
    }
    render() {
        return (0, s.jsxs)(h.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': f.NW.string(f.t['9F90iY']),
            size: h.CgR.MEDIUM,
            children: [
                (0, s.jsxs)(h.xBx, {
                    direction: v.Z.Direction.VERTICAL,
                    align: v.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, s.jsx)(h.vwX, {
                            tag: h.RB0.H1,
                            children: f.NW.string(f.t['9F90iY'])
                        }),
                        (0, s.jsx)(h.R94, {
                            type: h.geA.DESCRIPTION,
                            children: f.NW.string(f.t.WDw38P)
                        })
                    ]
                }),
                (0, s.jsx)(h.hzk, { children: this.renderContent() }),
                (0, s.jsx)(h.mzw, {
                    children: (0, s.jsx)(h.zxk, {
                        onClick: this.handleClose,
                        children: f.NW.string(f.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                loading: !0,
                invites: null
            }),
            _(this, 'handleRevoke', (e) => {
                u.ZP.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            _(this, 'handleClose', () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let T = c.ZP.connectStores([y.Z, b.Z], () => ({
    hideDiscriminators: y.Z.hidePersonalInformation,
    hideInviteCodes: y.Z.hideInstantInvites,
    theme: b.Z.theme
}))(S);
