r.d(t, { Z: () => p });
var n = r(255367);
r(73800);
var i = r(780384),
    l = r(481060),
    a = r(239091),
    s = r(44315),
    o = r(111028),
    c = r(565138),
    u = r(5192),
    d = r(652853),
    m = r(228168),
    b = r(981631),
    x = r(69647);
let j = (0, l.pxk)(l.EFr.SIZE_16);
function p(e) {
    let { user: t, guild: p, nick: f, onSelect: v } = e,
        { theme: h, themeType: y } = (0, d.z)(),
        O = t.hasAvatarForGuild(p.id);
    return (0, n.jsxs)(l.P3F, {
        focusProps:
            y === m.lY.MODAL_V2
                ? {
                      offset: {
                          top: 4,
                          right: 4,
                          left: 4
                      }
                  }
                : { offset: { right: 8 } },
        className: x.row,
        onClick: v,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('66549'), r.e('95355'), r.e('1806'), r.e('44947'), r.e('70274'), r.e('25292'), r.e('31978'), r.e('22878'), r.e('74891'), r.e('85372'), r.e('6380'), r.e('28467'), r.e('90508'), r.e('8739'), r.e('16766'), r.e('86282'), r.e('24037'), r.e('30243'), r.e('37447'), r.e('53937'), r.e('44421'), r.e('30424'), r.e('40694'), r.e('94313'), r.e('94136'), r.e('67501'), r.e('70205'), r.e('71418'), r.e('58175'), r.e('7654'), r.e('44156'), r.e('69150'), r.e('38697'), r.e('49049'), r.e('99226'), r.e('6850'), r.e('58227'), r.e('54408'), r.e('20087'), r.e('94312'), r.e('96812'), r.e('79381'), r.e('64679'), r.e('7210'), r.e('56534'), r.e('87154'), r.e('33213'), r.e('67826')]).then(r.bind(r, 545135));
                return (t) => {
                    var r, i;
                    return (0, n.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
                            }
                            return e;
                        })({}, t)),
                        (i = i = { guild: p }),
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
                        r)
                    );
                };
            });
        },
        children: [
            (0, n.jsx)(c.Z, {
                tabIndex: -1,
                guild: p,
                showBadge: !0,
                className: null != p.icon ? x.icon : x.noIcon,
                badgeStrokeColor: (0, s.Lq)((0, i.wj)(h) ? b.Ilk.PRIMARY_600 : b.Ilk.WHITE_500),
                badgeTooltipColor: l.FGA.PRIMARY,
                badgeTooltipDelay: m.vB,
                size: c.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsxs)('div', {
                className: x.details,
                children: [
                    (0, n.jsx)('div', {
                        className: x.name,
                        children: p.name
                    }),
                    O &&
                        (0, n.jsxs)('div', {
                            className: x.nick,
                            children: [
                                (0, n.jsx)(l.qEK, {
                                    src: t.getAvatarURL(p.id, j),
                                    size: l.EFr.SIZE_16,
                                    className: x.avatar,
                                    'aria-hidden': !0
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    children: (0, n.jsx)(o.Z, {
                                        delay: m.vB,
                                        children: null != f ? f : u.ZP.getName(p.id, void 0, t)
                                    })
                                })
                            ]
                        }),
                    !O &&
                        null != f &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            children: (0, n.jsx)(o.Z, {
                                delay: m.vB,
                                children: f
                            })
                        })
                ]
            })
        ]
    });
}
