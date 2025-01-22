r.d(n, {
    $0: function () {
        return O;
    },
    AN: function () {
        return k;
    },
    Ct: function () {
        return C;
    },
    EQ: function () {
        return Z;
    },
    Ej: function () {
        return S;
    },
    ME: function () {
        return m;
    },
    O1: function () {
        return I;
    },
    O8: function () {
        return L;
    },
    Pl: function () {
        return T;
    },
    Uw: function () {
        return w;
    },
    ZE: function () {
        return M;
    },
    _G: function () {
        return b;
    },
    _O: function () {
        return A;
    },
    _y: function () {
        return g;
    },
    do: function () {
        return U;
    },
    g7: function () {
        return D;
    },
    g_: function () {
        return h;
    },
    hs: function () {
        return v;
    },
    j4: function () {
        return R;
    },
    ks: function () {
        return V;
    },
    lX: function () {
        return y;
    },
    m_: function () {
        return _;
    },
    qH: function () {
        return x;
    },
    tj: function () {
        return E;
    },
    uw: function () {
        return N;
    },
    wN: function () {
        return G;
    },
    zZ: function () {
        return B;
    },
    zm: function () {
        return P;
    }
});
var i = r(848246),
    a = r(710845),
    o = r(380684),
    s = r(533293),
    l = r(575691),
    u = r(474936);
let c = new a.Z('ProductCatalog.tsx'),
    d = Object.freeze({
        [u.p9.TIER_0]: u.Si.TIER_0,
        [u.p9.TIER_1]: u.Si.TIER_1,
        [u.p9.TIER_2]: u.Si.TIER_2
    });
function f(e, n) {
    if (null == n || null == n.premiumType) return !1;
    try {
        let r = d[n.premiumType];
        if (null == r) return c.warn("Cannot find the corresponding SKU to the user's premium type ".concat(n.premiumType)), !1;
        let i = F[r];
        if (null == i) return c.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(r, ' and premium type ').concat(n.premiumType)), !1;
        return i.skuFeatures.includes(e);
    } catch (e) {
        var r;
        c.error("Error while retrieving user's feature access: ".concat(null !== (r = e.message) && void 0 !== r ? r : JSON.stringify(e)));
    }
    return !1;
}
class p extends s.Z {
    constructor(e, n) {
        super(e, (e) => f(this, e), n);
    }
}
let h = new p(i.q.ANIMATED_EMOJIS),
    _ = new p(i.q.EMOJIS_EVERYWHERE),
    m = new p(i.q.STICKERS_EVERYWHERE),
    g = new p(i.q.SOUNDBOARD_EVERYWHERE),
    E = new p(i.q.CUSTOM_CALL_SOUNDS),
    v = new p(i.q.PREMIUM_VOICE_FILTERS),
    y = new p(i.q.ANIMATED_AVATAR),
    b = new p(i.q.CUSTOM_DISCRIMINATOR),
    I = new p(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
    T = new p('profileBadges'),
    S = new p(i.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    A = new p('collectibles'),
    C = new p('appIcons'),
    N = new p(i.q.CLIENT_THEMES),
    R = new p('boostDiscount'),
    O = new p('freeBoosts'),
    D = new p(i.q.STREAM_MID_QUALITY),
    L = new p(i.q.STREAM_HIGH_QUALITY),
    x = new p(i.q.CUSTOM_NOTIFICATION_SOUNDS),
    w = new p('fancyVoiceChannelReactions'),
    P = new p('installPremiumApplications'),
    M = new p('redeemPremiumPerks'),
    k = new p(i.q.VIDEO_FILTER_ASSETS);
new s.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, o.h6);
let U = new p(i.q.INCREASED_GUILD_LIMIT),
    B = new p(i.q.INCREASED_MESSAGE_LENGTH),
    G = new p('increasedVideoUploadQuality'),
    Z = new p('uploadLargeFiles'),
    F = Object.freeze({
        [u.Si.TIER_0]: new l.Z(u.Si.TIER_0, [h, _, m, T, k, G, Z, C]),
        [u.Si.TIER_1]: new l.Z(u.Si.TIER_1, [h, _, y, b, T, R, D, w, G, Z, C]),
        [u.Si.TIER_2]: new l.Z(u.Si.TIER_2, [h, _, m, g, E, y, b, I, T, S, N, R, O, D, L, w, P, M, k, U, B, G, Z, C, A, x, v])
    });
function V(e, n) {
    return e.getFeatureValue(n);
}
