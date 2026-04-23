"use strict";
n.d(t, { Wc: () => d, gY: () => c });
var r = n(805447),
    i = n(628024),
    s = n(754279),
    a = n(434067),
    o = n(533715),
    l = n(803082),
    u = n(64700);
let c = u.createContext(null);
function d(e, t) {
    let { focusProps: n } = (0, i.i)(e),
        { keyboardProps: o } = (0, s.d)(e),
        d = (0, l.v)(n, o),
        _ = (function (e) {
            let t = (0, u.useContext)(c) || {};
            (0, a.w)(t, e);
            let { ref: n, ...r } = t;
            return r;
        })(t),
        f = e.isDisabled ? {} : _,
        p = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
        p.current && t.current && (0, r.l)(t.current), (p.current = !1);
    }, [t]);
    let h = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (h = void 0), { focusableProps: (0, l.v)({ ...d, tabIndex: h }, f) };
}
u.forwardRef(function (e, t) {
    let { children: n, ...r } = e,
        i = (0, o.U)(t),
        s = { ...r, ref: i };
    return u.createElement(c.Provider, { value: s }, n);
});
