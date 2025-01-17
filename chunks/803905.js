r.d(n, {
    $0: function () {
        return O;
    },
    AN: function () {
        return k;
    },
    Ct: function () {
        return N;
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
        return b;
    },
    O8: function () {
        return L;
    },
    Pl: function () {
        return y;
    },
    Uw: function () {
        return w;
    },
    ZE: function () {
        return M;
    },
    _G: function () {
        return T;
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
        return I;
    },
    m_: function () {
        return p;
    },
    qH: function () {
        return x;
    },
    tj: function () {
        return E;
    },
    uw: function () {
        return C;
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
    v = new _(i.q.PREMIUM_VOICE_FILTERS),
    I = new _(i.q.ANIMATED_AVATAR),
    T = new _(i.q.CUSTOM_DISCRIMINATOR),
    b = new _(i.q.PREMIUM_GUILD_MEMBER_PROFILE),
    y = new _('profileBadges'),
    S = new _(i.q.PROFILE_PREMIUM_FEATURES, 'custom banner and avatar decoration'),
    A = new _('collectibles'),
    N = new _('appIcons'),
    C = new _(i.q.CLIENT_THEMES),
    R = new _('boostDiscount'),
    O = new _('freeBoosts'),
    D = new _(i.q.STREAM_MID_QUALITY),
    L = new _(i.q.STREAM_HIGH_QUALITY),
    x = new _(i.q.CUSTOM_NOTIFICATION_SOUNDS),
    w = new _('fancyVoiceChannelReactions'),
    P = new _('installPremiumApplications'),
    M = new _('redeemPremiumPerks'),
    k = new _(i.q.VIDEO_FILTER_ASSETS);
new o.Z(i.q.INCREASED_FILE_UPLOAD_SIZE, s.h6);
let U = new _(i.q.INCREASED_GUILD_LIMIT),
    B = new _(i.q.INCREASED_MESSAGE_LENGTH),
    G = new _('increasedVideoUploadQuality'),
    Z = new _('uploadLargeFiles'),
    F = Object.freeze({
        [u.Si.TIER_0]: new l.Z(u.Si.TIER_0, [h, p, m, y, k, G, Z, N]),
        [u.Si.TIER_1]: new l.Z(u.Si.TIER_1, [h, p, I, T, y, R, D, w, G, Z, N]),
        [u.Si.TIER_2]: new l.Z(u.Si.TIER_2, [h, p, m, g, E, I, T, b, y, S, C, R, O, D, L, w, P, M, k, U, B, G, Z, N, A, x, v])
    });
function V(e, n) {
    return e.getFeatureValue(n);
}
