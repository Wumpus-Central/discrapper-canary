n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(990078),
    o = n(397927),
    c = n(793574),
    u = n(235986),
    d = n(342296),
    p = n(636585),
    f = n(975571),
    h = n(42473),
    A = n(994314),
    g = n(485599),
    m = n(652215),
    b = n(985018),
    _ = n(308685);

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

function O(e) {
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
                (0, r.jsx)(g.A, {
                    children: this.isHost()
                        ? b.intl.formatToPlainString(b.t["6UJ7mh"], {
                              count: this.props.party.length,
                          })
                        : b.intl.string(b.t.RZufbH),
                }),
                (0, r.jsx)(A.A, {
                    children: b.intl.string(b.t["0ZHLIi"]),
                }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, r.jsx)(h.A, {
                  tooltipText: b.intl.string(b.t.LeZSpz),
                  onClick: e,
                  icon: o.PGe,
              });
    }
    renderHelpIcon() {
        return this.isHost()
            ? (0, r.jsx)(h.A, {
                  tooltipText: b.intl.string(b.t.U7N2Hs),
                  onClick: () => {
                      window.open(f.A.getArticleURL(m.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: o.mir,
              })
            : null;
    }
    render() {
        return (0, r.jsxs)("div", {
            className: _.Jh,
            children: [
                this.renderTitle(),
                (0, r.jsx)(u.A, {
                    justify: u.A.Justify.END,
                    className: _.Hg,
                    children: (0, r.jsx)(p.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: _.Pt,
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
                    (n =
                        (null == l ? void 0 : l.id) === e.id
                            ? b.intl.string(b.t["N9bqD+"])
                            : b.intl.string(b.t.Z2Y4c9)),
                    (0, r.jsx)(
                        d.A,
                        {
                            targetElementRef: this.partyMemberAvatarRef,
                            user: e,
                            newAnalyticsLocations: [c.A.AVATAR],
                            position: "top",
                            align: "center",
                            clickTrap: !0,
                            children: (l) =>
                                (0, r.jsx)(s.m, {
                                    text: n,
                                    children: (0, i.createElement)(
                                        o.euF,
                                        y(O({}, l), {
                                            key: e.id,
                                            src: e.getAvatarURL(void 0, 24),
                                            size: o._3J.SIZE_24,
                                            className: a()(_.my, t),
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
                    o.YNO,
                    {
                        renderPopout: i,
                        targetElementRef: this.partyMemberOverflowRef,
                        children: (n) =>
                            (0, r.jsx)(s.m, {
                                text: b.intl.string(b.t.Zf4NPe),
                                children: (0, r.jsx)(
                                    "div",
                                    y(O({}, n), {
                                        ref: this.partyMemberOverflowRef,
                                        className: a()(_.ju, t),
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
let v = I;
