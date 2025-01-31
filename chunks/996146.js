n.d(t, { $: () => o });
var i = n(200651),
    r = n(192379),
    a = n(709014);
let s = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    o = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []);
        return {
            events: {
                onMouseEnter: o,
                onMouseLeave: r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('all');
                }, [])
            },
            play: t,
            Component: r.useCallback(
                (t) =>
                    (0, i.jsx)(a.L, {
                        ...t,
                        src: () => n.e('8286').then(n.t.bind(n, 893346, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
