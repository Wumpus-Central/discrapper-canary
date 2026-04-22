n.d(t, { A: () => m });
var r = n(64700),
    i = n(311907),
    a = n(488803),
    l = n(522055),
    s = n(881756),
    d = n(568065),
    o = n(800007),
    c = n(576709),
    u = n(985018),
    h = n(390175);
function m(e) {
    let t = (0, a.C$)(e, "useGameServerPerk"),
        n = (0, i.bG)([l.A], () => l.A.getLowestGameCostForGuild(e)),
        { gameName: m, gameName2: p } = (0, s.A)();
    return r.useMemo(
        () =>
            t && null != n
                ? {
                      skuId: o.W5,
                      title: u.intl.string(c.default["B3OfL/"]),
                      description: u.intl.format(c.default["+UqyGU"], { gameName: m, gameName2: p }),
                      cost: n,
                      dependencies: [],
                      type: d.o9.PERK,
                      animatedImageUrl: h.A,
                      staticImageUrl: h.A,
                  }
                : null,
        [t, n, m, p],
    );
}
