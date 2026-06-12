"use strict";
let i;
n.d(t, { Cl: () => C, K7: () => b, ME: () => v, lb: () => R, pP: () => N });
var r = n(89494),
    s = n(408713),
    a = n(23975),
    o = n(297987),
    l = n(64700),
    u = n(341221);
let c = null,
    d = new Set(),
    _ = new Map(),
    h = !1,
    f = !1,
    p = { Tab: !0, Escape: !0 };
function E(e, t) {
    for (let n of d) n(e, t);
}
function m(e) {
    (h = !0),
        e.metaKey ||
            (!(0, s.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((c = "keyboard"), E("keyboard", e));
}
function g(e) {
    (c = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((h = !0), E("pointer", e));
}
function A(e) {
    (0, a.Y)(e) && ((h = !0), (c = "virtual"));
}
function I(e) {
    e.target !== window &&
        e.target !== document &&
        !r.lR &&
        e.isTrusted &&
        (h || f || ((c = "virtual"), E("virtual", e)), (h = !1), (f = !1));
}
function T() {
    r.lR || ((h = !1), (f = !0));
}
function S(e) {
    if ("u" < typeof window || "u" < typeof document || _.get((0, o.mD)(e))) return;
    let t = (0, o.mD)(e),
        n = (0, o.TW)(e),
        i = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (h = !0), i.apply(this, arguments);
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
        _.set(t, { focus: i });
}
let y = (e, t) => {
    let n = (0, o.mD)(e),
        i = (0, o.TW)(e);
    t && i.removeEventListener("DOMContentLoaded", t),
        _.has(n) &&
            ((n.HTMLElement.prototype.focus = _.get(n).focus),
            i.removeEventListener("keydown", m, !0),
            i.removeEventListener("keyup", m, !0),
            i.removeEventListener("click", A, !0),
            n.removeEventListener("focus", I, !0),
            n.removeEventListener("blur", T, !1),
            "u" > typeof PointerEvent &&
                (i.removeEventListener("pointerdown", g, !0),
                i.removeEventListener("pointermove", g, !0),
                i.removeEventListener("pointerup", g, !0)),
            _.delete(n));
};
function N() {
    return "pointer" !== c;
}
function v() {
    return c;
}
function C(e) {
    (c = e), E(e, null);
}
function R() {
    S();
    let [e, t] = (0, l.useState)(c);
    return (
        (0, l.useEffect)(() => {
            let e = () => {
                t(c);
            };
            return (
                d.add(e),
                () => {
                    d.delete(e);
                }
            );
        }, []),
        (0, u.wR)() ? null : e
    );
}
"u" > typeof document &&
    ("loading" !== (i = (0, o.TW)(void 0)).readyState
        ? S(void 0)
        : i.addEventListener("DOMContentLoaded", () => {
              S(void 0);
          }));
let O = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function b(e, t, n) {
    S(),
        (0, l.useEffect)(() => {
            let t = (t, i) => {
                var r;
                let s, a, l, u, c;
                (r = !!(null == n ? void 0 : n.isTextInput)),
                    (s = (0, o.TW)(null == i ? void 0 : i.target)),
                    (a =
                        "u" > typeof window
                            ? (0, o.mD)(null == i ? void 0 : i.target).HTMLInputElement
                            : HTMLInputElement),
                    (l =
                        "u" > typeof window
                            ? (0, o.mD)(null == i ? void 0 : i.target).HTMLTextAreaElement
                            : HTMLTextAreaElement),
                    (u = "u" > typeof window ? (0, o.mD)(null == i ? void 0 : i.target).HTMLElement : HTMLElement),
                    (c = "u" > typeof window ? (0, o.mD)(null == i ? void 0 : i.target).KeyboardEvent : KeyboardEvent),
                    ((r =
                        r ||
                        (s.activeElement instanceof a && !O.has(s.activeElement.type)) ||
                        s.activeElement instanceof l ||
                        (s.activeElement instanceof u && s.activeElement.isContentEditable)) &&
                        "keyboard" === t &&
                        i instanceof c &&
                        !p[i.key]) ||
                        e(N());
            };
            return (
                d.add(t),
                () => {
                    d.delete(t);
                }
            );
        }, t);
}
