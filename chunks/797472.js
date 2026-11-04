i.d(n, { default: () => M });
var e = i(477900),
    a = i(582128),
    l = i(855986),
    s = i(189213),
    r = i(503698),
    u = i.n(r),
    o = i(559106),
    c = i(802926);
function d(t) {
    let { data: n, disabled: i } = t,
        { content: a, className: l, onClick: s, disabled: r } = n;
    return (0, e.jsx)(o.vN, {
        children: (0, e.jsx)("button", {
            type: "button",
            className: u()(c.A, l),
            onClick: s,
            disabled: i || r,
            children: a,
        }),
    });
}
let m = function (t) {
    let { buttons: n, disabled: i, className: a } = t;
    return (0, e.jsx)("div", {
        role: "group",
        className: u()(c.O, a),
        children: n.map((t, n) => (0, e.jsx)(d, { data: t, disabled: i }, n)),
    });
};
var h = i(834730),
    g = i(858899),
    D = i(150934),
    b = i(331322),
    C = i(534514),
    x = i(103557),
    A = i(262577),
    p = i(964486),
    N = i(688810),
    _ = i(504049),
    f = i(226698),
    y = i(734057),
    O = i(287809),
    T = i(129230),
    j = i(562153),
    v = i(200700),
    I = i(652215),
    k = i(792996),
    E = i(307805),
    S = i(456439);
function U(t) {
    return {
        value: t,
        get label() {
            return (0, v.getFriendlyDurationString)(t);
        },
    };
}
let R = [
    U(v.DisableCommunicationDuration.DURATION_60_SEC),
    U(v.DisableCommunicationDuration.DURATION_5_MIN),
    U(v.DisableCommunicationDuration.DURATION_10_MIN),
    U(v.DisableCommunicationDuration.DURATION_1_HOUR),
    U(v.DisableCommunicationDuration.DURATION_1_DAY),
    U(v.DisableCommunicationDuration.DURATION_1_WEEK),
];
function M(t) {
    let { guildId: n, userId: i, anaylticsLocations: r, transitionState: u, onClose: o, modReportId: c } = t,
        { analyticsLocations: d } = (0, N.Ay)(),
        U = r?.[0] ?? d?.[0] ?? null,
        M = (0, l.bG)([O.default], () => O.default.getUser(i), [i]),
        [w, P] = a.useState(v.DisableCommunicationDuration.DURATION_60_SEC),
        [B, G] = a.useState(""),
        [H, K] = a.useState(!1),
        [L, F] = a.useState(!1),
        W = (0, l.bG)([y.A], () => y.A.getChannel(c)?.isArchivedThread()),
        X = (0, _.$9)(n, { location: U, targetUserId: i }),
        Z = a.useCallback(async () => {
            if (null != M) {
                K(!0);
                try {
                    (await A.A.setCommunicationDisabledDuration(n, i, w, B, U, c),
                        L && null != c && f.A.resolveFlag(c),
                        X(_.Nj.TIMEOUT),
                        (0, g.P0)({
                            text: k.intl.formatToPlainString(k.t.O9C3Nt, { user: j.Ay.getName(n, null, M) }),
                            variant: "success",
                        }),
                        o());
                } catch (t) {
                    (0, g.P0)({ text: k.intl.string(k.t.epyCuh), variant: "critical" });
                } finally {
                    K(!1);
                }
            }
        }, [n, M, i, o, w, B, U, X, c, L]);
    return ((0, p.Ay)(() => {
        null != M && T.default.track(I.HAw.OPEN_MODAL, { type: v.aZ, guild_id: n, other_user_id: M.id });
    }),
    a.useEffect(() => {
        (null == M || null == n) && o();
    }, [n, M, o]),
    null == M || null == n)
        ? null
        : (0, e.jsx)(s.a, {
              transitionState: u,
              title: k.intl.formatToPlainString(k.t.OhsOy0, { user: j.Ay.getName(n, null, M) }),
              subtitle: k.intl.format(k.t.Ns83GT, { helpdeskArticle: v.MO }),
              actions: [
                  { text: k.intl.string(k.t["ETE/oC"]), onClick: o, variant: "secondary" },
                  { text: k.intl.string(k.t.MlPTIi), onClick: Z, loading: H },
              ],
              actionBarInput:
                  null == c || W
                      ? void 0
                      : (0, e.jsx)(D.S, {
                            checked: L,
                            onChange: (t) => F(t),
                            labelType: "secondary",
                            label: k.intl.string(E.default["8yIKem"]),
                        }),
              onClose: o,
              children: (0, e.jsxs)(b.B, {
                  gap: 16,
                  children: [
                      (0, e.jsxs)(b.B, {
                          gap: 8,
                          children: [
                              (0, e.jsx)(C.D, {
                                  variant: "heading-xs/semibold",
                                  children: k.intl.string(k.t["9XsExm"]),
                              }),
                              (0, e.jsx)(m, {
                                  buttons: R.map((t) =>
                                      (function (t, n, i) {
                                          let { value: a, label: l } = t;
                                          return {
                                              content: (0, e.jsx)(h.E, {
                                                  variant: "body-sm/semibold",
                                                  className: n ? S.u$ : S.nM,
                                                  children: l,
                                              }),
                                              className: n ? S.XZ : S.aK,
                                              onClick: () => i(a),
                                          };
                                      })(t, t.value === w, P),
                                  ),
                              }),
                          ],
                      }),
                      (0, e.jsxs)(b.B, {
                          gap: 8,
                          children: [
                              (0, e.jsx)(C.D, { variant: "heading-xs/semibold", children: k.intl.string(k.t.ewHW15) }),
                              (0, e.jsx)(x.f, {
                                  value: B,
                                  onChange: (t) => G(t),
                                  placeholder: k.intl.string(k.t.GakiH1),
                                  rows: 4,
                                  maxLength: 512,
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
