t.d(n, { A: () => f });
var l = t(627968),
    i = t(64700),
    a = t(284009),
    r = t.n(a),
    s = t(477782),
    o = t(885574),
    d = t(473935),
    c = t(173936),
    u = t(50268),
    v = t(253932),
    A = t(260509),
    g = t(486020),
    h = t(957565),
    p = t(486503),
    y = t(652215),
    E = t(985018);
function f(e) {
    let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = v.Q_.useSetting(),
        { tidaWebformEnabled: a } = p.A.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        f = (0, u.A)({ id: e.id, label: E.intl.string(E.t["94lLD7"]) }),
        b = i.useCallback(() => {
            let n = (0, A.Iv)(e, y.XAf, !0);
            r()(null != n, "cannot copy null icon URL"), (0, h.C)(n);
        }, [e]),
        C = i.useCallback(() => {
            let n = g.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
            r()(null != n, "cannot copy null banner URL"), (0, h.C)(n);
        }, [e]),
        L = i.useCallback(() => {
            (0, h.C)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && t && h.p5 && null != e.id
        ? a
            ? (0, l.jsxs)(s.Dr, {
                  id: "copy-server-info",
                  label: E.intl.string(E.t["rka/KS"]),
                  leadingAccessory: n ? { type: "icon", icon: o.m } : void 0,
                  children: [
                      (0, l.jsx)(s.Dr, {
                          id: "copy-server-id",
                          label: E.intl.string(E.t["94lLD7"]),
                          action: L,
                          leadingAccessory: n ? { type: "icon", icon: d.L } : void 0,
                      }),
                      null != e.icon &&
                          (0, l.jsx)(s.Dr, {
                              id: "copy-server-icon-link",
                              label: E.intl.string(E.t["7H30wR"]),
                              action: b,
                              leadingAccessory: n ? { type: "icon", icon: c.q } : void 0,
                          }),
                      null != e.banner &&
                          (0, l.jsx)(s.Dr, {
                              id: "copy-server-banner-link",
                              label: E.intl.string(E.t["2FoUnk"]),
                              action: C,
                              leadingAccessory: n ? { type: "icon", icon: c.q } : void 0,
                          }),
                  ],
              })
            : f
        : null;
}
