r.d(n, {
    q: function () {
        return i;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(91192),
    c = r(481060),
    d = r(166459),
    f = r(951394),
    p = r(585483),
    h = r(43085),
    _ = r(981631),
    m = r(388032),
    g = r(728094);
function E(e) {
    e.stopPropagation();
}
function v(e, n) {
    let { id: r, channelId: i, className: o, children: s, actions: v, handleEditModal: y, keyboardModeEnabled: b, onKeyDown: I, draftType: T, size: S = 1 } = e,
        { onFocus: A, ...C } = (0, u.JA)(r),
        { handleFocus: N, handleBlur: R } = (0, h.b)(A),
        O = 0 === S,
        D = null != v,
        L = (e) => {
            if (!!b) {
                switch (e.which) {
                    case _.yXg.D:
                        e.preventDefault(), d.Z.remove(i, r, T);
                        return;
                    case _.yXg.E:
                        null != y && (e.preventDefault(), y(e));
                        return;
                    case _.yXg.BACKSPACE:
                        e.ctrlKey ? (e.preventDefault(), d.Z.clearAll(i, T)) : (e.preventDefault(), d.Z.remove(i, r, T));
                        return;
                    case _.yXg.ARROW_UP:
                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                        e.preventDefault(), p.S.dispatchToLastSubscribed(_.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == I || I(e);
            }
        };
    return (0, a.jsx)(c.FocusRing, {
        children: (0, a.jsx)('li', {
            ...C,
            onFocus: N,
            onBlur: R,
            onKeyDown: L,
            className: l()(g.upload, o, { [g.sizeClip]: 2 === S }),
            ref: n,
            children: (0, a.jsxs)('div', {
                className: g.uploadContainer,
                children: [
                    s,
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
    (n.Z = o.forwardRef(v));
