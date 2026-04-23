n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(534514),
    r = n(197305),
    o = n(711014),
    d = n(785668),
    u = n(400297),
    c = n(985018),
    g = n(212824);
let m = function (e) {
    let { canAddBoosts: t, canApplyBoosts: n } = e,
        m = (0, l.bG)([r.A], () => r.A.affinities),
        _ = (0, l.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        A = s.useMemo(() => {
            let e = m.slice(0, 3).map((e) => e.guildId);
            for (let t = 0; t < _.length && !(e.length >= 3); t++) {
                let n = _[t];
                e.includes(n) || e.push(n);
            }
            return e;
        }, [m, _]);
    return 0 === A.length
        ? null
        : (0, i.jsxs)("div", {
              className: g.iE,
              children: [
                  t &&
                      (0, i.jsx)(a.D, {
                          variant: "heading-lg/semibold",
                          className: g.wx,
                          children: c.intl.string(c.t.r90Wgo),
                      }),
                  A.map((e) => (0, i.jsx)(u.A, { className: g.ZS, guildId: e, boostingVariant: !0 }, e)),
                  _.length > 3 && n && (0, i.jsx)(d.A, {}),
              ],
          });
};
