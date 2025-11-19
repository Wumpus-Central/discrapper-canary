n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(91192),
    l = n(442837),
    o = n(481060),
    a = n(486472),
    s = n(430824),
    c = n(682662),
    u = n(662146),
    d = n(231338),
    p = n(388032),
    h = n(725924);
function f() {
    var e, t;
    let n = (0, l.e7)([a.Z, s.Z], () => a.Z.unavailableGuilds.filter((e) => null == s.Z.getGuild(e)).length),
        f = (0, i.Ie)("unavailable-guilds-button");
    return n <= 0
        ? null
        : (0, r.jsx)(c.H, {
              children: (0, r.jsx)(u.Z, {
                  text: p.intl.format(p.t["TnH05/"], { count: n }),
                  color: o.aML.Colors.RED,
                  children: (0, r.jsx)(
                      o.Anchor,
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
                              "aria-label": p.intl.formatToPlainString(p.t["MEpX+2"], { count: n }),
                          },
                          f,
                      )),
                      (t = t =
                          {
                              children: (0, r.jsx)(o.Mgn, {
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
