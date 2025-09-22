n.d(t, {
    E: () => T,
    Jz: () => S,
    _w: () => A,
    mG: () => R,
});
var r = n(784534),
    i = n(623261),
    a = n(133999),
    o = n(253231),
    s = n(647438);
let l = null,
    c = new Set(),
    u = new Map(),
    d = !1,
    f = !1,
    _ = {
        Tab: !0,
        Escape: !0,
    };
function p(e, t) {
    for (let n of c) n(e, t);
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
function m(e) {
    (d = !0), h(e) && ((l = "keyboard"), p("keyboard", e));
}
function g(e) {
    (l = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((d = !0), p("pointer", e));
}
function E(e) {
    (0, a.Z)(e) && ((d = !0), (l = "virtual"));
}
function b(e) {
    e.target !== window &&
        e.target !== document &&
        !r.uR &&
        e.isTrusted &&
        (d || f || ((l = "virtual"), p("virtual", e)), (d = !1), (f = !1));
}
function y() {
    r.uR || ((d = !1), (f = !0));
}
function O(e) {
    if ("undefined" == typeof window || u.get((0, o.kR)(e))) return;
    let t = (0, o.kR)(e),
        n = (0, o.r3)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (d = !0), r.apply(this, arguments);
    }),
        n.addEventListener("keydown", m, !0),
        n.addEventListener("keyup", m, !0),
        n.addEventListener("click", E, !0),
        t.addEventListener("focus", b, !0),
        t.addEventListener("blur", y, !1),
        "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", g, !0),
              n.addEventListener("pointermove", g, !0),
              n.addEventListener("pointerup", g, !0))
            : (n.addEventListener("mousedown", g, !0),
              n.addEventListener("mousemove", g, !0),
              n.addEventListener("mouseup", g, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                v(e);
            },
            { once: !0 },
        ),
        u.set(t, { focus: r });
}
let v = (e, t) => {
    let n = (0, o.kR)(e),
        r = (0, o.r3)(e);
    t && r.removeEventListener("DOMContentLoaded", t),
        u.has(n) &&
            ((n.HTMLElement.prototype.focus = u.get(n).focus),
            r.removeEventListener("keydown", m, !0),
            r.removeEventListener("keyup", m, !0),
            r.removeEventListener("click", E, !0),
            n.removeEventListener("focus", b, !0),
            n.removeEventListener("blur", y, !1),
            "undefined" != typeof PointerEvent
                ? (r.removeEventListener("pointerdown", g, !0),
                  r.removeEventListener("pointermove", g, !0),
                  r.removeEventListener("pointerup", g, !0))
                : (r.removeEventListener("mousedown", g, !0),
                  r.removeEventListener("mousemove", g, !0),
                  r.removeEventListener("mouseup", g, !0)),
            u.delete(n));
};
function I(e) {
    let t,
        n = (0, o.r3)(e);
    return (
        "loading" !== n.readyState
            ? O(e)
            : ((t = () => {
                  O(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
        () => v(e, t)
    );
}
function T() {
    return "pointer" !== l;
}
function S() {
    return l;
}
function A(e) {
    (l = e), p(e, null);
}
"undefined" != typeof document && I();
let C = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function N(e, t, n) {
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
            (r.activeElement instanceof i && !C.has(r.activeElement.type)) ||
            r.activeElement instanceof a ||
            (r.activeElement instanceof s && r.activeElement.isContentEditable)) &&
        "keyboard" === t &&
        n instanceof l &&
        !_[n.key]
    );
}
function R(e, t, n) {
    O(),
        (0, s.useEffect)(() => {
            let t = (t, r) => {
                N(!!(null == n ? void 0 : n.isTextInput), t, r) && e(T());
            };
            return (
                c.add(t),
                () => {
                    c.delete(t);
                }
            );
        }, t);
}
