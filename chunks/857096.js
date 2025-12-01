n.d(t, { Z: () => T });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(963614),
    c = n(208156),
    u = n(100527),
    d = n(906732),
    f = n(835473),
    p = n(607187),
    _ = n(937995),
    m = n(366050),
    h = n(48131),
    g = n(591472),
    E = n(754376),
    b = n(408491),
    y = n(701488),
    O = n(505386),
    v = n(186880),
    S = n(315091);
function I(e) {
    let { isLoading: t } = e,
        n = (0, o.e7)([g.Z], () => g.Z.getConnectedFrame()),
        i = (0, o.e7)([g.Z], () => g.Z.getFrameLayoutMode()),
        u = (0, f.q)(null == n ? void 0 : n.applicationId),
        d = (0, o.e7)([m.Z], () => m.Z.isFrameHidden()),
        I = i === b.U.PIP && !d,
        T = I && null != m.Z.pipVideoWindow && null != m.Z.pipFrameWindow;
    if (null == n || null == u) return null;
    let A = {
        instance_id: "example-cl-instance",
        platform: y.S4.DESKTOP,
    };
    function C(e) {
        let { onActive: t, onForceIdle: i, idle: a } = e;
        return I && null != n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          className: O.clickShield,
                      }),
                      (0, r.jsx)(E.F, {
                          idle: a,
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          onFocus: () => {
                              h.Z.updateFrameLayoutMode({
                                  applicationId: n.applicationId,
                                  layoutMode: b.U.FOCUSED,
                              });
                          },
                          applicationId: n.applicationId,
                      }),
                  ],
              })
            : null;
    }
    return (
        null != n.proxyTicket && (A.discord_proxy_ticket = n.proxyTicket),
        (0, r.jsx)(_.ZP, {
            timeout: 2000,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: f } = e;
                return (0, r.jsxs)(p.Z, {
                    className: a()(O.root, {
                        [O.pipMode]: I,
                        [S.elevationHigh]: I,
                        [v.idle]: i,
                        [O.pipModeShort]: I,
                        [O.hidden]: d,
                        [O.multiPIPMode]: T,
                    }),
                    noBorder: !I,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: C({
                                onActive: o,
                                onForceIdle: f,
                                idle: i,
                            }),
                        }),
                        t
                            ? (0, r.jsx)(s.$jN, { className: a()(O.iframe, { [O.pipModeShort]: I }) })
                            : (0, r.jsx)(c.J, {
                                  allowPopups: (0, l.h)(u),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: A,
                                  className: a()(O.iframe, {
                                      [O.pipModeShort]: I,
                                      [O.pipNonInteractive]: I,
                                  }),
                                  shouldRefocus: !I,
                              }),
                    ],
                });
            },
        })
    );
}
let T = () => {
    let { analyticsLocations: e } = (0, d.ZP)(u.Z.FRAME_PIP),
        t = (0, o.e7)([g.Z], () => g.Z.isFrameActive());
    return (0, r.jsx)(d.Gt, {
        value: e,
        children: (0, r.jsx)(I, { isLoading: !t }),
    });
};
