n.d(e, { Z: () => g });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(471253),
    a = n(924301),
    u = n(482241),
    s = n(765305),
    d = n(388032);
function g(t, e, n) {
    let { canManageGuildEvent: g } = (0, o.XJ)(null != n ? n : e),
        f = (0, r.e7)([a.ZP], () => a.ZP.isActive(t)),
        b = (0, r.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]),
        p = g(b);
    if (null == t || !p || !f || (null == b ? void 0 : b.entity_type) === s.WX.EXTERNAL) return null;
    let v = () => {
        if (null == n ? void 0 : n.isGuildStageVoice()) return void (0, c.NZ)(n);
        null != t && u.Z.endEvent(t, e.id), (0, i.pTH)();
    };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.qaYzPD),
        label: d.intl.string(d.t.qaYzPD),
        action: function () {
            (0, i.h7j)((t) => {
                var e, n;
                return (0, l.jsx)(
                    i.ConfirmModal,
                    ((e = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                l = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    })
                                )),
                                l.forEach(function (e) {
                                    var l;
                                    (l = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (t[e] = l);
                                });
                        }
                        return t;
                    })({}, t)),
                    (n = n =
                        {
                            header: d.intl.string(d.t.qaYzPD),
                            confirmText: d.intl.string(d.t.mjB9pa),
                            cancelText: d.intl.string(d.t['ETE/oK']),
                            onConfirm: v,
                            children: (0, l.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: d.intl.string(d.t.bnDQ7O)
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                        : (function (t, e) {
                              var n = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(t);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                          }),
                    e)
                );
            });
        },
        color: 'danger'
    });
}
