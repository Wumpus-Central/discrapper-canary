"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(73939),
    u = n(36525),
    m = n(397927),
    g = n(416052),
    x = n(975807),
    h = n(58149),
    _ = n(465932),
    A = n(555337),
    p = n(954571),
    f = n(300233),
    j = n(599941),
    N = n(652215),
    E = n(985018),
    b = n(218251);
let T = [
        0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3,
        0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236,
    ],
    C =
        /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    I = T[4],
    v = (e) => {
        let { guild: t, canEnable: n } = e,
            l = (0, j.Tq)(t.id),
            { loading: a, updateSubscriptionsSettings: d } = (0, j.KE)(),
            [A, f] = s.useState(t.features.has(N.GuildFeatures.CREATOR_STORE_PAGE)),
            [v, S] = s.useState(l?.store_page_primary_color ?? I),
            [y, R] = s.useState(l?.store_page_trailer_url),
            O = null == y || null != y.match(C),
            [G, L] = s.useState(l?.store_page_show_subscriber_count ?? !1),
            D = s.useRef(l?.store_page_slug).current,
            M =
                A !== t.features.has(N.GuildFeatures.CREATOR_STORE_PAGE) ||
                (l?.store_page_primary_color == null && v !== I) ||
                (l?.store_page_primary_color != null && v !== l?.store_page_primary_color) ||
                y !== l?.store_page_trailer_url ||
                (null != G && G !== l?.store_page_show_subscriber_count),
            k = async () => {
                o()(null != l, "Settings must be defined");
                let e = {};
                A !== t.features.has(N.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = A),
                    ((l?.store_page_primary_color == null && v !== I) ||
                        (l?.store_page_primary_color != null && v !== l?.store_page_primary_color)) &&
                        (e.store_page_primary_color = v),
                    y !== l?.store_page_trailer_url && (e.store_page_trailer_url = y),
                    G !== l?.store_page_show_subscriber_count && (e.store_page_show_subscriber_count = G),
                    Object.keys(e).length > 0 &&
                        (await d(t.id, e),
                        "store_page_enabled" in e &&
                            p.default.track(N.HAw.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
                                enabled: A,
                                ...(0, h.H$)(t.id),
                            }));
            },
            U = N.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(D),
            P = null != y && y === l?.store_page_trailer_url,
            { shouldRestrictUpdatingCreatorMonetizationSettings: w } = (0, _.nq)(t.id),
            B = w || !O,
            F = !A && !n;
        return (0, i.jsxs)(m.BJc, {
            gap: 24,
            children: [
                (0, i.jsx)(m.Heading, { variant: "heading-lg/semibold", children: E.intl.string(E.t.N6Tg9A) }),
                (0, i.jsxs)(m.BJc, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(m.dOG, {
                            label: E.intl.string(E.t.lwvl1g),
                            checked: A,
                            disabled: w || F,
                            description: E.intl.string(E.t["uU/69/"]),
                            onChange: (e) => f(e),
                        }),
                        F
                            ? (0, i.jsx)(m.po8, { messageType: m.YCn.WARNING, children: E.intl.string(E.t.mIgfEu) })
                            : null,
                    ],
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsxs)(m.D0$, {
                    label: E.intl.string(E.t.N46WOv),
                    disabled: w,
                    children: [
                        (0, i.jsx)(g.A, { value: U, className: r()({ [b.r9]: w }) }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: b.eZ,
                            children: (0, i.jsx)(m.Button, {
                                variant: "primary",
                                text: E.intl.string(E.t.CaOYqc),
                                onClick: () => (0, x.A)(U),
                                disabled: w,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.D0$, {
                    label: E.intl.string(E.t.W39uIL),
                    description: E.intl.string(E.t.B6XtE7),
                    children: (0, i.jsxs)("div", {
                        className: b.xu,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: "text-md/medium",
                                style: { backgroundColor: `#${v.toString(16).padStart(6, "0")}` },
                                className: b.pB,
                                children: E.intl.string(E.t.l6iM36),
                            }),
                            (0, i.jsx)(m.skP, {
                                colors: T,
                                customColor: null,
                                defaultColor: I,
                                value: v,
                                onChange: (e) => S(e),
                                renderDefaultButton: () => null,
                                renderCustomButton: () => null,
                                colorContainerClassName: b.jP,
                                disabled: w,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.ksK, {
                    label: E.intl.string(E.t.k2yRvd),
                    description: E.intl.string(E.t.amd996),
                    value: y ?? void 0,
                    onChange: (e) => R("" === e ? null : e),
                    error: O ? null : E.intl.string(E.t["1kL79Q"]),
                    placeholder: E.intl.string(E.t["+I4gdT"]),
                    trailing: O && P ? m.yr3 : void 0,
                    disabled: w,
                }),
                (0, i.jsx)(m.cGx, {}),
                (0, i.jsx)(m.nVY, {
                    label: E.intl.string(E.t.AU2HU0),
                    description: E.intl.string(E.t.iWBt3Q),
                    children: (0, i.jsx)(m.dOG, {
                        label: E.intl.string(E.t.hJsAPo),
                        description: E.intl.string(E.t.hn65ET),
                        icon: m.nys,
                        checked: G,
                        onChange: (e) => L(e),
                        disabled: w,
                    }),
                }),
                (0, i.jsx)(c.F, {
                    component: "div",
                    className: b.se,
                    children:
                        M &&
                        (0, i.jsx)(m.FQk, {
                            children: (0, i.jsx)(u.A, {
                                submitting: a,
                                onReset: () => {
                                    f(t.features.has(N.GuildFeatures.CREATOR_STORE_PAGE)),
                                        S(l?.store_page_primary_color ?? I),
                                        R(l?.store_page_trailer_url),
                                        L(l?.store_page_show_subscriber_count ?? !1);
                                },
                                onSave: k,
                                disabled: B,
                            }),
                        }),
                }),
            ],
        });
    };
function S() {
    let e = (0, d.bG)([A.A], () => A.A.getGuild()),
        t = (0, f.X)(),
        n = (0, j.uP)(e?.id).some((e) => e.published);
    return null != e && t ? (0, i.jsx)(v, { guild: e, canEnable: n }) : (0, i.jsx)(m.y$y, {});
}
function y() {
    let e = (0, d.bG)([A.A], () => A.A.getGuild());
    return (0, i.jsx)(f.H, { guildId: e?.id, refetchOnMount: !0, children: (0, i.jsx)(S, {}) });
}
