n.d(t, {
    OW: () => C,
    nh: () => O,
    G3: () => D,
    JK: () => T,
    sj: () => w,
    u6: () => W,
    II: () => U,
    DG: () => j,
    lx: () => R,
    nI: () => L,
    cS: () => y,
    He: () => g,
    ii: () => S,
    Qz: () => H,
    aE: () => M,
    _V: () => P,
    Zc: () => B,
    GS: () => m,
    G5: () => Y,
    gQ: () => p,
    T7: () => v,
    Pm: () => V,
    RM: () => Z,
    _w: () => k,
    zL: () => b,
    x: () => F,
});
var i,
    r = n(83790),
    a = n(441574),
    s = n(626584),
    l = n(125584),
    o = n(683760);
class d {
    name;
    description;
    getFeatureValue;
    constructor(e, t, n) {
        ((this.name = e),
            (this.description = n),
            (this.getFeatureValue = t),
            Object.defineProperty(this, "getFeatureValue", { value: t, configurable: !1, writable: !1 }));
    }
}
class c {
    skuId;
    skuFeatures;
    constructor(e, t) {
        ((this.skuId = e), (this.skuFeatures = t));
    }
}
var u = n(945810),
    _ =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (i[(i.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        i);
let E = (0, u.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var A = n(349871),
    h = n(202541);
let f = new s.A("ProductCatalog.tsx");
class I extends d {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = h.u0[t.premiumType];
                        if (null == n)
                            return (
                                f.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = K[n];
                        if (null == i)
                            return (
                                f.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        f.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let p = new I(r.w.ANIMATED_EMOJIS),
    T = new I(r.w.EMOJIS_EVERYWHERE),
    m = new I(r.w.STICKERS_EVERYWHERE),
    g = new I(r.w.SOUNDBOARD_EVERYWHERE),
    S = new I(r.w.CUSTOM_CALL_SOUNDS),
    N = new I(r.w.PREMIUM_VOICE_FILTERS),
    C = new I(r.w.ANIMATED_AVATAR),
    O = new I(r.w.CUSTOM_DISCRIMINATOR),
    R = new I(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    L = new I("profileBadges"),
    y = new I(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    D = new I("collectibles"),
    v = new I("appIcons"),
    b = new I(r.w.CLIENT_THEMES),
    P = new I("boostDiscount"),
    M = new I("freeBoosts"),
    U = new I(r.w.STREAM_MID_QUALITY),
    w = new I(r.w.STREAM_HIGH_QUALITY),
    G = new I(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    x = new I("fancyVoiceChannelReactions"),
    k = new I("installPremiumApplications"),
    F = new I("redeemPremiumPerks"),
    B = new I(r.w.VIDEO_FILTER_ASSETS);
new d(r.w.INCREASED_FILE_UPLOAD_SIZE, l.f);
let V = new I(r.w.INCREASED_GUILD_LIMIT),
    H = new I(r.w.INCREASED_MESSAGE_LENGTH),
    j = new I("increasedVideoUploadQuality"),
    W = new I("uploadLargeFiles"),
    Y = new I(r.w.QUEST_ORB_MULTIPLIER),
    K = Object.freeze({
        [h.pe.TIER_0]: new c(h.pe.TIER_0, [p, T, m, L, B, j, W, v]),
        [h.pe.TIER_1]: new c(h.pe.TIER_1, [p, T, C, O, L, P, U, x, j, W, v]),
        [h.pe.TIER_2]: new c(h.pe.TIER_2, [
            p,
            T,
            m,
            g,
            S,
            C,
            O,
            R,
            L,
            y,
            b,
            P,
            M,
            U,
            w,
            x,
            k,
            F,
            B,
            V,
            H,
            j,
            W,
            v,
            D,
            G,
            N,
            Y,
        ]),
    }),
    $ = [P, M],
    z = [Y],
    X = [],
    q = new Map([
        [p, a.bb.ANIMATED_EMOJIS],
        [T, a.bb.EMOJIS_EVERYWHERE],
        [m, a.bb.STICKERS_EVERYWHERE],
        [g, a.bb.SOUNDBOARD_EVERYWHERE],
        [S, a.bb.CUSTOM_CALL_SOUNDS],
        [N, a.bb.PREMIUM_VOICE_FILTERS],
        [C, a.bb.ANIMATED_AVATAR],
        [O, a.bb.CUSTOM_DISCRIMINATOR],
        [R, a.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [y, a.bb.PROFILE_PREMIUM_FEATURES],
        [D, a.bb.PREMIUM_COLLECTIBLES],
        [b, a.bb.CLIENT_THEMES],
        [U, a.bb.STREAM_MID_QUALITY],
        [w, a.bb.STREAM_HIGH_QUALITY],
        [B, a.bb.VIDEO_FILTER_ASSETS],
        [V, a.bb.INCREASED_GUILD_LIMIT],
        [H, a.bb.INCREASED_MESSAGE_LENGTH],
        [W, a.bb.INCREASED_FILE_UPLOAD_SIZE],
        [L, a.bb.PROFILE_BADGES],
        [v, a.bb.APP_ICONS],
        [P, a.bb.BOOST_DISCOUNT],
        [M, a.bb.FREE_BOOSTS],
        [k, a.bb.INSTALL_PREMIUM_APPLICATIONS],
        [j, a.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function Z(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && $.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && z.includes(e)) ||
        (n && X.includes(e))
    )
        return !1;
    if (o.A.hasPremiumTypeOverride(t)) return e.getFeatureValue(t);
    let i = q.get(e);
    if (null != i && t?.perks != null) {
        let n = E.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== _.CONTROL) {
            let r = e.getFeatureValue(t),
                a = (0, A.Nh)(t?.perks, i);
            return n === _.DUAL_READ_RETURN_NEW ? a : r;
        }
    }
    return e.getFeatureValue(t);
}
