t.d(s, { default: () => z });
var n = t(627968),
    i = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(735438),
    o = t.n(l),
    c = t(311907),
    d = t(562465),
    h = t(189213),
    x = t(778712),
    m = t(834730),
    u = t(289873),
    _ = t(599319),
    j = t(414333),
    p = t(331322),
    v = t(408278),
    A = t(241326),
    N = t(396478),
    g = t(846293),
    f = t(414079),
    b = t(297413),
    C = t(966327),
    E = t(58149),
    I = t(262295),
    y = t(576470),
    k = t(235986),
    w = t(544028),
    M = t(671759),
    R = t(427157),
    D = t(734057),
    S = t(351906),
    P = t(954571),
    X = t(652215),
    B = t(985018),
    L = t(578798),
    H = t(274446),
    T = t(818050);
class F extends i.PureComponent {
    render() {
        let { invite: e, hideDiscriminator: s, hideInviteCode: t } = this.props,
            i = new R.A(e.inviter);
        return (0, n.jsxs)(k.A, {
            className: a()(L.nM, H.N),
            children: [
                (0, n.jsxs)(k.A, {
                    align: k.A.Align.CENTER,
                    className: L.CE,
                    children: [
                        (0, n.jsx)(C.A, { user: i, size: x._3.SIZE_24, className: L.my }),
                        (0, n.jsx)(b.A, {
                            user: i,
                            hideDiscriminator: s,
                            usernameClass: L.Xh,
                            discriminatorClass: L.OM,
                        }),
                    ],
                }),
                (0, n.jsx)(k.A, {
                    align: k.A.Align.CENTER,
                    grow: 0,
                    shrink: 0,
                    basis: 100,
                    className: L.Kf,
                    children: (0, n.jsx)(m.E, {
                        className: L.aY,
                        variant: "text-sm/normal",
                        children: t ? "..." : e.code,
                    }),
                }),
                (0, n.jsxs)(k.A, {
                    basis: 100,
                    grow: 0,
                    shrink: 0,
                    align: k.A.Align.CENTER,
                    justify: k.A.Justify.END,
                    className: L.Kf,
                    children: [
                        (0, n.jsx)(m.E, {
                            className: L.qW,
                            variant: "text-sm/normal",
                            children: (0, n.jsx)(y.A, { deadline: e.getExpiresAt(), showDays: !1 }),
                        }),
                        (0, n.jsx)(f.A, { className: L.eb, onClick: this.handleRevokeInvite }),
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
class W extends i.PureComponent {
    state = { loading: !0, invites: null };
    componentDidMount() {
        let { channelId: e } = this.props;
        d.Bo.get({ url: X.Rsh.INSTANT_INVITES(e), retries: 3, oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
            let s = e.body.map(
                (e) => new M.A({ ...e, maxUses: e.max_uses, maxAge: e.max_age, createdAt: e.created_at }),
            );
            this.setState({ loading: !1, invites: s });
        }),
            P.default.track(X.HAw.OPEN_MODAL, {
                ...(0, E.dI)(D.A.getChannel(e)),
                type: "Group DM Invites",
                source: "Group DM Menu",
            });
    }
    renderContent() {
        let { loading: e, invites: s } = this.state,
            { hideDiscriminators: t, hideInviteCodes: i } = this.props;
        if (e || null == s) return (0, n.jsx)(u.y, { className: T.QX, type: u.y.Type.SPINNING_CIRCLE });
        if (o().isEmpty(s)) return this.renderEmpty();
        let r = o()(s)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .value();
        return (0, n.jsx)(_.Gt, {
            orientation: "horizontal",
            children: (0, n.jsxs)(j.XI, {
                "aria-label": B.intl.string(B.t["9F90ic"]),
                selectionMode: "none",
                children: [
                    (0, n.jsxs)(j.A0, {
                        children: [
                            (0, n.jsx)(j.Ve, { isRowHeader: !0, children: B.intl.string(B.t.EgHyKy) }),
                            (0, n.jsx)(j.Ve, { children: B.intl.string(B.t.LBlFEN) }),
                            (0, n.jsx)(j.Ve, { children: B.intl.string(B.t["1aM27d"]) }),
                        ],
                    }),
                    (0, n.jsx)(j.BF, {
                        items: r,
                        children: (e) => {
                            let s = new R.A(e.inviter);
                            return (0, n.jsxs)(j.Hj, {
                                id: e.code,
                                children: [
                                    (0, n.jsx)(j.nA, {
                                        children: (0, n.jsx)(I.A, {
                                            avatar: (0, n.jsx)(C.A, { user: s, size: x._3.SIZE_24 }),
                                            name: (0, n.jsx)(b.A, {
                                                user: s,
                                                hideDiscriminator: t,
                                                usernameClass: L.Xh,
                                                discriminatorClass: L.OM,
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)(j.nA, {
                                        children: (0, n.jsx)(m.E, {
                                            className: L.aY,
                                            variant: "text-sm/normal",
                                            children: i ? "..." : e.code,
                                        }),
                                    }),
                                    (0, n.jsx)(j.nA, {
                                        children: (0, n.jsxs)(p.B, {
                                            direction: "horizontal",
                                            align: "center",
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(m.E, {
                                                    className: L.qW,
                                                    variant: "text-sm/normal",
                                                    children: (0, n.jsx)(y.A, {
                                                        deadline: e.getExpiresAt(),
                                                        showDays: !1,
                                                    }),
                                                }),
                                                (0, n.jsx)(v.K, {
                                                    size: "sm",
                                                    "aria-label": B.intl.string(B.t.N86XcP),
                                                    variant: "critical-secondary",
                                                    icon: A.u,
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
        return (0, n.jsxs)(N.pp, {
            theme: this.props.theme,
            children: [
                (0, n.jsx)(N.G8, {
                    darkSrc: t(774125),
                    lightSrc: t(151803),
                    width: 256,
                    height: 130,
                    style: { marginBottom: 0 },
                }),
                (0, n.jsx)(N.SG, { className: T.QX, children: B.intl.string(B.t["03/rlQ"]) }),
            ],
        });
    }
    renderInvites() {
        let { hideDiscriminators: e, hideInviteCodes: s } = this.props;
        return o()(this.state.invites)
            .sortBy((e) => (e.inviter.username ?? "").toLocaleLowerCase())
            .map((t) =>
                (0, n.jsx)(
                    F,
                    { invite: t, hideDiscriminator: e, hideInviteCode: s, onRevoke: this.handleRevoke },
                    t.code,
                ),
            )
            .value();
    }
    render() {
        let { onClose: e, transitionState: s } = this.props;
        return (0, n.jsx)(h.Modal, {
            title: B.intl.string(B.t["9F90ic"]),
            subtitle: B.intl.string(B.t.WDw38H),
            actions: [{ text: B.intl.string(B.t.i4jeWR), onClick: this.handleClose }],
            onClose: e,
            transitionState: s,
            children: this.renderContent(),
        });
    }
    handleRevoke = (e) => {
        g.Ay.revokeInvite(e), this.setState({ invites: this.state.invites.filter((s) => s !== e) });
    };
    handleClose = () => {
        let { onClose: e } = this.props;
        e?.();
    };
}
let z = c.Ay.connectStores([S.A, w.A], () => ({
    hideDiscriminators: S.A.hidePersonalInformation,
    hideInviteCodes: S.A.hideInstantInvites,
    theme: w.A.theme,
}))(W);
