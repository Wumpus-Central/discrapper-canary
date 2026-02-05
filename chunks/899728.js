n.d(t, { A: () => m });
var i = n(311907),
    s = n(988506),
    r = n(97352),
    a = n(166403),
    l = n(927578),
    o = n(580630),
    c = n(231855),
    d = n(88001),
    u = n(519412),
    _ = n(985018);
let m = (e, t) => {
    let n,
        m = e === s.qT.MEMBER,
        A = (0, c.A)({ useCachedData: !0, fetch: m }),
        g = (0, i.bG)([a.A], () => a.A.getPremiumGroupSubscription());
    return e === s.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (n =
                      e === s.qT.PRIMARY
                          ? ((e) => {
                                if (null == e) return null;
                                let t = e.planIdFromItems;
                                if (null == t) return null;
                                let n = r.A.get(t);
                                if (null == n) return null;
                                let i = l.Ay.getPrice(t),
                                    s = (0, o.$g)(i.amount, i.currency),
                                    a = n.interval,
                                    c = n.intervalCount;
                                return (0, o.CE)(s, a, c);
                            })(g)
                          : null == A
                            ? null
                            : _.intl.format(u.default.Nu9LNm, { primaryName: A, premiumGroupProductName: (0, d.DP)() }))
                      ? "..."
                      : n,
              bodyString:
                  e === s.qT.PRIMARY
                      ? _.intl.format(u.default["+R/K74"], {
                            helpCenterLink: d.TE,
                            premiumGroupProductName: (0, d.DP)(),
                        })
                      : _.intl.format(t ? u.default["xF+upx"] : u.default.qqfnOm, { helpCenterLink: d.TE }),
          };
};
