n.d(t, { default: () => A });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(508595),
    u = n(57222),
    m = n(808728),
    x = n(317525),
    h = n(957545),
    j = n(107795),
    g = n(655943),
    p = n(76596),
    v = n(539916),
    C = n(985018),
    f = n(478680);
function A(e) {
    let { transitionState: t, onClose: n, onSave: s, onDelete: x, option: h, guild: A, prompt: b, index: k } = e,
        E = (0, o.bG)([m.Ay], () => m.Ay.getDefaultChannel(A.id)),
        [N, S] = i.useState(() => h?.emoji ?? null),
        [y, P] = i.useState(() => h?.title ?? ""),
        [_, T] = i.useState(() => h?.description ?? ""),
        [R, M] = i.useState(() => new Set(h?.channelIds ?? [])),
        [B, w] = i.useState(() => new Set(h?.roleIds ?? [])),
        [D, L] = i.useState({}),
        O = i.useRef(null);
    i.useLayoutEffect(() => O.current?.focus(), []);
    let z = i.useCallback(() => {
            var e, t, l, i;
            let r,
                o,
                c = {
                    id: h?.id ?? `${Date.now()}`,
                    title: y,
                    description: _,
                    channelIds: Array.from(R).sort(),
                    roleIds: Array.from(B).sort(),
                    emoji: null == N ? void 0 : N,
                },
                d =
                    ((e = A),
                    (t = g.A.editedOnboardingPrompts),
                    (l = b),
                    (r = {}),
                    (i = c).title.length <= 0 && (r.title = C.intl.string(C.t.p3PKzA)),
                    null != (o = (0, j.fO)(e, t, l, i)) && (r.roles = o),
                    r);
            L(d), a().isEmpty(d) && (s(c), n());
        }, [R, _, N, A, n, s, h?.id, b, B, y]),
        G = i.useMemo(
            () => [
                { text: C.intl.string(C.t["ETE/oC"]), onClick: n, variant: "secondary" },
                { text: C.intl.string(C.t["R3BPH+"]), onClick: z, variant: "primary" },
            ],
            [z, n],
        );
    return (0, l.jsx)(r.Modal, {
        title: C.intl.formatToPlainString(C.t.yjS3zs, { index: k + 1 }),
        subtitle: null != b.title && b.title.length > 0 ? b.title : C.intl.string(C.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: G,
        actionBarInput: (0, l.jsx)(c.QWc, {
            text: C.intl.string(C.t.N86XcP),
            onClick: () => {
                x(), n();
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: f.kL,
            children: [
                (0, l.jsxs)(c.BJc, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(c.ksK, {
                            label: C.intl.string(C.t.VWdcBp),
                            required: !0,
                            inputRef: O,
                            placeholder: C.intl.string(C.t.EHe6gZ),
                            value: y,
                            onChange: (e) => P(e),
                            maxLength: v.Q_,
                            autoFocus: !0,
                            error: D.title,
                        }),
                        (0, l.jsx)(c.ksK, {
                            placeholder: C.intl.string(C.t.mIjgJK),
                            value: _,
                            onChange: (e) => T(e),
                            maxLength: v.QY,
                        }),
                    ],
                }),
                (0, l.jsx)(c.cGx, {}),
                (0, l.jsxs)(r.D0$, {
                    label: C.intl.string(C.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(c.BJc, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(d.A, {
                                    guildId: A.id,
                                    selectedChannelIds: R,
                                    placeholder: C.intl.string(C.t.vephiL),
                                    onChange: M,
                                    helperText: C.intl.string(C.t.SoT6we),
                                }),
                                (0, l.jsx)(u.A, {
                                    guildId: A.id,
                                    selectedRoleIds: B,
                                    disableEveryoneRole: !0,
                                    placeholder: C.intl.string(C.t.aFO1I6),
                                    onChange: w,
                                    helperText: C.intl.string(C.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == D.roles ? null : (0, l.jsx)(c.dzK, { error: D.roles }),
                        (0, l.jsx)(I, { guild: A, roleIds: B }),
                    ],
                }),
                (0, l.jsx)(c.cGx, {}),
                (0, l.jsx)("div", {
                    className: f.C2,
                    children: (0, l.jsx)(r.D0$, {
                        label: C.intl.string(C.t["4ahTBl"]),
                        description: C.intl.string(C.t.Iv9RGg),
                        children: (0, l.jsx)(p.A, { emoji: N, setEmoji: S, channel: E }),
                    }),
                }),
            ],
        }),
    });
}
function I(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, o.bG)([x.A], () => x.A.getManyRoles(t.id, n).find(h.J));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: f.lm,
              children: (0, l.jsxs)("div", {
                  className: f.Ux,
                  children: [
                      (0, l.jsx)(c.EpV, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: f.EP,
                      }),
                      (0, l.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: C.intl.format(C.t["5zPJEZ"], { permissions: (0, h.P)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
