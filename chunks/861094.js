n.d(t, { t: () => i });
function i(e, t, n, i) {
    let l = (function (e, t, n) {
            function i(e) {
                let { x: i, y: l } = e;
                return { x: (i / 100) * t, y: (l / 100) * n };
            }
            return {
                topLeft: i(e.topLeft),
                topRight: i(e.topRight),
                bottomRight: i(e.bottomRight),
                bottomLeft: i(e.bottomLeft),
            };
        })(e, t, n),
        a = t / i;
    return {
        originX: e.topLeft.x,
        originY: e.topLeft.y,
        matrix: (function (e, t, n) {
            let { topLeft: i, topRight: l, bottomRight: a, bottomLeft: s } = e,
                r = l.x - i.x,
                o = l.y - i.y,
                c = a.x - i.x,
                d = a.y - i.y,
                u = s.x - i.x,
                h = s.y - i.y,
                p = r - c,
                m = u - c,
                f = -r + c - u,
                A = o - d,
                x = h - d,
                g = -o + d - h,
                C = 0,
                y = 0;
            if (0 !== f || 0 !== g) {
                let e = p * x - A * m;
                (C = (f * x - m * g) / e), (y = (p * g - A * f) / e);
            }
            let j = r + C * r,
                I = u + y * u,
                v = o + C * o,
                N = h + y * h,
                E = C / t,
                b = y / n;
            return `matrix3d(${[j / t, v / t, 0, E, I / n, N / n, 0, b, 0, 0, 1, 0, 0, 0, 0, 1].join(", ")})`;
        })(l, t, a),
    };
}
