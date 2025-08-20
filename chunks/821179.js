r.d(t, { Z: () => v });
var n = r(951288);
r(647438);
var i = r(780384),
    a = r(481060),
    l = r(239091),
    o = r(44315),
    s = r(111028),
    c = r(565138),
    u = r(5192),
    d = r(652853),
    m = r(228168),
    p = r(981631),
    b = r(671955),
    f = r(323759);
let j = (0, a.pxk)(a.EFr.SIZE_16);
function v(e) {
    let { user: t, guild: v, nick: x, onSelect: y } = e,
        { theme: O, themeType: h } = (0, d.z)(),
        g = t.hasAvatarForGuild(v.id);
    return (0, n.jsxs)(a.P3F, {
        focusProps:
            h === b.l.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4,
                      },
                  }
                : { offset: { right: 8 } },
        className: f.row,
        onClick: y,
        onContextMenu: (e) => {
            (0, l.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    r.e("85911"),
                    r.e("57804"),
                    r.e("1806"),
                    r.e("53414"),
                    r.e("70274"),
                    r.e("25292"),
                    r.e("31978"),
                    r.e("22878"),
                    r.e("90508"),
                    r.e("74891"),
                    r.e("85372"),
                    r.e("6380"),
                    r.e("28467"),
                    r.e("8739"),
                    r.e("86282"),
                    r.e("12830"),
                    r.e("38626"),
                    r.e("30243"),
                    r.e("37447"),
                    r.e("53937"),
                    r.e("63575"),
                    r.e("34082"),
                    r.e("40694"),
                    r.e("55719"),
                    r.e("26434"),
                    r.e("94136"),
                    r.e("36599"),
                    r.e("31930"),
                    r.e("70205"),
                    r.e("16766"),
                    r.e("60962"),
                    r.e("58175"),
                    r.e("7654"),
                    r.e("4067"),
                    r.e("38697"),
                    r.e("44156"),
                    r.e("6565"),
                    r.e("49049"),
                    r.e("47463"),
                    r.e("6850"),
                    r.e("58227"),
                    r.e("54408"),
                    r.e("42926"),
                    r.e("20087"),
                    r.e("6049"),
                    r.e("79381"),
                    r.e("67325"),
                    r.e("64679"),
                    r.e("12630"),
                    r.e("56534"),
                    r.e("87154"),
                    r.e("33213"),
                    r.e("13189"),
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
                        (i = i = { guild: v }),
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
                guild: v,
                showBadge: !0,
                className: null != v.icon ? f.icon : f.noIcon,
                badgeStrokeColor: (0, o.Lq)((0, i.wj)(O) ? p.Ilk.PRIMARY_600 : p.Ilk.WHITE_500),
                badgeTooltipColor: a.FGA.PRIMARY,
                badgeTooltipDelay: m.vB,
                size: c.Z.Sizes.MEDIUM,
                active: !0,
            }),
            (0, n.jsxs)("div", {
                className: f.details,
                children: [
                    (0, n.jsx)("div", {
                        className: f.name,
                        children: v.name,
                    }),
                    g &&
                        (0, n.jsxs)("div", {
                            className: f.nick,
                            children: [
                                (0, n.jsx)(a.qEK, {
                                    src: t.getAvatarURL(v.id, j),
                                    size: a.EFr.SIZE_16,
                                    className: f.avatar,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(a.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, n.jsx)(s.Z, {
                                        delay: m.vB,
                                        children: null != x ? x : u.ZP.getName(v.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !g &&
                        null != x &&
                        (0, n.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            children: (0, n.jsx)(s.Z, {
                                delay: m.vB,
                                children: x,
                            }),
                        }),
                ],
            }),
        ],
    });
}
