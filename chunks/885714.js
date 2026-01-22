n.d(t, {
    Cl: () => C,
    K7: () => P,
    ME: () => T,
    lb: () => N,
    pP: () => I,
});
var r = n(89494),
    i = n(408713),
    a = n(23975),
    s = n(297987),
    o = n(64700),
    l = n(341221);
let c = null,
    u = new Set(),
    d = new Map(),
    f = !1,
    p = !1,
    _ = {
        Tab: !0,
        Escape: !0,
    };

function h(e, t) {
    for (let n of u) n(e, t);
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
    (f = !0), m(e) && ((c = "keyboard"), h("keyboard", e));
}

function E(e) {
    (c = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((f = !0), h("pointer", e));
}

function b(e) {
    (0, a.Y)(e) && ((f = !0), (c = "virtual"));
}

function y(e) {
    e.target !== window &&
        e.target !== document &&
        !r.lR &&
        e.isTrusted &&
        (f || p || ((c = "virtual"), h("virtual", e)), (f = !1), (p = !1));
}

function O() {
    r.lR || ((f = !1), (p = !0));
}

function A(e) {
    if ("u" < typeof window || "u" < typeof document || d.get((0, s.mD)(e))) return;
    let t = (0, s.mD)(e),
        n = (0, s.TW)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (f = !0), r.apply(this, arguments);
    }),
        n.addEventListener("keydown", g, !0),
        n.addEventListener("keyup", g, !0),
        n.addEventListener("click", b, !0),
        t.addEventListener("focus", y, !0),
        t.addEventListener("blur", O, !1),
        "u" > typeof PointerEvent &&
            (n.addEventListener("pointerdown", E, !0),
            n.addEventListener("pointermove", E, !0),
            n.addEventListener("pointerup", E, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                v(e);
            },
            {
                once: !0,
            },
        ),
        d.set(t, {
            focus: r,
        });
}
let v = (e, t) => {
    let n = (0, s.mD)(e),
        r = (0, s.TW)(e);
    t && r.removeEventListener("DOMContentLoaded", t),
        d.has(n) &&
            ((n.HTMLElement.prototype.focus = d.get(n).focus),
            r.removeEventListener("keydown", g, !0),
            r.removeEventListener("keyup", g, !0),
            r.removeEventListener("click", b, !0),
            n.removeEventListener("focus", y, !0),
            n.removeEventListener("blur", O, !1),
            "u" > typeof PointerEvent &&
                (r.removeEventListener("pointerdown", E, !0),
                r.removeEventListener("pointermove", E, !0),
                r.removeEventListener("pointerup", E, !0)),
            d.delete(n));
};

function S(e) {
    let t,
        n = (0, s.TW)(e);
    return (
        "loading" !== n.readyState
            ? A(e)
            : ((t = () => {
                  A(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
        () => v(e, t)
    );
}

function I() {
    return "pointer" !== c;
}

function T() {
    return c;
}

function C(e) {
    (c = e), h(e, null);
}

function N() {
    A();
    let [e, t] = (0, o.useState)(c);
    return (
        (0, o.useEffect)(() => {
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
        (0, l.wR)() ? null : e
    );
}
"u" > typeof document && S();
let R = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function w(e, t, n) {
    let r = (0, s.TW)(null == n ? void 0 : n.target),
        i = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
        a = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
        o = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
        l = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return !(
        (e =
            e ||
            (r.activeElement instanceof i && !R.has(r.activeElement.type)) ||
            r.activeElement instanceof a ||
            (r.activeElement instanceof o && r.activeElement.isContentEditable)) &&
        "keyboard" === t &&
        n instanceof l &&
        !_[n.key]
    );
}

function P(e, t, n) {
    A(),
        (0, o.useEffect)(() => {
            let t = (t, r) => {
                w(!!(null == n ? void 0 : n.isTextInput), t, r) && e(I());
            };
            return (
                u.add(t),
                () => {
                    u.delete(t);
                }
            );
        }, t);
}
