n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var l = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(481060),
    i = n(313201),
    a = n(19780),
    c = n(979651),
    u = n(362446),
    d = n(571826),
    h = n(277642),
    x = n(441894),
    g = n(160038),
    N = n(586646),
    C = n(760373),
    f = n(388032),
    m = n(628437);
function p(e) {
    let { lobbyId: t, connectionTypeText: n, closePopout: r } = e,
        o = (0, s.cj)([u.Z], () => ({
            connectionState: u.Z.getConnectionState(t),
            hostname: u.Z.getHostname(t),
            averagePing: u.Z.getAveragePing(t),
            lastPing: u.Z.getLastPing(t),
            pings: u.Z.getPings(),
            outboundLossRate: u.Z.getOutboundLossRate(t)
        }));
    return (0, l.jsx)(g.Z, {
        ...o,
        closePopout: r,
        connectionTypeText: n
    });
}
function E(e) {
    let { closePopout: t, connectionTypeText: n } = e,
        r = (0, s.cj)([a.Z], () => ({
            connectionState: a.Z.getState(),
            hostname: a.Z.getHostname(),
            averagePing: a.Z.getAveragePing(),
            lastPing: a.Z.getLastPing(),
            outboundLossRate: a.Z.getOutboundLossRate(),
            pings: a.Z.getPings()
        }));
    return (0, l.jsx)(g.Z, {
        ...r,
        closePopout: t,
        connectionTypeText: n
    });
}
function T(e) {
    let { channelId: t, isOverlay: n, lobbyId: r, closePopout: s } = e,
        o = (0, x.J)({
            channelId: t,
            location: 'RTCConnectionDebugPanelContainer'
        })
            ? f.intl.string(f.t['3BogKS'])
            : f.intl.string(f.t.ETIVvr);
    return n
        ? (0, l.jsx)(p, {
              lobbyId: r,
              closePopout: s,
              connectionTypeText: o
          })
        : (0, l.jsx)(E, {
              closePopout: s,
              connectionTypeText: o
          });
}
function v(e) {
    let t = (0, s.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
        [n, a] = r.useState(C.tu.RTC_DEBUG_PANEL),
        u = (0, i.Dt)(),
        x = r.useMemo(() => {
            switch (n) {
                case C.tu.RTC_DEBUG_PANEL:
                    return (0, l.jsx)(T, { ...e });
                case C.tu.RTC_SECURE_FRAMES:
                    return (0, l.jsx)(N.Z, { channelId: e.channelId });
            }
        }, [e, n]);
    r.useEffect(() => {
        (0, d.sN)({
            channelId: e.channelId,
            selectedTab: n
        });
    }, [e.channelId, n]);
    let g = (0, h.r)();
    return (
        r.useEffect(() => {
            g && a(C.tu.RTC_DEBUG_PANEL);
        }, [g]),
        (0, l.jsxs)('div', {
            className: m.container,
            children: [
                (0, l.jsx)(o.Heading, {
                    className: m.title,
                    variant: 'heading-lg/bold',
                    color: 'header-primary',
                    children: t ? f.intl.string(f.t.IlHdW1) : f.intl.string(f.t.WsOisr)
                }),
                (0, l.jsxs)(o.TabBar, {
                    className: m.tabs,
                    selectedItem: n,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: a,
                    children: [
                        (0, l.jsx)(o.TabBar.Item, {
                            id: C.tu.RTC_DEBUG_PANEL,
                            className: m.tabBarItem,
                            children: f.intl.string(f.t.MBY1Pj)
                        }),
                        g
                            ? null
                            : (0, l.jsx)(o.TabBar.Item, {
                                  id: C.tu.RTC_SECURE_FRAMES,
                                  className: m.tabBarItem,
                                  children: f.intl.string(f.t.zC6o3t)
                              })
                    ]
                }),
                (0, l.jsx)(o.TabBar.Panel, {
                    id: n,
                    'aria-labelledby': u,
                    children: x
                })
            ]
        })
    );
}
function I(e) {
    return (0, x.J)({
        channelId: e.channelId,
        location: 'RTCConnectionPopout'
    })
        ? (0, l.jsx)(v, { ...e })
        : (0, l.jsx)('div', {
              className: m.debugPanelStandalone,
              children: (0, l.jsx)('section', {
                  className: m.debugPanelSection,
                  children: (0, l.jsx)(T, { ...e })
              })
          });
}
