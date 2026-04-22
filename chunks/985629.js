e.d(n, { A: () => x });
var i = e(627968),
    l = e(110259),
    r = e(990078),
    a = e(414499),
    s = e(359549),
    o = e(139286),
    c = e(939496),
    u = e(993401),
    d = e(996988),
    A = e(985018);
function x(t) {
    let { application: n, analyticsLocations: e, onAction: x, onClose: p } = t,
        { themeType: f } = (0, c.E)(),
        _ = (0, s.A)({ application: n, analyticsLocations: e });
    return ((0, o.A)(
        { name: l.ImpressionNames.CLOUD_PLAY_CTA, type: l.ImpressionTypes.VIEW, properties: { location_stack: e } },
        { disableTrack: null == _ },
        [_],
    ),
    null == _)
        ? null
        : (0, i.jsx)(r.m, {
              text: A.intl.string(A.t.JVwWva),
              position: "top",
              children: (0, i.jsx)(u.FD, {
                  icon: a.h,
                  text: A.intl.string(A.t["jaYS/h"]),
                  size: "sm",
                  onClick: (t) => {
                      t.stopPropagation(), x?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), _(), p?.();
                  },
                  fullWidth: f !== d.d.MODAL_V2,
              }),
          });
}
