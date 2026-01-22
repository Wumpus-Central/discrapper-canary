n.d(t, {
    i: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(575593),
    o = n(397927),
    l = n(954921),
    c = n(278539),
    u = n(837921),
    d = n(985018),
    f = n(610003);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = u.Ay.getEnableHardwareAcceleration() ? o.JsQ : o.euF,
    E = (e) => {
        let {
                item: t,
                user: n,
                isHighlighted: i = !1,
                avatarSize: u = o._3J.SIZE_152,
                avatarPlaceholderSrc: p,
                className: h,
            } = e,
            E = (0, l.Te)(u),
            {
                avatarDecorationSrc: b,
                eventHandlers: y,
                avatarPlaceholderSrc: O,
            } = (0, c.A)({
                user: n,
                avatarDecorationOverride: (null == t ? void 0 : t.type) === s.R.AVATAR_DECORATION ? t : void 0,
                size: E,
                onlyAnimateOnHoverOrFocus: !i,
            }),
            A = d.intl.formatToPlainString(d.t.Do2lxE, {
                a11y_text: t.label,
            });
        return (0, r.jsx)(
            g,
            m(_({}, y), {
                avatarDecoration: b,
                src: i ? (null == n ? void 0 : n.getAvatarURL(void 0, 152, !0)) : null != p ? p : O,
                imageClassName: i ? f.WG : void 0,
                className: a()(h, f.my),
                size: u,
                "aria-label": A,
            }),
        );
    };
