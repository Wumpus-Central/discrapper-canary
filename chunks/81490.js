n.d(t, { Z: () => c }), n(47120);
var r = n(192379),
    a = n(796075),
    i = n(481060);
let l = 'undefined' == typeof ResizeObserver ? a.d : ResizeObserver,
    s = new Map(),
    o = new l((e) => {
        e.forEach((e) => {
            var t;
            let { target: n } = e;
            null == (t = s.get(n)) || t(e);
        });
    }),
    c = () => {
        let e = r.useRef(null),
            [t, n] = r.useState(400),
            a = r.useCallback(() => {
                null !== e.current && n(e.current.clientWidth);
            }, [n, e]);
        return (
            (0, i.znF)({
                ref: e,
                key: 'forum-container',
                onUpdate: a,
                resizeObserver: o,
                listenerMap: s
            }),
            {
                containerRef: e,
                containerWidth: t
            }
        );
    };
