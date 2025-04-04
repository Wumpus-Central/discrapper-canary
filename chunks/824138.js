n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(100527),
    c = n(600164),
    u = n(670188),
    d = n(237583),
    p = n(63063),
    h = n(870569),
    f = n(345243),
    g = n(115530),
    m = n(981631),
    b = n(388032),
    _ = n(457755);
function E(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = {
    HOST: 5,
    LISTENER: 4
};
class I extends i.PureComponent {
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === (null == t ? void 0 : t.id);
    }
    renderTitle() {
        return (0, r.jsxs)('div', {
            children: [(0, r.jsx)(g.Z, { children: this.isHost() ? b.NW.formatToPlainString(b.t['6UJ7mp'], { count: this.props.party.length }) : b.NW.string(b.t.RZufbG) }), (0, r.jsx)(f.Z, { children: b.NW.string(b.t['0ZHLIi']) })]
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, r.jsx)(h.Z, {
                  tooltipText: b.NW.string(b.t.LeZSp6),
                  onClick: e,
                  icon: o.Dio
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, r.jsx)(h.Z, {
                  tooltipText: b.NW.string(b.t.U7N2Hh),
                  onClick: () => {
                      window.open(p.Z.getArticleURL(m.BhN.SPOTIFY_CONNECTION), '_blank');
                  },
                  icon: o.d3s
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: _.listeningAlong,
            children: [
                this.renderTitle(),
                (0, r.jsx)(c.Z, {
                    justify: c.Z.Justify.END,
                    className: _.party,
                    children: (0, r.jsx)(d.Z, {
                        users: this.props.party,
                        max: this.isHost() ? y.HOST : y.LISTENER,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow
                    })
                }),
                (0, r.jsxs)('div', {
                    className: _.icons,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'renderPartyMember', (e, t) => {
                let n;
                if (null == e) return null;
                let { host: l, onUserContextMenu: c } = this.props;
                return (
                    (n = (null == l ? void 0 : l.id) === e.id ? b.NW.string(b.t.N9bqDw) : b.NW.string(b.t.Z2Y4c3)),
                    (0, r.jsx)(
                        u.Z,
                        {
                            user: e,
                            newAnalyticsLocations: [s.Z.AVATAR],
                            position: 'top',
                            align: 'center',
                            clickTrap: !0,
                            children: (l) =>
                                (0, r.jsx)(o.ua7, {
                                    text: n,
                                    children: (n) => {
                                        let { onMouseEnter: r, onMouseLeave: s } = n;
                                        return (0, i.createElement)(
                                            o.qEK,
                                            N(O({}, l), {
                                                key: e.id,
                                                src: e.getAvatarURL(void 0, 24),
                                                size: o.EFr.SIZE_24,
                                                className: a()(_.avatar, t),
                                                'aria-label': e.username,
                                                onMouseEnter: r,
                                                onMouseLeave: s,
                                                onContextMenu: (t) => void (null != e && (null == c || c(t, e)))
                                            })
                                        );
                                    }
                                })
                        },
                        e.id
                    )
                );
            }),
            E(this, 'renderPartyMemberOverflow', (e, t, n) => {
                let { renderOverflowPopout: i } = this.props;
                return (0, r.jsx)(
                    o.yRy,
                    {
                        renderPopout: i,
                        children: (n) =>
                            (0, r.jsx)(o.ua7, {
                                text: b.NW.string(b.t.Zf4NPT),
                                children: (i) => (0, r.jsx)('div', N(O({ className: a()(_.overflow, t) }, i, n), { children: e }))
                            })
                    },
                    n
                );
            });
    }
}
let v = I;
