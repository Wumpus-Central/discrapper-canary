"use strict";
n.d(t, { d: () => N });
var r = n(89494),
    i = n(907596),
    a = n(726796),
    s = n(139280),
    o = n(170372),
    l = n(499028),
    u = n(803082),
    c = n(434067),
    d = n(114099),
    _ = n(959462),
    f = n(241827),
    p = n(297987),
    h = n(260431),
    m = n(408713),
    g = n(132716),
    E = n(23975),
    A = n(401705);
n(340287);
var I = n(64700);
function T(e) {
    let t = (0, I.useContext)(a.F);
    if (t) {
        let { register: n, ...r } = t;
        (e = (0, u.v)(r, e)), n();
    }
    return (0, c.w)(t, e.ref), e;
}
var y = new WeakMap();
class S {
    continuePropagation() {
        (0, l._)(this, y, !1);
    }
    get shouldStopPropagation() {
        return (0, s._)(this, y);
    }
    constructor(e, t, n, r) {
        var i;
        (0, o._)(this, y, { writable: !0, value: void 0 }), (0, l._)(this, y, !0);
        let a = null != (i = null == r ? void 0 : r.target) ? i : n.currentTarget;
        const s = null == a ? void 0 : a.getBoundingClientRect();
        let u,
            c = 0,
            d,
            _ = null;
        null != n.clientX && null != n.clientY && ((d = n.clientX), (_ = n.clientY)),
            s &&
                (null != d && null != _
                    ? ((u = d - s.left), (c = _ - s.top))
                    : ((u = s.width / 2), (c = s.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = u),
            (this.y = c);
    }
}
let v = Symbol("linkClicked"),
    C = "react-aria-pressable-style",
    b = "data-react-aria-pressable";
function N(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: s,
            onPressUp: o,
            onClick: l,
            isDisabled: c,
            isPressed: y,
            preventFocusOnPress: N,
            shouldCancelOnPointerExit: L,
            allowTextSelectionOnPress: x,
            ref: P,
            ...M
        } = T(e),
        [k, U] = (0, I.useState)(!1),
        G = (0, I.useRef)({
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
        { addGlobalListener: V, removeAllGlobalListeners: F } = (0, d.A)(),
        B = (0, _.J)((e, t) => {
            let r = G.current;
            if (c || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), a)) {
                let n = new S("pressstart", t, e);
                a(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), U(!0), i;
        }),
        j = (0, _.J)((e, r, i = !0) => {
            let a = G.current;
            if (!a.didFirePressStart) return !1;
            (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let o = !0;
            if (s) {
                let t = new S("pressend", r, e);
                s(t), (o = t.shouldStopPropagation);
            }
            if ((n && n(!1), U(!1), t && i && !c)) {
                let n = new S("press", r, e);
                t(n), o && (o = n.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), o;
        }),
        H = (0, _.J)((e, t) => {
            let n = G.current;
            if (c) return !1;
            if (o) {
                n.isTriggeringEvent = !0;
                let r = new S("pressup", t, e);
                return o(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        Y = (0, _.J)((e) => {
            let t = G.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && j(D(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                F(),
                x || (0, i.E)(t.target),
                t.disposables))
                    n();
                t.disposables = [];
            }
        }),
        W = (0, _.J)((e) => {
            L && Y(e);
        }),
        K = (0, _.J)((e) => {
            c || null == l || l(e);
        }),
        z = (0, _.J)((e, t) => {
            if (!c && l) {
                let n = new MouseEvent("click", e);
                (0, r.o1)(n, t), l((0, r.eg)(n));
            }
        }),
        $ = (0, I.useMemo)(() => {
            let e = G.current,
                t = {
                    onKeyDown(t) {
                        if (O(t.nativeEvent, t.currentTarget) && (0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent))) {
                            var r;
                            w((0, f.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let i = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (i = B(t, "keyboard"));
                                let r = t.currentTarget,
                                    a = (t) => {
                                        O(t, r) &&
                                            !t.repeat &&
                                            (0, f.sD)(r, (0, f.wt)(t)) &&
                                            e.target &&
                                            H(D(e.target, t), "keyboard");
                                    };
                                V((0, p.TW)(t.currentTarget), "keyup", (0, h.c)(a, n), !0);
                            }
                            i && t.stopPropagation(),
                                t.metaKey &&
                                    (0, m.cX)() &&
                                    (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !g.Fe.isOpening
                        ) {
                            let n = !0;
                            if (
                                (c && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, E.Y)(t.nativeEvent)))
                            ) {
                                let e = B(t, "virtual"),
                                    r = H(t, "virtual"),
                                    i = j(t, "virtual");
                                K(t), (n = e && r && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = H(D(t.currentTarget, t), r),
                                    a = j(D(t.currentTarget, t), r, !0);
                                (n = i && a), (e.isOverTarget = !1), K(t), Y(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), n && t.stopPropagation();
                        }
                    },
                },
                n = (t) => {
                    var n, r, i;
                    if (e.isPressed && e.target && O(t, e.target)) {
                        w((0, f.wt)(t), t.key) && t.preventDefault();
                        let n = (0, f.wt)(t),
                            i = (0, f.sD)(e.target, (0, f.wt)(t));
                        j(D(e.target, t), "keyboard", i),
                            i && z(t, e.target),
                            F(),
                            "Enter" !== t.key &&
                                R(e.target) &&
                                (0, f.sD)(e.target, n) &&
                                !t[v] &&
                                ((t[v] = !0), (0, g.Fe)(e.target, t, !1)),
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
                    if ((0, E.P)(t.nativeEvent)) {
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
                            x || (0, i.M)(e.target),
                            (r = B(t, e.pointerType));
                        let s = (0, f.wt)(t.nativeEvent);
                        "releasePointerCapture" in s && s.releasePointerCapture(t.pointerId),
                            V((0, p.TW)(t.currentTarget), "pointerup", n, !1),
                            V((0, p.TW)(t.currentTarget), "pointercancel", a, !1);
                    }
                    r && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (N) {
                                let n = (0, r.LE)(t.target);
                                n && e.disposables.push(n);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, f.sD)(t.currentTarget, (0, f.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || H(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), B(D(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), j(D(e.target, t), e.pointerType, !1), W(t));
                    });
                let n = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, f.sD)(e.target, (0, f.wt)(t)) && null != e.pointerType) {
                                let n = !1,
                                    r = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (n ? Y(t) : ((0, A.e)(e.target), e.target.click()));
                                    }, 80);
                                V(t.currentTarget, "click", () => (n = !0), !0),
                                    e.disposables.push(() => clearTimeout(r));
                            } else Y(t);
                            e.isOverTarget = !1;
                        }
                    },
                    a = (e) => {
                        Y(e);
                    };
                t.onDragStart = (e) => {
                    (0, f.sD)(e.currentTarget, (0, f.wt)(e.nativeEvent)) && Y(e);
                };
            }
            return t;
        }, [V, c, N, F, x, Y, W, j, B, H, K, z]);
    return (
        (0, I.useEffect)(() => {
            if (!P) return;
            let e = (0, p.TW)(P.current);
            if (!e || !e.head || e.getElementById(C)) return;
            let t = e.createElement("style");
            (t.id = C),
                (t.textContent = `
@layer {
  [${b}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [P]),
        (0, I.useEffect)(() => {
            let e = G.current;
            return () => {
                var t;
                for (let n of (x || (0, i.E)(null != (t = e.target) ? t : void 0), e.disposables)) n();
                e.disposables = [];
            };
        }, [x]),
        { isPressed: y || k, pressProps: (0, u.v)(M, $, { [b]: !0 }) }
    );
}
function R(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function O(e, t) {
    let { key: n, code: r } = e,
        i = t,
        a = i.getAttribute("role");
    return (
        ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) &&
        !(
            (i instanceof (0, p.mD)(i).HTMLInputElement && !P(i, n)) ||
            i instanceof (0, p.mD)(i).HTMLTextAreaElement ||
            i.isContentEditable
        ) &&
        !(("link" === a || (!a && R(i))) && "Enter" !== n)
    );
}
function D(e, t) {
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
function L(e) {
    return (
        !(e instanceof HTMLInputElement) &&
        (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !R(e))
    );
}
function w(e, t) {
    return e instanceof HTMLInputElement ? !P(e, t) : L(e);
}
let x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function P(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type);
}
