n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(780384),
    l = n(481060),
    o = n(239091),
    a = n(44315),
    s = n(111028),
    c = n(565138),
    u = n(5192),
    d = n(652853),
    p = n(228168),
    h = n(981631),
    f = n(671955),
    g = n(163514);
let m = (0, l.pxk)(l.EFr.SIZE_16);
function b(e) {
    let { user: t, guild: b, nick: _, onSelect: O } = e,
        { theme: y, themeType: j } = (0, d.z)(),
        v = t.hasAvatarForGuild(b.id);
    return (0, r.jsxs)(l.P3F, {
        focusProps:
            j === f.l.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: g.row,
        onClick: O,
        onContextMenu: (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("57804"),
                    n.e("13599"),
                    n.e("36599"),
                    n.e("7654"),
                    n.e("58175"),
                    n.e("48776"),
                    n.e("8271"),
                    n.e("15851"),
                    n.e("51453"),
                    n.e("845"),
                    n.e("49049"),
                    n.e("63575"),
                    n.e("98039"),
                    n.e("6850"),
                    n.e("58227"),
                    n.e("62856"),
                    n.e("44686"),
                    n.e("38697"),
                    n.e("30378"),
                    n.e("29679"),
                    n.e("66201"),
                    n.e("93375"),
                    n.e("39206"),
                    n.e("22516"),
                    n.e("89442"),
                    n.e("87154"),
                    n.e("33213"),
                    n.e("66697"),
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
                        (i = i = { guild: b }),
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
                guild: b,
                showBadge: !0,
                className: null != b.icon ? g.icon : g.noIcon,
                badgeStrokeColor: (0, a.Lq)((0, i.wj)(y) ? h.Ilk.PRIMARY_600 : h.Ilk.WHITE_500),
                badgeTooltipColor: l.FGA.PRIMARY,
                badgeTooltipDelay: p.vB,
                size: c.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, r.jsxs)("div", {
                className: g.details,
                children: [
                    (0, r.jsx)("div", {
                        className: g.name,
                        children: b.name,
                    }),
                    v &&
                        (0, r.jsxs)("div", {
                            className: g.nick,
                            children: [
                                (0, r.jsx)(l.qEK, {
                                    src: t.getAvatarURL(b.id, m),
                                    size: l.EFr.SIZE_16,
                                    className: g.avatar,
                                    "aria-hidden": !0,
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, r.jsx)(s.Z, {
                                        delay: p.vB,
                                        children: null != _ ? _ : u.ZP.getName(b.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !v &&
                        null != _ &&
                        (0, r.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            children: (0, r.jsx)(s.Z, {
                                delay: p.vB,
                                children: _,
                            }),
                        }),
                ],
            }),
        ],
    });
}
