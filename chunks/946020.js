"use strict";
n.d(t, { Wc: () => _, gY: () => c });
var r = n(805447),
    i = n(628024),
    a = n(754279),
    s = n(434067),
    o = n(533715),
    l = n(803082),
    u = n(64700);
let c = u.createContext(null);
function d(e) {
    let t = (0, u.useContext)(c) || {};
    (0, s.w)(t, e);
    let { ref: n, ...r } = t;
    return r;
}
function _(e, t) {
    let { focusProps: n } = (0, i.i)(e),
        { keyboardProps: s } = (0, a.d)(e),
        o = (0, l.v)(n, s),
        c = d(t),
        _ = e.isDisabled ? {} : c,
        f = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
        f.current && t.current && (0, r.l)(t.current), (f.current = !1);
    }, [t]);
    let p = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (p = void 0), { focusableProps: (0, l.v)({ ...o, tabIndex: p }, _) };
}
u.forwardRef(function (e, t) {
    let { children: n, ...r } = e,
        i = (0, o.U)(t),
        a = { ...r, ref: i };
    return u.createElement(c.Provider, { value: a }, n);
});
