"use strict";
n.d(t, { u: () => a }), n(321073);
var r = n(64700),
    i = n(894858),
    l = n(397274);
function a(e, t) {
    let n = r.useRef(null),
        a = r.useRef(new Set());
    r.useEffect(() => {
        if (!t) return;
        let e = l.A.getPanelScrollerNode();
        if (null == e) return;
        let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(
                (e) => null != e.getAttribute("data-settings-category-key"),
            ),
            s = new Map(),
            o = [];
        return (
            r.forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && (s.set(e, t), o.push(t));
            }),
            (n.current = new IntersectionObserver(
                (e) => {
                    if (
                        (e.forEach((e) => {
                            let { isIntersecting: t, target: n } = e,
                                r = s.get(n);
                            null != r && (t ? a.current.add(r) : a.current.delete(r));
                        }),
                        !l.A.getIsSidebarCategoryAutoSelectEnabled())
                    )
                        return;
                    let t = [];
                    if (
                        (o.forEach((e) => {
                            a.current.has(e) && t.push(e);
                        }),
                        0 === t.length)
                    )
                        return;
                    let n = t[0];
                    i.A.getField("currentCategoryKey") !== n && i.A.setState({ currentCategoryKey: n });
                },
                { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
            )),
            r.forEach((e) => n.current?.observe(e)),
            () => {
                r.forEach((e) => n.current?.unobserve(e)), n.current?.disconnect(), (n.current = null);
            }
        );
    }, [e, t]);
}
