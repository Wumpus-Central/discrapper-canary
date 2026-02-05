n.d(t, { A: () => o });
var a = n(627968),
    s = n(64700),
    i = n(92674),
    l = n(568329),
    r = n(963713);
function o() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: o,
        } = s.useContext(l.PW),
        { isExpanded: d } = s.useContext(r.T);
    return (
        s.useEffect(() => {
            n();
        }, [n, d]),
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
                let { id: n, collapsedLeft: s, expandedLeft: l, collapsedTop: r, expandedTop: d, width: c } = t,
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
                            width: c,
                            transform: (0, i.to)(
                                [e.to({ range: [0, 1], output: [s, l] }), e.to({ range: [0, 1], output: [r, d] })],
                                (e, t) => `translate(${e}px, ${t}px)`,
                            ),
                        },
                    },
                    n,
                );
            }),
        })
    );
}
