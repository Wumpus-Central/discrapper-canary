n.d(t, {
    GG: function () {
        return Z;
    },
    Rw: function () {
        return H;
    },
    V6: function () {
        return Y;
    },
    f9: function () {
        return w;
    },
    g_: function () {
        return M;
    },
    kG: function () {
        return B;
    },
    sf: function () {
        return U;
    },
    x$: function () {
        return W;
    }
}),
    n(724458),
    n(47120);
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    a = n(442837),
    l = n(704215),
    o = n(605236),
    c = n(243778),
    d = n(291175),
    u = n(621853),
    m = n(594174),
    g = n(78839),
    h = n(111361),
    p = n(471309),
    x = n(474936),
    f = n(388032),
    _ = n(64469),
    E = n(888300),
    C = n(523608),
    T = n(665321),
    S = n(100196),
    b = n(256017),
    I = n(126807),
    N = n(95959),
    v = n(432119),
    A = n(347493),
    j = n(493776),
    R = n(205119),
    O = n(354102),
    P = n(145007),
    y = n(252409),
    D = n(937264);
let B = () => {
        var e;
        let t;
        let n = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            i = (0, a.e7)([u.Z], () => (null != n ? u.Z.getUserProfile(n.id) : null)),
            s = null == i ? void 0 : i.premiumSince;
        return (
            null == i ||
                null === (e = i.badges) ||
                void 0 === e ||
                e.forEach((e) => {
                    let n = (0, d.gn)(e.id);
                    null != n && null != s && (t = n);
                }),
            t
        );
    },
    Z = () =>
        (0, a.e7)([m.default, u.Z], () => {
            let e = m.default.getCurrentUser();
            if (null == e) return null;
            let t = u.Z.getUserProfile(e.id);
            return null == t ? void 0 : t.premiumSince;
        }),
    L = () => {
        let e = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
            t = (0, a.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription());
        if (!(0, h.M5)(e, x.p9.TIER_2) || null == t || null == t.premiumSince) return null;
        let n = r()(),
            i = r()(t.premiumSince).add(1, 'day'),
            s = n.diff(i, 'months');
        return Object.entries(x.eG).reduce((e, t) => {
            let [n, i] = t;
            return s >= i ? n : e;
        }, null);
    },
    M = (e, t) => {
        if (null == t || 1 === t)
            switch (e) {
                case x.VU.PREMIUM_TENURE_1_MONTH:
                    return E;
                case x.VU.PREMIUM_TENURE_3_MONTH:
                    return D;
                case x.VU.PREMIUM_TENURE_6_MONTH:
                    return v;
                case x.VU.PREMIUM_TENURE_12_MONTH:
                    return R;
                case x.VU.PREMIUM_TENURE_24_MONTH:
                    return T;
                case x.VU.PREMIUM_TENURE_36_MONTH:
                    return b;
                case x.VU.PREMIUM_TENURE_60_MONTH:
                    return P;
                case x.VU.PREMIUM_TENURE_72_MONTH:
                    return I;
                default:
                    return;
            }
        switch (e) {
            case x.VU.PREMIUM_TENURE_1_MONTH:
                return _;
            case x.VU.PREMIUM_TENURE_3_MONTH:
                return y;
            case x.VU.PREMIUM_TENURE_6_MONTH:
                return N;
            case x.VU.PREMIUM_TENURE_12_MONTH:
                return j;
            case x.VU.PREMIUM_TENURE_24_MONTH:
                return C;
            case x.VU.PREMIUM_TENURE_36_MONTH:
                return S;
            case x.VU.PREMIUM_TENURE_60_MONTH:
                return O;
            case x.VU.PREMIUM_TENURE_72_MONTH:
                return A;
            default:
                return;
        }
    },
    k = () => {
        let e = B(),
            { version: t } = (0, p.Z)();
        return M(e, t);
    },
    w = (e, t) => {
        switch (e) {
            case x.VU.PREMIUM_TENURE_1_MONTH:
                return f.intl.string(f.t.LR1C0d);
            case x.VU.PREMIUM_TENURE_3_MONTH:
                return f.intl.string(f.t['rI1/3N']);
            case x.VU.PREMIUM_TENURE_6_MONTH:
                return f.intl.string(f.t.VkhVKS);
            case x.VU.PREMIUM_TENURE_12_MONTH:
                return f.intl.string(f.t.gzUfNT);
            case x.VU.PREMIUM_TENURE_24_MONTH:
                return f.intl.string(f.t.fuwTPj);
            case x.VU.PREMIUM_TENURE_36_MONTH:
                return f.intl.string(f.t.qNhNk5);
            case x.VU.PREMIUM_TENURE_60_MONTH:
                return f.intl.string(f.t['wvX+eH']);
            case x.VU.PREMIUM_TENURE_72_MONTH:
                return 2 === t ? f.intl.string(f.t['/menIy']) : f.intl.string(f.t.Wu9WJi);
            default:
                return '';
        }
    },
    F = () => {
        let e = B(),
            { version: t } = (0, p.Z)();
        return w(e, t);
    },
    U = (e) => {
        switch (e) {
            case x.VU.PREMIUM_TENURE_1_MONTH:
            case x.VU.PREMIUM_TENURE_3_MONTH:
            case x.VU.PREMIUM_TENURE_6_MONTH:
                return f.intl.formatToPlainString(f.t.erUSmJ, { months: x.eG[e] });
            case x.VU.PREMIUM_TENURE_12_MONTH:
            case x.VU.PREMIUM_TENURE_24_MONTH:
            case x.VU.PREMIUM_TENURE_36_MONTH:
            case x.VU.PREMIUM_TENURE_60_MONTH:
                return f.intl.formatToPlainString(f.t.IfYQVF, { years: x.eG[e] / 12 });
            case x.VU.PREMIUM_TENURE_72_MONTH:
                return f.intl.formatToPlainString(f.t.IfYQVF, { years: '6+' });
            default:
                return '';
        }
    },
    V = () => U(B()),
    G = () => {
        let e = B(),
            t = (0, a.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription());
        return null == e || null == t || null == t.premiumSince ? null : (0, d.RZ)(e, t.premiumSince);
    },
    H = () => ({
        badge: B(),
        image: k(),
        name: F(),
        earnedOnDate: G(),
        tenureRequirement: V()
    }),
    Y = () => {
        let e = L(),
            { enabled: t } = (0, p.Z)(!0),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return n === l.z.WHATS_NEW_TENURE_BADGE_REWARD ? f.intl.string(f.t.jyYgZ2).toLocaleUpperCase() : null;
    },
    W = () => {
        let e = L(),
            { enabled: t } = (0, p.Z)(),
            [n] = (0, c.US)(t && null != e ? [l.z.WHATS_NEW_TENURE_BADGE_REWARD] : []);
        return i.useCallback(() => {
            n === l.z.WHATS_NEW_TENURE_BADGE_REWARD && (0, o.EW)(n);
        }, [n]);
    };
