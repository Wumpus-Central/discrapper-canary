"use strict";
n.d(t, { $_: () => A, DU: () => y, Lp: () => S, Pf: () => T, QR: () => I, q5: () => v });
var r = n(827734),
    i = n(397927);
n(358431);
var a = n(776627),
    s = n(652215);
n(788868);
var o = n(985018);
let l = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.sYc,
        description: o.intl.string(o.t.iGuEFe),
    }),
    u = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: e, icon: i.Osp, description: o.intl.string(o.t["94l3Ul"]) };
    },
    c = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.sYc,
        description: o.intl.string(o.t["n/HqCh"]),
    }),
    d = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.Osp,
        description: o.intl.string(o.t.AU0zcQ),
    }),
    _ = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.iTF,
        description: o.intl.string(o.t.zZe94m),
    }),
    f = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: e, icon: i.tEP, description: o.intl.string(o.t.ZwOSdn) };
    },
    p = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            a = 0;
        switch (e) {
            case s.TVA.TIER_1:
                (n = 15), (a = 100);
                break;
            case s.TVA.TIER_2:
                (n = 30), (a = 150);
                break;
            case s.TVA.TIER_3:
                (n = 60), (a = 250);
        }
        return {
            color: t,
            icon: i.tEP,
            description: o.intl.formatToPlainString(o.t["12vFYK"], { numStickers: n, numEmojis: a }),
        };
    },
    h = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.Gg5,
        description: o.intl.string(o.t["ThRK/u"]),
    }),
    m = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.intl.string(o.t.SQV8g6);
        return { color: r.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: i.nm2, description: e };
    },
    g = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: a.A,
        description: o.intl.string(o.t.Tm40TZ),
    }),
    E = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return { color: e, icon: i.Fzq, description: o.intl.string(o.t.oIKhwT) };
    };
function A() {
    return [_(), c(), f(), m()];
}
function I() {
    return [_(), p(s.TVA.TIER_2), E(), m()];
}
function T() {
    return [p(s.TVA.TIER_3, r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css), g(), h(), m()];
}
function y() {
    return [h(), d(), p(s.TVA.TIER_3), m()];
}
function S() {
    return [l(), f(), u(), m()];
}
function v() {
    return [f(), m()];
}
