"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(573648),
    s = n(123917),
    l = n(738104),
    o = n(652215);
function d(e) {
    var t, d, c, u;
    let { platformType: _, location: E, overrideUrl: A, successRedirect: h } = e;
    (_ === o.fg2.LEAGUE_OF_LEGENDS && (_ = o.fg2.RIOT_GAMES), _ === o.fg2.CRUNCHYROLL)
        ? ((t = [E ?? "unknown"]),
          (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                  n.e("58846"),
                  n.e("37757"),
                  n.e("29484"),
                  n.e("32191"),
                  n.e("93014"),
                  n.e("36335"),
                  n.e("64610"),
                  n.e("85990"),
                  n.e("37620"),
              ]).then(n.bind(n, 320490));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : _ === o.fg2.XBOX
          ? ((d = [E ?? "unknown"]),
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("58846"),
                    n.e("37757"),
                    n.e("95429"),
                    n.e("45488"),
                    n.e("32191"),
                    n.e("98965"),
                    n.e("93014"),
                    n.e("30221"),
                    n.e("48370"),
                    n.e("36335"),
                    n.e("64610"),
                    n.e("85990"),
                    n.e("5674"),
                    n.e("57906"),
                ]).then(n.bind(n, 669801));
                return (t) => (0, i.jsx)(e, { analyticsLocation: d, ...t });
            }))
          : _ === o.fg2.PLAYSTATION || _ === o.fg2.PLAYSTATION_STAGING
            ? ((c = [E ?? "unknown"]),
              (u = _),
              (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("58846"),
                      n.e("37757"),
                      n.e("32191"),
                      n.e("98965"),
                      n.e("93014"),
                      n.e("36335"),
                      n.e("64610"),
                      n.e("85990"),
                      n.e("5674"),
                      n.e("17587"),
                  ]).then(n.bind(n, 293758));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: c, platformType: u, ...t });
              }))
            : _ === o.fg2.DOMAIN
              ? (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("62461"),
                        n.e("37687"),
                        n.e("82721"),
                        n.e("94048"),
                    ]).then(n.bind(n, 110819));
                    return (t) => (0, i.jsx)(e, { analyticsLocation: [E ?? "unknown"], ...t });
                })
              : a.A.get(_)?.isFederated === !0
                ? (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e("10645").then(n.bind(n, 61492));
                      return (t) => (0, i.jsx)(e, { platformType: _, location: E, successRedirect: h, ...t });
                  })
                : null != A
                  ? (0, s.h)({
                        shouldConfirm: !0,
                        href: A,
                        onConfirm: () => {
                            (0, l.d)(_, { location: E, successRedirect: h }, A);
                        },
                    })
                  : (0, l.d)(_, { location: E, successRedirect: h });
}
