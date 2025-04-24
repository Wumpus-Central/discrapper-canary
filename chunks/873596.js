n.d(t, { Z: () => I }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(313201),
    s = n(19780),
    u = n(979651),
    c = n(362446),
    d = n(571826),
    f = n(277642),
    h = n(441894),
    g = n(160038),
    p = n(586646),
    y = n(760373),
    O = n(388032),
    m = n(935179);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        a = (0, i.cj)([c.Z], () => ({
            connectionState: c.Z.getConnectionState(t),
            hostname: c.Z.getHostname(t),
            averagePing: c.Z.getAveragePing(t),
            lastPing: c.Z.getLastPing(t),
            pings: c.Z.getPings(),
            outboundLossRate: c.Z.getOutboundLossRate(t)
        }));
    return (0, l.jsx)(
        g.Z,
        E(v({}, a), {
            closePopout: r,
            connectionTypeText: n
        })
    );
}
function N(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, i.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings()
        }));
    return (0, l.jsx)(
        g.Z,
        E(v({}, r), {
            closePopout: t,
            connectionTypeText: n
        })
    );
}
function C(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: i } = e,
        a = (0, h.J)({ channelId: t }) ? O.intl.string(O.t['3BogKS']) : O.intl.string(O.t.ETIVvr);
    return n
        ? (0, l.jsx)(b, {
              lobbyId: r,
              closePopout: i,
              connectionTypeText: a
          })
        : (0, l.jsx)(N, {
              closePopout: i,
              connectionTypeText: a
          });
}
function x(e) {
    let t = (0, i.e7)([u.Z], () => u.Z.hasVideo(e.channelId)),
        [n, s] = r.useState(y.tu.RTC_DEBUG_PANEL),
        c = (0, o.Dt)(),
        h = r.useMemo(() => {
            switch (n) {
                case y.tu.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(C, v({}, e));
                case y.tu.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(p.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    r.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let g = (0, f.r)();
    return (
        r.useEffect(() => {
            g && s(y.tu.RTC_DEBUG_PANEL);
        }, [g]),
        (0, l.jsxs)('div', {
            className: m.container,
            children: [
                (0, l.jsx)(a.X6q, {
                    className: m.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? O.intl.string(O.t.IlHdW1) : O.intl.string(O.t.WsOisr)
                }),
                (0, l.jsxs)(a.njP, {
                    className: m.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, l.jsx)(a.njP.Item, {
                            id: y.tu.RTC_DEBUG_PANEL,
                            className: m.tabBarItem,
                            children: O.intl.string(O.t.MBY1Pj)
                        }),
                        g
                            ? null
                            : (0, l.jsx)(a.njP.Item, {
                                  id: y.tu.RTC_SECURE_FRAMES,
                                  className: m.tabBarItem,
                                  children: O.intl.string(O.t.zC6o3t)
                              })
                    ]
                }),
                (0, l.jsx)(a.njP.Panel, {
                    id: n,
                    'aria-labelledby': c,
                    children: h
                })
            ]
        })
    );
}
function I(e) {
    return (0, h.J)({ channelId: e.channelId })
        ? (0, l.jsx)(x, v({}, e))
        : (0, l.jsx)('div', {
              className: m.debugPanelStandalone,
              children: (0, l.jsx)('section', {
                  className: m.debugPanelSection,
                  children: (0, l.jsx)(C, v({}, e))
              })
          });
}
