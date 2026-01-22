n.d(t, { A: () => f });
var r = n(205327),
    i = n(261020),
    a = n(424994),
    s = n(272984),
    o = n(985018);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let t,
        { entry: n, baseEntryData: l } = e,
        { provider: u, image_url: f } = n.extra.media,
        p = n.extra.artist.name,
        _ = {
            onClick: () => (0, i.n)(s.M0.ALBUM, n.extra.media.external_parent_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, { itemName: n.extra.media.parent_title }),
        },
        h = {
            onClick: () => (0, i.n)(s.M0.ARTIST, n.extra.artist.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, { itemName: p }),
        };
    return (
        u === r.X.SPOTIFY && (t = { type: a.a4.SPOTIFY }),
        d(c({}, l), {
            title: p,
            thumbnailUrl: f,
            titleClickable: h,
            subtitleClickable: _,
            thumbnailClickable: _,
            userDescription: o.t.CcVI1T,
            providerIconProps: t,
        })
    );
}
