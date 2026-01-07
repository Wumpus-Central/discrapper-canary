n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(91192),
    l = n(442837),
    a = n(481060),
    o = n(486472),
    s = n(430824),
    c = n(682662),
    u = n(662146),
    d = n(231338),
    f = n(388032),
    h = n(943207);
function p() {
    var e, t;
    let n = (0, l.e7)([o.Z, s.Z], () => o.Z.unavailableGuilds.filter((e) => null == s.Z.getGuild(e)).length),
        p = (0, i.Ie)("unavailable-guilds-button");
    return n <= 0
        ? null
        : (0, r.jsx)(c.H, {
              children: (0, r.jsx)(u.Z, {
                  text: f.intl.format(f.t["TnH05/"], { count: n }),
                  children: (0, r.jsx)(
                      a.eee,
                      ((e = (function (e) {
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
                      })(
                          {
                              href: d.yX.STATUS,
                              target: "_blank",
                              className: h.guildsError,
                              "aria-label": f.intl.formatToPlainString(f.t["MEpX+2"], { count: n }),
                          },
                          p,
                      )),
                      (t = t =
                          {
                              children: (0, r.jsx)(a.Mgn, {
                                  color: "currentColor",
                                  "aria-hidden": !0,
                              }),
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
                      e),
                  ),
              }),
          });
}
