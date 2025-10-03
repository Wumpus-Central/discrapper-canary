n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(481060),
    c = n(100527),
    u = n(600164),
    d = n(670188),
    p = n(237583),
    f = n(63063),
    h = n(870569),
    g = n(345243),
    m = n(115530),
    b = n(981631),
    _ = n(388032),
    O = n(79822);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
class I extends i.PureComponent {
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === (null == t ? void 0 : t.id);
    }
    renderTitle() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(m.Z, {
                    children: this.isHost()
                        ? _.intl.formatToPlainString(_.t["6UJ7mp"], { count: this.props.party.length })
                        : _.intl.string(_.t.RZufbG),
                }),
                (0, r.jsx)(g.Z, { children: _.intl.string(_.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, r.jsx)(h.Z, {
                  tooltipText: _.intl.string(_.t.LeZSp6),
                  onClick: e,
                  icon: s.Dio,
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, r.jsx)(h.Z, {
                  tooltipText: _.intl.string(_.t.U7N2Hh),
                  onClick: () => {
                      window.open(f.Z.getArticleURL(b.BhN.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: s.d3s,
              })
            : null;
    }
    render() {
        return (0, r.jsxs)("div", {
            className: O.listeningAlong,
            children: [
                this.renderTitle(),
                (0, r.jsx)(u.Z, {
                    justify: u.Z.Justify.END,
                    className: O.party,
                    children: (0, r.jsx)(p.Z, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: O.icons,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "partyMemberAvatarRef", i.createRef()),
            E(this, "partyMemberOverflowRef", i.createRef()),
            E(this, "renderPartyMember", (e, t) => {
                let n;
                if (null == e) return null;
                let { host: l, onUserContextMenu: u } = this.props;
                return (
                    (n = (null == l ? void 0 : l.id) === e.id ? _.intl.string(_.t.N9bqDw) : _.intl.string(_.t.Z2Y4c3)),
                    (0, r.jsx)(
                        d.Z,
                        {
                            targetElementRef: this.partyMemberAvatarRef,
                            user: e,
                            newAnalyticsLocations: [c.Z.AVATAR],
                            position: "top",
                            align: "center",
                            clickTrap: !0,
                            children: (l) =>
                                (0, r.jsx)(o.u, {
                                    text: n,
                                    children: (0, i.createElement)(
                                        s.qEK,
                                        y(v({}, l), {
                                            key: e.id,
                                            src: e.getAvatarURL(void 0, 24),
                                            size: s.EFr.SIZE_24,
                                            className: a()(O.avatar, t),
                                            "aria-label": e.username,
                                            onContextMenu: (t) => void (null != e && (null == u || u(t, e))),
                                            avatarContentRef: this.partyMemberAvatarRef,
                                        }),
                                    ),
                                }),
                        },
                        e.id,
                    )
                );
            }),
            E(this, "renderPartyMemberOverflow", (e, t, n) => {
                let { renderOverflowPopout: i } = this.props;
                return (0, r.jsx)(
                    s.yRy,
                    {
                        renderPopout: i,
                        targetElementRef: this.partyMemberOverflowRef,
                        children: (n) =>
                            (0, r.jsx)(o.u, {
                                text: _.intl.string(_.t.Zf4NPT),
                                children: (0, r.jsx)(
                                    "div",
                                    y(v({}, n), {
                                        ref: this.partyMemberOverflowRef,
                                        className: a()(O.overflow, t),
                                        children: e,
                                    }),
                                ),
                            }),
                    },
                    n,
                );
            });
    }
}
let S = I;
