n.d(t, { Z: () => y }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(668781),
    l = n(79390),
    c = n(222677),
    u = n(665906),
    d = n(496675),
    f = n(768581),
    _ = n(176354),
    p = n(981631),
    h = n(388032);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    let { reducedMotion: n } = i.useContext(a.Sfi),
        f = (0, u.$R)(t),
        _ = (0, o.e7)([d.Z], () => d.Z.can(p.Plq.MANAGE_MESSAGES, t) && f, [t, f]),
        m = e.reactions.reduce((e, t) => {
            var n;
            return (null == (n = t.count_details) ? void 0 : n.vote) != null ||
                null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name)
                ? e
                : [...e, t.emoji];
        }, []),
        E = (n, r) => {
            n.shiftKey
                ? (0, c.$E)(t.id, e.id, r)
                : s.Z.show({
                      title: h.intl.string(h.t["73GqT0"]),
                      body: h.intl.string(h.t.dmy5bm),
                      confirmText: h.intl.string(h.t.p89ACg),
                      confirmVariant: "critical-primary",
                      cancelText: h.intl.string(h.t.gm1Ven),
                      onConfirm: () => {
                          (0, c.$E)(t.id, e.id, r);
                      },
                  });
        };
    return !_ || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, l.eQ)(e))
        ? null
        : (0, r.jsx)(a.sNh, {
              id: "remove-emoji-reactions",
              label: h.intl.string(h.t["zx/e4O"]),
              color: "danger",
              children: m.map((e) => {
                  var t, i;
                  return (0, r.jsx)(
                      a.sNh,
                      {
                          id: "remove-emoji-reactions-".concat(null != (t = e.name) ? t : e.id),
                          label: null == e.id ? e.name : ":".concat(e.name, ":"),
                          action: (t) => E(t, e),
                          icon: (t) =>
                              (0, r.jsx)(
                                  O,
                                  b(g({}, t), {
                                      reducedMotionEnabled: n.enabled,
                                      emoji: e,
                                  }),
                              ),
                          dontCloseOnActionIfHoldingShiftKey: !0,
                      },
                      null != (i = e.name) ? i : e.id,
                  );
              }),
          });
}
function O(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: o = "", isFocused: a = !1 } = e;
    return (0, r.jsx)("img", {
        className: o,
        src:
            null != n.id
                ? f.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || a),
                      size: 18,
                  })
                : _.ZP.getURL(null != (t = n.name) ? t : ""),
        alt: "",
    });
}
