var l = i(477900),
    t = i(582128),
    o = i(284009),
    r = i.n(o),
    c = i(477782),
    a = i(885574),
    d = i(473935),
    s = i(173936),
    u = i(253932),
    g = i(260509),
    v = i(486020),
    b = i(957565);
i(652215);
var p = i(792996);
i.d(
    n,
    {},
    {
        A: function (e) {
            let { showIcons: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = u.Q_.useSetting(),
                o = t.useCallback(() => {
                    let n = (0, g.Iv)(e, 1024, !0);
                    (r()(null != n, "cannot copy null icon URL"), (0, b.C)(n));
                }, [e]),
                y = t.useCallback(() => {
                    let n = v.Ay.getGuildBannerURL({ id: e.id, banner: e.banner }, !0);
                    (r()(null != n, "cannot copy null banner URL"), (0, b.C)(n));
                }, [e]),
                k = t.useCallback(() => {
                    (0, b.C)(e.id);
                }, [e.id]);
            return !__OVERLAY__ && i && b.p5 && null != e.id
                ? (0, l.jsxs)(c.Dr, {
                      id: "copy-server-info",
                      label: p.intl.string(p.t["rka/KS"]),
                      leadingAccessory: n ? { type: "icon", icon: a.CircleInformationIcon } : void 0,
                      children: [
                          (0, l.jsx)(c.Dr, {
                              id: "copy-server-id",
                              label: p.intl.string(p.t["94lLD7"]),
                              action: k,
                              leadingAccessory: n ? { type: "icon", icon: d.IdIcon } : void 0,
                          }),
                          null != e.icon &&
                              (0, l.jsx)(c.Dr, {
                                  id: "copy-server-icon-link",
                                  label: p.intl.string(p.t["7H30wR"]),
                                  action: o,
                                  leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                              }),
                          null != e.banner &&
                              (0, l.jsx)(c.Dr, {
                                  id: "copy-server-banner-link",
                                  label: p.intl.string(p.t["2FoUnk"]),
                                  action: y,
                                  leadingAccessory: n ? { type: "icon", icon: s.LinkIcon } : void 0,
                              }),
                      ],
                  })
                : null;
        },
    },
);
