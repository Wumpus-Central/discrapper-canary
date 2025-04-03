n.d(t, { Z: () => l }), n(47120), n(653041);
var r = n(200651),
    s = n(192379),
    o = n(668826),
    a = n(115092),
    i = n(647964);
function c(e, t, n) {
    return {
        x: Math.min(Math.random() * e, e - n),
        y: Math.min(Math.random() * (null != t ? t : 0), (null != t ? t : 0) - n)
    };
}
let l = (0, s.forwardRef)(function (e, t) {
    let { isPaused: n, itemId: l, points: u, chance: d, children: f, height: p, width: m, maxDrops: g = 100, dropPadding: b = 0, onPointsAdded: y } = e,
        [h, x] = (0, s.useState)([]),
        N = (0, s.useCallback)(() => {
            if (!(h.length >= g) && Math.random() <= d) {
                let e = [...h],
                    t = c(m, p, b);
                e.push(t), x([...e]);
            }
        }, [m, p, d, h, b, g]);
    (0, s.useEffect)(() => {
        h.forEach((e) => {
            let { x: t, y: n } = c(m, p, b);
            (e.x = t), (e.y = n);
        });
    }, [m, p, b]);
    let v = (0, s.useCallback)(() => {
        0 !== h.length && 0 !== u && ((0, o.KH)(l, h.length * u), null == y || y());
    }, [h.length, u, l, y]);
    (0, s.useImperativeHandle)(t, () => ({
        removeDrop(e) {
            let t = [...h];
            t.splice(e, 1), x(t);
        }
    }));
    let O = (0, s.useCallback)(() => {
        N(), v();
    }, [N, v]);
    return (
        (0, a.Z)({
            isPaused: n,
            onInterval: O,
            interval: 1000
        }),
        (0, r.jsx)('div', {
            className: i.container,
            children: h.map((e, t) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: i.drop,
                        style: {
                            top: e.y,
                            left: e.x
                        },
                        children: f(t)
                    },
                    t
                )
            )
        })
    );
});
