n.d(t, { y: () => S });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(460760),
    c = n(408213),
    o = n(840387),
    d = n(71393),
    u = n(975571),
    f = n(555337),
    g = n(523386),
    b = n(818191),
    m = n(564864),
    p = n(915417),
    x = n(147988),
    h = n(366846),
    j = n(306846),
    O = n(493781),
    y = n(894222),
    v = n(652215),
    A = n(985018),
    E = n(771661);
function N(e) {
    let { pendingState: t } = e,
        n = i.useRef(!1),
        l = i.useCallback(
            async (e) => {
                if (!n.current)
                    try {
                        await (0, g.$)(e), (0, b.i)(e), (0, a.Mu)(), (0, a.mo)(e);
                    } finally {
                        n.current = !0;
                    }
            },
            [n],
        );
    switch (t.joinType) {
        case y.J.INVITE:
            return (0, r.jsx)(h.D, {
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
        case y.J.APPLY:
            return (0, r.jsx)(p.g, { pendingFields: t.pendingVerificationFields });
        case y.J.DISCOVERABLE:
            return (0, r.jsx)(x.t, {
                fetchDiscoveryData: l,
                settingsView: t.settingsView,
                requireTerms: t.requireTerms,
                rules: t.termRules,
            });
    }
}
function _(e) {
    let { guildId: t } = e,
        { nsfwLevel: n, ownerConfiguredContentLevel: a } = (0, l.cf)([d.A], () => {
            var e, n;
            return {
                nsfwLevel: null == (e = d.A.getGuild(t)) ? void 0 : e.nsfwLevel,
                ownerConfiguredContentLevel: null == (n = d.A.getGuild(t)) ? void 0 : n.ownerConfiguredContentLevel,
            };
        }),
        c = (0, l.bG)([j.A], () => {
            var e;
            return null == (e = j.A.pendingState) ? void 0 : e.isAgeRestricted;
        }),
        o = i.useCallback(
            (e) => {
                m.A.setIsAgeRestricted(t, e);
            },
            [t],
        ),
        f = n === v.ftr.AGE_RESTRICTED && a !== v.ftr.AGE_RESTRICTED;
    return (0, r.jsx)(s.dOG, {
        label: A.intl.string(A.t.N9xEJF),
        description: A.intl.format(A.t.iyQQ62, {
            helpArticleLink: u.A.getArticleURL(v.MVz.NSFW_SERVER_AGE_RESTRICTION),
        }),
        checked: c,
        onChange: o,
        disabled: f,
    });
}
function S() {
    let e = (0, l.bG)([f.A], () => f.A.getProps().guild),
        t = (0, l.bG)([j.A], () => j.A.pendingState),
        n = (0, o.Z)();
    i.useEffect(() => {
        (null == e ? void 0 : e.id) != null && c.Ay.fetchVerificationForm(e.id);
    }, [null == e ? void 0 : e.id]);
    let a = i.useCallback(
        (t) => {
            (null == e ? void 0 : e.id) != null && m.A.setSelectedJoinType(e.id, t);
        },
        [null == e ? void 0 : e.id],
    );
    if (null == e || null == t) return null;
    let { joinType: d } = t;
    return (0, r.jsxs)(s.BJc, {
        gap: 32,
        children: [
            (0, r.jsx)(s.Heading, {
                color: "text-strong",
                variant: "heading-lg/semibold",
                children: A.intl.string(A.t.YJlvBM),
            }),
            (0, r.jsx)(O.G, {
                onTypePicked: a,
                activeType: d,
                guild: e,
            }),
            (0, r.jsx)("div", { className: E.y }),
            !n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_, { guildId: e.id }), (0, r.jsx)("div", { className: E.y })],
                }),
            (0, r.jsx)("div", { children: (0, r.jsx)(N, { pendingState: t }) }),
        ],
    });
}
