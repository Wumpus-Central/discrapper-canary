n.d(t, { i: () => s });
var i = n(200651),
    l = n(192379),
    r = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    s = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            s = l.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []);
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: l.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('all');
                }, [])
            },
            play: t,
            Component: l.useCallback(
                (t) =>
                    (0, i.jsx)(r.L, {
                        ...t,
                        src: () => n.e('2199').then(n.t.bind(n, 71307, 19)),
                        ref: e,
                        markers: a
                    }),
                []
            )
        };
    };
