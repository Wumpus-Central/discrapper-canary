n.d(t, {
    OW: () => N,
    nh: () => C,
    G3: () => y,
    JK: () => p,
    sj: () => U,
    u6: () => j,
    II: () => P,
    DG: () => H,
    lx: () => O,
    nI: () => R,
    cS: () => L,
    He: () => m,
    ii: () => g,
    Qz: () => V,
    aE: () => M,
    _V: () => b,
    Zc: () => F,
    GS: () => T,
    G5: () => W,
    gQ: () => I,
    T7: () => D,
    Pm: () => B,
    RM: () => Z,
    _w: () => x,
    zL: () => v,
    x: () => k,
});
var i,
    r = n(83790),
    a = n(441574),
    s = n(626584),
    l = n(125584);
class o {
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
class d {
    skuId;
    skuFeatures;
    constructor(e, t) {
        ((this.skuId = e), (this.skuFeatures = t));
    }
}
var c = n(945810),
    u =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.DUAL_READ_RETURN_OLD = 1)] = "DUAL_READ_RETURN_OLD"),
        (i[(i.DUAL_READ_RETURN_NEW = 2)] = "DUAL_READ_RETURN_NEW"),
        i);
let _ = (0, c.mj)({
    name: "2026-03-denormalized-perks-access-read",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2 },
});
var E = n(349871),
    A = n(202541);
let h = new s.A("ProductCatalog.tsx");
class f extends o {
    constructor(e, t) {
        super(
            e,
            (e) =>
                (function (e, t) {
                    if (null == t || null == t.premiumType) return !1;
                    try {
                        let n = A.u0[t.premiumType];
                        if (null == n)
                            return (
                                h.warn(`Cannot find the corresponding SKU to the user's premium type ${t.premiumType}`),
                                !1
                            );
                        let i = Y[n];
                        if (null == i)
                            return (
                                h.warn(
                                    `Cannot find the corresponding product catalog entry to the user's SKU ${n} and premium type ${t.premiumType}`,
                                ),
                                !1
                            );
                        return i.skuFeatures.includes(e);
                    } catch (e) {
                        h.error(`Error while retrieving user's feature access: ${e.message ?? JSON.stringify(e)}`);
                    }
                    return !1;
                })(this, e),
            t,
        );
    }
}
let I = new f(r.w.ANIMATED_EMOJIS),
    p = new f(r.w.EMOJIS_EVERYWHERE),
    T = new f(r.w.STICKERS_EVERYWHERE),
    m = new f(r.w.SOUNDBOARD_EVERYWHERE),
    g = new f(r.w.CUSTOM_CALL_SOUNDS),
    S = new f(r.w.PREMIUM_VOICE_FILTERS),
    N = new f(r.w.ANIMATED_AVATAR),
    C = new f(r.w.CUSTOM_DISCRIMINATOR),
    O = new f(r.w.PREMIUM_GUILD_MEMBER_PROFILE),
    R = new f("profileBadges"),
    L = new f(r.w.PROFILE_PREMIUM_FEATURES, "custom banner and avatar decoration"),
    y = new f("collectibles"),
    D = new f("appIcons"),
    v = new f(r.w.CLIENT_THEMES),
    b = new f("boostDiscount"),
    M = new f("freeBoosts"),
    P = new f(r.w.STREAM_MID_QUALITY),
    U = new f(r.w.STREAM_HIGH_QUALITY),
    w = new f(r.w.CUSTOM_NOTIFICATION_SOUNDS),
    G = new f("fancyVoiceChannelReactions"),
    x = new f("installPremiumApplications"),
    k = new f("redeemPremiumPerks"),
    F = new f(r.w.VIDEO_FILTER_ASSETS);
new o(r.w.INCREASED_FILE_UPLOAD_SIZE, l.f);
let B = new f(r.w.INCREASED_GUILD_LIMIT),
    V = new f(r.w.INCREASED_MESSAGE_LENGTH),
    H = new f("increasedVideoUploadQuality"),
    j = new f("uploadLargeFiles"),
    W = new f(r.w.QUEST_ORB_MULTIPLIER),
    Y = Object.freeze({
        [A.pe.TIER_0]: new d(A.pe.TIER_0, [I, p, T, R, F, H, j, D]),
        [A.pe.TIER_1]: new d(A.pe.TIER_1, [I, p, N, C, R, b, P, G, H, j, D]),
        [A.pe.TIER_2]: new d(A.pe.TIER_2, [
            I,
            p,
            T,
            m,
            g,
            N,
            C,
            O,
            R,
            L,
            v,
            b,
            M,
            P,
            U,
            G,
            x,
            k,
            F,
            B,
            V,
            H,
            j,
            D,
            y,
            w,
            S,
            W,
        ]),
    }),
    K = [b, M],
    $ = [W],
    z = [],
    X = new Map([
        [I, a.bb.ANIMATED_EMOJIS],
        [p, a.bb.EMOJIS_EVERYWHERE],
        [T, a.bb.STICKERS_EVERYWHERE],
        [m, a.bb.SOUNDBOARD_EVERYWHERE],
        [g, a.bb.CUSTOM_CALL_SOUNDS],
        [S, a.bb.PREMIUM_VOICE_FILTERS],
        [N, a.bb.ANIMATED_AVATAR],
        [C, a.bb.CUSTOM_DISCRIMINATOR],
        [O, a.bb.PREMIUM_GUILD_MEMBER_PROFILE],
        [L, a.bb.PROFILE_PREMIUM_FEATURES],
        [y, a.bb.PREMIUM_COLLECTIBLES],
        [v, a.bb.CLIENT_THEMES],
        [P, a.bb.STREAM_MID_QUALITY],
        [U, a.bb.STREAM_HIGH_QUALITY],
        [F, a.bb.VIDEO_FILTER_ASSETS],
        [B, a.bb.INCREASED_GUILD_LIMIT],
        [V, a.bb.INCREASED_MESSAGE_LENGTH],
        [j, a.bb.INCREASED_FILE_UPLOAD_SIZE],
        [R, a.bb.PROFILE_BADGES],
        [D, a.bb.APP_ICONS],
        [b, a.bb.BOOST_DISCOUNT],
        [M, a.bb.FREE_BOOSTS],
        [x, a.bb.INSTALL_PREMIUM_APPLICATIONS],
        [H, a.bb.INCREASED_VIDEO_UPLOAD_QUALITY],
    ]);
function Z(e, t, n) {
    if (
        (null != t && t.isPremiumWithFractionalPremiumOnly() && K.includes(e)) ||
        (null != t && t.isFractionalPremiumWithNoStandardSub() && $.includes(e)) ||
        (n && z.includes(e))
    )
        return !1;
    let i = X.get(e);
    if (null != i && t?.perks != null) {
        let n = _.getConfig({ location: "product_catalog_can_user_use" });
        if (n !== u.CONTROL) {
            let r = e.getFeatureValue(t),
                a = (0, E.Nh)(t?.perks, i);
            return n === u.DUAL_READ_RETURN_NEW ? a : r;
        }
    }
    return e.getFeatureValue(t);
}
