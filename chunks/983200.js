n.d(t, {
    $x: () => a,
    GV: () => s,
    S$: () => g,
    Vn: () => o,
    tu: () => m
});
var i = n(192379),
    r = n(31775),
    l = n.n(r);
let a = 0,
    s = 4,
    o = 4,
    c = 'absolute',
    d = (e, t, n, i) => {
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
            let n = Math.ceil((e - i) / 2);
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
                    left: n + i,
                    position: c,
                    width: n,
                    height: t
                }
            ];
        }
        if (3 === n) {
            let n = Math.ceil((e - i) / 2),
                r = Math.ceil((t - i) / 2);
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
                    left: n + i,
                    position: c,
                    width: n,
                    height: r
                },
                {
                    top: r + i,
                    left: n + i,
                    position: c,
                    width: n,
                    height: r
                }
            ];
        }
        {
            let n = Math.ceil((e - i) / 2),
                r = Math.ceil((t - i) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: r
                },
                {
                    top: r + i,
                    left: 0,
                    position: c,
                    width: n,
                    height: r
                },
                {
                    top: 0,
                    left: n + i,
                    position: c,
                    width: n,
                    height: r
                },
                {
                    top: r + i,
                    left: n + i,
                    position: c,
                    width: n,
                    height: r
                }
            ];
        }
    },
    u = new (l())({ max: 100 });
function m(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: r } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: i } = e,
                    r = ''.concat(t, '-').concat(n, '-').concat(i),
                    l = u.get(r);
                if (null != l) return l;
                {
                    let e = d(n, i, t, 4);
                    return u.set(r, e), e;
                }
            })({
                numAttachments: t,
                containerWidth: n,
                containerHeight: r
            }),
        [t, n, r]
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
    let { imageContainerStyles: t, containerWidth: n, containerHeight: r } = e,
        l = i.useRef(h(t)),
        a = i.useRef(n),
        s = i.useRef(r),
        o = n > a.current + 100,
        c = r > s.current + 100;
    return (o || c) && (l.current = h(t)), l.current;
}
