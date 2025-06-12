n.d(t, {
    $0: () => R,
    AN: () => k,
    Ct: () => A,
    DU: () => V,
    EQ: () => B,
    Ej: () => T,
    ME: () => m,
    O1: () => v,
    O8: () => w,
    Pl: () => I,
    Uw: () => L,
    ZE: () => M,
    _G: () => O,
    _O: () => S,
    _y: () => g,
    do: () => j,
    g7: () => P,
    g_: () => p,
    hs: () => b,
    j4: () => C,
    ks: () => H,
    lX: () => y,
    m_: () => h,
    qH: () => D,
    tj: () => E,
    uw: () => N,
    wN: () => G,
    zZ: () => U,
    zm: () => x
}),
    n(49124);
var r = n(848246),
    i = n(710845),
    a = n(380684),
    o = n(533293),
    s = n(526998),
    l = n(575691),
    c = n(474936);
let u = new i.Z('ProductCatalog.tsx'),
    d = Object.freeze({
        [c.p9.TIER_0]: c.Si.TIER_0,
        [c.p9.TIER_1]: c.Si.TIER_1,
        [c.p9.TIER_2]: c.Si.TIER_2
    });
function _(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = d[t.premiumType];
        if (null == n) return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let r = F[n];
        if (null == r) return u.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, ' and premium type ').concat(t.premiumType)), !1;
        return r.skuFeatures.includes(e);
    } catch (e) {
        var n;
        u.error("Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)));
    }
    return !1;
}
class f extends o.Z {
    constructor(e, t) {
        super(e, (e) => _(this, e), t);
    }
}
let p = new f(r.q.ANIMATED_EMOJIS),
    h = new f(r.q.EMOJIS_EVERYWHERE),
    m = new f(r.q.STICKERS_EVERYWHERE),
    g = new f(r.q.SOUNDBOARD_EVERYWHERE),
    E = new f(r.q.CUSTOM_CALL_SOUNDS),
    b = new f(r.q.PREMIUM_VOICE_FILTERS),
    y = new f(r.q.ANIMATED_AVATAR),
    O = new f(r.q.CUSTOM_DISCRIMINATOR),
    v = new f(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
    I = new f('profileBadges'),
    T = new f(r.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    S = new f('collectibles'),
    A = new f('appIcons'),
    N = new f(r.q.CLIENT_THEMES),
    C = new f('boostDiscount'),
    R = new f('freeBoosts'),
    P = new f(r.q.STREAM_MID_QUALITY),
    w = new f(r.q.STREAM_HIGH_QUALITY),
    D = new f(r.q.CUSTOM_NOTIFICATION_SOUNDS),
    L = new f('fancyVoiceChannelReactions'),
    x = new f('installPremiumApplications'),
    M = new f('redeemPremiumPerks'),
    k = new f(r.q.VIDEO_FILTER_ASSETS);
new o.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, a.h);
let j = new f(r.q.INCREASED_GUILD_LIMIT),
    U = new f(r.q.INCREASED_MESSAGE_LENGTH),
    G = new f('increasedVideoUploadQuality'),
    B = new f('uploadLargeFiles'),
    V = new f(r.q.CHAT_WALLPAPERS),
    F = Object.freeze({
        [c.Si.TIER_0]: new l.Z(c.Si.TIER_0, [p, h, m, I, k, G, B, A]),
        [c.Si.TIER_1]: new l.Z(c.Si.TIER_1, [p, h, y, O, I, C, P, L, G, B, A]),
        [c.Si.TIER_2]: new l.Z(c.Si.TIER_2, [p, h, m, g, E, y, O, v, I, T, N, C, R, P, w, L, x, M, k, j, U, G, B, A, S, D, b, V])
    }),
    Z = [C, R];
function H(e, t, n) {
    return !((0, s.U)('canUserUse', t) || (null !== n && n === c.a$.FP_ONLY && Z.includes(e))) && e.getFeatureValue(t);
}
