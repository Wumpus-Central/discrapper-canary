n.d(t, {
    $0: () => D,
    AN: () => U,
    Ct: () => C,
    EQ: () => F,
    Ej: () => S,
    ME: () => m,
    O1: () => T,
    O8: () => x,
    Pl: () => b,
    Ry: () => N,
    Uw: () => w,
    ZE: () => k,
    _G: () => I,
    _O: () => A,
    _y: () => g,
    do: () => G,
    g7: () => L,
    g_: () => p,
    hs: () => v,
    j4: () => O,
    ks: () => j,
    lX: () => y,
    m_: () => h,
    qH: () => P,
    tj: () => E,
    uw: () => R,
    wN: () => Z,
    zZ: () => B,
    zm: () => M
});
var i = n(848246),
    r = n(710845),
    a = n(380684),
    s = n(533293),
    o = n(526998),
    l = n(575691),
    u = n(474936);
let c = new r.Z('ProductCatalog.tsx'),
    d = Object.freeze({
        [u.p9.TIER_0]: u.Si.TIER_0,
        [u.p9.TIER_1]: u.Si.TIER_1,
        [u.p9.TIER_2]: u.Si.TIER_2
    });
function f(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = d[t.premiumType];
        if (null == n) return c.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let i = V[n];
        if (null == i) return c.warn("Cannot find the corresponding product catalog entry to the user's SKU ".concat(n, ' and premium type ').concat(t.premiumType)), !1;
        return i.skuFeatures.includes(e);
    } catch (e) {
        var n;
        c.error("Error while retrieving user's feature access: ".concat(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e)));
    }
    return !1;
}
class _ extends s.Z {
    constructor(e, t) {
        super(e, (e) => f(this, e), t);
    }
}
let p = new _(i.q.ANIMATED_EMOJIS),
    h = new _(i.q.EMOJIS_EVERYWHERE),
    m = new _(i.q.STICKERS_EVERYWHERE),
    g = new _(i.q.SOUNDBOARD_EVERYWHERE),
    E = new _(i.q.CUSTOM_CALL_SOUNDS),
    v = new _(i.q.PREMIUM_VOICE_FILTERS),
    y = new _(i.q.ANIMATED_AVATAR),
    I = new _(i.q.CUSTOM_DISCRIMINATOR),
    T = new _(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
    b = new _('profileBadges'),
    S = new _(i.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    A = new _('collectibles'),
    N = new _(i.q.INCREASED_RECENT_AVATARS_LIMIT),
    C = new _('appIcons'),
    R = new _(i.q.CLIENT_THEMES),
    O = new _('boostDiscount'),
    D = new _('freeBoosts'),
    L = new _(i.q.STREAM_MID_QUALITY),
    x = new _(i.q.STREAM_HIGH_QUALITY),
    P = new _(i.q.CUSTOM_NOTIFICATION_SOUNDS),
    w = new _('fancyVoiceChannelReactions'),
    M = new _('installPremiumApplications'),
    k = new _('redeemPremiumPerks'),
    U = new _(i.q.VIDEO_FILTER_ASSETS);
new s.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, a.h);
let G = new _(i.q.INCREASED_GUILD_LIMIT),
    B = new _(i.q.INCREASED_MESSAGE_LENGTH),
    Z = new _('increasedVideoUploadQuality'),
    F = new _('uploadLargeFiles'),
    V = Object.freeze({
        [u.Si.TIER_0]: new l.Z(u.Si.TIER_0, [p, h, m, b, U, Z, F, C]),
        [u.Si.TIER_1]: new l.Z(u.Si.TIER_1, [p, h, y, I, b, O, L, w, Z, F, C]),
        [u.Si.TIER_2]: new l.Z(u.Si.TIER_2, [p, h, m, g, E, y, I, T, b, S, R, O, D, L, x, w, M, k, U, G, B, Z, F, C, A, P, v, N])
    });
function j(e, t) {
    return !(0, o.U)('canUserUse', t) && e.getFeatureValue(t);
}
