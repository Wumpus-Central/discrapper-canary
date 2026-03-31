"use strict";
function i(e) {
    let {
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: s,
            imageRotation: l = 0,
            flipHorizontal: r = !1,
        } = e,
        a = t.naturalWidth / t.width,
        o = (function (e, t) {
            let n,
                i,
                { x: s, y: l } = e,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            switch (t) {
                case 90:
                    (n = l), (i = -s);
                    break;
                case 180:
                    (n = -s), (i = -l);
                    break;
                case 270:
                    (n = -l), (i = s);
                    break;
                default:
                    (n = s), (i = l);
            }
            return { x: r ? -n : n, y: i };
        })(i, l, r),
        d = l % 180 != 0,
        c = n.width * a,
        u = n.height * a,
        m = Math.min(c, s.width),
        g = Math.min(u, s.height),
        x = (d ? n.height : n.width) / 2,
        h = (d ? n.width : n.height) / 2,
        _ = (t.width / 2 - x - o.x) * a,
        p = (t.height / 2 - h - o.y) * a,
        A = d ? u : c,
        f = d ? c : u,
        { x: j, y: N } = (function (e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (i)
                switch (n) {
                    case 0:
                        return { x: -e, y: 0 };
                    case 90:
                        return { x: -t, y: -e };
                    case 180:
                        return { x: 0, y: -t };
                    case 270:
                        return { x: 0, y: 0 };
                }
            else
                switch (n) {
                    case 0:
                        return { x: 0, y: 0 };
                    case 90:
                        return { x: 0, y: -e };
                    case 180:
                        return { x: -e, y: -t };
                    case 270:
                        return { x: -t, y: 0 };
                }
        })(c, u, l, r);
    return (
        s.width < c && (j *= s.width / c),
        s.height < u && (N *= s.height / u),
        {
            sourceX: _,
            sourceY: p,
            sourceWidth: A,
            sourceHeight: f,
            destinationX: j,
            destinationY: N,
            destinationWidth: d ? g : m,
            destinationHeight: d ? m : g,
            canvasWidth: m,
            canvasHeight: g,
        }
    );
}
function s(e) {
    let {
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: r = 0,
            flipHorizontal: a = !1,
        } = e,
        {
            sourceX: o,
            sourceY: d,
            sourceWidth: c,
            sourceHeight: u,
            destinationX: m,
            destinationY: g,
            destinationWidth: x,
            destinationHeight: h,
            canvasWidth: _,
            canvasHeight: p,
        } = i({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: s,
            maxDimensions: l,
            imageRotation: r,
            flipHorizontal: a,
        }),
        A = document.createElement("canvas");
    (A.width = _), (A.height = p);
    let f = A.getContext("2d");
    if (null != f) {
        a && f.scale(-1, 1);
        let e = a ? -r : r;
        f.rotate((e * Math.PI) / 180), f.drawImage(t, o, d, c, u, m, g, x, h);
    }
    return A.toDataURL("image/png");
}
function l(e, t, n) {
    let i = e.naturalWidth / e.naturalHeight,
        l = t,
        r = n;
    e.naturalWidth > e.naturalHeight ? (l /= i) : (r *= i);
    let a = { height: l, width: r };
    return s({
        image: e,
        cropDimensions: { width: e.width, height: e.height },
        cropOriginCoordinates: { x: 0, y: 0 },
        maxDimensions: a,
    });
}
n.d(t, { R7: () => i, h_: () => l, iL: () => s });
