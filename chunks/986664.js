r.d(t, { D: () => u, e: () => c });
var n = r(407815),
    i = r(333007),
    o = r(582128),
    a = r(361854),
    s = r(475921);
let l = (0, o.createContext)(null);
function u(e) {
    let t = (0, o.useRef)({});
    return o.createElement(l.Provider, { value: t }, e.children);
}
let c = (0, o.forwardRef)(function (e, t) {
    let { name: r, isVisible: u = !0, children: c, className: f, style: d, render: p, ...h } = e,
        [m, v] = (0, o.useState)(u ? "visible" : "hidden"),
        y = (0, o.useContext)(l);
    if (!y) throw Error("<SharedElement> must be rendered inside a <SharedElementTransition>");
    u && "hidden" === m && v("visible"),
        (t = (0, s.U)(t)),
        (0, a.N)(() => {
            let e = t.current,
                n = y.current,
                o = n[r],
                a = null;
            if (e && u && o) {
                v("visible");
                let t = e.getAnimations(),
                    i = o.style.map(([t, r]) => {
                        let n = e.style[t];
                        if ("translate" === t) {
                            let t = o.rect,
                                r = e.getBoundingClientRect(),
                                n = t.left - r?.left,
                                i = t.top - r?.top;
                            e.style.translate = `${n}px ${i}px`;
                        } else e.style[t] = r;
                        return [t, n];
                    });
                for (let r of e.getAnimations()) t.includes(r) || r.cancel();
                (a = requestAnimationFrame(() => {
                    for (let [t, r] of ((a = null), i)) e.style[t] = r;
                })),
                    delete n[r];
            } else
                e && u && !o
                    ? (queueMicrotask(() => (0, i.flushSync)(() => v("entering"))),
                      (a = requestAnimationFrame(() => {
                          (a = null), v("visible");
                      })))
                    : e &&
                      !u &&
                      queueMicrotask(() => {
                          n[r]
                              ? (delete n[r],
                                (0, i.flushSync)(() => v("exiting")),
                                Promise.all(e.getAnimations().map((e) => e.finished))
                                    .then(() => v("hidden"))
                                    .catch(() => {}))
                              : v("hidden");
                      });
            return () => {
                if ((null != a && cancelAnimationFrame(a), e && e.isConnected && !e.hasAttribute("data-exiting"))) {
                    let t = window.getComputedStyle(e);
                    if ("none" !== t.transitionProperty) {
                        let i = t.transitionProperty.split(/\s*,\s*/);
                        n[r] = { rect: e.getBoundingClientRect(), style: i.map((e) => [e, t[e]]) };
                    }
                }
            };
        }, [t, y, r, u]);
    let g = (0, n.Sl)({
        children: c,
        className: f,
        style: d,
        render: p,
        values: { isEntering: "entering" === m, isExiting: "exiting" === m },
    });
    return "hidden" === m
        ? null
        : o.createElement(n.tT.div, {
              ...h,
              ...g,
              ref: t,
              "data-entering": "entering" === m || void 0,
              "data-exiting": "exiting" === m || void 0,
          });
});
