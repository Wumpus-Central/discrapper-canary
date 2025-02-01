n.d(t, {
    $0: () => R,
    AN: () => M,
    Ct: () => A,
    EQ: () => B,
    Ej: () => b,
    ME: () => h,
    O1: () => I,
    O8: () => D,
    Pl: () => T,
    Uw: () => L,
    ZE: () => w,
    _G: () => y,
    _O: () => S,
    _y: () => m,
    do: () => k,
    g7: () => O,
    g_: () => _,
    hs: () => E,
    j4: () => C,
    ks: () => F,
    lX: () => v,
    m_: () => p,
    qH: () => x,
    tj: () => g,
    uw: () => N,
    wN: () => G,
    zZ: () => U,
    zm: () => P
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
        let i = Z[n];
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
    A = new f('appIcons'),
    N = new f(i.q.CLIENT_THEMES),
    C = new f('boostDiscount'),
    R = new f('freeBoosts'),
    O = new f(i.q.STREAM_MID_QUALITY),
    D = new f(i.q.STREAM_HIGH_QUALITY),
    x = new f(i.q.CUSTOM_NOTIFICATION_SOUNDS),
    L = new f('fancyVoiceChannelReactions'),
    P = new f('installPremiumApplications'),
    w = new f('redeemPremiumPerks'),
    M = new f(i.q.VIDEO_FILTER_ASSETS);
new s.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, a.h);
let k = new f(i.q.INCREASED_GUILD_LIMIT),
    U = new f(i.q.INCREASED_MESSAGE_LENGTH),
    G = new f('increasedVideoUploadQuality'),
    B = new f('uploadLargeFiles'),
    Z = Object.freeze({
        [l.Si.TIER_0]: new o.Z(l.Si.TIER_0, [_, p, h, T, M, G, B, A]),
        [l.Si.TIER_1]: new o.Z(l.Si.TIER_1, [_, p, v, y, T, C, O, L, G, B, A]),
        [l.Si.TIER_2]: new o.Z(l.Si.TIER_2, [_, p, h, m, g, v, y, I, T, b, N, C, R, O, D, L, P, w, M, k, U, G, B, A, S, x, E])
    });
function F(e, t) {
    return e.getFeatureValue(t);
}
