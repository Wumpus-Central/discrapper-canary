n.d(t, {
    Z: () => T,
    q: () => v,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(481060),
    c = n(166459),
    u = n(951394),
    d = n(585483),
    f = n(43085),
    p = n(981631),
    _ = n(388032),
    m = n(132045);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var v = (function (e) {
    return (
        (e[(e.SMALL = 0)] = "SMALL"),
        (e[(e.MEDIUM = 1)] = "MEDIUM"),
        (e[(e.CLIP = 2)] = "CLIP"),
        (e[(e.XXSMALL = 3)] = "XXSMALL"),
        (e[(e.XSMALL = 4)] = "XSMALL"),
        e
    );
})({});
function S(e) {
    e.stopPropagation();
}
function I(e, t) {
    let {
            id: n,
            channelId: i,
            className: a,
            children: h,
            actions: E,
            handleEditModal: O,
            keyboardModeEnabled: v,
            onKeyDown: I,
            draftType: T,
            size: A = 1,
        } = e,
        C = (0, s.JA)(n),
        { onFocus: N } = C,
        P = y(C, ["onFocus"]),
        { handleFocus: R, handleBlur: w } = (0, f.b)(N),
        D = 0 === A,
        x = null != E,
        L = (e) => {
            if (v) {
                switch (e.which) {
                    case p.yXg.D:
                        e.preventDefault(), c.Z.remove(i, n, T);
                        return;
                    case p.yXg.E:
                        null != O && (e.preventDefault(), O(e));
                        return;
                    case p.yXg.BACKSPACE:
                        e.ctrlKey
                            ? (e.preventDefault(), c.Z.clearAll(i, T))
                            : (e.preventDefault(), c.Z.remove(i, n, T));
                        return;
                    case p.yXg.ARROW_UP:
                        let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                        if (t) return;
                        e.preventDefault(), d.S.dispatchToLastSubscribed(p.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                }
                null == I || I(e);
            }
        };
    return (0, r.jsx)(l.tEY, {
        children: (0, r.jsx)(
            "li",
            b(g({}, P), {
                onFocus: R,
                onBlur: w,
                onKeyDown: L,
                className: o()(m.upload, a, { [m.sizeClip]: 2 === A }),
                ref: t,
                children: (0, r.jsxs)("div", {
                    className: m.uploadContainer,
                    children: [
                        h,
                        x
                            ? (0, r.jsx)("div", {
                                  className: m.actionBarContainer,
                                  children: (0, r.jsx)("div", {
                                      className: o()(m.actionBar, { [m.smallActionBar]: D }),
                                      onContextMenu: S,
                                      "aria-label": _.intl.string(_.t["8Lu3Du"]),
                                      children: (0, r.jsx)(u.ZP, {
                                          className: o()({ [m.miniPopover]: D }),
                                          children: E,
                                      }),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ),
    });
}
let T = i.forwardRef(I);
