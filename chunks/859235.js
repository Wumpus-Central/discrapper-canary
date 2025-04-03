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
    _ = n(981631),
    p = n(388032),
    h = n(743462);
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
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
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
function I(e) {
    e.stopPropagation();
}
function S(e, t) {
    let { id: n, channelId: i, className: o, children: m, actions: E, handleEditModal: v, keyboardModeEnabled: O, onKeyDown: S, draftType: T, size: N = 1 } = e,
        A = (0, s.JA)(n),
        { onFocus: C } = A,
        R = y(A, ['onFocus']),
        { handleFocus: P, handleBlur: w } = (0, f.b)(C),
        D = 0 === N,
        L = null != E,
        x = (e) => {
            if (O) {
                switch (e.which) {
                    case _.yXg.D:
                        e.preventDefault(), c.Z.remove(i, n, T);
                        return;
                    case _.yXg.E:
                        null != v && (e.preventDefault(), v(e));
                        return;
                    case _.yXg.BACKSPACE:
                        e.ctrlKey ? (e.preventDefault(), c.Z.clearAll(i, T)) : (e.preventDefault(), c.Z.remove(i, n, T));
                        return;
                    case _.yXg.ARROW_UP:
                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                        if (t) return;
                        e.preventDefault(), d.S.dispatchToLastSubscribed(_.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == S || S(e);
            }
        };
    return (0, r.jsx)(l.tEY, {
        children: (0, r.jsx)(
            'li',
            b(g({}, R), {
                onFocus: P,
                onBlur: w,
                onKeyDown: x,
                className: a()(h.upload, o, { [h.sizeClip]: 2 === N }),
                ref: t,
                children: (0, r.jsxs)('div', {
                    className: h.uploadContainer,
                    children: [
                        m,
                        L
                            ? (0, r.jsx)('div', {
                                  className: h.actionBarContainer,
                                  children: (0, r.jsx)('div', {
                                      className: a()(h.actionBar, { [h.smallActionBar]: D }),
                                      onContextMenu: I,
                                      'aria-label': p.NW.string(p.t['8Lu3Dg']),
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
let T = i.forwardRef(S);
