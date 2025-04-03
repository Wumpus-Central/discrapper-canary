r.d(t, { Z: () => u });
var a = r(665352),
    n = r(629990),
    s = r(856308);
let o = 216 / 24389,
    i = 24 / 116,
    c = 24389 / 27,
    l = n.mh.D65,
    u = new a.Z({
        id: 'lab-d65',
        name: 'Lab D65',
        coords: {
            l: {
                refRange: [0, 100],
                name: 'Lightness'
            },
            a: {
                refRange: [-125, 125]
            },
            b: {
                refRange: [-125, 125]
            }
        },
        white: l,
        base: s.Z,
        fromBase(e) {
            let t = e.map((e, t) => e / l[t]).map((e) => (e > o ? Math.cbrt(e) : (c * e + 16) / 116));
            return [116 * t[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])];
        },
        toBase(e) {
            let t = [];
            return (t[1] = (e[0] + 16) / 116), (t[0] = e[1] / 500 + t[1]), (t[2] = t[1] - e[2] / 200), [t[0] > i ? Math.pow(t[0], 3) : (116 * t[0] - 16) / c, e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / c, t[2] > i ? Math.pow(t[2], 3) : (116 * t[2] - 16) / c].map((e, t) => e * l[t]);
        },
        formats: {
            'lab-d65': {
                coords: ['<number> | <percentage>', '<number> | <percentage>[-1,1]', '<number> | <percentage>[-1,1]']
            }
        }
    });
