"use strict";
n.d(t, { Wc: () => c, gY: () => d });
var r = n(805447),
    i = n(628024),
    s = n(754279),
    a = n(434067),
    o = n(533715),
    l = n(803082),
    u = n(64700);
let d = u.createContext(null);
function c(e, t) {
    let { focusProps: n } = (0, i.i)(e),
        { keyboardProps: o } = (0, s.d)(e),
        c = (0, l.v)(n, o),
        _ = (function (e) {
            let t = (0, u.useContext)(d) || {};
            (0, a.w)(t, e);
            let { ref: n, ...r } = t;
            return r;
        })(t),
        f = e.isDisabled ? {} : _,
        E = (0, u.useRef)(e.autoFocus);
    (0, u.useEffect)(() => {
        E.current && t.current && (0, r.l)(t.current), (E.current = !1);
    }, [t]);
    let h = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (h = void 0), { focusableProps: (0, l.v)({ ...c, tabIndex: h }, f) };
}
u.forwardRef(function (e, t) {
    let { children: n, ...r } = e,
        i = (0, o.U)(t),
        s = { ...r, ref: i };
    return u.createElement(d.Provider, { value: s }, n);
});
