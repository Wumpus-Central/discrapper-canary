n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(471253),
    a = n(924301),
    u = n(482241),
    s = n(765305),
    d = n(388032);
function g(e, t, n) {
    let { canManageGuildEvent: g } = (0, o.XJ)(null != n ? n : t),
        f = (0, l.e7)([a.ZP], () => a.ZP.isActive(e)),
        b = (0, l.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]),
        p = g(b);
    if (null == e || !p || !f || (null == b ? void 0 : b.entity_type) === s.WX.EXTERNAL) return null;
    let v = () => {
        if (null == n ? void 0 : n.isGuildStageVoice()) return void (0, c.NZ)(n);
        null != e && u.Z.endEvent(e, t.id), (0, i.pTH)();
    };
    return (0, r.jsx)(i.sNh, {
        id: d.NW.string(d.t.qaYzPD),
        label: d.NW.string(d.t.qaYzPD),
        action: function () {
            (0, i.h7j)((e) => {
                var t, n;
                return (0, r.jsx)(
                    i.ConfirmModal,
                    ((t = (function (e) {
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
                    })({}, e)),
                    (n = n =
                        {
                            header: d.NW.string(d.t.qaYzPD),
                            confirmText: d.NW.string(d.t.mjB9pa),
                            cancelText: d.NW.string(d.t['ETE/oK']),
                            onConfirm: v,
                            children: (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: d.NW.string(d.t.bnDQ7O)
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            });
        },
        color: 'danger'
    });
}
