n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(573648),
    s = n(889558),
    l = n(738104),
    o = n(652215);
function d(e) {
    var t, d, c, u;
    let { platformType: _, location: E, overrideUrl: A, successRedirect: h } = e;
    (_ === o.fg2.LEAGUE_OF_LEGENDS && (_ = o.fg2.RIOT_GAMES), _ === o.fg2.CRUNCHYROLL)
        ? ((t = [E ?? "unknown"]),
          (0, r.mM)(async () => {
              let { default: e } = await Promise.all([
                  n.e(237427),
                  n.e(72338),
                  n.e(110839),
                  n.e(264236),
                  n.e(990189),
                  n.e(490028),
                  n.e(761935),
                  n.e(132191),
                  n.e(493014),
                  n.e(336335),
                  n.e(964610),
                  n.e(197672),
                  n.e(141419),
              ]).then(n.bind(n, 95895));
              return (n) => (0, i.jsx)(e, { analyticsLocation: t, ...n });
          }))
        : _ === o.fg2.XBOX
          ? ((d = [E ?? "unknown"]),
            (0, r.mM)(async () => {
                let { default: e } = await Promise.all([
                    n.e(237427),
                    n.e(72338),
                    n.e(595429),
                    n.e(787712),
                    n.e(264236),
                    n.e(990189),
                    n.e(490028),
                    n.e(132191),
                    n.e(698965),
                    n.e(621624),
                    n.e(231578),
                    n.e(493014),
                    n.e(830221),
                    n.e(525989),
                    n.e(336335),
                    n.e(964610),
                    n.e(197672),
                    n.e(205674),
                    n.e(335553),
                ]).then(n.bind(n, 35352));
                return (t) => (0, i.jsx)(e, { analyticsLocation: d, ...t });
            }))
          : _ === o.fg2.PLAYSTATION || _ === o.fg2.PLAYSTATION_STAGING
            ? ((c = [E ?? "unknown"]),
              (u = _),
              (0, r.mM)(async () => {
                  let { default: e } = await Promise.all([
                      n.e(237427),
                      n.e(72338),
                      n.e(264236),
                      n.e(990189),
                      n.e(490028),
                      n.e(132191),
                      n.e(698965),
                      n.e(621624),
                      n.e(493014),
                      n.e(336335),
                      n.e(964610),
                      n.e(197672),
                      n.e(205674),
                      n.e(99052),
                  ]).then(n.bind(n, 158375));
                  return (t) => (0, i.jsx)(e, { analyticsLocation: c, platformType: u, ...t });
              }))
            : _ === o.fg2.DOMAIN
              ? (0, r.mM)(async () => {
                    let { default: e } = await Promise.all([
                        n.e(388859),
                        n.e(144909),
                        n.e(188941),
                        n.e(837687),
                        n.e(82721),
                        n.e(358235),
                    ]).then(n.bind(n, 683286));
                    return (t) => (0, i.jsx)(e, { analyticsLocation: [E ?? "unknown"], ...t });
                })
              : a.A.get(_)?.isFederated === !0
                ? (0, r.mM)(async () => {
                      let { default: e } = await n.e(954839).then(n.bind(n, 343946));
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
