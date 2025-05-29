n.d(t, { default: () => h });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    l = n(481060),
    s = n(840720),
    d = n(742409),
    c = n(430824),
    u = n(594174),
    g = n(731722),
    f = n(446094),
    b = n(388032),
    p = n(941469),
    _ = n(288013);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e) {
    var t,
        n,
        { guildId: i } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['guildId']);
    let j = (0, a.e7)([c.Z], () => c.Z.getGuild(i)),
        O = (0, a.e7)(
            [u.default],
            () => {
                var e;
                let t = null == (e = u.default.getCurrentUser()) ? void 0 : e.primaryGuild;
                return (null == t ? void 0 : t.identityGuildId) === i && (null == t ? void 0 : t.identityEnabled) === !0;
            },
            [i]
        ),
        { isAdopting: v, onAdoptTag: y, onEditProfile: x } = (0, f.Z)(i, h.onClose);
    if (null != j && (0, g.up)(j) && (0, g.jq)(j))
        return (0, r.jsxs)(
            l.Y0X,
            m(
                C(
                    {
                        className: _.modal,
                        size: l.CgR.DYNAMIC
                    },
                    h
                ),
                {
                    children: [
                        (0, r.jsxs)(l.hzk, {
                            className: _.modalContent,
                            scrollbarType: 'none',
                            children: [
                                (0, r.jsx)('div', {
                                    className: _.modalContentChild,
                                    children: (0, r.jsxs)('div', {
                                        className: _.left,
                                        children: [
                                            (0, r.jsxs)('div', {
                                                className: _.headerContainer,
                                                children: [
                                                    (0, r.jsx)(l.X6q, {
                                                        variant: 'heading-lg/bold',
                                                        children: b.intl.string(p.default.OvKPi4)
                                                    }),
                                                    (0, r.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        children: b.intl.string(p.default.kHxfDw)
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)(s.Z, {
                                                className: _.guildRow,
                                                guildId: j.id,
                                                guildName: j.name,
                                                guildIcon: j.icon,
                                                guildIconSize: 32,
                                                guildTag: j.profile.tag,
                                                guildBadge: null != (t = j.profile.badge) ? t : ''
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: _.buttonContainer,
                                                children: [
                                                    (0, r.jsx)(l.ua7, {
                                                        text: b.intl.string(p.default.WlENZm),
                                                        tooltipContentClassName: _.tooltip,
                                                        shouldShow: O,
                                                        children: (e) =>
                                                            (0, r.jsx)(
                                                                l.zxk,
                                                                m(C({}, e), {
                                                                    fullWidth: !0,
                                                                    onClick: y,
                                                                    submitting: v,
                                                                    disabled: O,
                                                                    children: b.intl.string(b.t.jwEaiY)
                                                                })
                                                            )
                                                    }),
                                                    (0, r.jsx)(l.zxk, {
                                                        color: l.Ttl.PRIMARY,
                                                        fullWidth: !0,
                                                        onClick: x,
                                                        children: b.intl.string(b.t.s5vZlZ)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                (0, r.jsx)('div', {
                                    className: o()(_.modalContentChild, _.right),
                                    children: (0, r.jsx)(d.Z, {
                                        guildId: j.id,
                                        tag: j.profile.tag,
                                        badge: null != (n = j.profile.badge) ? n : ''
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(l.olH, {
                            className: _.close,
                            onClick: h.onClose
                        })
                    ]
                }
            )
        );
}
