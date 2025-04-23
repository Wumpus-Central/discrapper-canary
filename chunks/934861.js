t.d(n, {
    c: () => c,
    v: () => d
});
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(493683),
    o = t(475413),
    s = t(388032);
function u(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function a(e, n) {
    if (null == e) return {};
    var t,
        l,
        r = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = {},
                i = Object.keys(e);
            for (l = 0; l < i.length; l++) (t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) (t = i[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
    }
    return r;
}
function c(e) {
    var { userId: n, onClose: t } = e,
        c = a(e, ['userId', 'onClose']);
    return (0, l.jsx)(
        o.tG,
        u(
            {
                action: 'SEND_MESSAGE',
                icon: r.kBi,
                text: s.intl.string(s.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel({ recipientIds: n }), null == t || t();
                }
            },
            c
        )
    );
}
function d(e) {
    var { userId: n, onClose: t } = e,
        c = a(e, ['userId', 'onClose']);
    return (0, l.jsx)(
        o.ef,
        u(
            {
                action: 'SEND_MESSAGE',
                icon: r.kBi,
                tooltipText: s.intl.string(s.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel({ recipientIds: n }), null == t || t();
                }
            },
            c
        )
    );
}
