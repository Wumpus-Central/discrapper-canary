n.d(t, { I: () => P }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(399606),
    s = n(681715),
    c = n(481060),
    u = n(287734),
    d = n(496675),
    p = n(944486),
    f = n(626135),
    h = n(906605),
    m = n(833858),
    g = n(866071),
    b = n(699263),
    y = n(797156),
    C = n(223135),
    v = n(505905),
    x = n(981631),
    O = n(388032),
    E = n(527019),
    j = n(770966);
function S(e) {
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
function _(e, t) {
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
function P(e) {
    let { hangStatusActivity: t, channel: n, userId: l, setPopoutRef: P } = e,
        I = r.useRef(null),
        Z = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId() === n.id),
        T = (0, o.e7)([d.Z], () => d.Z.can(x.Plq.CONNECT, n)),
        N = (null == t ? void 0 : t.emoji) == null || (0, g.K)(t.emoji, n);
    r.useEffect(() => {
        null == P || P(null == I ? void 0 : I.current);
    }, [I, P]),
        r.useEffect(() => {
            f.default.track(
                x.rMx.VIEW_HANG_STATUS,
                S(
                    {
                        source: "HangStatusPopout",
                        other_user_id: l,
                    },
                    (0, b.Z)(n.id),
                ),
            );
        }, [n.guild_id, n.id, l]);
    let A = r.useCallback(() => {
            !Z &&
                T &&
                (u.default.selectVoiceChannel(n.id),
                f.default.track(
                    x.rMx.HANG_STATUS_CTA_CLICKED,
                    _(S({ source: "HangStatusPopout" }, (0, b.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "join",
                    }),
                ));
        }, [Z, T, n.id, l]),
        w = r.useCallback(() => {
            if (!Z || !N || null == t.state) return;
            let [e] = (0, y.F)(l, t.state);
            if (null != e) {
                if (e === v.tN.CUSTOM) {
                    if (null == t.details || null == t.emoji) return;
                    (0, h._s)(t.details, t.emoji, !0);
                } else (0, h.Zx)(e, !0);
                f.default.track(
                    x.rMx.HANG_STATUS_CTA_CLICKED,
                    _(S({ source: "HangStatusPopout" }, (0, b.Z)(n.id)), {
                        other_user_id: l,
                        cta_type: "swipe",
                    }),
                );
            }
        }, [Z, N, t, n.id, l]);
    return (0, i.jsxs)("div", {
        ref: I,
        className: a()(j.popover, E.container),
        children: [
            (0, i.jsx)(C.Z, {
                userId: l,
                size: 32,
                className: E.icon,
                hangStatusActivity: t,
            }),
            (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                className: E.statusText,
                children: (0, m.O8)(l, t),
            }),
            Z
                ? (0, i.jsx)(s.u, {
                      text: N ? void 0 : O.intl.string(O.t["0LMpW+"]),
                      children: (0, i.jsx)("div", {
                          children: (0, i.jsx)(c.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: O.intl.string(O.t["0eHzpm"]),
                              onClick: w,
                              disabled: !N,
                          }),
                      }),
                  })
                : T &&
                  (0, i.jsx)(c.Button, {
                      size: "sm",
                      variant: "secondary",
                      text: O.intl.string(O.t["B/dHXL"]),
                      onClick: A,
                  }),
        ],
    });
}
