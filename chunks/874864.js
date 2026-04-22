i.d(t, { $_: () => C, DU: () => R, Lp: () => T, Pf: () => w, QR: () => I, q5: () => N });
var r = i(827734),
    n = i(477262),
    s = i(391242),
    o = i(179866),
    l = i(797285),
    a = i(27232),
    c = i(460905),
    d = i(183623),
    _ = i(116891);
i(358431);
var u = i(776627),
    h = i(652215),
    p = i(788868),
    g = i(985018);
let m = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: e, icon: s.O, description: g.intl.string(g.t["94l3Ul"]) };
    },
    f = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: o.i,
        description: g.intl.string(g.t.zZe94m),
    }),
    A = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: e, icon: l.t, description: g.intl.string(g.t.ZwOSdn) };
    },
    E = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            i = 0,
            n = 0;
        switch (e) {
            case h.TVA.TIER_1:
                (i = 15), (n = 100);
                break;
            case h.TVA.TIER_2:
                (i = 30), (n = 150);
                break;
            case h.TVA.TIER_3:
                (i = 60), (n = 250);
        }
        return {
            color: t,
            icon: l.t,
            description: g.intl.formatToPlainString(g.t["12vFYK"], { numStickers: i, numEmojis: n }),
        };
    },
    v = () => ({
        color: r.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: a.G,
        description: g.intl.string(g.t["ThRK/u"]),
    }),
    b = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.intl.string(g.t.SQV8g6);
        return { color: r.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: c.n, description: e };
    },
    x = function () {
        let e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
            t = (0, _.eT)("GuildBoostingConstants"),
            i =
                t === _.fj
                    ? g.intl.string(g.t.oIKhwT)
                    : g.intl.formatToPlainString(g.t["7y2ina"], {
                          resolution: t,
                          framerate: p.TG[h.TVA.TIER_2].limits.screenShareQualityFramerate,
                      });
        return { color: e, icon: d.F, description: i };
    };
function C() {
    return [
        f(),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: n.s, description: g.intl.string(g.t["n/HqCh"]) },
        A(),
        b(),
    ];
}
function I() {
    return [f(), E(h.TVA.TIER_2), x(), b()];
}
function w() {
    return [
        E(h.TVA.TIER_3, r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: u.A, description: g.intl.string(g.t.Tm40TZ) },
        v(),
        b(),
    ];
}
function R() {
    return [
        v(),
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.O, description: g.intl.string(g.t.AU0zcQ) },
        E(h.TVA.TIER_3),
        b(),
    ];
}
function T() {
    return [
        { color: r.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: n.s, description: g.intl.string(g.t.iGuEFe) },
        A(),
        m(),
        b(),
    ];
}
function N() {
    return [A(), b()];
}
