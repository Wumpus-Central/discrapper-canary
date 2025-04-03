n.d(t, { default: () => T }), n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(392711),
    l = n.n(o),
    c = n(442837),
    d = n(544891),
    u = n(481060),
    h = n(447543),
    p = n(225433),
    m = n(129861),
    g = n(700582),
    v = n(367907),
    x = n(346486),
    f = n(600164),
    b = n(210887),
    j = n(758449),
    N = n(598077),
    w = n(592125),
    y = n(246946),
    Z = n(626135),
    C = n(981631),
    I = n(388032),
    _ = n(612657),
    E = n(588866),
    O = n(20493);
function k(e, t, n) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            s.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class R extends r.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: n } = this.props,
            r = new N.Z(e.inviter);
        return (0, s.jsxs)(f.Z, {
            className: a()(_.row, E.card),
            children: [
                (0, s.jsxs)(f.Z, {
                    align: f.Z.Align.CENTER,
                    className: _.userColumn,
                    children: [
                        (0, s.jsx)(g.Z, {
                            user: r,
                            size: u.EFr.SIZE_24,
                            className: _.avatar
                        }),
                        (0, s.jsx)(m.Z, {
                            user: r,
                            hideDiscriminator: t,
                            usernameClass: _.username,
                            discriminatorClass: _.discrimClass
                        })
                    ]
                }),
                (0, s.jsx)(f.Z, {
                    align: f.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: _.boostZIndex,
                    children: (0, s.jsx)(u.Text, {
                        className: _.code,
                        variant: 'text-sm/normal',
                        children: n ? '...' : e.code
                    })
                }),
                (0, s.jsxs)(f.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: f.Z.Align.CENTER,
                    justify: f.Z.Justify.END,
                    className: _.boostZIndex,
                    children: [
                        (0, s.jsx)(u.Text, {
                            className: _.countdown,
                            variant: 'text-sm/normal',
                            children: (0, s.jsx)(x.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1
                            })
                        }),
                        (0, s.jsx)(p.Z, {
                            className: _.revokeInvite,
                            onClick: this.handleRevokeInvite
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'handleRevokeInvite', () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class S extends r.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: C.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new j.Z(
                            P(D({}, e), {
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
            Z.default.track(
                C.rMx.OPEN_MODAL,
                P(D({}, (0, v.v_)(w.Z.getChannel(e))), {
                    type: 'Group DM Invites',
                    source: 'Group DM Menu'
                })
            );
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, s.jsx)(u.$jN, {
                  className: O.marginTop20,
                  type: u.$jN.Type.SPINNING_CIRCLE
              })
            : l().isEmpty(t)
              ? this.renderEmpty()
              : (0, s.jsxs)('div', {
                    className: _.container,
                    children: [this.renderHeader(), this.renderInvites()]
                });
    }
    renderEmpty() {
        return (0, s.jsxs)(u.ubH, {
            theme: this.props.theme,
            children: [
                (0, s.jsx)(u.oxh, {
                    darkSrc: n(914814),
                    lightSrc: n(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 }
                }),
                (0, s.jsx)(u.OZU, {
                    className: O.marginTop20,
                    children: I.NW.string(I.t['03/rlZ'])
                })
            ]
        });
    }
    renderHeader() {
        return (0, s.jsxs)(f.Z, {
            children: [
                (0, s.jsx)(f.Z.Child, {
                    wrap: !0,
                    children: (0, s.jsx)(u.vwX, { children: I.NW.string(I.t.EgHyKy) })
                }),
                (0, s.jsx)(f.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(u.vwX, { children: I.NW.string(I.t.LBlFEB) })
                }),
                (0, s.jsx)(f.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(u.vwX, {
                        className: _.alignRight,
                        children: I.NW.string(I.t['1aM27e'])
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
                (0, s.jsx)(
                    R,
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
        return (0, s.jsxs)(u.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': I.NW.string(I.t['9F90iY']),
            size: u.CgR.MEDIUM,
            children: [
                (0, s.jsxs)(u.xBx, {
                    direction: f.Z.Direction.VERTICAL,
                    align: f.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, s.jsx)(u.vwX, {
                            tag: u.RB0.H1,
                            children: I.NW.string(I.t['9F90iY'])
                        }),
                        (0, s.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            children: I.NW.string(I.t.WDw38P)
                        })
                    ]
                }),
                (0, s.jsx)(u.hzk, { children: this.renderContent() }),
                (0, s.jsx)(u.mzw, {
                    children: (0, s.jsx)(u.zxk, {
                        onClick: this.handleClose,
                        children: I.NW.string(I.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', {
                loading: !0,
                invites: null
            }),
            k(this, 'handleRevoke', (e) => {
                h.ZP.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            k(this, 'handleClose', () => {
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
