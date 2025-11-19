n.d(t, { Z: () => S }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(442837),
    a = n(481060),
    o = n(313201),
    s = n(19780),
    u = n(979651),
    c = n(362446),
    d = n(571826),
    f = n(277642),
    g = n(441894),
    h = n(160038),
    p = n(586646),
    E = n(760373),
    N = n(388032),
    O = n(756105);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function C(e, t) {
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
function _(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        a = (0, r.cj)([c.Z], () => ({
            connectionState: c.Z.getConnectionState(t),
            hostname: c.Z.getHostname(t),
            averagePing: c.Z.getAveragePing(t),
            lastPing: c.Z.getLastPing(t),
            pings: c.Z.getPings(),
            outboundLossRate: c.Z.getOutboundLossRate(t),
        }));
    return (0, l.jsx)(
        h.Z,
        C(y({}, a), {
            closePopout: i,
            connectionTypeText: n,
        }),
    );
}
function T(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = (0, r.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings(),
        }));
    return (0, l.jsx)(
        h.Z,
        C(y({}, i), {
            closePopout: t,
            connectionTypeText: n,
        }),
    );
}
function m(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: r } = e,
        a = (0, g.J)({ channelId: t }) ? N.intl.string(N.t["3BogKe"]) : N.intl.string(N.t.ETIVvg);
    return n
        ? (0, l.jsx)(_, {
              lobbyId: i,
              closePopout: r,
              connectionTypeText: a,
          })
        : (0, l.jsx)(T, {
              closePopout: r,
              connectionTypeText: a,
          });
}
function I(e) {
    let t = (0, r.e7)([u.Z], () => u.Z.hasVideo(e.channelId)),
        [n, s] = i.useState(E.tu.RTC_DEBUG_PANEL),
        c = (0, o.Dt)(),
        g = i.useMemo(() => {
            switch (n) {
                case E.tu.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(m, y({}, e));
                case E.tu.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(p.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    i.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n,
        });
    }, [e.channelId, n]);
    let h = (0, f.r)();
    return (
        i.useEffect(() => {
            h && s(E.tu.RTC_DEBUG_PANEL);
        }, [h]),
        (0, l.jsxs)("div", {
            className: O.container,
            children: [
                (0, l.jsx)(a.Heading, {
                    className: O.title,
                    variant: "heading-lg/bold",
                    color: "header-primary",
                    children: t ? N.intl.string(N.t.IlHdW8) : N.intl.string(N.t.WsOisp),
                }),
                (0, l.jsxs)(a.njP, {
                    className: O.tabs,
                    selectedItem: n,
                    type: "top",
                    look: "brand",
                    onItemSelect: s,
                    children: [
                        (0, l.jsx)(a.njP.Item, {
                            id: E.tu.RTC_DEBUG_PANEL,
                            className: O.tabBarItem,
                            children: N.intl.string(N.t.MBY1Pm),
                        }),
                        h
                            ? null
                            : (0, l.jsx)(a.njP.Item, {
                                  id: E.tu.RTC_SECURE_FRAMES,
                                  className: O.tabBarItem,
                                  children: N.intl.string(N.t.zC6o3s),
                              }),
                    ],
                }),
                (0, l.jsx)(a.njP.Panel, {
                    id: n,
                    "aria-labelledby": c,
                    children: g,
                }),
            ],
        })
    );
}
function S(e) {
    return (0, g.J)({ channelId: e.channelId })
        ? (0, l.jsx)(I, y({}, e))
        : (0, l.jsx)("div", {
              className: O.debugPanelStandalone,
              children: (0, l.jsx)("section", {
                  className: O.debugPanelSection,
                  children: (0, l.jsx)(m, y({}, e)),
              }),
          });
}
