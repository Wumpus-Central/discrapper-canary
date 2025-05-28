n.d(t, { default: () => m });
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
    C = n(288013);
function _(e) {
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
function h(e, t) {
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
function m(e) {
    var t,
        n,
        { guildId: i } = e,
        m = (function (e, t) {
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
                var e, t;
                return (null == (t = u.default.getCurrentUser()) || null == (e = t.primaryGuild) ? void 0 : e.identityGuildId) === i;
            },
            [i]
        ),
        { isAdopting: y, onAdoptTag: v, onEditProfile: x } = (0, f.Z)(i, m.onClose);
    if (null != j && (0, g.up)(j) && (0, g.jq)(j))
        return (0, r.jsxs)(
            l.Y0X,
            h(_({ size: l.CgR.DYNAMIC }, m), {
                children: [
                    (0, r.jsxs)(l.hzk, {
                        className: C.modalContent,
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsx)('div', {
                                className: C.modalContentChild,
                                children: (0, r.jsxs)('div', {
                                    className: C.left,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: C.headerContainer,
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
                                            className: C.guildRow,
                                            guildId: j.id,
                                            guildName: j.name,
                                            guildIcon: j.icon,
                                            guildIconSize: 32,
                                            guildTag: j.profile.tag,
                                            guildBadge: null != (t = j.profile.badge) ? t : ''
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: C.buttonContainer,
                                            children: [
                                                (0, r.jsx)(l.ua7, {
                                                    text: b.intl.string(p.default.WlENZm),
                                                    tooltipContentClassName: C.tooltip,
                                                    shouldShow: O,
                                                    children: (e) =>
                                                        (0, r.jsx)(
                                                            l.zxk,
                                                            h(
                                                                _(
                                                                    {
                                                                        fullWidth: !0,
                                                                        onClick: v,
                                                                        submitting: y,
                                                                        disabled: O
                                                                    },
                                                                    e
                                                                ),
                                                                { children: b.intl.string(b.t.jwEaiY) }
                                                            )
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
                                className: o()(C.modalContentChild, C.right),
                                children: (0, r.jsx)(d.Z, {
                                    guildId: j.id,
                                    tag: j.profile.tag,
                                    badge: null != (n = j.profile.badge) ? n : ''
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.olH, {
                        className: C.close,
                        onClick: m.onClose
                    })
                ]
            })
        );
}
