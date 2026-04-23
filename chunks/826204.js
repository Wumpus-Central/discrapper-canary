n.d(t, { default: () => y });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(189213),
    o = n(452027),
    c = n(311907),
    d = n(123292),
    u = n(331322),
    m = n(292666),
    h = n(404778),
    j = n(511274),
    x = n(695366),
    g = n(834730),
    p = n(508595),
    v = n(57222),
    C = n(808728),
    f = n(317525),
    I = n(957545),
    A = n(107795),
    k = n(655943),
    E = n(76596),
    b = n(539916),
    S = n(985018),
    N = n(588383);
function y(e) {
    let { transitionState: t, onClose: n, onSave: s, onDelete: x, option: g, guild: f, prompt: I, index: y } = e,
        _ = (0, c.bG)([C.Ay], () => C.Ay.getDefaultChannel(f.id)),
        [R, T] = i.useState(() => g?.emoji ?? null),
        [M, B] = i.useState(() => g?.title ?? ""),
        [w, D] = i.useState(() => g?.description ?? ""),
        [L, O] = i.useState(() => new Set(g?.channelIds ?? [])),
        [z, Q] = i.useState(() => new Set(g?.roleIds ?? [])),
        [U, Y] = i.useState({}),
        F = i.useRef(null);
    i.useLayoutEffect(() => F.current?.focus(), []);
    let G = i.useCallback(() => {
            var e, t, l, i;
            let r,
                o,
                c = {
                    id: g?.id ?? `${Date.now()}`,
                    title: M,
                    description: w,
                    channelIds: Array.from(L).sort(),
                    roleIds: Array.from(z).sort(),
                    emoji: null == R ? void 0 : R,
                },
                d =
                    ((e = f),
                    (t = k.A.editedOnboardingPrompts),
                    (l = I),
                    (r = {}),
                    (i = c).title.length <= 0 && (r.title = S.intl.string(S.t.p3PKzA)),
                    null != (o = (0, A.fO)(e, t, l, i)) && (r.roles = o),
                    r);
            Y(d), a().isEmpty(d) && (s(c), n());
        }, [L, w, R, f, n, s, g?.id, I, z, M]),
        J = i.useMemo(
            () => [
                { text: S.intl.string(S.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: S.intl.string(S.t["R3BPH+"]), onClick: G, variant: "primary" },
            ],
            [G, n],
        );
    return (0, l.jsx)(r.Modal, {
        title: S.intl.formatToPlainString(S.t.yjS3zs, { index: y + 1 }),
        subtitle: null != I.title && I.title.length > 0 ? I.title : S.intl.string(S.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: J,
        actionBarInput: (0, l.jsx)(d.Q, {
            text: S.intl.string(S.t.N86XcP),
            onClick: () => {
                x(), n();
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: N.kL,
            children: [
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(m.k, {
                            label: S.intl.string(S.t.VWdcBp),
                            required: !0,
                            inputRef: F,
                            placeholder: S.intl.string(S.t.EHe6gZ),
                            value: M,
                            onChange: (e) => B(e),
                            maxLength: b.Q_,
                            autoFocus: !0,
                            error: U.title,
                        }),
                        (0, l.jsx)(m.k, {
                            placeholder: S.intl.string(S.t.mIjgJK),
                            value: w,
                            onChange: (e) => D(e),
                            maxLength: b.QY,
                        }),
                    ],
                }),
                (0, l.jsx)(h.c, {}),
                (0, l.jsxs)(o.D, {
                    label: S.intl.string(S.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(u.B, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(p.A, {
                                    guildId: f.id,
                                    selectedChannelIds: L,
                                    placeholder: S.intl.string(S.t.vephiL),
                                    onChange: O,
                                    helperText: S.intl.string(S.t.SoT6we),
                                }),
                                (0, l.jsx)(v.A, {
                                    guildId: f.id,
                                    selectedRoleIds: z,
                                    disableEveryoneRole: !0,
                                    placeholder: S.intl.string(S.t.aFO1I6),
                                    onChange: Q,
                                    helperText: S.intl.string(S.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == U.roles ? null : (0, l.jsx)(j.U, { error: U.roles }),
                        (0, l.jsx)(P, { guild: f, roleIds: z }),
                    ],
                }),
                (0, l.jsx)(h.c, {}),
                (0, l.jsx)("div", {
                    className: N.C2,
                    children: (0, l.jsx)(o.D, {
                        label: S.intl.string(S.t["4ahTBl"]),
                        description: S.intl.string(S.t.Iv9RGg),
                        children: (0, l.jsx)(E.A, { emoji: R, setEmoji: T, channel: _ }),
                    }),
                }),
            ],
        }),
    });
}
function P(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, c.bG)([f.A], () => f.A.getManyRoles(t.id, n).find(I.J));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: N.lm,
              children: (0, l.jsxs)("div", {
                  className: N.Ux,
                  children: [
                      (0, l.jsx)(x.E, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: N.EP,
                      }),
                      (0, l.jsx)(g.E, {
                          variant: "text-sm/normal",
                          children: S.intl.format(S.t["5zPJEZ"], { permissions: (0, I.P)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
