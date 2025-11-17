n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(990547),
    a = n(681715),
    o = n(481060),
    s = n(206074),
    l = n(213609),
    c = n(652853),
    u = n(732380),
    d = n(671955),
    f = n(388032);
function _(e) {
    let { application: t, analyticsLocations: n, onAction: _, onClose: p } = e,
        { themeType: h } = (0, c.z)(),
        m = (0, s.Z)({
            application: t,
            analyticsLocations: n,
        });
    return ((0, l.Z)(
        {
            name: i.ImpressionNames.CLOUD_PLAY_CTA,
            type: i.ImpressionTypes.VIEW,
            properties: { location_stack: n },
        },
        { disableTrack: null == m },
        [m],
    ),
    null == m)
        ? null
        : (0, r.jsx)(a.u, {
              text: f.intl.string(f.t.JVwWva),
              position: "top",
              children: (0, r.jsx)(u.O1, {
                  icon: o.v3n,
                  text: f.intl.string(f.t["jaYS/h"]),
                  size: "sm",
                  onClick: (e) => {
                      e.stopPropagation(), null == _ || _({ action: "PRESS_CLOUD_PLAY_BUTTON" }), m(), null == p || p();
                  },
                  fullWidth: h !== d.l.MODAL_V2,
              }),
          });
}
