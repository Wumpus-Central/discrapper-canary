n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(573435),
    c = n(696451),
    u = n(486020),
    d = n(392054),
    f = n(104075),
    p = n(532406);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function y(e) {
    let {
            section: t,
            channel: { guild_id: n },
            isSelected: a,
            width: _,
            height: m,
            className: b,
            selectable: y = !1,
            isSquircle: O,
            onFocus: A,
            onBlur: v,
            onMouseOver: S,
            onMouseLeave: I,
        } = e,
        T = E(e, [
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
        ]),
        [C, N] = i.useState(!1),
        R = i.useCallback(() => {
            N(!0), null == A || A();
        }, [A]),
        w = i.useCallback(() => {
            N(!1), null == v || v();
        }, [v]),
        P = i.useCallback(() => {
            N(!0), null == S || S();
        }, [S]),
        D = i.useCallback(() => {
            N(!1), null == I || I();
        }, [I]),
        x = (0, o.bG)([c.Ay], () => {
            var e, r, i, a;
            return (null == (r = t.application) || null == (e = r.bot) ? void 0 : e.id) != null
                ? c.Ay.getMember(n, null == (a = t.application) || null == (i = a.bot) ? void 0 : i.id)
                : null;
        }),
        L = i.useMemo(() => {
            var e;
            return t.type !== d.Hf.APPLICATION
                ? p
                : u.Ay.getApplicationIconURL({
                      id: t.id,
                      icon: t.icon,
                      bot: null == (e = t.application) ? void 0 : e.bot,
                      botIconFirst: !0,
                      guildMember: x,
                      size: _,
                  });
        }, [t, _, x]);
    return (0, r.jsx)(
        "div",
        g(h({}, T), {
            className: s()(f.iE, b, {
                [f.rb]: y,
                [f.wH]: y && a,
            }),
            onFocus: R,
            onBlur: w,
            onMouseOver: P,
            onMouseLeave: D,
            children: (0, r.jsx)(l.Ay, {
                className: f.dK,
                mask: O || (y && (a || C)) ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
                width: _,
                height: m,
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: f.Kk,
                    style: {
                        width: _,
                        height: m,
                    },
                    src: L,
                }),
            }),
        }),
    );
}
