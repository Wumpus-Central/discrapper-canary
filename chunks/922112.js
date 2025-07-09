(n.d(t, { Z: () => j }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    o = n(481060),
    c = n(603211),
    d = n(734893),
    u = n(592125),
    m = n(768581),
    g = n(8426),
    p = n(969632),
    f = n(388032),
    h = n(773100);
function x(e) {
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
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = function (e) {
    let { guildId: t, resourceChannel: l, index: j, onDragComplete: _, onDragStart: v, onDragReset: O } = e,
        { title: C, channelId: y, description: N } = l,
        I = u.Z.getChannel(y),
        E = null;
    (null != I && (0, d.k3)(I)) || (E = f.intl.string(f.t.kTdL8f));
    let S = null == N || 0 === N.length,
        T = m.ZP.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon
        }),
        {
            drag: P,
            dragSourcePosition: w,
            drop: R,
            setIsDraggable: Z
        } = (0, c.Z)({
            type: 'RESOURCE_CHANNEL',
            optionId: l.channelId,
            index: j,
            onDragStart: v,
            onDragComplete: _,
            onDragReset: O
        }),
        D = i.useCallback(
            (e) => {
                (0, g.XG)(l.channelId, e);
            },
            [l.channelId]
        ),
        A = i.useCallback(
            (e, n) => {
                let r = p.Z.getSettings();
                null != r &&
                    ((0, g.XG)(l.channelId, e),
                    (0, g.oo)(t, r).then(() => {
                        (0, g.mM)(t, e.channelId, n);
                    }));
            },
            [t, l]
        ),
        L = i.useCallback(
            () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(x({}, n), {
                                guildId: t,
                                resourceChannel: l,
                                onSave: D,
                                onDelete: () => (0, g.Hz)(l.channelId),
                                onIconUpload: A
                            })
                        );
                }),
            [t, l, D, A]
        );
    return null == I
        ? null
        : (0, r.jsxs)('div', {
              className: h.resourceChannelContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: s()(h.resourceChannel, {
                          [h.dropIndicatorBefore]: null != w && j < w,
                          [h.dropIndicatorAfter]: null != w && j > w,
                          [h.resourceChannelError]: null != E
                      }),
                      ref: (e) => {
                          P(R(e));
                      },
                      children: [
                          (0, r.jsx)('div', {
                              className: h.dragContainer,
                              onMouseEnter: () => Z(!0),
                              onMouseLeave: () => Z(!1),
                              children: (0, r.jsx)(o.Vni, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: h.dragIcon
                              })
                          }),
                          null != T &&
                              (0, r.jsx)('div', {
                                  className: h.iconWrapper,
                                  children: (0, r.jsx)('img', {
                                      src: T,
                                      className: h.icon,
                                      width: 32,
                                      height: 32,
                                      alt: '',
                                      'aria-hidden': !0
                                  })
                              }),
                          (0, r.jsxs)('div', {
                              className: h.resourceChannelContent,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      className: h.resourceChannelTitle,
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: C
                                  }),
                                  !S &&
                                      (0, r.jsx)(o.Text, {
                                          className: h.resourceChannelDescription,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          lineClamp: 1,
                                          children: N
                                      })
                              ]
                          }),
                          (0, r.jsx)(o.ua7, {
                              text: f.intl.string(f.t.bt75u7),
                              children: (e) =>
                                  (0, r.jsxs)(
                                      a.zx,
                                      b(x({}, e), {
                                          className: h.resourceChannelEditButton,
                                          innerClassName: h.resourceChannelEditButtonInner,
                                          size: a.zx.Sizes.MIN,
                                          onClick: L,
                                          children: [
                                              (0, r.jsx)(o.vdY, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, r.jsx)(o.nn4, { children: f.intl.string(f.t.bt75u7) })
                                          ]
                                      })
                                  )
                          })
                      ]
                  }),
                  null != E &&
                      (0, r.jsx)(o.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          children: E
                      })
              ]
          });
};
