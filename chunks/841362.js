n.d(t, {
    A: () => f,
});
var r = n(627968),
    l = n(311907),
    i = n(397927),
    a = n(351001),
    s = n(696451),
    o = n(576705),
    c = n(102817),
    u = n(641131),
    d = n(985018);

function f(e) {
    let { channel: t, user: f, guild: p } = e,
        h = (0, l.bG)([o.A], () => null != f && null != p && (0, a.KX)(f, p, [o.A])),
        b = (0, l.bG)([s.Ay], () => null == f || null == s.Ay.getMember(t.guild_id, f.id));
    if (!h) return null;
    let g = b ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
        m = "kick-user-".concat(null == f ? void 0 : f.id);
    return (0, r.jsx)(
        c.A,
        {
            text: g,
            icon: i.Nxw,
            onClick: () => {
                null != f &&
                    (0, i.mMO)(async () => {
                        let { default: e } = await n.e("17862").then(n.bind(n, 324785));
                        return (n) => {
                            var l, i;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (i = i =
                                    {
                                        guildId: t.guild_id,
                                        user: f,
                                        modReportId: t.id,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                l),
                            );
                        };
                    });
            },
            disabled: b,
        },
        m,
    );
}
