n.d(t, {
    u: () => l,
}),
    n(896048),
    n(321073);
var r = n(64700),
    o = n(894858),
    a = n(397274);

function l(e) {
    let t = r.useRef(null),
        n = r.useRef(new Set());
    r.useEffect(() => {
        let e = a.A.getPanelScrollerNode();
        if (null == e) return;
        let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(
                (e) => null != e.getAttribute("data-settings-category-key"),
            ),
            l = new Map(),
            i = [];
        return (
            r.forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && (l.set(e, t), i.push(t));
            }),
            (t.current = new IntersectionObserver(
                (e) => {
                    if (
                        (e.forEach((e) => {
                            let { isIntersecting: t, target: r } = e,
                                o = l.get(r);
                            null != o && (t ? n.current.add(o) : n.current.delete(o));
                        }),
                        o.A.getField("disableSidebarCategoryAutoSelect"))
                    )
                        return;
                    let t = [];
                    if (
                        (i.forEach((e) => {
                            n.current.has(e) && t.push(e);
                        }),
                        0 === t.length)
                    )
                        return;
                    let r = t[0];
                    o.A.getField("currentCategoryKey") !== r &&
                        o.A.setState({
                            currentCategoryKey: r,
                        });
                },
                {
                    root: e,
                    rootMargin: "0px 100000px 0px 100000px",
                    threshold: 1,
                },
            )),
            r.forEach((e) => {
                var n;
                return null == (n = t.current) ? void 0 : n.observe(e);
            }),
            () => {
                var e;
                r.forEach((e) => {
                    var n;
                    return null == (n = t.current) ? void 0 : n.unobserve(e);
                }),
                    null == (e = t.current) || e.disconnect(),
                    (t.current = null);
            }
        );
    }, [e]);
}
