n.d(t, { y: () => y });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(243721),
    a = n(331322),
    o = n(534514),
    d = n(460760),
    c = n(408213),
    u = n(840387),
    m = n(71393),
    g = n(975571),
    h = n(555337),
    x = n(523386),
    _ = n(818191),
    p = n(564864),
    A = n(915417),
    E = n(147988),
    f = n(366846),
    j = n(306846),
    N = n(493781),
    I = n(894222),
    C = n(652215),
    b = n(985018),
    v = n(735406);
function S(e) {
    let { pendingState: t } = e,
        n = l.useRef(!1),
        s = l.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, x.$)(e), (0, _.i)(e), (0, d.Mu)(), (0, d.mo)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n],
        );
    switch (t.joinType) {
        case I.J.INVITE:
            return (0, i.jsx)(f.D, { requireTerms: t.requireTerms, rules: t.termRules });
        case I.J.APPLY:
            return (0, i.jsx)(A.g, { pendingFields: t.pendingVerificationFields });
        case I.J.DISCOVERABLE:
            return (0, i.jsx)(E.t, {
                fetchDiscoveryData: s,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
    }
}
function T(e) {
    let { guildId: t } = e,
        { nsfwLevel: n, ownerConfiguredContentLevel: a } = (0, s.cf)([m.A], () => ({
            nsfwLevel: m.A.getGuild(t)?.nsfwLevel,
            ownerConfiguredContentLevel: m.A.getGuild(t)?.ownerConfiguredContentLevel,
        })),
        o = (0, s.bG)([j.A], () => j.A.pendingState?.isAgeRestricted),
        d = (0, s.bG)([j.A], () => j.A.pendingState?.joinType),
        c = l.useCallback(
            (e) => {
                p.A.setIsAgeRestricted(t, e);
            },
            [t],
        ),
        u = d === I.J.DISCOVERABLE || (n === C.ftr.AGE_RESTRICTED && a !== C.ftr.AGE_RESTRICTED);
    return (0, i.jsx)(r.d, {
        label: b.intl.string(b.t.N9xEJF),
        description: b.intl.format(b.t.iyQQ62, {
            helpArticleLink: g.A.getArticleURL(C.MVz.NSFW_SERVER_AGE_RESTRICTION),
        }),
        checked: o,
        onChange: c,
        disabled: u,
    });
}
function y() {
    let e = (0, s.bG)([h.A], () => h.A.getProps().guild),
        t = (0, s.bG)([j.A], () => j.A.pendingState),
        n = (0, u.Z)();
    l.useEffect(() => {
        e?.id != null && c.Ay.fetchVerificationForm(e.id);
    }, [e?.id]);
    let r = l.useCallback(
        (t) => {
            e?.id != null && p.A.setSelectedJoinType(e.id, t);
        },
        [e?.id],
    );
    if (null == e || null == t) return null;
    let { joinType: d } = t;
    return (0, i.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, i.jsx)(o.D, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: b.intl.string(b.t.YJlvBM),
            }),
            (0, i.jsx)(N.G, { onTypePicked: r, activeType: d, guild: e }),
            (0, i.jsx)("div", { className: v.y }),
            !n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(T, { guildId: e.id }), (0, i.jsx)("div", { className: v.y })],
                }),
            (0, i.jsx)("div", { children: (0, i.jsx)(S, { pendingState: t }) }),
        ],
    });
}
