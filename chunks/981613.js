r.d(t, { Z: () => o });
var a = r(665352),
    n = r(762399),
    s = r(656653);
let o = new a.Z({
    id: 'oklch',
    name: 'Oklch',
    coords: {
        l: {
            refRange: [0, 1],
            name: 'Lightness'
        },
        c: {
            refRange: [0, 0.4],
            name: 'Chroma'
        },
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        }
    },
    white: 'D65',
    base: n.Z,
    fromBase(e) {
        let t,
            [r, a, n] = e;
        return (t = 0.0002 > Math.abs(a) && 0.0002 > Math.abs(n) ? NaN : (180 * Math.atan2(n, a)) / Math.PI), [r, Math.sqrt(a ** 2 + n ** 2), (0, s.j)(t)];
    },
    toBase(e) {
        let t,
            r,
            [a, n, s] = e;
        return isNaN(s) ? ((t = 0), (r = 0)) : ((t = n * Math.cos((s * Math.PI) / 180)), (r = n * Math.sin((s * Math.PI) / 180))), [a, t, r];
    },
    formats: {
        oklch: {
            coords: ['<percentage> | <number>', '<number> | <percentage>[0,1]', '<number> | <angle>']
        }
    }
});
