l.d(t, { default: () => S });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    r = l(189213),
    s = l(476713),
    u = l(215026),
    d = l(177953),
    c = l(834730),
    o = l(289873),
    x = l(691885),
    h = l(103557),
    m = l(548118),
    f = l(245179),
    b = l(639519),
    v = l(952644),
    j = l(248675),
    p = l(375708),
    g = l(699900);
let y = { shield: s.l, hammer: u.w, group: d.n };
function C(e) {
    let { error: t } = e;
    return null != t
        ? (0, n.jsx)("div", {
              className: g.rf,
              children: (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: t }),
          })
        : (0, n.jsx)("div", { className: g.Lq, children: (0, n.jsx)(o.y, {}) });
}
function k(e) {
    let { intro: t, error: l } = e;
    return null == t
        ? (0, n.jsx)(C, { error: l })
        : (0, n.jsxs)("div", {
              className: g.rf,
              children: [
                  (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-default", children: t.lead }),
                  t.points.map((e, t) => {
                      let l = y[e.icon];
                      return (0, n.jsxs)(
                          "div",
                          {
                              className: g.f_,
                              children: [
                                  (0, n.jsx)(l, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: "currentColor",
                                      className: g.sl,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: g.zx,
                                      children: [
                                          (0, n.jsx)(c.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              children: e.title,
                                          }),
                                          null != e.subtext && "" !== e.subtext
                                              ? (0, n.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.subtext,
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
              ],
          });
}
function E(e) {
    let { guilds: t, value: l, hint: i, disabled: r, onChange: s } = e,
        u = p.intl.string(j.default.lHT5Dp),
        d = a.useMemo(
            () => [
                {
                    label: u,
                    options: t.map((e) => ({
                        id: `template-wizard-${e.id}`,
                        value: e.id,
                        label: e.name,
                        leading: (0, n.jsx)(m.Ay, { guild: e, size: m.Ay.Sizes.MINI, active: !0 }),
                    })),
                },
            ],
            [t, u],
        );
    return 0 === t.length
        ? (0, n.jsx)("div", {
              className: g.rf,
              children: (0, n.jsx)(c.E, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: p.intl.string(j.default["6ys5dn"]),
              }),
          })
        : (0, n.jsxs)("div", {
              className: g.rf,
              children: [
                  (0, n.jsx)(x.l, {
                      selectionMode: "single",
                      label: u,
                      options: d,
                      value: l ?? void 0,
                      onSelectionChange: s,
                      disabled: r,
                  }),
                  (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: i }),
              ],
          });
}
function N(e) {
    let { question: t, answer: l, disabled: a, error: i, onChange: r } = e;
    return null == t
        ? (0, n.jsx)(C, { error: i })
        : (0, n.jsxs)("div", {
              className: g.rf,
              children: [
                  (0, n.jsx)(h.f, {
                      label: t.title,
                      hideLabel: !0,
                      placeholder: t.placeholder,
                      rows: 8,
                      autosize: !0,
                      autoFocus: !0,
                      value: l,
                      error: i,
                      disabled: a,
                      onChange: r,
                  }),
                  null != t.hint
                      ? (0, n.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: t.hint })
                      : null,
              ],
          });
}
function S(e) {
    let {
            template: t,
            guildId: l,
            eligibleGuilds: s,
            onStart: u,
            onSubmit: d,
            onCancel: c,
            onSkip: o,
            transitionState: x,
            onClose: h,
        } = e,
        [m, g] = a.useState(0),
        [y, C] = a.useState(() => (s.some((e) => e.id === l) ? l : (s[0]?.id ?? null))),
        [S, w] = a.useState(null),
        [M, z] = a.useState([]),
        [A, F] = a.useState(!1),
        [G, _] = a.useState(null),
        L = a.useRef(null),
        T = a.useRef(!1);
    a.useEffect(() => {
        if (null == y) return;
        let e = !1;
        return (
            u(y)
                .then((t) => {
                    ((L.current = t), e ? c(t) : w(t));
                })
                .catch((t) => {
                    e || _((0, b.mG)(t));
                }),
            () => {
                e = !0;
            }
        );
    }, []);
    let q = (0, i.bG)([f.Ay], () => (null == S ? null : (0, v.Wn)(f.Ay.getMessages(S))), [S]),
        D = (0, i.bG)([f.Ay], () => null != S && null != f.Ay.getFinishedAt(S), [S]) && null == q;
    a.useEffect(() => {
        D && null != S && ((T.current = !0), o(S), h().catch(() => void 0));
    }, [h, o, S, D]);
    let I = (0, v.S3)(q),
        R = (0, v.SF)(q),
        W = (0, v.b5)(q),
        H = (0, v.h_)(W, (0, v.sf)(l, s)),
        P = H[Math.min(m, H.length - 1)],
        X = H.length,
        $ = m === X - 1,
        B = "object" == typeof P ? W[P.index] : void 0,
        J = "object" == typeof P ? (M[P.index] ?? "") : "",
        K = a.useCallback(async () => {
            (T.current || null == L.current || c(L.current), await h());
        }, [c, h]),
        O = a.useCallback(() => g((e) => Math.max(0, e - 1)), []),
        Q = a.useCallback(() => g((e) => Math.min(X - 1, e + 1)), [X]),
        U = a.useCallback((e, t) => {
            (z((l) => {
                let n = [...l];
                return ((n[e] = t), n);
            }),
                _(null));
        }, []),
        V = a.useCallback(async () => {
            if (!A && null != S && null != y && (0, v.n0)(W, M)) {
                (F(!0), _(null));
                try {
                    (await d(S, y, (0, v.kt)(W, M)), (T.current = !0), await h());
                } catch (e) {
                    (_((0, b.mG)(e)), F(!1));
                }
            }
        }, [M, h, d, y, S, W, A]),
        Y = { text: p.intl.string(p.t["13/7kX"]), variant: "secondary", onClick: O, disabled: A },
        Z = { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: K, disabled: A },
        ee = B?.optional === !0 && "" === J.trim(),
        et = {
            text: p.intl.string(ee ? p.t["5Wxrcd"] : p.t.PDTjLN),
            variant: "primary",
            onClick: Q,
            disabled: ("server" === P && null == y) || ("object" == typeof P && !(0, v.Fl)(B, J)),
        },
        el = {
            text: p.intl.string(j.default["5iv8MF"]),
            variant: "primary",
            onClick: V,
            disabled: null == S || null == y || !(0, v.n0)(W, M),
            loading: A,
        },
        en = "about" === P ? t.name : "server" === P ? R.title : (B?.title ?? t.name);
    return (0, n.jsxs)(r.a, {
        transitionState: x,
        onClose: K,
        title: en,
        size: "md",
        actions: [0 === m ? Z : Y, $ ? el : et],
        children: [
            "about" === P ? (0, n.jsx)(k, { intro: I, error: G }) : null,
            "server" === P ? (0, n.jsx)(E, { guilds: s, value: y, hint: R.hint, disabled: A, onChange: C }) : null,
            "object" == typeof P
                ? (0, n.jsx)(
                      N,
                      { question: B, answer: J, disabled: A, error: G, onChange: (e) => U(P.index, e) },
                      P.index,
                  )
                : null,
        ],
    });
}
