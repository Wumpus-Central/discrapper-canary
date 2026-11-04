let n = null;
r.d(
    t,
    {},
    {
        e: function (e) {
            if (
                (function () {
                    if (null == n) {
                        n = !1;
                        try {
                            document.createElement("div").focus({
                                get preventScroll() {
                                    return ((n = !0), !0);
                                },
                            });
                        } catch {}
                    }
                    return n;
                })()
            )
                e.focus({ preventScroll: !0 });
            else {
                let t = (function (e) {
                    let t = e.parentNode,
                        r = [],
                        n = document.scrollingElement || document.documentElement;
                    for (; t instanceof HTMLElement && t !== n;)
                        ((t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
                            r.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
                            (t = t.parentNode));
                    return (
                        n instanceof HTMLElement &&
                            r.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
                        r
                    );
                })(e);
                (e.focus(),
                    (function (e) {
                        for (let { element: t, scrollTop: r, scrollLeft: n } of e)
                            ((t.scrollTop = r), (t.scrollLeft = n));
                    })(t));
            }
        },
    },
);
