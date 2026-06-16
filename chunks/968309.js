"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(573648),
    a = n(123917),
    o = n(738104),
    l = n(652215);
function u(e) {
    var t, u, c, d;
    let { platformType: _, location: h, overrideUrl: f, successRedirect: p } = e;
    (_ === l.fg2.LEAGUE_OF_LEGENDS && (_ = l.fg2.RIOT_GAMES), _ === l.fg2.CRUNCHYROLL)
        ? ((t = [h ?? "unknown"]),
          (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                  n.e("40859"),
                  n.e("61935"),
                  n.e("36335"),
                  n.e("64610"),
                  n.e("85990"),
                  n.e("37620"),
              ]).then(n.bind(n, 320490));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : _ === l.fg2.XBOX
          ? ((u = [h ?? "unknown"]),
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("40859"),
                    n.e("95429"),
                    n.e("88905"),
                    n.e("98965"),
                    n.e("30221"),
                    n.e("48370"),
                    n.e("36335"),
                    n.e("64610"),
                    n.e("85990"),
                    n.e("5674"),
                    n.e("57906"),
                ]).then(n.bind(n, 669801));
                return (t) => (0, i.jsx)(e, { analyticsLocation: u, ...t });
            }))
          : _ === l.fg2.PLAYSTATION || _ === l.fg2.PLAYSTATION_STAGING
            ? ((c = [h ?? "unknown"]),
              (d = _),
              (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("40859"),
                      n.e("98965"),
                      n.e("36335"),
                      n.e("64610"),
                      n.e("85990"),
                      n.e("5674"),
                      n.e("17587"),
                  ]).then(n.bind(n, 293758));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: c, platformType: d, ...t });
              }))
            : _ === l.fg2.DOMAIN
              ? (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("82314"),
                        n.e("33287"),
                        n.e("88941"),
                        n.e("37687"),
                        n.e("82721"),
                        n.e("94048"),
                    ]).then(n.bind(n, 110819));
                    return (t) => (0, i.jsx)(e, { analyticsLocation: [h ?? "unknown"], ...t });
                })
              : s.A.get(_)?.isFederated === !0
                ? (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e("10645").then(n.bind(n, 61492));
                      return (t) => (0, i.jsx)(e, { platformType: _, location: h, successRedirect: p, ...t });
                  })
                : null != f
                  ? (0, a.h)({
                        shouldConfirm: !0,
                        href: f,
                        onConfirm: () => {
                            (0, o.d)(_, { location: h, successRedirect: p }, f);
                        },
                    })
                  : (0, o.d)(_, { location: h, successRedirect: p });
}
