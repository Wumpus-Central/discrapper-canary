n.d(t, { Z: () => g });
var i = n(951288);
n(647438);
var r = n(704215),
    s = n(13245),
    o = n(266454),
    l = n(593481),
    a = n(371651),
    c = n(237997),
    d = n(145597),
    u = n(312839),
    p = n(987650),
    h = n(388032);
let f = (e) => (0, l.QR)(e, (0, u.P)(), h.t["z8/sgI"]);
function g(e) {
    let { isFirstTimeNux: t } = e,
        {
            icon: l,
            title: g,
            body: m,
            hint: y,
            notifType: _,
        } = (function (e, t) {
            if (t.isFirstTimeNux) {
                var n, i;
                return (
                    (n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, e)),
                    (i = i =
                        {
                            title: h.intl.string(h.t.xxADho),
                            body: h.intl.string(h.t.GtUrGB),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n
                );
            }
            return e;
        })(
            {
                icon: n(639525),
                title: h.intl.string(h.t.r0ObgY),
                body: h.intl.string(h.t.hc6XFx),
                hint: f,
                notifType: p.n0.OopWelcomeNudge,
            },
            e,
        ),
        { trackView: O, trackClick: v } = (0, u.R)(_, { notif_type: _ });
    return {
        icon: l,
        title: g,
        body: m,
        hint: y,
        renderFooter: () =>
            (0, i.jsx)("div", {
                style: {
                    textAlign: "center",
                    padding: 2,
                },
                children: h.intl.string(h.t["9MyuT0"]),
            }),
        confirmText: t ? h.intl.string(h.t.TxyTbm) : void 0,
        onConfirmClick: t
            ? () => {
                  v("unlock"), s.Z.setInputLocked(!1, (0, d.getPID)());
              }
            : void 0,
        onNotificationShow: () => {
            O(), t && (0, o.Q3)(r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX);
        },
        onNotificationClick: (e, t) => {
            v("unlock"),
                a.default.isOverlayOOPEnabledForPid((0, d.getPID)())
                    ? s.Z.setInputLocked(!1, (0, d.getPID)())
                    : c.default.isInstanceLocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            v("dismiss");
        },
    };
}
