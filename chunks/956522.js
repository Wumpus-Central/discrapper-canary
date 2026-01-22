n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(726293),
    o = n(60809),
    l = n(985018);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
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

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p(e) {
    let t,
        { sortOrder: n, onSortOptionClick: c } = e,
        d = i.useRef(null);
    switch (n) {
        case o.Ug.POPULAR:
            t = l.intl.string(l.t.SzxiqK);
            break;
        case o.Ug.ALPHABETICAL:
            t = l.intl.string(l.t.m8xsti);
    }
    return (0, r.jsx)(a.YNO, {
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.A, {
                sortOrder: n,
                onSortOptionClick: c,
                closePopout: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e) =>
            (0, r.jsx)(
                a.Button,
                f(u({}, e), {
                    buttonRef: d,
                    size: "sm",
                    variant: "secondary",
                    "aria-label": l.intl.string(l.t.yeYaHf),
                    icon: a.JNJ,
                    text: t,
                }),
            ),
    });
}
