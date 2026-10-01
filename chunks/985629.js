e.d(n, { A: () => x });
var l = e(477900),
    i = e(562708),
    r = e(866665),
    a = e(414499),
    s = e(146779),
    o = e(139286),
    c = e(939496),
    u = e(993401),
    d = e(996988),
    A = e(375708);
function x(t) {
    let { application: n, analyticsLocations: e, onAction: x, onClose: p } = t,
        { themeType: f } = (0, c.E)(),
        m = (0, s.Ay)({ application: n, analyticsLocations: e });
    return ((0, o.A)(
        { name: i.ImpressionNames.CLOUD_PLAY_CTA, type: i.ImpressionTypes.VIEW, properties: { location_stack: e } },
        { disableTrack: null == m },
        [m],
    ),
    null == m)
        ? null
        : (0, l.jsx)(r.m, {
              text: A.intl.string(A.t.JVwWva),
              position: "top",
              children: (0, l.jsx)(u.FD, {
                  icon: a.h,
                  text: A.intl.string(A.t["jaYS/h"]),
                  size: "sm",
                  onClick: (t) => {
                      (t.stopPropagation(), x?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), m(), p?.());
                  },
                  fullWidth: f !== d.d.MODAL_V2,
              }),
          });
}
