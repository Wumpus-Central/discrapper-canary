n.d(t, { A: () => o });
var a = n(627968),
    i = n(64700),
    s = n(880013),
    l = n(568329),
    r = n(963713);
function o() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: o,
        } = i.useContext(l.PW),
        { isExpanded: d } = i.useContext(r.T);
    return (
        i.useEffect(() => {
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
                let { id: n, collapsedLeft: i, expandedLeft: l, collapsedTop: r, expandedTop: d, width: c } = t,
                    u = o.get(n);
                return (0, a.jsx)(
                    s.animated.div,
                    {
                        ref: u,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: c,
                            transform: (0, s.to)(
                                [e.to({ range: [0, 1], output: [i, l] }), e.to({ range: [0, 1], output: [r, d] })],
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
