n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(442837),
    i = n(481060),
    a = n(313201),
    s = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    f = n(441894),
    p = n(160038),
    g = n(586646),
    y = n(760373),
    v = n(388032),
    O = n(887933);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        i = (0, o.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, r.jsx)(
        p.Z,
        N(b({}, i), {
            closePopout: l,
            connectionTypeText: n
        })
    );
}
function x(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, o.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings()
        }));
    return (0, r.jsx)(
        p.Z,
        N(b({}, l), {
            closePopout: t,
            connectionTypeText: n
        })
    );
}
function C(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: o } = e,
        i = (0, f.J)({ channelId: t }) ? v.NW.string(v.t['3BogKS']) : v.NW.string(v.t.ETIVvr);
    return n
        ? (0, r.jsx)(m, {
              lobbyId: l,
              closePopout: o,
              connectionTypeText: i
          })
        : (0, r.jsx)(x, {
              closePopout: o,
              connectionTypeText: i
          });
}
function E(e) {
    let t = (0, o.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, s] = l.useState(y.tu.RTC_DEBUG_PANEL),
        u = (0, a.Dt)(),
        f = l.useMemo(() => {
            switch (n) {
                case y.tu.RTC_DEBUG_PANEL:
                    return (0, r.jsx)(C, b({}, e));
                case y.tu.RTC_SECURE_FRAMES:
                    return (0, r.jsx)(g.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let p = (0, h.r)();
    return (
        l.useEffect(() => {
            p && s(y.tu.RTC_DEBUG_PANEL);
        }, [p]),
        (0, r.jsxs)('div', {
            className: O.container,
            children: [
                (0, r.jsx)(i.X6q, {
                    className: O.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? v.NW.string(v.t.IlHdW1) : v.NW.string(v.t.WsOisr)
                }),
                (0, r.jsxs)(i.njP, {
                    className: O.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, r.jsx)(i.njP.Item, {
                            id: y.tu.RTC_DEBUG_PANEL,
                            className: O.tabBarItem,
                            children: v.NW.string(v.t.MBY1Pj)
                        }),
                        p
                            ? null
                            : (0, r.jsx)(i.njP.Item, {
                                  id: y.tu.RTC_SECURE_FRAMES,
                                  className: O.tabBarItem,
                                  children: v.NW.string(v.t.zC6o3t)
                              })
                    ]
                }),
                (0, r.jsx)(i.njP.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: f
                })
            ]
        })
    );
}
function j(e) {
    return (0, f.J)({ channelId: e.channelId })
        ? (0, r.jsx)(E, b({}, e))
        : (0, r.jsx)('div', {
              className: O.debugPanelStandalone,
              children: (0, r.jsx)('section', {
                  className: O.debugPanelSection,
                  children: (0, r.jsx)(C, b({}, e))
              })
          });
}
