n.d(t, { A: () => l });
var r = n(954571),
    i = n(862927),
    a = n(652215);
function s(e, t, n) {
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
function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e) {
    let { tab_opened: t, source: n } = e,
        s = (0, i.A)();
    r.default.track(
        a.HAw.FRIENDS_LIST_CLICKED,
        o(
            {
                tab_opened: t,
                source: n,
            },
            s,
        ),
    );
}
