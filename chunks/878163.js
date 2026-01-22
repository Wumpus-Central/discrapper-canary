n.d(t, { A: () => A }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(397927),
    l = n(386406),
    c = n(964486),
    u = n(15285),
    d = n(942405),
    f = n(430452),
    p = n(383501),
    _ = n(975571),
    h = n(652215),
    m = n(985018);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
    if (((a = y(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function O(e) {
    let { currentGame: t } = e,
        n = b(e, ["currentGame"]),
        [a, u] = i.useState(!1);
    return (
        (0, c.l0)(() => {
            a && l.A.clearPTTAdminWarning();
        }),
        (0, r.jsx)(
            s.aFV,
            E(
                {
                    size: "md",
                    title: m.intl.string(m.t.eotlXE),
                    subtitle: m.intl.formatToPlainString(m.t.Lw6KXV, { game: null == t ? void 0 : t.name }),
                    actions: [
                        {
                            text: m.intl.string(m.t.psXQHP),
                            onClick: () => {
                                n.onClose(),
                                    window.open(_.A.getArticleURL(h.MVz.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank");
                            },
                        },
                    ],
                    actionBarInput: (0, r.jsx)(o.Checkbox, {
                        checked: a,
                        onChange: (e) => u(e),
                        label: m.intl.string(m.t["5E9SB9"]),
                        labelType: "secondary",
                    }),
                },
                n,
            ),
        )
    );
}
function A() {
    let [e, t] = (0, a.yK)([u.Ay], () => [u.Ay.canShowAdminWarning, u.Ay.getVisibleGame()], []),
        n = (0, a.bG)([p.A], () => p.A.isConnected(), []),
        s = (0, a.bG)([f.A], () => f.A.getMode() === h.TBI.PUSH_TO_TALK, []),
        l = null != t && t.elevated && n && s && e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!(0, d.yA)(u.Ay))
                return (
                    l ? (c.current = (0, o.qfG)((e) => (0, r.jsx)(O, E({ currentGame: t }, e)))) : e(),
                    () => {
                        e();
                    }
                );
            function e() {
                null !== c.current && ((0, o.OoC)(c.current), (c.current = null));
            }
        }, [t, l]),
        null
    );
}
