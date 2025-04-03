n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(481060),
    u = n(100527),
    d = n(600164),
    p = n(184301),
    h = n(347475),
    f = n(237583),
    g = n(63063),
    m = n(870569),
    b = n(345243),
    _ = n(115530),
    E = n(981631),
    O = n(388032),
    N = n(457755);
function y(e, t, n) {
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
function I(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
let C = {
    HOST: 5,
    LISTENER: 4
};
class S extends i.PureComponent {
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === (null == t ? void 0 : t.id);
    }
    renderTitle() {
        return (0, r.jsxs)('div', {
            children: [(0, r.jsx)(_.Z, { children: this.isHost() ? O.NW.formatToPlainString(O.t['6UJ7mp'], { count: this.props.party.length }) : O.NW.string(O.t.RZufbG) }), (0, r.jsx)(b.Z, { children: O.NW.string(O.t['0ZHLIi']) })]
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, r.jsx)(m.Z, {
                  tooltipText: O.NW.string(O.t.LeZSp6),
                  onClick: e,
                  icon: c.Dio
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, r.jsx)(m.Z, {
                  tooltipText: O.NW.string(O.t.U7N2Hh),
                  onClick: () => {
                      window.open(g.Z.getArticleURL(E.BhN.SPOTIFY_CONNECTION), '_blank');
                  },
                  icon: c.d3s
              })
            : null;
    }
    render() {
        return (0, r.jsxs)('div', {
            className: N.listeningAlong,
            children: [
                this.renderTitle(),
                (0, r.jsx)(d.Z, {
                    justify: d.Z.Justify.END,
                    className: N.party,
                    children: (0, r.jsx)(f.Z, {
                        users: this.props.party,
                        max: this.isHost() ? C.HOST : C.LISTENER,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow
                    })
                }),
                (0, r.jsxs)('div', {
                    className: N.icons,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            y(this, 'renderPartyMember', (e, t) => {
                let n;
                if (null == e) return null;
                let { host: l, onUserContextMenu: o } = this.props;
                return (
                    (n = (null == l ? void 0 : l.id) === e.id ? O.NW.string(O.t.N9bqDw) : O.NW.string(O.t.Z2Y4c3)),
                    (0, r.jsx)(
                        c.yRy,
                        {
                            preload: () => (0, p.Z)(e.id, e.getAvatarURL(void 0, 80)),
                            renderPopout: (t) => (
                                s()(null != e, ''),
                                (0, r.jsx)(
                                    h.Z,
                                    v(I({}, t), {
                                        userId: e.id,
                                        newAnalyticsLocations: [u.Z.AVATAR]
                                    })
                                )
                            ),
                            position: 'top',
                            align: 'center',
                            clickTrap: !0,
                            children: (l) =>
                                (0, r.jsx)(c.ua7, {
                                    text: n,
                                    children: (n) => {
                                        let { onMouseEnter: r, onMouseLeave: s } = n;
                                        return (0, i.createElement)(
                                            c.qEK,
                                            v(I({}, l), {
                                                key: e.id,
                                                src: e.getAvatarURL(void 0, 24),
                                                size: c.EFr.SIZE_24,
                                                className: a()(N.avatar, t),
                                                'aria-label': e.username,
                                                onMouseEnter: r,
                                                onMouseLeave: s,
                                                onContextMenu: (t) => void (null != e && (null == o || o(t, e)))
                                            })
                                        );
                                    }
                                })
                        },
                        e.id
                    )
                );
            }),
            y(this, 'renderPartyMemberOverflow', (e, t, n) => {
                let { renderOverflowPopout: i } = this.props;
                return (0, r.jsx)(
                    c.yRy,
                    {
                        renderPopout: i,
                        children: (n) =>
                            (0, r.jsx)(c.ua7, {
                                text: O.NW.string(O.t.Zf4NPT),
                                children: (i) => (0, r.jsx)('div', v(I({ className: a()(N.overflow, t) }, i, n), { children: e }))
                            })
                    },
                    n
                );
            });
    }
}
let T = S;
