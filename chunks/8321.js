"use strict";
n.d(t, { d: () => R });
var r = n(89494),
    i = n(907596),
    s = n(726796),
    a = n(139280),
    o = n(170372),
    l = n(499028),
    u = n(803082),
    d = n(434067),
    c = n(114099),
    _ = n(959462),
    f = n(241827),
    E = n(297987),
    h = n(260431),
    p = n(408713),
    m = n(132716),
    g = n(23975),
    A = n(401705);
n(340287);
var I = n(64700),
    T = new WeakMap();
class S {
    continuePropagation() {
        (0, l._)(this, T, !1);
    }
    get shouldStopPropagation() {
        return (0, a._)(this, T);
    }
    constructor(e, t, n, r) {
        var i;
        (0, o._)(this, T, { writable: !0, value: void 0 }), (0, l._)(this, T, !0);
        let s = null != (i = null == r ? void 0 : r.target) ? i : n.currentTarget;
        const a = null == s ? void 0 : s.getBoundingClientRect();
        let u,
            d = 0,
            c,
            _ = null;
        null != n.clientX && null != n.clientY && ((c = n.clientX), (_ = n.clientY)),
            a &&
                (null != c && null != _
                    ? ((u = c - a.left), (d = _ - a.top))
                    : ((u = a.width / 2), (d = a.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = u),
            (this.y = d);
    }
}
let y = Symbol("linkClicked"),
    N = "react-aria-pressable-style",
    O = "data-react-aria-pressable";
function R(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: o,
            onPressUp: l,
            onClick: T,
            isDisabled: R,
            isPressed: L,
            preventFocusOnPress: w,
            shouldCancelOnPointerExit: M,
            allowTextSelectionOnPress: P,
            ref: U,
            ...k
        } = (function (e) {
            let t = (0, I.useContext)(s.F);
            if (t) {
                let { register: n, ...r } = t;
                (e = (0, u.v)(r, e)), n();
            }
            return (0, d.w)(t, e.ref), e;
        })(e),
        [x, G] = (0, I.useState)(!1),
        V = (0, I.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: [],
        }),
        { addGlobalListener: F, removeAllGlobalListeners: B } = (0, c.A)(),
        H = (0, _.J)((e, t) => {
            let r = V.current;
            if (R || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), a)) {
                let n = new S("pressstart", t, e);
                a(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), G(!0), i;
        }),
        Y = (0, _.J)((e, r, i = !0) => {
            let s = V.current;
            if (!s.didFirePressStart) return !1;
            (s.didFirePressStart = !1), (s.isTriggeringEvent = !0);
            let a = !0;
            if (o) {
                let t = new S("pressend", r, e);
                o(t), (a = t.shouldStopPropagation);
            }
            if ((n && n(!1), G(!1), t && i && !R)) {
                let n = new S("press", r, e);
                t(n), a && (a = n.shouldStopPropagation);
            }
            return (s.isTriggeringEvent = !1), a;
        }),
        W = (0, _.J)((e, t) => {
            let n = V.current;
            if (R) return !1;
            if (l) {
                n.isTriggeringEvent = !0;
                let r = new S("pressup", t, e);
                return l(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        j = (0, _.J)((e) => {
            let t = V.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && Y(b(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                B(),
                P || (0, i.E)(t.target),
                t.disposables))
                    n();
                t.disposables = [];
            }
        }),
        K = (0, _.J)((e) => {
            M && j(e);
        }),
        $ = (0, _.J)((e) => {
            R || null == T || T(e);
        }),
        z = (0, _.J)((e, t) => {
            if (!R && T) {
                let n = new MouseEvent("click", e);
                (0, r.o1)(n, t), T((0, r.eg)(n));
            }
        }),
        q = (0, I.useMemo)(() => {
            let e = V.current,
                t = {
                    onKeyDown(t) {
                        if (C(t.nativeEvent, t.currentTarget) && (0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent))) {
                            var r;
                            D((0, f.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let i = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (i = H(t, "keyboard"));
                                let r = t.currentTarget;
                                F(
                                    (0, E.TW)(t.currentTarget),
                                    "keyup",
                                    (0, h.c)((t) => {
                                        C(t, r) &&
                                            !t.repeat &&
                                            (0, f.sD)(r, (0, f.wt)(t)) &&
                                            e.target &&
                                            W(b(e.target, t), "keyboard");
                                    }, n),
                                    !0,
                                );
                            }
                            i && t.stopPropagation(),
                                t.metaKey &&
                                    (0, p.cX)() &&
                                    (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !m.Fe.isOpening
                        ) {
                            let n = !0;
                            if (
                                (R && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, g.Y)(t.nativeEvent)))
                            ) {
                                let e = H(t, "virtual"),
                                    r = W(t, "virtual"),
                                    i = Y(t, "virtual");
                                $(t), (n = e && r && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = W(b(t.currentTarget, t), r),
                                    s = Y(b(t.currentTarget, t), r, !0);
                                (n = i && s), (e.isOverTarget = !1), $(t), j(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), n && t.stopPropagation();
                        }
                    },
                },
                n = (t) => {
                    var n, r, i;
                    if (e.isPressed && e.target && C(t, e.target)) {
                        D((0, f.wt)(t), t.key) && t.preventDefault();
                        let n = (0, f.wt)(t),
                            i = (0, f.sD)(e.target, (0, f.wt)(t));
                        Y(b(e.target, t), "keyboard", i),
                            i && z(t, e.target),
                            B(),
                            "Enter" !== t.key &&
                                v(e.target) &&
                                (0, f.sD)(e.target, n) &&
                                !t[y] &&
                                ((t[y] = !0), (0, m.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            null == (r = e.metaKeyEvents) || r.delete(t.key);
                    } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of ((e.metaKeyEvents = void 0), t.values()))
                            null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", n));
                    }
                };
            if ("u" > typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent))) return;
                    if ((0, g.P)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return;
                    }
                    e.pointerType = t.pointerType;
                    let r = !0;
                    if (!e.isPressed) {
                        (e.isPressed = !0),
                            (e.isOverTarget = !0),
                            (e.activePointerId = t.pointerId),
                            (e.target = t.currentTarget),
                            P || (0, i.M)(e.target),
                            (r = H(t, e.pointerType));
                        let a = (0, f.wt)(t.nativeEvent);
                        "releasePointerCapture" in a && a.releasePointerCapture(t.pointerId),
                            F((0, E.TW)(t.currentTarget), "pointerup", n, !1),
                            F((0, E.TW)(t.currentTarget), "pointercancel", s, !1);
                    }
                    r && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (w) {
                                let n = (0, r.LE)(t.target);
                                n && e.disposables.push(n);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || W(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), H(b(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), Y(b(e.target, t), e.pointerType, !1), K(t));
                    });
                let n = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, f.sD)(e.target, (0, f.wt)(t)) && null != e.pointerType) {
                                let n = !1,
                                    r = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (n ? j(t) : ((0, A.e)(e.target), e.target.click()));
                                    }, 80);
                                F(t.currentTarget, "click", () => (n = !0), !0),
                                    e.disposables.push(() => clearTimeout(r));
                            } else j(t);
                            e.isOverTarget = !1;
                        }
                    },
                    s = (e) => {
                        j(e);
                    };
                t.onDragStart = (e) => {
                    (0, f.sD)(e.currentTarget, (0, f.wt)(e.nativeEvent)) && j(e);
                };
            }
            return t;
        }, [F, R, w, B, P, j, K, Y, H, W, $, z]);
    return (
        (0, I.useEffect)(() => {
            if (!U) return;
            let e = (0, E.TW)(U.current);
            if (!e || !e.head || e.getElementById(N)) return;
            let t = e.createElement("style");
            (t.id = N),
                (t.textContent = `
@layer {
  [${O}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [U]),
        (0, I.useEffect)(() => {
            let e = V.current;
            return () => {
                var t;
                for (let n of (P || (0, i.E)(null != (t = e.target) ? t : void 0), e.disposables)) n();
                e.disposables = [];
            };
        }, [P]),
        { isPressed: L || x, pressProps: (0, u.v)(k, q, { [O]: !0 }) }
    );
}
function v(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function C(e, t) {
    let { key: n, code: r } = e,
        i = t.getAttribute("role");
    return (
        ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) &&
        !(
            (t instanceof (0, E.mD)(t).HTMLInputElement && !w(t, n)) ||
            t instanceof (0, E.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === i || (!i && v(t))) && "Enter" !== n)
    );
}
function b(e, t) {
    let n = t.clientX,
        r = t.clientY;
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey,
        clientX: n,
        clientY: r,
    };
}
function D(e, t) {
    return e instanceof HTMLInputElement
        ? !w(e, t)
        : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !v(e));
}
let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function w(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : L.has(e.type);
}
