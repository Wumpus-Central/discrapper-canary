function r(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: r, maxDimensions: i, imageRotation: l = 0 } = e,
        s = t.naturalWidth / t.width,
        a = (function (e, t) {
            let { x: n, y: r } = e;
            switch (t) {
                case 90:
                    return {
                        x: r,
                        y: -n,
                    };
                case 180:
                    return {
                        x: -n,
                        y: -r,
                    };
                case 270:
                    return {
                        x: -r,
                        y: n,
                    };
                default:
                    return {
                        x: n,
                        y: r,
                    };
            }
        })(r, l),
        c = l % 180 != 0,
        o = n.width * s,
        d = n.height * s,
        u = Math.min(o, i.width),
        f = Math.min(d, i.height),
        g = (c ? n.height : n.width) / 2,
        b = (c ? n.width : n.height) / 2,
        m = (t.width / 2 - g - a.x) * s,
        p = (t.height / 2 - b - a.y) * s,
        x = c ? d : o,
        h = c ? o : d,
        { x: j, y: O } = (function (e, t, n) {
            switch (n) {
                case 0:
                    return {
                        x: 0,
                        y: 0,
                    };
                case 90:
                    return {
                        x: 0,
                        y: -e,
                    };
                case 180:
                    return {
                        x: -e,
                        y: -t,
                    };
                case 270:
                    return {
                        x: -t,
                        y: 0,
                    };
            }
        })(o, d, l);
    return (
        i.width < o && (j *= i.width / o),
        i.height < d && (O *= i.height / d),
        {
            sourceX: m,
            sourceY: p,
            sourceWidth: x,
            sourceHeight: h,
            destinationX: j,
            destinationY: O,
            destinationWidth: c ? f : u,
            destinationHeight: c ? u : f,
            canvasWidth: u,
            canvasHeight: f,
        }
    );
}

function i(e) {
    let { image: t, cropDimensions: n, cropOriginCoordinates: i, maxDimensions: l, imageRotation: s = 0 } = e,
        {
            sourceX: a,
            sourceY: c,
            sourceWidth: o,
            sourceHeight: d,
            destinationX: u,
            destinationY: f,
            destinationWidth: g,
            destinationHeight: b,
            canvasWidth: m,
            canvasHeight: p,
        } = r({
            image: t,
            cropDimensions: n,
            cropOriginCoordinates: i,
            maxDimensions: l,
            imageRotation: s,
        }),
        x = document.createElement("canvas");
    (x.width = m), (x.height = p);
    let h = x.getContext("2d");
    return (
        null != h && (h.rotate((s * Math.PI) / 180), h.drawImage(t, a, c, o, d, u, f, g, b)), x.toDataURL("image/png")
    );
}

function l(e, t, n) {
    let r = e.naturalWidth / e.naturalHeight,
        l = t,
        s = n;
    e.naturalWidth > e.naturalHeight ? (l /= r) : (s *= r);
    let a = {
        height: l,
        width: s,
    };
    return i({
        image: e,
        cropDimensions: {
            width: e.width,
            height: e.height,
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0,
        },
        maxDimensions: a,
    });
}
n.d(t, {
    R7: () => r,
    h_: () => l,
    iL: () => i,
});
