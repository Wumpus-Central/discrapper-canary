n.d(t, { I: () => S }), n(388685);
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
    f = n(906605),
    h = n(833858),
    m = n(866071),
    g = n(699263),
    b = n(797156),
    _ = n(223135),
    y = n(505905),
    C = n(981631),
    v = n(388032),
    O = n(10359),
    x = n(254477);
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
function S(e) {
    let { hangStatusActivity: t, channel: n, userId: l, setPopoutRef: S } = e,
        P = i.useRef(null),
        I = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId() === n.id),
        Z = (0, o.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, n)),
        T = (null == t ? void 0 : t.emoji) == null || (0, m.K)(t.emoji, n);
    i.useEffect(() => {
        null == S || S(null == P ? void 0 : P.current);
    }, [P, S]),
        i.useEffect(() => {
            p.default.track(
                C.rMx.VIEW_HANG_STATUS,
                E(
                    {
                        source: "HangStatusPopout",
                        other_user_id: l,
                    },
                    (0, g.Z)(n.id),
                ),
            );
        }, [n.guild_id, n.id, l]);
    let N = i.useCallback(() => {
            !I &&
                Z &&
                (c.default.selectVoiceChannel(n.id),
                p.default.track(
                    C.rMx.HANG_STATUS_CTA_CLICKED,
                    j(E({ source: "HangStatusPopout" }, (0, g.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "join",
                    }),
                ));
        }, [I, Z, n.id, l]),
        A = i.useCallback(() => {
            if (!I || !T || null == t.state) return;
            let [e] = (0, b.F)(l, t.state);
            if (null != e) {
                if (e === y.tN.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, f._s)(t.details, t.emoji, !0);
                } else (0, f.Zx)(e, !0);
                p.default.track(
                    C.rMx.HANG_STATUS_CTA_CLICKED,
                    j(E({ source: "HangStatusPopout" }, (0, g.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "swipe",
                    }),
                );
            }
        }, [I, T, t, n.id, l]);
    return (0, r.jsxs)("div", {
        ref: P,
        className: a()(x.popover, O.container),
        children: [
            (0, r.jsx)(_.Z, {
                userId: l,
                size: 32,
                className: O.icon,
                hangStatusActivity: t,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: O.statusText,
                children: (0, h.O8)(l, t),
            }),
            I
                ? (0, r.jsx)(s.aML, {
                      "data-migration-pending": !0,
                      text: T ? void 0 : v.intl.string(v.t["0LMpW+"]),
                      children: (e) =>
                          (0, r.jsx)(
                              "div",
                              j(E({}, e), {
                                  children: (0, r.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: v.intl.string(v.t["0eHzpm"]),
                                      onClick: A,
                                      disabled: !T,
                                  }),
                              }),
                          ),
                  })
                : Z &&
                  (0, r.jsx)(s.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: v.intl.string(v.t["B/dHXL"]),
                      onClick: N,
                  }),
        ],
    });
}
