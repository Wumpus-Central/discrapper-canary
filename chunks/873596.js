n.d(t, { Z: () => E }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(442837),
    o = n(481060),
    a = n(313201),
    r = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    N = n(441894),
    f = n(160038),
    g = n(586646),
    x = n(760373),
    C = n(388032),
    p = n(983038);
function I(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        o = (0, s.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, l.jsx)(f.Z, {
        ...o,
        closePopout: i,
        connectionTypeText: n
    });
}
function v(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = (0, s.cj)([r.Z], () => ({
            connectionState: r.Z.getState(),
            hostname: r.Z.getHostname(),
            averagePing: r.Z.getAveragePing(),
            lastPing: r.Z.getLastPing(),
            outboundLossRate: r.Z.getOutboundLossRate(),
            pings: r.Z.getPings()
        }));
    return (0, l.jsx)(f.Z, {
        ...i,
        closePopout: t,
        connectionTypeText: n
    });
}
function m(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: s } = e,
        o = (0, N.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? C.intl.string(C.t['3BogKS'])
            : C.intl.string(C.t.ETIVvr);
    return n
        ? (0, l.jsx)(I, {
              lobbyId: i,
              closePopout: s,
              connectionTypeText: o
          })
        : (0, l.jsx)(v, {
              closePopout: s,
              connectionTypeText: o
          });
}
function T(e) {
    let t = (0, s.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, r] = i.useState(x.tu.RTC_DEBUG_PANEL),
        u = (0, a.Dt)(),
        N = i.useMemo(() => {
            switch (n) {
                case x.tu.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(m, { ...e });
                case x.tu.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(g.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    i.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let f = (0, h.r)();
    return (
        i.useEffect(() => {
            f && r(x.tu.RTC_DEBUG_PANEL);
        }, [f]),
        (0, l.jsxs)('div', {
            className: p.container,
            children: [
                (0, l.jsx)(o.X6q, {
                    className: p.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? C.intl.string(C.t.IlHdW1) : C.intl.string(C.t.WsOisr)
                }),
                (0, l.jsxs)(o.njP, {
                    className: p.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: r,
                    children: [
                        (0, l.jsx)(o.njP.Item, {
                            id: x.tu.RTC_DEBUG_PANEL,
                            className: p.tabBarItem,
                            children: C.intl.string(C.t.MBY1Pj)
                        }),
                        f
                            ? null
                            : (0, l.jsx)(o.njP.Item, {
                                  id: x.tu.RTC_SECURE_FRAMES,
                                  className: p.tabBarItem,
                                  children: C.intl.string(C.t.zC6o3t)
                              })
                    ]
                }),
                (0, l.jsx)(o.njP.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: N
                })
            ]
        })
    );
}
function E(e) {
    return (0, N.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, l.jsx)(T, { ...e })
        : (0, l.jsx)('div', {
              className: p.debugPanelStandalone,
              children: (0, l.jsx)('section', {
                  className: p.debugPanelSection,
                  children: (0, l.jsx)(m, { ...e })
              })
          });
}
