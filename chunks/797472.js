e.d(n, { $: () => M, default: () => w });
var i = e(477900),
    a = e(582128),
    l = e(855986),
    s = e(189213),
    r = e(503698),
    u = e.n(r),
    o = e(559106),
    c = e(802926);
function d(t) {
    let { data: n, disabled: e } = t,
        { content: a, className: l, onClick: s, disabled: r } = n;
    return (0, i.jsx)(o.vN, {
        children: (0, i.jsx)("button", {
            type: "button",
            className: u()(c.A, l),
            onClick: s,
            disabled: e || r,
            children: a,
        }),
    });
}
let m = function (t) {
    let { buttons: n, disabled: e, className: a } = t;
    return (0, i.jsx)("div", {
        role: "group",
        className: u()(c.O, a),
        children: n.map((t, n) => (0, i.jsx)(d, { data: t, disabled: e }, n)),
    });
};
var h = e(834730),
    g = e(331322),
    D = e(534514),
    b = e(858899),
    C = e(150934),
    x = e(103557),
    A = e(262577),
    p = e(964486),
    N = e(688810),
    _ = e(504049),
    f = e(226698),
    y = e(734057),
    j = e(287809),
    O = e(129230),
    T = e(562153),
    v = e(200700),
    I = e(652215),
    k = e(792996),
    E = e(307805),
    S = e(456439);
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
    let { duration: n, onChange: e } = t;
    return (0, i.jsxs)(g.B, {
        gap: 8,
        children: [
            (0, i.jsx)(D.D, { variant: "heading-xs/semibold", children: k.intl.string(k.t["9XsExm"]) }),
            (0, i.jsx)(m, {
                buttons: R.map((t) =>
                    (function (t, n, e) {
                        let { value: a, label: l } = t;
                        return {
                            content: (0, i.jsx)(h.E, {
                                variant: "body-sm/semibold",
                                className: n ? S.u$ : S.nM,
                                children: l,
                            }),
                            className: n ? S.XZ : S.aK,
                            onClick: () => e(a),
                        };
                    })(t, t.value === n, e),
                ),
            }),
        ],
    });
}
function w(t) {
    let { guildId: n, userId: e, anaylticsLocations: r, transitionState: u, onClose: o, modReportId: c } = t,
        { analyticsLocations: d } = (0, N.Ay)(),
        m = r?.[0] ?? d?.[0] ?? null,
        h = (0, l.bG)([j.default], () => j.default.getUser(e), [e]),
        [S, U] = a.useState(v.DisableCommunicationDuration.DURATION_60_SEC),
        [R, w] = a.useState(""),
        [P, B] = a.useState(!1),
        [G, H] = a.useState(!1),
        K = (0, l.bG)([y.A], () => y.A.getChannel(c)?.isArchivedThread()),
        L = (0, _.$9)(n, { location: m, targetUserId: e }),
        $ = a.useCallback(async () => {
            if (null != h) {
                B(!0);
                try {
                    (await A.A.setCommunicationDisabledDuration(n, e, S, R, m, c),
                        G && null != c && f.A.resolveFlag(c),
                        L(_.Nj.TIMEOUT),
                        (0, b.P0)({
                            text: k.intl.formatToPlainString(k.t.O9C3Nt, { user: T.Ay.getName(n, null, h) }),
                            variant: "success",
                        }),
                        o());
                } catch (t) {
                    (0, b.P0)({ text: k.intl.string(k.t.epyCuh), variant: "critical" });
                } finally {
                    B(!1);
                }
            }
        }, [n, h, e, o, S, R, m, L, c, G]);
    return ((0, p.Ay)(() => {
        null != h && O.default.track(I.HAw.OPEN_MODAL, { type: v.aZ, guild_id: n, other_user_id: h.id });
    }),
    a.useEffect(() => {
        (null == h || null == n) && o();
    }, [n, h, o]),
    null == h || null == n)
        ? null
        : (0, i.jsx)(s.a, {
              transitionState: u,
              title: k.intl.formatToPlainString(k.t.OhsOy0, { user: T.Ay.getName(n, null, h) }),
              subtitle: k.intl.format(k.t.Ns83GT, { helpdeskArticle: v.MO }),
              actions: [
                  { text: k.intl.string(k.t["ETE/oC"]), onClick: o, variant: "secondary" },
                  { text: k.intl.string(k.t.MlPTIi), onClick: $, loading: P },
              ],
              actionBarInput:
                  null == c || K
                      ? void 0
                      : (0, i.jsx)(C.S, {
                            checked: G,
                            onChange: (t) => H(t),
                            labelType: "secondary",
                            label: k.intl.string(E.default["8yIKem"]),
                        }),
              onClose: o,
              children: (0, i.jsxs)(g.B, {
                  gap: 16,
                  children: [
                      (0, i.jsx)(M, { duration: S, onChange: U }),
                      (0, i.jsxs)(g.B, {
                          gap: 8,
                          children: [
                              (0, i.jsx)(D.D, { variant: "heading-xs/semibold", children: k.intl.string(k.t.ewHW15) }),
                              (0, i.jsx)(x.f, {
                                  value: R,
                                  onChange: (t) => w(t),
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
