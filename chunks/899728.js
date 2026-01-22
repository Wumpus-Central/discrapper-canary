n.d(t, {
    A: () => g,
});
var r = n(311907),
    i = n(988506),
    a = n(97352),
    s = n(166403),
    o = n(927578),
    l = n(580630),
    c = n(231855),
    u = n(88001),
    d = n(519412),
    f = n(985018);
let p = (e) => {
        if (null == e) return null;
        let t = e.planIdFromItems;
        if (null == t) return null;
        let n = a.A.get(t);
        if (null == n) return null;
        let r = o.Ay.getPrice(t),
            i = (0, l.$g)(r.amount, r.currency),
            s = n.interval,
            c = n.intervalCount;
        return (0, l.CE)(i, s, c);
    },
    _ = (e) =>
        null == e
            ? null
            : f.intl.format(d.default.Nu9LNm, {
                  primaryName: e,
                  premiumGroupProductName: (0, u.DP)(),
              }),
    h = (e, t, n) => {
        let r = e === i.qT.PRIMARY ? p(n) : _(t);
        return null == r ? "..." : r;
    },
    m = (e, t) =>
        e === i.qT.PRIMARY
            ? f.intl.format(d.default["+R/K74"], {
                  helpCenterLink: u.TE,
                  premiumGroupProductName: (0, u.DP)(),
              })
            : f.intl.format(t ? d.default["xF+upx"] : d.default.qqfnOm, {
                  helpCenterLink: u.TE,
              }),
    g = (e, t) => {
        let n = e === i.qT.MEMBER,
            a = (0, c.A)({
                useCachedData: !0,
                fetch: n,
            }),
            o = (0, r.bG)([s.A], () => s.A.getPremiumGroupSubscription());
        return e === i.qT.UNSPECIFIED
            ? null
            : {
                  subheaderString: h(e, a, o),
                  bodyString: m(e, t),
              };
    };
