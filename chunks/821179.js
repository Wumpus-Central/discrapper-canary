n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(194983),
    o = n(780384),
    a = n(481060),
    s = n(239091),
    c = n(565138),
    u = n(5192),
    d = n(652853),
    f = n(228168),
    h = n(671955),
    p = n(323759);
let g = (0, a.pxk)(a.EFr.SIZE_16);
function m(e) {
    let { user: t, guild: m, nick: b, onSelect: _ } = e,
        { theme: y, themeType: O } = (0, d.z)(),
        v = t.hasAvatarForGuild(m.id);
    return (0, r.jsxs)(a.P3F, {
        focusProps:
            O === h.l.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: p.row,
        onClick: _,
        onContextMenu: (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("61924"),
                    n.e("57804"),
                    n.e("49049"),
                    n.e("36599"),
                    n.e("7654"),
                    n.e("76692"),
                    n.e("8271"),
                    n.e("15851"),
                    n.e("51453"),
                    n.e("845"),
                    n.e("38697"),
                    n.e("86736"),
                    n.e("6850"),
                    n.e("58227"),
                    n.e("63575"),
                    n.e("62856"),
                    n.e("44686"),
                    n.e("384"),
                    n.e("66201"),
                    n.e("93375"),
                    n.e("39206"),
                    n.e("22516"),
                    n.e("20598"),
                    n.e("87154"),
                    n.e("33213"),
                    n.e("7756"),
                ]).then(n.bind(n, 545135));
                return (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (i = i = { guild: m }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n),
                    );
                };
            });
        },
        children: [
            (0, r.jsx)(c.Z, {
                tabIndex: -1,
                guild: m,
                showBadge: !0,
                className: null != m.icon ? p.icon : p.noIcon,
                badgeStrokeColor: (0, o.wj)(y)
                    ? i.Z.unsafe_rawColors.PRIMARY_600.css
                    : i.Z.unsafe_rawColors.WHITE_500.css,
                badgeTooltipColor: a.r6K.PRIMARY,
                badgeTooltipDelay: f.vB,
                size: c.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, r.jsxs)("div", {
                className: p.details,
                children: [
                    (0, r.jsx)("div", {
                        className: p.name,
                        children: m.name,
                    }),
                    v &&
                        (0, r.jsxs)("div", {
                            className: p.nick,
                            children: [
                                (0, r.jsx)(a.qEK, {
                                    src: t.getAvatarURL(m.id, g),
                                    size: a.EFr.SIZE_16,
                                    className: p.avatar,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, r.jsx)(l.Z, {
                                        delay: f.vB,
                                        children: null != b ? b : u.ZP.getName(m.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !v &&
                        null != b &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            children: (0, r.jsx)(l.Z, {
                                delay: f.vB,
                                children: b,
                            }),
                        }),
                ],
            }),
        ],
    });
}
