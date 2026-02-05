"use strict";
function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: s, imageRotation: l = 0 } = e,
        r = t.naturalWidth / t.width,
        a = (function (e, t) {
            let { x: n, y: i } = e;
            switch (t) {
                case 90:
                    return { x: i, y: -n };
                case 180:
                    return { x: -n, y: -i };
                case 270:
                    return { x: -i, y: n };
                default:
                    return { x: n, y: i };
            }
        })(i, l),
        o = l % 180 != 0,
        d = n.width * r,
        c = n.height * r,
        u = Math.min(d, s.width),
        m = Math.min(c, s.height),
        g = (o ? n.height : n.width) / 2,
        x = (o ? n.width : n.height) / 2,
        h = (t.width / 2 - g - a.x) * r,
        _ = (t.height / 2 - x - a.y) * r,
        A = o ? c : d,
        p = o ? d : c,
        { x: f, y: j } = (function (e, t, n) {
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
        })(d, c, l);
    return (
        s.width < d && (f *= s.width / d),
        s.height < c && (j *= s.height / c),
        {
            sourceX: h,
            sourceY: _,
            sourceWidth: A,
            sourceHeight: p,
            destinationX: f,
            destinationY: j,
            destinationWidth: o ? m : u,
            destinationHeight: o ? u : m,
            canvasWidth: u,
            canvasHeight: m,
        }
    );
}
function s(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: s, maxDimensions: l, imageRotation: r = 0 } = e,
        {
            sourceX: a,
            sourceY: o,
            sourceWidth: d,
            sourceHeight: c,
            destinationX: u,
            destinationY: m,
            destinationWidth: g,
            destinationHeight: x,
            canvasWidth: h,
            canvasHeight: _,
        } = i({ image: t, cropDimensions: n, cropOriginCoordinates: s, maxDimensions: l, imageRotation: r }),
        A = document.createElement("canvas");
    (A.width = h), (A.height = _);
    let p = A.getContext("2d");
    return (
        null != p && (p.rotate((r * Math.PI) / 180), p.drawImage(t, a, o, d, c, u, m, g, x)), A.toDataURL("image/png")
    );
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
