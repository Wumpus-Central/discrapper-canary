n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    d = n(311907),
    c = n(73939),
    u = n(36525),
    m = n(331322),
    g = n(534514),
    h = n(243721),
    x = n(512950),
    _ = n(404778),
    p = n(452027),
    A = n(821609),
    E = n(834730),
    f = n(508274),
    j = n(292666),
    N = n(628284),
    I = n(270003),
    C = n(950305),
    b = n(871682),
    v = n(289873),
    S = n(416052),
    T = n(975807),
    y = n(58149),
    R = n(465932),
    L = n(555337),
    D = n(954571),
    O = n(300233),
    G = n(599941),
    M = n(652215),
    k = n(985018),
    U = n(655904);
let w = [
        0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3,
        0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236,
    ],
    P =
        /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    B = w[4],
    F = (e) => {
        let { guild: t, canEnable: n } = e,
            s = (0, G.Tq)(t.id),
            { loading: a, updateSubscriptionsSettings: d } = (0, G.KE)(),
            [v, L] = l.useState(t.features.has(M.GuildFeatures.CREATOR_STORE_PAGE)),
            [O, F] = l.useState(s?.store_page_primary_color ?? B),
            [H, V] = l.useState(s?.store_page_trailer_url),
            z = null == H || null != H.match(P),
            [W, Y] = l.useState(s?.store_page_show_subscriber_count ?? !1),
            K = l.useRef(s?.store_page_slug).current,
            X =
                v !== t.features.has(M.GuildFeatures.CREATOR_STORE_PAGE) ||
                (s?.store_page_primary_color == null && O !== B) ||
                (s?.store_page_primary_color != null && O !== s?.store_page_primary_color) ||
                H !== s?.store_page_trailer_url ||
                (null != W && W !== s?.store_page_show_subscriber_count),
            Z = async () => {
                o()(null != s, "Settings must be defined");
                let e = {};
                v !== t.features.has(M.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = v),
                    ((s?.store_page_primary_color == null && O !== B) ||
                        (s?.store_page_primary_color != null && O !== s?.store_page_primary_color)) &&
                        (e.store_page_primary_color = O),
                    H !== s?.store_page_trailer_url && (e.store_page_trailer_url = H),
                    W !== s?.store_page_show_subscriber_count && (e.store_page_show_subscriber_count = W),
                    Object.keys(e).length > 0 &&
                        (await d(t.id, e),
                        "store_page_enabled" in e &&
                            D.default.track(M.HAw.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, {
                                enabled: v,
                                ...(0, y.H$)(t.id),
                            }));
            },
            J = M.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(K),
            q = null != H && H === s?.store_page_trailer_url,
            { shouldRestrictUpdatingCreatorMonetizationSettings: Q } = (0, R.nq)(t.id),
            $ = Q || !z,
            ee = !v && !n;
        return (0, i.jsxs)(m.B, {
            gap: 24,
            children: [
                (0, i.jsx)(g.D, { variant: "heading-lg/semibold", children: k.intl.string(k.t.N6Tg9A) }),
                (0, i.jsxs)(m.B, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(h.d, {
                            label: k.intl.string(k.t.lwvl1g),
                            checked: v,
                            disabled: Q || ee,
                            description: k.intl.string(k.t["uU/69/"]),
                            onChange: (e) => L(e),
                        }),
                        ee ? (0, i.jsx)(x.p, { messageType: x.Y.WARNING, children: k.intl.string(k.t.mIgfEu) }) : null,
                    ],
                }),
                (0, i.jsx)(_.c, {}),
                (0, i.jsxs)(p.D, {
                    label: k.intl.string(k.t.N46WOv),
                    disabled: Q,
                    children: [
                        (0, i.jsx)(S.A, { value: J, className: r()({ [U.r9]: Q }) }),
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: U.eZ,
                            children: (0, i.jsx)(A.$, {
                                variant: "primary",
                                text: k.intl.string(k.t.CaOYqc),
                                onClick: () => (0, T.A)(J),
                                disabled: Q,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(_.c, {}),
                (0, i.jsx)(p.D, {
                    label: k.intl.string(k.t.W39uIL),
                    description: k.intl.string(k.t.B6XtE7),
                    children: (0, i.jsxs)("div", {
                        className: U.xu,
                        children: [
                            (0, i.jsx)(E.E, {
                                variant: "text-md/medium",
                                style: { backgroundColor: `#${O.toString(16).padStart(6, "0")}` },
                                className: U.pB,
                                children: k.intl.string(k.t.l6iM36),
                            }),
                            (0, i.jsx)(f.sk, {
                                colors: w,
                                customColor: null,
                                defaultColor: B,
                                value: O,
                                onChange: (e) => F(e),
                                renderDefaultButton: () => null,
                                renderCustomButton: () => null,
                                colorContainerClassName: U.jP,
                                disabled: Q,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(_.c, {}),
                (0, i.jsx)(j.k, {
                    label: k.intl.string(k.t.k2yRvd),
                    description: k.intl.string(k.t.amd996),
                    value: H ?? void 0,
                    onChange: (e) => V("" === e ? null : e),
                    error: z ? null : k.intl.string(k.t["1kL79Q"]),
                    placeholder: k.intl.string(k.t["+I4gdT"]),
                    trailing: z && q ? N.y : void 0,
                    disabled: Q,
                }),
                (0, i.jsx)(_.c, {}),
                (0, i.jsx)(I.n, {
                    label: k.intl.string(k.t.AU2HU0),
                    description: k.intl.string(k.t.iWBt3Q),
                    children: (0, i.jsx)(h.d, {
                        label: k.intl.string(k.t.hJsAPo),
                        description: k.intl.string(k.t.hn65ET),
                        icon: C.n,
                        checked: W,
                        onChange: (e) => Y(e),
                        disabled: Q,
                    }),
                }),
                (0, i.jsx)(c.F, {
                    component: "div",
                    className: U.se,
                    children:
                        X &&
                        (0, i.jsx)(b.F, {
                            children: (0, i.jsx)(u.A, {
                                submitting: a,
                                onReset: () => {
                                    L(t.features.has(M.GuildFeatures.CREATOR_STORE_PAGE)),
                                        F(s?.store_page_primary_color ?? B),
                                        V(s?.store_page_trailer_url),
                                        Y(s?.store_page_show_subscriber_count ?? !1);
                                },
                                onSave: Z,
                                disabled: $,
                            }),
                        }),
                }),
            ],
        });
    };
function H() {
    let e = (0, d.bG)([L.A], () => L.A.getGuild()),
        t = (0, O.X)(),
        n = (0, G.uP)(e?.id).some((e) => e.published);
    return null != e && t ? (0, i.jsx)(F, { guild: e, canEnable: n }) : (0, i.jsx)(v.y, {});
}
function V() {
    let e = (0, d.bG)([L.A], () => L.A.getGuild());
    return (0, i.jsx)(O.H, { guildId: e?.id, refetchOnMount: !0, children: (0, i.jsx)(H, {}) });
}
