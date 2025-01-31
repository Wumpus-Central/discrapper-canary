n.d(t, { Z: () => E }), n(724458), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    s = n(481060),
    r = n(668781),
    o = n(79390),
    d = n(222677),
    c = n(665906),
    u = n(496675),
    g = n(768581),
    f = n(176354),
    m = n(981631),
    h = n(388032);
function E(e, t) {
    let { reducedMotion: n } = l.useContext(s.Sfi),
        g = (0, c.$R)(t),
        f = (0, a.e7)([u.Z], () => u.Z.can(m.Plq.MANAGE_MESSAGES, t) && g, [t, g]),
        E = e.reactions.reduce((e, t) => {
            var n;
            return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find((e) => (null != e.id && e.id === t.emoji.id) || e.name === t.emoji.name) ? e : [...e, t.emoji];
        }, []),
        Z = (n, i) => {
            n.shiftKey
                ? (0, d.$E)(t.id, e.id, i)
                : r.Z.show({
                      title: h.intl.string(h.t['73GqT0']),
                      body: h.intl.string(h.t.dmy5bm),
                      confirmText: h.intl.string(h.t.p89ACg),
                      cancelText: h.intl.string(h.t.gm1Ven),
                      onConfirm: () => {
                          (0, d.$E)(t.id, e.id, i);
                      }
                  });
        };
    return !f || null == e.reactions || 0 === e.reactions.length || (e.isPoll() && !(0, o.eQ)(e))
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'remove-emoji-reactions',
              label: h.intl.string(h.t['zx/e4O']),
              color: 'danger',
              children: E.map((e) => {
                  var t, l;
                  return (0, i.jsx)(
                      s.sNh,
                      {
                          id: 'remove-emoji-reactions-'.concat(null !== (t = e.name) && void 0 !== t ? t : e.id),
                          label: null == e.id ? e.name : ':'.concat(e.name, ':'),
                          action: (t) => Z(t, e),
                          icon: (t) =>
                              (0, i.jsx)(v, {
                                  ...t,
                                  reducedMotionEnabled: n.enabled,
                                  emoji: e
                              }),
                          dontCloseOnActionIfHoldingShiftKey: !0
                      },
                      null !== (l = e.name) && void 0 !== l ? l : e.id
                  );
              })
          });
}
function v(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: l, className: a = '', isFocused: s = !1 } = e;
    return (0, i.jsx)('img', {
        className: a,
        src:
            null != n.id
                ? g.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!l || s),
                      size: 18
                  })
                : f.ZP.getURL(null !== (t = n.name) && void 0 !== t ? t : ''),
        alt: ''
    });
}
