var i = n(477900),
    s = n(582128),
    a = n(559106),
    r = n(976860),
    l = n(650583);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    href: t,
                    children: n,
                    onClick: o,
                    onKeyPress: u,
                    focusProps: c,
                    transitionExtras: d,
                    ref: E,
                    ..._
                } = e,
                C = s.useCallback(
                    (e) => {
                        e.repeat ||
                            ((e.key === l.dh.SPACE || e.key === l.dh.ENTER) &&
                                (e.preventDefault(), null != t && (0, r.pX)(t, d), o?.()),
                            u?.(e));
                    },
                    [t, u, o, d],
                ),
                f = s.useCallback(
                    (e) => {
                        e.metaKey ||
                            e.shiftKey ||
                            0 !== e.button ||
                            (e.preventDefault(), e.stopPropagation(), null != t && (0, r.pX)(t, d), o?.());
                    },
                    [t, o, d],
                ),
                T = (0, i.jsx)("a", { ref: E, href: t, onClick: f, onKeyPress: C, ..._, children: n });
            return (0, i.jsx)(a.vN, { ...c, children: T });
        },
    },
);
