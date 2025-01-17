r.d(n, {
    E: function () {
        return X;
    },
    Fc: function () {
        return ed;
    },
    Jz: function () {
        return J;
    },
    KK: function () {
        return k;
    },
    Kf: function () {
        return ee;
    },
    L_: function () {
        return ei;
    },
    TA: function () {
        return eE;
    },
    XI: function () {
        return ec;
    },
    _w: function () {
        return $;
    },
    mG: function () {
        return er;
    },
    mk: function () {
        return w;
    },
    r7: function () {
        return I;
    },
    r_: function () {
        return ep;
    },
    v5: function () {
        return eh;
    },
    y0: function () {
        return em;
    }
});
var i = r(661763),
    a = r(192379),
    s = r(651512),
    o = r(410914),
    l = r(846135),
    u = r(198453);
let c = 'default',
    d = '',
    f = new WeakMap();
function _(e) {
    if ((0, i.gn)()) {
        if ('default' === c) {
            let n = (0, i.r3)(e);
            (d = n.documentElement.style.webkitUserSelect), (n.documentElement.style.webkitUserSelect = 'none');
        }
        c = 'disabled';
    } else (e instanceof HTMLElement || e instanceof SVGElement) && (f.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function h(e) {
    if ((0, i.gn)())
        'disabled' === c &&
            ((c = 'restoring'),
            setTimeout(() => {
                (0, i.QB)(() => {
                    if ('restoring' === c) {
                        let n = (0, i.r3)(e);
                        'none' === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = d || ''), (d = ''), (c = 'default');
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && f.has(e)) {
        let n = f.get(e);
        'none' === e.style.userSelect && (e.style.userSelect = n), '' === e.getAttribute('style') && e.removeAttribute('style'), f.delete(e);
    }
}
let p = a.createContext({
    register: () => {}
});
function m(e) {
    let n = (0, a.useContext)(p);
    if (n) {
        let { register: r, ...a } = n;
        (e = (0, i.dG)(a, e)), r();
    }
    return (0, i.lE)(n, e.ref), e;
}
p.displayName = 'PressResponderContext';
var g = new WeakMap();
class E {
    continuePropagation() {
        (0, l._)(this, g, !1);
    }
    get shouldStopPropagation() {
        return (0, s._)(this, g);
    }
    constructor(e, n, r) {
        (0, o._)(this, g, {
            writable: !0,
            value: void 0
        }),
            (0, l._)(this, g, !0),
            (this.type = e),
            (this.pointerType = n),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey);
    }
}
let v = Symbol('linkClicked');
function I(e) {
    let { onPress: n, onPressChange: r, onPressStart: s, onPressEnd: o, onPressUp: l, isDisabled: u, isPressed: c, preventFocusOnPress: d, shouldCancelOnPointerExit: f, allowTextSelectionOnPress: p, ref: g, ...I } = m(e),
        [N, C] = (0, a.useState)(!1),
        L = (0, a.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null
        }),
        { addGlobalListener: x, removeAllGlobalListeners: w } = (0, i.xi)(),
        P = (0, i.iW)((e, n) => {
            let i = L.current;
            if (u || i.didFirePressStart) return !1;
            let a = !0;
            if (((i.isTriggeringEvent = !0), s)) {
                let r = new E('pressstart', n, e);
                s(r), (a = r.shouldStopPropagation);
            }
            return r && r(!0), (i.isTriggeringEvent = !1), (i.didFirePressStart = !0), C(!0), a;
        }),
        M = (0, i.iW)((e, i, a = !0) => {
            let s = L.current;
            if (!s.didFirePressStart) return !1;
            (s.ignoreClickAfterPress = !0), (s.didFirePressStart = !1), (s.isTriggeringEvent = !0);
            let l = !0;
            if (o) {
                let n = new E('pressend', i, e);
                o(n), (l = n.shouldStopPropagation);
            }
            if ((r && r(!1), C(!1), n && a && !u)) {
                let r = new E('press', i, e);
                n(r), l && (l = r.shouldStopPropagation);
            }
            return (s.isTriggeringEvent = !1), l;
        }),
        k = (0, i.iW)((e, n) => {
            let r = L.current;
            if (u) return !1;
            if (l) {
                r.isTriggeringEvent = !0;
                let i = new E('pressup', n, e);
                return l(i), (r.isTriggeringEvent = !1), i.shouldStopPropagation;
            }
            return !0;
        }),
        U = (0, i.iW)((e) => {
            let n = L.current;
            n.isPressed && n.target && (n.isOverTarget && null != n.pointerType && M(A(n.target, e), n.pointerType, !1), (n.isPressed = !1), (n.isOverTarget = !1), (n.activePointerId = null), (n.pointerType = null), w(), !p && h(n.target));
        }),
        B = (0, i.iW)((e) => {
            f && U(e);
        }),
        G = (0, a.useMemo)(() => {
            let e = L.current,
                n = {
                    onKeyDown(n) {
                        if (b(n.nativeEvent, n.currentTarget) && n.currentTarget.contains(n.target)) {
                            var a;
                            D(n.target, n.key) && n.preventDefault();
                            let s = !0;
                            !e.isPressed && !n.repeat && ((e.target = n.currentTarget), (e.isPressed = !0), (s = P(n, 'keyboard')), x((0, i.r3)(n.currentTarget), 'keyup', r, !1)), s && n.stopPropagation(), n.metaKey && (0, i.V5)() && (null === (a = e.metaKeyEvents) || void 0 === a || a.set(n.key, n.nativeEvent));
                        } else 'Meta' === n.key && (e.metaKeyEvents = new Map());
                    },
                    onKeyUp(n) {
                        b(n.nativeEvent, n.currentTarget) && !n.repeat && n.currentTarget.contains(n.target) && e.target && k(A(e.target, n), 'keyboard');
                    },
                    onClick(n) {
                        if ((!n || n.currentTarget.contains(n.target)) && n && 0 === n.button && !e.isTriggeringEvent && !i.nG.isOpening) {
                            let r = !0;
                            if ((u && n.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ('virtual' === e.pointerType || (0, i.Zj)(n.nativeEvent)))) {
                                !u && !d && (0, i.Ao)(n.currentTarget);
                                let e = P(n, 'virtual'),
                                    a = k(n, 'virtual'),
                                    s = M(n, 'virtual');
                                r = e && a && s;
                            }
                            (e.ignoreEmulatedMouseEvents = !1), (e.ignoreClickAfterPress = !1), r && n.stopPropagation();
                        }
                    }
                },
                r = (n) => {
                    var r, a, s;
                    if (e.isPressed && e.target && b(n, e.target)) {
                        D(n.target, n.key) && n.preventDefault();
                        let r = n.target,
                            s = M(A(e.target, n), 'keyboard', e.target.contains(r));
                        w(), s && n.stopPropagation(), 'Enter' !== n.key && T(e.target) && e.target.contains(r) && !n[v] && ((n[v] = !0), (0, i.nG)(e.target, n, !1)), (e.isPressed = !1), null === (a = e.metaKeyEvents) || void 0 === a || a.delete(n.key);
                    } else if ('Meta' === n.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                        let n = e.metaKeyEvents;
                        for (let r of ((e.metaKeyEvents = void 0), n.values())) null === (s = e.target) || void 0 === s || s.dispatchEvent(new KeyboardEvent('keyup', r));
                    }
                };
            if ('undefined' != typeof PointerEvent) {
                (n.onPointerDown = (n) => {
                    if (0 !== n.button || !n.currentTarget.contains(n.target)) return;
                    if ((0, i.cr)(n.nativeEvent)) {
                        e.pointerType = 'virtual';
                        return;
                    }
                    O(n.currentTarget) && n.preventDefault(), (e.pointerType = n.pointerType);
                    let o = !0;
                    !e.isPressed && ((e.isPressed = !0), (e.isOverTarget = !0), (e.activePointerId = n.pointerId), (e.target = n.currentTarget), !u && !d && (0, i.Ao)(n.currentTarget), !p && _(e.target), (o = P(n, e.pointerType)), x((0, i.r3)(n.currentTarget), 'pointermove', r, !1), x((0, i.r3)(n.currentTarget), 'pointerup', a, !1), x((0, i.r3)(n.currentTarget), 'pointercancel', s, !1)), o && n.stopPropagation();
                }),
                    (n.onMouseDown = (e) => {
                        e.currentTarget.contains(e.target) && 0 === e.button && (O(e.currentTarget) && e.preventDefault(), e.stopPropagation());
                    }),
                    (n.onPointerUp = (n) => {
                        n.currentTarget.contains(n.target) && 'virtual' !== e.pointerType && 0 === n.button && R(n, n.currentTarget) && k(n, e.pointerType || n.pointerType);
                    });
                let r = (n) => {
                        n.pointerId === e.activePointerId && (e.target && R(n, e.target) ? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), P(A(e.target, n), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), M(A(e.target, n), e.pointerType, !1), B(n)));
                    },
                    a = (n) => {
                        n.pointerId === e.activePointerId && e.isPressed && 0 === n.button && e.target && (R(n, e.target) && null != e.pointerType ? M(A(e.target, n), e.pointerType) : e.isOverTarget && null != e.pointerType && M(A(e.target, n), e.pointerType, !1), (e.isPressed = !1), (e.isOverTarget = !1), (e.activePointerId = null), (e.pointerType = null), w(), !p && h(e.target));
                    },
                    s = (e) => {
                        U(e);
                    };
                n.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && U(e);
                };
            } else {
                (n.onMouseDown = (n) => {
                    if (0 === n.button && !!n.currentTarget.contains(n.target)) {
                        if ((O(n.currentTarget) && n.preventDefault(), e.ignoreEmulatedMouseEvents)) {
                            n.stopPropagation();
                            return;
                        }
                        (e.isPressed = !0), (e.isOverTarget = !0), (e.target = n.currentTarget), (e.pointerType = (0, i.Zj)(n.nativeEvent) ? 'virtual' : 'mouse'), !u && !d && (0, i.Ao)(n.currentTarget), P(n, e.pointerType) && n.stopPropagation(), x((0, i.r3)(n.currentTarget), 'mouseup', r, !1);
                    }
                }),
                    (n.onMouseEnter = (n) => {
                        if (!n.currentTarget.contains(n.target)) return;
                        let r = !0;
                        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !0), (r = P(n, e.pointerType))), r && n.stopPropagation();
                    }),
                    (n.onMouseLeave = (n) => {
                        if (!n.currentTarget.contains(n.target)) return;
                        let r = !0;
                        e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && ((e.isOverTarget = !1), (r = M(n, e.pointerType, !1)), B(n)), r && n.stopPropagation();
                    }),
                    (n.onMouseUp = (n) => {
                        n.currentTarget.contains(n.target) && !e.ignoreEmulatedMouseEvents && 0 === n.button && k(n, e.pointerType || 'mouse');
                    });
                let r = (n) => {
                    if (0 === n.button) {
                        if (((e.isPressed = !1), w(), e.ignoreEmulatedMouseEvents)) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return;
                        }
                        e.target && R(n, e.target) && null != e.pointerType ? M(A(e.target, n), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && M(A(e.target, n), e.pointerType, !1), (e.isOverTarget = !1);
                    }
                };
                (n.onTouchStart = (n) => {
                    if (!n.currentTarget.contains(n.target)) return;
                    let r = y(n.nativeEvent);
                    if (!!r) (e.activePointerId = r.identifier), (e.ignoreEmulatedMouseEvents = !0), (e.isOverTarget = !0), (e.isPressed = !0), (e.target = n.currentTarget), (e.pointerType = 'touch'), !u && !d && (0, i.Ao)(n.currentTarget), !p && _(e.target), P(n, e.pointerType) && n.stopPropagation(), x((0, i.kR)(n.currentTarget), 'scroll', a, !0);
                }),
                    (n.onTouchMove = (n) => {
                        if (!n.currentTarget.contains(n.target)) return;
                        if (!e.isPressed) {
                            n.stopPropagation();
                            return;
                        }
                        let r = S(n.nativeEvent, e.activePointerId),
                            i = !0;
                        r && R(r, n.currentTarget) ? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), (i = P(n, e.pointerType))) : e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), (i = M(n, e.pointerType, !1)), B(n)), i && n.stopPropagation();
                    }),
                    (n.onTouchEnd = (n) => {
                        if (!n.currentTarget.contains(n.target)) return;
                        if (!e.isPressed) {
                            n.stopPropagation();
                            return;
                        }
                        let r = S(n.nativeEvent, e.activePointerId),
                            i = !0;
                        r && R(r, n.currentTarget) && null != e.pointerType ? (k(n, e.pointerType), (i = M(n, e.pointerType))) : e.isOverTarget && null != e.pointerType && (i = M(n, e.pointerType, !1)), i && n.stopPropagation(), (e.isPressed = !1), (e.activePointerId = null), (e.isOverTarget = !1), (e.ignoreEmulatedMouseEvents = !0), e.target && !p && h(e.target), w();
                    }),
                    (n.onTouchCancel = (n) => {
                        n.currentTarget.contains(n.target) && (n.stopPropagation(), e.isPressed && U(n));
                    });
                let a = (n) => {
                    e.isPressed &&
                        n.target.contains(e.target) &&
                        U({
                            currentTarget: e.target,
                            shiftKey: !1,
                            ctrlKey: !1,
                            metaKey: !1,
                            altKey: !1
                        });
                };
                n.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && U(e);
                };
            }
            return n;
        }, [x, u, d, w, p, U, B, M, P, k]);
    return (
        (0, a.useEffect)(
            () => () => {
                var e;
                !p && h(null !== (e = L.current.target) && void 0 !== e ? e : void 0);
            },
            [p]
        ),
        {
            isPressed: c || N,
            pressProps: (0, i.dG)(I, G)
        }
    );
}
function T(e) {
    return 'A' === e.tagName && e.hasAttribute('href');
}
function b(e, n) {
    let { key: r, code: a } = e,
        s = n,
        o = s.getAttribute('role');
    return ('Enter' === r || ' ' === r || 'Spacebar' === r || 'Space' === a) && !((s instanceof (0, i.kR)(s).HTMLInputElement && !x(s, r)) || s instanceof (0, i.kR)(s).HTMLTextAreaElement || s.isContentEditable) && !(('link' === o || (!o && T(s))) && 'Enter' !== r);
}
function y(e) {
    let { targetTouches: n } = e;
    return n.length > 0 ? n[0] : null;
}
function S(e, n) {
    let r = e.changedTouches;
    for (let e = 0; e < r.length; e++) {
        let i = r[e];
        if (i.identifier === n) return i;
    }
    return null;
}
function A(e, n) {
    return {
        currentTarget: e,
        shiftKey: n.shiftKey,
        ctrlKey: n.ctrlKey,
        metaKey: n.metaKey,
        altKey: n.altKey
    };
}
function N(e) {
    let n = 0,
        r = 0;
    return (
        void 0 !== e.width ? (n = e.width / 2) : void 0 !== e.radiusX && (n = e.radiusX),
        void 0 !== e.height ? (r = e.height / 2) : void 0 !== e.radiusY && (r = e.radiusY),
        {
            top: e.clientY - r,
            right: e.clientX + n,
            bottom: e.clientY + r,
            left: e.clientX - n
        }
    );
}
function C(e, n) {
    return !(e.left > n.right) && !(n.left > e.right) && !(e.top > n.bottom) && !(n.top > e.bottom) && !0;
}
function R(e, n) {
    return C(n.getBoundingClientRect(), N(e));
}
function O(e) {
    return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function D(e, n) {
    return e instanceof HTMLInputElement ? !x(e, n) : e instanceof HTMLButtonElement ? 'submit' !== e.type && 'reset' !== e.type : !T(e) && !0;
}
let L = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function x(e, n) {
    return 'checkbox' === e.type || 'radio' === e.type ? ' ' === n : L.has(e.type);
}
function w({ children: e }) {
    let n = (0, a.useMemo)(
        () => ({
            register: () => {}
        }),
        []
    );
    return a.createElement(p.Provider, { value: n }, e);
}
class P {
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
    constructor(e, n) {
        (this.nativeEvent = n), (this.target = n.target), (this.currentTarget = n.currentTarget), (this.relatedTarget = n.relatedTarget), (this.bubbles = n.bubbles), (this.cancelable = n.cancelable), (this.defaultPrevented = n.defaultPrevented), (this.eventPhase = n.eventPhase), (this.isTrusted = n.isTrusted), (this.timeStamp = n.timeStamp), (this.type = e);
    }
}
function M(e) {
    let n = (0, a.useRef)({
        isFocused: !1,
        observer: null
    });
    (0, i.bt)(() => {
        let e = n.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let r = (0, i.iW)((n) => {
        null == e || e(n);
    });
    return (0, a.useCallback)(
        (e) => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                n.current.isFocused = !0;
                let i = e.target,
                    a = (e) => {
                        (n.current.isFocused = !1), i.disabled && r(new P('blur', e)), n.current.observer && (n.current.observer.disconnect(), (n.current.observer = null));
                    };
                i.addEventListener('focusout', a, { once: !0 }),
                    (n.current.observer = new MutationObserver(() => {
                        if (n.current.isFocused && i.disabled) {
                            var e;
                            null === (e = n.current.observer) || void 0 === e || e.disconnect();
                            let r = i === document.activeElement ? null : document.activeElement;
                            i.dispatchEvent(new FocusEvent('blur', { relatedTarget: r })),
                                i.dispatchEvent(
                                    new FocusEvent('focusout', {
                                        bubbles: !0,
                                        relatedTarget: r
                                    })
                                );
                        }
                    })),
                    n.current.observer.observe(i, {
                        attributes: !0,
                        attributeFilter: ['disabled']
                    });
            }
        },
        [r]
    );
}
function k(e) {
    let { isDisabled: n, onFocus: r, onBlur: i, onFocusChange: s } = e,
        o = (0, a.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return i && i(e), s && s(!1), !0;
            },
            [i, s]
        ),
        l = M(o),
        u = (0, a.useCallback)(
            (e) => {
                e.target === e.currentTarget && document.activeElement === e.target && (r && r(e), s && s(!0), l(e));
            },
            [s, r, l]
        );
    return {
        focusProps: {
            onFocus: !n && (r || s || i) ? u : void 0,
            onBlur: !n && (i || s) ? o : void 0
        }
    };
}
let U = null,
    B = new Set(),
    G = !1,
    Z = !1,
    F = !1,
    V = {
        Tab: !0,
        Escape: !0
    };
