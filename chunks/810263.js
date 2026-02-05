i.d(t, { A: () => p });
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(397927),
    d = i(50268),
    o = i(253932),
    c = i(260509),
    u = i(486020),
    A = i(957565),
    g = i(486503),
    E = i(652215),
    h = i(985018);
function p(e) {
    let t = o.Q_.useSetting(),
        { tidaWebformEnabled: i } = g.A.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        s = (0, d.A)({ id: e.id, label: h.intl.string(h.t["94lLD7"]) }),
        p = l.useCallback(() => {
            let t = (0, c.Iv)(e, E.XAf, !0);
            r()(null != t, "cannot copy null icon URL"), (0, A.C)(t);
        }, [e]),
        _ = l.useCallback(() => {
            let t = u.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
            r()(null != t, "cannot copy null banner URL"), (0, A.C)(t);
        }, [e]),
        S = l.useCallback(() => {
            (0, A.C)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && t && A.p5 && null != e.id
        ? i
            ? (0, n.jsxs)(a.Drp, {
                  id: "copy-server-info",
                  label: h.intl.string(h.t["rka/KS"]),
                  children: [
                      (0, n.jsx)(a.Drp, {
                          id: "copy-server-id",
                          label: h.intl.string(h.t["94lLD7"]),
                          action: S,
                          icon: a.L9S,
                      }),
                      null != e.icon &&
                          (0, n.jsx)(a.Drp, {
                              id: "copy-server-icon-link",
                              label: h.intl.string(h.t["7H30wR"]),
                              action: p,
                          }),
                      null != e.banner &&
                          (0, n.jsx)(a.Drp, {
                              id: "copy-server-banner-link",
                              label: h.intl.string(h.t["2FoUnk"]),
                              action: _,
                          }),
                  ],
              })
            : s
        : null;
}
