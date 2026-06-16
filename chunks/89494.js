"use strict";
n.d(t, { LE: () => h, eg: () => u, lR: () => _, o1: () => c, yB: () => d });
var i = n(3388),
    r = n(959462),
    s = n(419711),
    a = n(297987),
    o = n(401705),
    l = n(64700);
function u(e) {
    return (
        (e.nativeEvent = e),
        (e.isDefaultPrevented = () => e.defaultPrevented),
        (e.isPropagationStopped = () => e.cancelBubble),
        (e.persist = () => {}),
        e
    );
}
function c(e, t) {
    Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function d(e) {
    let t = (0, l.useRef)({ isFocused: !1, observer: null });
    (0, i.N)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let n = (0, r.J)((t) => {
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
                let i = e.target;
                i.addEventListener(
                    "focusout",
                    (e) => {
                        (t.current.isFocused = !1),
                            i.disabled && n(u(e)),
                            t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                    },
                    { once: !0 },
                ),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && i.disabled) {
                            var e;
                            null == (e = t.current.observer) || e.disconnect();
                            let n = i === document.activeElement ? null : document.activeElement;
                            i.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })),
                                i.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: n }));
                        }
                    })),
                    t.current.observer.observe(i, { attributes: !0, attributeFilter: ["disabled"] });
            }
        },
        [n],
    );
}
let _ = !1;
function h(e) {
    for (; e && !(0, s.t)(e); ) e = e.parentElement;
    let t = (0, a.mD)(e),
        n = t.document.activeElement;
    if (!n || n === e) return;
    _ = !0;
    let i = !1,
        r = (e) => {
            (e.target === n || i) && e.stopImmediatePropagation();
        },
        l = (t) => {
            (t.target === n || i) && (t.stopImmediatePropagation(), e || i || ((i = !0), (0, o.e)(n), d()));
        },
        u = (t) => {
            (t.target === e || i) && t.stopImmediatePropagation();
        },
        c = (t) => {
            (t.target === e || i) && (t.stopImmediatePropagation(), i || ((i = !0), (0, o.e)(n), d()));
        };
    t.addEventListener("blur", r, !0),
        t.addEventListener("focusout", l, !0),
        t.addEventListener("focusin", c, !0),
        t.addEventListener("focus", u, !0);
    let d = () => {
            cancelAnimationFrame(h),
                t.removeEventListener("blur", r, !0),
                t.removeEventListener("focusout", l, !0),
                t.removeEventListener("focusin", c, !0),
                t.removeEventListener("focus", u, !0),
                (_ = !1),
                (i = !1);
        },
        h = requestAnimationFrame(d);
    return d;
}
