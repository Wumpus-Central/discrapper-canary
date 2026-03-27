t.d(s, { default: () => S });
var i = t(627968),
    n = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(735438),
    o = t.n(l),
    c = t(311907),
    d = t(562465),
    h = t(732955),
    x = t(397927),
    m = t(846293),
    u = t(414079),
    p = t(297413),
    A = t(966327),
    j = t(58149),
    v = t(262295),
    g = t(576470),
    _ = t(235986),
    C = t(544028),
    N = t(671759),
    y = t(427157),
    E = t(734057),
    I = t(351906),
    b = t(954571),
    k = t(652215),
    w = t(985018),
    R = t(159390),
    f = t(8350),
    D = t(885106);
class T extends n.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: s, hideInviteCode: t } = this.props,
            n = new y.A(e.inviter);
        return (0, i.jsxs)(_.A, {
            className: a()(R.nM, f.N),
            children: [
                (0, i.jsxs)(_.A, {
                    align: _.A.Align.CENTER,
                    className: R.CE,
                    children: [
                        (0, i.jsx)(A.A, { user: n, size: x._3J.SIZE_24, className: R.my }),
                        (0, i.jsx)(p.A, {
                            user: n,
                            hideDiscriminator: s,
                            usernameClass: R.Xh,
                            discriminatorClass: R.OM,
                        }),
                    ],
                }),
                (0, i.jsx)(_.A, {
                    align: _.A.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: R.Kf,
                    children: (0, i.jsx)(x.Text, {
                        className: R.aY,
                        variant: "text-sm/normal",
                        children: t ? "..." : e.code,
                    }),
                }),
                (0, i.jsxs)(_.A, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: _.A.Align.CENTER,
                    justify: _.A.Justify.END,
                    className: R.Kf,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: R.qW,
                            variant: "text-sm/normal",
                            children: (0, i.jsx)(g.A, { deadline: e.getExpiresAt(), showDays: !1 }),
                        }),
                        (0, i.jsx)(u.A, { className: R.eb, onClick: this.handleRevokeInvite }),
                    ],
                }),
            ],
        });
    }
    handleRevokeInvite = () => {
        let { onRevoke: e, invite: s } = this.props;
        null != e && e(s);
    };
}
class M extends n.PureComponent {
    state = { loading: !0, invites: null };
    componentDidMount() {
        let { channelId: e } = this.props;
        d.Bo.get({ url: k.Rsh.INSTANT_INVITES(e), retries: 3, oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            let s = e.body.map(
                (e) => new N.A({ ...e, maxUses: e.max_uses, maxAge: e.max_age, createdAt: e.created_at }),
            );
            this.setState({ loading: !1, invites: s });
        }),
            b.default.track(k.HAw.OPEN_MODAL, {
                ...(0, j.dI)(E.A.getChannel(e)),
                type: "Group DM Invites",
                source: "Group DM Menu",
            });
    }
    renderContent() {
        let { loading: e, invites: s } = this.state,
            { hideDiscriminators: t, hideInviteCodes: n } = this.props;
        if (e || null == s) return (0, i.jsx)(x.y$y, { className: D.QX, type: x.y$y.Type.SPINNING_CIRCLE });
        if (o().isEmpty(s)) return this.renderEmpty();
        let r = o()(s)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .value();
        return (0, i.jsx)(x.GtU, {
            orientation: "horizontal",
            children: (0, i.jsxs)(x.XIK, {
                "aria-label": w.intl.string(w.t["9F90ic"]),
                selectionMode: "none",
                children: [
                    (0, i.jsxs)(x.A0N, {
                        children: [
                            (0, i.jsx)(x.VeA, { isRowHeader: !0, children: w.intl.string(w.t.EgHyKy) }),
                            (0, i.jsx)(x.VeA, { children: w.intl.string(w.t.LBlFEN) }),
                            (0, i.jsx)(x.VeA, { children: w.intl.string(w.t["1aM27d"]) }),
                        ],
                    }),
                    (0, i.jsx)(x.BFY, {
                        items: r,
                        children: (e) => {
                            let s = new y.A(e.inviter);
                            return (0, i.jsxs)(x.Hjg, {
                                id: e.code,
                                children: [
                                    (0, i.jsx)(x.nA6, {
                                        children: (0, i.jsx)(v.A, {
                                            avatar: (0, i.jsx)(A.A, { user: s, size: x._3J.SIZE_24 }),
                                            name: (0, i.jsx)(p.A, {
                                                user: s,
                                                hideDiscriminator: t,
                                                usernameClass: R.Xh,
                                                discriminatorClass: R.OM,
                                            }),
                                        }),
                                    }),
                                    (0, i.jsx)(x.nA6, {
                                        children: (0, i.jsx)(x.Text, {
                                            className: R.aY,
                                            variant: "text-sm/normal",
                                            children: n ? "..." : e.code,
                                        }),
                                    }),
                                    (0, i.jsx)(x.nA6, {
                                        children: (0, i.jsxs)(x.BJc, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 8,
                                            children: [
                                                (0, i.jsx)(x.Text, {
                                                    className: R.qW,
                                                    variant: "text-sm/normal",
                                                    children: (0, i.jsx)(g.A, {
                                                        deadline: e.getExpiresAt(),
                                                        showDays: !1,
                                                    }),
                                                }),
                                                (0, i.jsx)(x.K0, {
                                                    size: "sm",
                                                    "aria-label": w.intl.string(w.t.N86XcP),
                                                    variant: "critical-secondary",
                                                    icon: x.ucK,
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
            }),
        });
    }
    renderEmpty() {
        return (0, i.jsxs)(x.ppr, {
            theme: this.props.theme,
            children: [
                (0, i.jsx)(x.G8R, {
                    darkSrc: t(774125),
                    lightSrc: t(151803),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, i.jsx)(x.SGT, { className: D.QX, children: w.intl.string(w.t["03/rlQ"]) }),
            ],
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: s } = this.props;
        return o()(this.state.invites)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .map((t) =>
                (0, i.jsx)(
                    T,
                    { invite: t, hideDiscriminator: e, hideInviteCode: s, onRevoke: this.handleRevoke },
                    t.code,
                ),
            )
            .value();
    }
    render() {
        let { onClose: e, transitionState: s } = this.props;
        return (0, i.jsx)(h.aFV, {
            title: w.intl.string(w.t["9F90ic"]),
            subtitle: w.intl.string(w.t.WDw38H),
            actions: [{ text: w.intl.string(w.t.i4jeWR), onClick: this.handleClose }],
            onClose: e,
            transitionState: s,
            children: this.renderContent(),
        });
    }
    handleRevoke = (e) => {
        m.Ay.revokeInvite(e), this.setState({ invites: this.state.invites.filter((s) => s !== e) });
    };
    handleClose = () => {
        let { onClose: e } = this.props;
        e?.();
    };
}
let S = c.Ay.connectStores([I.A, C.A], () => ({
    hideDiscriminators: I.A.hidePersonalInformation,
    hideInviteCodes: I.A.hideInstantInvites,
    theme: C.A.theme,
}))(M);
