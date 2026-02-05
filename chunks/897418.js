"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    a = n(488803),
    s = n(522055),
    o = n(204017),
    l = n(568065),
    u = n(800007),
    c = n(294726),
    d = n(985018),
    _ = n(390175);
function f(e) {
    let t = (0, a.C$)(e, "useGameServerPerk"),
        n = (0, i.bG)([s.A], () => s.A.getLowestGameCostForGuild(e)),
        { gameName: f, gameName2: p } = (0, o.A)();
    return r.useMemo(
        () =>
            t && null != n
                ? {
                      skuId: u.W5,
                      title: d.intl.string(c.default["B3OfL/"]),
                      description: d.intl.format(c.default["+UqyGU"], { gameName: f, gameName2: p }),
                      cost: n,
                      dependencies: [],
                      type: l.o9.PERK,
                      animatedImageUrl: _.A,
                      staticImageUrl: _.A,
                  }
                : null,
        [t, n, f, p],
    );
}
