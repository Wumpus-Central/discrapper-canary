n.d(t, { A: () => o });
var a = n(627968),
    l = n(64700),
    i = n(432022),
    r = n(568329),
    s = n(963713);
function o() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: o,
        } = l.useContext(r.PW),
        { isExpanded: c } = l.useContext(s.T);
    return (
        l.useEffect(() => {
            n();
        }, [n, c]),
        (0, a.jsx)("div", {
            style: {
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 5,
            },
            children: t.map((t) => {
                let { id: n, collapsedLeft: l, expandedLeft: r, collapsedTop: s, expandedTop: c, width: d } = t,
                    u = o.get(n);
                return (0, a.jsx)(
                    i.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: d,
                            transform: (0, i.to)(
                                [
                                    e.to({
                                        range: [0, 1],
                                        output: [l, r],
                                    }),
                                    e.to({
                                        range: [0, 1],
                                        output: [s, c],
                                    }),
                                ],
                                (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                            ),
                        },
                    },
                    n,
                );
            }),
        })
    );
}
