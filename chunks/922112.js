n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(603211),
    c = n(734893),
    d = n(592125),
    u = n(768581),
    m = n(8426),
    h = n(969632),
    g = n(388032),
    x = n(73806);
let p = function (e) {
    let { guildId: t, resourceChannel: l, index: p, onDragComplete: _, onDragStart: C, onDragReset: f } = e,
        { title: v, channelId: N, description: j } = l,
        I = d.Z.getChannel(N),
        E = null;
    (null != I && (0, c.k3)(I)) || (E = g.intl.string(g.t.kTdL8f));
    let b = null == j || 0 === j.length,
        T = u.ZP.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon
        }),
        {
            drag: S,
            dragSourcePosition: R,
            drop: Z,
            setIsDraggable: y
        } = (0, o.Z)({
            type: 'RESOURCE_CHANNEL',
            optionId: l.channelId,
            index: p,
            onDragStart: C,
            onDragComplete: _,
            onDragReset: f
        }),
        A = r.useCallback(
            (e) => {
                (0, m.XG)(l.channelId, e);
            },
            [l.channelId]
        ),
        L = r.useCallback(
            (e, n) => {
                let i = h.Z.getSettings();
                null != i &&
                    ((0, m.XG)(l.channelId, e),
                    (0, m.oo)(t, i).then(() => {
                        (0, m.mM)(t, e.channelId, n);
                    }));
            },
            [t, l]
        ),
        D = r.useCallback(
            () =>
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guildId: t,
                            resourceChannel: l,
                            onSave: A,
                            onDelete: () => (0, m.Hz)(l.channelId),
                            onIconUpload: L
                        });
                }),
            [t, l, A, L]
        );
    return null == I
        ? null
        : (0, i.jsxs)('div', {
              className: s()(x.resourceChannelContainer),
              children: [
                  (0, i.jsxs)('div', {
                      className: s()(x.resourceChannel, {
                          [x.dropIndicatorBefore]: null != R && p < R,
                          [x.dropIndicatorAfter]: null != R && p > R,
                          [x.resourceChannelError]: null != E
                      }),
                      ref: (e) => S(Z(e)),
                      children: [
                          (0, i.jsx)('div', {
                              className: x.dragContainer,
                              onMouseEnter: () => y(!0),
                              onMouseLeave: () => y(!1),
                              children: (0, i.jsx)(a.Vni, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: x.dragIcon
                              })
                          }),
                          null != T &&
                              (0, i.jsx)('div', {
                                  className: x.iconWrapper,
                                  children: (0, i.jsx)('img', {
                                      src: T,
                                      className: x.icon,
                                      width: 32,
                                      height: 32,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                              }),
                          (0, i.jsxs)('div', {
                              className: x.resourceChannelContent,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: x.resourceChannelTitle,
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: v
                                  }),
                                  !b &&
                                      (0, i.jsx)(a.Text, {
                                          className: x.resourceChannelDescription,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          lineClamp: 1,
                                          children: j
                                      })
                              ]
                          }),
                          (0, i.jsx)(a.ua7, {
                              text: g.intl.string(g.t.bt75u7),
                              children: (e) =>
                                  (0, i.jsxs)(a.zxk, {
                                      ...e,
                                      className: x.resourceChannelEditButton,
                                      innerClassName: x.resourceChannelEditButtonInner,
                                      size: a.zxk.Sizes.MIN,
                                      onClick: D,
                                      children: [
                                          (0, i.jsx)(a.vdY, {
                                              size: 'md',
                                              color: 'currentColor'
                                          }),
                                          (0, i.jsx)(a.nn4, { children: g.intl.string(g.t.bt75u7) })
                                      ]
                                  })
                          })
                      ]
                  }),
                  null != E &&
                      (0, i.jsx)(a.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          children: E
                      })
              ]
          });
};
