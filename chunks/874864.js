"use strict";
n.d(t, { $_: () => T, DU: () => v, Lp: () => N, Pf: () => y, QR: () => S, q5: () => C });
var r = n(827734),
    i = n(397927),
    s = n(116891);
n(358431);
var a = n(776627),
    o = n(652215),
    l = n(788868),
    u = n(985018);
let c = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.sYc,
        description: u.intl.string(u.t.iGuEFe),
    }),
    d = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: e, icon: i.Osp, description: u.intl.string(u.t["94l3Ul"]) };
    },
    _ = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.sYc,
        description: u.intl.string(u.t["n/HqCh"]),
    }),
    f = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Osp,
        description: u.intl.string(u.t.AU0zcQ),
    }),
    p = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.iTF,
        description: u.intl.string(u.t.zZe94m),
    }),
    h = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: e, icon: i.tEP, description: u.intl.string(u.t.ZwOSdn) };
    },
    m = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            s = 0;
        switch (e) {
            case o.TVA.TIER_1:
                (n = 15), (s = 100);
                break;
            case o.TVA.TIER_2:
                (n = 30), (s = 150);
                break;
            case o.TVA.TIER_3:
                (n = 60), (s = 250);
        }
        return {
            color: t,
            icon: i.tEP,
            description: u.intl.formatToPlainString(u.t["12vFYK"], { numStickers: n, numEmojis: s }),
        };
    },
    E = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.Gg5,
        description: u.intl.string(u.t["ThRK/u"]),
    }),
    g = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.intl.string(u.t.SQV8g6);
        return { color: r.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: i.nm2, description: e };
    },
    A = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: a.A,
        description: u.intl.string(u.t.Tm40TZ),
    }),
    I = function () {
        let e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            t = (0, s.eT)("GuildBoostingConstants"),
            n =
                t === s.fj
                    ? u.intl.string(u.t.oIKhwT)
                    : u.intl.formatToPlainString(u.t["7y2ina"], {
                          resolution: t,
                          framerate: l.TG[o.TVA.TIER_2].limits.screenShareQualityFramerate,
                      });
        return { color: e, icon: i.Fzq, description: n };
    };
function T() {
    return [p(), _(), h(), g()];
}
function S() {
    return [p(), m(o.TVA.TIER_2), I(), g()];
}
function y() {
    return [m(o.TVA.TIER_3, r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css), A(), E(), g()];
}
function v() {
    return [E(), f(), m(o.TVA.TIER_3), g()];
}
function N() {
    return [c(), h(), d(), g()];
}
function C() {
    return [h(), g()];
}
