"use strict";
n.d(t, { j: () => u });
var r = n(340287),
    i = n(64700),
    s = n(723906),
    a = n(248215),
    o = n(3388),
    l = n(341221);
function u(e, t, n) {
    let { isDisabled: u } = e,
        c = (0, s.Bi)(),
        d = (0, s.Bi)(),
        _ = (0, l.wR)(),
        f = (0, i.useRef)(null),
        p = (0, i.useCallback)(() => {
            (f.current = requestAnimationFrame(() => {
                n.current && n.current.setAttribute("hidden", "until-found");
            })),
                (0, r.flushSync)(() => {
                    t.toggle();
                });
        }, [n, t]);
    (0, a._)(n, "beforematch", p);
    let h = (0, i.useRef)(null);
    return (
        (0, o.N)(() => {
            if ((f.current && cancelAnimationFrame(f.current), n.current && !u && !_)) {
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
        }, [u, n, t.isExpanded, _]),
        (0, i.useEffect)(
            () => () => {
                f.current && cancelAnimationFrame(f.current);
            },
            [],
        ),
        {
            buttonProps: {
                id: c,
                "aria-expanded": t.isExpanded,
                "aria-controls": d,
                onPress: (e) => {
                    u || "keyboard" === e.pointerType || t.toggle();
                },
                isDisabled: u,
                onPressStart(e) {
                    "keyboard" !== e.pointerType || u || t.toggle();
                },
            },
            panelProps: {
                id: d,
                role: "group",
                "aria-labelledby": c,
                "aria-hidden": !t.isExpanded,
                hidden: _ || u ? u || !t.isExpanded : void 0,
            },
        }
    );
}
