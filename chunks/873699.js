t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(724458),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(668781),
    s = t(79390),
    u = t(222677),
    d = t(665906),
    c = t(496675),
    g = t(768581),
    f = t(176354),
    m = t(981631),
    h = t(388032);
function E(e, n) {
    let { reducedMotion: t } = l.useContext(a.AccessibilityPreferencesContext),
        g = (0, d.$R)(n),
        f = (0, r.e7)([c.Z], () => c.Z.can(m.Plq.MANAGE_MESSAGES, n) && g, [n, g]),
        E = e.reactions.reduce((e, n) => {
            var t;
            return (null === (t = n.count_details) || void 0 === t ? void 0 : t.vote) != null || null != e.find((e) => (null != e.id && e.id === n.emoji.id) || e.name === n.emoji.name) ? e : [...e, n.emoji];
        }, []),
        v = (t, i) => {
            t.shiftKey
                ? (0, u.$E)(n.id, e.id, i)
                : o.Z.show({
                      title: h.intl.string(h.t['73GqT0']),
                      body: h.intl.string(h.t.dmy5bm),
                      confirmText: h.intl.string(h.t.p89ACg),
                      cancelText: h.intl.string(h.t.gm1Ven),
                      onConfirm: () => {
                          (0, u.$E)(n.id, e.id, i);
                      }
                  });
        };
    return !f || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, s.eQ)(e))
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'remove-emoji-reactions',
              label: h.intl.string(h.t['zx/e4O']),
              color: 'danger',
              children: E.map((e) => {
                  var n, l;
                  return (0, i.jsx)(
                      a.MenuItem,
                      {
                          id: 'remove-emoji-reactions-'.concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
                          label: null == e.id ? e.name : ':'.concat(e.name, ':'),
                          action: (n) => v(n, e),
                          icon: (n) =>
                              (0, i.jsx)(I, {
                                  ...n,
                                  reducedMotionEnabled: t.enabled,
                                  emoji: e
                              }),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      null !== (l = e.name) && void 0 !== l ? l : e.id
                  );
              })
          });
}
function I(e) {
    var n;
    let { emoji: t, reducedMotionEnabled: l, className: r = '', isFocused: a = !1 } = e;
    return (0, i.jsx)('img', {
        className: r,
        src:
            null != t.id
                ? g.ZP.getEmojiURL({
                      id: t.id,
                      animated: t.animated && (!l || a),
                      size: 18
                  })
                : f.ZP.getURL(null !== (n = t.name) && void 0 !== n ? n : ''),
        alt: ''
    });
}
