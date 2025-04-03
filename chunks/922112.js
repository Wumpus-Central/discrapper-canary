n.d(t, { Z: () => x }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
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
let x = function (e) {
    let { guildId: t, resourceChannel: s, index: x, onDragComplete: j, onDragStart: N, onDragReset: _ } = e,
        { title: v, channelId: C, description: O } = s,
        y = d.Z.getChannel(C),
        I = null;
    (null != y && (0, c.k3)(y)) || (I = p.NW.string(p.t.kTdL8f));
    let E = null == O || 0 === O.length,
        S = u.ZP.getResourceChannelIconURL({
            channelId: s.channelId,
            icon: s.icon
        }),
        {
            drag: T,
            dragSourcePosition: P,
            drop: w,
            setIsDraggable: R
        } = (0, o.Z)({
            type: 'RESOURCE_CHANNEL',
            optionId: s.channelId,
            index: x,
            onDragStart: N,
            onDragComplete: j,
            onDragReset: _
        }),
        Z = i.useCallback(
            (e) => {
                (0, m.XG)(s.channelId, e);
            },
            [s.channelId]
        ),
        D = i.useCallback(
            (e, n) => {
                let r = g.Z.getSettings();
                null != r &&
                    ((0, m.XG)(s.channelId, e),
                    (0, m.oo)(t, r).then(() => {
                        (0, m.mM)(t, e.channelId, n);
                    }));
            },
            [t, s]
        ),
        A = i.useCallback(
            () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            b(f({}, n), {
                                guildId: t,
                                resourceChannel: s,
                                onSave: Z,
                                onDelete: () => (0, m.Hz)(s.channelId),
                                onIconUpload: D
                            })
                        );
                }),
            [t, s, Z, D]
        );
    return null == y
        ? null
        : (0, r.jsxs)('div', {
              className: h.resourceChannelContainer,
              children: [
                  (0, r.jsxs)('div', {
                      className: a()(h.resourceChannel, {
                          [h.dropIndicatorBefore]: null != P && x < P,
                          [h.dropIndicatorAfter]: null != P && x > P,
                          [h.resourceChannelError]: null != I
                      }),
                      ref: (e) => T(w(e)),
                      children: [
                          (0, r.jsx)('div', {
                              className: h.dragContainer,
                              onMouseEnter: () => R(!0),
                              onMouseLeave: () => R(!1),
                              children: (0, r.jsx)(l.Vni, {
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
                                  (0, r.jsx)(l.Text, {
                                      className: h.resourceChannelTitle,
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: v
                                  }),
                                  !E &&
                                      (0, r.jsx)(l.Text, {
                                          className: h.resourceChannelDescription,
                                          variant: 'text-xs/medium',
                                          color: 'text-muted',
                                          lineClamp: 1,
                                          children: O
                                      })
                              ]
                          }),
                          (0, r.jsx)(l.ua7, {
                              text: p.NW.string(p.t.bt75u7),
                              children: (e) =>
                                  (0, r.jsxs)(
                                      l.zxk,
                                      b(f({}, e), {
                                          className: h.resourceChannelEditButton,
                                          innerClassName: h.resourceChannelEditButtonInner,
                                          size: l.zxk.Sizes.MIN,
                                          onClick: A,
                                          children: [
                                              (0, r.jsx)(l.vdY, {
                                                  size: 'md',
                                                  color: 'currentColor'
                                              }),
                                              (0, r.jsx)(l.nn4, { children: p.NW.string(p.t.bt75u7) })
                                          ]
                                      })
                                  )
                          })
                      ]
                  }),
                  null != I &&
                      (0, r.jsx)(l.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-danger',
                          children: I
                      })
              ]
          });
};
