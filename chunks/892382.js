n.d(t, { default: () => A }), n(47120);
var s = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(392711),
    o = n.n(l),
    d = n(442837),
    c = n(544891),
    h = n(481060),
    u = n(447543),
    p = n(225433),
    m = n(129861),
    x = n(700582),
    v = n(367907),
    g = n(346486),
    f = n(600164),
    j = n(210887),
    Z = n(758449),
    b = n(598077),
    C = n(592125),
    I = n(246946),
    w = n(626135),
    N = n(981631),
    _ = n(388032),
    E = n(898257),
    k = n(937551),
    y = n(814632);
function R(e, t, n) {
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
class D extends i.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: n } = this.props,
            i = new b.Z(e.inviter);
        return (0, s.jsxs)(f.Z, {
            className: a()(E.row, k.card),
            children: [
                (0, s.jsxs)(f.Z, {
                    align: f.Z.Align.CENTER,
                    className: E.userColumn,
                    children: [
                        (0, s.jsx)(x.Z, {
                            user: i,
                            size: h.EFr.SIZE_24,
                            className: E.avatar
                        }),
                        (0, s.jsx)(m.Z, {
                            user: i,
                            hideDiscriminator: t,
                            usernameClass: E.username,
                            discriminatorClass: E.discrimClass
                        })
                    ]
                }),
                (0, s.jsx)(f.Z, {
                    align: f.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: E.boostZIndex,
                    children: (0, s.jsx)(h.Text, {
                        className: E.code,
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
                    className: E.boostZIndex,
                    children: [
                        (0, s.jsx)(h.Text, {
                            className: E.countdown,
                            variant: 'text-sm/normal',
                            children: (0, s.jsx)(g.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1
                            })
                        }),
                        (0, s.jsx)(p.Z, {
                            className: E.revokeInvite,
                            onClick: this.handleRevokeInvite
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleRevokeInvite', () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class T extends i.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        c.tn
            .get({
                url: N.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new Z.Z({
                            ...e,
                            maxUses: e.max_uses,
                            maxAge: e.max_age,
                            createdAt: e.created_at
                        })
                );
                this.setState({
                    loading: !1,
                    invites: t
                });
            }),
            w.default.track(N.rMx.OPEN_MODAL, {
                ...(0, v.v_)(C.Z.getChannel(e)),
                type: 'Group DM Invites',
                source: 'Group DM Menu'
            });
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, s.jsx)(h.$jN, {
                  className: y.marginTop20,
                  type: h.$jN.Type.SPINNING_CIRCLE
              })
            : o().isEmpty(t)
              ? this.renderEmpty()
              : (0, s.jsxs)('div', {
                    className: E.container,
                    children: [this.renderHeader(), this.renderInvites()]
                });
    }
    renderEmpty() {
        return (0, s.jsxs)(h.ubH, {
            theme: this.props.theme,
            children: [
                (0, s.jsx)(h.oxh, {
                    darkSrc: n(914814),
                    lightSrc: n(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 }
                }),
                (0, s.jsx)(h.OZU, {
                    className: y.marginTop20,
                    children: _.intl.string(_.t['03/rlZ'])
                })
            ]
        });
    }
    renderHeader() {
        return (0, s.jsxs)(f.Z, {
            children: [
                (0, s.jsx)(f.Z.Child, {
                    wrap: !0,
                    children: (0, s.jsx)(h.vwX, { children: _.intl.string(_.t.EgHyKy) })
                }),
                (0, s.jsx)(f.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(h.vwX, { children: _.intl.string(_.t.LBlFEB) })
                }),
                (0, s.jsx)(f.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, s.jsx)(h.vwX, {
                        className: E.alignRight,
                        children: _.intl.string(_.t['1aM27e'])
                    })
                })
            ]
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: t } = this.props;
        return o()(this.state.invites)
            .sortBy((e) => {
                var t;
                return (null !== (t = e.inviter.username) && void 0 !== t ? t : '').toLocaleLowerCase();
            })
            .map((n) =>
                (0, s.jsx)(
                    D,
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
        return (0, s.jsxs)(h.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': _.intl.string(_.t['9F90iY']),
            size: h.CgR.MEDIUM,
            children: [
                (0, s.jsxs)(h.xBx, {
                    direction: f.Z.Direction.VERTICAL,
                    align: f.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, s.jsx)(h.vwX, {
                            tag: h.RB0.H1,
                            children: _.intl.string(_.t['9F90iY'])
                        }),
                        (0, s.jsx)(h.R94, {
                            type: h.geA.DESCRIPTION,
                            children: _.intl.string(_.t.WDw38P)
                        })
                    ]
                }),
                (0, s.jsx)(h.hzk, { children: this.renderContent() }),
                (0, s.jsx)(h.mzw, {
                    children: (0, s.jsx)(h.zxk, {
                        onClick: this.handleClose,
                        children: _.intl.string(_.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                loading: !0,
                invites: null
            }),
            R(this, 'handleRevoke', (e) => {
                u.Z.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            R(this, 'handleClose', () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let A = d.ZP.connectStores([I.Z, j.Z], () => ({
    hideDiscriminators: I.Z.hidePersonalInformation,
    hideInviteCodes: I.Z.hideInstantInvites,
    theme: j.Z.theme
}))(T);
