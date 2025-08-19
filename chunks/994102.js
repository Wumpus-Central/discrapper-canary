n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(755721),
    a = n(481060),
    o = n(206074),
    s = n(652853),
    l = n(475413),
    c = n(671955),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { application: t, onAction: n, onClose: d, size: _ } = e,
        { themeType: h } = (0, s.z)(),
        m = (0, o.Z)({
            application: t,
            location: "User Profile Activity",
        });
    return null == m
        ? null
        : (0, r.jsx)(a.ua7, {
              text: u.intl.string(u.t.JVwWvb),
              position: "top",
              children: (e) =>
                  (0, r.jsx)(
                      l.tG,
                      p(f({}, e), {
                          icon: a.v3n,
                          text: u.intl.string(u.t["jaYS/v"]),
                          size: null != _ ? _ : h === c.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
                          fullWidth: h !== c.l.MODAL_V2,
                          themeColor: "secondary",
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == n || n({ action: "PRESS_CLOUD_PLAY_BUTTON" }),
                                  m(),
                                  null == d || d();
                          },
                      }),
                  ),
          });
}
