n.d(t, { Z: () => h }), n(388685);
var i = n(200651),
    r = n(192379),
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
function h(e, t) {
    let { reducedMotion: n } = r.useContext(a.Sfi),
        f = (0, u.$R)(t),
        g = (0, l.e7)([d.Z], () => d.Z.can(m.Plq.MANAGE_MESSAGES, t) && f, [t, f]),
        h = e.reactions.reduce((e, t) => {
            var n;
            return (null == (n = t.count_details) ? void 0 : n.vote) != null || null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name) ? e : [...e, t.emoji];
        }, []),
        O = (n, i) => {
            n.shiftKey
                ? (0, c.$E)(t.id, e.id, i)
                : o.Z.show({
                      title: b.intl.string(b.t['73GqT0']),
                      body: b.intl.string(b.t.dmy5bm),
                      confirmText: b.intl.string(b.t.p89ACg),
                      cancelText: b.intl.string(b.t.gm1Ven),
                      onConfirm: () => {
                          (0, c.$E)(t.id, e.id, i);
                      }
                  });
        };
    return !g || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, s.eQ)(e))
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'remove-emoji-reactions',
              label: b.intl.string(b.t['zx/e4O']),
              color: 'danger',
              children: h.map((e) => {
                  var t, r;
                  return (0, i.jsx)(
                      a.sNh,
                      {
                          id: 'remove-emoji-reactions-'.concat(null != (t = e.name) ? t : e.id),
                          label: null == e.id ? e.name : ':'.concat(e.name, ':'),
                          action: (t) => O(t, e),
                          icon: (t) => {
                              var r, l;
                              return (0, i.jsx)(
                                  p,
                                  ((r = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              i = Object.keys(n);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (i = i.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              i.forEach(function (t) {
                                                  var i;
                                                  (i = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: i,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = i);
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
                                      ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, i);
                                            }
                                            return n;
                                        })(Object(l)).forEach(function (e) {
                                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                        }),
                                  r)
                              );
                          },
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      null != (r = e.name) ? r : e.id
                  );
              })
          });
}
function p(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: r, className: l = '', isFocused: a = !1 } = e;
    return (0, i.jsx)('img', {
        className: l,
        src:
            null != n.id
                ? f.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!r || a),
                      size: 18
                  })
                : g.ZP.getURL(null != (t = n.name) ? t : ''),
        alt: ''
    });
}
