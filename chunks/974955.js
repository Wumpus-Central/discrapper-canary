n.d(t, {
    M: () => h,
    V: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(178503),
    o = n(246116),
    s = n(155127),
    l = n(200269),
    c = n(402453);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = i.createContext({ firstFocusableItemProps: void 0 });
function g(e) {
    var { children: t, ref: n } = e,
        i = _(e, ["children", "ref"]);
    return (0, r.jsx)(h.Provider, {
        value: { firstFocusableItemProps: void 0 },
        children: (0, r.jsx)(
            "div",
            p(d({}, i), {
                ref: n,
                "data-dialog": "modal",
                role: "dialog",
                "aria-modal": !0,
                children: (0, r.jsx)(l.y, {
                    forceLevel: 1,
                    children: (0, r.jsx)(s.Jc, {
                        containerRef: n,
                        children: t,
                    }),
                }),
            }),
        ),
    });
}
function E(e) {
    var { children: t } = e,
        n = _(e, ["children"]);
    return (0, r.jsx)(a.Wd, {
        children: (e) =>
            (0, r.jsx)(h.Provider, {
                value: { firstFocusableItemProps: e },
                children: (0, r.jsx)(
                    "div",
                    p(d({}, n), {
                        "data-dialog": "non-modal",
                        role: "dialog",
                        children: t,
                    }),
                ),
            }),
    });
}
function b(e) {
    var { ref: t, returnRef: n, modal: a = !0, setDialogRef: s, trackingProps: l } = e,
        u = _(e, ["ref", "returnRef", "modal", "setDialogRef", "trackingProps"]);
    let f = i.useRef(null);
    i.useImperativeHandle(t, () => f.current),
        i.useEffect(
            () => (
                null == s || s(f.current),
                () => {
                    null == s || s(null);
                }
            ),
            [],
        );
    let { trackImpression: m } = (0, c.ZF)();
    i.useEffect(() => {
        if (null != m && null != l) {
            var e, t;
            m(
                {
                    type: l.impressionType,
                    name: null == (e = l.impression) ? void 0 : e.impressionName,
                    properties: null == (t = l.impression) ? void 0 : t.impressionProperties,
                },
                { disableTrack: l.disableTrack },
            );
        }
    }, [m, l]),
        (0, o.T)(f, {
            returnRef: n,
            disable: !a,
        });
    let h = a ? g : E;
    return (0, r.jsx)(h, p(d({}, u), { ref: f }));
}
