"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(562708),
    a = n(990078),
    s = n(414499),
    l = n(737393),
    o = n(139286),
    d = n(939496),
    c = n(993401),
    u = n(996988),
    _ = n(375708);
function E(e) {
    let { application: t, analyticsLocations: n, onAction: E, onClose: A } = e,
        { themeType: h } = (0, d.E)(),
        I = (0, l.Ay)({ application: t, analyticsLocations: n });
    return ((0, o.A)(
        { name: r.ImpressionNames.CLOUD_PLAY_CTA, type: r.ImpressionTypes.VIEW, properties: { location_stack: n } },
        { disableTrack: null == I },
        [I],
    ),
    null == I)
        ? null
        : (0, i.jsx)(a.m, {
              text: _.intl.string(_.t.JVwWva),
              position: "top",
              children: (0, i.jsx)(c.FD, {
                  icon: s.h,
                  text: _.intl.string(_.t["jaYS/h"]),
                  size: "sm",
                  onClick: (e) => {
                      e.stopPropagation(), E?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), I(), A?.();
                  },
                  fullWidth: h !== u.d.MODAL_V2,
              }),
          });
}
