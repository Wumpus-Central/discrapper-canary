n.d(t, { Z: () => T }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(313201),
    s = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    f = n(441894),
    g = n(160038),
    p = n(586646),
    N = n(760373),
    v = n(388032),
    x = n(983038);
function m(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: i } = e,
        r = (0, a.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, l.jsx)(g.Z, {
        ...r,
        closePopout: i,
        connectionTypeText: n
    });
}
function C(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        i = (0, a.cj)([s.Z], () => ({
            connectionState: s.Z.getState(),
            hostname: s.Z.getHostname(),
            averagePing: s.Z.getAveragePing(),
            lastPing: s.Z.getLastPing(),
            outboundLossRate: s.Z.getOutboundLossRate(),
            pings: s.Z.getPings()
        }));
    return (0, l.jsx)(g.Z, {
        ...i,
        closePopout: t,
        connectionTypeText: n
    });
}
function I(e) {
    let { channelId: t, isOverlay: n, lobbyId: i, closePopout: a } = e,
        r = (0, f.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? v.intl.string(v.t['3BogKS'])
            : v.intl.string(v.t.ETIVvr);
    return n
        ? (0, l.jsx)(m, {
              lobbyId: i,
              closePopout: a,
              connectionTypeText: r
          })
        : (0, l.jsx)(C, {
              closePopout: a,
              connectionTypeText: r
          });
}
function E(e) {
    let t = (0, a.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, s] = i.useState(N.tu.RTC_DEBUG_PANEL),
        u = (0, o.Dt)(),
        f = i.useMemo(() => {
            switch (n) {
                case N.tu.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(I, { ...e });
                case N.tu.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(p.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    i.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let g = (0, h.r)();
    return (
        i.useEffect(() => {
            g && s(N.tu.RTC_DEBUG_PANEL);
        }, [g]),
        (0, l.jsxs)('div', {
            className: x.container,
            children: [
                (0, l.jsx)(r.X6q, {
                    className: x.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? v.intl.string(v.t.IlHdW1) : v.intl.string(v.t.WsOisr)
                }),
                (0, l.jsxs)(r.njP, {
                    className: x.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: s,
                    children: [
                        (0, l.jsx)(r.njP.Item, {
                            id: N.tu.RTC_DEBUG_PANEL,
                            className: x.tabBarItem,
                            children: v.intl.string(v.t.MBY1Pj)
                        }),
                        g
                            ? null
                            : (0, l.jsx)(r.njP.Item, {
                                  id: N.tu.RTC_SECURE_FRAMES,
                                  className: x.tabBarItem,
                                  children: v.intl.string(v.t.zC6o3t)
                              })
                    ]
                }),
                (0, l.jsx)(r.njP.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: f
                })
            ]
        })
    );
}
function T(e) {
    return (0, f.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, l.jsx)(E, { ...e })
        : (0, l.jsx)('div', {
              className: x.debugPanelStandalone,
              children: (0, l.jsx)('section', {
                  className: x.debugPanelSection,
                  children: (0, l.jsx)(I, { ...e })
              })
          });
}
