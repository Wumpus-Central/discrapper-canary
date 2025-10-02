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
    v = n(984933),
    g = n(485386),
    h = n(402148),
    x = n(570961),
    p = n(208665),
    f = n(460117),
    b = n(290511),
    y = n(388032),
    O = n(82513);
function C(e) {
    let { transitionState: t, onClose: n, onSave: r, onDelete: g, option: h, guild: C, prompt: N, index: P } = e,
        S = (0, j.Dt)(),
        w = (0, a.e7)([v.ZP], () => v.ZP.getDefaultChannel(C.id)),
        [E, Z] = i.useState(() => {
            var e;
            return null != (e = null == h ? void 0 : h.emoji) ? e : null;
        }),
        [k, R] = i.useState(() => {
            var e;
            return null != (e = null == h ? void 0 : h.title) ? e : "";
        }),
        [M, T] = i.useState(() => {
            var e;
            return null != (e = null == h ? void 0 : h.description) ? e : "";
        }),
        [_, B] = i.useState(() => {
            var e;
            return new Set(null != (e = null == h ? void 0 : h.channelIds) ? e : []);
        }),
        [D, q] = i.useState(() => {
            var e;
            return new Set(null != (e = null == h ? void 0 : h.roleIds) ? e : []);
        }),
        [z, J] = i.useState({}),
        A = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        return null == (e = A.current) ? void 0 : e.focus();
    }, []);
    let F = i.useCallback(() => {
            var e;
            let t = {
                    id: null != (e = null == h ? void 0 : h.id) ? e : "".concat(Date.now()),
                    title: k,
                    description: M,
                    channelIds: Array.from(_).sort(),
                    roleIds: Array.from(D).sort(),
                    emoji: null == E ? void 0 : E,
                },
                l = (function (e, t, n, l) {
                    let i = {};
                    l.title.length <= 0 && (i.title = y.intl.string(y.t.p3PKzM));
                    let r = (0, x.en)(e, t, n, l);
                    return null != r && (i.roles = r), i;
                })(C, p.Z.editedOnboardingPrompts, N, t);
            J(l), o().isEmpty(l) && (r(t), n());
        }, [_, M, E, C, n, r, null == h ? void 0 : h.id, N, D, k]),
        H = i.useMemo(
            () => [
                {
                    text: y.intl.string(y.t["ETE/oK"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: y.intl.string(y.t.R3BPHx),
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
                        children: y.intl.format(y.t.yjS3zs, { index: P + 1 }),
                    }),
                    (0, l.jsx)(u.X6q, {
                        id: S,
                        variant: "heading-lg/semibold",
                        children: null != N.title && N.title.length > 0 ? N.title : y.intl.string(y.t.vY91Cw),
                    }),
                    (0, l.jsxs)(u.Kqy, {
                        gap: 8,
                        children: [
                            (0, l.jsx)(u.oil, {
                                label: y.intl.string(y.t.VWdcBg),
                                required: !0,
                                inputRef: A,
                                placeholder: y.intl.string(y.t.EHe6gY),
                                value: k,
                                onChange: (e) => R(e),
                                maxLength: b.NE,
                                autoFocus: !0,
                                error: z.title,
                            }),
                            (0, l.jsx)(u.oil, {
                                placeholder: y.intl.string(y.t.mIjgJC),
                                value: M,
                                onChange: (e) => T(e),
                                maxLength: b.NO,
                            }),
                        ],
                    }),
                    (0, l.jsx)(u.izJ, {}),
                    (0, l.jsxs)(u.xJW, {
                        title: y.intl.string(y.t.TtIbPD),
                        children: [
                            (0, l.jsxs)(u.Kqy, {
                                gap: 8,
                                children: [
                                    (0, l.jsx)(d.Z, {
                                        guildId: C.id,
                                        selectedChannelIds: _,
                                        placeholder: y.intl.string(y.t.vephiI),
                                        onChange: B,
                                        helperText: y.intl.string(y.t.SoT6wc),
                                    }),
                                    (0, l.jsx)(m.Z, {
                                        guildId: C.id,
                                        selectedRoleIds: D,
                                        disableEveryoneRole: !0,
                                        placeholder: y.intl.string(y.t.aFO1Iy),
                                        onChange: q,
                                        helperText: y.intl.string(y.t.Mbvpv7),
                                        selectableRoleFilter: (e) => !e.managed,
                                    }),
                                ],
                            }),
                            null == z.roles ? null : (0, l.jsx)(u.pdY, { error: z.roles }),
                            (0, l.jsx)(I, {
                                guild: C,
                                roleIds: D,
                            }),
                        ],
                    }),
                    (0, l.jsx)(u.izJ, {}),
                    (0, l.jsxs)("div", {
                        className: O.emojiQuestionContainer,
                        children: [
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(u.vwX, { children: y.intl.string(y.t["4ahTBg"]) }),
                                    (0, l.jsx)(u.R94, {
                                        type: u.geA.DESCRIPTION,
                                        children: y.intl.string(y.t.Iv9RGh),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(f.Z, {
                                emoji: E,
                                setEmoji: Z,
                                channel: w,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(s.Go$, {
                actions: H,
                leading: (0, l.jsx)(u.Avr, {
                    text: y.intl.string(y.t.N86XcH),
                    onClick: () => {
                        g(), n();
                    },
                    variant: "critical",
                }),
            }),
        ],
    });
}
function I(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, a.e7)([g.Z], () => g.Z.getManyRoles(t.id, n).find(h.F));
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
                          children: y.intl.format(y.t["5zPJER"], { permissions: (0, h.i)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
