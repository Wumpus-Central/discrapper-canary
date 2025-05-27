r.d(t, { Z: () => f });
var n = r(255367);
r(73800);
var i = r(780384),
    l = r(481060),
    a = r(239091),
    s = r(410030),
    o = r(44315),
    c = r(111028),
    u = r(565138),
    d = r(5192),
    m = r(228168),
    b = r(981631),
    p = r(69647);
let j = (0, l.pxk)(l.EFr.SIZE_16);
function f(e) {
    let { user: t, guild: f, nick: x, onSelect: v } = e,
        y = (0, s.ZP)(),
        O = t.hasAvatarForGuild(f.id);
    return (0, n.jsxs)(l.P3F, {
        focusProps: { offset: { right: 8 } },
        className: p.row,
        onClick: v,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('44947'), r.e('25292'), r.e('90508'), r.e('62134'), r.e('80284'), r.e('19027'), r.e('94136'), r.e('60691'), r.e('2286'), r.e('40694'), r.e('60564'), r.e('7654'), r.e('70205'), r.e('62117'), r.e('49049'), r.e('44156'), r.e('55616'), r.e('86133'), r.e('49286'), r.e('6850'), r.e('58227'), r.e('32652'), r.e('54408'), r.e('20087'), r.e('50629'), r.e('93375'), r.e('64679'), r.e('44606'), r.e('56534'), r.e('87154'), r.e('33213'), r.e('47284')]).then(r.bind(r, 545135));
                return (t) => {
                    var r, i;
                    return (0, n.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, t)),
                        (i = i = { guild: f }),
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
            (0, n.jsx)(u.Z, {
                tabIndex: -1,
                guild: f,
                showBadge: !0,
                className: null != f.icon ? p.icon : p.noIcon,
                badgeStrokeColor: (0, o.Lq)((0, i.wj)(y) ? b.Ilk.PRIMARY_600 : b.Ilk.WHITE_500),
                badgeTooltipColor: l.FGA.PRIMARY,
                badgeTooltipDelay: m.vB,
                size: u.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsxs)('div', {
                className: p.details,
                children: [
                    (0, n.jsx)('div', {
                        className: p.name,
                        children: f.toString()
                    }),
                    O &&
                        (0, n.jsxs)('div', {
                            className: p.nick,
                            children: [
                                (0, n.jsx)(l.qEK, {
                                    src: t.getAvatarURL(f.id, j),
                                    size: l.EFr.SIZE_16,
                                    className: p.avatar,
                                    'aria-hidden': !0
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    children: (0, n.jsx)(c.Z, {
                                        delay: m.vB,
                                        children: null != x ? x : d.ZP.getName(f.id, void 0, t)
                                    })
                                })
                            ]
                        }),
                    !O &&
                        null != x &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            children: (0, n.jsx)(c.Z, {
                                delay: m.vB,
                                children: x
                            })
                        })
                ]
            })
        ]
    });
}
