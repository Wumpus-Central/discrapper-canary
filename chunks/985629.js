"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(110259),
    a = n(435371),
    s = n(397927),
    o = n(359549),
    l = n(139286),
    u = n(939496),
    c = n(993401),
    d = n(996988),
    _ = n(985018);
function f(e) {
    let { application: t, analyticsLocations: n, onAction: f, onClose: p } = e,
        { themeType: h } = (0, u.E)(),
        m = (0, o.A)({ application: t, analyticsLocations: n });
    return ((0, l.A)(
        { name: i.ImpressionNames.CLOUD_PLAY_CTA, type: i.ImpressionTypes.VIEW, properties: { location_stack: n } },
        { disableTrack: null == m },
        [m],
    ),
    null == m)
        ? null
        : (0, r.jsx)(a.m_, {
              text: _.intl.string(_.t.JVwWva),
              position: "top",
              children: (0, r.jsx)(c.FD, {
                  icon: s.hpF,
                  text: _.intl.string(_.t["jaYS/h"]),
                  size: "sm",
                  onClick: (e) => {
                      e.stopPropagation(), f?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), m(), p?.();
                  },
                  fullWidth: h !== d.d.MODAL_V2,
              }),
          });
}
