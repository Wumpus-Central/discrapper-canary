n.d(t, { Z: () => b }), n(953529);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(603211),
    c = n(734893),
    d = n(592125),
    u = n(768581),
    m = n(8426),
    g = n(969632),
    p = n(388032),
    h = n(773100);
function f(e) {
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
}
function x(e, t) {
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
let b = function (e) {
    let { guildId: t, resourceChannel: l, index: b, onDragComplete: j, onDragStart: _, onDragReset: v } = e,
        { title: O, channelId: C, description: y } = l,
        N = d.Z.getChannel(C),
        I = null;
    (null != N && (0, c.k3)(N)) || (I = p.intl.string(p.t.kTdL8f));
    let E = null == y || 0 === y.length,
        S = u.ZP.getResourceChannelIconURL({
            channelId: l.channelId,
            icon: l.icon
        }),
        {
            drag: T,
            dragSourcePosition: P,
            drop: w,
            setIsDraggable: R
        } = (0, o.Z)({
            type: 'RESOURCE_CHANNEL',
            optionId: l.channelId,
            index: b,
            onDragStart: _,
            onDragComplete: j,
            onDragReset: v
        }),
        Z = i.useCallback(
            (e) => {
                (0, m.XG)(l.channelId, e);
            },
            [l.channelId]
        ),
        D = i.useCallback(
            (e, n) => {
                let r = g.Z.getSettings();
                null != r &&
                    ((0, m.XG)(l.channelId, e),
                    (0, m.oo)(t, r).then(() => {
                        (0, m.mM)(t, e.channelId, n);
                    }));
            },
            [t, l]
        ),
        A = i.useCallback(
            () =>
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            x(f({}, n), {
                                guildId: t,
                                resourceChannel: l,
                                onSave: Z,
                                onDelete: () => (0, m.Hz)(l.channelId),
                                onIconUpload: D
                            })
                        );
                }),
            [t, l, Z, D]
        );
    return null == N
        ? null
        : (0, r.jsxs)('div', {
              className: h.resourceChannelContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: s()(h.resourceChannel, {
                          [h.dropIndicatorBefore]: null != P && b < P,
                          [h.dropIndicatorAfter]: null != P && b > P,
                          [h.resourceChannelError]: null != I
                      }),
                      ref: (e) => {
                          T(w(e));
                      },
                      children: [
                          (0, r.jsx)('div', {
                              className: h.dragContainer,
                              onMouseEnter: () => R(!0),
                              onMouseLeave: () => R(!1),
                              children: (0, r.jsx)(a.Vni, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: h.dragIcon
                              })
                          }),
                          null != S &&
                              (0, r.jsx)('div', {
                                  className: h.iconWrapper,
                                  children: (0, r.jsx)('img', {
                                      src: S,
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
                                  (0, r.jsx)(a.Text, {
                                      className: h.resourceChannelTitle,
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: O
                                  }),
                                  !E &&
                                      (0, r.jsx)(a.Text, {
                                          className: h.resourceChannelDescription,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          lineClamp: 1,
                                          children: y
                                      })
                              ]
                          }),
                          (0, r.jsx)(a.ua7, {
                              text: p.intl.string(p.t.bt75u7),
                              children: (e) =>
                                  (0, r.jsxs)(
                                      a.zxk,
                                      x(f({}, e), {
                                          className: h.resourceChannelEditButton,
                                          innerClassName: h.resourceChannelEditButtonInner,
                                          size: a.zxk.Sizes.MIN,
                                          onClick: A,
                                          children: [
                                              (0, r.jsx)(a.vdY, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, r.jsx)(a.nn4, { children: p.intl.string(p.t.bt75u7) })
                                          ]
                                      })
                                  )
                          })
                      ]
                  }),
                  null != I &&
                      (0, r.jsx)(a.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          children: I
                      })
              ]
          });
};
