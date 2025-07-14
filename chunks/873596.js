(n.d(t, { Z: () => I }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    s = n(313201),
    a = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    f = n(441894),
    p = n(160038),
    g = n(586646),
    O = n(760373),
    N = n(388032),
    y = n(935179);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
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
function E(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        o = (0, i.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, r.jsx)(
        p.Z,
        x(b({}, o), {
            closePopout: l,
            connectionTypeText: n
        })
    );
}
function m(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, i.cj)([a.Z], () => ({
            connectionState: a.Z.getState(),
            hostname: a.Z.getHostname(),
            averagePing: a.Z.getAveragePing(),
            lastPing: a.Z.getLastPing(),
            outboundLossRate: a.Z.getOutboundLossRate(),
            pings: a.Z.getPings()
        }));
    return (0, r.jsx)(
        p.Z,
        x(b({}, l), {
            closePopout: t,
            connectionTypeText: n
        })
    );
}
function v(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: i } = e,
        o = (0, f.J)({ channelId: t }) ? N.intl.string(N.t['3BogKS']) : N.intl.string(N.t.ETIVvr);
    return n
        ? (0, r.jsx)(E, {
              lobbyId: l,
              closePopout: i,
              connectionTypeText: o
          })
        : (0, r.jsx)(m, {
              closePopout: i,
              connectionTypeText: o
          });
}
function C(e) {
    let t = (0, i.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, a] = l.useState(O.tu.RTC_DEBUG_PANEL),
        u = (0, s.Dt)(),
        f = l.useMemo(() => {
            switch (n) {
                case O.tu.RTC_DEBUG_PANEL:
                    return (0, r.jsx)(v, b({}, e));
                case O.tu.RTC_SECURE_FRAMES:
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
            p && a(O.tu.RTC_DEBUG_PANEL);
        }, [p]),
        (0, r.jsxs)('div', {
            className: y.container,
            children: [
                (0, r.jsx)(o.X6q, {
                    className: y.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? N.intl.string(N.t.IlHdW1) : N.intl.string(N.t.WsOisr)
                }),
                (0, r.jsxs)(o.njP, {
                    className: y.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: a,
                    children: [
                        (0, r.jsx)(o.njP.Item, {
                            id: O.tu.RTC_DEBUG_PANEL,
                            className: y.tabBarItem,
                            children: N.intl.string(N.t.MBY1Pj)
                        }),
                        p
                            ? null
                            : (0, r.jsx)(o.njP.Item, {
                                  id: O.tu.RTC_SECURE_FRAMES,
                                  className: y.tabBarItem,
                                  children: N.intl.string(N.t.zC6o3t)
                              })
                    ]
                }),
                (0, r.jsx)(o.njP.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: f
                })
            ]
        })
    );
}
function I(e) {
    return (0, f.J)({ channelId: e.channelId })
        ? (0, r.jsx)(C, b({}, e))
        : (0, r.jsx)('div', {
              className: y.debugPanelStandalone,
              children: (0, r.jsx)('section', {
                  className: y.debugPanelSection,
                  children: (0, r.jsx)(v, b({}, e))
              })
          });
}
