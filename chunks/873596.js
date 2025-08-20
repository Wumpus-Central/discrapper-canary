n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    l = n(647438),
    s = n(442837),
    i = n(481060),
    a = n(313201),
    o = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    f = n(441894),
    g = n(160038),
    p = n(586646),
    O = n(760373),
    y = n(388032),
    x = n(756105);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        i = (0, s.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t),
        }));
    return (0, r.jsx)(
        g.Z,
        N(b({}, i), {
            closePopout: l,
            connectionTypeText: n,
        }),
    );
}
function E(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, s.cj)([o.Z], () => ({
            connectionState: o.Z.getState(),
            hostname: o.Z.getHostname(),
            averagePing: o.Z.getAveragePing(),
            lastPing: o.Z.getLastPing(),
            outboundLossRate: o.Z.getOutboundLossRate(),
            pings: o.Z.getPings(),
        }));
    return (0, r.jsx)(
        g.Z,
        N(b({}, l), {
            closePopout: t,
            connectionTypeText: n,
        }),
    );
}
function C(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: s } = e,
        i = (0, f.J)({ channelId: t }) ? y.intl.string(y.t["3BogKS"]) : y.intl.string(y.t.ETIVvr);
    return n
        ? (0, r.jsx)(m, {
              lobbyId: l,
              closePopout: s,
              connectionTypeText: i,
          })
        : (0, r.jsx)(E, {
              closePopout: s,
              connectionTypeText: i,
          });
}
function j(e) {
    let t = (0, s.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, o] = l.useState(O.tu.RTC_DEBUG_PANEL),
        u = (0, a.Dt)(),
        f = l.useMemo(() => {
            switch (n) {
                case O.tu.RTC_DEBUG_PANEL:
                    return (0, r.jsx)(C, b({}, e));
                case O.tu.RTC_SECURE_FRAMES:
                    return (0, r.jsx)(p.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n,
        });
    }, [e.channelId, n]);
    let g = (0, h.r)();
    return (
        l.useEffect(() => {
            g && o(O.tu.RTC_DEBUG_PANEL);
        }, [g]),
        (0, r.jsxs)("div", {
            className: x.container,
            children: [
                (0, r.jsx)(i.X6q, {
                    className: x.title,
                    variant: "heading-lg/bold",
                    color: "header-primary",
                    children: t ? y.intl.string(y.t.IlHdW1) : y.intl.string(y.t.WsOisr),
                }),
                (0, r.jsxs)(i.njP, {
                    className: x.tabs,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: o,
                    children: [
                        (0, r.jsx)(i.njP.Item, {
                            id: O.tu.RTC_DEBUG_PANEL,
                            className: x.tabBarItem,
                            children: y.intl.string(y.t.MBY1Pj),
                        }),
                        g
                            ? null
                            : (0, r.jsx)(i.njP.Item, {
                                  id: O.tu.RTC_SECURE_FRAMES,
                                  className: x.tabBarItem,
                                  children: y.intl.string(y.t.zC6o3t),
                              }),
                    ],
                }),
                (0, r.jsx)(i.njP.Panel, {
                    id: n,
                    "aria-labelledby": u,
                    children: f,
                }),
            ],
        })
    );
}
function v(e) {
    return (0, f.J)({ channelId: e.channelId })
        ? (0, r.jsx)(j, b({}, e))
        : (0, r.jsx)("div", {
              className: x.debugPanelStandalone,
              children: (0, r.jsx)("section", {
                  className: x.debugPanelSection,
                  children: (0, r.jsx)(C, b({}, e)),
              }),
          });
}
