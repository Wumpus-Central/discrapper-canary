n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(477660),
    o = n.n(i),
    a = n(481060);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    return (
        (e.paragraph = u(l({}, e.paragraph), {
            react: function (e, t, n) {
                return (0, r.jsx)('p', { children: t(e.content, n) }, n.key);
            }
        })),
        (e.link = u(l({}, e.link), {
            react: function (e, t, n) {
                let i = {};
                if (null != e.context) {
                    let t = e.context[e.target];
                    t && t.onClick ? ((i.onClick = t.onClick), (i.onContextMenu = t.onContextMenu)) : (i.onClick = t);
                }
                return null == i.onClick && (i.href = o().sanitizeUrl(e.target)), (0, r.jsx)(a.eee, u(l({ title: e.title }, i), { children: t(e.content, n) }), n.key);
            }
        })),
        e
    );
}
