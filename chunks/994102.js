n.d(t, { Z: () => p });
var r = n(54381),
    i = n(990547),
    a = n(681715),
    o = n(481060),
    s = n(206074),
    l = n(213609),
    c = n(652853),
    u = n(475413),
    d = n(671955),
    f = n(388032);
function p(e) {
    let { application: t, analyticsLocations: n, onAction: p, onClose: _ } = e,
        { themeType: m } = (0, c.z)(),
        h = (0, s.Z)({
            application: t,
            analyticsLocations: n,
        });
    return ((0, l.Z)(
        {
            name: i.ImpressionNames.CLOUD_PLAY_CTA,
            type: i.ImpressionTypes.VIEW,
            properties: { location_stack: n },
        },
        { disableTrack: null == h },
        [h],
    ),
    null == h)
        ? null
        : (0, r.jsx)(a.u, {
              text: f.intl.string(f.t.JVwWva),
              position: "top",
              children: (0, r.jsx)(u.i6, {
                  icon: o.v3n,
                  text: f.intl.string(f.t["jaYS/h"]),
                  size: "sm",
                  onClick: (e) => {
                      e.stopPropagation(), null == p || p({ action: "PRESS_CLOUD_PLAY_BUTTON" }), h(), null == _ || _();
                  },
                  fullWidth: m !== d.l.MODAL_V2,
              }),
          });
}
