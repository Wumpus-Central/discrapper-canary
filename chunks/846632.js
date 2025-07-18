n.d(t, { default: () => C });
var l = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    o = n(442837),
    a = n(481060),
    d = n(840720),
    s = n(742409),
    c = n(430824),
    u = n(594174),
    g = n(731722),
    p = n(446094),
    f = n(388032),
    b = n(195196),
    h = n(288013);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    var t,
        n,
        { guildId: r } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) ((n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) ((n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['guildId']);
    let y = (0, o.e7)([c.Z], () => c.Z.getGuild(r)),
        O = (0, o.e7)(
            [u.default],
            () => {
                var e;
                let t = null == (e = u.default.getCurrentUser()) ? void 0 : e.primaryGuild;
                return (null == t ? void 0 : t.identityGuildId) === r && (null == t ? void 0 : t.identityEnabled) === !0;
            },
            [r]
        ),
        { isAdopting: v, onAdoptTag: x, onEditProfile: _ } = (0, p.Z)(r, C.onClose);
    if (null != y && (0, g.up)(y) && (0, g.jq)(y))
        return (0, l.jsxs)(
            a.Y0X,
            j(
                m(
                    {
                        className: h.modal,
                        size: a.CgR.DYNAMIC
                    },
                    C
                ),
                {
                    parentComponent: 'GuildTagAdoptModal',
                    children: [
                        (0, l.jsxs)(a.hzk, {
                            className: h.modalContent,
                            scrollbarType: 'none',
                            children: [
                                (0, l.jsx)('div', {
                                    className: h.modalContentChild,
                                    children: (0, l.jsxs)('div', {
                                        className: h.left,
                                        children: [
                                            (0, l.jsxs)('div', {
                                                className: h.headerContainer,
                                                children: [
                                                    (0, l.jsx)(a.X6q, {
                                                        variant: 'heading-lg/bold',
                                                        children: f.intl.string(b.default.OvKPi4)
                                                    }),
                                                    (0, l.jsx)(a.Text, {
                                                        variant: 'text-md/normal',
                                                        children: f.intl.string(b.default.kHxfDw)
                                                    })
                                                ]
                                            }),
                                            (0, l.jsx)(d.Z, {
                                                className: h.guildRow,
                                                guildId: y.id,
                                                guildName: y.name,
                                                guildIcon: y.icon,
                                                guildIconSize: 32,
                                                guildTag: y.profile.tag,
                                                guildBadge: null != (t = y.profile.badge) ? t : ''
                                            }),
                                            (0, l.jsxs)('div', {
                                                className: h.buttonContainer,
                                                children: [
                                                    (0, l.jsx)(a.ua7, {
                                                        text: f.intl.string(b.default.WlENZm),
                                                        tooltipContentClassName: h.tooltip,
                                                        shouldShow: O,
                                                        children: (e) =>
                                                            (0, l.jsx)(
                                                                a.zxk,
                                                                j(
                                                                    m(
                                                                        {
                                                                            variant: 'primary',
                                                                            text: f.intl.string(f.t.jwEaiY)
                                                                        },
                                                                        e
                                                                    ),
                                                                    {
                                                                        fullWidth: !0,
                                                                        onClick: x,
                                                                        loading: v,
                                                                        disabled: O
                                                                    }
                                                                )
                                                            )
                                                    }),
                                                    (0, l.jsx)(a.zxk, {
                                                        variant: 'secondary',
                                                        text: f.intl.string(f.t.s5vZlZ),
                                                        fullWidth: !0,
                                                        onClick: _
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                (0, l.jsx)('div', {
                                    className: i()(h.modalContentChild, h.right),
                                    children: (0, l.jsx)(s.Z, {
                                        className: h.rightContent,
                                        guildId: y.id,
                                        tag: y.profile.tag,
                                        badge: null != (n = y.profile.badge) ? n : ''
                                    })
                                })
                            ]
                        }),
                        (0, l.jsx)(a.olH, {
                            className: h.close,
                            onClick: C.onClose
                        })
                    ]
                }
            )
        );
}
