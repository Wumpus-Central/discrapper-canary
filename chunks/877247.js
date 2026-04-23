"use strict";
r.d(t, { gY: () => c, Wc: () => d });
var n = r(805447),
    a = r(628024);
function s(e) {
    if (!e) return;
    let t = !0;
    return (r) => {
        e({
            ...r,
            preventDefault() {
                r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
                t = !0;
            },
            continuePropagation() {
                t = !1;
            },
            isPropagationStopped: () => t,
        }),
            t && r.stopPropagation();
    };
}
var i = r(434067),
    o = r(533715),
    l = r(318473),
    u = r(64700);
let c = u.createContext(null);
function d(e, t) {
    let { focusProps: r } = (0, a.i)(e),
        { keyboardProps: o } = {
            keyboardProps: e.isDisabled ? {} : { onKeyDown: s(e.onKeyDown), onKeyUp: s(e.onKeyUp) },
        },
        d = (0, l.v)(r, o),
        f = (function (e) {
            let t = (0, u.useContext)(c) || {};
            (0, i.w)(t, e);
            let { ref: r, ...n } = t;
            return n;
        })(t),
        p = e.isDisabled ? {} : f,
        h = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
        h.current && t.current && (0, n.l)(t.current), (h.current = !1);
    }, [t]);
    let m = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (m = void 0), { focusableProps: (0, l.v)({ ...d, tabIndex: m }, p) };
}
u.forwardRef(function (e, t) {
    let { children: r, ...n } = e,
        a = (0, o.U)(t),
        s = { ...n, ref: a };
    return u.createElement(c.Provider, { value: s }, r);
});
