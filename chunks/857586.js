n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(732955),
    a = n(783420),
    s = n(938973);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
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

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = function (e) {
    let {
            subscriptionTier: t,
            onClick: n,
            postSuccessGuild: o,
            onSubscribeModalClose: c,
            premiumModalAnalyticsLocation: f,
            applicationId: p,
            confirmationFooter: _,
            buttonTextOverride: h,
            defaultTextOverride: m,
            iconOverride: g,
            variantOverride: E,
        } = e,
        b = d(e, [
            "subscriptionTier",
            "onClick",
            "postSuccessGuild",
            "onSubscribeModalClose",
            "premiumModalAnalyticsLocation",
            "applicationId",
            "confirmationFooter",
            "buttonTextOverride",
            "defaultTextOverride",
            "iconOverride",
            "variantOverride",
        ]),
        y = {
            onClick: n,
            subscriptionTier: t,
            postSuccessGuild: o,
            onSubscribeModalClose: c,
            premiumModalAnalyticsLocation: f,
            applicationId: p,
            confirmationFooter: _,
        },
        { subscribeButtonProps: O } = (0, s.B)({
            subscriptionTier: t,
            buttonTextOverride: h,
            defaultTextOverride: m,
            iconOverride: g,
            variantOverride: E,
        });
    return (0, r.jsx)(
        a.A,
        u(l({}, y), {
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(
                    i.$nd,
                    l(
                        {
                            onClick: t,
                        },
                        O,
                        b,
                    ),
                );
            },
        }),
    );
};
