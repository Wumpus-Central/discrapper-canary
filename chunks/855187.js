n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(952572),
    o = n(961350),
    l = n(430452),
    c = n(985018),
    u = n(809119);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    let d = (0, a.k34)(),
        { videoEnabled: p, hasVideoDevice: h } = (0, i.cf)([l.A], () => ({
            videoEnabled: l.A.isVideoEnabled(),
            hasVideoDevice: l.A.isVideoAvailable(),
        })),
        m = (0, i.bG)([o.default], () => o.default.getId() === e),
        g = (0, s.A)();
    function E() {
        (0, a.mMO)(
            async () => {
                let { default: e } = await n.e("10534").then(n.bind(n, 308229));
                return (t) => (0, r.jsx)(e, _(f({}, t), { videoEnabled: p }));
            },
            {
                modalKey: "camera-preview",
                contextKey: null != t ? (0, a.TId)(t) : d,
            },
        );
    }
    return (!p || g) && m && h
        ? (0, r.jsx)(a.Drp, {
              id: "change-video-background",
              label: (0, r.jsx)("div", {
                  className: u.A,
                  children: p ? c.intl.string(c.t.mZKxHb) : c.intl.string(c.t["vkV93/"]),
              }),
              action: E,
              icon: p ? a.fBX : a.bMW,
          })
        : null;
}
