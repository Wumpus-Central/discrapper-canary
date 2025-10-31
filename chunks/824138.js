n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(28664),
    o = n(481060),
    c = n(100527),
    u = n(600164),
    d = n(670188),
    p = n(237583),
    f = n(63063),
    m = n(870569),
    h = n(582642),
    g = n(115530),
    _ = n(981631),
    b = n(388032),
    E = n(79822);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
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
class v extends i.PureComponent {
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === (null == t ? void 0 : t.id);
    }
    renderTitle() {
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(g.Z, {
                    children: this.isHost()
                        ? b.intl.formatToPlainString(b.t["6UJ7mh"], { count: this.props.party.length })
                        : b.intl.string(b.t.RZufbH),
                }),
                (0, r.jsx)(h.Z, { children: b.intl.string(b.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, r.jsx)(m.Z, {
                  tooltipText: b.intl.string(b.t.LeZSpz),
                  onClick: e,
                  icon: o.Dio,
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, r.jsx)(m.Z, {
                  tooltipText: b.intl.string(b.t.U7N2Hs),
                  onClick: () => {
                      window.open(f.Z.getArticleURL(_.BhN.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: o.d3s,
              })
            : null;
    }
    render() {
        return (0, r.jsxs)("div", {
            className: E.listeningAlong,
            children: [
                this.renderTitle(),
                (0, r.jsx)(u.Z, {
                    justify: u.Z.Justify.END,
                    className: E.party,
                    children: (0, r.jsx)(p.Z, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: E.icons,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "partyMemberAvatarRef", i.createRef()),
            O(this, "partyMemberOverflowRef", i.createRef()),
            O(this, "renderPartyMember", (e, t) => {
                let n;
                if (null == e) return null;
                let { host: l, onUserContextMenu: u } = this.props;
                return (
                    (n =
                        (null == l ? void 0 : l.id) === e.id
                            ? b.intl.string(b.t["N9bqD+"])
                            : b.intl.string(b.t.Z2Y4c9)),
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
                                (0, r.jsx)(s.u, {
                                    text: n,
                                    children: (0, i.createElement)(
                                        o.qEK,
                                        y(I({}, l), {
                                            key: e.id,
                                            src: e.getAvatarURL(void 0, 24),
                                            size: o.EFr.SIZE_24,
                                            className: a()(E.avatar, t),
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
            O(this, "renderPartyMemberOverflow", (e, t, n) => {
                let { renderOverflowPopout: i } = this.props;
                return (0, r.jsx)(
                    o.yRy,
                    {
                        renderPopout: i,
                        targetElementRef: this.partyMemberOverflowRef,
                        children: (n) =>
                            (0, r.jsx)(s.u, {
                                text: b.intl.string(b.t.Zf4NPe),
                                children: (0, r.jsx)(
                                    "div",
                                    y(I({}, n), {
                                        ref: this.partyMemberOverflowRef,
                                        className: a()(E.overflow, t),
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
let C = v;
