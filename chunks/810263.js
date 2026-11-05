var l = i(477900),
    o = i(582128),
    c = i(284009),
    t = i.n(c),
    a = i(477782),
    r = i(885574),
    d = i(473935),
    s = i(173936),
    u = i(50268),
    v = i(207560),
    y = i(253932),
    g = i(260509),
    k = i(486020),
    p = i(957565);
i(652215);
var b = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = y.Q_.useSetting(),
                c = (0, v.lF)(),
                I = (0, u.A)({ id: e.id, label: b.intl.string(b.t["94lLD7"]) }),
                C = o.useCallback(() => {
                    let n = (0, g.Iv)(e, 1024, !0);
                    (t()(null != n, "cannot copy null icon URL"), (0, p.C)(n));
                }, [e]),
                A = o.useCallback(() => {
                    let n = k.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
                    (t()(null != n, "cannot copy null banner URL"), (0, p.C)(n));
                }, [e]),
                L = o.useCallback(() => {
                    (0, p.C)(e.id);
                }, [e.id]);
            return !__OVERLAY__ && i && p.p5 && null != e.id
                ? c
                    ? (0, l.jsxs)(a.Dr, {
                          id: "copy-server-info",
                          label: b.intl.string(b.t["rka/KS"]),
                          leadingAccessory: n ? { type: "icon", icon: r.CircleInformationIcon } : void 0,
                          children: [
                              (0, l.jsx)(a.Dr, {
                                  id: "copy-server-id",
                                  label: b.intl.string(b.t["94lLD7"]),
                                  action: L,
                                  leadingAccessory: n ? { type: "icon", icon: d.IdIcon } : void 0,
                              }),
                              null != e.icon &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-server-icon-link",
                                      label: b.intl.string(b.t["7H30wR"]),
                                      action: C,
                                      leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                                  }),
                              null != e.banner &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-server-banner-link",
                                      label: b.intl.string(b.t["2FoUnk"]),
                                      action: A,
                                      leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                                  }),
                          ],
                      })
                    : I
                : null;
        },
    },
);
