"use strict";
let r;
n.d(t, { Cl: () => R, K7: () => b, ME: () => O, lb: () => v, pP: () => N });
var i = n(89494),
    s = n(408713),
    a = n(23975),
    o = n(297987),
    l = n(64700),
    u = n(341221);
let d = null,
    c = new Set(),
    _ = new Map(),
    f = !1,
    E = !1,
    h = { Tab: !0, Escape: !0 };
function p(e, t) {
    for (let n of c) n(e, t);
}
function m(e) {
    (f = !0),
        e.metaKey ||
            (!(0, s.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((d = "keyboard"), p("keyboard", e));
}
function g(e) {
    (d = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((f = !0), p("pointer", e));
}
function A(e) {
    (0, a.Y)(e) && ((f = !0), (d = "virtual"));
}
function I(e) {
    e.target !== window &&
        e.target !== document &&
        !i.lR &&
        e.isTrusted &&
        (f || E || ((d = "virtual"), p("virtual", e)), (f = !1), (E = !1));
}
function T() {
    i.lR || ((f = !1), (E = !0));
}
function S(e) {
    if ("u" < typeof window || "u" < typeof document || _.get((0, o.mD)(e))) return;
    let t = (0, o.mD)(e),
        n = (0, o.TW)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (f = !0), r.apply(this, arguments);
    }),
        n.addEventListener("keydown", m, !0),
        n.addEventListener("keyup", m, !0),
        n.addEventListener("click", A, !0),
        t.addEventListener("focus", I, !0),
        t.addEventListener("blur", T, !1),
        "u" > typeof PointerEvent &&
            (n.addEventListener("pointerdown", g, !0),
            n.addEventListener("pointermove", g, !0),
            n.addEventListener("pointerup", g, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                y(e);
            },
            { once: !0 },
        ),
        _.set(t, { focus: r });
}
let y = (e, t) => {
    let n = (0, o.mD)(e),
        r = (0, o.TW)(e);
    t && r.removeEventListener("DOMContentLoaded", t),
        _.has(n) &&
            ((n.HTMLElement.prototype.focus = _.get(n).focus),
            r.removeEventListener("keydown", m, !0),
            r.removeEventListener("keyup", m, !0),
            r.removeEventListener("click", A, !0),
            n.removeEventListener("focus", I, !0),
            n.removeEventListener("blur", T, !1),
            "u" > typeof PointerEvent &&
                (r.removeEventListener("pointerdown", g, !0),
                r.removeEventListener("pointermove", g, !0),
                r.removeEventListener("pointerup", g, !0)),
            _.delete(n));
};
function N() {
    return "pointer" !== d;
}
function O() {
    return d;
}
function R(e) {
    (d = e), p(e, null);
}
function v() {
    S();
    let [e, t] = (0, l.useState)(d);
    return (
        (0, l.useEffect)(() => {
            let e = () => {
                t(d);
            };
            return (
                c.add(e),
                () => {
                    c.delete(e);
                }
            );
        }, []),
        (0, u.wR)() ? null : e
    );
}
"u" > typeof document &&
    ("loading" !== (r = (0, o.TW)(void 0)).readyState
        ? S(void 0)
        : r.addEventListener("DOMContentLoaded", () => {
              S(void 0);
          }));
let C = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function b(e, t, n) {
    S(),
        (0, l.useEffect)(() => {
            let t = (t, r) => {
                var i;
                let s, a, l, u, d;
                (i = !!(null == n ? void 0 : n.isTextInput)),
                    (s = (0, o.TW)(null == r ? void 0 : r.target)),
                    (a =
                        "u" > typeof window
                            ? (0, o.mD)(null == r ? void 0 : r.target).HTMLInputElement
                            : HTMLInputElement),
                    (l =
                        "u" > typeof window
                            ? (0, o.mD)(null == r ? void 0 : r.target).HTMLTextAreaElement
                            : HTMLTextAreaElement),
                    (u = "u" > typeof window ? (0, o.mD)(null == r ? void 0 : r.target).HTMLElement : HTMLElement),
                    (d = "u" > typeof window ? (0, o.mD)(null == r ? void 0 : r.target).KeyboardEvent : KeyboardEvent),
                    ((i =
                        i ||
                        (s.activeElement instanceof a && !C.has(s.activeElement.type)) ||
                        s.activeElement instanceof l ||
                        (s.activeElement instanceof u && s.activeElement.isContentEditable)) &&
                        "keyboard" === t &&
                        r instanceof d &&
                        !h[r.key]) ||
                        e(N());
            };
            return (
                c.add(t),
                () => {
                    c.delete(t);
                }
            );
        }, t);
}
