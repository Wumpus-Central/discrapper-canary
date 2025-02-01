n.d(t, { Z: () => Z }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(481060),
    d = n(100527),
    u = n(600164),
    h = n(184301),
    m = n(347475),
    p = n(237583),
    g = n(63063),
    _ = n(870569),
    f = n(345243),
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
let T = {
    HOST: 5,
    LISTENER: 4
};
class S extends l.PureComponent {
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === (null == t ? void 0 : t.id);
    }
    renderTitle() {
        return (0, i.jsxs)('div', {
            children: [(0, i.jsx)(E.Z, { children: this.isHost() ? C.intl.formatToPlainString(C.t['6UJ7mp'], { count: this.props.party.length }) : C.intl.string(C.t.RZufbG) }), (0, i.jsx)(f.Z, { children: C.intl.string(C.t['0ZHLIi']) })]
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, i.jsx)(_.Z, {
                  tooltipText: C.intl.string(C.t.LeZSp6),
                  onClick: e,
                  icon: c.Dio
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, i.jsx)(_.Z, {
                  tooltipText: C.intl.string(C.t.U7N2Hh),
                  onClick: () => {
                      window.open(g.Z.getArticleURL(I.BhN.SPOTIFY_CONNECTION), '_blank');
                  },
                  icon: c.d3s
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
                        max: this.isHost() ? T.HOST : T.LISTENER,
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
                let { host: r, onUserContextMenu: s } = this.props;
                return (
                    (n = (null == r ? void 0 : r.id) === e.id ? C.intl.string(C.t.N9bqDw) : C.intl.string(C.t.Z2Y4c3)),
                    (0, i.jsx)(
                        c.yRy,
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
                            children: (r) =>
                                (0, i.jsx)(c.ua7, {
                                    text: n,
                                    children: (n) => {
                                        let { onMouseEnter: i, onMouseLeave: o } = n;
                                        return (0, l.createElement)(c.qEK, {
                                            ...r,
                                            key: e.id,
                                            src: e.getAvatarURL(void 0, 24),
                                            size: c.EFr.SIZE_24,
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
                let { renderOverflowPopout: l } = this.props;
                return (0, i.jsx)(
                    c.yRy,
                    {
                        renderPopout: l,
                        children: (n) =>
                            (0, i.jsx)(c.ua7, {
                                text: C.intl.string(C.t.Zf4NPT),
                                children: (l) =>
                                    (0, i.jsx)('div', {
                                        className: a()(v.overflow, t),
                                        ...l,
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
let Z = S;