function j(e, n) {
    for (let r of B) r(e, n);
}
function H(e) {
    return !(e.metaKey || (!(0, i.V5)() && e.altKey) || e.ctrlKey || 'Control' === e.key || 'Shift' === e.key || 'Meta' === e.key);
}
function Y(e) {
    (Z = !0), H(e) && ((U = 'keyboard'), j('keyboard', e));
}
function W(e) {
    (U = 'pointer'), ('mousedown' === e.type || 'pointerdown' === e.type) && ((Z = !0), j('pointer', e));
}
function K(e) {
    (0, i.Zj)(e) && ((Z = !0), (U = 'virtual'));
}
function z(e) {
    e.target !== window && e.target !== document && (!Z && !F && ((U = 'virtual'), j('virtual', e)), (Z = !1), (F = !1));
}
function q() {
    (Z = !1), (F = !0);
}
function Q() {
    if ('undefined' == typeof window || G) return;
    let e = HTMLElement.prototype.focus;
    (HTMLElement.prototype.focus = function () {
        (Z = !0), e.apply(this, arguments);
    }),
        document.addEventListener('keydown', Y, !0),
        document.addEventListener('keyup', Y, !0),
        document.addEventListener('click', K, !0),
        window.addEventListener('focus', z, !0),
        window.addEventListener('blur', q, !1),
        'undefined' != typeof PointerEvent ? (document.addEventListener('pointerdown', W, !0), document.addEventListener('pointermove', W, !0), document.addEventListener('pointerup', W, !0)) : (document.addEventListener('mousedown', W, !0), document.addEventListener('mousemove', W, !0), document.addEventListener('mouseup', W, !0)),
        (G = !0);
}
function X() {
    return 'pointer' !== U;
}
function J() {
    return U;
}
function $(e) {
    (U = e), j(e, null);
}
function ee() {
    Q();
    let [e, n] = (0, a.useState)(U);
    return (
        (0, a.useEffect)(() => {
            let e = () => {
                n(U);
            };
            return (
                B.add(e),
                () => {
                    B.delete(e);
                }
            );
        }, []),
        (0, u.Av)() ? null : e
    );
}
'undefined' != typeof document && ('loading' !== document.readyState ? Q() : document.addEventListener('DOMContentLoaded', Q));
let et = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function en(e, n, r) {
    var i;
    return !((e = e || ((null == r ? void 0 : r.target) instanceof HTMLInputElement && !et.has(null == r ? void 0 : null === (i = r.target) || void 0 === i ? void 0 : i.type)) || (null == r ? void 0 : r.target) instanceof HTMLTextAreaElement || ((null == r ? void 0 : r.target) instanceof HTMLElement && (null == r ? void 0 : r.target.isContentEditable))) && 'keyboard' === n && r instanceof KeyboardEvent && !V[r.key]);
}
function er(e, n, r) {
    Q(),
        (0, a.useEffect)(() => {
            let n = (n, i) => {
                en(!!(null == r ? void 0 : r.isTextInput), n, i) && e(X());
            };
            return (
                B.add(n),
                () => {
                    B.delete(n);
                }
            );
        }, n);
}
function ei(e) {
    let { isDisabled: n, onBlurWithin: r, onFocusWithin: i, onFocusWithinChange: s } = e,
        o = (0, a.useRef)({ isFocusWithin: !1 }),
        l = (0, a.useCallback)(
            (e) => {
                o.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && ((o.current.isFocusWithin = !1), r && r(e), s && s(!1));
            },
            [r, s, o]
        ),
        u = M(l),
        c = (0, a.useCallback)(
            (e) => {
                !o.current.isFocusWithin && document.activeElement === e.target && (i && i(e), s && s(!0), (o.current.isFocusWithin = !0), u(e));
            },
            [i, s, u]
        );
    return n
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0
              }
          }
        : {
              focusWithinProps: {
                  onFocus: c,
                  onBlur: l
              }
          };
}
let ea = !1,
    es = 0;
