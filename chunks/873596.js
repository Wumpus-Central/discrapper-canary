n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(442837),
    o = n(481060),
    a = n(313201),
    s = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    f = n(277642),
    h = n(441894),
    p = n(160038),
    g = n(586646),
    O = n(760373),
    y = n(388032),
    b = n(935179);
function N(e) {
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
function v(e) {
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
        m(N({}, o), {
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
        p.Z,
        m(N({}, l), {
            closePopout: t,
            connectionTypeText: n
        })
    );
}
function E(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: i } = e,
        o = (0, h.J)({ channelId: t }) ? y.intl.string(y.t['3BogKS']) : y.intl.string(y.t.ETIVvr);
    return n
        ? (0, r.jsx)(v, {
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
    let t = (0, i.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, s] = l.useState(O.tu.RTC_DEBUG_PANEL),
        u = (0, a.Dt)(),
        h = l.useMemo(() => {
            switch (n) {
                case O.tu.RTC_DEBUG_PANEL:
                    return (0, r.jsx)(E, N({}, e));
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
    let p = (0, f.r)();
    return (
        l.useEffect(() => {
            p && s(O.tu.RTC_DEBUG_PANEL);
        }, [p]),
        (0, r.jsxs)('div', {
            className: b.container,
            children: [
                (0, r.jsx)(o.X6q, {
                    className: b.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? y.intl.string(y.t.IlHdW1) : y.intl.string(y.t.WsOisr)
                }),
                (0, r.jsxs)(o.njP, {
                    className: b.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, r.jsx)(o.njP.Item, {
                            id: O.tu.RTC_DEBUG_PANEL,
                            className: b.tabBarItem,
                            children: y.intl.string(y.t.MBY1Pj)
                        }),
                        p
                            ? null
                            : (0, r.jsx)(o.njP.Item, {
                                  id: O.tu.RTC_SECURE_FRAMES,
                                  className: b.tabBarItem,
                                  children: y.intl.string(y.t.zC6o3t)
                              })
                    ]
                }),
                (0, r.jsx)(o.njP.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: h
                })
            ]
        })
    );
}
function I(e) {
    return (0, h.J)({ channelId: e.channelId })
        ? (0, r.jsx)(C, N({}, e))
        : (0, r.jsx)('div', {
              className: b.debugPanelStandalone,
              children: (0, r.jsx)('section', {
                  className: b.debugPanelSection,
                  children: (0, r.jsx)(E, N({}, e))
              })
          });
}
