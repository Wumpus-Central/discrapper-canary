n.d(t, {
    GG: function () {
        return y;
    },
    Rw: function () {
        return F;
    },
    V6: function () {
        return W;
    },
    f9: function () {
        return U;
    },
    g_: function () {
        return k;
    },
    kG: function () {
        return B;
    },
    sf: function () {
        return G;
    },
    x$: function () {
        return z;
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
    x = n(64469),
    E = n(888300),
    b = n(523608),
    C = n(665321),
    v = n(100196),
    T = n(256017),
    N = n(126807),
    I = n(95959),
    S = n(432119),
    R = n(347493),
    j = n(493776),
    A = n(205119),
    P = n(354102),
    O = n(145007),
    M = n(252409),
    Z = n(937264);
let B = () => {
        var e;
        let t;
        let n = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
            i = (0, s.e7)([u.Z], () => (null != n ? u.Z.getUserProfile(n.id) : null)),
            r = null == i ? void 0 : i.premiumSince;
        return (
            null == i ||
                null === (e = i.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, d.gn)(e.id);
                    null != n && null != r && (t = n);
                }),
            t
        );
    },
    y = () =>
        (0, s.e7)([g.default, u.Z], () => {
            let e = g.default.getCurrentUser();
            if (null == e) return null;
            let t = u.Z.getUserProfile(e.id);
            return null == t ? void 0 : t.premiumSince;
        }),
    w = () => {
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
    k = (e, t) => {
        if (null == t || 1 === t)
            switch (e) {
                case _.VU.PREMIUM_TENURE_1_MONTH:
                    return E;
                case _.VU.PREMIUM_TENURE_3_MONTH:
                    return Z;
                case _.VU.PREMIUM_TENURE_6_MONTH:
                    return S;
                case _.VU.PREMIUM_TENURE_12_MONTH:
                    return A;
                case _.VU.PREMIUM_TENURE_24_MONTH:
                    return C;
                case _.VU.PREMIUM_TENURE_36_MONTH:
                    return T;
                case _.VU.PREMIUM_TENURE_60_MONTH:
                    return O;
                case _.VU.PREMIUM_TENURE_72_MONTH:
                    return N;
                default:
                    return;
            }
        switch (e) {
            case _.VU.PREMIUM_TENURE_1_MONTH:
                return x;
            case _.VU.PREMIUM_TENURE_3_MONTH:
                return M;
            case _.VU.PREMIUM_TENURE_6_MONTH:
                return I;
            case _.VU.PREMIUM_TENURE_12_MONTH:
                return j;
            case _.VU.PREMIUM_TENURE_24_MONTH:
                return b;
            case _.VU.PREMIUM_TENURE_36_MONTH:
                return v;
            case _.VU.PREMIUM_TENURE_60_MONTH:
                return P;
            case _.VU.PREMIUM_TENURE_72_MONTH:
                return R;
            default:
                return;
        }
    },
    L = () => {
        let e = B(),
            { version: t } = (0, p.Z)();
        return k(e, t);
    },
    U = (e, t) => {
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
                return 2 === t ? h.intl.string(h.t['/menIy']) : h.intl.string(h.t.Wu9WJi);
            default:
                return '';
        }
    },
    D = () => {
        let e = B(),
            { version: t } = (0, p.Z)();
        return U(e, t);
    },
    G = (e) => {
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
    H = () => G(B()),
    V = () => {
        let e = B(),
            t = (0, s.e7)([m.ZP], () => m.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, d.RZ)(e, t.premiumSince);
    },
    F = () => ({
        badge: B(),
        image: L(),
        name: D(),
        earnedOnDate: V(),
        tenureRequirement: H()
    }),
    W = () => {
        let e = w(),
            { enabled: t } = (0, p.Z)(!0),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return n === l.z.WHATS_NEW_TENURE_BADGE_REWARD ? h.intl.string(h.t.jyYgZ2).toLocaleUpperCase() : null;
    },
    z = () => {
        let e = w(),
            { enabled: t } = (0, p.Z)(),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return i.useCallback(() => {
            n === l.z.WHATS_NEW_TENURE_BADGE_REWARD && (0, o.EW)(n);
        }, [n]);
    };
