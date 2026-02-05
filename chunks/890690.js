n.d(t, { u: () => i }), n(321073);
var r = n(64700),
    a = n(894858),
    o = n(397274);
function i(e) {
    let t = r.useRef(null),
        n = r.useRef(new Set());
    r.useEffect(() => {
        let e = o.A.getPanelScrollerNode();
        if (null == e) return;
        let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(
                (e) => null != e.getAttribute("data-settings-category-key"),
            ),
            i = new Map(),
            l = [];
        return (
            r.forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && (i.set(e, t), l.push(t));
            }),
            (t.current = new IntersectionObserver(
                (e) => {
                    if (
                        (e.forEach((e) => {
                            let { isIntersecting: t, target: r } = e,
                                a = i.get(r);
                            null != a && (t ? n.current.add(a) : n.current.delete(a));
                        }),
                        a.A.getField("disableSidebarCategoryAutoSelect"))
                    )
                        return;
                    let t = [];
                    if (
                        (l.forEach((e) => {
                            n.current.has(e) && t.push(e);
                        }),
                        0 === t.length)
                    )
                        return;
                    let r = t[0];
                    a.A.getField("currentCategoryKey") !== r && a.A.setState({ currentCategoryKey: r });
                },
                { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
            )),
            r.forEach((e) => t.current?.observe(e)),
            () => {
                r.forEach((e) => t.current?.unobserve(e)), t.current?.disconnect(), (t.current = null);
            }
        );
    }, [e]);
}
