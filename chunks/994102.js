n.d(t, { Z: () => g });
var r = n(951288),
    i = n(990547),
    a = n(755721),
    o = n(481060),
    s = n(206074),
    l = n(213609),
    c = n(652853),
    u = n(475413),
    d = n(671955),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function g(e) {
    let { application: t, analyticsLocations: n, onAction: _, onClose: h, size: g } = e,
        { themeType: E } = (0, c.z)(),
        b = (0, s.Z)({
            application: t,
            analyticsLocations: n,
        });
    return ((0, l.Z)(
        {
            name: i.ImpressionNames.CLOUD_PLAY_CTA,
            type: i.ImpressionTypes.VIEW,
            properties: { location_stack: n },
        },
        { disableTrack: null == b },
        [b],
    ),
    null == b)
        ? null
        : (0, r.jsx)(o.ua7, {
              text: f.intl.string(f.t.JVwWvb),
              position: "top",
              children: (e) =>
                  (0, r.jsx)(
                      u.tG,
                      m(p({}, e), {
                          icon: o.v3n,
                          text: f.intl.string(f.t["jaYS/v"]),
                          size: null != g ? g : E === d.l.MODAL_V2 ? a.Ph.TINY : a.Ph.SMALL,
                          fullWidth: E !== d.l.MODAL_V2,
                          themeColor: "secondary",
                          onClick: (e) => {
                              e.stopPropagation(),
                                  null == _ || _({ action: "PRESS_CLOUD_PLAY_BUTTON" }),
                                  b(),
                                  null == h || h();
                          },
                      }),
                  ),
          });
}
