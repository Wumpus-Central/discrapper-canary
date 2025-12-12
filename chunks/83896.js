n.d(t, { I: () => _ }), n(388685);
var i = n(54381),
    r = n(473749),
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
    C = n(223135),
    y = n(505905),
    v = n(981631),
    O = n(388032),
    x = n(527019),
    E = n(770966);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let { hangStatusActivity: t, channel: n, userId: l, setPopoutRef: _ } = e,
        P = r.useRef(null),
        I = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId() === n.id),
        Z = (0, o.e7)([u.Z], () => u.Z.can(v.Plq.CONNECT, n)),
        T = (null == t ? void 0 : t.emoji) == null || (0, m.K)(t.emoji, n);
    r.useEffect(() => {
        null == _ || _(null == P ? void 0 : P.current);
    }, [P, _]),
        r.useEffect(() => {
            p.default.track(
                v.rMx.VIEW_HANG_STATUS,
                j(
                    {
                        source: "HangStatusPopout",
                        other_user_id: l,
                    },
                    (0, g.Z)(n.id),
                ),
            );
        }, [n.guild_id, n.id, l]);
    let N = r.useCallback(() => {
            !I &&
                Z &&
                (c.default.selectVoiceChannel(n.id),
                p.default.track(
                    v.rMx.HANG_STATUS_CTA_CLICKED,
                    S(j({ source: "HangStatusPopout" }, (0, g.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "join",
                    }),
                ));
        }, [I, Z, n.id, l]),
        A = r.useCallback(() => {
            if (!I || !T || null == t.state) return;
            let [e] = (0, b.F)(l, t.state);
            if (null != e) {
                if (e === y.tN.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, f._s)(t.details, t.emoji, !0);
                } else (0, f.Zx)(e, !0);
                p.default.track(
                    v.rMx.HANG_STATUS_CTA_CLICKED,
                    S(j({ source: "HangStatusPopout" }, (0, g.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "swipe",
                    }),
                );
            }
        }, [I, T, t, n.id, l]);
    return (0, i.jsxs)("div", {
        ref: P,
        className: a()(E.popover, x.container),
        children: [
            (0, i.jsx)(C.Z, {
                userId: l,
                size: 32,
                className: x.icon,
                hangStatusActivity: t,
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-md/medium",
                className: x.statusText,
                children: (0, h.O8)(l, t),
            }),
            I
                ? (0, i.jsx)(s.aML, {
                      "data-migration-pending": !0,
                      text: T ? void 0 : O.intl.string(O.t["0LMpW+"]),
                      children: (e) =>
                          (0, i.jsx)(
                              "div",
                              S(j({}, e), {
                                  children: (0, i.jsx)(s.Button, {
                                      size: "sm",
                                      variant: "secondary",
                                      text: O.intl.string(O.t["0eHzpm"]),
                                      onClick: A,
                                      disabled: !T,
                                  }),
                              }),
                          ),
                  })
                : Z &&
                  (0, i.jsx)(s.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: O.intl.string(O.t["B/dHXL"]),
                      onClick: N,
                  }),
        ],
    });
}
