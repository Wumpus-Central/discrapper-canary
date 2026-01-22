n.d(t, {
    default: () => y,
}),
    n(896048),
    n(228524),
    n(638769);
var l = n(627968),
    r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    u = n(508595),
    d = n(57222),
    m = n(808728),
    p = n(317525),
    j = n(957545),
    g = n(107795),
    h = n(655943),
    v = n(76596),
    b = n(539916),
    x = n(985018),
    f = n(186314);

function y(e) {
    let { transitionState: t, onClose: n, onSave: i, onDelete: p, option: j, guild: y, prompt: C, index: P } = e,
        k = (0, o.bG)([m.Ay], () => m.Ay.getDefaultChannel(y.id)),
        [S, A] = r.useState(() => {
            var e;
            return null != (e = null == j ? void 0 : j.emoji) ? e : null;
        }),
        [E, I] = r.useState(() => {
            var e;
            return null != (e = null == j ? void 0 : j.title) ? e : "";
        }),
        [w, N] = r.useState(() => {
            var e;
            return null != (e = null == j ? void 0 : j.description) ? e : "";
        }),
        [D, T] = r.useState(() => {
            var e;
            return new Set(null != (e = null == j ? void 0 : j.channelIds) ? e : []);
        }),
        [R, _] = r.useState(() => {
            var e;
            return new Set(null != (e = null == j ? void 0 : j.roleIds) ? e : []);
        }),
        [M, B] = r.useState({}),
        L = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        return null == (e = L.current) ? void 0 : e.focus();
    }, []);
    let z = r.useCallback(() => {
            var e, t, l, r, s;
            let o,
                c,
                u = {
                    id: null != (e = null == j ? void 0 : j.id) ? e : "".concat(Date.now()),
                    title: E,
                    description: w,
                    channelIds: Array.from(D).sort(),
                    roleIds: Array.from(R).sort(),
                    emoji: null == S ? void 0 : S,
                },
                d =
                    ((t = y),
                    (l = h.A.editedOnboardingPrompts),
                    (r = C),
                    (o = {}),
                    (s = u).title.length <= 0 && (o.title = x.intl.string(x.t.p3PKzA)),
                    null != (c = (0, g.fO)(t, l, r, s)) && (o.roles = c),
                    o);
            B(d), a().isEmpty(d) && (i(u), n());
        }, [D, w, S, y, n, i, null == j ? void 0 : j.id, C, R, E]),
        G = r.useMemo(
            () => [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: x.intl.string(x.t["R3BPH+"]),
                    onClick: z,
                    variant: "primary",
                },
            ],
            [z, n],
        );
    return (0, l.jsx)(s.Modal, {
        title: x.intl.formatToPlainString(x.t.yjS3zs, {
            index: P + 1,
        }),
        subtitle: null != C.title && C.title.length > 0 ? C.title : x.intl.string(x.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: G,
        actionBarInput: (0, l.jsx)(c.QWc, {
            text: x.intl.string(x.t.N86XcP),
            onClick: () => {
                p(), n();
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
                            label: x.intl.string(x.t.VWdcBp),
                            required: !0,
                            inputRef: L,
                            placeholder: x.intl.string(x.t.EHe6gZ),
                            value: E,
                            onChange: (e) => I(e),
                            maxLength: b.Q_,
                            autoFocus: !0,
                            error: M.title,
                        }),
                        (0, l.jsx)(c.ksK, {
                            placeholder: x.intl.string(x.t.mIjgJK),
                            value: w,
                            onChange: (e) => N(e),
                            maxLength: b.QY,
                        }),
                    ],
                }),
                (0, l.jsx)(c.cGx, {}),
                (0, l.jsxs)(s.D0$, {
                    label: x.intl.string(x.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(c.BJc, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(u.A, {
                                    guildId: y.id,
                                    selectedChannelIds: D,
                                    placeholder: x.intl.string(x.t.vephiL),
                                    onChange: T,
                                    helperText: x.intl.string(x.t.SoT6we),
                                }),
                                (0, l.jsx)(d.A, {
                                    guildId: y.id,
                                    selectedRoleIds: R,
                                    disableEveryoneRole: !0,
                                    placeholder: x.intl.string(x.t.aFO1I6),
                                    onChange: _,
                                    helperText: x.intl.string(x.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == M.roles
                            ? null
                            : (0, l.jsx)(c.dzK, {
                                  error: M.roles,
                              }),
                        (0, l.jsx)(O, {
                            guild: y,
                            roleIds: R,
                        }),
                    ],
                }),
                (0, l.jsx)(c.cGx, {}),
                (0, l.jsx)("div", {
                    className: f.C2,
                    children: (0, l.jsx)(s.D0$, {
                        label: x.intl.string(x.t["4ahTBl"]),
                        description: x.intl.string(x.t.Iv9RGg),
                        children: (0, l.jsx)(v.A, {
                            emoji: S,
                            setEmoji: A,
                            channel: k,
                        }),
                    }),
                }),
            ],
        }),
    });
}

function O(e) {
    let { guild: t, roleIds: n } = e,
        r = (0, o.bG)([p.A], () => p.A.getManyRoles(t.id, n).find(j.J));
    return null == r
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
                          children: x.intl.format(x.t["5zPJEZ"], {
                              permissions: (0, j.P)(t, r).join(", "),
                          }),
                      }),
                  ],
              }),
          });
}
