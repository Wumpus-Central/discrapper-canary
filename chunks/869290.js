n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(506774),
    a = n(397927),
    s = n(386936),
    o = n(364496);

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
let f = {
    openDmSettingsUpsellModal(e) {
        let t = i.w.get(o.J),
            l = Date.now();
        null == t || l - t > o.z
            ? (i.w.set(o.J, l),
              (0, a.mMO)(async () => {
                  let { default: t } = await n.e("62684").then(n.bind(n, 228855));
                  return (n) =>
                      (0, r.jsx)(
                          t,
                          d(c({}, n), {
                              guildId: e,
                          }),
                      );
              }))
            : (0, s.$)(s.s.SUPPRESSED_BY_COOLDOWN, e);
    },
};
