l.d(t, { default: () => S }), l(321073);
var n = l(627968),
    s = l(64700),
    r = l(158954),
    i = l(311907),
    a = l(397927),
    u = l(966327),
    c = l(629357),
    d = l(47167),
    o = l(359378),
    h = l(598104),
    f = l(255266),
    g = l(223863),
    x = l(151054),
    m = l(734057),
    p = l(71393),
    _ = l(576705),
    b = l(287809),
    A = l(181079),
    y = l(422258),
    C = l(668267),
    v = l(93055),
    j = l(5180),
    k = l(652215),
    D = l(665606),
    L = l(985018),
    M = l(233492);
function S(e) {
    let { transitionState: t, onClose: l, parentId: u, source: d } = e;
    s.useEffect(() => {
        null != d && (0, C.tC)(d);
    }, [d]);
    let [o, h] = s.useState(""),
        [f, g] = s.useState(() => new Set()),
        { notifyFavoriteAdded: p } = (0, v.CJ)(),
        { hasHigherPrivileges: b } = (0, v.TW)("AddFavoriteChannelModal"),
        S = (0, i.bG)([A.A], () => A.A.getFavoriteChannels()),
        R = s.useMemo(() => new Set(Object.keys(S)), [S]),
        w = s.useCallback(
            (e, t) => {
                if (e.type === c.rD.USER) {
                    let l = m.A.getDMChannelFromUserId(e.record.id);
                    return (!!t || null != l) && (null == l || !R.has(l.id));
                }
                return e.type === c.rD.GROUP_DM
                    ? !R.has(e.record.id)
                    : _.A.can(k.xBc.VIEW_CHANNEL, e.record) && (0, j.IF)(e.record, b) && !R.has(e.record.id);
            },
            [R, b],
        ),
        { results: T, updateSearchText: G } = (0, x.R)({ includeMissingDMs: !0, channelFilter: w }),
        P = s.useMemo(() => [...f].filter((e) => !R.has(e)).length, [R, f]),
        H = P >= 20,
        q = s.useMemo(
            () =>
                P >= 2 ? L.intl.formatToPlainString(D.default.LbCa8x, { count: P }) : L.intl.string(D.default.xKXcSu),
            [P],
        ),
        W = s.useCallback(
            (e) => {
                h(e), G(e);
            },
            [G],
        ),
        U = s.useCallback(
            (e) => {
                R.has(e) ||
                    g((t) => {
                        let l = 0;
                        for (let e of t) R.has(e) || (l += 1);
                        if (l >= 20 && !t.has(e)) return t;
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
            },
            [R],
        ),
        F = s.useCallback(() => {
            let e = [...f].filter((e) => !R.has(e));
            e.length > 0 && (p(), (0, y.S_)(e, u ?? null, "modal")), l();
        }, [R, p, l, u, f]),
        O = s.useMemo(() => {
            let e = [];
            for (let t of T) t.type !== c.rD.HEADER && null != N(t) && e.push(t);
            return e;
        }, [T]),
        z = s.useMemo(
            () =>
                0 === O.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(I, {}), rowHeight: 72 }
                    : {
                          sections: [O.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let s = O[l];
                              if (null == s) return null;
                              let r = N(s);
                              return null == r
                                  ? null
                                  : (0, n.jsx)(
                                        E,
                                        {
                                            channel: r,
                                            selected: f.has(r.id),
                                            disabled: H && !f.has(r.id),
                                            onToggleChannel: U,
                                        },
                                        r.id,
                                    );
                          },
                      },
            [O, U, f, H],
        );
    return (0, n.jsx)(r.Modal, {
        title: L.intl.string(D.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(a.IWV, {
            query: o,
            onChange: W,
            onClear: () => W(""),
            placeholder: L.intl.string(L.t["5h0QOP"]),
            "aria-label": L.intl.string(L.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: M.c,
            children: (0, n.jsx)(a.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: q,
                onClick: F,
                disabled: 0 === P,
            }),
        }),
        listProps: z,
    });
}
function I() {
    return (0, n.jsx)("div", {
        className: M.p,
        children: (0, n.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(D.default.kQL9be),
        }),
    });
}
function N(e) {
    if (e.type === c.rD.USER) {
        let t = (0, g._g)({ type: "user", id: e.record.id });
        return null != t ? (m.A.getChannel(t) ?? null) : null;
    }
    return e.type === c.rD.TEXT_CHANNEL || e.type === c.rD.VOICE_CHANNEL || e.type === c.rD.GROUP_DM ? e.record : null;
}
function E(e) {
    let { channel: t, selected: l, disabled: s, onToggleChannel: r } = e,
        c = (0, i.bG)([p.A], () => p.A.getGuild(t.guild_id), [t.guild_id]),
        g = (0, d.Ay)(t),
        x = (0, i.bG)([b.default], () => (t.isDM() ? b.default.getUser(t.recipients?.[0]) : null), [t]);
    return (0, n.jsx)(o.A, {
        listItemId: t.id,
        icon:
            t.isDM() && null != x
                ? (0, n.jsx)(u.A, { "aria-hidden": !0, size: a._3J.SIZE_32, user: x })
                : t.isGroupDM()
                  ? (0, n.jsx)(h.A, { "aria-hidden": !0, size: a._3J.SIZE_32, channel: t })
                  : (0, n.jsx)(f.A, { size: f.q.SMALL_32, guild: c, channel: t }),
        label: g,
        selected: l,
        disabled: s,
        onPress: () => r(t.id),
    });
}
