l.d(t, { Z: () => _ });
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(913527),
    r = l.n(s),
    c = l(399606),
    d = l(481060),
    C = l(740900),
    u = l(241559),
    m = l(893966),
    h = l(527379),
    x = l(388032),
    g = l(697301),
    p = l(269112);
function _(e) {
    let { guild: t, onSubmit: i } = e,
        s = (0, c.e7)([m.Z], () => m.Z.getMembersCountByGuildId(t.id, C.R_.NEW_GUILD_MEMBER), [t.id]),
        _ = (0, c.e7)(
            [m.Z],
            () => {
                let e = m.Z.getNewMemberTimestamp(t.id);
                return r()(e).format('h:mm A');
            },
            [t.id]
        ),
        b = (0, c.e7)([m.Z], () => m.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        f = a.useCallback(() => {
            (0, h.YO)(t.id), null == i || i();
        }, [t.id, i]),
        j = a.useCallback(() => {
            b
                ? f()
                : (0, d.ZDy)(async () => {
                      let { default: e } = await l.e('24478').then(l.bind(l, 319481));
                      return (t) =>
                          (0, n.jsx)(e, {
                              ...t,
                              onConfirm: f
                          });
                  });
        }, [f, b]),
        H = new Intl.NumberFormat(x.intl.currentLocale).format(s),
        v = (0, u.nX)(t.id),
        N = (0, u.xC)(t.id),
        Z = a.useMemo(() => 1 + (v ? 1 : 0) + (N ? 1 : 0), [v, N]);
    return 0 === s
        ? null
        : (0, n.jsxs)('tr', {
              className: o()(p.newMembersNotice),
              onClick: j,
              children: [
                  (0, n.jsx)('td', {
                      colSpan: 3,
                      children: (0, n.jsx)(d.Text, {
                          variant: 'text-sm/normal',
                          color: 'always-white',
                          children: x.intl.format(x.t['/i5uJy'], {
                              count: H,
                              date: _
                          })
                      })
                  }),
                  (0, n.jsx)('td', { colSpan: Z }),
                  (0, n.jsx)('td', {
                      colSpan: 2,
                      children: (0, n.jsx)('div', {
                          className: o()(g.actionCell),
                          children: (0, n.jsx)(d.zxk, {
                              size: d.zxk.Sizes.SMALL,
                              color: d.zxk.Colors.TRANSPARENT,
                              look: d.zxk.Looks.LINK,
                              className: o()(p.memberNoticeActionButton),
                              children: (0, n.jsxs)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: o()(p.memberNoticeAction),
                                  children: [
                                      (0, n.jsx)('div', { children: x.intl.string(x.t.rkyOzM) }),
                                      (0, n.jsx)(d.tBG, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: o()(p.memberNoticeActionIcon)
                                      })
                                  ]
                              })
                          })
                      })
                  })
              ]
          });
}
