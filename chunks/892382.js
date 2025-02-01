s.d(t, { default: () => A }), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
    l = s(392711),
    o = s.n(l),
    c = s(442837),
    d = s(544891),
    h = s(481060),
    u = s(447543),
    x = s(225433),
    m = s(129861),
    p = s(700582),
    g = s(367907),
    v = s(346486),
    j = s(600164),
    Z = s(210887),
    C = s(758449),
    b = s(598077),
    I = s(592125),
    N = s(246946),
    f = s(626135),
    w = s(981631),
    _ = s(388032),
    E = s(620807),
    k = s(684309),
    R = s(232186);
function T(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class y extends i.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: s } = this.props,
            i = new b.Z(e.inviter);
        return (0, n.jsxs)(j.Z, {
            className: a()(E.row, k.card),
            children: [
                (0, n.jsxs)(j.Z, {
                    align: j.Z.Align.CENTER,
                    className: E.userColumn,
                    children: [
                        (0, n.jsx)(p.Z, {
                            user: i,
                            size: h.EFr.SIZE_24,
                            className: E.avatar
                        }),
                        (0, n.jsx)(m.Z, {
                            user: i,
                            hideDiscriminator: t,
                            usernameClass: E.username,
                            discriminatorClass: E.discrimClass
                        })
                    ]
                }),
                (0, n.jsx)(j.Z, {
                    align: j.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: E.boostZIndex,
                    children: (0, n.jsx)(h.Text, {
                        className: E.code,
                        variant: 'text-sm/normal',
                        children: s ? '...' : e.code
                    })
                }),
                (0, n.jsxs)(j.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: j.Z.Align.CENTER,
                    justify: j.Z.Justify.END,
                    className: E.boostZIndex,
                    children: [
                        (0, n.jsx)(h.Text, {
                            className: E.countdown,
                            variant: 'text-sm/normal',
                            children: (0, n.jsx)(v.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1
                            })
                        }),
                        (0, n.jsx)(x.Z, {
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
            T(this, 'handleRevokeInvite', () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class D extends i.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: w.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new C.Z({
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
            f.default.track(w.rMx.OPEN_MODAL, {
                ...(0, g.v_)(I.Z.getChannel(e)),
                type: 'Group DM Invites',
                source: 'Group DM Menu'
            });
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, n.jsx)(h.$jN, {
                  className: R.marginTop20,
                  type: h.$jN.Type.SPINNING_CIRCLE
              })
            : o().isEmpty(t)
              ? this.renderEmpty()
              : (0, n.jsxs)('div', {
                    className: E.container,
                    children: [this.renderHeader(), this.renderInvites()]
                });
    }
    renderEmpty() {
        return (0, n.jsxs)(h.ubH, {
            theme: this.props.theme,
            children: [
                (0, n.jsx)(h.oxh, {
                    darkSrc: s(914814),
                    lightSrc: s(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 }
                }),
                (0, n.jsx)(h.OZU, {
                    className: R.marginTop20,
                    children: _.intl.string(_.t['03/rlZ'])
                })
            ]
        });
    }
    renderHeader() {
        return (0, n.jsxs)(j.Z, {
            children: [
                (0, n.jsx)(j.Z.Child, {
                    wrap: !0,
                    children: (0, n.jsx)(h.vwX, { children: _.intl.string(_.t.EgHyKy) })
                }),
                (0, n.jsx)(j.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, n.jsx)(h.vwX, { children: _.intl.string(_.t.LBlFEB) })
                }),
                (0, n.jsx)(j.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, n.jsx)(h.vwX, {
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
            .map((s) =>
                (0, n.jsx)(
                    y,
                    {
                        invite: s,
                        hideDiscriminator: e,
                        hideInviteCode: t,
                        onRevoke: this.handleRevoke
                    },
                    s.code
                )
            )
            .value();
    }
    render() {
        return (0, n.jsxs)(h.Y0X, {
            transitionState: this.props.transitionState,
            'aria-label': _.intl.string(_.t['9F90iY']),
            size: h.CgR.MEDIUM,
            children: [
                (0, n.jsxs)(h.xBx, {
                    direction: j.Z.Direction.VERTICAL,
                    align: j.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, n.jsx)(h.vwX, {
                            tag: h.RB0.H1,
                            children: _.intl.string(_.t['9F90iY'])
                        }),
                        (0, n.jsx)(h.R94, {
                            type: h.geA.DESCRIPTION,
                            children: _.intl.string(_.t.WDw38P)
                        })
                    ]
                }),
                (0, n.jsx)(h.hzk, { children: this.renderContent() }),
                (0, n.jsx)(h.mzw, {
                    children: (0, n.jsx)(h.zxk, {
                        onClick: this.handleClose,
                        children: _.intl.string(_.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'state', {
                loading: !0,
                invites: null
            }),
            T(this, 'handleRevoke', (e) => {
                u.Z.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            T(this, 'handleClose', () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
let A = c.ZP.connectStores([N.Z, Z.Z], () => ({
    hideDiscriminators: N.Z.hidePersonalInformation,
    hideInviteCodes: N.Z.hideInstantInvites,
    theme: Z.Z.theme
}))(D);
