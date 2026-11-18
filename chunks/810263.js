var l = i(477900),
    t = i(582128),
    o = i(284009),
    r = i.n(o),
    a = i(477782),
    c = i(885574),
    d = i(473935),
    s = i(173936),
    u = i(50268),
    g = i(207560),
    b = i(253932),
    v = i(260509),
    p = i(486020),
    y = i(957565);
i(652215);
var k = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = b.Q_.useSetting(),
                o = (0, g.lF)(),
                f = (0, u.A)({ id: e.id, label: k.intl.string(k.t["94lLD7"]) }),
                A = t.useCallback(() => {
                    let n = (0, v.Iv)(e, 1024, !0);
                    (r()(null != n, "cannot copy null icon URL"), (0, y.C)(n));
                }, [e]),
                C = t.useCallback(() => {
                    let n = p.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
                    (r()(null != n, "cannot copy null banner URL"), (0, y.C)(n));
                }, [e]),
                I = t.useCallback(() => {
                    (0, y.C)(e.id);
                }, [e.id]);
            return !__OVERLAY__ && i && y.p5 && null != e.id
                ? o
                    ? (0, l.jsxs)(a.Dr, {
                          id: "copy-server-info",
                          label: k.intl.string(k.t["rka/KS"]),
                          leadingAccessory: n ? { type: "icon", icon: c.CircleInformationIcon } : void 0,
                          children: [
                              (0, l.jsx)(a.Dr, {
                                  id: "copy-server-id",
                                  label: k.intl.string(k.t["94lLD7"]),
                                  action: I,
                                  leadingAccessory: n ? { type: "icon", icon: d.IdIcon } : void 0,
                              }),
                              null != e.icon &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-server-icon-link",
                                      label: k.intl.string(k.t["7H30wR"]),
                                      action: A,
                                      leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                                  }),
                              null != e.banner &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "copy-server-banner-link",
                                      label: k.intl.string(k.t["2FoUnk"]),
                                      action: C,
                                      leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                                  }),
                          ],
                      })
                    : f
                : null;
        },
    },
);
