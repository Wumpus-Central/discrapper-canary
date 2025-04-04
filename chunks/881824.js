n.d(t, {
    $Q: () => v,
    Ev: () => y,
    Gy: () => A,
    R5: () => N,
    T: () => E,
    Us: () => S,
    Zl: () => T,
    vu: () => I
});
var r = n(200651);
n(192379);
var i = n(952265),
    o = n(359110),
    a = n(314897),
    s = n(88751),
    l = n(427679),
    c = n(513449),
    u = n(930180),
    d = n(981631),
    f = n(602091);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
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
function g(e) {
    let t = a.default.getId(),
        n = s.ZP.isModerator(t, e.id),
        r = l.Z.isLive(e.id);
    n && !r ? E(e) : n && r && b(e);
}
function E(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await Promise.all([n.e('82758'), n.e('24231')]).then(n.bind(n, 581355));
            return (n) => (0, r.jsx)(t, m(p({}, n), { channel: e }));
        },
        { contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1 }
    );
}
function b(e) {
    (0, i.ZD)(async () => {
        let { default: t } = await n.e('84686').then(n.bind(n, 665111));
        return (n) => (0, r.jsx)(t, m(p({}, n), { channel: e }));
    });
}
function y(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await n.e('2634').then(n.bind(n, 548841));
            return (n) => (0, r.jsx)(t, m(p({}, n), { channel: e }));
        },
        { contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1 }
    );
}
function v(e) {}
function O(e) {
    (0, o.Kh)(e.id);
}
function I(e, t) {
    (0, i.ZD)(async () => {
        let { default: i } = await n.e('1906').then(n.bind(n, 854510));
        return (n) =>
            (0, r.jsx)(
                i,
                m(p({}, n), {
                    channel: e,
                    onAccept: t
                })
            );
    });
}
function S(e, t) {
    (0, i.ZD)(
        async () => {
            let { default: t } = await n.e('85885').then(n.bind(n, 124779));
            return (n) => (0, r.jsx)(t, m(p({}, n), { channel: e }));
        },
        { contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1 }
    );
}
function T(e) {
    let t = a.default.getId(),
        n = (0, u.Z7)(e),
        r = (0, u.wK)(e);
    return !s.ZP.isModerator(t, e) && (n > 0 || r > 0);
}
function N(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    t !== e.id && (0, c.Ku)(!0), O(e), t !== e.id && n && g(e);
}
function A(e, t) {
    return (
        (0, i.ZD)(async () => {
            let { default: i } = await n.e('65045').then(n.bind(n, 143782));
            return (n) =>
                (0, r.jsx)(
                    i,
                    p(
                        {
                            channel: e,
                            onConfirm: t
                        },
                        n
                    )
                );
        }),
        !0
    );
}
