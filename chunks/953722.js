l.d(t, { default: () => h });
var i = l(627968),
    s = l(64700),
    a = l(224640),
    n = l(943457),
    r = l(424912),
    c = l(860689),
    d = l(208882),
    o = l(121004),
    u = l(880392),
    m = l(843580),
    x = l(851091),
    C = l(909806),
    g = l(946116);
function h(e) {
    let {
            directoryChannelId: t,
            transitionState: l,
            initialSlide: h = g.m8.CHOOSE_GUILD,
            onClose: j,
            directoryGuildName: L,
            directoryGuildId: _,
            currentCategoryId: p,
        } = e,
        [f, A] = s.useState(h),
        [v, S] = s.useState(null),
        [b, I] = s.useState(null),
        [N, E] = s.useState(null),
        [y, H] = s.useState(null),
        [M, T] = s.useState(""),
        [G, k] = s.useState(p ?? g.mU.UNCATEGORIZED),
        [U, D] = s.useState(!1),
        { availableGuilds: Z, addedGuilds: O, loading: R } = (0, o.A)(_, t);
    s.useEffect(() => {
        A(h);
    }, [A, h]);
    let B = async () => {
            let e = y;
            if (!U) {
                if (null == b || null == v) return;
                let t = await n.A.createGuildFromTemplate(b, N, v);
                H((e = (0, c.Y1)(t)));
            }
            null != e && (await d.WD(t, e.id, M, G), A(g.m8.CONFIRMATION));
        },
        V = null;
    switch (f) {
        case g.m8.CHOOSE_GUILD:
            V = (0, i.jsx)(u.A, {
                directoryChannelId: t,
                directoryGuildName: L,
                onGuildChosen: (e) => {
                    D(!0), A(g.m8.CUSTOMIZE_EXISTING_GUILD), H(e);
                },
                handleChooseCreate: () => {
                    D(!1), A(g.m8.GUILD_TEMPLATES);
                },
                availableGuilds: Z,
                addedGuilds: O,
                loading: R,
            });
            break;
        case g.m8.GUILD_TEMPLATES:
            V = (0, i.jsx)(C.A, {
                directoryGuildName: L,
                onChooseTemplate: (e) => {
                    D(!1), A(g.m8.CUSTOMIZE_NEW_GUILD), S(e);
                },
                onBack: () => A(g.m8.CHOOSE_GUILD),
            });
            break;
        case g.m8.CUSTOMIZE_NEW_GUILD:
            V = (0, i.jsx)(r.A, {
                isSlideReady: !0,
                guildTemplate: v,
                onHubGuildInfoSet: (e, t) => {
                    I(e), E(t), A(g.m8.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => A(g.m8.GUILD_TEMPLATES),
            });
            break;
        case g.m8.CUSTOMIZE_EXISTING_GUILD:
            V = (0, i.jsx)(m.A, {
                directoryChannelId: t,
                description: M,
                onDescriptionChange: T,
                categoryId: G,
                onCategoryIdChange: k,
                onSubmit: B,
                onBack: () => A(U ? g.m8.CHOOSE_GUILD : g.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case g.m8.CONFIRMATION:
            V = (0, i.jsx)(x.A, { directoryGuildName: L, guildToAdd: y, isExistingGuildFlow: U, onClose: j });
    }
    return (0, i.jsx)("div", { children: (0, i.jsx)(a.d, { transitionState: l, onClose: j, children: V }) });
}
