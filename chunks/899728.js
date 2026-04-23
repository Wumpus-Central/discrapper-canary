s.d(t, { A: () => _ });
var r = s(311907),
    a = s(988506),
    i = s(97352),
    n = s(166403),
    l = s(927578),
    o = s(580630),
    c = s(231855),
    d = s(88001),
    m = s(466919),
    u = s(985018);
let _ = (e, t) => {
    let s,
        _ = e === a.qT.MEMBER,
        x = (0, c.A)({ useCachedData: !0, fetch: _ }),
        p = (0, r.bG)([n.A], () => n.A.getPremiumGroupSubscription());
    return e === a.qT.UNSPECIFIED
        ? null
        : {
              subheaderString:
                  null ==
                  (s =
                      e === a.qT.PRIMARY
                          ? ((e) => {
                                if (null == e) return null;
                                let t = e.planIdFromItems;
                                if (null == t) return null;
                                let s = i.A.get(t);
                                if (null == s) return null;
                                let r = l.Ay.getPrice(t),
                                    a = (0, o.$g)(r.amount, r.currency),
                                    n = s.interval,
                                    c = s.intervalCount;
                                return (0, o.CE)(a, n, c);
                            })(p)
                          : null == x
                            ? null
                            : u.intl.format(m.default.Nu9LNm, { primaryName: x, premiumGroupProductName: (0, d.DP)() }))
                      ? "..."
                      : s,
              bodyString:
                  e === a.qT.PRIMARY
                      ? u.intl.format(m.default["+R/K74"], {
                            helpCenterLink: d.TE,
                            premiumGroupProductName: (0, d.DP)(),
                        })
                      : u.intl.format(t ? m.default["xF+upx"] : m.default.qqfnOm, { helpCenterLink: d.TE }),
          };
};
