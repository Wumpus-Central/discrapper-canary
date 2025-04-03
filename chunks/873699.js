n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(668781),
    s = n(79390),
    c = n(222677),
    u = n(665906),
    d = n(496675),
    f = n(768581),
    g = n(176354),
    m = n(981631),
    b = n(388032);
function p(e, t) {
    let { reducedMotion: n } = i.useContext(a.Sfi),
        f = (0, u.$R)(t),
        g = (0, l.e7)([d.Z], () => d.Z.can(m.Plq.MANAGE_MESSAGES, t) && f, [t, f]),
        p = e.reactions.reduce((e, t) => {
            var n;
            return (null == (n = t.count_details) ? void 0 : n.vote) != null || null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name) ? e : [...e, t.emoji];
        }, []),
        y = (n, r) => {
            n.shiftKey
                ? (0, c.$E)(t.id, e.id, r)
                : o.Z.show({
                      title: b.NW.string(b.t['73GqT0']),
                      body: b.NW.string(b.t.dmy5bm),
                      confirmText: b.NW.string(b.t.p89ACg),
                      cancelText: b.NW.string(b.t.gm1Ven),
                      onConfirm: () => {
                          (0, c.$E)(t.id, e.id, r);
                      }
                  });
        };
    return !g || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, s.eQ)(e))
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'remove-emoji-reactions',
              label: b.NW.string(b.t['zx/e4O']),
              color: 'danger',
              children: p.map((e) => {
                  var t, i;
                  return (0, r.jsx)(
                      a.sNh,
                      {
                          id: 'remove-emoji-reactions-'.concat(null != (t = e.name) ? t : e.id),
                          label: null == e.id ? e.name : ':'.concat(e.name, ':'),
                          action: (t) => y(t, e),
                          icon: (t) => {
                              var i, l;
                              return (0, r.jsx)(
                                  h,
                                  ((i = (function (e) {
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
                                  (l = l =
                                      {
                                          reducedMotionEnabled: n.enabled,
                                          emoji: e
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(l)).forEach(function (e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                        }),
                                  i)
                              );
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      null != (i = e.name) ? i : e.id
                  );
              })
          });
}
function h(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: l = '', isFocused: a = !1 } = e;
    return (0, r.jsx)('img', {
        className: l,
        src:
            null != n.id
                ? f.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || a),
                      size: 18
                  })
                : g.ZP.getURL(null != (t = n.name) ? t : ''),
        alt: ''
    });
}
