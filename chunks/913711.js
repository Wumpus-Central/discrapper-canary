n.d(t, {
    j: () => c,
});
var r = n(340287),
    i = n(64700),
    a = n(723906),
    s = n(248215),
    o = n(3388),
    l = n(341221);

function c(e, t, n) {
    let { isDisabled: c } = e,
        u = (0, a.Bi)(),
        d = (0, a.Bi)(),
        f = (0, l.wR)(),
        p = (0, i.useRef)(null),
        _ = (0, i.useCallback)(() => {
            (p.current = requestAnimationFrame(() => {
                n.current && n.current.setAttribute("hidden", "until-found");
            })),
                (0, r.flushSync)(() => {
                    t.toggle();
                });
        }, [n, t]);
    (0, s._)(n, "beforematch", _);
    let h = (0, i.useRef)(null);
    return (
        (0, o.N)(() => {
            if ((p.current && cancelAnimationFrame(p.current), n.current && !c && !f)) {
                let e = n.current;
                null == h.current || "function" != typeof e.getAnimations
                    ? t.isExpanded
                        ? (e.removeAttribute("hidden"),
                          e.style.setProperty("--disclosure-panel-width", "auto"),
                          e.style.setProperty("--disclosure-panel-height", "auto"))
                        : (e.setAttribute("hidden", "until-found"),
                          e.style.setProperty("--disclosure-panel-width", "0px"),
                          e.style.setProperty("--disclosure-panel-height", "0px"))
                    : t.isExpanded !== h.current &&
                      (t.isExpanded
                          ? (e.removeAttribute("hidden"),
                            e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"),
                            e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    e.style.setProperty("--disclosure-panel-width", "auto"),
                                        e.style.setProperty("--disclosure-panel-height", "auto");
                                })
                                .catch(() => {}))
                          : (e.style.setProperty("--disclosure-panel-width", e.scrollWidth + "px"),
                            e.style.setProperty("--disclosure-panel-height", e.scrollHeight + "px"),
                            window.getComputedStyle(e).height,
                            e.style.setProperty("--disclosure-panel-width", "0px"),
                            e.style.setProperty("--disclosure-panel-height", "0px"),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => e.setAttribute("hidden", "until-found"))
                                .catch(() => {}))),
                    (h.current = t.isExpanded);
            }
        }, [c, n, t.isExpanded, f]),
        (0, i.useEffect)(
            () => () => {
                p.current && cancelAnimationFrame(p.current);
            },
            [],
        ),
        {
            buttonProps: {
                id: u,
                "aria-expanded": t.isExpanded,
                "aria-controls": d,
                onPress: (e) => {
                    c || "keyboard" === e.pointerType || t.toggle();
                },
                isDisabled: c,
                onPressStart(e) {
                    "keyboard" !== e.pointerType || c || t.toggle();
                },
            },
            panelProps: {
                id: d,
                role: "group",
                "aria-labelledby": u,
                "aria-hidden": !t.isExpanded,
                hidden: f || c ? c || !t.isExpanded : void 0,
            },
        }
    );
}
