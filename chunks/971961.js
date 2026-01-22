n.d(e, {
    A: () => y,
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    u = n(397927),
    o = n(486503),
    a = n(253932),
    c = n(957565),
    s = n(698441),
    d = n(691012),
    g = n(985018);

function y(t, e) {
    let n = a.Q_.useSetting(),
        { tidaWebformEnabled: y } = o.A.useExperiment(
            {
                location: "useCopyEventImageLinkItem",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        f = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(t)),
        b = null != f ? (0, d.A)(f) : null,
        p = "event-image" === e.getAttribute("data-type"),
        A = r.useCallback(() => {
            null != b && (0, c.C)(b);
        }, [b]);
    return c.p5 && n && y && null != b && p
        ? (0, l.jsx)(u.Drp, {
              id: "copy-event-image-link",
              label: g.intl.string(g.t["8xHmxo"]),
              action: A,
              icon: u.qYV,
          })
        : null;
}
