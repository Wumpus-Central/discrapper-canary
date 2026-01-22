n.d(t, {
    d: () => C,
});
var r = n(89494),
    i = n(907596),
    a = n(726796),
    s = n(139280),
    o = n(170372),
    l = n(499028),
    c = n(803082),
    u = n(434067),
    d = n(114099),
    f = n(959462),
    p = n(241827),
    _ = n(297987),
    h = n(260431),
    m = n(408713),
    g = n(132716),
    E = n(23975),
    b = n(401705);
n(340287);
var y = n(64700);

function O(e) {
    let t = (0, y.useContext)(a.F);
    if (t) {
        let { register: n, ...r } = t;
        (e = (0, c.v)(r, e)), n();
    }
    return (0, u.w)(t, e.ref), e;
}
var A = new WeakMap();
class v {
    continuePropagation() {
        (0, l._)(this, A, !1);
    }
    get shouldStopPropagation() {
        return (0, s._)(this, A);
    }
    constructor(e, t, n, r) {
        var i;
        (0, o._)(this, A, {
            writable: !0,
            value: void 0,
        }),
            (0, l._)(this, A, !0);
        let a = null != (i = null == r ? void 0 : r.target) ? i : n.currentTarget;
        const s = null == a ? void 0 : a.getBoundingClientRect();
        let c,
            u = 0,
            d,
            f = null;
        null != n.clientX && null != n.clientY && ((d = n.clientX), (f = n.clientY)),
            s &&
                (null != d && null != f
                    ? ((c = d - s.left), (u = f - s.top))
                    : ((c = s.width / 2), (u = s.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = c),
            (this.y = u);
    }
}
let S = Symbol("linkClicked"),
    I = "react-aria-pressable-style",
    T = "data-react-aria-pressable";

function C(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: s,
            onPressUp: o,
            onClick: l,
            isDisabled: u,
            isPressed: A,
            preventFocusOnPress: C,
            shouldCancelOnPointerExit: P,
            allowTextSelectionOnPress: x,
            ref: L,
            ...j
        } = O(e),
        [M, k] = (0, y.useState)(!1),
        U = (0, y.useRef)({
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
        { addGlobalListener: G, removeAllGlobalListeners: V } = (0, d.A)(),
        F = (0, f.J)((e, t) => {
            let r = U.current;
            if (u || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), a)) {
                let n = new v("pressstart", t, e);
                a(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), k(!0), i;
        }),
        B = (0, f.J)((e, r, i = !0) => {
            let a = U.current;
            if (!a.didFirePressStart) return !1;
            (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let o = !0;
            if (s) {
                let t = new v("pressend", r, e);
                s(t), (o = t.shouldStopPropagation);
            }
            if ((n && n(!1), k(!1), t && i && !u)) {
                let n = new v("press", r, e);
                t(n), o && (o = n.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), o;
        }),
        H = (0, f.J)((e, t) => {
            let n = U.current;
            if (u) return !1;
            if (o) {
                n.isTriggeringEvent = !0;
                let r = new v("pressup", t, e);
                return o(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        Y = (0, f.J)((e) => {
            let t = U.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && B(w(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                V(),
                x || (0, i.E)(t.target),
                t.disposables))
                    n();
                t.disposables = [];
            }
        }),
        W = (0, f.J)((e) => {
            P && Y(e);
        }),
        K = (0, f.J)((e) => {
            u || null == l || l(e);
        }),
        z = (0, f.J)((e, t) => {
            if (!u && l) {
                let n = new MouseEvent("click", e);
                (0, r.o1)(n, t), l((0, r.eg)(n));
            }
        }),
        q = (0, y.useMemo)(() => {
            let e = U.current,
                t = {
                    onKeyDown(t) {
                        if (R(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent))) {
                            var r;
                            D((0, p.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let i = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (i = F(t, "keyboard"));
                                let r = t.currentTarget,
                                    a = (t) => {
                                        R(t, r) &&
                                            !t.repeat &&
                                            (0, p.sD)(r, (0, p.wt)(t)) &&
                                            e.target &&
                                            H(w(e.target, t), "keyboard");
                                    };
                                G((0, _.TW)(t.currentTarget), "keyup", (0, h.c)(a, n), !0);
                            }
                            i && t.stopPropagation(),
                                t.metaKey &&
                                    (0, m.cX)() &&
                                    (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !g.Fe.isOpening
                        ) {
                            let n = !0;
                            if (
                                (u && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, E.Y)(t.nativeEvent)))
                            ) {
                                let e = F(t, "virtual"),
                                    r = H(t, "virtual"),
                                    i = B(t, "virtual");
                                K(t), (n = e && r && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = H(w(t.currentTarget, t), r),
                                    a = B(w(t.currentTarget, t), r, !0);
                                (n = i && a), (e.isOverTarget = !1), K(t), Y(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), n && t.stopPropagation();
                        }
                    },
                },
                n = (t) => {
                    var n, r, i;
                    if (e.isPressed && e.target && R(t, e.target)) {
                        D((0, p.wt)(t), t.key) && t.preventDefault();
                        let n = (0, p.wt)(t),
                            i = (0, p.sD)(e.target, (0, p.wt)(t));
                        B(w(e.target, t), "keyboard", i),
                            i && z(t, e.target),
                            V(),
                            "Enter" !== t.key &&
                                N(e.target) &&
                                (0, p.sD)(e.target, n) &&
                                !t[S] &&
                                ((t[S] = !0), (0, g.Fe)(e.target, t, !1)),
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
                    if (0 !== t.button || !(0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent))) return;
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
                            (r = F(t, e.pointerType));
                        let s = (0, p.wt)(t.nativeEvent);
                        "releasePointerCapture" in s && s.releasePointerCapture(t.pointerId),
                            G((0, _.TW)(t.currentTarget), "pointerup", n, !1),
                            G((0, _.TW)(t.currentTarget), "pointercancel", a, !1);
                    }
                    r && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (C) {
                                let n = (0, r.LE)(t.target);
                                n && e.disposables.push(n);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, p.sD)(t.currentTarget, (0, p.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || H(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), F(w(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), B(w(e.target, t), e.pointerType, !1), W(t));
                    });
                let n = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
                                let n = !1,
                                    r = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (n ? Y(t) : ((0, b.e)(e.target), e.target.click()));
                                    }, 80);
                                G(t.currentTarget, "click", () => (n = !0), !0),
                                    e.disposables.push(() => clearTimeout(r));
                            } else Y(t);
                            e.isOverTarget = !1;
                        }
                    },
                    a = (e) => {
                        Y(e);
                    };
                t.onDragStart = (e) => {
                    (0, p.sD)(e.currentTarget, (0, p.wt)(e.nativeEvent)) && Y(e);
                };
            }
            return t;
        }, [G, u, C, V, x, Y, W, B, F, H, K, z]);
    return (
        (0, y.useEffect)(() => {
            if (!L) return;
            let e = (0, _.TW)(L.current);
            if (!e || !e.head || e.getElementById(I)) return;
            let t = e.createElement("style");
            (t.id = I),
                (t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [L]),
        (0, y.useEffect)(() => {
            let e = U.current;
            return () => {
                var t;
                for (let n of (x || (0, i.E)(null != (t = e.target) ? t : void 0), e.disposables)) n();
                e.disposables = [];
            };
        }, [x]),
        {
            isPressed: A || M,
            pressProps: (0, c.v)(j, q, {
                [T]: !0,
            }),
        }
    );
}

function N(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}

function R(e, t) {
    let { key: n, code: r } = e,
        i = t,
        a = i.getAttribute("role");
    return (
        ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) &&
        !(
            (i instanceof (0, _.mD)(i).HTMLInputElement && !L(i, n)) ||
            i instanceof (0, _.mD)(i).HTMLTextAreaElement ||
            i.isContentEditable
        ) &&
        !(("link" === a || (!a && N(i))) && "Enter" !== n)
    );
}

function w(e, t) {
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

function P(e) {
    return (
        !(e instanceof HTMLInputElement) &&
        (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !N(e))
    );
}

function D(e, t) {
    return e instanceof HTMLInputElement ? !L(e, t) : P(e);
}
let x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function L(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type);
}
