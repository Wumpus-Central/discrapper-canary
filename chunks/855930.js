r.d(t, { Z: () => s });
var a = r(665352),
    n = r(216397);
let s = new a.Z({
    id: 'hsl',
    name: 'HSL',
    coords: {
        h: {
            refRange: [0, 360],
            type: 'angle',
            name: 'Hue'
        },
        s: {
            range: [0, 100],
            name: 'Saturation'
        },
        l: {
            range: [0, 100],
            name: 'Lightness'
        }
    },
    base: n.Z,
    fromBase: (e) => {
        let t = Math.max(...e),
            r = Math.min(...e),
            [a, n, s] = e,
            [o, i, c] = [NaN, 0, (r + t) / 2],
            l = t - r;
        if (0 !== l) {
            switch (((i = 0 === c || 1 === c ? 0 : (t - c) / Math.min(c, 1 - c)), t)) {
                case a:
                    o = (n - s) / l + 6 * (n < s);
                    break;
                case n:
                    o = (s - a) / l + 2;
                    break;
                case s:
                    o = (a - n) / l + 4;
            }
            o *= 60;
        }
        return i < 0 && ((o += 180), (i = Math.abs(i))), o >= 360 && (o -= 360), [o, 100 * i, 100 * c];
    },
    toBase: (e) => {
        let [t, r, a] = e;
        function n(e) {
            let n = (e + t / 30) % 12,
                s = r * Math.min(a, 1 - a);
            return a - s * Math.max(-1, Math.min(n - 3, 9 - n, 1));
        }
        return (t %= 360) < 0 && (t += 360), (r /= 100), (a /= 100), [n(0), n(8), n(4)];
    },
    formats: {
        hsl: {
            coords: ['<number> | <angle>', '<percentage>', '<percentage>']
        },
        hsla: {
            coords: ['<number> | <angle>', '<percentage>', '<percentage>'],
            commas: !0,
            lastAlpha: !0
        }
    }
});
