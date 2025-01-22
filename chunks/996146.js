r.d(n, {
    $: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(709014);
let s = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    l = () => {
        let e = a.useRef(null),
            n = a.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            l = a.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            u = a.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onMouseEnter: l,
                onMouseLeave: u
            },
            play: n,
            Component: a.useCallback(
                (n) =>
                    (0, i.jsx)(o.L, {
                        ...n,
                        src: () => r.e('8286').then(r.t.bind(r, 893346, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
