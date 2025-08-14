n.d(t, { j: () => s });
var r = n(255367),
    i = n(73800),
    l = n(777207),
    o = n(895129);
function s(e) {
    let {
            title: t,
            subtitle: n,
            iconSrc: s,
            backgroundSrc: a,
            animatedBackgroundSrc: u,
            prefersReducedMotion: c = !0,
        } = e,
        d = i.useMemo(() => {
            let e = null != a ? a : s;
            if (null != e) return { "--custom-background-url": "url(".concat(e.toString(), ")") };
        }, [a, s]),
        p = i.useMemo(() => {
            if (null == a) return;
            let e = { "--custom-background-static": "url(".concat(a.toString()) };
            return c || null == u || (e["--custom-background-animated"] = "url(".concat(u.toString(), ")")), e;
        }, [u, a, c]);
    return (0, r.jsxs)("div", {
        className: o.wrapper,
        children: [
            (0, r.jsx)("div", {
                className: o.background,
                style: d,
            }),
            (0, r.jsxs)("div", {
                className: o.content,
                children: [
                    null != s &&
                        (0, r.jsx)("div", {
                            className: o.icon,
                            children: (0, r.jsx)("img", {
                                src: s.toString(),
                                alt: "",
                            }),
                        }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(l.x, {
                                variant: "heading-xl/bold",
                                tag: "div",
                                children: t,
                            }),
                            null != n &&
                                (0, r.jsxs)(l.x, {
                                    variant: "text-sm/normal",
                                    children: ["\u201C", n, "\u201D"],
                                }),
                        ],
                    }),
                ],
            }),
            null != a
                ? (0, r.jsx)("div", {
                      className: o.image,
                      style: p,
                  })
                : null,
        ],
    });
}
