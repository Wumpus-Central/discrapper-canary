var l = e(477900),
    i = e(613412),
    a = e(866665),
    r = e(414499),
    s = e(359549),
    o = e(139286),
    c = e(939496),
    u = e(993401),
    d = e(996988),
    A = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { application: n, analyticsLocations: e, onAction: x, onClose: m } = t,
                { themeType: f } = (0, c.E)(),
                g = (0, s.Ay)({ application: n, analyticsLocations: e });
            return ((0, o.A)(
                {
                    name: i.ImpressionNames.CLOUD_PLAY_CTA,
                    type: i.ImpressionTypes.VIEW,
                    properties: { location_stack: e },
                },
                { disableTrack: null == g },
                [g],
            ),
            null == g)
                ? null
                : (0, l.jsx)(a.m, {
                      text: A.intl.string(A.t.JVwWva),
                      position: "top",
                      children: (0, l.jsx)(u.FD, {
                          icon: r.CloudIcon,
                          text: A.intl.string(A.t["jaYS/h"]),
                          size: "sm",
                          onClick: (t) => {
                              (t.stopPropagation(), x?.({ action: "PRESS_CLOUD_PLAY_BUTTON" }), g(), m?.());
                          },
                          fullWidth: f !== d.d.MODAL_V2,
                      }),
                  });
        },
    },
);
