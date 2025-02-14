n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var s = n(704215),
    l = n(13245),
    a = n(605236),
    o = n(593481),
    r = n(371651),
    d = n(237997),
    c = n(145597),
    u = n(312839),
    h = n(987650),
    p = n(388032);
let g = () => ({
        icon: n(639525),
        title: p.intl.string(p.t.r0ObgY),
        body: p.intl.string(p.t.hc6XFx),
        hint: m,
        notifType: h.n0.OopWelcomeNudge
    }),
    m = (e) => (0, o.QR)(e, (0, u.P)(), p.t['z8/sgI']);
function f(e) {
    var t;
    let { isFirstTimeNux: n } = e,
        {
            icon: o,
            title: h,
            body: m,
            hint: f,
            notifType: v
        } = ((t = g()),
        e.isFirstTimeNux
            ? {
                  ...t,
                  title: p.intl.string(p.t.xxADho),
                  body: p.intl.string(p.t.GtUrGB)
              }
            : t),
        { trackView: Z, trackClick: x } = (0, u.R)(v, { notif_type: v });
    return {
        icon: o,
        title: h,
        body: m,
        hint: f,
        renderFooter: () =>
            (0, i.jsx)('div', {
                style: {
                    textAlign: 'center',
                    padding: 2
                },
                children: p.intl.string(p.t['9MyuT0'])
            }),
        confirmText: n ? p.intl.string(p.t.TxyTbm) : void 0,
        onConfirmClick: n
            ? () => {
                  x('unlock'), l.Z.setInputLocked(!1, (0, c.QF)());
              }
            : void 0,
        onNotificationShow: () => {
            Z(), n && (0, a.EW)(s.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX);
        },
        onNotificationClick: (e, t) => {
            x('unlock'), r.default.isOverlayOOPEnabledForPid((0, c.QF)()) ? l.Z.setInputLocked(!1, (0, c.QF)()) : d.Z.isInstanceLocked() && l.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            x('dismiss');
        }
    };
}
