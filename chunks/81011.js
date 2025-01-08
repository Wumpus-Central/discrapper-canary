var a = r(665352),
    n = r(629990),
    o = r(856308),
    s = r(186267),
    i = r(37484);
let c = n.mh.D65,
    u = 216 / 24389,
    l = 24389 / 27,
    [f, b] = (0, s.uv)({
        space: o.Z,
        coords: c
    });
t.Z = new a.Z({
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
    base: o.Z,
    fromBase(e) {
        let t = [(0, i.sI)(e[0]), (0, i.sI)(e[1]), (0, i.sI)(e[2])],
            r = t[1],
            [a, n] = (0, s.uv)({
                space: o.Z,
                coords: t
            });
        if (!Number.isFinite(a) || !Number.isFinite(n)) return [0, 0, 0];
        let c = r <= u ? l * r : 116 * Math.cbrt(r) - 16;
        return [c, 13 * c * (a - f), 13 * c * (n - b)];
    },
    toBase(e) {
        let [t, r, a] = e;
        if (0 === t || (0, i.Wi)(t)) return [0, 0, 0];
        (r = (0, i.sI)(r)), (a = (0, i.sI)(a));
        let n = r / (13 * t) + f,
            o = a / (13 * t) + b,
            s = t <= 8 ? t / l : Math.pow((t + 16) / 116, 3);
        return [((9 * n) / (4 * o)) * s, s, ((12 - 3 * n - 20 * o) / (4 * o)) * s];
    },
    formats: {
        color: {
            id: '--luv',
            coords: ['<number> | <percentage>', '<number> | <percentage>[-1,1]', '<number> | <percentage>[-1,1]']
        }
    }
});
