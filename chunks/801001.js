n.d(t, { default: () => y }), n(388685), n(953529), n(642613);
var l = n(54381),
    i = n(473749),
    r = n(392711),
    o = n.n(r),
    a = n(793030),
    s = n(442837),
    c = n(481060),
    u = n(706371),
    d = n(563115),
    m = n(984933),
    j = n(485386),
    g = n(402148),
    p = n(570961),
    v = n(208665),
    h = n(460117),
    f = n(290511),
    b = n(388032),
    x = n(304256);
function y(e) {
    let { transitionState: t, onClose: n, onSave: r, onDelete: j, option: g, guild: y, prompt: C, index: P } = e,
        I = (0, s.e7)([m.ZP], () => m.ZP.getDefaultChannel(y.id)),
        [S, N] = i.useState(() => {
            var e;
            return null != (e = null == g ? void 0 : g.emoji) ? e : null;
        }),
        [Z, w] = i.useState(() => {
            var e;
            return null != (e = null == g ? void 0 : g.title) ? e : "";
        }),
        [E, k] = i.useState(() => {
            var e;
            return null != (e = null == g ? void 0 : g.description) ? e : "";
        }),
        [M, R] = i.useState(() => {
            var e;
            return new Set(null != (e = null == g ? void 0 : g.channelIds) ? e : []);
        }),
        [T, B] = i.useState(() => {
            var e;
            return new Set(null != (e = null == g ? void 0 : g.roleIds) ? e : []);
        }),
        [z, D] = i.useState({}),
        A = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        return null == (e = A.current) ? void 0 : e.focus();
    }, []);
    let L = i.useCallback(() => {
            var e;
            let t = {
                    id: null != (e = null == g ? void 0 : g.id) ? e : "".concat(Date.now()),
                    title: Z,
                    description: E,
                    channelIds: Array.from(M).sort(),
                    roleIds: Array.from(T).sort(),
                    emoji: null == S ? void 0 : S,
                },
                l = (function (e, t, n, l) {
                    let i = {};
                    l.title.length <= 0 && (i.title = b.intl.string(b.t.p3PKzA));
                    let r = (0, p.en)(e, t, n, l);
                    return null != r && (i.roles = r), i;
                })(y, v.Z.editedOnboardingPrompts, C, t);
            D(l), o().isEmpty(l) && (r(t), n());
        }, [M, E, S, y, n, r, null == g ? void 0 : g.id, C, T, Z]),
        q = i.useMemo(
            () => [
                {
                    text: b.intl.string(b.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: b.intl.string(b.t["R3BPH+"]),
                    onClick: L,
                    variant: "primary",
                },
            ],
            [L, n],
        );
    return (0, l.jsx)(a.Modal, {
        title: b.intl.formatToPlainString(b.t.yjS3zs, { index: P + 1 }),
        subtitle: null != C.title && C.title.length > 0 ? C.title : b.intl.string(b.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: q,
        actionBarInput: (0, l.jsx)(c.Avr, {
            text: b.intl.string(b.t.N86XcP),
            onClick: () => {
                j(), n();
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: x.container,
            children: [
                (0, l.jsxs)(c.Kqy, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(c.oil, {
                            label: b.intl.string(b.t.VWdcBp),
                            required: !0,
                            inputRef: A,
                            placeholder: b.intl.string(b.t.EHe6gZ),
                            value: Z,
                            onChange: (e) => w(e),
                            maxLength: f.NE,
                            autoFocus: !0,
                            error: z.title,
                        }),
                        (0, l.jsx)(c.oil, {
                            placeholder: b.intl.string(b.t.mIjgJK),
                            value: E,
                            onChange: (e) => k(e),
                            maxLength: f.NO,
                        }),
                    ],
                }),
                (0, l.jsx)(c.izJ, {}),
                (0, l.jsxs)(a.gNt, {
                    label: b.intl.string(b.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(c.Kqy, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(u.Z, {
                                    guildId: y.id,
                                    selectedChannelIds: M,
                                    placeholder: b.intl.string(b.t.vephiL),
                                    onChange: R,
                                    helperText: b.intl.string(b.t.SoT6we),
                                }),
                                (0, l.jsx)(d.Z, {
                                    guildId: y.id,
                                    selectedRoleIds: T,
                                    disableEveryoneRole: !0,
                                    placeholder: b.intl.string(b.t.aFO1I6),
                                    onChange: B,
                                    helperText: b.intl.string(b.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == z.roles ? null : (0, l.jsx)(c.pdY, { error: z.roles }),
                        (0, l.jsx)(O, {
                            guild: y,
                            roleIds: T,
                        }),
                    ],
                }),
                (0, l.jsx)(c.izJ, {}),
                (0, l.jsx)("div", {
                    className: x.emojiQuestionContainer,
                    children: (0, l.jsx)(a.gNt, {
                        label: b.intl.string(b.t["4ahTBl"]),
                        description: b.intl.string(b.t.Iv9RGg),
                        children: (0, l.jsx)(h.Z, {
                            emoji: S,
                            setEmoji: N,
                            channel: I,
                        }),
                    }),
                }),
            ],
        }),
    });
}
function O(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, s.e7)([j.Z], () => j.Z.getManyRoles(t.id, n).find(g.F));
    return null == i
        ? null
        : (0, l.jsx)("div", {
              className: x.notice,
              children: (0, l.jsxs)("div", {
                  className: x.noticeMessage,
                  children: [
                      (0, l.jsx)(c.Mgn, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: x.noticeIcon,
                      }),
                      (0, l.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: b.intl.format(b.t["5zPJEZ"], { permissions: (0, g.i)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
