"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(573648),
    a = n(168956),
    o = n(561036),
    l = n(344800),
    u = n(307600),
    d = n(738104),
    c = n(652215);
function _(e) {
    let { platformType: t, location: _, overrideUrl: f, successRedirect: E } = e;
    (t === c.fg2.LEAGUE_OF_LEGENDS && (t = c.fg2.RIOT_GAMES), t === c.fg2.CRUNCHYROLL)
        ? a.t([_ ?? "unknown"])
        : t === c.fg2.XBOX
          ? l.t([_ ?? "unknown"])
          : t === c.fg2.PLAYSTATION || t === c.fg2.PLAYSTATION_STAGING
            ? o.t([_ ?? "unknown"], t)
            : t === c.fg2.DOMAIN
              ? (0, i.openModalLazy)(async () => {
                    let { default: e } = await n.e("78250").then(n.bind(n, 983665));
                    return (t) => (0, r.jsx)(e, { analyticsLocation: [_ ?? "unknown"], ...t });
                })
              : s.A.get(t)?.isFederated === !0
                ? (0, i.openModalLazy)(async () => {
                      let { default: e } = await n.e("81288").then(n.bind(n, 623067));
                      return (n) => (0, r.jsx)(e, { platformType: t, location: _, successRedirect: E, ...n });
                  })
                : null != f
                  ? (0, u.h)({
                        shouldConfirm: !0,
                        href: f,
                        onConfirm: () => {
                            (0, d.d)(t, { location: _, successRedirect: E }, f);
                        },
                    })
                  : (0, d.d)(t, { location: _, successRedirect: E });
}
