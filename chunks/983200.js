n.d(t, {
    $x: () => l,
    GV: () => s,
    S$: () => h,
    Vn: () => o,
    tu: () => u,
});
var r = n(473749),
    i = n(31775),
    a = n.n(i);
let l = 0,
    s = 4,
    o = 4,
    c = "absolute",
    d = new (a())({ max: 100 });
function u(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: i } = e;
    return r.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: r } = e,
                    i = "".concat(t, "-").concat(n, "-").concat(r),
                    a = d.get(i);
                if (null != a) return a;
                {
                    let e = ((e, t, n, r) => {
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
                            let n = Math.ceil((e - r) / 2);
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
                                    left: n + r,
                                    position: c,
                                    width: n,
                                    height: t,
                                },
                            ];
                        }
                        if (3 === n) {
                            let n = Math.ceil((e - r) / 2),
                                i = Math.ceil((t - r) / 2);
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
                                    left: n + r,
                                    position: c,
                                    width: n,
                                    height: i,
                                },
                                {
                                    top: i + r,
                                    left: n + r,
                                    position: c,
                                    width: n,
                                    height: i,
                                },
                            ];
                        }
                        {
                            let n = Math.ceil((e - r) / 2),
                                i = Math.ceil((t - r) / 2);
                            return [
                                {
                                    top: 0,
                                    left: 0,
                                    position: c,
                                    width: n,
                                    height: i,
                                },
                                {
                                    top: i + r,
                                    left: 0,
                                    position: c,
                                    width: n,
                                    height: i,
                                },
                                {
                                    top: 0,
                                    left: n + r,
                                    position: c,
                                    width: n,
                                    height: i,
                                },
                                {
                                    top: i + r,
                                    left: n + r,
                                    position: c,
                                    width: n,
                                    height: i,
                                },
                            ];
                        }
                    })(n, r, t, 4);
                    return d.set(i, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: i,
            }),
        [t, n, i],
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
function h(e) {
    let { imageContainerStyles: t, containerWidth: n, containerHeight: i } = e,
        a = r.useRef(m(t)),
        l = r.useRef(n),
        s = r.useRef(i),
        o = n > l.current + 100,
        c = i > s.current + 100;
    return (o || c) && (a.current = m(t)), a.current;
}
