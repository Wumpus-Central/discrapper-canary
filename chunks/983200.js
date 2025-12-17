n.d(t, {
    $x: () => l,
    GV: () => s,
    S$: () => f,
    Vn: () => o,
    tu: () => u,
});
var a = n(473749),
    r = n(31775),
    i = n.n(r);
let l = 0,
    s = 4,
    o = 4,
    c = "absolute",
    d = new (i())({ max: 100 });
function u(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: r } = e;
    return a.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: a } = e,
                    r = "".concat(t, "-").concat(n, "-").concat(a),
                    i = d.get(r);
                if (null != i) return i;
                {
                    let e = ((e, t, n, a) => {
                        if (0 === n) return [];
                        if (1 === n)
                            return [
                                {
                                    width: e,
                                    height: t,
                                    top: 0,
                                    left: 0,
                                    position: c,
                                },
                            ];
                        if (2 === n) {
                            let n = Math.ceil((e - a) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: c,
                                    width: n,
                                    height: t,
                                },
                                {
                                    top: 0,
                                    left: n + a,
                                    position: c,
                                    width: n,
                                    height: t,
                                },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - a) / 2),
                                r = Math.ceil((t - a) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: c,
                                    width: n,
                                    height: t,
                                },
                                {
                                    top: 0,
                                    left: n + a,
                                    position: c,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: r + a,
                                    left: n + a,
                                    position: c,
                                    width: n,
                                    height: r,
                                },
                            ];
                        }
                        {
                            let n = Math.ceil((e - a) / 2),
                                r = Math.ceil((t - a) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: c,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: r + a,
                                    left: 0,
                                    position: c,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: 0,
                                    left: n + a,
                                    position: c,
                                    width: n,
                                    height: r,
                                },
                                {
                                    top: r + a,
                                    left: n + a,
                                    position: c,
                                    width: n,
                                    height: r,
                                },
                            ];
                        }
                    })(n, a, t, 4);
                    return d.set(r, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: r,
            }),
        [t, n, r],
    );
}
function m(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height,
    }));
}
function f(e) {
    let { imageContainerStyles: t, containerWidth: n, containerHeight: r } = e,
        i = a.useRef(m(t)),
        l = a.useRef(n),
        s = a.useRef(r),
        o = n > l.current + 100,
        c = r > s.current + 100;
    return (o || c) && (i.current = m(t)), i.current;
}
