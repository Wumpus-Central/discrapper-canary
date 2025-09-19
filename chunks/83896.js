n.d(t, { I: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(481060),
    c = n(287734),
    u = n(496675),
    d = n(944486),
    p = n(626135),
    h = n(906605),
    f = n(833858),
    m = n(866071),
    g = n(699263),
    b = n(223135),
    y = n(505905),
    _ = n(981631),
    C = n(388032),
    v = n(10359),
    x = n(254477);
function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { hangStatusActivity: t, channel: n, userId: l, setPopoutRef: E } = e,
        S = i.useRef(null),
        I = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId() === n.id),
        P = (0, o.e7)([u.Z], () => u.Z.can(_.Plq.CONNECT, n)),
        Z = (null == t ? void 0 : t.emoji) == null || (0, m.K)(t.emoji, n);
    i.useEffect(() => {
        null == E || E(null == S ? void 0 : S.current);
    }, [S, E]),
        i.useEffect(() => {
            p.default.track(
                _.rMx.VIEW_HANG_STATUS,
                O(
                    {
                        source: "HangStatusPopout",
                        other_user_id: l,
                    },
                    (0, g.Z)(n.id),
                ),
            );
        }, [n.guild_id, n.id, l]);
    let T = i.useCallback(() => {
            !I &&
                P &&
                (c.default.selectVoiceChannel(n.id),
                p.default.track(
                    _.rMx.HANG_STATUS_CTA_CLICKED,
                    j(O({ source: "HangStatusPopout" }, (0, g.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "join",
                    }),
                ));
        }, [I, P, n.id, l]),
        N = i.useCallback(() => {
            if (!I || !Z || null == t.state) return;
            let [e] = (0, f.Fe)(t.state);
            if (null != e) {
                if (e === y.tN.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, h._s)(t.details, t.emoji, !0);
                } else (0, h.Zx)(e, !0);
                p.default.track(
                    _.rMx.HANG_STATUS_CTA_CLICKED,
                    j(O({ source: "HangStatusPopout" }, (0, g.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "swipe",
                    }),
                );
            }
        }, [I, Z, t, n.id, l]);
    return (0, r.jsxs)("div", {
        ref: S,
        className: a()(x.popover, v.container),
        children: [
            (0, r.jsx)(b.Z, {
                size: 32,
                className: v.icon,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: v.statusText,
                children: (0, f.O8)(t),
            }),
            I
                ? (0, r.jsx)(s.ua7, {
                      text: Z ? void 0 : C.intl.string(C.t["0LMpW1"]),
                      children: (e) =>
                          (0, r.jsx)(
                              "div",
                              j(O({}, e), {
                                  children: (0, r.jsx)(s.zxk, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: C.intl.string(C.t["0eHzpq"]),
                                      onClick: N,
                                      disabled: !Z,
                                  }),
                              }),
                          ),
                  })
                : P &&
                  (0, r.jsx)(s.zxk, {
                      size: "sm",
                      variant: "secondary",
                      text: C.intl.string(C.t["B/dHXF"]),
                      onClick: T,
                  }),
        ],
    });
}
