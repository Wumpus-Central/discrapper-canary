"use strict";
n.d(t, { A: () => f });
var r = n(64700),
    i = n(311907),
    s = n(488803),
    a = n(522055),
    o = n(881756),
    l = n(568065),
    u = n(800007),
    c = n(576709),
    d = n(985018),
    _ = n(390175);
function f(e) {
    let t = (0, s.C$)(e, "useGameServerPerk"),
        n = (0, i.bG)([a.A], () => a.A.getLowestGameCostForGuild(e)),
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
