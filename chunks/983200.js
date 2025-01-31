n.d(t, {
    $x: () => a,
    GV: () => s,
    S$: () => g,
    Vn: () => o,
    tu: () => m
});
var i = n(192379),
    l = n(31775),
    r = n.n(l);
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
                l = Math.ceil((t - i) / 2);
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
                    height: l
                },
                {
                    top: l + i,
                    left: n + i,
                    position: c,
                    width: n,
                    height: l
                }
            ];
        }
        {
            let n = Math.ceil((e - i) / 2),
                l = Math.ceil((t - i) / 2);
            return [
                {
                    top: 0,
                    left: 0,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: l + i,
                    left: 0,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: 0,
                    left: n + i,
                    position: c,
                    width: n,
                    height: l
                },
                {
                    top: l + i,
                    left: n + i,
                    position: c,
                    width: n,
                    height: l
                }
            ];
        }
    },
    u = new (r())({ max: 100 });
function m(e) {
    let { numAttachments: t, containerWidth: n, containerHeight: l } = e;
    return i.useMemo(
        () =>
            (function (e) {
                let { numAttachments: t, containerWidth: n, containerHeight: i } = e,
                    l = ''.concat(t, '-').concat(n, '-').concat(i),
                    r = u.get(l);
                if (null != r) return r;
                {
                    let e = d(n, i, t, 4);
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
        r = i.useRef(h(t)),
        a = i.useRef(n),
        s = i.useRef(l),
        o = n > a.current + 100,
        c = l > s.current + 100;
    return (o || c) && (r.current = h(t)), r.current;
}
