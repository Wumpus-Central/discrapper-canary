n.d(t, {
    Z: function () {
        return g;
    }
});
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(913527),
    s = n.n(r),
    c = n(399606),
    C = n(481060),
    d = n(740900),
    u = n(241559),
    m = n(893966),
    h = n(527379),
    x = n(388032),
    b = n(216412),
    f = n(115251);
function g(e) {
    let { guild: t, onSubmit: i } = e,
        r = (0, c.e7)([m.Z], () => m.Z.getMembersCountByGuildId(t.id, d.R_.NEW_GUILD_MEMBER), [t.id]),
        g = (0, c.e7)(
            [m.Z],
            () => {
                let e = m.Z.getNewMemberTimestamp(t.id);
                return s()(e).format('h:mm A');
            },
            [t.id]
        ),
        p = (0, c.e7)([m.Z], () => m.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]),
        H = o.useCallback(() => {
            (0, h.YO)(t.id), null == i || i();
        }, [t.id, i]),
        j = o.useCallback(() => {
            p
                ? H()
                : (0, C.openModalLazy)(async () => {
                      let { default: e } = await n.e('24478').then(n.bind(n, 319481));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              onConfirm: H
                          });
                  });
        }, [H, p]),
        v = new Intl.NumberFormat(x.intl.currentLocale).format(r),
        N = (0, u.nX)(t.id),
        L = (0, u.xC)(t.id),
        I = o.useMemo(() => 1 + (N ? 1 : 0) + (L ? 1 : 0), [N, L]);
    return 0 === r
        ? null
        : (0, l.jsxs)('tr', {
              className: a()(f.newMembersNotice),
              onClick: j,
              children: [
                  (0, l.jsx)('td', {
                      colSpan: 3,
                      children: (0, l.jsx)(C.Text, {
                          variant: 'text-sm/normal',
                          color: 'always-white',
                          children: x.intl.format(x.t['/i5uJy'], {
                              count: v,
                              date: g
                          })
                      })
                  }),
                  (0, l.jsx)('td', { colSpan: I }),
                  (0, l.jsx)('td', {
                      colSpan: 2,
                      children: (0, l.jsx)('div', {
                          className: a()(b.actionCell),
                          children: (0, l.jsx)(C.Button, {
                              size: C.Button.Sizes.SMALL,
                              color: C.Button.Colors.TRANSPARENT,
                              look: C.Button.Looks.LINK,
                              className: a()(f.memberNoticeActionButton),
                              children: (0, l.jsxs)(C.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: a()(f.memberNoticeAction),
                                  children: [
                                      (0, l.jsx)('div', { children: x.intl.string(x.t.rkyOzM) }),
                                      (0, l.jsx)(C.UserIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 20,
                                          height: 20,
                                          className: a()(f.memberNoticeActionIcon)
                                      })
                                  ]
                              })
                          })
                      })
                  })
              ]
          });
}
