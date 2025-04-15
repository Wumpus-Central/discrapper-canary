n.d(t, { Z: () => I }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(313201),
    s = n(19780),
    u = n(979651),
    c = n(362446),
    d = n(571826),
    h = n(277642),
    p = n(441894),
    f = n(160038),
    g = n(586646),
    y = n(760373),
    O = n(388032),
    N = n(935179);
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
function v(e, t) {
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
        o = (0, i.cj)([c.Z], () => ({
            connectionState: c.Z.getConnectionState(t),
            hostname: c.Z.getHostname(t),
            averagePing: c.Z.getAveragePing(t),
            lastPing: c.Z.getLastPing(t),
            pings: c.Z.getPings(),
            outboundLossRate: c.Z.getOutboundLossRate(t)
        }));
    return (0, r.jsx)(
        f.Z,
        v(b({}, o), {
            closePopout: l,
            connectionTypeText: n
        })
    );
}
function x(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, i.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings()
        }));
    return (0, r.jsx)(
        f.Z,
        v(b({}, l), {
            closePopout: t,
            connectionTypeText: n
        })
    );
}
function E(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: i } = e,
        o = (0, p.J)({ channelId: t }) ? O.NW.string(O.t['3BogKS']) : O.NW.string(O.t.ETIVvr);
    return n
        ? (0, r.jsx)(m, {
              lobbyId: l,
              closePopout: i,
              connectionTypeText: o
          })
        : (0, r.jsx)(x, {
              closePopout: i,
              connectionTypeText: o
          });
}
function C(e) {
    let t = (0, i.e7)([u.Z], () => u.Z.hasVideo(e.channelId)),
        [n, s] = l.useState(y.tu.RTC_DEBUG_PANEL),
        c = (0, a.Dt)(),
        p = l.useMemo(() => {
            switch (n) {
                case y.tu.RTC_DEBUG_PANEL:
                    return (0, r.jsx)(E, b({}, e));
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
    let f = (0, h.r)();
    return (
        l.useEffect(() => {
            f && s(y.tu.RTC_DEBUG_PANEL);
        }, [f]),
        (0, r.jsxs)('div', {
            className: N.container,
            children: [
                (0, r.jsx)(o.X6q, {
                    className: N.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? O.NW.string(O.t.IlHdW1) : O.NW.string(O.t.WsOisr)
                }),
                (0, r.jsxs)(o.njP, {
                    className: N.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, r.jsx)(o.njP.Item, {
                            id: y.tu.RTC_DEBUG_PANEL,
                            className: N.tabBarItem,
                            children: O.NW.string(O.t.MBY1Pj)
                        }),
                        f
                            ? null
                            : (0, r.jsx)(o.njP.Item, {
                                  id: y.tu.RTC_SECURE_FRAMES,
                                  className: N.tabBarItem,
                                  children: O.NW.string(O.t.zC6o3t)
                              })
                    ]
                }),
                (0, r.jsx)(o.njP.Panel, {
                    id: n,
                    'aria-labelledby': c,
                    children: p
                })
            ]
        })
    );
}
function I(e) {
    return (0, p.J)({ channelId: e.channelId })
        ? (0, r.jsx)(C, b({}, e))
        : (0, r.jsx)('div', {
              className: N.debugPanelStandalone,
              children: (0, r.jsx)('section', {
                  className: N.debugPanelSection,
                  children: (0, r.jsx)(E, b({}, e))
              })
          });
}
