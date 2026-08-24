"use strict";
r.d(t, { LE: () => p, eg: () => u, lR: () => d, o1: () => c, yB: () => f });
var n = r(576024),
    i = r(654978),
    o = r(194498),
    a = r(745391),
    s = r(20853),
    l = r(582128);
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
function f(e) {
    let t = (0, l.useRef)({ isFocused: !1, observer: null });
    (0, n.N)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let r = (0, i.J)((t) => {
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
                let n = e.target;
                n.addEventListener(
                    "focusout",
                    (e) => {
                        (t.current.isFocused = !1),
                            n.disabled && r(u(e)),
                            t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                    },
                    { once: !0 },
                ),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && n.disabled) {
                            var e;
                            null == (e = t.current.observer) || e.disconnect();
                            let r = n === document.activeElement ? null : document.activeElement;
                            n.dispatchEvent(new FocusEvent("blur", { relatedTarget: r })),
                                n.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: r }));
                        }
                    })),
                    t.current.observer.observe(n, { attributes: !0, attributeFilter: ["disabled"] });
            }
        },
        [r],
    );
}
let d = !1;
function p(e) {
    for (; e && !(0, o.t)(e); ) e = e.parentElement;
    let t = (0, a.mD)(e),
        r = t.document.activeElement;
    if (!r || r === e) return;
    d = !0;
    let n = !1,
        i = (e) => {
            (e.target === r || n) && e.stopImmediatePropagation();
        },
        l = (t) => {
            (t.target === r || n) && (t.stopImmediatePropagation(), e || n || ((n = !0), (0, s.e)(r), f()));
        },
        u = (t) => {
            (t.target === e || n) && t.stopImmediatePropagation();
        },
        c = (t) => {
            (t.target === e || n) && (t.stopImmediatePropagation(), n || ((n = !0), (0, s.e)(r), f()));
        };
    t.addEventListener("blur", i, !0),
        t.addEventListener("focusout", l, !0),
        t.addEventListener("focusin", c, !0),
        t.addEventListener("focus", u, !0);
    let f = () => {
            cancelAnimationFrame(p),
                t.removeEventListener("blur", i, !0),
                t.removeEventListener("focusout", l, !0),
                t.removeEventListener("focusin", c, !0),
                t.removeEventListener("focus", u, !0),
                (d = !1),
                (n = !1);
        },
        p = requestAnimationFrame(f);
    return f;
}
