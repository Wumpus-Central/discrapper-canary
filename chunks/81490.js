n.d(t, { Z: () => c }), n(47120);
var i = n(192379),
    l = n(796075),
    r = n(481060);
let a = 'undefined' == typeof ResizeObserver ? l.d : ResizeObserver,
    s = new Map(),
    o = new a((e) => {
        e.forEach((e) => {
            var t;
            let { target: n } = e;
            null === (t = s.get(n)) || void 0 === t || t(e);
        });
    }),
    c = () => {
        let e = i.useRef(null),
            [t, n] = i.useState(400),
            l = i.useCallback(() => {
                null !== e.current && n(e.current.clientWidth);
            }, [n, e]);
        return (
            (0, r.znF)({
                ref: e,
                key: 'forum-container',
                onUpdate: l,
                resizeObserver: o,
                listenerMap: s
            }),
            {
                containerRef: e,
                containerWidth: t
            }
        );
    };
