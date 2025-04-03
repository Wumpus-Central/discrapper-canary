n.d(t, { Z: () => Z });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(357156),
    c = n(471253),
    a = n(924301),
    s = n(482241),
    u = n(765305),
    d = n(388032);
function Z(e, t, n) {
    let { canManageGuildEvent: Z } = (0, o.XJ)(null != n ? n : t),
        f = (0, i.e7)([a.ZP], () => a.ZP.isActive(e)),
        b = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(e), [e]),
        O = Z(b);
    if (null == e || !O || !f || (null == b ? void 0 : b.entity_type) === u.WX.EXTERNAL) return null;
    let j = () => {
        if (null == n ? void 0 : n.isGuildStageVoice()) return void (0, c.NZ)(n);
        null != e && s.Z.endEvent(e, t.id), (0, l.pTH)();
    };
    return (0, r.jsx)(l.sNh, {
        id: d.NW.string(d.t.qaYzPD),
        label: d.NW.string(d.t.qaYzPD),
        action: function () {
            (0, l.h7j)((e) => {
                var t, n;
                return (0, r.jsx)(
                    l.ConfirmModal,
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
                            onConfirm: j,
                            children: (0, r.jsx)(l.Text, {
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
