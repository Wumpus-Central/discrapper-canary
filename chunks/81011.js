r.d(t, { Z: () => d });
var a = r(665352),
    n = r(629990),
    s = r(856308),
    o = r(186267),
    i = r(37484);
let c = n.mh.D65,
    l = 216 / 24389,
    u = 24389 / 27,
    [f, b] = (0, o.uv)({
        space: s.Z,
        coords: c
    }),
    d = new a.Z({
        id: 'luv',
        name: 'Luv',
        coords: {
            l: {
                refRange: [0, 100],
                name: 'Lightness'
            },
            u: {
                refRange: [-215, 215]
            },
            v: {
                refRange: [-215, 215]
            }
        },
        white: c,
        base: s.Z,
        fromBase(e) {
            let t = [(0, i.sI)(e[0]), (0, i.sI)(e[1]), (0, i.sI)(e[2])],
                r = t[1],
                [a, n] = (0, o.uv)({
                    space: s.Z,
                    coords: t
                });
            if (!Number.isFinite(a) || !Number.isFinite(n)) return [0, 0, 0];
            let c = r <= l ? u * r : 116 * Math.cbrt(r) - 16;
            return [c, 13 * c * (a - f), 13 * c * (n - b)];
        },
        toBase(e) {
            let [t, r, a] = e;
            if (0 === t || (0, i.Wi)(t)) return [0, 0, 0];
            (r = (0, i.sI)(r)), (a = (0, i.sI)(a));
            let n = r / (13 * t) + f,
                s = a / (13 * t) + b,
                o = t <= 8 ? t / u : Math.pow((t + 16) / 116, 3);
            return [((9 * n) / (4 * s)) * o, o, ((12 - 3 * n - 20 * s) / (4 * s)) * o];
        },
        formats: {
            color: {
                id: '--luv',
                coords: ['<number> | <percentage>', '<number> | <percentage>[-1,1]', '<number> | <percentage>[-1,1]']
            }
        }
    });
