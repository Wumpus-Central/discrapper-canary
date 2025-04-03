r.d(t, {
    l: () => f,
    v: () => d
});
var n = r(200651);
r(192379);
var i = r(481060),
    o = r(144114),
    l = r(476770),
    s = r(815660),
    c = r(388032),
    u = r(641198);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f() {
    return (0, n.jsx)(l.PU, {
        className: u.editableRequirementContainer,
        icon: i.AtH,
        text: c.NW.string(c.t.woMjLS),
        footnote: c.NW.string(c.t['jMh+TU']),
        meetsRequirement: !1,
        children: (0, n.jsx)(i.ua7, {
            text: c.NW.string(c.t.mGlP39),
            children: (e) => {
                var t, r;
                return (0, n.jsx)(
                    i.zxk,
                    ((t = a({}, e)),
                    (r = r =
                        {
                            size: i.zxk.Sizes.SMALL,
                            disabled: !0,
                            children: c.NW.string(c.t['13ofGh'])
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
        })
    });
}
function d(e) {
    let { isUserVerified: t } = e,
        f = t ? c.NW.string(c.t.WWzQtb) : c.NW.string(c.t.woMjLS);
    return (0, n.jsx)(l.PU, {
        className: u.editableRequirementContainer,
        icon: i.AtH,
        text: f,
        footnote: c.NW.string(c.t['jMh+TU']),
        meetsRequirement: t,
        children: (0, n.jsx)(i.zxk, {
            size: i.zxk.Sizes.SMALL,
            onClick: () => {
                (0, i.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([r.e('76540'), r.e('56898')]).then(r.bind(r, 607018));
                        return (t) => (0, n.jsx)(e, a({ reason: o.L.GUILD_PHONE_REQUIRED }, t));
                    },
                    { modalKey: s.M }
                );
            },
            children: c.NW.string(c.t['13ofGh'])
        })
    });
}
