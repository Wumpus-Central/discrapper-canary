s.d(n, { $_: () => g, DU: () => w, Lp: () => L, Pf: () => U, QR: () => I, q5: () => C });
var i = s(661531),
    o = s(477262),
    r = s(391242),
    e = s(179866),
    l = s(797285),
    c = s(27232),
    a = s(460905),
    f = s(183623),
    u = s(116891);
s(358431);
var _ = s(776627),
    E = s(652215),
    d = s(788868),
    R = s(985018);
let P = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: t, icon: r.O, description: R.intl.string(R.t["94l3Ul"]) };
    },
    h = () => ({
        color: i.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: e.i,
        description: R.intl.string(R.t.zZe94m),
    }),
    A = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: t, icon: l.t, description: R.intl.string(R.t.ZwOSdn) };
    },
    M = function (t) {
        let n =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            s = 0,
            o = 0;
        switch (t) {
            case E.TVA.TIER_1:
                (s = 15), (o = 100);
                break;
            case E.TVA.TIER_2:
                (s = 30), (o = 150);
                break;
            case E.TVA.TIER_3:
                (s = 60), (o = 250);
        }
        return {
            color: n,
            icon: l.t,
            description: R.intl.formatToPlainString(R.t["12vFYK"], { numStickers: s, numEmojis: o }),
        };
    },
    p = () => ({
        color: i.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: c.G,
        description: R.intl.string(R.t["ThRK/u"]),
    }),
    v = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.intl.string(R.t.SQV8g6);
        return { color: i.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: a.n, description: t };
    },
    T = function () {
        let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            n = (0, u.eT)("GuildBoostingConstants"),
            s =
                n === u.fj
                    ? R.intl.string(R.t.oIKhwT)
                    : R.intl.formatToPlainString(R.t["7y2ina"], {
                          resolution: n,
                          framerate: d.TG[E.TVA.TIER_2].limits.screenShareQualityFramerate,
                      });
        return { color: t, icon: f.F, description: s };
    };
function g() {
    return [
        h(),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: o.s, description: R.intl.string(R.t["n/HqCh"]) },
        A(),
        v(),
    ];
}
function I() {
    return [h(), M(E.TVA.TIER_2), T(), v()];
}
function U() {
    return [
        M(E.TVA.TIER_3, i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: _.A, description: R.intl.string(R.t.Tm40TZ) },
        p(),
        v(),
    ];
}
function w() {
    return [
        p(),
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.O, description: R.intl.string(R.t.AU0zcQ) },
        M(E.TVA.TIER_3),
        v(),
    ];
}
function L() {
    return [
        { color: i.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: o.s, description: R.intl.string(R.t.iGuEFe) },
        A(),
        P(),
        v(),
    ];
}
function C() {
    return [A(), v()];
}
