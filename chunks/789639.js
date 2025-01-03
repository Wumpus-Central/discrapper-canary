n.d(t, {
    i: function () {
        return s;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    s = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            s = r.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: o
            },
            play: t,
            Component: r.useCallback(
                (t) =>
                    (0, i.jsx)(l.L, {
                        ...t,
                        src: () => n.e('2199').then(n.t.bind(n, 71307, 19)),
                        ref: e,
                        markers: a
                    }),
                []
            )
        };
    };
