n.d(t, {
    $0: () => O,
    AN: () => k,
    Ct: () => N,
    EQ: () => Z,
    Ej: () => b,
    ME: () => h,
    O1: () => I,
    O8: () => L,
    Pl: () => T,
    Ry: () => A,
    Uw: () => P,
    ZE: () => M,
    _G: () => y,
    _O: () => S,
    _y: () => m,
    do: () => U,
    g7: () => D,
    g_: () => _,
    hs: () => E,
    j4: () => R,
    ks: () => V,
    lX: () => v,
    m_: () => p,
    qH: () => x,
    tj: () => g,
    uw: () => C,
    wN: () => B,
    zZ: () => G,
    zm: () => w
});
var i = n(848246),
    r = n(710845),
    a = n(380684),
    s = n(533293),
    o = n(575691),
    l = n(474936);
let u = new r.Z('ProductCatalog.tsx'),
    c = Object.freeze({
        [l.p9.TIER_0]: l.Si.TIER_0,
        [l.p9.TIER_1]: l.Si.TIER_1,
        [l.p9.TIER_2]: l.Si.TIER_2
    });
function d(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = c[t.premiumType];
        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let i = F[n];
        if (null == i) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, ' and premium type ').concat(t.premiumType)), !1;
        return i.skuFeatures.includes(e);
    } catch (e) {
        var n;
        u.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)));
    }
    return !1;
}
class f extends s.Z {
    constructor(e, t) {
        super(e, (e) => d(this, e), t);
    }
}
let _ = new f(i.q.ANIMATED_EMOJIS),
    p = new f(i.q.EMOJIS_EVERYWHERE),
    h = new f(i.q.STICKERS_EVERYWHERE),
    m = new f(i.q.SOUNDBOARD_EVERYWHERE),
    g = new f(i.q.CUSTOM_CALL_SOUNDS),
    E = new f(i.q.PREMIUM_VOICE_FILTERS),
    v = new f(i.q.ANIMATED_AVATAR),
    y = new f(i.q.CUSTOM_DISCRIMINATOR),
    I = new f(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
    T = new f('profileBadges'),
    b = new f(i.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    S = new f('collectibles'),
    A = new f(i.q.INCREASED_RECENT_AVATARS_LIMIT),
    N = new f('appIcons'),
    C = new f(i.q.CLIENT_THEMES),
    R = new f('boostDiscount'),
    O = new f('freeBoosts'),
    D = new f(i.q.STREAM_MID_QUALITY),
    L = new f(i.q.STREAM_HIGH_QUALITY),
    x = new f(i.q.CUSTOM_NOTIFICATION_SOUNDS),
    P = new f('fancyVoiceChannelReactions'),
    w = new f('installPremiumApplications'),
    M = new f('redeemPremiumPerks'),
    k = new f(i.q.VIDEO_FILTER_ASSETS);
new s.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, a.h);
let U = new f(i.q.INCREASED_GUILD_LIMIT),
    G = new f(i.q.INCREASED_MESSAGE_LENGTH),
    B = new f('increasedVideoUploadQuality'),
    Z = new f('uploadLargeFiles'),
    F = Object.freeze({
        [l.Si.TIER_0]: new o.Z(l.Si.TIER_0, [_, p, h, T, k, B, Z, N]),
        [l.Si.TIER_1]: new o.Z(l.Si.TIER_1, [_, p, v, y, T, R, D, P, B, Z, N]),
        [l.Si.TIER_2]: new o.Z(l.Si.TIER_2, [_, p, h, m, g, v, y, I, T, b, C, R, O, D, L, P, w, M, k, U, G, B, Z, N, S, x, E, A])
    });
function V(e, t) {
    return e.getFeatureValue(t);
}
