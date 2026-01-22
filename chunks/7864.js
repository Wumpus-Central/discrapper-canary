n.d(t, {
    AT: () => l,
    gE: () => o,
    ly: () => u,
    zA: () => c,
}),
    n(638769),
    n(896048),
    n(284009);
var r = n(9865),
    i = n(661191);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e) {
    return e.sort(l), e;
}

function l(e, t) {
    let n = e.guildId;
    return e.id === n
        ? t.id === n
            ? i.default.compare(e.id, t.id)
            : 1
        : t.id === n
          ? -1
          : e.position !== t.position
            ? t.position - e.position
            : i.default.compare(e.id, t.id);
}

function c(e, t) {
    return 0 > l(e, t);
}

function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
    if (i.length + n.length === 0) return t;
    let a = s({}, t);
    if (null != i) for (let e of i) delete a[e];
    for (let t of n) a[t.id] = r.Wj(e, t);
    return a;
}
