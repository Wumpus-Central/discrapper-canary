n.d(t, {
    LE: () => p,
    eg: () => c,
    lR: () => f,
    o1: () => u,
    yB: () => d,
});
var r = n(3388),
    i = n(959462),
    a = n(883768),
    s = n(297987),
    o = n(401705),
    l = n(64700);

function c(e) {
    let t = e;
    return (
        (t.nativeEvent = e),
        (t.isDefaultPrevented = () => t.defaultPrevented),
        (t.isPropagationStopped = () => t.cancelBubble),
        (t.persist = () => {}),
        t
    );
}

function u(e, t) {
    Object.defineProperty(e, "target", {
        value: t,
    }),
        Object.defineProperty(e, "currentTarget", {
            value: t,
        });
}

function d(e) {
    let t = (0, l.useRef)({
        isFocused: !1,
        observer: null,
    });
    (0, r.N)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let n = (0, i.J)((t) => {
        null == e || e(t);
    });
    return (0, l.useCallback)(
        (e) => {
            if (
                e.target instanceof HTMLButtonElement ||
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement ||
                e.target instanceof HTMLSelectElement
            ) {
                t.current.isFocused = !0;
                let r = e.target,
                    i = (e) => {
                        (t.current.isFocused = !1),
                            r.disabled && n(c(e)),
                            t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                    };
                r.addEventListener("focusout", i, {
                    once: !0,
                }),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && r.disabled) {
                            var e;
                            null == (e = t.current.observer) || e.disconnect();
                            let n = r === document.activeElement ? null : document.activeElement;
                            r.dispatchEvent(
                                new FocusEvent("blur", {
                                    relatedTarget: n,
                                }),
                            ),
                                r.dispatchEvent(
                                    new FocusEvent("focusout", {
                                        bubbles: !0,
                                        relatedTarget: n,
                                    }),
                                );
                        }
                    })),
                    t.current.observer.observe(r, {
                        attributes: !0,
                        attributeFilter: ["disabled"],
                    });
            }
        },
        [n],
    );
}
let f = !1;

function p(e) {
    for (; e && !(0, a.t)(e); ) e = e.parentElement;
    let t = (0, s.mD)(e),
        n = t.document.activeElement;
    if (!n || n === e) return;
    f = !0;
    let r = !1,
        i = (e) => {
            (e.target === n || r) && e.stopImmediatePropagation();
        },
        l = (t) => {
            (t.target === n || r) && (t.stopImmediatePropagation(), e || r || ((r = !0), (0, o.e)(n), d()));
        },
        c = (t) => {
            (t.target === e || r) && t.stopImmediatePropagation();
        },
        u = (t) => {
            (t.target === e || r) && (t.stopImmediatePropagation(), r || ((r = !0), (0, o.e)(n), d()));
        };
    t.addEventListener("blur", i, !0),
        t.addEventListener("focusout", l, !0),
        t.addEventListener("focusin", u, !0),
        t.addEventListener("focus", c, !0);
    let d = () => {
            cancelAnimationFrame(p),
                t.removeEventListener("blur", i, !0),
                t.removeEventListener("focusout", l, !0),
                t.removeEventListener("focusin", u, !0),
                t.removeEventListener("focus", c, !0),
                (f = !1),
                (r = !1);
        },
        p = requestAnimationFrame(d);
    return d;
}
