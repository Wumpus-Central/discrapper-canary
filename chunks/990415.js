n.d(t, {
    WZ: () => _,
    d0: () => d,
    nh: () => u,
    uR: () => f,
    yA: () => c,
});
var r = n(159447),
    i = n(484948),
    a = n(970498),
    o = n(477232),
    s = n(928276),
    l = n(473749);
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
    Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function d(e) {
    let t = (0, l.useRef)({
        isFocused: !1,
        observer: null,
    });
    (0, r.b)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let n = (0, i.i)((t) => {
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
                r.addEventListener("focusout", i, { once: !0 }),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && r.disabled) {
                            var e;
                            null == (e = t.current.observer) || e.disconnect();
                            let n = r === document.activeElement ? null : document.activeElement;
                            r.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })),
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
function _(e) {
    for (; e && !(0, a.E)(e); ) e = e.parentElement;
    let t = (0, o.kR)(e),
        n = t.document.activeElement;
    if (!n || n === e) return;
    f = !0;
    let r = !1,
        i = (e) => {
            (e.target === n || r) && e.stopImmediatePropagation();
        },
        l = (t) => {
            (t.target === n || r) && (t.stopImmediatePropagation(), e || r || ((r = !0), (0, s.A)(n), d()));
        },
        c = (t) => {
            (t.target === e || r) && t.stopImmediatePropagation();
        },
        u = (t) => {
            (t.target === e || r) && (t.stopImmediatePropagation(), r || ((r = !0), (0, s.A)(n), d()));
        };
    t.addEventListener("blur", i, !0),
        t.addEventListener("focusout", l, !0),
        t.addEventListener("focusin", u, !0),
        t.addEventListener("focus", c, !0);
    let d = () => {
            cancelAnimationFrame(_),
                t.removeEventListener("blur", i, !0),
                t.removeEventListener("focusout", l, !0),
                t.removeEventListener("focusin", u, !0),
                t.removeEventListener("focus", c, !0),
                (f = !1),
                (r = !1);
        },
        _ = requestAnimationFrame(d);
    return d;
}
