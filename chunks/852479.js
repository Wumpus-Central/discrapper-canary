n.d(t, { Z: () => j });
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(913527),
    s = n.n(i),
    c = n(399606),
    u = n(481060),
    d = n(740900),
    C = n(241559),
    m = n(893966),
    b = n(527379),
    p = n(388032),
    f = n(188360),
    h = n(722618);
function j(e) {
    let { guild: t, onSubmit: o } = e,
        i = (0, c.e7)([m.Z], () => m.Z.getMembersCountByGuildId(t.id, d.R_.NEW_GUILD_MEMBER), [t.id]),
        j = (0, c.e7)(
            [m.Z],
            () => {
                let e = m.Z.getNewMemberTimestamp(t.id);
                return s()(e).format('h:mm A');
            },
            [t.id]
        ),
        g = (0, c.e7)([m.Z], () => m.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        x = l.useCallback(() => {
            (0, b.YO)(t.id), null == o || o();
        }, [t.id, o]),
        v = l.useCallback(() => {
            g
                ? x()
                : (0, u.ZDy)(async () => {
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
        y = new Intl.NumberFormat(p.NW.currentLocale).format(i),
        O = (0, C.nX)(t.id),
        N = (0, C.xC)(t.id),
        _ = l.useMemo(() => 1 + +!!O + +!!N, [O, N]);
    return 0 === i
        ? null
        : (0, r.jsxs)('tr', {
              className: a()(h.newMembersNotice),
              onClick: v,
              children: [
                  (0, r.jsx)('td', {
                      colSpan: 3,
                      children: (0, r.jsx)(u.Text, {
                          variant: 'text-sm/normal',
                          color: 'always-white',
                          children: p.NW.format(p.t['/i5uJy'], {
                              count: y,
                              date: j
                          })
                      })
                  }),
                  (0, r.jsx)('td', { colSpan: _ }),
                  (0, r.jsx)('td', {
                      colSpan: 2,
                      children: (0, r.jsx)('div', {
                          className: a()(f.actionCell),
                          children: (0, r.jsx)(u.zxk, {
                              size: u.zxk.Sizes.SMALL,
                              color: u.zxk.Colors.TRANSPARENT,
                              look: u.zxk.Looks.LINK,
                              className: a()(h.memberNoticeActionButton),
                              children: (0, r.jsxs)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: a()(h.memberNoticeAction),
                                  children: [
                                      (0, r.jsx)('div', { children: p.NW.string(p.t.rkyOzM) }),
                                      (0, r.jsx)(u.tBG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: a()(h.memberNoticeActionIcon)
                                      })
                                  ]
                              })
                          })
                      })
                  })
              ]
          });
}
