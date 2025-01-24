n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(481060),
    d = n(100527),
    u = n(600164),
    h = n(184301),
    m = n(347475),
    p = n(237583),
    g = n(63063),
    f = n(870569),
    _ = n(345243),
    E = n(115530),
    I = n(981631),
    C = n(388032),
    v = n(730873);
function N(e, t, n) {
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
let S = {
    HOST: 5,
    LISTENER: 4
};
class T extends r.PureComponent {
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === (null == t ? void 0 : t.id);
    }
    renderTitle() {
        return (0, i.jsxs)('div', {
            children: [(0, i.jsx)(E.Z, { children: this.isHost() ? C.intl.formatToPlainString(C.t['6UJ7mp'], { count: this.props.party.length }) : C.intl.string(C.t.RZufbG) }), (0, i.jsx)(_.Z, { children: C.intl.string(C.t['0ZHLIi']) })]
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, i.jsx)(f.Z, {
                  tooltipText: C.intl.string(C.t.LeZSp6),
                  onClick: e,
                  icon: c.XSmallIcon
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, i.jsx)(f.Z, {
                  tooltipText: C.intl.string(C.t.U7N2Hh),
                  onClick: () => {
                      window.open(g.Z.getArticleURL(I.BhN.SPOTIFY_CONNECTION), '_blank');
                  },
                  icon: c.CircleInformationIcon
              })
            : null;
    }
    render() {
        return (0, i.jsxs)('div', {
            className: v.listeningAlong,
            children: [
                this.renderTitle(),
                (0, i.jsx)(u.Z, {
                    justify: u.Z.Justify.END,
                    className: v.party,
                    children: (0, i.jsx)(p.Z, {
                        users: this.props.party,
                        max: this.isHost() ? S.HOST : S.LISTENER,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow
                    })
                }),
                (0, i.jsxs)('div', {
                    className: v.icons,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'renderPartyMember', (e, t) => {
                let n;
                if (null == e) return null;
                let { host: l, onUserContextMenu: s } = this.props;
                return (
                    (n = (null == l ? void 0 : l.id) === e.id ? C.intl.string(C.t.N9bqDw) : C.intl.string(C.t.Z2Y4c3)),
                    (0, i.jsx)(
                        c.Popout,
                        {
                            preload: () => (0, h.Z)(e.id, e.getAvatarURL(void 0, 80)),
                            renderPopout: (t) => (
                                o()(null != e, ''),
                                (0, i.jsx)(m.Z, {
                                    ...t,
                                    userId: e.id,
                                    newAnalyticsLocations: [d.Z.AVATAR]
                                })
                            ),
                            position: 'top',
                            align: 'center',
                            children: (l) =>
                                (0, i.jsx)(c.Tooltip, {
                                    text: n,
                                    children: (n) => {
                                        let { onMouseEnter: i, onMouseLeave: o } = n;
                                        return (0, r.createElement)(c.Avatar, {
                                            ...l,
                                            key: e.id,
                                            src: e.getAvatarURL(void 0, 24),
                                            size: c.AvatarSizes.SIZE_24,
                                            className: a()(v.avatar, t),
                                            'aria-label': e.username,
                                            onMouseEnter: i,
                                            onMouseLeave: o,
                                            onContextMenu: (t) => void (null != e && (null == s || s(t, e)))
                                        });
                                    }
                                })
                        },
                        e.id
                    )
                );
            }),
            N(this, 'renderPartyMemberOverflow', (e, t, n) => {
                let { renderOverflowPopout: r } = this.props;
                return (0, i.jsx)(
                    c.Popout,
                    {
                        renderPopout: r,
                        children: (n) =>
                            (0, i.jsx)(c.Tooltip, {
                                text: C.intl.string(C.t.Zf4NPT),
                                children: (r) =>
                                    (0, i.jsx)('div', {
                                        className: a()(v.overflow, t),
                                        ...r,
                                        ...n,
                                        children: e
                                    })
                            })
                    },
                    n
                );
            });
    }
}
t.Z = T;
