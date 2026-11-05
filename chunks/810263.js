var l = i(477900),
    t = i(582128),
    o = i(284009),
    c = i.n(o),
    r = i(477782),
    a = i(885574),
    d = i(473935),
    s = i(173936),
    u = i(50268),
    v = i(207560),
    y = i(253932),
    g = i(260509),
    p = i(486020),
    b = i(957565);
i(652215);
var k = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = y.Q_.useSetting(),
                o = (0, v.lF)(),
                A = (0, u.A)({ id: e.id, label: k.intl.string(k.t["94lLD7"]) }),
                C = t.useCallback(() => {
                    let n = (0, g.Iv)(e, 1024, !0);
                    (c()(null != n, "cannot copy null icon URL"), (0, b.C)(n));
                }, [e]),
                h = t.useCallback(() => {
                    let n = p.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
                    (c()(null != n, "cannot copy null banner URL"), (0, b.C)(n));
                }, [e]),
                L = t.useCallback(() => {
                    (0, b.C)(e.id);
                }, [e.id]);
            return !__OVERLAY__ && i && b.p5 && null != e.id
                ? o
                    ? (0, l.jsxs)(r.Dr, {
                          id: "copy-server-info",
                          label: k.intl.string(k.t["rka/KS"]),
                          leadingAccessory: n ? { type: "icon", icon: a.CircleInformationIcon } : void 0,
                          children: [
                              (0, l.jsx)(r.Dr, {
                                  id: "copy-server-id",
                                  label: k.intl.string(k.t["94lLD7"]),
                                  action: L,
                                  leadingAccessory: n ? { type: "icon", icon: d.L } : void 0,
                              }),
                              null != e.icon &&
                                  (0, l.jsx)(r.Dr, {
                                      id: "copy-server-icon-link",
                                      label: k.intl.string(k.t["7H30wR"]),
                                      action: C,
                                      leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                                  }),
                              null != e.banner &&
                                  (0, l.jsx)(r.Dr, {
                                      id: "copy-server-banner-link",
                                      label: k.intl.string(k.t["2FoUnk"]),
                                      action: h,
                                      leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                                  }),
                          ],
                      })
                    : A
                : null;
        },
    },
);
