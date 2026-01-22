n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(926571),
    s = n(670455),
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

function f(e, t, n) {
    var r;
    let { rating: s, problem: l, feedback: c } = n;
    (0, a.A)({
        problem: null != (r = null == l ? void 0 : l.value) ? r : null,
        summary: e,
        feedback: c,
        guildId: t.guild_id,
        channelId: t.id,
        location: "Summary divider",
        rating: s,
    }),
        (0, i.showToast)((0, i.createToast)(o.intl.string(o.t["d9+vQ8"]), i.ToastType.SUCCESS));
}

function p(e) {
    let { summary: t, channel: a, rating: o } = e;
    null != t &&
        (o === s.P0.BAD
            ? (0, i.mMO)(async () => {
                  let { default: e } = await Promise.all([n.e("16833"), n.e("26484"), n.e("3489")]).then(
                      n.bind(n, 225315),
                  );
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          d(c({}, n), {
                              onSubmit: (e) => f(t, a, e),
                              startRating: o,
                          }),
                      );
              })
            : f(t, a, {
                  rating: o,
                  problem: null,
                  feedback: "",
                  dontShowAgain: !1,
              }));
}
