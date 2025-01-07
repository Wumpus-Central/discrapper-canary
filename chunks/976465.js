n.d(t, {
    Rw: function () {
        return y;
    },
    V6: function () {
        return w;
    },
    f9: function () {
        return P;
    },
    g_: function () {
        return j;
    },
    kG: function () {
        return S;
    },
    sf: function () {
        return Z;
    },
    x$: function () {
        return k;
    }
}),
    n(724458),
    n(47120);
var i = n(192379),
    r = n(913527),
    a = n.n(r),
    s = n(442837),
    l = n(704215),
    o = n(605236),
    c = n(243778),
    d = n(291175),
    u = n(621853),
    g = n(594174),
    m = n(78839),
    f = n(111361),
    p = n(471309),
    _ = n(474936),
    h = n(388032),
    x = n(888300),
    E = n(665321),
    b = n(256017),
    C = n(126807),
    v = n(432119),
    T = n(205119),
    N = n(145007),
    I = n(937264);
let S = () => {
        var e;
        let t;
        let n = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
            i = (0, s.e7)([u.Z], () => (null != n ? u.Z.getUserProfile(n.id) : null));
        return (
            null == i ||
                null === (e = i.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, d.gn)(e.id),
                        r = i.premiumSince;
                    null != n && null != r && (t = n);
                }),
            t
        );
    },
    R = () => {
        let e = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
            t = (0, s.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription());
        if (!(0, f.M5)(e, _.p9.TIER_2) || null == t || null == t.premiumSince) return null;
        let n = a()(),
            i = a()(t.premiumSince).add(1, 'day'),
            r = n.diff(i, 'months');
        return Object.entries(_.eG).reduce((e, t) => {
            let [n, i] = t;
            return r >= i ? n : e;
        }, null);
    },
    j = (e) => {
        switch (e) {
            case _.VU.PREMIUM_TENURE_1_MONTH:
                return x;
            case _.VU.PREMIUM_TENURE_3_MONTH:
                return I;
            case _.VU.PREMIUM_TENURE_6_MONTH:
                return v;
            case _.VU.PREMIUM_TENURE_12_MONTH:
                return T;
            case _.VU.PREMIUM_TENURE_24_MONTH:
                return E;
            case _.VU.PREMIUM_TENURE_36_MONTH:
                return b;
            case _.VU.PREMIUM_TENURE_60_MONTH:
                return N;
            case _.VU.PREMIUM_TENURE_72_MONTH:
                return C;
            default:
                return;
        }
    },
    A = () => j(S()),
    P = (e) => {
        switch (e) {
            case _.VU.PREMIUM_TENURE_1_MONTH:
                return h.intl.string(h.t.LR1C0d);
            case _.VU.PREMIUM_TENURE_3_MONTH:
                return h.intl.string(h.t['rI1/3N']);
            case _.VU.PREMIUM_TENURE_6_MONTH:
                return h.intl.string(h.t.VkhVKS);
            case _.VU.PREMIUM_TENURE_12_MONTH:
                return h.intl.string(h.t.gzUfNT);
            case _.VU.PREMIUM_TENURE_24_MONTH:
                return h.intl.string(h.t.fuwTPj);
            case _.VU.PREMIUM_TENURE_36_MONTH:
                return h.intl.string(h.t.qNhNk5);
            case _.VU.PREMIUM_TENURE_60_MONTH:
                return h.intl.string(h.t['wvX+eH']);
            case _.VU.PREMIUM_TENURE_72_MONTH:
                return h.intl.string(h.t.Wu9WJi);
            default:
                return '';
        }
    },
    O = () => P(S()),
    Z = (e) => {
        switch (e) {
            case _.VU.PREMIUM_TENURE_1_MONTH:
            case _.VU.PREMIUM_TENURE_3_MONTH:
            case _.VU.PREMIUM_TENURE_6_MONTH:
                return h.intl.formatToPlainString(h.t.erUSmJ, { months: _.eG[e] });
            case _.VU.PREMIUM_TENURE_12_MONTH:
            case _.VU.PREMIUM_TENURE_24_MONTH:
            case _.VU.PREMIUM_TENURE_36_MONTH:
            case _.VU.PREMIUM_TENURE_60_MONTH:
                return h.intl.formatToPlainString(h.t.IfYQVF, { years: _.eG[e] / 12 });
            case _.VU.PREMIUM_TENURE_72_MONTH:
                return h.intl.formatToPlainString(h.t.IfYQVF, { years: '6+' });
            default:
                return '';
        }
    },
    M = () => Z(S()),
    B = () => {
        let e = S(),
            t = (0, s.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, d.RZ)(e, t.premiumSince);
    },
    y = () => ({
        badge: S(),
        image: A(),
        name: O(),
        earnedOnDate: B(),
        tenureRequirement: M()
    }),
    w = () => {
        let e = R(),
            { enabled: t } = (0, p.Z)(!0),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return n === l.z.WHATS_NEW_TENURE_BADGE_REWARD ? h.intl.string(h.t.jyYgZ2).toLocaleUpperCase() : null;
    },
    k = () => {
        let e = R(),
            { enabled: t } = (0, p.Z)(),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return i.useCallback(() => {
            n === l.z.WHATS_NEW_TENURE_BADGE_REWARD && (0, o.EW)(n);
        }, [n]);
    };
