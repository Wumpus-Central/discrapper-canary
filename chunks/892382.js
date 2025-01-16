s.r(t), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
    o = s(392711),
    l = s.n(o),
    c = s(442837),
    d = s(544891),
    h = s(481060),
    u = s(447543),
    m = s(225433),
    p = s(129861),
    x = s(700582),
    g = s(367907),
    v = s(346486),
    b = s(600164),
    f = s(210887),
    j = s(758449),
    Z = s(598077),
    C = s(592125),
    I = s(246946),
    E = s(626135),
    _ = s(981631),
    N = s(388032),
    T = s(620807),
    k = s(684309),
    w = s(232186);
function y(e, t, s) {
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
class S extends i.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: t, hideInviteCode: s } = this.props,
            i = new Z.Z(e.inviter);
        return (0, n.jsxs)(b.Z, {
            className: a()(T.row, k.card),
            children: [
                (0, n.jsxs)(b.Z, {
                    align: b.Z.Align.CENTER,
                    className: T.userColumn,
                    children: [
                        (0, n.jsx)(x.Z, {
                            user: i,
                            size: h.AvatarSizes.SIZE_24,
                            className: T.avatar
                        }),
                        (0, n.jsx)(p.Z, {
                            user: i,
                            hideDiscriminator: t,
                            usernameClass: T.username,
                            discriminatorClass: T.discrimClass
                        })
                    ]
                }),
                (0, n.jsx)(b.Z, {
                    align: b.Z.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: T.boostZIndex,
                    children: (0, n.jsx)(h.Text, {
                        className: T.code,
                        variant: 'text-sm/normal',
                        children: s ? '...' : e.code
                    })
                }),
                (0, n.jsxs)(b.Z, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: b.Z.Align.CENTER,
                    justify: b.Z.Justify.END,
                    className: T.boostZIndex,
                    children: [
                        (0, n.jsx)(h.Text, {
                            className: T.countdown,
                            variant: 'text-sm/normal',
                            children: (0, n.jsx)(v.Z, {
                                deadline: e.getExpiresAt(),
                                showDays: !1
                            })
                        }),
                        (0, n.jsx)(m.Z, {
                            className: T.revokeInvite,
                            onClick: this.handleRevokeInvite
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'handleRevokeInvite', () => {
                let { onRevoke: e, invite: t } = this.props;
                null != e && e(t);
            });
    }
}
class R extends i.PureComponent {
    componentDidMount() {
        let { channelId: e } = this.props;
        d.tn
            .get({
                url: _.ANM.INSTANT_INVITES(e),
                retries: 3,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                let t = e.body.map(
                    (e) =>
                        new j.Z({
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
            E.default.track(_.rMx.OPEN_MODAL, {
                ...(0, g.v_)(C.Z.getChannel(e)),
                type: 'Group DM Invites',
                source: 'Group DM Menu'
            });
    }
    renderContent() {
        let { loading: e, invites: t } = this.state;
        return e || null == t
            ? (0, n.jsx)(h.Spinner, {
                  className: w.marginTop20,
                  type: h.Spinner.Type.SPINNING_CIRCLE
              })
            : l().isEmpty(t)
              ? this.renderEmpty()
              : (0, n.jsxs)('div', {
                    className: T.container,
                    children: [this.renderHeader(), this.renderInvites()]
                });
    }
    renderEmpty() {
        return (0, n.jsxs)(h.EmptyState, {
            theme: this.props.theme,
            children: [
                (0, n.jsx)(h.EmptyStateImage, {
                    darkSrc: s(914814),
                    lightSrc: s(370392),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 }
                }),
                (0, n.jsx)(h.EmptyStateText, {
                    className: w.marginTop20,
                    children: N.intl.string(N.t['03/rlZ'])
                })
            ]
        });
    }
    renderHeader() {
        return (0, n.jsxs)(b.Z, {
            children: [
                (0, n.jsx)(b.Z.Child, {
                    wrap: !0,
                    children: (0, n.jsx)(h.FormTitle, { children: N.intl.string(N.t.EgHyKy) })
                }),
                (0, n.jsx)(b.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, n.jsx)(h.FormTitle, { children: N.intl.string(N.t.LBlFEB) })
                }),
                (0, n.jsx)(b.Z.Child, {
                    wrap: !0,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    children: (0, n.jsx)(h.FormTitle, {
                        className: T.alignRight,
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
                return (null !== (t = e.inviter.username) && void 0 !== t ? t : '').toLocaleLowerCase();
            })
            .map((s) =>
                (0, n.jsx)(
                    S,
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
        return (0, n.jsxs)(h.ModalRoot, {
            transitionState: this.props.transitionState,
            'aria-label': N.intl.string(N.t['9F90iY']),
            size: h.ModalSize.MEDIUM,
            children: [
                (0, n.jsxs)(h.ModalHeader, {
                    direction: b.Z.Direction.VERTICAL,
                    align: b.Z.Align.START,
                    separator: !1,
                    children: [
                        (0, n.jsx)(h.FormTitle, {
                            tag: h.FormTitleTags.H1,
                            children: N.intl.string(N.t['9F90iY'])
                        }),
                        (0, n.jsx)(h.FormText, {
                            type: h.FormTextTypes.DESCRIPTION,
                            children: N.intl.string(N.t.WDw38P)
                        })
                    ]
                }),
                (0, n.jsx)(h.ModalContent, { children: this.renderContent() }),
                (0, n.jsx)(h.ModalFooter, {
                    children: (0, n.jsx)(h.Button, {
                        onClick: this.handleClose,
                        children: N.intl.string(N.t.i4jeWV)
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', {
                loading: !0,
                invites: null
            }),
            y(this, 'handleRevoke', (e) => {
                u.Z.revokeInvite(e), this.setState({ invites: this.state.invites.filter((t) => t !== e) });
            }),
            y(this, 'handleClose', () => {
                let { onClose: e } = this.props;
                null == e || e();
            });
    }
}
t.default = c.ZP.connectStores([I.Z, f.Z], () => ({
    hideDiscriminators: I.Z.hidePersonalInformation,
    hideInviteCodes: I.Z.hideInstantInvites,
    theme: f.Z.theme
}))(R);
