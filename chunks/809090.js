n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(686546),
    c = n(271383),
    u = n(768581),
    d = n(895924),
    f = n(852802),
    _ = n(970952);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    var {
            section: t,
            channel: { guild_id: n },
            isSelected: a,
            width: p,
            height: m,
            className: b,
            selectable: y = !1,
            isSquircle: O,
            onFocus: v,
            onBlur: I,
            onMouseOver: T,
            onMouseLeave: S,
        } = e,
        A = E(e, [
            "section",
            "channel",
            "isSelected",
            "width",
            "height",
            "className",
            "selectable",
            "isSquircle",
            "onFocus",
            "onBlur",
            "onMouseOver",
            "onMouseLeave",
        ]);
    let [C, N] = i.useState(!1),
        R = i.useCallback(() => {
            N(!0), null == v || v();
        }, [v]),
        P = i.useCallback(() => {
            N(!1), null == I || I();
        }, [I]),
        D = i.useCallback(() => {
            N(!0), null == T || T();
        }, [T]),
        w = i.useCallback(() => {
            N(!1), null == S || S();
        }, [S]),
        L = (0, s.e7)([c.ZP], () => {
            var e, r, i, a;
            return (null == (r = t.application) || null == (e = r.bot) ? void 0 : e.id) != null
                ? c.ZP.getMember(n, null == (a = t.application) || null == (i = a.bot) ? void 0 : i.id)
                : null;
        }),
        x = i.useMemo(() => {
            var e;
            return t.type !== d.Qi.APPLICATION
                ? _
                : u.ZP.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: null == (e = t.application) ? void 0 : e.bot,
                      botIconFirst: !0,
                      guildMember: L,
                      size: p,
                  });
        }, [t, p, L]);
    return (0, r.jsx)(
        "div",
        g(h({}, A), {
            className: o()(f.wrapper, b, {
                [f.selectable]: y,
                [f.selected]: y && a,
            }),
            onFocus: R,
            onBlur: P,
            onMouseOver: D,
            onMouseLeave: w,
            children: (0, r.jsx)(l.ZP, {
                className: f.mask,
                mask: O || (y && (a || C)) ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
                width: p,
                height: m,
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: f.icon,
                    style: {
                        width: p,
                        height: m,
                    },
                    src: x,
                }),
            }),
        }),
    );
}
