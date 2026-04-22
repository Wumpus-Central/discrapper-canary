n.d(e, { A: () => E });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(477782),
    d = n(173936),
    s = n(486503),
    u = n(253932),
    o = n(957565),
    c = n(698441),
    g = n(691012),
    A = n(985018);
function E(t, e) {
    let n = u.Q_.useSetting(),
        { tidaWebformEnabled: E } = s.A.useExperiment(
            { location: "useCopyEventImageLinkItem" },
            { autoTrackExposure: !1 },
        ),
        m = (0, r.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(t)),
        f = null != m ? (0, g.A)(m) : null,
        v = "event-image" === e.getAttribute("data-type"),
        y = i.useCallback(() => {
            null != f && (0, o.C)(f);
        }, [f]);
    return o.p5 && n && E && null != f && v
        ? (0, l.jsx)(a.Dr, { id: "copy-event-image-link", label: A.intl.string(A.t["8xHmxo"]), action: y, icon: d.q })
        : null;
}
