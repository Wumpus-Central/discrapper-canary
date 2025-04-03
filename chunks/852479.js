n.d(t, { Z: () => f });
var r = n(200651),
    l = n(192379),
    o = n(913527),
    a = n.n(o),
    i = n(399606),
    s = n(481060),
    c = n(740900),
    u = n(241559),
    d = n(893966),
    C = n(527379),
    m = n(388032),
    b = n(350381),
    p = n(93163);
function f(e) {
    let { guild: t, onSubmit: o } = e,
        f = (0, i.e7)([d.Z], () => d.Z.getMembersCountByGuildId(t.id, c.R_.NEW_GUILD_MEMBER), [t.id]),
        h = (0, i.e7)(
            [d.Z],
            () => {
                let e = d.Z.getNewMemberTimestamp(t.id);
                return a()(e).format('h:mm A');
            },
            [t.id]
        ),
        j = (0, i.e7)([d.Z], () => d.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        g = l.useCallback(() => {
            (0, C.YO)(t.id), null == o || o();
        }, [t.id, o]),
        x = l.useCallback(() => {
            j
                ? g()
                : (0, s.ZDy)(async () => {
                      let { default: e } = await n.e('24478').then(n.bind(n, 319481));
                      return (t) => {
                          var n, l;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (l = l = { onConfirm: g }),
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
        }, [g, j]),
        y = new Intl.NumberFormat(m.NW.currentLocale).format(f),
        v = (0, u.nX)(t.id),
        O = (0, u.xC)(t.id),
        N = l.useMemo(() => 1 + +!!v + +!!O, [v, O]);
    return 0 === f
        ? null
        : (0, r.jsxs)('tr', {
              className: p.newMembersNotice,
              onClick: x,
              children: [
                  (0, r.jsx)('td', {
                      colSpan: 3,
                      children: (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'always-white',
                          children: m.NW.format(m.t['/i5uJy'], {
                              count: y,
                              date: h
                          })
                      })
                  }),
                  (0, r.jsx)('td', { colSpan: N }),
                  (0, r.jsx)('td', {
                      colSpan: 2,
                      children: (0, r.jsx)('div', {
                          className: b.actionCell,
                          children: (0, r.jsx)(s.zxk, {
                              size: s.zxk.Sizes.SMALL,
                              color: s.zxk.Colors.TRANSPARENT,
                              look: s.zxk.Looks.LINK,
                              className: p.memberNoticeActionButton,
                              children: (0, r.jsxs)(s.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: p.memberNoticeAction,
                                  children: [
                                      (0, r.jsx)('div', { children: m.NW.string(m.t.rkyOzM) }),
                                      (0, r.jsx)(s.tBG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: p.memberNoticeActionIcon
                                      })
                                  ]
                              })
                          })
                      })
                  })
              ]
          });
}
