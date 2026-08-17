i.d(n, { A: () => C });
var l = i(477900),
    t = i(582128),
    o = i(284009),
    c = i.n(o),
    a = i(477782),
    r = i(885574),
    s = i(473935),
    d = i(173936),
    u = i(50268),
    p = i(885386),
    y = i(260509),
    v = i(486020),
    g = i(957565),
    b = i(486503),
    k = i(652215),
    A = i(375708);
function C(e) {
    let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = p.Q_.useSetting(),
        { tidaWebformEnabled: o } = b.A.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        C = (0, u.A)({ id: e.id, label: A.intl.string(A.t["94lLD7"]) }),
        L = t.useCallback(() => {
            let n = (0, y.Iv)(e, k.XAf, !0);
            c()(null != n, "cannot copy null icon URL"), (0, g.C)(n);
        }, [e]),
        h = t.useCallback(() => {
            let n = v.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
            c()(null != n, "cannot copy null banner URL"), (0, g.C)(n);
        }, [e]),
        I = t.useCallback(() => {
            (0, g.C)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && i && g.p5 && null != e.id
        ? o
            ? (0, l.jsxs)(a.Dr, {
                  id: "copy-server-info",
                  label: A.intl.string(A.t["rka/KS"]),
                  leadingAccessory: n ? { type: "icon", icon: r.CircleInformationIcon } : void 0,
                  children: [
                      (0, l.jsx)(a.Dr, {
                          id: "copy-server-id",
                          label: A.intl.string(A.t["94lLD7"]),
                          action: I,
                          leadingAccessory: n ? { type: "icon", icon: s.L } : void 0,
                      }),
                      null != e.icon &&
                          (0, l.jsx)(a.Dr, {
                              id: "copy-server-icon-link",
                              label: A.intl.string(A.t["7H30wR"]),
                              action: L,
                              leadingAccessory: n ? { type: "icon", icon: d.LinkIcon } : void 0,
                          }),
                      null != e.banner &&
                          (0, l.jsx)(a.Dr, {
                              id: "copy-server-banner-link",
                              label: A.intl.string(A.t["2FoUnk"]),
                              action: h,
                              leadingAccessory: n ? { type: "icon", icon: d.LinkIcon } : void 0,
                          }),
                  ],
              })
            : C
        : null;
}
