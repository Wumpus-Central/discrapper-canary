l.d(t, { default: () => S }), l(321073);
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
    v = l(652215),
    _ = l(525736),
    L = l(985018),
    M = l(282893);
function S(e) {
    let { transitionState: t, onClose: l, parentId: u } = e,
        [c, o] = n.useState(""),
        [h, f] = n.useState(() => new Set()),
        { notifyFavoriteAdded: g } = (0, j.CJ)(),
        A = (0, i.bG)([b.A], () => b.A.getFavoriteChannels()),
        C = n.useMemo(() => new Set(Object.keys(A)), [A]),
        S = n.useCallback(
            (e, t) => {
                if (e.type === d.rD.USER) {
                    let l = x.A.getDMChannelFromUserId(e.record.id);
                    return (!!t || null != l) && (null == l || !C.has(l.id));
                }
                return e.type === d.rD.GROUP_DM
                    ? !C.has(e.record.id)
                    : p.A.can(v.xBc.VIEW_CHANNEL, e.record) && !C.has(e.record.id);
            },
            [C],
        ),
        { results: E, updateSearchText: I } = (0, m.R)({ includeMissingDMs: !0, channelFilter: S }),
        R = n.useMemo(() => [...h].filter((e) => !C.has(e)).length, [C, h]),
        w = R >= 20,
        T = n.useMemo(
            () =>
                R >= 2 ? L.intl.formatToPlainString(_.default.LbCa8x, { count: R }) : L.intl.string(_.default.xKXcSu),
            [R],
        ),
        G = n.useCallback(
            (e) => {
                o(e), I(e);
            },
            [I],
        ),
        H = n.useCallback(
            (e) => {
                C.has(e) ||
                    f((t) => {
                        let l = 0;
                        for (let e of t) C.has(e) || (l += 1);
                        if (l >= 20 && !t.has(e)) return t;
                        let s = new Set(t);
                        return s.has(e) ? s.delete(e) : s.add(e), s;
                    });
            },
            [C],
        ),
        P = n.useCallback(() => {
            let e = [...h].filter((e) => !C.has(e));
            e.length > 0 && (g(), (0, y.S_)(e, u ?? null)), l();
        }, [C, g, l, u, h]),
        U = n.useMemo(() => {
            let e = [];
            for (let t of E) t.type !== d.rD.HEADER && null != k(t) && e.push(t);
            return e;
        }, [E]),
        q = n.useMemo(
            () =>
                0 === U.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, s.jsx)(D, {}), rowHeight: 72 }
                    : {
                          sections: [U.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let n = U[l];
                              if (null == n) return null;
                              let r = k(n);
                              return null == r
                                  ? null
                                  : (0, s.jsx)(
                                        N,
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
            [U, H, h, w],
        );
    return (0, s.jsx)(r.Modal, {
        title: L.intl.string(_.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, s.jsx)(a.IWV, {
            query: c,
            onChange: G,
            onClear: () => G(""),
            placeholder: L.intl.string(L.t["5h0QOP"]),
            "aria-label": L.intl.string(L.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, s.jsx)("div", {
            className: M.c,
            children: (0, s.jsx)(a.Button, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: T,
                onClick: P,
                disabled: 0 === R,
            }),
        }),
        listProps: q,
    });
}
function D() {
    return (0, s.jsx)("div", {
        className: M.p,
        children: (0, s.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(_.default.kQL9be),
        }),
    });
}
function k(e) {
    if (e.type === d.rD.USER) {
        let t = (0, g._g)({ type: "user", id: e.record.id });
        return null != t ? (x.A.getChannel(t) ?? null) : null;
    }
    return e.type === d.rD.TEXT_CHANNEL || e.type === d.rD.VOICE_CHANNEL || e.type === d.rD.GROUP_DM ? e.record : null;
}
function N(e) {
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
