i.d(n, { A: () => C });
var l = i(627968),
    t = i(64700),
    o = i(284009),
    a = i.n(o),
    r = i(477782),
    c = i(885574),
    s = i(473935),
    d = i(173936),
    u = i(50268),
    p = i(885386),
    y = i(260509),
    v = i(486020),
    g = i(957565),
    b = i(486503),
    A = i(652215),
    k = i(375708);
function C(e) {
    let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = p.Q_.useSetting(),
        { tidaWebformEnabled: o } = b.A.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        C = (0, u.A)({ id: e.id, label: k.intl.string(k.t["94lLD7"]) }),
        h = t.useCallback(() => {
            let n = (0, y.Iv)(e, A.XAf, !0);
            a()(null != n, "cannot copy null icon URL"), (0, g.C)(n);
        }, [e]),
        x = t.useCallback(() => {
            let n = v.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
            a()(null != n, "cannot copy null banner URL"), (0, g.C)(n);
        }, [e]),
        L = t.useCallback(() => {
            (0, g.C)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && i && g.p5 && null != e.id
        ? o
            ? (0, l.jsxs)(r.Dr, {
                  id: "copy-server-info",
                  label: k.intl.string(k.t["rka/KS"]),
                  leadingAccessory: n ? { type: "icon", icon: c.m } : void 0,
                  children: [
                      (0, l.jsx)(r.Dr, {
                          id: "copy-server-id",
                          label: k.intl.string(k.t["94lLD7"]),
                          action: L,
                          leadingAccessory: n ? { type: "icon", icon: s.L } : void 0,
                      }),
                      null != e.icon &&
                          (0, l.jsx)(r.Dr, {
                              id: "copy-server-icon-link",
                              label: k.intl.string(k.t["7H30wR"]),
                              action: h,
                              leadingAccessory: n ? { type: "icon", icon: d.q } : void 0,
                          }),
                      null != e.banner &&
                          (0, l.jsx)(r.Dr, {
                              id: "copy-server-banner-link",
                              label: k.intl.string(k.t["2FoUnk"]),
                              action: x,
                              leadingAccessory: n ? { type: "icon", icon: d.q } : void 0,
                          }),
                  ],
              })
            : C
        : null;
}
