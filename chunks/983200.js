n.d(t, {
    $x: () => a,
    GV: () => s,
    S$: () => g,
    Vn: () => o,
    tu: () => m
});
var r = n(73800),
    l = n(31775),
    i = n.n(l);
let a = 0,
    s = 4,
    o = 4,
    c = 'absolute',
    d = (e, t, n, r) => {
        if (0 === n) return [];
        if (1 === n)
            return [
                {
                    width: e,
                    height: t,
                    top: 0,
                    left: 0,
                    position: c
                }
            ];
        if (2 === n) {
            let n = Math.ceil((e - r) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: t
                },
                {
                    top: 0,
                    left: n + r,
                    position: c,
                    width: n,
                    height: t
                }
            ];
        }
        if (3 === n) {
            let n = Math.ceil((e - r) / 2),
                l = Math.ceil((t - r) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: t
                },
                {
                    top: 0,
                    left: n + r,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: l + r,
                    left: n + r,
                    position: c,
                    width: n,
                    height: l
                }
            ];
        }
        {
            let n = Math.ceil((e - r) / 2),
                l = Math.ceil((t - r) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: l + r,
                    left: 0,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: 0,
                    left: n + r,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: l + r,
                    left: n + r,
                    position: c,
                    width: n,
                    height: l
                }
            ];
        }
    },
    u = new (i())({ max: 100 });
function m(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return r.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: r } = e,
                    l = ''.concat(t, '-').concat(n, '-').concat(r),
                    i = u.get(l);
                if (null != i) return i;
                {
                    let e = d(n, r, t, 4);
                    return u.set(l, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: l
            }),
        [t, n, l]
    );
}
function h(e) {
    return e.map((t, n) => ({
        minWidth: 2 * e[n].width,
        minHeight: 2 * e[n].height,
        maxWidth: 2 * e[n].width,
        maxHeight: 2 * e[n].height
    }));
}
function g(e) {
    let { imageContainerStyles: t, containerWidth: n, containerHeight: l } = e,
        i = r.useRef(h(t)),
        a = r.useRef(n),
        s = r.useRef(l),
        o = n > a.current + 100,
        c = l > s.current + 100;
    return (o || c) && (i.current = h(t)), i.current;
}
