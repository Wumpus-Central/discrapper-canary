n.d(t, {
    A: () => p,
});
var r = n(311907),
    i = n(988506),
    l = n(97352),
    s = n(166403),
    a = n(927578),
    o = n(580630),
    c = n(231855),
    d = n(88001),
    u = n(519412),
    _ = n(985018);
let p = (e, t) => {
    let n,
        p = e === i.qT.MEMBER,
        m = (0, c.A)({
            useCachedData: !0,
            fetch: p,
        }),
        g = (0, r.bG)([s.A], () => s.A.getPremiumGroupSubscription());
    return e === i.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (n =
                      e === i.qT.PRIMARY
                          ? ((e) => {
                                if (null == e) return null;
                                let t = e.planIdFromItems;
                                if (null == t) return null;
                                let n = l.A.get(t);
                                if (null == n) return null;
                                let r = a.Ay.getPrice(t),
                                    i = (0, o.$g)(r.amount, r.currency),
                                    s = n.interval,
                                    c = n.intervalCount;
                                return (0, o.CE)(i, s, c);
                            })(g)
                          : null == m
                            ? null
                            : _.intl.format(u.default.Nu9LNm, {
                                  primaryName: m,
                                  premiumGroupProductName: (0, d.DP)(),
                              }))
                      ? "..."
                      : n,
              bodyString:
                  e === i.qT.PRIMARY
                      ? _.intl.format(u.default["+R/K74"], {
                            helpCenterLink: d.TE,
                            premiumGroupProductName: (0, d.DP)(),
                        })
                      : _.intl.format(t ? u.default["xF+upx"] : u.default.qqfnOm, {
                            helpCenterLink: d.TE,
                        }),
          };
};
