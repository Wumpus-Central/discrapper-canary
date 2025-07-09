n.d(t, { Z: () => h });
var r = n(255367),
    l = n(73800),
    o = n(913527),
    i = n.n(o),
    a = n(399606),
    s = n(755721),
    c = n(481060),
    u = n(740900),
    d = n(241559),
    C = n(893966),
    m = n(527379),
    b = n(388032),
    p = n(350381),
    f = n(93163);
function h(e) {
    let { guild: t, onSubmit: o } = e,
        h = (0, a.e7)([C.Z], () => C.Z.getMembersCountByGuildId(t.id, u.R_.NEW_GUILD_MEMBER), [t.id]),
        j = (0, a.e7)(
            [C.Z],
            () => {
                let e = C.Z.getNewMemberTimestamp(t.id);
                return i()(e).format('h:mm A');
            },
            [t.id]
        ),
        g = (0, a.e7)([C.Z], () => C.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        x = l.useCallback(() => {
            ((0, m.YO)(t.id), null == o || o());
        }, [t.id, o]),
        v = l.useCallback(() => {
            g
                ? x()
                : (0, c.ZDy)(async () => {
                      let { default: e } = await n.e('24478').then(n.bind(n, 319481));
                      return (t) => {
                          var n, l;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, t)),
                              (l = l = { onConfirm: x }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              n)
                          );
                      };
                  });
        }, [x, g]),
        y = new Intl.NumberFormat(b.intl.currentLocale).format(h),
        O = (0, d.nX)(t.id),
        _ = (0, d.xC)(t.id),
        H = l.useMemo(() => 1 + +!!O + +!!_, [O, _]);
    return 0 === h
        ? null
        : (0, r.jsxs)('tr', {
              className: f.newMembersNotice,
              onClick: v,
              children: [
                  (0, r.jsx)('td', {
                      colSpan: 3,
                      children: (0, r.jsx)(c.Text, {
                          variant: 'text-sm/normal',
                          color: 'always-white',
                          children: b.intl.format(b.t['/i5uJy'], {
                              count: y,
                              date: j
                          })
                      })
                  }),
                  (0, r.jsx)('td', { colSpan: H }),
                  (0, r.jsx)('td', {
                      colSpan: 2,
                      children: (0, r.jsx)('div', {
                          className: p.actionCell,
                          children: (0, r.jsx)(s.zx, {
                              size: s.zx.Sizes.SMALL,
                              color: s.zx.Colors.TRANSPARENT,
                              look: s.zx.Looks.LINK,
                              className: f.memberNoticeActionButton,
                              children: (0, r.jsxs)(c.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: f.memberNoticeAction,
                                  children: [
                                      (0, r.jsx)('div', { children: b.intl.string(b.t.rkyOzM) }),
                                      (0, r.jsx)(c.tBG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: f.memberNoticeActionIcon
                                      })
                                  ]
                              })
                          })
                      })
                  })
              ]
          });
}
