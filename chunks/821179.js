r.d(t, { Z: () => f });
var n = r(200651);
r(192379);
var i = r(780384),
    l = r(481060),
    a = r(239091),
    o = r(410030),
    s = r(44315),
    c = r(565138),
    u = r(5192),
    d = r(228168),
    b = r(981631),
    m = r(69647);
let p = (0, l.pxk)(l.EFr.SIZE_16);
function f(e) {
    let { user: t, guild: f, nick: j, onSelect: v } = e,
        x = (0, o.ZP)(),
        O = t.hasAvatarForGuild(f.id);
    return (0, n.jsxs)(l.P3F, {
        focusProps: { offset: { right: 8 } },
        className: m.row,
        onClick: v,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([r.e('48835'), r.e('25292'), r.e('90508'), r.e('95477'), r.e('91245'), r.e('20875'), r.e('80284'), r.e('27146'), r.e('60691'), r.e('2286'), r.e('94928'), r.e('7654'), r.e('70205'), r.e('62117'), r.e('49049'), r.e('44156'), r.e('86133'), r.e('49286'), r.e('32652'), r.e('6850'), r.e('58227'), r.e('54408'), r.e('80728'), r.e('50629'), r.e('93375'), r.e('64679'), r.e('44606'), r.e('56534'), r.e('87154'), r.e('33213'), r.e('20849')]).then(r.bind(r, 545135));
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
            (0, n.jsx)(c.Z, {
                tabIndex: -1,
                guild: f,
                showBadge: !0,
                className: null != f.icon ? m.icon : m.noIcon,
                badgeStrokeColor: (0, s.Lq)((0, i.wj)(x) ? b.Ilk.PRIMARY_600 : b.Ilk.WHITE_500),
                badgeTooltipColor: l.FGA.PRIMARY,
                badgeTooltipDelay: d.vB,
                size: c.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, n.jsxs)('div', {
                className: m.details,
                children: [
                    (0, n.jsx)('div', {
                        className: m.name,
                        children: f.toString()
                    }),
                    O &&
                        (0, n.jsxs)('div', {
                            className: m.nick,
                            children: [
                                (0, n.jsx)(l.qEK, {
                                    src: t.getAvatarURL(f.id, p),
                                    size: l.EFr.SIZE_16,
                                    className: m.avatar,
                                    'aria-hidden': !0
                                }),
                                null != j ? j : u.ZP.getName(f.id, void 0, t)
                            ]
                        }),
                    !O &&
                        null != j &&
                        (0, n.jsx)('div', {
                            className: m.nick,
                            children: j
                        })
                ]
            })
        ]
    });
}
