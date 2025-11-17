n.d(t, { l: () => g }), n(388685);
var r = n(54381),
    i = n(481060),
    a = n(692114);
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 5 * n(70956).Z.Millis.DAY,
    d = 3,
    f = new a.Z("overlay_survey_timestamps");
function _() {
    return Array.from(f.values()).reduce((e, t) => Math.max(e, t), 0);
}
function p() {
    let e = Date.now(),
        t = _();
    return null != t && e - t < u;
}
function h() {
    return (
        Array.from(f.values()).filter((e) => {
            let t = new Date(e);
            return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear();
        }).length >= d
    );
}
function m() {
    let e = Date.now();
    f.add(e);
}
function g(e, t) {
    p() ||
        h() ||
        (0, i.ZDy)(async () => {
            let { default: i } = await n.e("20114").then(n.bind(n, 536920));
            return (
                m(),
                (n) =>
                    (0, r.jsx)(
                        i,
                        c(s({}, n), {
                            clientSettingType: e,
                            gameId: t,
                        }),
                    )
            );
        });
}
