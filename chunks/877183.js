n.d(t, { Z: () => g });
var i = n(951288);
n(647438);
var r = n(704215),
    o = n(13245),
    l = n(266454),
    s = n(593481),
    a = n(371651),
    c = n(237997),
    d = n(145597),
    u = n(312839),
    h = n(987650),
    p = n(388032);
let f = (e) => (0, s.QR)(e, (0, u.P)(), p.t["z8/sgI"]);
function g(e) {
    let { isFirstTimeNux: t } = e,
        {
            icon: s,
            title: g,
            body: m,
            hint: y,
            notifType: O,
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
                            title: p.intl.string(p.t.xxADho),
                            body: p.intl.string(p.t.GtUrGB),
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
                title: p.intl.string(p.t.r0ObgY),
                body: p.intl.string(p.t.hc6XFx),
                hint: f,
                notifType: h.n0.OopWelcomeNudge,
            },
            e,
        ),
        { trackView: v, trackClick: _ } = (0, u.R)(O, { notif_type: O });
    return {
        icon: s,
        title: g,
        body: m,
        hint: y,
        renderFooter: () =>
            (0, i.jsx)("div", {
                style: {
                    textAlign: "center",
                    padding: 2,
                },
                children: p.intl.string(p.t["9MyuT0"]),
            }),
        confirmText: t ? p.intl.string(p.t.TxyTbm) : void 0,
        onConfirmClick: t
            ? () => {
                  _("unlock"), o.Z.setInputLocked(!1, (0, d.getPID)());
              }
            : void 0,
        onNotificationShow: () => {
            v(), t && (0, l.Q3)(r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX);
        },
        onNotificationClick: (e, t) => {
            _("unlock"),
                a.default.isOverlayOOPEnabledForPid((0, d.getPID)())
                    ? o.Z.setInputLocked(!1, (0, d.getPID)())
                    : c.default.isInstanceLocked() && o.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            _("dismiss");
        },
    };
}
