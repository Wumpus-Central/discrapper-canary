n.d(t, {
    $0: () => N,
    AN: () => M,
    Ct: () => S,
    EQ: () => G,
    Ej: () => I,
    ME: () => h,
    O1: () => O,
    O8: () => P,
    Pl: () => v,
    Uw: () => w,
    ZE: () => x,
    _G: () => y,
    _O: () => T,
    _y: () => m,
    do: () => j,
    g7: () => R,
    g_: () => _,
    hs: () => E,
    j4: () => C,
    ks: () => H,
    lX: () => b,
    m_: () => p,
    rh: () => B,
    tj: () => g,
    uw: () => A,
    wN: () => U,
    zZ: () => k,
    zm: () => L,
}),
    n(49124);
var r = n(848246),
    i = n(710845),
    a = n(380684),
    o = n(533293),
    s = n(526998),
    l = n(575691),
    c = n(474936);
let u = new i.Z("ProductCatalog.tsx");
function d(e, t) {
    if (null == t || null == t.premiumType) return !1;
    try {
        let n = c.uM[t.premiumType];
        if (null == n)
            return u.warn("Cannot find the corresponding SKU to the user's premium type ".concat(t.premiumType)), !1;
        let r = Z[n];
        if (null == r)
            return (
                u.warn(
                    "Cannot find the corresponding product catalog entry to the user's SKU "
                        .concat(n, " and premium type ")
                        .concat(t.premiumType),
                ),
                !1
            );
        return r.skuFeatures.includes(e);
    } catch (e) {
        var n;
        u.error(
            "Error while retrieving user's feature access: ".concat(null != (n = e.message) ? n : JSON.stringify(e)),
        );
    }
    return !1;
}
class f extends o.Z {
    constructor(e, t) {
        super(e, (e) => d(this, e), t);
    }
}
let _ = new f(r.q.ANIMATED_EMOJIS),
    p = new f(r.q.EMOJIS_EVERYWHERE),
    h = new f(r.q.STICKERS_EVERYWHERE),
    m = new f(r.q.SOUNDBOARD_EVERYWHERE),
    g = new f(r.q.CUSTOM_CALL_SOUNDS),
    E = new f(r.q.PREMIUM_VOICE_FILTERS),
    b = new f(r.q.ANIMATED_AVATAR),
    y = new f(r.q.CUSTOM_DISCRIMINATOR),
    O = new f(r.q.PREMIUM_GUILD_MEMBER_PROFILE),
    v = new f("profileBadges"),
    I = new f(r.q.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    T = new f("collectibles"),
    S = new f("appIcons"),
    A = new f(r.q.CLIENT_THEMES),
    C = new f("boostDiscount"),
    N = new f("freeBoosts"),
    R = new f(r.q.STREAM_MID_QUALITY),
    P = new f(r.q.STREAM_HIGH_QUALITY),
    D = new f(r.q.CUSTOM_NOTIFICATION_SOUNDS),
    w = new f("fancyVoiceChannelReactions"),
    L = new f("installPremiumApplications"),
    x = new f("redeemPremiumPerks"),
    M = new f(r.q.VIDEO_FILTER_ASSETS);
new o.Z(r.q.INCREASED_FILE_UPLOAD_SIZE, a.h);
let j = new f(r.q.INCREASED_GUILD_LIMIT),
    k = new f(r.q.INCREASED_MESSAGE_LENGTH),
    U = new f("increasedVideoUploadQuality"),
    G = new f("uploadLargeFiles"),
    B = new f("warpPrivateBrowsing"),
    Z = Object.freeze({
        [c.Si.TIER_0]: new l.Z(c.Si.TIER_0, [_, p, h, v, M, U, G, S]),
        [c.Si.TIER_1]: new l.Z(c.Si.TIER_1, [_, p, b, y, v, C, R, w, U, G, S]),
        [c.Si.TIER_2]: new l.Z(c.Si.TIER_2, [
            _,
            p,
            h,
            m,
            g,
            b,
            y,
            O,
            v,
            I,
            A,
            C,
            N,
            R,
            P,
            w,
            L,
            x,
            M,
            j,
            k,
            U,
            G,
            S,
            T,
            D,
            E,
            B,
        ]),
    }),
    F = [C, N, B],
    V = [B];
function H(e, t, n) {
    return (
        !(
            (0, s.U)("canUserUse", t) ||
            (null != t && t.isPremiumWithFractionalPremiumOnly() && F.includes(e)) ||
            (n && V.includes(e))
        ) && e.getFeatureValue(t)
    );
}
