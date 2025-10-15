n.d(t, { default: () => C }), n(388685), n(953529), n(642613);
var l = n(951288),
    i = n(647438),
    r = n(392711),
    o = n.n(r),
    s = n(793030),
    a = n(442837),
    c = n(159691),
    u = n(481060),
    d = n(706371),
    m = n(563115),
    j = n(313201),
    g = n(984933),
    v = n(485386),
    p = n(402148),
    h = n(570961),
    x = n(208665),
    f = n(460117),
    b = n(290511),
    y = n(388032),
    O = n(82513);
function C(e) {
    let { transitionState: t, onClose: n, onSave: r, onDelete: v, option: p, guild: C, prompt: P, index: I } = e,
        S = (0, j.Dt)(),
        Z = (0, a.e7)([g.ZP], () => g.ZP.getDefaultChannel(C.id)),
        [w, E] = i.useState(() => {
            var e;
            return null != (e = null == p ? void 0 : p.emoji) ? e : null;
        }),
        [k, _] = i.useState(() => {
            var e;
            return null != (e = null == p ? void 0 : p.title) ? e : "";
        }),
        [M, R] = i.useState(() => {
            var e;
            return null != (e = null == p ? void 0 : p.description) ? e : "";
        }),
        [T, B] = i.useState(() => {
            var e;
            return new Set(null != (e = null == p ? void 0 : p.channelIds) ? e : []);
        }),
        [D, q] = i.useState(() => {
            var e;
            return new Set(null != (e = null == p ? void 0 : p.roleIds) ? e : []);
        }),
        [z, A] = i.useState({}),
        L = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        return null == (e = L.current) ? void 0 : e.focus();
    }, []);
    let F = i.useCallback(() => {
            var e;
            let t = {
                    id: null != (e = null == p ? void 0 : p.id) ? e : "".concat(Date.now()),
                    title: k,
                    description: M,
                    channelIds: Array.from(T).sort(),
                    roleIds: Array.from(D).sort(),
                    emoji: null == w ? void 0 : w,
                },
                l = (function (e, t, n, l) {
                    let i = {};
                    l.title.length <= 0 && (i.title = y.intl.string(y.t.p3PKzA));
                    let r = (0, h.en)(e, t, n, l);
                    return null != r && (i.roles = r), i;
                })(C, x.Z.editedOnboardingPrompts, P, t);
            A(l), o().isEmpty(l) && (r(t), n());
        }, [T, M, w, C, n, r, null == p ? void 0 : p.id, P, D, k]),
        H = i.useMemo(
            () => [
                {
                    text: y.intl.string(y.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: y.intl.string(y.t["R3BPH+"]),
                    onClick: F,
                    variant: "primary",
                },
            ],
            [F, n],
        );
    return (0, l.jsxs)(s.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, l.jsx)("div", {
                className: O.closeButton,
                children: (0, l.jsx)(c.PZ7, { onClick: n }),
            }),
            (0, l.jsxs)("div", {
                className: O.container,
                children: [
                    (0, l.jsx)(u.Text, {
                        className: O.questionNumber,
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: y.intl.format(y.t.yjS3zs, { index: I + 1 }),
                    }),
                    (0, l.jsx)(u.Heading, {
                        id: S,
                        variant: "heading-lg/semibold",
                        children: null != P.title && P.title.length > 0 ? P.title : y.intl.string(y.t.vY91C9),
                    }),
                    (0, l.jsxs)(u.Kqy, {
                        gap: 8,
                        children: [
                            (0, l.jsx)(u.oil, {
                                label: y.intl.string(y.t.VWdcBp),
                                required: !0,
                                inputRef: L,
                                placeholder: y.intl.string(y.t.EHe6gZ),
                                value: k,
                                onChange: (e) => _(e),
                                maxLength: b.NE,
                                autoFocus: !0,
                                error: z.title,
                            }),
                            (0, l.jsx)(u.oil, {
                                placeholder: y.intl.string(y.t.mIjgJK),
                                value: M,
                                onChange: (e) => R(e),
                                maxLength: b.NO,
                            }),
                        ],
                    }),
                    (0, l.jsx)(u.izJ, {}),
                    (0, l.jsxs)(s.gNt, {
                        label: y.intl.string(y.t.TtIbPA),
                        children: [
                            (0, l.jsxs)(u.Kqy, {
                                gap: 8,
                                children: [
                                    (0, l.jsx)(d.Z, {
                                        guildId: C.id,
                                        selectedChannelIds: T,
                                        placeholder: y.intl.string(y.t.vephiL),
                                        onChange: B,
                                        helperText: y.intl.string(y.t.SoT6we),
                                    }),
                                    (0, l.jsx)(m.Z, {
                                        guildId: C.id,
                                        selectedRoleIds: D,
                                        disableEveryoneRole: !0,
                                        placeholder: y.intl.string(y.t.aFO1I6),
                                        onChange: q,
                                        helperText: y.intl.string(y.t.Mbvpv8),
                                        selectableRoleFilter: (e) => !e.managed,
                                    }),
                                ],
                            }),
                            null == z.roles ? null : (0, l.jsx)(u.pdY, { error: z.roles }),
                            (0, l.jsx)(N, {
                                guild: C,
                                roleIds: D,
                            }),
                        ],
                    }),
                    (0, l.jsx)(u.izJ, {}),
                    (0, l.jsx)("div", {
                        className: O.emojiQuestionContainer,
                        children: (0, l.jsx)(s.gNt, {
                            label: y.intl.string(y.t["4ahTBl"]),
                            description: y.intl.string(y.t.Iv9RGg),
                            children: (0, l.jsx)(f.Z, {
                                emoji: w,
                                setEmoji: E,
                                channel: Z,
                            }),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(s.Go$, {
                actions: H,
                leading: (0, l.jsx)(u.Avr, {
                    text: y.intl.string(y.t.N86XcP),
                    onClick: () => {
                        v(), n();
                    },
                    variant: "critical",
                }),
            }),
        ],
    });
}
function N(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, a.e7)([v.Z], () => v.Z.getManyRoles(t.id, n).find(p.F));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: O.notice,
              children: (0, l.jsxs)("div", {
                  className: O.noticeMessage,
                  children: [
                      (0, l.jsx)(u.Mgn, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: O.noticeIcon,
                      }),
                      (0, l.jsx)(u.Text, {
                          variant: "text-sm/normal",
                          children: y.intl.format(y.t["5zPJEZ"], { permissions: (0, p.i)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
