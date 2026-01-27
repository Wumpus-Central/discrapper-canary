n.d(t, {
    $q: () => g,
    E9: () => I,
    H2: () => E,
    W0: () => b,
    j3: () => O,
    j6: () => v,
    jA: () => A,
    tQ: () => m,
});
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(378570),
    o = n(961350),
    s = n(312006),
    l = n(571909),
    c = n(366098),
    u = n(652215),
    d = n(231723);

function f(e, t, n) {
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

function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("3795"), n.e("86317")]).then(n.bind(n, 467164));
            return (n) =>
                (0, r.jsx)(
                    t,
                    h(p({}, n), {
                        channel: e,
                    }),
                );
        },
        {
            contextKey: t === u.BRT.POPOUT ? d.KX : d.SY,
        },
    );
}

function g(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("3795"), n.e("35934")]).then(n.bind(n, 25997));
            return (n) =>
                (0, r.jsx)(
                    t,
                    h(p({}, n), {
                        channel: e,
                    }),
                );
        },
        {
            contextKey: t === u.BRT.POPOUT ? d.KX : d.SY,
        },
    );
}

function E(e) {}

function y(e) {
    (0, a.iN)(e.id);
}

function b(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e("34070").then(n.bind(n, 200629));
        return (n) =>
            (0, r.jsx)(
                i,
                h(p({}, n), {
                    channel: e,
                    onAccept: t,
                }),
            );
    });
}

function O(e, t) {
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([n.e("3795"), n.e("70102")]).then(n.bind(n, 118101));
            return (n) =>
                (0, r.jsx)(
                    t,
                    h(p({}, n), {
                        channel: e,
                    }),
                );
        },
        {
            contextKey: t === u.BRT.POPOUT ? d.KX : d.SY,
        },
    );
}

function v(e) {
    let t = o.default.getId(),
        n = (0, c.G1)(e),
        r = (0, c.Gc)(e);
    return !s.Ay.isModerator(t, e) && (n > 0 || r > 0);
}

function A(e, t) {
    t !== e.id && (0, l.ek)(!0), y(e);
}

function I(e, t) {
    return (
        (0, i.openModalLazy)(async () => {
            let { default: i } = await n.e("12963").then(n.bind(n, 24814));
            return (n) =>
                (0, r.jsx)(
                    i,
                    p(
                        {
                            channel: e,
                            onConfirm: t,
                        },
                        n,
                    ),
                );
        }),
        !0
    );
}
