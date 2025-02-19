n.d(t, {
    Z: () => T,
    q: () => O
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(481060),
    c = n(166459),
    u = n(951394),
    d = n(585483),
    f = n(43085),
    p = n(981631),
    _ = n(388032),
    h = n(332412);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
function v(e, t) {
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var O = (function (e) {
    return (e[(e.SMALL = 0)] = 'SMALL'), (e[(e.MEDIUM = 1)] = 'MEDIUM'), (e[(e.CLIP = 2)] = 'CLIP'), e;
})({});
function S(e) {
    e.stopPropagation();
}
function I(e, t) {
    let { id: n, channelId: i, className: o, children: m, actions: E, handleEditModal: y, keyboardModeEnabled: O, onKeyDown: I, draftType: T, size: N = 1 } = e,
        A = (0, s.JA)(n),
        { onFocus: C } = A,
        R = b(A, ['onFocus']),
        { handleFocus: P, handleBlur: w } = (0, f.b)(C),
        D = 0 === N,
        x = null != E,
        L = (e) => {
            if (O) {
                switch (e.which) {
                    case p.yXg.D:
                        e.preventDefault(), c.Z.remove(i, n, T);
                        return;
                    case p.yXg.E:
                        null != y && (e.preventDefault(), y(e));
                        return;
                    case p.yXg.BACKSPACE:
                        e.ctrlKey ? (e.preventDefault(), c.Z.clearAll(i, T)) : (e.preventDefault(), c.Z.remove(i, n, T));
                        return;
                    case p.yXg.ARROW_UP:
                        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                        e.preventDefault(), d.S.dispatchToLastSubscribed(p.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == I || I(e);
            }
        };
    return (0, r.jsx)(l.tEY, {
        children: (0, r.jsx)(
            'li',
            v(g({}, R), {
                onFocus: P,
                onBlur: w,
                onKeyDown: L,
                className: a()(h.upload, o, { [h.sizeClip]: 2 === N }),
                ref: t,
                children: (0, r.jsxs)('div', {
                    className: h.uploadContainer,
                    children: [
                        m,
                        x
                            ? (0, r.jsx)('div', {
                                  className: h.actionBarContainer,
                                  children: (0, r.jsx)('div', {
                                      className: a()(h.actionBar, { [h.smallActionBar]: D }),
                                      onContextMenu: S,
                                      'aria-label': _.NW.string(_.t['8Lu3Dg']),
                                      children: (0, r.jsx)(u.ZP, {
                                          className: a()({ [h.miniPopover]: D }),
                                          children: E
                                      })
                                  })
                              })
                            : null
                    ]
                })
            })
        )
    });
}
let T = i.forwardRef(I);
