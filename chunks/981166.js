n.d(t, {
    E: () => T,
    Jz: () => A,
    Kf: () => N,
    _w: () => C,
    mG: () => D,
});
var r = n(990415),
    i = n(21814),
    a = n(383669),
    o = n(477232),
    s = n(473749),
    l = n(112683);
let c = null,
    u = new Set(),
    d = new Map(),
    f = !1,
    p = !1,
    _ = {
        Tab: !0,
        Escape: !0,
    };
function m(e, t) {
    for (let n of u) n(e, t);
}
function h(e) {
    return !(
        e.metaKey ||
        (!(0, i.V5)() && e.altKey) ||
        e.ctrlKey ||
        "Control" === e.key ||
        "Shift" === e.key ||
        "Meta" === e.key
    );
}
function g(e) {
    (f = !0), h(e) && ((c = "keyboard"), m("keyboard", e));
}
function E(e) {
    (c = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((f = !0), m("pointer", e));
}
function b(e) {
    (0, a.Z)(e) && ((f = !0), (c = "virtual"));
}
function y(e) {
    e.target !== window &&
        e.target !== document &&
        !r.uR &&
        e.isTrusted &&
        (f || p || ((c = "virtual"), m("virtual", e)), (f = !1), (p = !1));
}
function O() {
    r.uR || ((f = !1), (p = !0));
}
function v(e) {
    if ("undefined" == typeof window || "undefined" == typeof document || d.get((0, o.kR)(e))) return;
    let t = (0, o.kR)(e),
        n = (0, o.r3)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (f = !0), r.apply(this, arguments);
    }),
        n.addEventListener("keydown", g, !0),
        n.addEventListener("keyup", g, !0),
        n.addEventListener("click", b, !0),
        t.addEventListener("focus", y, !0),
        t.addEventListener("blur", O, !1),
        "undefined" != typeof PointerEvent &&
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
    let n = (0, o.kR)(e),
        r = (0, o.r3)(e);
    t && r.removeEventListener("DOMContentLoaded", t),
        d.has(n) &&
            ((n.HTMLElement.prototype.focus = d.get(n).focus),
            r.removeEventListener("keydown", g, !0),
            r.removeEventListener("keyup", g, !0),
            r.removeEventListener("click", b, !0),
            n.removeEventListener("focus", y, !0),
            n.removeEventListener("blur", O, !1),
            "undefined" != typeof PointerEvent &&
                (r.removeEventListener("pointerdown", E, !0),
                r.removeEventListener("pointermove", E, !0),
                r.removeEventListener("pointerup", E, !0)),
            d.delete(n));
};
function I(e) {
    let t,
        n = (0, o.r3)(e);
    return (
        "loading" !== n.readyState
            ? v(e)
            : ((t = () => {
                  v(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
        () => S(e, t)
    );
}
function T() {
    return "pointer" !== c;
}
function A() {
    return c;
}
function C(e) {
    (c = e), m(e, null);
}
function N() {
    v();
    let [e, t] = (0, s.useState)(c);
    return (
        (0, s.useEffect)(() => {
            let e = () => {
                t(c);
            };
            return (
                u.add(e),
                () => {
                    u.delete(e);
                }
            );
        }, []),
        (0, l.Av)() ? null : e
    );
}
"undefined" != typeof document && I();
let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function R(e, t, n) {
    let r = (0, o.r3)(null == n ? void 0 : n.target),
        i = "undefined" != typeof window ? (0, o.kR)(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
        a =
            "undefined" != typeof window
                ? (0, o.kR)(null == n ? void 0 : n.target).HTMLTextAreaElement
                : HTMLTextAreaElement,
        s = "undefined" != typeof window ? (0, o.kR)(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
        l = "undefined" != typeof window ? (0, o.kR)(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return !(
        (e =
            e ||
            (r.activeElement instanceof i && !P.has(r.activeElement.type)) ||
            r.activeElement instanceof a ||
            (r.activeElement instanceof s && r.activeElement.isContentEditable)) &&
        "keyboard" === t &&
        n instanceof l &&
        !_[n.key]
    );
}
function D(e, t, n) {
    v(),
        (0, s.useEffect)(() => {
            let t = (t, r) => {
                R(!!(null == n ? void 0 : n.isTextInput), t, r) && e(T());
            };
            return (
                u.add(t),
                () => {
                    u.delete(t);
                }
            );
        }, t);
}
