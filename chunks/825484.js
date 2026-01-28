n.d(t, {
    e: () => s,
}),
    n(747238),
    n(812715),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(331322),
    o = n(977067);

function s(e) {
    let {
            size: t = "md",
            direction: n = "horizontal",
            justify: s,
            align: c,
            padding: u,
            className: d,
            children: f,
            wrap: p = !0,
            fullWidth: _ = !1,
            fullWidthContainer: h = !1,
        } = e,
        m = i.useMemo(
            () => ({
                size: t,
                fullWidth: _,
            }),
            [t, _],
        ),
        g = i.useRef(null),
        E = l(g, n, p),
        y = n;
    return (
        E && (y = n.replace("horizontal", "vertical")),
        (0, r.jsx)(a.B, {
            direction: y,
            gap: 8,
            justify: s,
            align: c,
            wrap: p,
            padding: u,
            className: d,
            fullWidth: !!h || _,
            ref: g,
            children: (0, r.jsx)(o.Z.Provider, {
                value: m,
                children: f,
            }),
        })
    );
}

function l(e, t, n) {
    let [r, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            if (null == e.current || !n || t.includes("vertical")) return;

            function r() {
                var t, n;
                let r = Array.from(
                    null !=
                        (t =
                            null == (n = e.current)
                                ? void 0
                                : n.querySelectorAll('[data-mana-component="button"] [data-text-variant]'))
                        ? t
                        : [],
                ).some((e) => e.scrollWidth > e.clientWidth);
                a((e) => e || r);
            }
            let i = new MutationObserver(r);
            return (
                r(),
                i.observe(e.current, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                }),
                () => {
                    i.disconnect();
                }
            );
        }, [e, t, n]),
        r
    );
}
