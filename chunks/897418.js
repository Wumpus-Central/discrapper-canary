n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    a = n(488803),
    s = n(522055),
    o = n(568065),
    l = n(800007),
    c = n(294726),
    u = n(985018),
    d = n(390175);
function f(e) {
    let t = (0, a.C$)(e, "useGameServerPerk"),
        n = (0, i.bG)([s.A], () => s.A.getLowestGameCostForGuild(e));
    return r.useMemo(
        () =>
            t && null != n
                ? {
                      skuId: l.W5,
                      title: u.intl.string(c.default["B3OfL/"]),
                      description: u.intl.string(c.default.EGkJAG),
                      cost: n,
                      dependencies: [],
                      type: o.o9.PERK,
                      animatedImageUrl: d.A,
                      staticImageUrl: d.A,
                  }
                : null,
        [t, n],
    );
}
