n.d(t, { Z: () => j }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    a = n(313201),
    s = n(19780),
    u = n(979651),
    c = n(362446),
    d = n(571826),
    h = n(277642),
    f = n(441894),
    p = n(160038),
    g = n(586646),
    y = n(760373),
    O = n(388032),
    b = n(935179);
function v(e) {
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
function m(e, t) {
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
function x(e) {
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
        p.Z,
        m(v({}, o), {
            closePopout: l,
            connectionTypeText: n
        })
    );
}
function N(e) {
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
        p.Z,
        m(v({}, l), {
            closePopout: t,
            connectionTypeText: n
        })
    );
}
function C(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: i } = e,
        o = (0, f.J)({ channelId: t }) ? O.intl.string(O.t['3BogKS']) : O.intl.string(O.t.ETIVvr);
    return n
        ? (0, r.jsx)(x, {
              lobbyId: l,
              closePopout: i,
              connectionTypeText: o
          })
        : (0, r.jsx)(N, {
              closePopout: i,
              connectionTypeText: o
          });
}
function E(e) {
    let t = (0, i.e7)([u.Z], () => u.Z.hasVideo(e.channelId)),
        [n, s] = l.useState(y.tu.RTC_DEBUG_PANEL),
        c = (0, a.Dt)(),
        f = l.useMemo(() => {
            switch (n) {
                case y.tu.RTC_DEBUG_PANEL:
                    return (0, r.jsx)(C, v({}, e));
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
            className: b.container,
            children: [
                (0, r.jsx)(o.X6q, {
                    className: b.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? O.intl.string(O.t.IlHdW1) : O.intl.string(O.t.WsOisr)
                }),
                (0, r.jsxs)(o.njP, {
                    className: b.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, r.jsx)(o.njP.Item, {
                            id: y.tu.RTC_DEBUG_PANEL,
                            className: b.tabBarItem,
                            children: O.intl.string(O.t.MBY1Pj)
                        }),
                        p
                            ? null
                            : (0, r.jsx)(o.njP.Item, {
                                  id: y.tu.RTC_SECURE_FRAMES,
                                  className: b.tabBarItem,
                                  children: O.intl.string(O.t.zC6o3t)
                              })
                    ]
                }),
                (0, r.jsx)(o.njP.Panel, {
                    id: n,
                    'aria-labelledby': c,
                    children: f
                })
            ]
        })
    );
}
function j(e) {
    return (0, f.J)({ channelId: e.channelId })
        ? (0, r.jsx)(E, v({}, e))
        : (0, r.jsx)('div', {
              className: b.debugPanelStandalone,
              children: (0, r.jsx)('section', {
                  className: b.debugPanelSection,
                  children: (0, r.jsx)(C, v({}, e))
              })
          });
}
