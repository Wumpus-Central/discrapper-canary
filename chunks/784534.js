n.d(t, {
    WZ: () => f,
    Yf: () => c,
    d0: () => u,
    uR: () => d,
});
var r = n(436283),
    i = n(101741),
    a = n(70768),
    o = n(253231),
    s = n(945353),
    l = n(647438);
class c {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(e, t) {
        (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
    }
}
function u(e) {
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
                            r.disabled && n(new c("blur", e)),
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
let d = !1;
function f(e) {
    for (; e && !(0, a.E)(e); ) e = e.parentElement;
    let t = (0, o.kR)(e),
        n = t.document.activeElement;
    if (!n || n === e) return;
    d = !0;
    let r = !1,
        i = (e) => {
            (e.target === n || r) && e.stopImmediatePropagation();
        },
        l = (t) => {
            (t.target === n || r) && (t.stopImmediatePropagation(), e || r || ((r = !0), (0, s.A)(n), f()));
        },
        c = (t) => {
            (t.target === e || r) && t.stopImmediatePropagation();
        },
        u = (t) => {
            (t.target === e || r) && (t.stopImmediatePropagation(), r || ((r = !0), (0, s.A)(n), f()));
        };
    t.addEventListener("blur", i, !0),
        t.addEventListener("focusout", l, !0),
        t.addEventListener("focusin", u, !0),
        t.addEventListener("focus", c, !0);
    let f = () => {
            cancelAnimationFrame(_),
                t.removeEventListener("blur", i, !0),
                t.removeEventListener("focusout", l, !0),
                t.removeEventListener("focusin", u, !0),
                t.removeEventListener("focus", c, !0),
                (d = !1),
                (r = !1);
        },
        _ = requestAnimationFrame(f);
    return f;
}
