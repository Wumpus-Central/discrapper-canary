r.d(t, { Z: () => j });
var n = r(255367);
r(73800);
var i = r(780384),
    a = r(481060),
    l = r(239091),
    s = r(44315),
    o = r(111028),
    c = r(565138),
    u = r(5192),
    d = r(652853),
    p = r(228168),
    f = r(981631),
    b = r(69647);
let m = (0, a.pxk)(a.EFr.SIZE_16);
function j(e) {
    let { user: t, guild: j, nick: v, onSelect: O } = e,
        { theme: y, themeType: g } = (0, d.z)(),
        x = t.hasAvatarForGuild(j.id);
    return (0, n.jsxs)(a.P3F, {
        focusProps:
            g === p.lY.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: b.row,
        onClick: O,
        onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    r.e("66549"),
                    r.e("1806"),
                    r.e("92078"),
                    r.e("7654"),
                    r.e("94136"),
                    r.e("70205"),
                    r.e("2686"),
                    r.e("4192"),
                    r.e("58175"),
                    r.e("72762"),
                    r.e("49049"),
                    r.e("44156"),
                    r.e("62117"),
                    r.e("13616"),
                    r.e("6850"),
                    r.e("58227"),
                    r.e("62856"),
                    r.e("54408"),
                    r.e("20087"),
                    r.e("22988"),
                    r.e("12097"),
                    r.e("16745"),
                    r.e("56534"),
                    r.e("87154"),
                    r.e("33213"),
                    r.e("39991"),
                ]).then(r.bind(r, 545135));
                return (t) => {
                    var r, i;
                    return (0, n.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (i = i = { guild: j }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        r),
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(c.Z, {
                tabIndex: -1,
                guild: j,
                showBadge: !0,
                className: null != j.icon ? b.icon : b.noIcon,
                badgeStrokeColor: (0, s.Lq)((0, i.wj)(y) ? f.Ilk.PRIMARY_600 : f.Ilk.WHITE_500),
                badgeTooltipColor: a.FGA.PRIMARY,
                badgeTooltipDelay: p.vB,
                size: c.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, n.jsxs)("div", {
                className: b.details,
                children: [
                    (0, n.jsx)("div", {
                        className: b.name,
                        children: j.name,
                    }),
                    x &&
                        (0, n.jsxs)("div", {
                            className: b.nick,
                            children: [
                                (0, n.jsx)(a.qEK, {
                                    src: t.getAvatarURL(j.id, m),
                                    size: a.EFr.SIZE_16,
                                    className: b.avatar,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, n.jsx)(o.Z, {
                                        delay: p.vB,
                                        children: null != v ? v : u.ZP.getName(j.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !x &&
                        null != v &&
                        (0, n.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            children: (0, n.jsx)(o.Z, {
                                delay: p.vB,
                                children: v,
                            }),
                        }),
                ],
            }),
        ],
    });
}
