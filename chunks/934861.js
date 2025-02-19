t.d(n, {
    c: () => d,
    v: () => u
});
var r = t(200651);
t(192379);
var o = t(481060),
    i = t(493683),
    l = t(475413),
    s = t(388032);
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function a(e, n) {
    if (null == e) return {};
    var t,
        r,
        o = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
    }
    return o;
}
function d(e) {
    var { userId: n, onClose: t } = e,
        d = a(e, ['userId', 'onClose']);
    return (0, r.jsx)(
        l.tG,
        c(
            {
                action: 'SEND_MESSAGE',
                icon: o.kBi,
                text: s.NW.string(s.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel(n), null == t || t();
                }
            },
            d
        )
    );
}
function u(e) {
    var { userId: n, onClose: t } = e,
        d = a(e, ['userId', 'onClose']);
    return (0, r.jsx)(
        l.ef,
        c(
            {
                action: 'SEND_MESSAGE',
                icon: o.kBi,
                tooltipText: s.NW.string(s.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel(n), null == t || t();
                }
            },
            d
        )
    );
}
