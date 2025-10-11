t.d(i, { Z: () => v }), t(953529), t(388685), t(35282);
var n = t(951288),
    l = t(647438),
    r = t(120356),
    s = t.n(r),
    a = t(780384),
    u = t(481060),
    o = t(410030),
    c = t(686546),
    d = t(372769),
    E = t(134432),
    f = t(768581),
    I = t(624138),
    _ = t(388032),
    S = t(607032),
    g = t(129512),
    m = t(330065);
let h = [16, 16, 14, 14, 12, 10, 8],
    v = function (e) {
        var i, t;
        let {
                guild: r,
                disabled: v,
                small: T,
                loading: p = !1,
                description: A,
                memberCount: N,
                presenceCount: C,
                className: D,
            } = e,
            y = (0, o.ZP)(),
            [O, P] = l.useState(!1);
        if (null == r || p)
            return (0, n.jsx)("div", {
                className: s()(D, S.card, S.cardPlaceholder, {
                    [S.cardSmall]: T,
                    [S.cardDisabled]: v,
                }),
            });
        let { name: L } = r,
            R =
                null != r.discoverySplash && /^data:/.test(r.discoverySplash)
                    ? r.discoverySplash
                    : f.ZP.getGuildDiscoverySplashURL({
                          id: r.id,
                          splash: r.discoverySplash,
                          size: 240 * (0, E.x_)(),
                      }),
            b = (0, a.wj)(y) ? g : m,
            j =
                null !=
                (i = f.ZP.getGuildIconURL({
                    id: r.id,
                    icon: r.icon,
                    size: 40,
                }))
                    ? i
                    : void 0,
            V = null != r.description ? r.description : A,
            G = null != N ? N : null == r ? void 0 : r.memberCount,
            M = null != C ? C : null == r ? void 0 : r.presenceCount,
            x = null;
        if (null != j)
            x = (0, n.jsx)("img", {
                src: j,
                alt: "",
                className: S.avatar,
            });
        else {
            let e = (0, I.Zg)(r.name);
            x = (0, n.jsx)("div", {
                className: S.defaultIcon,
                children: (0, n.jsx)(u.Text, {
                    className: S.acronym,
                    style: { fontSize: null != (t = h[e.length]) ? t : h[h.length - 1] },
                    variant: "text-sm/normal",
                    children: e,
                }),
            });
        }
        return (0, n.jsxs)("div", {
            className: s()(D, S.card, {
                [S.cardSmall]: T,
                [S.cardDisabled]: v,
                [S.splashLoaded]: O,
            }),
            children: [
                (0, n.jsxs)("div", {
                    className: S.cardHeader,
                    children: [
                        (0, n.jsx)("div", {
                            className: S.splash,
                            children: (0, n.jsx)("img", {
                                src: null != R ? R : b,
                                alt: "",
                                className: S.splashImage,
                                onLoad: () => P(!0),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: S.guildIcon,
                            children: (0, n.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, n.jsx)("div", {
                                    className: S.iconMask,
                                    children: (0, n.jsx)(c.ZP, {
                                        mask: c.ZP.Masks.SQUIRCLE,
                                        width: 40,
                                        height: 40,
                                        children: null != x ? x : null,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: S.guildInfo,
                    children: [
                        (0, n.jsxs)("div", {
                            className: S.title,
                            children: [
                                (0, n.jsx)(d.Z, {
                                    className: S.verifiedIcon,
                                    guild: r,
                                    tooltipColor: u.aML.Colors.PRIMARY,
                                }),
                                (0, n.jsx)(u.Text, {
                                    className: S.guildName,
                                    variant: "text-md/normal",
                                    children: (0, n.jsx)("span", { children: L }),
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: S.descriptionContainer,
                            children: (0, n.jsx)(u.Text, {
                                lineClamp: 3,
                                className: S.description,
                                variant: "text-sm/normal",
                                tag: "span",
                                children: V,
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: S.memberInfo,
                            children: [
                                null != M &&
                                    (0, n.jsxs)("div", {
                                        className: S.memberCount,
                                        children: [
                                            (0, n.jsx)("div", { className: S.dotOnline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: "text-xs/normal",
                                                children: T
                                                    ? _.intl.formatToPlainString(_.t.YMor7u, { count: M })
                                                    : _.intl.formatToPlainString(_.t["LC+S+v"], { membersOnline: M }),
                                            }),
                                        ],
                                    }),
                                null != G &&
                                    (0, n.jsxs)("div", {
                                        className: S.memberCount,
                                        children: [
                                            (0, n.jsx)("div", { className: S.dotOffline }),
                                            (0, n.jsx)(u.Text, {
                                                variant: "text-xs/normal",
                                                children: T
                                                    ? _.intl.formatToPlainString(_.t.YMor7u, { count: G })
                                                    : _.intl.formatToPlainString(_.t.zRl6XV, { count: G }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
