r.d(n, {
    $0: function () {
        return R;
    },
    AN: function () {
        return M;
    },
    Ct: function () {
        return A;
    },
    EQ: function () {
        return G;
    },
    Ej: function () {
        return y;
    },
    ME: function () {
        return m;
    },
    O1: function () {
        return T;
    },
    O8: function () {
        return D;
    },
    Pl: function () {
        return b;
    },
    Uw: function () {
        return x;
    },
    ZE: function () {
        return P;
    },
    _G: function () {
        return I;
    },
    _O: function () {
        return S;
    },
    _y: function () {
        return g;
    },
    do: function () {
        return k;
    },
    g7: function () {
        return O;
    },
    g_: function () {
        return h;
    },
    j4: function () {
        return C;
    },
    ks: function () {
        return Z;
    },
    lX: function () {
        return v;
    },
    m_: function () {
        return p;
    },
    qH: function () {
        return L;
    },
    tj: function () {
        return E;
    },
    uw: function () {
        return N;
    },
    wN: function () {
        return B;
    },
    zZ: function () {
        return U;
    },
    zm: function () {
        return w;
    }
});
var i = r(848246),
    a = r(710845),
    s = r(380684),
    o = r(533293),
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
class _ extends o.Z {
    constructor(e, n) {
        super(e, (e) => f(this, e), n);
    }
}
let h = new _(i.q.ANIMATED_EMOJIS),
    p = new _(i.q.EMOJIS_EVERYWHERE),
    m = new _(i.q.STICKERS_EVERYWHERE),
    g = new _(i.q.SOUNDBOARD_EVERYWHERE),
    E = new _(i.q.CUSTOM_CALL_SOUNDS),
    v = new _(i.q.ANIMATED_AVATAR),
    I = new _(i.q.CUSTOM_DISCRIMINATOR),
    T = new _(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
    b = new _('profileBadges'),
    y = new _(i.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    S = new _('collectibles'),
    A = new _('appIcons'),
    N = new _(i.q.CLIENT_THEMES),
    C = new _('boostDiscount'),
    R = new _('freeBoosts'),
    O = new _(i.q.STREAM_MID_QUALITY),
    D = new _(i.q.STREAM_HIGH_QUALITY),
    L = new _(i.q.CUSTOM_NOTIFICATION_SOUNDS),
    x = new _('fancyVoiceChannelReactions'),
    w = new _('installPremiumApplications'),
    P = new _('redeemPremiumPerks'),
    M = new _(i.q.VIDEO_FILTER_ASSETS);
new o.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, s.h6);
let k = new _(i.q.INCREASED_GUILD_LIMIT),
    U = new _(i.q.INCREASED_MESSAGE_LENGTH),
    B = new _('increasedVideoUploadQuality'),
    G = new _('uploadLargeFiles'),
    F = Object.freeze({
        [u.Si.TIER_0]: new l.Z(u.Si.TIER_0, [h, p, m, b, M, B, G, A]),
        [u.Si.TIER_1]: new l.Z(u.Si.TIER_1, [h, p, v, I, b, C, O, x, B, G, A]),
        [u.Si.TIER_2]: new l.Z(u.Si.TIER_2, [h, p, m, g, E, v, I, T, b, y, N, C, R, O, D, x, w, P, M, k, U, B, G, A, S, L])
    });
function Z(e, n) {
    return e.getFeatureValue(n);
}
