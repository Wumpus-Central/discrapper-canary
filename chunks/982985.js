t.d(l, {
    e: () => p,
    l: () => m,
});
var n = t(627968),
    i = t(64700),
    r = t(397927),
    s = t(308528),
    a = t(993401),
    o = t(518477),
    d = t(985018);

function c(e) {
    for (var l = 1; l < arguments.length; l++) {
        var t = null != arguments[l] ? arguments[l] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (l) {
                var n;
                (n = t[l]),
                    l in e
                        ? Object.defineProperty(e, l, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[l] = n);
            });
    }
    return e;
}

function u(e, l) {
    if (null == e) return {};
    var t,
        n,
        i,
        r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, t = Reflect.ownKeys(e); i < t.length; i++)
            (n = t[i]), !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r;
    }
    if (
        ((r = (function (e, l) {
            if (null == e) return {};
            var t,
                n,
                i = {},
                r = Object.getOwnPropertyNames(e);
            for (n = 0; n < r.length; n++)
                (t = r[n]), !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            return i;
        })(e, l)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++)
            (n = t[i]), !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r;
}

function f(e) {
    let { userId: l, onClose: t } = e,
        n = i.useCallback(() => {
            s.A.openPrivateChannel({
                recipientIds: l,
            }),
                null == t || t(),
                (0, r.s7G)();
        }, [l, t]);
    return {
        action: o.pt.SEND_MESSAGE,
        icon: r.oyn,
        onClick: n,
        text: d.intl.string(d.t.zROXEV),
    };
}

function p(e) {
    let { userId: l, onClose: t, variant: i = "primary" } = e,
        r = u(e, ["userId", "onClose", "variant"]),
        s = f({
            userId: l,
            onClose: t,
        });
    return (0, n.jsx)(
        a.FD,
        c(
            {
                variant: i,
            },
            s,
            r,
        ),
    );
}

function m(e) {
    let { userId: l, onClose: t, variant: i = "primary" } = e,
        r = u(e, ["userId", "onClose", "variant"]),
        s = f({
            userId: l,
            onClose: t,
        }),
        { text: o } = s,
        d = u(s, ["text"]);
    return (0, n.jsx)(
        a.q3,
        c(
            {
                tooltipText: o,
                "aria-label": o,
                variant: i,
            },
            d,
            r,
        ),
    );
}
