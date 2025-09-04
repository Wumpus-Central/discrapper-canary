n.d(t, { l: () => T });
var r = n(951288),
    i = n(647438),
    a = n(756715),
    o = n(573385),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(821795),
    d = n(892567),
    f = n(7284),
    _ = n(402235),
    p = n(670188),
    h = n(592125),
    m = n(91047),
    g = n(392819);
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
function b(e) {
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
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e, t) {
    return i.useCallback(
        (n) => {
            let r = h.Z.getChannel(t);
            null != r && null != e && (0, m.Pv)(n, e, r);
        },
        [e, t],
    );
}
function T(e) {
    let {
            user: t,
            channelId: n,
            guildId: h,
            messageId: m,
            stopPropagation: E = !1,
            ariaLabel: y,
            enableDisplayNameStyles: I = !1,
        } = e,
        T = i.useRef(null),
        { analyticsLocations: A } = (0, c.ZP)(l.Z.USERNAME),
        C = (0, _.ZP)(h, null == t ? void 0 : t.id),
        N = (0, f.j)({ displayNameStyles: null == t ? void 0 : t.displayNameStyles }),
        R = S(t, n),
        P = i.useContext(o.d);
    return (
        (0, g.Z)({
            subscribeToGroupId: m,
            authorId: null == t ? void 0 : t.id,
            shouldSubscribe: I && (null == t ? void 0 : t.displayNameStyles) != null && null == h,
        }),
        i.useCallback(
            (e) => (i, o) => {
                let l = null == e ? void 0 : e.colorStrings,
                    f = C && null != l && null != l.primaryColor && null != l.secondaryColor,
                    _ = (t, n) => {
                        var o, c, _;
                        if (!I || (null == e ? void 0 : e.displayNameStyles) == null || null != h)
                            return (0, r.jsx)(
                                s.rz2,
                                O(b({}, null != t ? t : {}), {
                                    ref: T,
                                    onContextMenu: R,
                                    name: null != (c = (0, s.qgQ)(i)) ? c : "",
                                    colorString: null != (_ = null == e ? void 0 : e.colorString) ? _ : null,
                                    roleName: null == e ? void 0 : e.colorRoleName,
                                    colorStrings: f ? l : null,
                                    "aria-label": y,
                                    className: N,
                                }),
                            );
                        {
                            let l =
                                (null == P ? void 0 : P.animate) || (null == n ? void 0 : n.isShown)
                                    ? u.F.ANIMATED
                                    : u.F.PLAIN;
                            return (0, r.jsx)(
                                a.Anchor,
                                O(b({}, null != t ? t : {}), {
                                    ref: T,
                                    onContextMenu: R,
                                    "aria-label": y,
                                    children: (0, r.jsx)(d.Z, {
                                        userName: null != (o = (0, s.qgQ)(i)) ? o : "",
                                        displayNameStyles: null == e ? void 0 : e.displayNameStyles,
                                        effectDisplayType: l,
                                        shouldUnderlineOnHover: !0,
                                        loop: !0,
                                    }),
                                }),
                            );
                        }
                    },
                    g = (e) => (t) => {
                        E && null != t && t.stopPropagation(), e(t);
                    };
                return (0, r.jsx)(
                    c.Gt,
                    {
                        value: A,
                        children:
                            null != t
                                ? (0, r.jsx)(p.Z, {
                                      targetElementRef: T,
                                      user: t,
                                      guildId: h,
                                      channelId: n,
                                      messageId: m,
                                      roleId: null == e ? void 0 : e.colorRoleId,
                                      clickTrap: !0,
                                      children: (e, t) => {
                                          var { onClick: n } = e,
                                              r = v(e, ["onClick"]);
                                          return _(b({ onClick: g(n) }, r), t);
                                      },
                                  })
                                : _(void 0, void 0),
                    },
                    o,
                );
            },
            [A, t, n, h, m, R, E, y, C, N, null == P ? void 0 : P.animate, I],
        )
    );
}
