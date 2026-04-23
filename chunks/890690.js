"use strict";
n.d(t, { u: () => s }), n(321073), n(134528), n(947204);
var r = n(64700),
    i = n(894858),
    a = n(397274);
function s(e, t) {
    let n = r.useRef(null),
        s = r.useRef(new Set()),
        l = r.useRef(!1),
        o = r.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.key)), t;
        }, [e]);
    r.useEffect(() => {
        if (!t) return;
        let e = a.A.getPanelScrollerNode();
        if (null == e) return;
        let r = e.querySelectorAll("[data-settings-category-key]"),
            c = e.querySelector("[data-panel-bottom]"),
            u = [];
        Array.from(r).forEach((e) => {
            let t = e.getAttribute("data-settings-category-key");
            null != t && o.has(t) && u.push(e);
        });
        let d = new Map(),
            _ = [];
        return (
            u.forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && (d.set(e, t), _.push(t));
            }),
            (n.current = new IntersectionObserver(
                (t) => {
                    if (
                        (t.forEach((t) => {
                            let { isIntersecting: n, target: r } = t;
                            if (r === c) {
                                let t = e.scrollHeight > e.clientHeight;
                                l.current = n && t;
                                return;
                            }
                            let i = d.get(r);
                            null != i && (n ? s.current.add(i) : s.current.delete(i));
                        }),
                        !a.A.getIsSidebarCategoryAutoSelectEnabled())
                    )
                        return;
                    let n = [];
                    if (
                        (_.forEach((e) => {
                            s.current.has(e) && n.push(e);
                        }),
                        0 === n.length)
                    )
                        return;
                    let r = n.at(l.current ? -1 : 0);
                    i.A.getField("currentCategoryKey") !== r && i.A.setState({ currentCategoryKey: r });
                },
                { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
            )),
            u.forEach((e) => n.current?.observe(e)),
            null != c && n.current?.observe(c),
            () => {
                u.forEach((e) => n.current?.unobserve(e)),
                    null != c && n.current?.unobserve(c),
                    n.current?.disconnect(),
                    (n.current = null);
            }
        );
    }, [o, t]);
}
