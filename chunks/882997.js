n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(573648),
    s = n(709146),
    o = n(578138),
    l = n(848398),
    c = n(307600),
    u = n(738104),
    d = n(652215);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    var t;
    let { platformType: f, location: _, overrideUrl: h, successRedirect: m } = e;
    (f === d.fg2.LEAGUE_OF_LEGENDS && (f = d.fg2.RIOT_GAMES), f === d.fg2.CRUNCHYROLL)
        ? s.t([null != _ ? _ : "unknown"])
        : f === d.fg2.XBOX
          ? l.t([null != _ ? _ : "unknown"])
          : f === d.fg2.PLAYSTATION || f === d.fg2.PLAYSTATION_STAGING
            ? o.t([null != _ ? _ : "unknown"], f)
            : f === d.fg2.DOMAIN
              ? (0, i.mMO)(async () => {
                    let { default: e } = await n.e("78250").then(n.bind(n, 983665));
                    return (t) => (0, r.jsx)(e, p({ analyticsLocation: [null != _ ? _ : "unknown"] }, t));
                })
              : (null == (t = a.A.get(f)) ? void 0 : t.isFederated) === !0
                ? (0, i.mMO)(async () => {
                      let { default: e } = await n.e("81288").then(n.bind(n, 623067));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              p(
                                  {
                                      platformType: f,
                                      location: _,
                                      successRedirect: m,
                                  },
                                  t,
                              ),
                          );
                  })
                : null != h
                  ? (0, c.h)({
                        shouldConfirm: !0,
                        href: h,
                        onConfirm: () => {
                            (0, u.d)(
                                f,
                                {
                                    location: _,
                                    successRedirect: m,
                                },
                                h,
                            );
                        },
                    })
                  : (0, u.d)(f, {
                        location: _,
                        successRedirect: m,
                    });
}
