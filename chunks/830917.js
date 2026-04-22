function i(e) {
    let {
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: l,
            imageRotation: s = 0,
            flipHorizontal: r = !1,
        } = e,
        a = t.naturalWidth / t.width,
        o = (function (e, t) {
            let n,
                i,
                { x: l, y: s } = e,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            switch (t) {
                case 90:
                    (n = s), (i = -l);
                    break;
                case 180:
                    (n = -l), (i = -s);
                    break;
                case 270:
                    (n = -s), (i = l);
                    break;
                default:
                    (n = l), (i = s);
            }
            return { x: r ? -n : n, y: i };
        })(i, s, r),
        d = s % 180 != 0,
        c = n.width * a,
        u = n.height * a,
        m = Math.min(c, l.width),
        g = Math.min(u, l.height),
        h = (d ? n.height : n.width) / 2,
        x = (d ? n.width : n.height) / 2,
        _ = (t.width / 2 - h - o.x) * a,
        p = (t.height / 2 - x - o.y) * a,
        A = d ? u : c,
        E = d ? c : u,
        { x: f, y: j } = (function (e, t, n) {
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
        })(c, u, s, r);
    return (
        l.width < c && (f *= l.width / c),
        l.height < u && (j *= l.height / u),
        {
            sourceX: _,
            sourceY: p,
            sourceWidth: A,
            sourceHeight: E,
            destinationX: f,
            destinationY: j,
            destinationWidth: d ? g : m,
            destinationHeight: d ? m : g,
            canvasWidth: m,
            canvasHeight: g,
        }
    );
}
function l(e) {
    let {
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: l,
            maxDimensions: s,
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
            destinationWidth: h,
            destinationHeight: x,
            canvasWidth: _,
            canvasHeight: p,
        } = i({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: l,
            maxDimensions: s,
            imageRotation: r,
            flipHorizontal: a,
        }),
        A = document.createElement("canvas");
    (A.width = _), (A.height = p);
    let E = A.getContext("2d");
    if (null != E) {
        a && E.scale(-1, 1);
        let e = a ? -r : r;
        E.rotate((e * Math.PI) / 180), E.drawImage(t, o, d, c, u, m, g, h, x);
    }
    return A.toDataURL("image/png");
}
function s(e, t, n) {
    let i = e.naturalWidth / e.naturalHeight,
        s = t,
        r = n;
    e.naturalWidth > e.naturalHeight ? (s /= i) : (r *= i);
    let a = { height: s, width: r };
    return l({
        image: e,
        cropDimensions: { width: e.width, height: e.height },
        cropOriginCoordinates: { x: 0, y: 0 },
        maxDimensions: a,
    });
}
n.d(t, { R7: () => i, h_: () => s, iL: () => l });
