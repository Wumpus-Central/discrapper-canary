"use strict";
n.d(t, { Cl: () => N, K7: () => L, ME: () => b, lb: () => R, pP: () => C });
var r = n(89494),
    i = n(408713),
    a = n(23975),
    s = n(297987),
    o = n(64700),
    l = n(341221);
let u = null,
    c = new Set(),
    d = new Map(),
    _ = !1,
    f = !1,
    p = { Tab: !0, Escape: !0 };
function h(e, t) {
    for (let n of c) n(e, t);
}
function m(e) {
    return !(
        e.metaKey ||
        (!(0, i.cX)() && e.altKey) ||
        e.ctrlKey ||
        "Control" === e.key ||
        "Shift" === e.key ||
        "Meta" === e.key
    );
}
function g(e) {
    (_ = !0), m(e) && ((u = "keyboard"), h("keyboard", e));
}
function E(e) {
    (u = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((_ = !0), h("pointer", e));
}
function A(e) {
    (0, a.Y)(e) && ((_ = !0), (u = "virtual"));
}
function I(e) {
    e.target !== window &&
        e.target !== document &&
        !r.lR &&
        e.isTrusted &&
        (_ || f || ((u = "virtual"), h("virtual", e)), (_ = !1), (f = !1));
}
function T() {
    r.lR || ((_ = !1), (f = !0));
}
function y(e) {
    if ("u" < typeof window || "u" < typeof document || d.get((0, s.mD)(e))) return;
    let t = (0, s.mD)(e),
        n = (0, s.TW)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (_ = !0), r.apply(this, arguments);
    }),
        n.addEventListener("keydown", g, !0),
        n.addEventListener("keyup", g, !0),
        n.addEventListener("click", A, !0),
        t.addEventListener("focus", I, !0),
        t.addEventListener("blur", T, !1),
        "u" > typeof PointerEvent &&
            (n.addEventListener("pointerdown", E, !0),
            n.addEventListener("pointermove", E, !0),
            n.addEventListener("pointerup", E, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                S(e);
            },
            { once: !0 },
        ),
        d.set(t, { focus: r });
}
let S = (e, t) => {
    let n = (0, s.mD)(e),
        r = (0, s.TW)(e);
    t && r.removeEventListener("DOMContentLoaded", t),
        d.has(n) &&
            ((n.HTMLElement.prototype.focus = d.get(n).focus),
            r.removeEventListener("keydown", g, !0),
            r.removeEventListener("keyup", g, !0),
            r.removeEventListener("click", A, !0),
            n.removeEventListener("focus", I, !0),
            n.removeEventListener("blur", T, !1),
            "u" > typeof PointerEvent &&
                (r.removeEventListener("pointerdown", E, !0),
                r.removeEventListener("pointermove", E, !0),
                r.removeEventListener("pointerup", E, !0)),
            d.delete(n));
};
function v(e) {
    let t,
        n = (0, s.TW)(e);
    return (
        "loading" !== n.readyState
            ? y(e)
            : ((t = () => {
                  y(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
        () => S(e, t)
    );
}
function C() {
    return "pointer" !== u;
}
function b() {
    return u;
}
function N(e) {
    (u = e), h(e, null);
}
function R() {
    y();
    let [e, t] = (0, o.useState)(u);
    return (
        (0, o.useEffect)(() => {
            let e = () => {
                t(u);
            };
            return (
                c.add(e),
                () => {
                    c.delete(e);
                }
            );
        }, []),
        (0, l.wR)() ? null : e
    );
}
"u" > typeof document && v();
let O = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function D(e, t, n) {
    let r = (0, s.TW)(null == n ? void 0 : n.target),
        i = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
        a = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
        o = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
        l = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return !(
        (e =
            e ||
            (r.activeElement instanceof i && !O.has(r.activeElement.type)) ||
            r.activeElement instanceof a ||
            (r.activeElement instanceof o && r.activeElement.isContentEditable)) &&
        "keyboard" === t &&
        n instanceof l &&
        !p[n.key]
    );
}
function L(e, t, n) {
    y(),
        (0, o.useEffect)(() => {
            let t = (t, r) => {
                D(!!(null == n ? void 0 : n.isTextInput), t, r) && e(C());
            };
            return (
                c.add(t),
                () => {
                    c.delete(t);
                }
            );
        }, t);
}