function eo() {
    (ea = !0),
        setTimeout(() => {
            ea = !1;
        }, 50);
}
function el(e) {
    'touch' === e.pointerType && eo();
}
function eu() {
    if ('undefined' != typeof document)
        return (
            'undefined' != typeof PointerEvent ? document.addEventListener('pointerup', el) : document.addEventListener('touchend', eo),
            es++,
            () => {
                !(--es > 0) && ('undefined' != typeof PointerEvent ? document.removeEventListener('pointerup', el) : document.removeEventListener('touchend', eo));
            }
        );
}
function ec(e) {
    let { onHoverStart: n, onHoverChange: r, onHoverEnd: i, isDisabled: s } = e,
        [o, l] = (0, a.useState)(!1),
        u = (0, a.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: '',
            target: null
        }).current;
    (0, a.useEffect)(eu, []);
    let { hoverProps: c, triggerHoverEnd: d } = (0, a.useMemo)(() => {
        let e = (e, i) => {
                if (((u.pointerType = i), s || 'touch' === i || u.isHovered || !e.currentTarget.contains(e.target))) return;
                u.isHovered = !0;
                let a = e.currentTarget;
                (u.target = a),
                    n &&
                        n({
                            type: 'hoverstart',
                            target: a,
                            pointerType: i
                        }),
                    r && r(!0),
                    l(!0);
            },
            a = (e, n) => {
                if (((u.pointerType = ''), (u.target = null), 'touch' === n || !u.isHovered)) return;
                u.isHovered = !1;
                let a = e.currentTarget;
                i &&
                    i({
                        type: 'hoverend',
                        target: a,
                        pointerType: n
                    }),
                    r && r(!1),
                    l(!1);
            },
            o = {};
        return (
            'undefined' != typeof PointerEvent
                ? ((o.onPointerEnter = (n) => {
                      (!ea || 'mouse' !== n.pointerType) && e(n, n.pointerType);
                  }),
                  (o.onPointerLeave = (e) => {
                      !s && e.currentTarget.contains(e.target) && a(e, e.pointerType);
                  }))
                : ((o.onTouchStart = () => {
                      u.ignoreEmulatedMouseEvents = !0;
                  }),
                  (o.onMouseEnter = (n) => {
                      !u.ignoreEmulatedMouseEvents && !ea && e(n, 'mouse'), (u.ignoreEmulatedMouseEvents = !1);
                  }),
                  (o.onMouseLeave = (e) => {
                      !s && e.currentTarget.contains(e.target) && a(e, 'mouse');
                  })),
            {
                hoverProps: o,
                triggerHoverEnd: a
            }
        );
    }, [n, r, i, s, u]);
    return (
        (0, a.useEffect)(() => {
            s && d({ currentTarget: u.target }, u.pointerType);
        }, [s]),
        {
            hoverProps: c,
            isHovered: o
        }
    );
}
function ed(e) {
    let { ref: n, onInteractOutside: r, isDisabled: s, onInteractOutsideStart: o } = e,
        l = (0, a.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1
        }),
        u = (0, i.iW)((e) => {
            r && ef(e, n) && (o && o(e), (l.current.isPointerDown = !0));
        }),
        c = (0, i.iW)((e) => {
            r && r(e);
        });
    (0, a.useEffect)(() => {
        let e = l.current;
        if (s) return;
        let r = n.current,
            a = (0, i.r3)(r);
        if ('undefined' != typeof PointerEvent) {
            let r = (r) => {
                e.isPointerDown && ef(r, n) && c(r), (e.isPointerDown = !1);
            };
            return (
                a.addEventListener('pointerdown', u, !0),
                a.addEventListener('pointerup', r, !0),
                () => {
                    a.removeEventListener('pointerdown', u, !0), a.removeEventListener('pointerup', r, !0);
                }
            );
        }
        {
            let r = (r) => {
                    e.ignoreEmulatedMouseEvents ? (e.ignoreEmulatedMouseEvents = !1) : e.isPointerDown && ef(r, n) && c(r), (e.isPointerDown = !1);
                },
                i = (r) => {
                    (e.ignoreEmulatedMouseEvents = !0), e.isPointerDown && ef(r, n) && c(r), (e.isPointerDown = !1);
                };
            return (
                a.addEventListener('mousedown', u, !0),
                a.addEventListener('mouseup', r, !0),
                a.addEventListener('touchstart', u, !0),
                a.addEventListener('touchend', i, !0),
                () => {
                    a.removeEventListener('mousedown', u, !0), a.removeEventListener('mouseup', r, !0), a.removeEventListener('touchstart', u, !0), a.removeEventListener('touchend', i, !0);
                }
            );
        }
    }, [n, s, u, c]);
}
function ef(e, n) {
    if (e.button > 0) return !1;
    if (e.target) {
        let n = e.target.ownerDocument;
        if (!n || !n.documentElement.contains(e.target) || e.target.closest('[data-react-aria-top-layer]')) return !1;
    }
    return n.current && !n.current.contains(e.target);
}
function e_(e) {
    if (!e) return;
    let n = !0;
    return (r) => {
        e({
            ...r,
            preventDefault() {
                r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
                console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
            },
            continuePropagation() {
                n = !1;
            }
        }),
            n && r.stopPropagation();
    };
}
function eh(e) {
    return {
        keyboardProps: e.isDisabled
            ? {}
            : {
                  onKeyDown: e_(e.onKeyDown),
                  onKeyUp: e_(e.onKeyUp)
              }
    };
}
function ep(e) {
    let { onMoveStart: n, onMove: r, onMoveEnd: s } = e,
        o = (0, a.useRef)({
            didMove: !1,
            lastPosition: null,
            id: null
        }),
        { addGlobalListener: l, removeGlobalListener: u } = (0, i.xi)(),
        c = (0, i.iW)((e, i, a, s) => {
            (0 !== a || 0 !== s) &&
                (!o.current.didMove &&
                    ((o.current.didMove = !0),
                    null == n ||
                        n({
                            type: 'movestart',
                            pointerType: i,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey
                        })),
                null == r ||
                    r({
                        type: 'move',
                        pointerType: i,
                        deltaX: a,
                        deltaY: s,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey
                    }));
        }),
        d = (0, i.iW)((e, n) => {
            h(),
                o.current.didMove &&
                    (null == s ||
                        s({
                            type: 'moveend',
                            pointerType: n,
                            shiftKey: e.shiftKey,
                            metaKey: e.metaKey,
                            ctrlKey: e.ctrlKey,
                            altKey: e.altKey
                        }));
        });
    return {
        moveProps: (0, a.useMemo)(() => {
            let e = {},
                n = () => {
                    _(), (o.current.didMove = !1);
                };
            if ('undefined' == typeof PointerEvent) {
                let r = (e) => {
                        if (0 === e.button) {
                            var n, r, i, a;
                            c(e, 'mouse', e.pageX - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== i ? i : 0), e.pageY - (null !== (a = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== a ? a : 0)),
                                (o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                });
                        }
                    },
                    i = (e) => {
                        0 === e.button && (d(e, 'mouse'), u(window, 'mousemove', r, !1), u(window, 'mouseup', i, !1));
                    };
                e.onMouseDown = (e) => {
                    0 === e.button &&
                        (n(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        (o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }),
                        l(window, 'mousemove', r, !1),
                        l(window, 'mouseup', i, !1));
                };
                let a = (e) => {
                        let n = [...e.changedTouches].findIndex(({ identifier: e }) => e === o.current.id);
                        if (n >= 0) {
                            var r, i, a, s;
                            let { pageX: l, pageY: u } = e.changedTouches[n];
                            c(e, 'touch', l - (null !== (a = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageX) && void 0 !== a ? a : 0), u - (null !== (s = null === (i = o.current.lastPosition) || void 0 === i ? void 0 : i.pageY) && void 0 !== s ? s : 0)),
                                (o.current.lastPosition = {
                                    pageX: l,
                                    pageY: u
                                });
                        }
                    },
                    s = (e) => {
                        [...e.changedTouches].findIndex(({ identifier: e }) => e === o.current.id) >= 0 && (d(e, 'touch'), (o.current.id = null), u(window, 'touchmove', a), u(window, 'touchend', s), u(window, 'touchcancel', s));
                    };
                e.onTouchStart = (e) => {
                    if (0 === e.changedTouches.length || null != o.current.id) return;
                    let { pageX: r, pageY: i, identifier: u } = e.changedTouches[0];
                    n(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        (o.current.lastPosition = {
                            pageX: r,
                            pageY: i
                        }),
                        (o.current.id = u),
                        l(window, 'touchmove', a, !1),
                        l(window, 'touchend', s, !1),
                        l(window, 'touchcancel', s, !1);
                };
            } else {
                let r = (e) => {
                        if (e.pointerId === o.current.id) {
                            var n, r, i, a;
                            let s = e.pointerType || 'mouse';
                            c(e, s, e.pageX - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== i ? i : 0), e.pageY - (null !== (a = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== a ? a : 0)),
                                (o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                });
                        }
                    },
                    i = (e) => {
                        if (e.pointerId === o.current.id) {
                            let n = e.pointerType || 'mouse';
                            d(e, n), (o.current.id = null), u(window, 'pointermove', r, !1), u(window, 'pointerup', i, !1), u(window, 'pointercancel', i, !1);
                        }
                    };
                e.onPointerDown = (e) => {
                    0 === e.button &&
                        null == o.current.id &&
                        (n(),
                        e.stopPropagation(),
                        e.preventDefault(),
                        (o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }),
                        (o.current.id = e.pointerId),
                        l(window, 'pointermove', r, !1),
                        l(window, 'pointerup', i, !1),
                        l(window, 'pointercancel', i, !1));
                };
            }
            let r = (e, r, i) => {
                n(), c(e, 'keyboard', r, i), d(e, 'keyboard');
            };
            return (
                (e.onKeyDown = (e) => {
                    switch (e.key) {
                        case 'Left':
                        case 'ArrowLeft':
                            e.preventDefault(), e.stopPropagation(), r(e, -1, 0);
                            break;
                        case 'Right':
                        case 'ArrowRight':
                            e.preventDefault(), e.stopPropagation(), r(e, 1, 0);
                            break;
                        case 'Up':
                        case 'ArrowUp':
                            e.preventDefault(), e.stopPropagation(), r(e, 0, -1);
                            break;
                        case 'Down':
                        case 'ArrowDown':
                            e.preventDefault(), e.stopPropagation(), r(e, 0, 1);
                    }
                }),
                e
            );
        }, [o, l, u, c, d])
    };
}
function em(e, n) {
    let { onScroll: r, isDisabled: s } = e,
        o = (0, a.useCallback)(
            (e) => {
                !e.ctrlKey &&
                    (e.preventDefault(),
                    e.stopPropagation(),
                    r &&
                        r({
                            deltaX: e.deltaX,
                            deltaY: e.deltaY
                        }));
            },
            [r]
        );
    (0, i.zX)(n, 'wheel', s ? void 0 : o);
}
let eg = 500;
function eE(e) {
    let { isDisabled: n, onLongPressStart: r, onLongPressEnd: s, onLongPress: o, threshold: l = eg, accessibilityDescription: u } = e,
        c = (0, a.useRef)(),
        { addGlobalListener: d, removeGlobalListener: f } = (0, i.xi)(),
        { pressProps: _ } = I({
            isDisabled: n,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                        (r &&
                            r({
                                ...e,
                                type: 'longpressstart'
                            }),
                        (c.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
                                o &&
                                    o({
                                        ...e,
                                        type: 'longpress'
                                    }),
                                (c.current = void 0);
                        }, l)),
                        'touch' === e.pointerType))
                ) {
                    let n = (e) => {
                        e.preventDefault();
                    };
                    d(e.target, 'contextmenu', n, { once: !0 }),
                        d(
                            window,
                            'pointerup',
                            () => {
                                setTimeout(() => {
                                    f(e.target, 'contextmenu', n);
                                }, 30);
                            },
                            { once: !0 }
                        );
                }
            },
            onPressEnd(e) {
                c.current && clearTimeout(c.current),
                    s &&
                        ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                        s({
                            ...e,
                            type: 'longpressend'
                        });
            }
        }),
        h = (0, i.PK)(o && !n ? u : void 0);
    return { longPressProps: (0, i.dG)(_, h) };
}
