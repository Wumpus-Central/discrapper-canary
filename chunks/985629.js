n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(110259),
    a = n(435371),
    s = n(397927),
    o = n(359549),
    l = n(139286),
    c = n(939496),
    u = n(993401),
    d = n(996988),
    f = n(985018);

function p(e) {
    let { application: t, analyticsLocations: n, onAction: p, onClose: _ } = e,
        { themeType: h } = (0, c.E)(),
        m = (0, o.A)({
            application: t,
            analyticsLocations: n,
        });
    return ((0, l.A)(
        {
            name: i.ImpressionNames.CLOUD_PLAY_CTA,
            type: i.ImpressionTypes.VIEW,
            properties: {
                location_stack: n,
            },
        },
        {
            disableTrack: null == m,
        },
        [m],
    ),
    null == m)
        ? null
        : (0, r.jsx)(a.m_, {
              text: f.intl.string(f.t.JVwWva),
              position: "top",
              children: (0, r.jsx)(u.FD, {
                  icon: s.hpF,
                  text: f.intl.string(f.t["jaYS/h"]),
                  size: "sm",
                  onClick: (e) => {
                      e.stopPropagation(),
                          null == p ||
                              p({
                                  action: "PRESS_CLOUD_PLAY_BUTTON",
                              }),
                          m(),
                          null == _ || _();
                  },
                  fullWidth: h !== d.d.MODAL_V2,
              }),
          });
}
