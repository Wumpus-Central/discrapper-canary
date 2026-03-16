l.d(t, { default: () => D }), l(321073);
var s = l(627968),
    n = l(64700),
    r = l(158954),
    i = l(311907),
    a = l(397927),
    u = l(966327),
    d = l(629357),
    c = l(47167),
    o = l(359378),
    h = l(598104),
    f = l(255266),
    g = l(223863),
    m = l(151054),
    x = l(734057),
    A = l(71393),
    p = l(576705),
    C = l(287809),
    b = l(181079),
    y = l(422258),
    j = l(93055),
    v = l(5180),
    _ = l(652215),
    L = l(665606),
    M = l(985018),
    S = l(233492);
function D(e) {
    let { transitionState: t, onClose: l, parentId: u } = e,
        [c, o] = n.useState(""),
        [h, f] = n.useState(() => new Set()),
        { notifyFavoriteAdded: g } = (0, j.CJ)(),
        { hasHigherPrivileges: A } = (0, j.TW)("AddFavoriteChannelModal"),
        C = (0, i.bG)([b.A], () => b.A.getFavoriteChannels()),
        D = n.useMemo(() => new Set(Object.keys(C)), [C]),
        I = n.useCallback(
            (e, t) => {
                if (e.type === d.rD.USER) {
                    let l = x.A.getDMChannelFromUserId(e.record.id);
                    return (!!t || null != l) && (null == l || !D.has(l.id));
                }
                return e.type === d.rD.GROUP_DM
                    ? !D.has(e.record.id)
                    : p.A.can(_.xBc.VIEW_CHANNEL, e.record) && (0, v.IF)(e.record, A) && !D.has(e.record.id);
            },
            [D, A],
        ),
        { results: R, updateSearchText: T } = (0, m.R)({ includeMissingDMs: !0, channelFilter: I }),
        w = n.useMemo(() => [...h].filter((e) => !D.has(e)).length, [D, h]),
        G = w >= 20,
        H = n.useMemo(
            () =>
                w >= 2 ? M.intl.formatToPlainString(L.default.LbCa8x, { count: w }) : M.intl.string(L.default.xKXcSu),
            [w],
        ),
        P = n.useCallback(
            (e) => {
                o(e), T(e);
            },
            [T],
        ),
        U = n.useCallback(
            (e) => {
                D.has(e) ||
                    f((t) => {
                        let l = 0;
                        for (let e of t) D.has(e) || (l += 1);
                        if (l >= 20 && !t.has(e)) return t;
                        let s = new Set(t);
                        return s.has(e) ? s.delete(e) : s.add(e), s;
                    });
            },
            [D],
        ),
        q = n.useCallback(() => {
            let e = [...h].filter((e) => !D.has(e));
            e.length > 0 && (g(), (0, y.S_)(e, u ?? null)), l();
        }, [D, g, l, u, h]),
        F = n.useMemo(() => {
            let e = [];
            for (let t of R) t.type !== d.rD.HEADER && null != N(t) && e.push(t);
            return e;
        }, [R]),
        O = n.useMemo(
            () =>
                0 === F.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, s.jsx)(k, {}), rowHeight: 72 }
                    : {
                          sections: [F.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let n = F[l];
                              if (null == n) return null;
                              let r = N(n);
                              return null == r
                                  ? null
                                  : (0, s.jsx)(
                                        E,
                                        {
                                            channel: r,
                                            selected: h.has(r.id),
                                            disabled: G && !h.has(r.id),
                                            onToggleChannel: U,
                                        },
                                        r.id,
                                    );
                          },
                      },
            [F, U, h, G],
        );
    return (0, s.jsx)(r.Modal, {
        title: M.intl.string(L.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, s.jsx)(a.IWV, {
            query: c,
            onChange: P,
            onClear: () => P(""),
            placeholder: M.intl.string(M.t["5h0QOP"]),
            "aria-label": M.intl.string(M.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, s.jsx)("div", {
            className: S.c,
            children: (0, s.jsx)(a.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: H,
                onClick: q,
                disabled: 0 === w,
            }),
        }),
        listProps: O,
    });
}
function k() {
    return (0, s.jsx)("div", {
        className: S.p,
        children: (0, s.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: M.intl.string(L.default.kQL9be),
        }),
    });
}
function N(e) {
    if (e.type === d.rD.USER) {
        let t = (0, g._g)({ type: "user", id: e.record.id });
        return null != t ? (x.A.getChannel(t) ?? null) : null;
    }
    return e.type === d.rD.TEXT_CHANNEL || e.type === d.rD.VOICE_CHANNEL || e.type === d.rD.GROUP_DM ? e.record : null;
}
function E(e) {
    let { channel: t, selected: l, disabled: n, onToggleChannel: r } = e,
        d = (0, i.bG)([A.A], () => A.A.getGuild(t.guild_id), [t.guild_id]),
        g = (0, c.Ay)(t),
        m = (0, i.bG)([C.default], () => (t.isDM() ? C.default.getUser(t.recipients?.[0]) : null), [t]);
    return (0, s.jsx)(o.A, {
        listItemId: t.id,
        icon:
            t.isDM() && null != m
                ? (0, s.jsx)(u.A, { "aria-hidden": !0, size: a._3J.SIZE_32, user: m })
                : t.isGroupDM()
                  ? (0, s.jsx)(h.A, { "aria-hidden": !0, size: a._3J.SIZE_32, channel: t })
                  : (0, s.jsx)(f.A, { size: f.q.SMALL_32, guild: d, channel: t }),
        label: g,
        selected: l,
        disabled: n,
        onPress: () => r(t.id),
    });
}
