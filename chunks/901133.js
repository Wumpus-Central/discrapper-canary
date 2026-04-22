n.d(t, { A: () => O });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(990078),
    o = n(789645),
    d = n(97808),
    u = n(778712),
    c = n(265872),
    A = n(885574),
    h = n(793574),
    _ = n(235986),
    E = n(342296),
    p = n(636585),
    m = n(975571),
    g = n(42473),
    I = n(994314),
    C = n(485599),
    f = n(652215),
    T = n(985018),
    S = n(246568);
class N extends r.PureComponent {
    partyMemberAvatarRef = r.createRef();
    partyMemberOverflowRef = r.createRef();
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === t?.id;
    }
    renderTitle() {
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(C.A, {
                    children: this.isHost()
                        ? T.intl.formatToPlainString(T.t["6UJ7mh"], { count: this.props.party.length })
                        : T.intl.string(T.t.RZufbH),
                }),
                (0, i.jsx)(I.A, { children: T.intl.string(T.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, i.jsx)(g.A, { tooltipText: T.intl.string(T.t.LeZSpz), onClick: e, icon: o.P });
    }
    renderPartyMember = (e, t) => {
        let n;
        if (null == e) return null;
        let { host: a, onUserContextMenu: o } = this.props;
        return (
            (n = a?.id === e.id ? T.intl.string(T.t["N9bqD+"]) : T.intl.string(T.t.Z2Y4c9)),
            (0, i.jsx)(
                E.A,
                {
                    targetElementRef: this.partyMemberAvatarRef,
                    user: e,
                    newAnalyticsLocations: [h.A.AVATAR],
                    position: "top",
                    align: "center",
                    clickTrap: !0,
                    children: (a) =>
                        (0, i.jsx)(s.m, {
                            text: n,
                            children: (0, r.createElement)(d.eu, {
                                ...a,
                                key: e.id,
                                src: e.getAvatarURL(void 0, 24),
                                size: u._3.SIZE_24,
                                className: l()(S.my, t),
                                "aria-label": e.username,
                                onContextMenu: (t) => void (null != e && o?.(t, e)),
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
            c.Y,
            {
                renderPopout: r,
                targetElementRef: this.partyMemberOverflowRef,
                children: (n) =>
                    (0, i.jsx)(s.m, {
                        text: T.intl.string(T.t.Zf4NPe),
                        children: (0, i.jsx)("div", {
                            ...n,
                            ref: this.partyMemberOverflowRef,
                            className: l()(S.ju, t),
                            children: e,
                        }),
                    }),
            },
            n,
        );
    };
    renderHelpIcon() {
        return this.isHost()
            ? (0, i.jsx)(g.A, {
                  tooltipText: T.intl.string(T.t.U7N2Hs),
                  onClick: () => {
                      window.open(m.A.getArticleURL(f.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: A.m,
              })
            : null;
    }
    render() {
        return (0, i.jsxs)("div", {
            className: S.Jh,
            children: [
                this.renderTitle(),
                (0, i.jsx)(_.A, {
                    justify: _.A.Justify.END,
                    className: S.Hg,
                    children: (0, i.jsx)(p.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: S.Pt,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
}
let O = N;
