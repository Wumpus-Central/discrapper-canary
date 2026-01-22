n.d(t, { default: () => j }), n(896048);
var l = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(943457),
    r = n(424912),
    c = n(860689),
    d = n(208882),
    o = n(121004),
    u = n(880392),
    x = n(843580),
    m = n(851091),
    g = n(909806),
    C = n(946116);
function j(e) {
    let {
            directoryChannelId: t,
            transitionState: n,
            initialSlide: j = C.m8.CHOOSE_GUILD,
            onClose: b,
            directoryGuildName: f,
            directoryGuildId: h,
            currentCategoryId: p,
        } = e,
        [L, v] = i.useState(j),
        [y, O] = i.useState(null),
        [S, A] = i.useState(null),
        [N, _] = i.useState(null),
        [H, I] = i.useState(null),
        [T, E] = i.useState(""),
        [M, k] = i.useState(null != p ? p : C.mU.UNCATEGORIZED),
        [D, G] = i.useState(!1),
        { availableGuilds: U, addedGuilds: w, loading: Z } = (0, o.A)(h, t);
    i.useEffect(() => {
        v(j);
    }, [v, j]);
    let P = async () => {
            let e = H;
            if (!D) {
                if (null == S || null == y) return;
                let t = await a.A.createGuildFromTemplate(S, N, y);
                I((e = (0, c.Y1)(t)));
            }
            null != e && (await d.WD(t, e.id, T, M), v(C.m8.CONFIRMATION));
        },
        R = null;
    switch (L) {
        case C.m8.CHOOSE_GUILD:
            R = (0, l.jsx)(u.A, {
                directoryChannelId: t,
                directoryGuildName: f,
                onGuildChosen: (e) => {
                    G(!0), v(C.m8.CUSTOMIZE_EXISTING_GUILD), I(e);
                },
                handleChooseCreate: () => {
                    G(!1), v(C.m8.GUILD_TEMPLATES);
                },
                availableGuilds: U,
                addedGuilds: w,
                loading: Z,
            });
            break;
        case C.m8.GUILD_TEMPLATES:
            R = (0, l.jsx)(g.A, {
                directoryGuildName: f,
                onChooseTemplate: (e) => {
                    G(!1), v(C.m8.CUSTOMIZE_NEW_GUILD), O(e);
                },
                onBack: () => v(C.m8.CHOOSE_GUILD),
            });
            break;
        case C.m8.CUSTOMIZE_NEW_GUILD:
            R = (0, l.jsx)(r.A, {
                isSlideReady: !0,
                guildTemplate: y,
                onHubGuildInfoSet: (e, t) => {
                    A(e), _(t), v(C.m8.CUSTOMIZE_EXISTING_GUILD);
                },
                onBack: () => v(C.m8.GUILD_TEMPLATES),
            });
            break;
        case C.m8.CUSTOMIZE_EXISTING_GUILD:
            R = (0, l.jsx)(x.A, {
                directoryChannelId: t,
                description: T,
                onDescriptionChange: E,
                categoryId: M,
                onCategoryIdChange: k,
                onSubmit: P,
                onBack: () => v(D ? C.m8.CHOOSE_GUILD : C.m8.CUSTOMIZE_NEW_GUILD),
            });
            break;
        case C.m8.CONFIRMATION:
            R = (0, l.jsx)(m.A, {
                directoryGuildName: f,
                guildToAdd: H,
                isExistingGuildFlow: D,
                onClose: b,
            });
    }
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(s.dWK, {
            transitionState: n,
            onClose: b,
            children: R,
        }),
    });
}
