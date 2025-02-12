n.d(t, {
    Z: () => v,
    q: () => m
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(481060),
    u = n(166459),
    c = n(951394),
    d = n(585483),
    f = n(43085),
    _ = n(981631),
    p = n(388032),
    h = n(774164),
    m = (function (e) {
        return (e[(e.SMALL = 0)] = 'SMALL'), (e[(e.MEDIUM = 1)] = 'MEDIUM'), (e[(e.CLIP = 2)] = 'CLIP'), e;
    })({});
function g(e) {
    e.stopPropagation();
}
function E(e, t) {
    let { id: n, channelId: r, className: a, children: m, actions: E, handleEditModal: v, keyboardModeEnabled: y, onKeyDown: I, draftType: T, size: b = 1 } = e,
        { onFocus: S, ...A } = (0, o.JA)(n),
        { handleFocus: N, handleBlur: C } = (0, f.b)(S),
        R = 0 === b,
        O = null != E,
        D = (e) => {
            if (y) {
                switch (e.which) {
                    case _.yXg.D:
                        e.preventDefault(), u.Z.remove(r, n, T);
                        return;
                    case _.yXg.E:
                        null != v && (e.preventDefault(), v(e));
                        return;
                    case _.yXg.BACKSPACE:
                        e.ctrlKey ? (e.preventDefault(), u.Z.clearAll(r, T)) : (e.preventDefault(), u.Z.remove(r, n, T));
                        return;
                    case _.yXg.ARROW_UP:
                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                        e.preventDefault(), d.S.dispatchToLastSubscribed(_.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == I || I(e);
            }
        };
    return (0, i.jsx)(l.tEY, {
        children: (0, i.jsx)('li', {
            ...A,
            onFocus: N,
            onBlur: C,
            onKeyDown: D,
            className: s()(h.upload, a, { [h.sizeClip]: 2 === b }),
            ref: t,
            children: (0, i.jsxs)('div', {
                className: h.uploadContainer,
                children: [
                    m,
                    O
                        ? (0, i.jsx)('div', {
                              className: h.actionBarContainer,
                              children: (0, i.jsx)('div', {
                                  className: s()(h.actionBar, { [h.smallActionBar]: R }),
                                  onContextMenu: g,
                                  'aria-label': p.intl.string(p.t['8Lu3Dg']),
                                  children: (0, i.jsx)(c.ZP, {
                                      className: s()({ [h.miniPopover]: R }),
                                      children: E
                                  })
                              })
                          })
                        : null
                ]
            })
        })
    });
}
let v = r.forwardRef(E);
