n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(159691),
    s = n(481060),
    l = n(923928),
    c = n(493773),
    u = n(594190),
    d = n(865066),
    f = n(131951),
    _ = n(19780),
    p = n(63063),
    h = n(981631),
    m = n(388032);
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
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    var { currentGame: t } = e,
        n = b(e, ["currentGame"]);
    let [a, u] = i.useState(!1);
    return (
        (0, c.zq)(() => {
            a && l.Z.clearPTTAdminWarning();
        }),
        (0, r.jsx)(
            o.u_l,
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
                                    window.open(p.Z.getArticleURL(h.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank");
                            },
                        },
                    ],
                    actionBarInput: (0, r.jsx)(s.Checkbox, {
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
function v() {
    let [e, t] = (0, a.Wu)([u.ZP], () => [u.ZP.canShowAdminWarning, u.ZP.getVisibleGame()], []),
        n = (0, a.e7)([_.Z], () => _.Z.isConnected(), []),
        o = (0, a.e7)([f.Z], () => f.Z.getMode() === h.pM4.PUSH_TO_TALK, []),
        l = null != t && t.elevated && n && o && e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!(0, d.s2)(u.ZP))
                return (
                    l ? (c.current = (0, s.h7j)((e) => (0, r.jsx)(O, E({ currentGame: t }, e)))) : e(),
                    () => {
                        e();
                    }
                );
            function e() {
                null !== c.current && ((0, s.Mr3)(c.current), (c.current = null));
            }
        }, [t, l]),
        null
    );
}
