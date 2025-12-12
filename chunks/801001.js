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
    x = n(388032),
    b = n(82513);
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
        [T, _] = i.useState(() => {
            var e;
            return new Set(null != (e = null == g ? void 0 : g.roleIds) ? e : []);
        }),
        [B, z] = i.useState({}),
        D = i.useRef(null);
    i.useLayoutEffect(() => {
        var e;
        return null == (e = D.current) ? void 0 : e.focus();
    }, []);
    let A = i.useCallback(() => {
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
                    l.title.length <= 0 && (i.title = x.intl.string(x.t.p3PKzA));
                    let r = (0, p.en)(e, t, n, l);
                    return null != r && (i.roles = r), i;
                })(y, v.Z.editedOnboardingPrompts, C, t);
            z(l), o().isEmpty(l) && (r(t), n());
        }, [M, E, S, y, n, r, null == g ? void 0 : g.id, C, T, Z]),
        L = i.useMemo(
            () => [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: n,
                    variant: "secondary",
                },
                {
                    text: x.intl.string(x.t["R3BPH+"]),
                    onClick: A,
                    variant: "primary",
                },
            ],
            [A, n],
        );
    return (0, l.jsx)(a.Modal, {
        title: x.intl.formatToPlainString(x.t.yjS3zs, { index: P + 1 }),
        subtitle: null != C.title && C.title.length > 0 ? C.title : x.intl.string(x.t.vY91C9),
        transitionState: t,
        onClose: n,
        actions: L,
        actionBarInput: (0, l.jsx)(c.Avr, {
            text: x.intl.string(x.t.N86XcP),
            onClick: () => {
                j(), n();
            },
            variant: "critical",
        }),
        children: (0, l.jsxs)("div", {
            className: b.container,
            children: [
                (0, l.jsxs)(c.Kqy, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(c.oil, {
                            label: x.intl.string(x.t.VWdcBp),
                            required: !0,
                            inputRef: D,
                            placeholder: x.intl.string(x.t.EHe6gZ),
                            value: Z,
                            onChange: (e) => w(e),
                            maxLength: f.NE,
                            autoFocus: !0,
                            error: B.title,
                        }),
                        (0, l.jsx)(c.oil, {
                            placeholder: x.intl.string(x.t.mIjgJK),
                            value: E,
                            onChange: (e) => k(e),
                            maxLength: f.NO,
                        }),
                    ],
                }),
                (0, l.jsx)(c.izJ, {}),
                (0, l.jsxs)(a.gNt, {
                    label: x.intl.string(x.t.TtIbPA),
                    children: [
                        (0, l.jsxs)(c.Kqy, {
                            gap: 8,
                            children: [
                                (0, l.jsx)(u.Z, {
                                    guildId: y.id,
                                    selectedChannelIds: M,
                                    placeholder: x.intl.string(x.t.vephiL),
                                    onChange: R,
                                    helperText: x.intl.string(x.t.SoT6we),
                                }),
                                (0, l.jsx)(d.Z, {
                                    guildId: y.id,
                                    selectedRoleIds: T,
                                    disableEveryoneRole: !0,
                                    placeholder: x.intl.string(x.t.aFO1I6),
                                    onChange: _,
                                    helperText: x.intl.string(x.t.Mbvpv8),
                                    selectableRoleFilter: (e) => !e.managed,
                                }),
                            ],
                        }),
                        null == B.roles ? null : (0, l.jsx)(c.pdY, { error: B.roles }),
                        (0, l.jsx)(O, {
                            guild: y,
                            roleIds: T,
                        }),
                    ],
                }),
                (0, l.jsx)(c.izJ, {}),
                (0, l.jsx)("div", {
                    className: b.emojiQuestionContainer,
                    children: (0, l.jsx)(a.gNt, {
                        label: x.intl.string(x.t["4ahTBl"]),
                        description: x.intl.string(x.t.Iv9RGg),
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
              className: b.notice,
              children: (0, l.jsxs)("div", {
                  className: b.noticeMessage,
                  children: [
                      (0, l.jsx)(c.Mgn, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "currentColor",
                          className: b.noticeIcon,
                      }),
                      (0, l.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          children: x.intl.format(x.t["5zPJEZ"], { permissions: (0, g.i)(t, i).join(", ") }),
                      }),
                  ],
              }),
          });
}
