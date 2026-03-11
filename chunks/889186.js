l.d(t, { default: () => j }), l(321073);
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
    A = l(734057),
    p = l(71393),
    m = l(576705),
    x = l(287809),
    C = l(181079),
    y = l(422258),
    b = l(93055),
    _ = l(652215),
    L = l(665606),
    M = l(985018),
    S = l(233492);
function j(e) {
    let { transitionState: t, onClose: l, parentId: a } = e,
        [d, o] = s.useState(""),
        [h, f] = s.useState(() => new Set()),
        { notifyFavoriteAdded: p } = (0, b.CJ)(),
        x = (0, i.bG)([C.A], () => C.A.getFavoriteChannels()),
        j = s.useMemo(() => new Set(Object.keys(x)), [x]),
        E = s.useCallback(
            (e, t) => {
                if (e.type === c.rD.USER) {
                    let l = A.A.getDMChannelFromUserId(e.record.id);
                    return (!!t || null != l) && (null == l || !j.has(l.id));
                }
                return e.type === c.rD.GROUP_DM
                    ? !j.has(e.record.id)
                    : m.A.can(_.xBc.VIEW_CHANNEL, e.record) && !j.has(e.record.id);
            },
            [j],
        ),
        { results: N, updateSearchText: G } = (0, g.R)({ includeMissingDMs: !0, channelFilter: E }),
        R = s.useMemo(() => [...h].filter((e) => !j.has(e)).length, [j, h]),
        w = R >= 20,
        I = s.useMemo(
            () =>
                R >= 2 ? M.intl.formatToPlainString(L.default.LbCa8x, { count: R }) : M.intl.string(L.default.xKXcSu),
            [R],
        ),
        T = s.useCallback(
            (e) => {
                o(e), G(e);
            },
            [G],
        ),
        H = s.useCallback(
            (e) => {
                j.has(e) ||
                    f((t) => {
                        let l = 0;
                        for (let e of t) j.has(e) || (l += 1);
                        if (l >= 20 && !t.has(e)) return t;
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
            },
            [j],
        ),
        U = s.useCallback(() => {
            let e = [...h].filter((e) => !j.has(e));
            e.length > 0 && (p(), (0, y.S_)(e, a ?? null)), l();
        }, [j, p, l, a, h]),
        q = s.useMemo(() => {
            let e = [];
            for (let t of N) t.type !== c.rD.HEADER && null != D(t) && e.push(t);
            return e;
        }, [N]),
        O = s.useMemo(
            () =>
                0 === q.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(k, {}), rowHeight: 72 }
                    : {
                          sections: [q.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let s = q[l];
                              if (null == s) return null;
                              let r = D(s);
                              return null == r
                                  ? null
                                  : (0, n.jsx)(
                                        v,
                                        {
                                            channel: r,
                                            selected: h.has(r.id),
                                            disabled: w && !h.has(r.id),
                                            onToggleChannel: H,
                                        },
                                        r.id,
                                    );
                          },
                      },
            [q, H, h, w],
        );
    return (0, n.jsx)(r.Modal, {
        title: M.intl.string(L.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(u.IWV, {
            query: d,
            onChange: T,
            onClear: () => T(""),
            placeholder: M.intl.string(M.t["5h0QOP"]),
            "aria-label": M.intl.string(M.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: S.cN,
            children: (0, n.jsx)(u.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: I,
                onClick: U,
                disabled: 0 === R,
            }),
        }),
        listProps: O,
    });
}
function k() {
    return (0, n.jsx)("div", {
        className: S.p$,
        children: (0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: M.intl.string(L.default.kQL9be),
        }),
    });
}
function D(e) {
    if (e.type === c.rD.USER) {
        let t = (0, f._g)({ type: "user", id: e.record.id });
        return null != t ? (A.A.getChannel(t) ?? null) : null;
    }
    return e.type === c.rD.TEXT_CHANNEL || e.type === c.rD.VOICE_CHANNEL || e.type === c.rD.GROUP_DM ? e.record : null;
}
function v(e) {
    let { channel: t, selected: l, disabled: s, onToggleChannel: r } = e,
        c = (0, i.bG)([p.A], () => p.A.getGuild(t.guild_id), [t.guild_id]),
        f = (0, d.Ay)(t),
        g = (0, i.bG)([x.default], () => (t.isDM() ? x.default.getUser(t.recipients?.[0]) : null), [t]);
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
