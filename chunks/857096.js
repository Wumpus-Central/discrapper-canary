n.d(t, { Z: () => A });
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
    p = n(928518),
    _ = n(607187),
    h = n(937995),
    m = n(366050),
    g = n(48131),
    E = n(591472),
    b = n(754376),
    y = n(408491),
    O = n(981631),
    v = n(701488),
    S = n(326464),
    I = n(290953),
    T = n(533348);
function C(e) {
    let { isLoading: t } = e,
        n = (0, o.e7)([E.Z], () => E.Z.getConnectedFrame()),
        i = (0, o.e7)([E.Z], () => E.Z.getFrameLayoutMode()),
        u = (0, f.q)(null == n ? void 0 : n.applicationId),
        d = (0, o.e7)([p.Z], () => p.Z.getWindowOpen(O.KJ3.ACTIVITY_POPOUT)),
        C = (0, o.e7)([m.Z], () => m.Z.isFrameHidden()),
        A = i === y.U.PIP && !C && !d,
        N = A && null != m.Z.pipVideoWindow && null != m.Z.pipFrameWindow;
    if (null == n || null == u || d) return null;
    let P = {
        instance_id: "example-cl-instance",
        platform: v.S4.DESKTOP,
    };
    function w(e) {
        let { onActive: t, onForceIdle: i, idle: a } = e;
        return A && null != n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("div", {
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          className: S.clickShield,
                      }),
                      (0, r.jsx)(b.F, {
                          idle: a,
                          onMouseMove: t,
                          onMouseDown: t,
                          onMouseLeave: i,
                          onFocus: () => {
                              g.Z.updateFrameLayoutMode({
                                  applicationId: n.applicationId,
                                  layoutMode: y.U.FOCUSED,
                              });
                          },
                          applicationId: n.applicationId,
                      }),
                  ],
              })
            : null;
    }
    return (
        null != n.proxyTicket && (P.discord_proxy_ticket = n.proxyTicket),
        (0, r.jsx)(h.ZP, {
            timeout: 2000,
            children: (e) => {
                let { idle: i, onActive: o, onForceIdle: d } = e;
                return (0, r.jsxs)(_.Z, {
                    className: a()(S.root, {
                        [S.pipMode]: A,
                        [T.elevationHigh]: A,
                        [I.idle]: i,
                        [S.pipModeShort]: A,
                        [S.hidden]: C,
                        [S.multiPIPMode]: N,
                    }),
                    noBorder: !A,
                    children: [
                        (0, r.jsx)("div", {
                            className: "theme-dark",
                            children: w({
                                onActive: o,
                                onForceIdle: d,
                                idle: i,
                            }),
                        }),
                        t
                            ? (0, r.jsx)(s.$jN, { className: a()(S.iframe, { [S.pipModeShort]: A }) })
                            : (0, r.jsx)(c.J, {
                                  allowPopups: (0, l.h)(u),
                                  referrerPolicy: "origin",
                                  url: n.url,
                                  queryParams: P,
                                  className: a()(S.iframe, {
                                      [S.pipModeShort]: A,
                                      [S.pipNonInteractive]: A,
                                  }),
                                  shouldRefocus: !A,
                              }),
                    ],
                });
            },
        })
    );
}
let A = () => {
    let { analyticsLocations: e } = (0, d.ZP)(u.Z.FRAME_PIP),
        t = (0, o.e7)([E.Z], () => E.Z.isFrameActive());
    return (0, r.jsx)(d.Gt, {
        value: e,
        children: (0, r.jsx)(C, { isLoading: !t }),
    });
};
