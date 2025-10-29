n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(273352),
    s = n(481060),
    l = n(923928),
    c = n(594190),
    u = n(865066),
    d = n(131951),
    f = n(19780),
    _ = n(63063),
    p = n(981631),
    h = n(388032);
function m(e, t, n) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E() {
    let [e, t] = (0, a.Wu)([c.ZP], () => [c.ZP.canShowAdminWarning, c.ZP.getVisibleGame()], []),
        n = (0, a.e7)([f.Z], () => f.Z.isConnected(), []),
        m = (0, a.e7)([d.Z], () => d.Z.getMode() === p.pM4.PUSH_TO_TALK, []),
        E = null != t && t.elevated && n && m && e,
        b = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!(0, u.s2)(c.ZP))
                return (
                    E
                        ? (b.current = (0, s.h7j)((e) =>
                              (0, r.jsx)(
                                  o.default,
                                  g(
                                      {
                                          title: h.intl.string(h.t.eotlXE),
                                          body: h.intl.formatToPlainString(h.t.Lw6KXV, {
                                              game: null == t ? void 0 : t.name,
                                          }),
                                          secondaryConfirmText: h.intl.string(h.t["5E9SB9"]),
                                          onConfirmSecondary: () => l.Z.clearPTTAdminWarning(),
                                          onConfirm: () =>
                                              window.open(
                                                  _.Z.getArticleURL(p.BhN.PUSH_TO_TALK_ADMINISTRATOR_MODE),
                                                  "_blank",
                                              ),
                                          confirmText: h.intl.string(h.t.psXQHP),
                                      },
                                      e,
                                  ),
                              ),
                          ))
                        : e(),
                    () => {
                        e();
                    }
                );
            function e() {
                null !== b.current && ((0, s.Mr3)(b.current), (b.current = null));
            }
        }, [t, E]),
        null
    );
}
