i.d(t, { $_: () => w, DU: () => T, Lp: () => R, Pf: () => C, QR: () => I, q5: () => N });
var n = i(661531),
    r = i(477262),
    s = i(391242),
    l = i(179866),
    a = i(797285),
    o = i(27232),
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
                : n.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return { color: e, icon: s.O, description: g.intl.string(g.t["94l3Ul"]) };
    },
    f = () => ({
        color: n.A.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: l.i,
        description: g.intl.string(g.t.zZe94m),
    }),
    v = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : n.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return { color: e, icon: a.t, description: g.intl.string(g.t.ZwOSdn) };
    },
    A = function (e) {
        let t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : n.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            i = 0,
            r = 0;
        switch (e) {
            case h.TVA.TIER_1:
                (i = 15), (r = 100);
                break;
            case h.TVA.TIER_2:
                (i = 30), (r = 150);
                break;
            case h.TVA.TIER_3:
                (i = 60), (r = 250);
        }
        return {
            color: t,
            icon: a.t,
            description: g.intl.formatToPlainString(g.t["12vFYK"], { numStickers: i, numEmojis: r }),
        };
    },
    b = () => ({
        color: n.A.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: o.G,
        description: g.intl.string(g.t["ThRK/u"]),
    }),
    E = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.intl.string(g.t.SQV8g6);
        return { color: n.A.unsafe_rawColors.PREMIUM_PERK_BLUE.css, icon: c.n, description: e };
    },
    x = function () {
        let e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : n.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
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
function w() {
    return [
        f(),
        { color: n.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.s, description: g.intl.string(g.t["n/HqCh"]) },
        v(),
        E(),
    ];
}
function I() {
    return [f(), A(h.TVA.TIER_2), x(), E()];
}
function C() {
    return [
        A(h.TVA.TIER_3, n.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css),
        { color: n.A.unsafe_rawColors.PREMIUM_PERK_PURPLE.css, icon: u.A, description: g.intl.string(g.t.Tm40TZ) },
        b(),
        E(),
    ];
}
function T() {
    return [
        b(),
        { color: n.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: s.O, description: g.intl.string(g.t.AU0zcQ) },
        A(h.TVA.TIER_3),
        E(),
    ];
}
function R() {
    return [
        { color: n.A.unsafe_rawColors.PREMIUM_PERK_GREEN.css, icon: r.s, description: g.intl.string(g.t.iGuEFe) },
        v(),
        m(),
        E(),
    ];
}
function N() {
    return [v(), E()];
}
