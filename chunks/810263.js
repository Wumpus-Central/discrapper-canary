n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    l = n.n(s),
    a = n(397927),
    o = n(50268),
    c = n(253932),
    u = n(260509),
    d = n(486020),
    g = n(957565),
    p = n(486503),
    b = n(652215),
    A = n(985018);
function h(e) {
    let t = c.Q_.useSetting(),
        { tidaWebformEnabled: n } = p.A.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        s = (0, o.A)({
            id: e.id,
            label: A.intl.string(A.t["94lLD7"]),
        }),
        h = r.useCallback(() => {
            let t = (0, u.Iv)(e, b.XAf, !0);
            l()(null != t, "cannot copy null icon URL"), (0, g.C)(t);
        }, [e]),
        O = r.useCallback(() => {
            let t = d.Ay.getGuildBannerURL(
                {
                    id: e.id,
                    banner: e.banner,
                },
                !0,
            );
            l()(null != t, "cannot copy null banner URL"), (0, g.C)(t);
        }, [e]),
        y = r.useCallback(() => {
            (0, g.C)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && t && g.p5 && null != e.id
        ? n
            ? (0, i.jsxs)(a.Drp, {
                  id: "copy-server-info",
                  label: A.intl.string(A.t["rka/KS"]),
                  children: [
                      (0, i.jsx)(a.Drp, {
                          id: "copy-server-id",
                          label: A.intl.string(A.t["94lLD7"]),
                          action: y,
                          icon: a.L9S,
                      }),
                      null != e.icon &&
                          (0, i.jsx)(a.Drp, {
                              id: "copy-server-icon-link",
                              label: A.intl.string(A.t["7H30wR"]),
                              action: h,
                          }),
                      null != e.banner &&
                          (0, i.jsx)(a.Drp, {
                              id: "copy-server-banner-link",
                              label: A.intl.string(A.t["2FoUnk"]),
                              action: O,
                          }),
                  ],
              })
            : s
        : null;
}
