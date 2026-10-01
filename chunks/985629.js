n.d(e, { A: () => f });
var l = n(477900),
    i = n(562708),
    a = n(866665),
    r = n(414499),
    s = n(146779),
    o = n(139286),
    c = n(939496),
    u = n(993401),
    d = n(996988),
    A = n(375708);
function f(t) {
    let { application: e, analyticsLocations: n, onAction: f, onClose: p } = t,
        { themeType: g } = (0, c.E)(),
        m = (0, s.Ay)({ application: e, analyticsLocations: n });
    return ((0, o.A)(
        { name: i.ImpressionNames.CLOUD_PLAY_CTA, type: i.ImpressionTypes.VIEW, properties: { location_stack: n } },
        { disableTrack: null == m },
        [m],
    ),
    null == m)
        ? null
        : (0, l.jsx)(a.m, {
              text: A.intl.string(A.t.JVwWva),
              position: "top",
              children: (0, l.jsx)(u.FD, {
                  icon: r.h,
                  text: A.intl.string(A.t["jaYS/h"]),
                  size: "sm",
                  onClick: (t) => {
                      (t.stopPropagation(), f?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), m(), p?.());
                  },
                  fullWidth: g !== d.d.MODAL_V2,
              }),
          });
}
