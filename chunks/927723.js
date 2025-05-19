n.d(t, {
    V: () => p,
    k: () => _
});
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(63063),
    o = n(981631),
    s = n(388032),
    l = n(720068);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function _(e) {
    let { kind: t } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await n.e('7285').then(n.bind(n, 951269));
        return (n) => (0, r.jsx)(e, f(u({}, n), { kind: t }));
    });
}
function p() {
    (0, i.ZDy)(async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
        return (t) =>
            (0, r.jsx)(
                e,
                f(u({}, t), {
                    header: s.intl.string(l.default.odgSTk),
                    confirmText: s.intl.string(s.t.BddRzc),
                    confirmButtonColor: i.zxk.Colors.BRAND,
                    children: (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        children: s.intl.format(l.default.EZfHRk, { helpURL: a.Z.getArticleURL(o.BhN.NSFW_AGE_GATING) })
                    })
                })
            );
    });
}
