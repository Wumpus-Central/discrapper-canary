n.d(t, { A: () => d });
var i = n(477900);
n(582128);
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
                  n.e("324732"),
                  n.e("264236"),
                  n.e("132191"),
                  n.e("761935"),
                  n.e("493014"),
                  n.e("336335"),
                  n.e("964610"),
                  n.e("985990"),
                  n.e("937620"),
              ]).then(n.bind(n, 320490));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : _ === o.fg2.XBOX
          ? ((d = [E ?? "unknown"]),
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("324732"),
                    n.e("262546"),
                    n.e("296747"),
                    n.e("595429"),
                    n.e("290106"),
                    n.e("264236"),
                    n.e("132191"),
                    n.e("698965"),
                    n.e("621624"),
                    n.e("231578"),
                    n.e("493014"),
                    n.e("830221"),
                    n.e("748370"),
                    n.e("336335"),
                    n.e("964610"),
                    n.e("985990"),
                    n.e("205674"),
                    n.e("757906"),
                ]).then(n.bind(n, 669801));
                return (t) => (0, i.jsx)(e, { analyticsLocation: d, ...t });
            }))
          : _ === o.fg2.PLAYSTATION || _ === o.fg2.PLAYSTATION_STAGING
            ? ((c = [E ?? "unknown"]),
              (u = _),
              (0, r.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([
                      n.e("324732"),
                      n.e("264236"),
                      n.e("132191"),
                      n.e("698965"),
                      n.e("621624"),
                      n.e("493014"),
                      n.e("336335"),
                      n.e("964610"),
                      n.e("985990"),
                      n.e("205674"),
                      n.e("617587"),
                  ]).then(n.bind(n, 293758));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: c, platformType: u, ...t });
              }))
            : _ === o.fg2.DOMAIN
              ? (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("730931"),
                        n.e("722514"),
                        n.e("188941"),
                        n.e("837687"),
                        n.e("82721"),
                        n.e("694048"),
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
