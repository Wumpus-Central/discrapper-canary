n.d(t, {
    Wc: () => f,
    gY: () => u,
});
var r = n(805447),
    i = n(628024),
    a = n(754279),
    s = n(434067),
    o = n(533715),
    l = n(803082),
    c = n(64700);
let u = c.createContext(null);

function d(e) {
    let t = (0, c.useContext)(u) || {};
    (0, s.w)(t, e);
    let { ref: n, ...r } = t;
    return r;
}

function f(e, t) {
    let { focusProps: n } = (0, i.i)(e),
        { keyboardProps: s } = (0, a.d)(e),
        o = (0, l.v)(n, s),
        u = d(t),
        f = e.isDisabled ? {} : u,
        p = (0, c.useRef)(e.autoFocus);
    (0, c.useEffect)(() => {
        p.current && t.current && (0, r.l)(t.current), (p.current = !1);
    }, [t]);
    let _ = e.excludeFromTabOrder ? -1 : 0;
    return (
        e.isDisabled && (_ = void 0),
        {
            focusableProps: (0, l.v)(
                {
                    ...o,
                    tabIndex: _,
                },
                f,
            ),
        }
    );
}
c.forwardRef(function (e, t) {
    let { children: n, ...r } = e,
        i = (0, o.U)(t),
        a = {
            ...r,
            ref: i,
        };
    return c.createElement(
        u.Provider,
        {
            value: a,
        },
        n,
    );
});
