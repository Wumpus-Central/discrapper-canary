n.d(t, { l: () => y });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(7284),
    c = n(402235),
    u = n(670188),
    d = n(592125),
    f = n(91047);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function b(e, t) {
    return i.useCallback(
        (n) => {
            let r = d.Z.getChannel(t);
            null != r && null != e && (0, f.Pv)(n, e, r);
        },
        [e, t]
    );
}
function y(e) {
    let { user: t, channelId: n, guildId: d, messageId: f, stopPropagation: _ = !1, ariaLabel: h } = e,
        E = i.useRef(null),
        { analyticsLocations: y } = (0, s.ZP)(o.Z.USERNAME),
        O = (0, c.ZP)(d, null == t ? void 0 : t.id),
        v = (0, l.j)({ displayNameStyles: null == t ? void 0 : t.displayNameStyles }),
        I = b(t, n);
    return i.useCallback(
        (e) => (i, o) => {
            let l = null == e ? void 0 : e.colorStrings,
                c = O && null != l && null != l.primaryColor && null != l.secondaryColor,
                b = (t) => {
                    var n;
                    return (0, r.jsx)(
                        a.rz2,
                        m(p({}, null != t ? t : {}), {
                            ref: E,
                            onContextMenu: I,
                            name: (0, a.qgQ)(i),
                            colorString: null != (n = null == e ? void 0 : e.colorString) ? n : null,
                            roleName: null == e ? void 0 : e.colorRoleName,
                            colorStrings: c ? l : null,
                            'aria-label': h,
                            className: v
                        })
                    );
                },
                T = (e) => (t) => {
                    (_ && null != t && t.stopPropagation(), e(t));
                };
            return (0, r.jsx)(
                s.Gt,
                {
                    value: y,
                    children:
                        null != t
                            ? (0, r.jsx)(u.Z, {
                                  targetElementRef: E,
                                  user: t,
                                  guildId: d,
                                  channelId: n,
                                  messageId: f,
                                  roleId: null == e ? void 0 : e.colorRoleId,
                                  clickTrap: !0,
                                  children: (e) => {
                                      var { onClick: t } = e,
                                          n = g(e, ['onClick']);
                                      return b(p({ onClick: T(t) }, n));
                                  }
                              })
                            : b(void 0)
                },
                o
            );
        },
        [y, t, n, d, f, I, _, h, O, v]
    );
}
