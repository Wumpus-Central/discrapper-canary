n.d(t, { Z: () => g });
var r = n(442837),
    i = n(813820),
    a = n(509545),
    o = n(78839),
    s = n(74538),
    l = n(937615),
    c = n(779290),
    u = n(282793),
    d = n(353149),
    f = n(388032);
let p = (e) => {
        if (null == e) return null;
        let t = e.planIdFromItems;
        if (null == t) return null;
        let n = a.Z.get(t);
        if (null == n) return null;
        let r = s.ZP.getPrice(t),
            i = (0, l.T4)(r.amount, r.currency),
            o = n.interval,
            c = n.intervalCount;
        return (0, l.og)(i, o, c);
    },
    _ = (e) =>
        null == e
            ? null
            : f.intl.format(d.default.Nu9LNm, {
                  primaryName: e,
                  premiumGroupProductName: (0, u.sO)(),
              }),
    m = (e, t, n) => {
        let r = e === i.bF.PRIMARY ? p(n) : _(t);
        return null == r ? "..." : r;
    },
    h = (e, t) =>
        e === i.bF.PRIMARY
            ? f.intl.format(d.default["+R/K74"], {
                  helpCenterLink: u.j3,
                  premiumGroupProductName: (0, u.sO)(),
              })
            : f.intl.format(t ? d.default["xF+upx"] : d.default.qqfnOm, { helpCenterLink: u.j3 }),
    g = (e, t) => {
        let n = e === i.bF.MEMBER,
            a = (0, c.Z)(n),
            s = (0, r.e7)([o.Z], () => o.Z.getPremiumGroupSubscription());
        return e === i.bF.UNSPECIFIED
            ? null
            : {
                  subheaderString: m(e, a, s),
                  bodyString: h(e, t),
              };
    };
