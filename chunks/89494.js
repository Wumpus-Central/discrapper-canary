"use strict";
n.d(t, { LE: () => f, eg: () => u, lR: () => _, o1: () => d, yB: () => c });
var r = n(3388),
    i = n(959462),
    s = n(883768),
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
function d(e, t) {
    Object.defineProperty(e, "target", { value: t }), Object.defineProperty(e, "currentTarget", { value: t });
}
function c(e) {
    let t = (0, l.useRef)({ isFocused: !1, observer: null });
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
                let r = e.target;
                r.addEventListener(
                    "focusout",
                    (e) => {
                        (t.current.isFocused = !1),
                            r.disabled && n(u(e)),
                            t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                    },
                    { once: !0 },
                ),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && r.disabled) {
                            var e;
                            null == (e = t.current.observer) || e.disconnect();
                            let n = r === document.activeElement ? null : document.activeElement;
                            r.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })),
                                r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: n }));
                        }
                    })),
                    t.current.observer.observe(r, { attributes: !0, attributeFilter: ["disabled"] });
            }
        },
        [n],
    );
}
let _ = !1;
function f(e) {
    for (; e && !(0, s.t)(e); ) e = e.parentElement;
    let t = (0, a.mD)(e),
        n = t.document.activeElement;
    if (!n || n === e) return;
    _ = !0;
    let r = !1,
        i = (e) => {
            (e.target === n || r) && e.stopImmediatePropagation();
        },
        l = (t) => {
            (t.target === n || r) && (t.stopImmediatePropagation(), e || r || ((r = !0), (0, o.e)(n), c()));
        },
        u = (t) => {
            (t.target === e || r) && t.stopImmediatePropagation();
        },
        d = (t) => {
            (t.target === e || r) && (t.stopImmediatePropagation(), r || ((r = !0), (0, o.e)(n), c()));
        };
    t.addEventListener("blur", i, !0),
        t.addEventListener("focusout", l, !0),
        t.addEventListener("focusin", d, !0),
        t.addEventListener("focus", u, !0);
    let c = () => {
            cancelAnimationFrame(f),
                t.removeEventListener("blur", i, !0),
                t.removeEventListener("focusout", l, !0),
                t.removeEventListener("focusin", d, !0),
                t.removeEventListener("focus", u, !0),
                (_ = !1),
                (r = !1);
        },
        f = requestAnimationFrame(c);
    return c;
}
