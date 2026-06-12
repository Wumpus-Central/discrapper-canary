function h(t) {
    let {
            image: e,
            cropDimensions: i,
            cropOriginCoordinates: h,
            maxDimensions: n,
            imageRotation: a = 0,
            flipHorizontal: r = !1,
        } = t,
        c = e.naturalWidth / e.width,
        d = (function (t, e) {
            let i,
                h,
                { x: n, y: a } = t,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            switch (e) {
                case 90:
                    (i = a), (h = -n);
                    break;
                case 180:
                    (i = -n), (h = -a);
                    break;
                case 270:
                    (i = -a), (h = n);
                    break;
                default:
                    (i = n), (h = a);
            }
            return { x: r ? -i : i, y: h };
        })(h, a, r),
        s = a % 180 != 0,
        u = i.width * c,
        l = i.height * c,
        g = Math.min(u, n.width),
        o = Math.min(l, n.height),
        w = (s ? i.height : i.width) / 2,
        x = (s ? i.width : i.height) / 2,
        y = (e.width / 2 - w - d.x) * c,
        p = (e.height / 2 - x - d.y) * c,
        f = s ? l : u,
        k = s ? u : l,
        { x: m, y: b } = (function (t, e, i) {
            let h = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (h)
                switch (i) {
                    case 0:
                        return { x: -t, y: 0 };
                    case 90:
                        return { x: -e, y: -t };
                    case 180:
                        return { x: 0, y: -e };
                    case 270:
                        return { x: 0, y: 0 };
                }
            else
                switch (i) {
                    case 0:
                        return { x: 0, y: 0 };
                    case 90:
                        return { x: 0, y: -t };
                    case 180:
                        return { x: -t, y: -e };
                    case 270:
                        return { x: -e, y: 0 };
                }
        })(u, l, a, r);
    return (
        n.width < u && (m *= n.width / u),
        n.height < l && (b *= n.height / l),
        {
            sourceX: y,
            sourceY: p,
            sourceWidth: f,
            sourceHeight: k,
            destinationX: m,
            destinationY: b,
            destinationWidth: s ? o : g,
            destinationHeight: s ? g : o,
            canvasWidth: g,
            canvasHeight: o,
        }
    );
}
function n(t) {
    let {
            image: e,
            cropDimensions: i,
            cropOriginCoordinates: n,
            maxDimensions: a,
            imageRotation: r = 0,
            flipHorizontal: c = !1,
        } = t,
        {
            sourceX: d,
            sourceY: s,
            sourceWidth: u,
            sourceHeight: l,
            destinationX: g,
            destinationY: o,
            destinationWidth: w,
            destinationHeight: x,
            canvasWidth: y,
            canvasHeight: p,
        } = h({
            image: e,
            cropDimensions: i,
            cropOriginCoordinates: n,
            maxDimensions: a,
            imageRotation: r,
            flipHorizontal: c,
        }),
        f = document.createElement("canvas");
    (f.width = y), (f.height = p);
    let k = f.getContext("2d");
    if (null != k) {
        c && k.scale(-1, 1);
        let t = c ? -r : r;
        k.rotate((t * Math.PI) / 180), k.drawImage(e, d, s, u, l, g, o, w, x);
    }
    return f.toDataURL("image/png");
}
function a(t, e, i) {
    let h = t.naturalWidth / t.naturalHeight,
        a = e,
        r = i;
    t.naturalWidth > t.naturalHeight ? (a /= h) : (r *= h);
    let c = { height: a, width: r };
    return n({
        image: t,
        cropDimensions: { width: t.width, height: t.height },
        cropOriginCoordinates: { x: 0, y: 0 },
        maxDimensions: c,
    });
}
i.d(e, { R7: () => h, h_: () => a, iL: () => n });
