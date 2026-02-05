l.d(t, { default: () => h });
var i = l(627968),
    s = l(64700),
    a = l(158954),
    n = l(943457),
    r = l(424912),
    c = l(860689),
    d = l(208882),
    o = l(121004),
    u = l(880392),
    x = l(843580),
    m = l(851091),
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
            currentCategoryId: f,
        } = e,
        [p, A] = s.useState(h),
        [v, S] = s.useState(null),
        [b, I] = s.useState(null),
        [N, T] = s.useState(null),
        [H, y] = s.useState(null),
        [M, G] = s.useState(""),
        [E, U] = s.useState(f ?? g.mU.UNCATEGORIZED),
        [k, D] = s.useState(!1),
        { availableGuilds: Z, addedGuilds: O, loading: R } = (0, o.A)(_, t);
    s.useEffect(() => {
        A(h);
    }, [A, h]);
    let B = async () => {
            let e = H;
            if (!k) {
                if (null == b || null == v) return;
                let t = await n.A.createGuildFromTemplate(b, N, v);
                y((e = (0, c.Y1)(t)));
            }
            null != e && (await d.WD(t, e.id, M, E), A(g.m8.CONFIRMATION));
        },
        V = null;
    switch (p) {
        case g.m8.CHOOSE_GUILD:
            V = (0, i.jsx)(u.A, {
                directoryChannelId: t,
                directoryGuildName: L,
                onGuildChosen: (e) => {
                    D(!0), A(g.m8.CUSTOMIZE_EXISTING_GUILD), y(e);
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
                    I(e), T(t), A(g.m8.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => A(g.m8.GUILD_TEMPLATES),
            });
            break;
        case g.m8.CUSTOMIZE_EXISTING_GUILD:
            V = (0, i.jsx)(x.A, {
                directoryChannelId: t,
                description: M,
                onDescriptionChange: G,
                categoryId: E,
                onCategoryIdChange: U,
                onSubmit: B,
                onBack: () => A(k ? g.m8.CHOOSE_GUILD : g.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case g.m8.CONFIRMATION:
            V = (0, i.jsx)(m.A, { directoryGuildName: L, guildToAdd: H, isExistingGuildFlow: k, onClose: j });
    }
    return (0, i.jsx)("div", { children: (0, i.jsx)(a.dWK, { transitionState: l, onClose: j, children: V }) });
}
