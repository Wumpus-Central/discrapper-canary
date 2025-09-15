n.d(t, { j: () => s });
var r = n(951288),
    i = n(647438),
    l = n(793030),
    o = n(355128);
function s(e) {
    let {
            title: t,
            subtitle: n,
            iconSrc: s,
            backgroundSrc: u,
            animatedBackgroundSrc: a,
            prefersReducedMotion: c = !0,
        } = e,
        d = i.useMemo(() => {
            let e = null != u ? u : s;
            if (null != e) return { "--custom-background-url": "url(".concat(e.toString(), ")") };
        }, [u, s]),
        p = i.useMemo(() => {
            if (null == u) return;
            let e = { "--custom-background-static": "url(".concat(u.toString()) };
            return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e;
        }, [a, u, c]);
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
                            (0, r.jsx)(l.xvT, {
                                variant: "heading-xl/bold",
                                tag: "div",
                                children: t,
                            }),
                            null != n &&
                                (0, r.jsxs)(l.xvT, {
                                    variant: "text-sm/normal",
                                    children: ["\u201C", n, "\u201D"],
                                }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, r.jsx)("div", {
                      className: o.image,
                      style: p,
                  })
                : null,
        ],
    });
}
