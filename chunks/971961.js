n.d(e, { A: () => A });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(397927),
    d = n(486503),
    s = n(253932),
    u = n(957565),
    o = n(698441),
    c = n(691012),
    E = n(985018);
function A(t, e) {
    let n = s.Q_.useSetting(),
        { tidaWebformEnabled: A } = d.A.useExperiment(
            { location: "useCopyEventImageLinkItem" },
            { autoTrackExposure: !1 },
        ),
        g = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t)),
        _ = null != g ? (0, c.A)(g) : null,
        h = "event-image" === e.getAttribute("data-type"),
        T = i.useCallback(() => {
            null != _ && (0, u.C)(_);
        }, [_]);
    return u.p5 && n && A && null != _ && h
        ? (0, l.jsx)(a.Drp, {
              id: "copy-event-image-link",
              label: E.intl.string(E.t["8xHmxo"]),
              action: T,
              icon: a.qYV,
          })
        : null;
}
