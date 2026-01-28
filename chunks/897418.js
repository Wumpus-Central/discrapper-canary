n.d(t, {
    A: () => p,
});
var r = n(64700),
    i = n(311907),
    a = n(488803),
    o = n(522055),
    s = n(204017),
    l = n(568065),
    c = n(800007),
    u = n(294726),
    d = n(985018),
    f = n(390175);

function p(e) {
    let t = (0, a.C$)(e, "useGameServerPerk"),
        n = (0, i.bG)([o.A], () => o.A.getLowestGameCostForGuild(e)),
        { gameName: p, gameName2: _ } = (0, s.A)();
    return r.useMemo(
        () =>
            t && null != n
                ? {
                      skuId: c.W5,
                      title: d.intl.string(u.default["B3OfL/"]),
                      description: d.intl.format(u.default["+UqyGU"], {
                          gameName: p,
                          gameName2: _,
                      }),
                      cost: n,
                      dependencies: [],
                      type: l.o9.PERK,
                      animatedImageUrl: f.A,
                      staticImageUrl: f.A,
                  }
                : null,
        [t, n, p, _],
    );
}
