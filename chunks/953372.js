n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(750881),
    u = n(545957),
    c = n(699516),
    d = n(406368),
    f = n(584973),
    _ = n(303524),
    p = n(170187),
    h = n(937008),
    m = n(556638),
    g = n(748442);
function E(e) {
    let { user: t, activities: n, applicationStream: r, emojiClassName: E, textClassName: v, animate: y = !0, hasQuest: I = !1, hideEmoji: b = !1, hideTooltip: T = !1, fullWidth: S = !1 } = e,
        A = 'live-activity-status-web',
        { blockeeExperimentEnabled: N, blockerExperimentEnabled: C } = (0, l.NR)(A);
    (0, u.Z)(null == t ? void 0 : t.id, A);
    let {
            activity: R,
            text: O,
            tooltip: D,
            customStatus: x
        } = (0, d.Z)({
            activities: n,
            stream: N && (null == r ? void 0 : r.discoverable) === !1 ? null : r
        }),
        L = (0, s.e7)([c.Z], () => c.Z.isBlocked(null == t ? void 0 : t.id));
    if ((C && L) || (null == O && null == x)) return null;
    let P = (null == x ? void 0 : x.text) != null && !S,
        w = S ? 'sm' : 'xs',
        M = () =>
            null == O
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(h.Z, {
                              activity: R,
                              stream: r,
                              tooltip: P && !T ? D : void 0,
                              className: S ? g.fullWidth : void 0
                          }),
                          !P &&
                              (0, i.jsx)(p.Z, {
                                  variant: 'text-'.concat(w, '/medium'),
                                  className: v,
                                  children: O
                              })
                      ]
                  }),
        k = () =>
            null == x
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != x.emoji &&
                              !b &&
                              (0, i.jsx)(f.Z, {
                                  emoji: x.emoji,
                                  animate: y,
                                  hideTooltip: T,
                                  className: a()(S ? g.fullWidth : void 0, E)
                              }),
                          null != x.text &&
                              (0, i.jsx)(p.Z, {
                                  variant: 'text-'.concat(w, '/medium'),
                                  className: v,
                                  children: x.text
                              })
                      ]
                  });
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            M(),
            (0, i.jsx)(o.Text, {
                variant: 'text-'.concat(w, '/normal'),
                className: a()(g.text, g.dot, v),
                children: m.l
            }),
            k(),
            I && (0, i.jsx)(_.Z, {})
        ]
    });
}
