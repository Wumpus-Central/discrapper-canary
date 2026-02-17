"use strict";
n.d(t, { y: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(460760),
    o = n(408213),
    d = n(840387),
    c = n(71393),
    u = n(975571),
    g = n(555337),
    m = n(523386),
    x = n(818191),
    h = n(564864),
    _ = n(915417),
    A = n(147988),
    p = n(366846),
    f = n(306846),
    j = n(493781),
    N = n(894222),
    E = n(652215),
    b = n(985018),
    T = n(771661);
function C(e) {
    let { pendingState: t } = e,
        n = s.useRef(!1),
        l = s.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, m.$)(e), (0, x.i)(e), (0, a.Mu)(), (0, a.mo)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n],
        );
    switch (t.joinType) {
        case N.J.INVITE:
            return (0, i.jsx)(p.D, { requireTerms: t.requireTerms, rules: t.termRules });
        case N.J.APPLY:
            return (0, i.jsx)(_.g, { pendingFields: t.pendingVerificationFields });
        case N.J.DISCOVERABLE:
            return (0, i.jsx)(A.t, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
    }
}
function I(e) {
    let { guildId: t } = e,
        { nsfwLevel: n, ownerConfiguredContentLevel: a } = (0, l.cf)([c.A], () => ({
            nsfwLevel: c.A.getGuild(t)?.nsfwLevel,
            ownerConfiguredContentLevel: c.A.getGuild(t)?.ownerConfiguredContentLevel,
        })),
        o = (0, l.bG)([f.A], () => f.A.pendingState?.isAgeRestricted),
        d = (0, l.bG)([f.A], () => f.A.pendingState?.joinType),
        g = s.useCallback(
            (e) => {
                h.A.setIsAgeRestricted(t, e);
            },
            [t],
        ),
        m = d === N.J.DISCOVERABLE || (n === E.ftr.AGE_RESTRICTED && a !== E.ftr.AGE_RESTRICTED);
    return (0, i.jsx)(r.dOG, {
        label: b.intl.string(b.t.N9xEJF),
        description: b.intl.format(b.t.iyQQ62, {
            helpArticleLink: u.A.getArticleURL(E.MVz.NSFW_SERVER_AGE_RESTRICTION),
        }),
        checked: o,
        onChange: g,
        disabled: m,
    });
}
function v() {
    let e = (0, l.bG)([g.A], () => g.A.getProps().guild),
        t = (0, l.bG)([f.A], () => f.A.pendingState),
        n = (0, d.Z)();
    s.useEffect(() => {
        e?.id != null && o.Ay.fetchVerificationForm(e.id);
    }, [e?.id]);
    let a = s.useCallback(
        (t) => {
            e?.id != null && h.A.setSelectedJoinType(e.id, t);
        },
        [e?.id],
    );
    if (null == e || null == t) return null;
    let { joinType: c } = t;
    return (0, i.jsxs)(r.BJc, {
        gap: 32,
        children: [
            (0, i.jsx)(r.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: b.intl.string(b.t.YJlvBM),
            }),
            (0, i.jsx)(j.G, { onTypePicked: a, activeType: c, guild: e }),
            (0, i.jsx)("div", { className: T.y }),
            !n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(I, { guildId: e.id }), (0, i.jsx)("div", { className: T.y })],
                }),
            (0, i.jsx)("div", { children: (0, i.jsx)(C, { pendingState: t }) }),
        ],
    });
}
