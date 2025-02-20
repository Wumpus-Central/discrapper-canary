n.d(t, {
    $x: () => l,
    GV: () => s,
    S$: () => g,
    Vn: () => o,
    tu: () => m
});
var r = n(192379),
    a = n(31775),
    i = n.n(a);
let l = 0,
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
                a = Math.ceil((t - r) / 2);
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
                    height: a
                },
                {
                    top: a + r,
                    left: n + r,
                    position: c,
                    width: n,
                    height: a
                }
            ];
        }
        {
            let n = Math.ceil((e - r) / 2),
                a = Math.ceil((t - r) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: a
                },
                {
                    top: a + r,
                    left: 0,
                    position: c,
                    width: n,
                    height: a
                },
                {
                    top: 0,
                    left: n + r,
                    position: c,
                    width: n,
                    height: a
                },
                {
                    top: a + r,
                    left: n + r,
                    position: c,
                    width: n,
                    height: a
                }
            ];
        }
    },
    u = new (i())({ max: 100 });
function m(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: a } = e;
    return r.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: r } = e,
                    a = ''.concat(t, '-').concat(n, '-').concat(r),
                    i = u.get(a);
                if (null != i) return i;
                {
                    let e = d(n, r, t, 4);
                    return u.set(a, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: a
            }),
        [t, n, a]
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
    let { imageContainerStyles: t, containerWidth: n, containerHeight: a } = e,
        i = r.useRef(h(t)),
        l = r.useRef(n),
        s = r.useRef(a),
        o = n > l.current + 100,
        c = a > s.current + 100;
    return (o || c) && (i.current = h(t)), i.current;
}
