l.d(t, { default: () => M }), l(321073);
var n = l(627968),
    s = l(64700),
    r = l(158954),
    i = l(311907),
    u = l(397927),
    a = l(966327),
    c = l(629357),
    d = l(47167),
    o = l(598104),
    h = l(255266),
    f = l(223863),
    g = l(151054),
    p = l(734057),
    A = l(71393),
    _ = l(576705),
    m = l(287809),
    x = l(181079),
    b = l(422258),
    y = l(652215),
    C = l(665606),
    L = l(985018),
    S = l(233492);
function M(e) {
    let { transitionState: t, onClose: l, parentId: a } = e,
        [d, o] = s.useState(""),
        [h, f] = s.useState(() => new Set()),
        A = (0, i.bG)([x.A], () => x.A.getFavoriteChannels()),
        m = s.useMemo(() => new Set(Object.keys(A)), [A]),
        M = s.useCallback(
            (e, t) => {
                if (e.type === c.rD.USER) {
                    let l = p.A.getDMChannelFromUserId(e.record.id);
                    return (!!t || null != l) && (null == l || !m.has(l.id));
                }
                return e.type === c.rD.GROUP_DM
                    ? !m.has(e.record.id)
                    : _.A.can(y.xBc.VIEW_CHANNEL, e.record) && !m.has(e.record.id);
            },
            [m],
        ),
        { results: N, updateSearchText: v } = (0, g.R)({ includeMissingDMs: !0, channelFilter: M }),
        E = s.useMemo(() => [...h].filter((e) => !m.has(e)).length, [m, h]),
        G = E >= 20,
        I = s.useMemo(
            () =>
                E >= 2 ? L.intl.formatToPlainString(C.default.LbCa8x, { count: E }) : L.intl.string(C.default.xKXcSu),
            [E],
        ),
        R = s.useCallback(
            (e) => {
                o(e), v(e);
            },
            [v],
        ),
        w = s.useCallback(
            (e) => {
                m.has(e) ||
                    f((t) => {
                        let l = 0;
                        for (let e of t) m.has(e) || (l += 1);
                        if (l >= 20 && !t.has(e)) return t;
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
            },
            [m],
        ),
        H = s.useCallback(() => {
            let e = [...h].filter((e) => !m.has(e));
            e.length > 0 && (0, b.S_)(e, a ?? null), l();
        }, [m, l, a, h]),
        T = s.useMemo(() => {
            let e = [];
            for (let t of N) t.type !== c.rD.HEADER && null != k(t) && e.push(t);
            return e;
        }, [N]),
        q = s.useMemo(
            () =>
                0 === T.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(j, {}), rowHeight: 72 }
                    : {
                          sections: [T.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let s = T[l];
                              if (null == s) return null;
                              let r = k(s);
                              return null == r
                                  ? null
                                  : (0, n.jsx)(
                                        D,
                                        {
                                            channel: r,
                                            selected: h.has(r.id),
                                            disabled: G && !h.has(r.id),
                                            onToggleChannel: w,
                                        },
                                        r.id,
                                    );
                          },
                      },
            [T, w, h, G],
        );
    return (0, n.jsx)(r.Modal, {
        title: L.intl.string(C.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(u.IWV, {
            query: d,
            onChange: R,
            onClear: () => R(""),
            placeholder: L.intl.string(L.t["5h0QOP"]),
            "aria-label": L.intl.string(L.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: S.cN,
            children: (0, n.jsx)(u.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: I,
                onClick: H,
                disabled: 0 === E,
            }),
        }),
        listProps: q,
    });
}
function j() {
    return (0, n.jsx)("div", {
        className: S.p$,
        children: (0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(C.default.kQL9be),
        }),
    });
}
function k(e) {
    if (e.type === c.rD.USER) {
        let t = (0, f._g)({ type: "user", id: e.record.id });
        return null != t ? (p.A.getChannel(t) ?? null) : null;
    }
    return e.type === c.rD.TEXT_CHANNEL || e.type === c.rD.VOICE_CHANNEL || e.type === c.rD.GROUP_DM ? e.record : null;
}
function D(e) {
    let { channel: t, selected: l, disabled: s, onToggleChannel: r } = e,
        c = (0, i.bG)([A.A], () => A.A.getGuild(t.guild_id), [t.guild_id]),
        f = (0, d.Ay)(t),
        g = (0, i.bG)([m.default], () => (t.isDM() ? m.default.getUser(t.recipients?.[0]) : null), [t]);
    return (0, n.jsxs)(
        u.DUT,
        {
            className: s ? `${S.WG} ${S.GC}` : S.WG,
            role: "option",
            "aria-selected": l,
            "aria-disabled": s,
            onClick: s ? void 0 : () => r(t.id),
            children: [
                (0, n.jsxs)("div", {
                    className: S.HA,
                    children: [
                        t.isDM() && null != g
                            ? (0, n.jsx)(a.A, { "aria-hidden": !0, size: u._3J.SIZE_32, user: g })
                            : t.isGroupDM()
                              ? (0, n.jsx)(o.A, { "aria-hidden": !0, size: u._3J.SIZE_32, channel: t })
                              : (0, n.jsx)(h.A, { size: h.q.SMALL_32, guild: c, channel: t }),
                        (0, n.jsx)(u.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children: f,
                        }),
                    ],
                }),
                (0, n.jsx)(u.P7L, { checked: l, disabled: s }),
            ],
        },
        t.id,
    );
}
