n.d(t, {
    c: () => a,
    v: () => d
});
var r = n(200651);
n(192379);
var o = n(481060),
    l = n(493683),
    i = n(475413),
    u = n(388032);
function c(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
function a(e) {
    var { userId: t, onClose: n } = e,
        a = s(e, ['userId', 'onClose']);
    return (0, r.jsx)(
        i.tG,
        c(
            {
                action: 'SEND_MESSAGE',
                icon: o.kBi,
                text: u.intl.string(u.t.zROXER),
                onClick: () => {
                    l.Z.openPrivateChannel({ recipientIds: t }), null == n || n();
                }
            },
            a
        )
    );
}
function d(e) {
    var { userId: t, onClose: n } = e,
        a = s(e, ['userId', 'onClose']);
    return (0, r.jsx)(
        i.ef,
        c(
            {
                action: 'SEND_MESSAGE',
                icon: o.kBi,
                tooltipText: u.intl.string(u.t.zROXER),
                onClick: () => {
                    l.Z.openPrivateChannel({ recipientIds: t }), null == n || n();
                }
            },
            a
        )
    );
}
