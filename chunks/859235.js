r.d(n, {
    q: function () {
        return i;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(91192),
    c = r(481060),
    d = r(166459),
    f = r(951394),
    _ = r(585483),
    h = r(43085),
    p = r(981631),
    m = r(388032),
    g = r(728094);
function E(e) {
    e.stopPropagation();
}
function v(e, n) {
    let { id: r, channelId: i, className: s, children: o, actions: v, handleEditModal: I, keyboardModeEnabled: T, onKeyDown: b, draftType: y, size: S = 1 } = e,
        { onFocus: A, ...N } = (0, u.JA)(r),
        { handleFocus: C, handleBlur: R } = (0, h.b)(A),
        O = 0 === S,
        D = null != v,
        L = (e) => {
            if (!!T) {
                switch (e.which) {
                    case p.yXg.D:
                        e.preventDefault(), d.Z.remove(i, r, y);
                        return;
                    case p.yXg.E:
                        null != I && (e.preventDefault(), I(e));
                        return;
                    case p.yXg.BACKSPACE:
                        e.ctrlKey ? (e.preventDefault(), d.Z.clearAll(i, y)) : (e.preventDefault(), d.Z.remove(i, r, y));
                        return;
                    case p.yXg.ARROW_UP:
                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                        e.preventDefault(), _.S.dispatchToLastSubscribed(p.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == b || b(e);
            }
        };
    return (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)('li', {
            ...N,
            onFocus: C,
            onBlur: R,
            onKeyDown: L,
            className: l()(g.upload, s, { [g.sizeClip]: 2 === S }),
            ref: n,
            children: (0, a.jsxs)('div', {
                className: g.uploadContainer,
                children: [
                    o,
                    D
                        ? (0, a.jsx)('div', {
                              className: g.actionBarContainer,
                              children: (0, a.jsx)('div', {
                                  className: l()(g.actionBar, { [g.smallActionBar]: O }),
                                  onContextMenu: E,
                                  'aria-label': m.intl.string(m.t['8Lu3Dg']),
                                  children: (0, a.jsx)(f.ZP, {
                                      className: l()({ [g.miniPopover]: O }),
                                      children: v
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    });
}
!(function (e) {
    (e[(e.SMALL = 0)] = 'SMALL'), (e[(e.MEDIUM = 1)] = 'MEDIUM'), (e[(e.CLIP = 2)] = 'CLIP');
})(i || (i = {})),
    (n.Z = s.forwardRef(v));
