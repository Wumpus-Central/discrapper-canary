r.d(n, {
    P: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(709014);
let s = {
        enable: {
            name: 'enable',
            start: 0,
            duration: 70
        },
        disable: {
            name: 'disable',
            start: 90,
            duration: 70
        },
        hover_enabled: {
            name: 'hover_enabled',
            start: 180,
            duration: 40
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 240,
            duration: 40
        }
    },
    l = (e) => {
        let n = a.useRef(null),
            l = a.useRef(e);
        l.current = e;
        let u = a.useMemo(
                () => () => {
                    null != n.current && n.current.play(e);
                },
                [e]
            ),
            c = a.useCallback(() => {
                if (null == n.current) return;
                let r = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                n.current.play(r);
            }, [e]),
            d = a.useCallback(() => {
                if (null == n.current) return;
                let r = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                n.current.stopIfPlaying(r);
            }, [e]);
        return {
            events: {
                onClick: u,
                onMouseEnter: c,
                onMouseLeave: d
            },
            play: u,
            Component: a.useCallback(
                (e) =>
                    (0, i.jsx)(o.L, {
                        ...e,
                        src: () => r.e('59682').then(r.t.bind(r, 126683, 19)),
                        ref: n,
                        initialAnimation: l.current,
                        markers: s
                    }),
                []
            )
        };
    };
