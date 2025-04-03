n.d(t, {
    T: () => _,
    Z: () => C
}),
    n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(497321),
    o = n(852860),
    c = n(100527),
    d = n(906732),
    u = n(246946),
    m = n(63063),
    g = n(999382),
    p = n(621319),
    h = n(44550),
    f = n(586382),
    b = n(859481),
    x = n(981631),
    j = n(388032),
    N = n(839032);
let _ = s.ZP.connectStores([g.Z, h.Z], () => {
    let e = h.Z.vanityURLCode,
        t = g.Z.getGuildId();
    return {
        vanityURLCode: e,
        guildId: t,
        onReset() {
            (0, p.H7)();
        },
        onSave() {
            null != t && (0, p.en)(t, e);
        }
    };
})(o.Z);
class v extends i.PureComponent {
    render() {
        let { hide: e, guild: t, vanityURLCode: n, vanityURLUses: i, originalVanityURLCode: s, errorDetails: o } = this.props,
            c = m.Z.getArticleURL(x.BhN.GUILD_VANITY_URL);
        return null == t
            ? null
            : e
              ? (0, r.jsx)(l.Z, {})
              : (0, r.jsxs)(a.hjN, {
                    children: [
                        (0, r.jsxs)(a.vwX, {
                            tag: a.RB0.H1,
                            className: N.flexFormTitle,
                            children: [(0, r.jsx)('div', { children: j.NW.string(j.t['5XZKy8']) }), (0, r.jsx)(f.xl, { guild: t })]
                        }),
                        (0, r.jsx)(a.R94, {
                            type: a.geA.DESCRIPTION,
                            className: N.description,
                            children: j.NW.format(j.t.koklFB, { helpCenterArticle: c })
                        }),
                        (0, r.jsx)(b.z, {
                            guild: t,
                            vanityURLCode: n,
                            vanityURLUses: i,
                            originalVanityURLCode: s,
                            errorDetails: o
                        })
                    ]
                });
    }
}
function C() {
    var e, t;
    let n = (0, s.e7)([g.Z], () => g.Z.getGuild()),
        i = (0, s.cj)([h.Z], () => ({
            vanityURLCode: h.Z.vanityURLCode,
            vanityURLUses: h.Z.vanityURLUses,
            originalVanityURLCode: h.Z.originalVanityURLCode,
            errorDetails: h.Z.errorDetails
        })),
        a = (0, s.e7)([u.Z], () => u.Z.hideInstantInvites),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.VANITY_URL);
    return (0, r.jsx)(d.Gt, {
        value: l,
        children: (0, r.jsx)(
            v,
            ((e = (function (e) {
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
            })({ guild: n }, i)),
            (t = t =
                {
                    hide: a,
                    analyticsLocations: l
                }),
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
            e)
        )
    });
}
