e.d(t, {
    J: () => m,
});
var g = e(627968);
e(64700);
var r = e(602877),
    v = e(835265),
    f = e(249998),
    B = e(837570),
    h = e(124056),
    n = e(983685),
    l = e(987431),
    C = e(952796),
    w = e(124113),
    o = e(210748),
    Q = e(672116),
    i = e(824855),
    H = e(311940),
    s = e(253712),
    a = e(466041),
    D = e(116779),
    c = e(906425),
    M = e(598559),
    p = e(138939),
    b = e(909094),
    V = e(844004),
    E = e(376254),
    P = e(836218),
    d = e(167160),
    y = e(496108),
    I = e(104971),
    j = e(843606),
    O = e(370960),
    Z = e(61835),
    u = e(947043),
    x = e(32719),
    L = e(743981);

function X(A) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {},
            g = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols &&
            (g = g.concat(
                Object.getOwnPropertySymbols(e).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(e, A).enumerable;
                }),
            )),
            g.forEach(function (t) {
                var g;
                (g = e[t]),
                    t in A
                        ? Object.defineProperty(A, t, {
                              value: g,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[t] = g);
            });
    }
    return A;
}
let m = (A) => {
    let { badge: t, primaryTintColor: e, secondaryTintColor: m } = A,
        G = (function (A, t) {
            if (null == A) return {};
            var e,
                g,
                r,
                v = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, e = Reflect.ownKeys(A); r < e.length; r++)
                    (g = e[r]),
                        !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
                return v;
            }
            if (
                ((v = (function (A, t) {
                    if (null == A) return {};
                    var e,
                        g,
                        r = {},
                        v = Object.getOwnPropertyNames(A);
                    for (g = 0; g < v.length; g++)
                        (e = v[g]),
                            !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (r[e] = A[e]);
                    return r;
                })(A, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, e = Object.getOwnPropertySymbols(A); r < e.length; r++)
                    (g = e[r]),
                        !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
            return v;
        })(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
    switch (t) {
        case L.bl.SWORD:
            return (0, g.jsx)(
                j.w,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.WATER_DROP:
            return (0, g.jsx)(
                u.l,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.SKULL:
            return (0, g.jsx)(
                E.I,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.TOADSTOOL:
            return (0, g.jsx)(
                O.Y,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.MOON:
            return (0, g.jsx)(
                b.o,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.LIGHTNING:
            return (0, g.jsx)(
                M.v,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.LEAF:
            return (0, g.jsx)(
                c.V,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.HEART:
            return (0, g.jsx)(
                a.b,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.FIRE:
            return (0, g.jsx)(
                w.f,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.COMPASS:
            return (0, g.jsx)(
                f.L,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.CROSSHAIRS:
            return (0, g.jsx)(
                B.W,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.FLOWER:
            return (0, g.jsx)(
                o.o,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.FORCE:
            return (0, g.jsx)(
                Q._,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.GEM:
            return (0, g.jsx)(
                H.q,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.LAVA:
            return (0, g.jsx)(
                D.j,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.PSYCHIC:
            return (0, g.jsx)(
                V.c,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.SMOKE:
            return (0, g.jsx)(
                P.O,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.SNOW:
            return (0, g.jsx)(
                d.W,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.SOUND:
            return (0, g.jsx)(
                y.I,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.SUN:
            return (0, g.jsx)(
                I.Z,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.WIND:
            return (0, g.jsx)(
                x.D,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.BUNNY:
            return (0, g.jsx)(
                r.J,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.DOG:
            return (0, g.jsx)(
                l.R,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.FROG:
            return (0, g.jsx)(
                i.D,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.GOAT:
            return (0, g.jsx)(
                s.A,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.CAT:
            return (0, g.jsx)(
                v.r,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.DIAMOND:
            return (0, g.jsx)(
                n.$,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.CROWN:
            return (0, g.jsx)(
                h.i,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m,
                    },
                    G,
                ),
            );
        case L.bl.TROPHY:
            return (0, g.jsx)(
                Z.r,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.MONEY_BAG:
            return (0, g.jsx)(
                p.x,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
        case L.bl.DOLLAR_SIGN:
            return (0, g.jsx)(
                C.u,
                X(
                    {
                        primaryTintColor: e,
                    },
                    G,
                ),
            );
    }
    return null;
};
