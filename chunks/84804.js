var l = n(477900),
    i = n(582128),
    a = n(451988),
    r = n(265872);
function s(e) {
    e.stopPropagation();
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { renderPopout: t, children: n, childWrapperClassName: o } = e,
                u = i.useRef(null),
                [c, d] = i.useState(!1),
                m = i.useRef(
                    new a.J_(50, () => {
                        d(!0);
                    }),
                ),
                A = i.useRef(
                    new a.J_(175, () => {
                        d(!1);
                    }),
                );
            i.useEffect(() => {
                let e = m.current,
                    t = A.current;
                return () => {
                    (e.cancel(), t.cancel());
                };
            }, []);
            let p = i.useCallback(() => {
                    (A.current.cancel(), m.current.delay());
                }, []),
                h = i.useCallback(() => {
                    (m.current.cancel(), A.current.delay());
                }, []),
                f = i.useCallback(() => {
                    (m.current.cancel(), d(!1));
                }, []);
            return (0, l.jsx)(r.Y, {
                targetElementRef: u,
                animation: r.Y.Animation.TRANSLATE,
                shouldShow: c,
                onRequestClose: f,
                renderPopout: () =>
                    (0, l.jsx)("div", { onMouseEnter: p, onMouseLeave: h, onClick: s, onKeyPress: s, children: t() }),
                children: () =>
                    (0, l.jsx)("div", { className: o, ref: u, onMouseEnter: p, onMouseLeave: h, children: n }),
            });
        },
    },
);
