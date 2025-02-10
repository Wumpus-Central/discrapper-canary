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
    g = n(694978);
function E(e) {
    let { user: t, activities: n, applicationStream: r, emojiClassName: E, textClassName: v, animate: y = !0, hasQuest: I = !1, hideEmoji: T = !1, hideTooltip: b = !1, fullWidth: S = !1 } = e,
        A = 'live-activity-status-web',
        { blockeeExperimentEnabled: N, blockerExperimentEnabled: C } = (0, l.NR)(A);
    (0, u.Z)(null == t ? void 0 : t.id, A);
    let {
            activity: R,
            text: O,
            tooltip: D,
            customStatus: L
        } = (0, d.Z)({
            activities: n,
            stream: N && (null == r ? void 0 : r.discoverable) === !1 ? null : r
        }),
        x = (0, s.e7)([c.Z], () => c.Z.isBlocked(null == t ? void 0 : t.id));
    if ((C && x) || (null == O && null == L)) return null;
    let w = (null == L ? void 0 : L.text) != null && !S,
        P = S ? 'sm' : 'xs',
        M = () =>
            null == O || ((null == t ? void 0 : t.bot) && (null == L ? void 0 : L.text) != null)
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (null == t ? void 0 : t.bot) !== !0 &&
                              (0, i.jsx)(h.Z, {
                                  activity: R,
                                  stream: r,
                                  tooltip: w && !b ? D : void 0,
                                  className: S ? g.fullWidth : void 0
                              }),
                          !w &&
                              (0, i.jsx)(p.Z, {
                                  variant: 'text-'.concat(P, '/medium'),
                                  className: v,
                                  children: O
                              })
                      ]
                  }),
        k = () =>
            null == L
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != L.emoji &&
                              !T &&
                              (0, i.jsx)(f.Z, {
                                  emoji: L.emoji,
                                  animate: y,
                                  hideTooltip: b,
                                  className: a()(S ? g.fullWidth : void 0, E)
                              }),
                          null != L.text &&
                              (0, i.jsx)(p.Z, {
                                  variant: 'text-'.concat(P, '/medium'),
                                  className: v,
                                  children: L.text
                              })
                      ]
                  });
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            M(),
            (0, i.jsx)(o.Text, {
                variant: 'text-'.concat(P, '/normal'),
                className: a()(g.text, g.dot, v),
                children: m.l
            }),
            k(),
            I && (0, i.jsx)(_.Z, {})
        ]
    });
}
