r.d(t, { Z: () => o });
var a = r(665352),
    n = r(20450),
    s = r(656653);
let o = new a.Z({
    id: 'jzczhz',
    name: 'JzCzHz',
    coords: {
        jz: {
            refRange: [0, 1],
            name: 'Jz'
        },
        cz: {
            refRange: [0, 1],
            name: 'Chroma'
        },
        hz: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        }
    },
    base: n.Z,
    fromBase(e) {
        let t,
            [r, a, n] = e;
        return (t = 0.0002 > Math.abs(a) && 0.0002 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI), [r, Math.sqrt(a ** 2 + n ** 2), (0, s.j)(t)];
    },
    toBase: (e) => [e[0], e[1] * Math.cos((e[2] * Math.PI) / 180), e[1] * Math.sin((e[2] * Math.PI) / 180)]
});
