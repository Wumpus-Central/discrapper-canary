r.d(t, { Z: () => f });
var n = r(200651);
r(192379);
var o = r(399606),
    i = r(481060),
    c = r(668781),
    l = r(594174),
    a = r(626135),
    u = r(981631),
    s = r(388032);
function f(e) {
    var t,
        r,
        { header: f, children: b, sku_id: O, sku_name: p, guild_id: y, cancelLabel: d, confirmLabel: g, transitionState: m, onClose: j } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['header', 'children', 'sku_id', 'sku_name', 'guild_id', 'cancelLabel', 'confirmLabel', 'transitionState', 'onClose']);
    let P = (0, o.e7)([l.default], () => l.default.getCurrentUser());
    return (0, n.jsx)(
        i.ConfirmModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                header: null != f ? f : s.NW.string(s.t['+78Pfn']),
                cancelText: null != d ? d : s.NW.string(s.t['ETE/oK']),
                confirmText: null != g ? g : s.NW.string(s.t['+78Pfn']),
                onConfirm: () => {
                    a.default.track(u.rMx.TNS_SKU_REPORT_SUBMITTED, {
                        sku_id: O,
                        guild_id: y,
                        user_id: null == P ? void 0 : P.id
                    }),
                        c.Z.show({
                            title: s.NW.string(s.t.sUvCKS),
                            body: s.NW.format(s.t['7KJnk5'], { skuName: p })
                        });
                },
                transitionState: m,
                onClose: j
            },
            v
        )),
        (r = r = { children: b }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
