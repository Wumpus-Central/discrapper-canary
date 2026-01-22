r.d(t, {
    default: () => i,
});
var n = r(627968);
r(64700);
var o = r(158954),
    l = r(985018);

function i(e) {
    let { onConfirmUninstall: t, game: r } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["onConfirmUninstall", "game"]);
    return (0, n.jsx)(
        o.ConfirmModal,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                title: l.intl.formatToPlainString(l.t["f/BAbC"], {
                    gameName: r.name,
                }),
                subtitle: l.intl.format(l.t["FP+NKV"], {
                    gameName: r.name,
                }),
                confirmText: l.intl.string(l.t.RVy6Vl),
                cancelText: l.intl.string(l.t["96dwMR"]),
                onConfirm: t,
            },
            i,
        ),
    );
}
