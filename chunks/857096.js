n.d(t, { Z: () => S });
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
    _ = n(607187),
    p = n(937995),
    h = n(366050),
    m = n(48131),
    g = n(591472),
    E = n(754376),
    b = n(408491),
    y = n(701488),
    O = n(505386),
    v = n(186880),
    I = n(315091);
function T(e) {
    let { isLoading: t } = e,
        n = (0, o.e7)([g.Z], () => g.Z.getConnectedFrame()),
        i = (0, o.e7)([g.Z], () => g.Z.getFrameLayoutMode()),
        u = (0, f.q)(null == n ? void 0 : n.applicationId),
        d = (0, o.e7)([h.Z], () => h.Z.isFrameHidden()),
        T = i === b.U.PIP && !d,
        S = T && null != h.Z.pipVideoWindow && null != h.Z.pipFrameWindow;
    if (null == n || null == u) return null;
    let A = {
        instance_id: "example-cl-instance",
        platform: y.S4.DESKTOP,
    };
    function C(e) {
        let { onActive: t, onForceIdle: i, idle: a } = e;
        return T && null != n
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
                              m.Z.updateFrameLayoutMode({
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
        (0, r.jsx)(p.ZP, {
            timeout: 2000,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: f } = e;
                return (0, r.jsxs)(_.Z, {
                    className: a()(O.root, {
                        [O.pipMode]: T,
                        [I.elevationHigh]: T,
                        [v.idle]: i,
                        [O.pipModeShort]: T,
                        [O.hidden]: d,
                        [O.multiPIPMode]: S,
                    }),
                    noBorder: !T,
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
                            ? (0, r.jsx)(s.$jN, { className: a()(O.iframe, { [O.pipModeShort]: T }) })
                            : (0, r.jsx)(c.J, {
                                  allowPopups: (0, l.h)(u),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: A,
                                  className: a()(O.iframe, {
                                      [O.pipModeShort]: T,
                                      [O.pipNonInteractive]: T,
                                  }),
                                  shouldRefocus: !T,
                              }),
                    ],
                });
            },
        })
    );
}
let S = () => {
    let { analyticsLocations: e } = (0, d.ZP)(u.Z.FRAME_PIP),
        t = (0, o.e7)([g.Z], () => g.Z.isFrameActive());
    return (0, r.jsx)(d.Gt, {
        value: e,
        children: (0, r.jsx)(T, { isLoading: !t }),
    });
};
