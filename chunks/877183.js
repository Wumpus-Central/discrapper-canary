n.d(t, { Z: () => m });
var i = n(255367);
n(73800);
var r = n(704215),
    o = n(13245),
    l = n(605236),
    s = n(593481),
    a = n(371651),
    c = n(237997),
    d = n(145597),
    u = n(312839),
    h = n(987650),
    p = n(388032);
let f = () => ({
        icon: n(639525),
        title: p.intl.string(p.t.r0ObgY),
        body: p.intl.string(p.t.hc6XFx),
        hint: g,
        notifType: h.n0.OopWelcomeNudge
    }),
    g = (e) => (0, s.QR)(e, (0, u.P)(), p.t['z8/sgI']);
function m(e) {
    let { isFirstTimeNux: t } = e,
        {
            icon: n,
            title: s,
            body: h,
            hint: g,
            notifType: m
        } = (function (e, t) {
            if (t.isFirstTimeNux) {
                var n, i;
                return (
                    (n = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (i = i =
                        {
                            title: p.intl.string(p.t.xxADho),
                            body: p.intl.string(p.t.GtUrGB)
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
        })(f(), e),
        { trackView: y, trackClick: O } = (0, u.R)(m, { notif_type: m });
    return {
        icon: n,
        title: s,
        body: h,
        hint: g,
        renderFooter: () =>
            (0, i.jsx)('div', {
                style: {
                    textAlign: 'center',
                    padding: 2
                },
                children: p.intl.string(p.t['9MyuT0'])
            }),
        confirmText: t ? p.intl.string(p.t.TxyTbm) : void 0,
        onConfirmClick: t
            ? () => {
                  (O('unlock'), o.Z.setInputLocked(!1, (0, d.getPID)()));
              }
            : void 0,
        onNotificationShow: () => {
            (y(), t && (0, l.EW)(r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX));
        },
        onNotificationClick: (e, t) => {
            (O('unlock'), a.default.isOverlayOOPEnabledForPid((0, d.getPID)()) ? o.Z.setInputLocked(!1, (0, d.getPID)()) : c.default.isInstanceLocked() && o.Z.setInstanceLocked(!1));
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
