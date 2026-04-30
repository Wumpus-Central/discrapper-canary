"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(562708),
    s = n(990078),
    a = n(414499),
    o = n(737393),
    l = n(139286),
    u = n(939496),
    c = n(993401),
    d = n(996988),
    _ = n(375708);
function f(e) {
    let { application: t, analyticsLocations: n, onAction: f, onClose: h } = e,
        { themeType: p } = (0, u.E)(),
        E = (0, o.A)({ application: t, analyticsLocations: n });
    return ((0, l.A)(
        { name: r.ImpressionNames.CLOUD_PLAY_CTA, type: r.ImpressionTypes.VIEW, properties: { location_stack: n } },
        { disableTrack: null == E },
        [E],
    ),
    null == E)
        ? null
        : (0, i.jsx)(s.m, {
              text: _.intl.string(_.t.JVwWva),
              position: "top",
              children: (0, i.jsx)(c.FD, {
                  icon: a.h,
                  text: _.intl.string(_.t["jaYS/h"]),
                  size: "sm",
                  onClick: (e) => {
                      e.stopPropagation(), f?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), E(), h?.();
                  },
                  fullWidth: p !== d.d.MODAL_V2,
              }),
          });
}
