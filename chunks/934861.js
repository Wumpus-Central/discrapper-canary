t.d(n, {
    c: () => d,
    v: () => u
});
var o = t(200651);
t(192379);
var r = t(481060),
    i = t(493683),
    l = t(475413),
    s = t(388032);
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function a(e, n) {
    if (null == e) return {};
    var t,
        o,
        r = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = {},
                i = Object.keys(e);
            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) (t = i[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
    }
    return r;
}
function d(e) {
    var { userId: n, onClose: t } = e,
        d = a(e, ['userId', 'onClose']);
    return (0, o.jsx)(
        l.tG,
        c(
            {
                action: 'SEND_MESSAGE',
                icon: r.kBi,
                text: s.NW.string(s.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel({ recipientIds: n }), null == t || t();
                }
            },
            d
        )
    );
}
function u(e) {
    var { userId: n, onClose: t } = e,
        d = a(e, ['userId', 'onClose']);
    return (0, o.jsx)(
        l.ef,
        c(
            {
                action: 'SEND_MESSAGE',
                icon: r.kBi,
                tooltipText: s.NW.string(s.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel({ recipientIds: n }), null == t || t();
                }
            },
            d
        )
    );
}
