n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    s = n(481060),
    a = n(313201),
    r = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    f = n(441894),
    N = n(160038),
    g = n(586646),
    x = n(760373),
    p = n(388032),
    C = n(983038);
function I(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: l } = e,
        s = (0, o.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, i.jsx)(N.Z, {
        ...s,
        closePopout: l,
        connectionTypeText: n
    });
}
function v(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        l = (0, o.cj)([r.Z], () => ({
            connectionState: r.Z.getState(),
            hostname: r.Z.getHostname(),
            averagePing: r.Z.getAveragePing(),
            lastPing: r.Z.getLastPing(),
            outboundLossRate: r.Z.getOutboundLossRate(),
            pings: r.Z.getPings()
        }));
    return (0, i.jsx)(N.Z, {
        ...l,
        closePopout: t,
        connectionTypeText: n
    });
}
function m(e) {
    let { channelId: t, isOverlay: n, lobbyId: l, closePopout: o } = e,
        s = (0, f.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? p.intl.string(p.t['3BogKS'])
            : p.intl.string(p.t.ETIVvr);
    return n
        ? (0, i.jsx)(I, {
              lobbyId: l,
              closePopout: o,
              connectionTypeText: s
          })
        : (0, i.jsx)(v, {
              closePopout: o,
              connectionTypeText: s
          });
}
function T(e) {
    let t = (0, o.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, r] = l.useState(x.tu.RTC_DEBUG_PANEL),
        u = (0, a.Dt)(),
        f = l.useMemo(() => {
            switch (n) {
                case x.tu.RTC_DEBUG_PANEL:
                    return (0, i.jsx)(m, { ...e });
                case x.tu.RTC_SECURE_FRAMES:
                    return (0, i.jsx)(g.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    l.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let N = (0, h.r)();
    return (
        l.useEffect(() => {
            N && r(x.tu.RTC_DEBUG_PANEL);
        }, [N]),
        (0, i.jsxs)('div', {
            className: C.container,
            children: [
                (0, i.jsx)(s.X6q, {
                    className: C.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? p.intl.string(p.t.IlHdW1) : p.intl.string(p.t.WsOisr)
                }),
                (0, i.jsxs)(s.njP, {
                    className: C.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: r,
                    children: [
                        (0, i.jsx)(s.njP.Item, {
                            id: x.tu.RTC_DEBUG_PANEL,
                            className: C.tabBarItem,
                            children: p.intl.string(p.t.MBY1Pj)
                        }),
                        N
                            ? null
                            : (0, i.jsx)(s.njP.Item, {
                                  id: x.tu.RTC_SECURE_FRAMES,
                                  className: C.tabBarItem,
                                  children: p.intl.string(p.t.zC6o3t)
                              })
                    ]
                }),
                (0, i.jsx)(s.njP.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: f
                })
            ]
        })
    );
}
function E(e) {
    return (0, f.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, i.jsx)(T, { ...e })
        : (0, i.jsx)('div', {
              className: C.debugPanelStandalone,
              children: (0, i.jsx)('section', {
                  className: C.debugPanelSection,
                  children: (0, i.jsx)(m, { ...e })
              })
          });
}
