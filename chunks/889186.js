l.d(t, { default: () => I }), l(321073);
var n = l(627968),
    s = l(64700),
    r = l(189213),
    i = l(17928),
    a = l(892547),
    u = l(821609),
    c = l(834730),
    d = l(778712),
    o = l(966327),
    h = l(115718),
    f = l(47167),
    g = l(359378),
    m = l(598104),
    p = l(255266),
    _ = l(223863),
    x = l(151054),
    b = l(734057),
    A = l(71393),
    y = l(576705),
    C = l(287809),
    v = l(181079),
    j = l(422258),
    k = l(668267),
    D = l(313281),
    M = l(5180),
    S = l(652215),
    E = l(335993),
    L = l(985018),
    N = l(761357);
function I(e) {
    let { transitionState: t, onClose: l, parentId: c, source: d } = e;
    s.useEffect(() => {
        null != d && (0, k.tC)(d);
    }, [d]);
    let [o, f] = s.useState(""),
        [g, m] = s.useState(() => new Set()),
        { notifyFavoriteAdded: p } = (0, D.CJ)(),
        { hasHigherPrivileges: _ } = (0, D.TW)("AddFavoriteChannelModal"),
        A = (0, i.bG)([v.A], () => v.A.getFavoriteChannels()),
        C = s.useMemo(() => new Set(Object.keys(A)), [A]),
        I = s.useCallback(
            (e, t) => {
                if (e.type === h.rD.USER) {
                    let l = b.A.getDMChannelFromUserId(e.record.id);
                    return (!!t || null != l) && (null == l || !C.has(l.id));
                }
                return e.type === h.rD.GROUP_DM
                    ? !C.has(e.record.id)
                    : y.A.can(S.xBc.VIEW_CHANNEL, e.record) && (0, M.IF)(e.record, _) && !C.has(e.record.id);
            },
            [C, _],
        ),
        { results: P, updateSearchText: H } = (0, x.R)({ includeMissingDMs: !0, channelFilter: I }),
        q = s.useMemo(() => [...g].filter((e) => !C.has(e)).length, [C, g]),
        T = q >= 20,
        W = s.useMemo(
            () =>
                q >= 2 ? L.intl.formatToPlainString(E.default.LbCa8x, { count: q }) : L.intl.string(E.default.xKXcSu),
            [q],
        ),
        F = s.useCallback(
            (e) => {
                f(e), H(e);
            },
            [H],
        ),
        O = s.useCallback(
            (e) => {
                C.has(e) ||
                    m((t) => {
                        let l = 0;
                        for (let e of t) C.has(e) || (l += 1);
                        if (l >= 20 && !t.has(e)) return t;
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n;
                    });
            },
            [C],
        ),
        U = s.useCallback(() => {
            let e = [...g].filter((e) => !C.has(e));
            e.length > 0 && (p(), (0, j.S_)(e, c ?? null, "modal")), l();
        }, [C, p, l, c, g]),
        z = s.useMemo(() => {
            let e = [];
            for (let t of P) t.type !== h.rD.HEADER && null != w(t) && e.push(t);
            return e;
        }, [P]),
        B = s.useMemo(
            () =>
                0 === z.length
                    ? { sections: [1], sectionHeight: 0, renderRow: () => (0, n.jsx)(R, {}), rowHeight: 72 }
                    : {
                          sections: [z.length],
                          sectionHeight: 0,
                          rowHeight: 48,
                          renderRow: (e) => {
                              let { section: t, row: l } = e;
                              if (t > 0) return null;
                              let s = z[l];
                              if (null == s) return null;
                              let r = w(s);
                              return null == r
                                  ? null
                                  : (0, n.jsx)(
                                        G,
                                        {
                                            channel: r,
                                            selected: g.has(r.id),
                                            disabled: T && !g.has(r.id),
                                            onToggleChannel: O,
                                        },
                                        r.id,
                                    );
                          },
                      },
            [z, O, g, T],
        );
    return (0, n.jsx)(r.Modal, {
        title: L.intl.string(E.default.Rp35U1),
        actions: [],
        transitionState: t,
        onClose: l,
        input: (0, n.jsx)(a.I, {
            query: o,
            onChange: F,
            onClear: () => F(""),
            placeholder: L.intl.string(L.t["5h0QOP"]),
            "aria-label": L.intl.string(L.t["5h0QOP"]),
            autoFocus: !0,
        }),
        actionBarInput: (0, n.jsx)("div", {
            className: N.c,
            children: (0, n.jsx)(u.$, {
                variant: "primary",
                size: "md",
                fullWidth: !0,
                text: W,
                onClick: U,
                disabled: 0 === q,
            }),
        }),
        listProps: B,
    });
}
function R() {
    return (0, n.jsx)("div", {
        className: N.p,
        children: (0, n.jsx)(c.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(E.default.kQL9be),
        }),
    });
}
function w(e) {
    if (e.type === h.rD.USER) {
        let t = (0, _._g)({ type: "user", id: e.record.id });
        return null != t ? (b.A.getChannel(t) ?? null) : null;
    }
    return e.type === h.rD.TEXT_CHANNEL || e.type === h.rD.VOICE_CHANNEL || e.type === h.rD.GROUP_DM ? e.record : null;
}
function G(e) {
    let { channel: t, selected: l, disabled: s, onToggleChannel: r } = e,
        a = (0, i.bG)([A.A], () => A.A.getGuild(t.guild_id), [t.guild_id]),
        u = (0, f.Ay)(t),
        c = (0, i.bG)([C.default], () => (t.isDM() ? C.default.getUser(t.recipients?.[0]) : null), [t]);
    return (0, n.jsx)(g.A, {
        listItemId: t.id,
        icon:
            t.isDM() && null != c
                ? (0, n.jsx)(o.A, { "aria-hidden": !0, size: d._3.SIZE_32, user: c })
                : t.isGroupDM()
                  ? (0, n.jsx)(m.A, { "aria-hidden": !0, size: d._3.SIZE_32, channel: t })
                  : (0, n.jsx)(p.A, { size: p.q.SMALL_32, guild: a, channel: t }),
        label: u,
        selected: l,
        disabled: s,
        onPress: () => r(t.id),
    });
}
