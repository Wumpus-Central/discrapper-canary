n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(990078),
    o = n(397927),
    d = n(793574),
    c = n(235986),
    u = n(342296),
    A = n(636585),
    h = n(975571),
    _ = n(42473),
    m = n(994314),
    p = n(485599),
    g = n(652215),
    E = n(985018),
    I = n(308685);
class f extends r.PureComponent {
    partyMemberAvatarRef = r.createRef();
    partyMemberOverflowRef = r.createRef();
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === t?.id;
    }
    renderTitle() {
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(p.A, {
                    children: this.isHost()
                        ? E.intl.formatToPlainString(E.t["6UJ7mh"], { count: this.props.party.length })
                        : E.intl.string(E.t.RZufbH),
                }),
                (0, i.jsx)(m.A, { children: E.intl.string(E.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, i.jsx)(_.A, { tooltipText: E.intl.string(E.t.LeZSpz), onClick: e, icon: o.PGe });
    }
    renderPartyMember = (e, t) => {
        let n;
        if (null == e) return null;
        let { host: l, onUserContextMenu: c } = this.props;
        return (
            (n = l?.id === e.id ? E.intl.string(E.t["N9bqD+"]) : E.intl.string(E.t.Z2Y4c9)),
            (0, i.jsx)(
                u.A,
                {
                    targetElementRef: this.partyMemberAvatarRef,
                    user: e,
                    newAnalyticsLocations: [d.A.AVATAR],
                    position: "top",
                    align: "center",
                    clickTrap: !0,
                    children: (l) =>
                        (0, i.jsx)(s.m, {
                            text: n,
                            children: (0, r.createElement)(o.euF, {
                                ...l,
                                key: e.id,
                                src: e.getAvatarURL(void 0, 24),
                                size: o._3J.SIZE_24,
                                className: a()(I.my, t),
                                "aria-label": e.username,
                                onContextMenu: (t) => void (null != e && c?.(t, e)),
                                avatarContentRef: this.partyMemberAvatarRef,
                            }),
                        }),
                },
                e.id,
            )
        );
    };
    renderPartyMemberOverflow = (e, t, n) => {
        let { renderOverflowPopout: r } = this.props;
        return (0, i.jsx)(
            o.YNO,
            {
                renderPopout: r,
                targetElementRef: this.partyMemberOverflowRef,
                children: (n) =>
                    (0, i.jsx)(s.m, {
                        text: E.intl.string(E.t.Zf4NPe),
                        children: (0, i.jsx)("div", {
                            ...n,
                            ref: this.partyMemberOverflowRef,
                            className: a()(I.ju, t),
                            children: e,
                        }),
                    }),
            },
            n,
        );
    };
    renderHelpIcon() {
        return this.isHost()
            ? (0, i.jsx)(_.A, {
                  tooltipText: E.intl.string(E.t.U7N2Hs),
                  onClick: () => {
                      window.open(h.A.getArticleURL(g.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: o.mir,
              })
            : null;
    }
    render() {
        return (0, i.jsxs)("div", {
            className: I.Jh,
            children: [
                this.renderTitle(),
                (0, i.jsx)(c.A, {
                    justify: c.A.Justify.END,
                    className: I.Hg,
                    children: (0, i.jsx)(A.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: I.Pt,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
}
let C = f;
