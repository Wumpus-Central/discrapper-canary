i.d(t, { A: () => p });
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(397927),
    d = i(50268),
    c = i(253932),
    o = i(260509),
    u = i(486020),
    g = i(957565),
    A = i(486503),
    E = i(652215),
    h = i(985018);
function p(e) {
    let { showIcons: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = c.Q_.useSetting(),
        { tidaWebformEnabled: s } = A.A.useExperiment({ location: "useCopyServerInfoItem" }, { autoTrackExposure: !1 }),
        p = (0, d.A)({ id: e.id, label: h.intl.string(h.t["94lLD7"]) }),
        _ = l.useCallback(() => {
            let t = (0, o.Iv)(e, E.XAf, !0);
            r()(null != t, "cannot copy null icon URL"), (0, g.C)(t);
        }, [e]),
        S = l.useCallback(() => {
            let t = u.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
            r()(null != t, "cannot copy null banner URL"), (0, g.C)(t);
        }, [e]),
        b = l.useCallback(() => {
            (0, g.C)(e.id);
        }, [e.id]);
    return !__OVERLAY__ && i && g.p5 && null != e.id
        ? s
            ? (0, n.jsxs)(a.Drp, {
                  id: "copy-server-info",
                  label: h.intl.string(h.t["rka/KS"]),
                  leadingAccessory: t ? { type: "icon", icon: a.mir } : void 0,
                  children: [
                      (0, n.jsx)(a.Drp, {
                          id: "copy-server-id",
                          label: h.intl.string(h.t["94lLD7"]),
                          action: b,
                          leadingAccessory: t ? { type: "icon", icon: a.L9S } : void 0,
                      }),
                      null != e.icon &&
                          (0, n.jsx)(a.Drp, {
                              id: "copy-server-icon-link",
                              label: h.intl.string(h.t["7H30wR"]),
                              action: _,
                              leadingAccessory: t ? { type: "icon", icon: a.qYV } : void 0,
                          }),
                      null != e.banner &&
                          (0, n.jsx)(a.Drp, {
                              id: "copy-server-banner-link",
                              label: h.intl.string(h.t["2FoUnk"]),
                              action: S,
                              leadingAccessory: t ? { type: "icon", icon: a.qYV } : void 0,
                          }),
                  ],
              })
            : p
        : null;
}
