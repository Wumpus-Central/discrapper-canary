var a = r(665352),
    n = r(216397);
t.Z = new a.Z({
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
            [a, n, o] = e,
            [s, i, c] = [NaN, 0, (r + t) / 2],
            u = t - r;
        if (0 !== u) {
            switch (((i = 0 === c || 1 === c ? 0 : (t - c) / Math.min(c, 1 - c)), t)) {
                case a:
                    s = (n - o) / u + (n < o ? 6 : 0);
                    break;
                case n:
                    s = (o - a) / u + 2;
                    break;
                case o:
                    s = (a - n) / u + 4;
            }
            s *= 60;
        }
        return i < 0 && ((s += 180), (i = Math.abs(i))), s >= 360 && (s -= 360), [s, 100 * i, 100 * c];
    },
    toBase: (e) => {
        let [t, r, a] = e;
        function n(e) {
            let n = (e + t / 30) % 12,
                o = r * Math.min(a, 1 - a);
            return a - o * Math.max(-1, Math.min(n - 3, 9 - n, 1));
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
