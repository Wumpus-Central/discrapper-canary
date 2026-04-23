"use strict";
n.d(t, { $_: () => y, DU: () => C, Lp: () => O, Pf: () => v, QR: () => N, q5: () => R });
var r = n(827734),
    i = n(477262),
    s = n(391242),
    a = n(179866),
    o = n(797285),
    l = n(27232),
    u = n(460905),
    c = n(183623),
    d = n(116891);
n(358431);
var _ = n(776627),
    f = n(652215),
    p = n(788868),
    h = n(985018);
let E = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: e, icon: s.O, description: h.intl.string(h.t["94l3Ul"]) };
    },
    m = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: a.i,
        description: h.intl.string(h.t.zZe94m),
    }),
    g = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: e, icon: o.t, description: h.intl.string(h.t.ZwOSdn) };
    },
    A = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            i = 0;
        switch (e) {
            case f.TVA.TIER_1:
                (n = 15), (i = 100);
                break;
            case f.TVA.TIER_2:
                (n = 30), (i = 150);
                break;
            case f.TVA.TIER_3:
                (n = 60), (i = 250);
        }
        return {
            color: t,
            icon: o.t,
            description: h.intl.formatToPlainString(h.t["12vFYK"], { numStickers: n, numEmojis: i }),
        };
    },
    I = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: l.G,
        description: h.intl.string(h.t["ThRK/u"]),
    }),
    T = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.intl.string(h.t.SQV8g6);
        return { color: r.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: u.n, description: e };
    },
    S = function () {
        let e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            t = (0, d.eT)("GuildBoostingConstants"),
            n =
                t === d.fj
                    ? h.intl.string(h.t.oIKhwT)
                    : h.intl.formatToPlainString(h.t["7y2ina"], {
                          resolution: t,
                          framerate: p.TG[f.TVA.TIER_2].limits.screenShareQualityFramerate,
                      });
        return { color: e, icon: c.F, description: n };
    };
function y() {
    return [
        m(),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: i.s, description: h.intl.string(h.t["n/HqCh"]) },
        g(),
        T(),
    ];
}
function N() {
    return [m(), A(f.TVA.TIER_2), S(), T()];
}
function v() {
    return [
        A(f.TVA.TIER_3, r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: _.A, description: h.intl.string(h.t.Tm40TZ) },
        I(),
        T(),
    ];
}
function C() {
    return [
        I(),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.O, description: h.intl.string(h.t.AU0zcQ) },
        A(f.TVA.TIER_3),
        T(),
    ];
}
function O() {
    return [
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: i.s, description: h.intl.string(h.t.iGuEFe) },
        g(),
        E(),
        T(),
    ];
}
function R() {
    return [g(), T()];
}
