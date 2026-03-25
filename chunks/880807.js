n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(197305),
    o = n(711014),
    d = n(785668),
    c = n(400297),
    u = n(985018),
    m = n(999891);
let _ = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        _ = (0, l.bG)([r.A], () => r.A.affinities),
        g = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        x = s.useMemo(() => {
            let e = _.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < g.length && !(e.length >= 3); t++) {
                let n = g[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [_, g]);
    return 0 === x.length
        ? null
        : (0, i.jsxs)("div", {
              className: m.iE,
              children: [
                  t &&
                      (0, i.jsx)(a.Heading, {
                          variant: "heading-lg/semibold",
                          className: m.wx,
                          children: u.intl.string(u.t.r90Wgo),
                      }),
                  x.map((e) => (0, i.jsx)(c.A, { className: m.ZS, guildId: e, boostingVariant: !0 }, e)),
                  g.length > 3 && n && (0, i.jsx)(d.A, {}),
              ],
          });
};
