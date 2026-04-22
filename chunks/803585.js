let i, l;
n.d(t, { A: () => U });
var a = n(627968),
    r = n(64700),
    s = n(862482),
    o = n(939249),
    c = n(534514),
    u = n(834730),
    d = n(935462),
    _ = n(292666),
    p = n(821609),
    f = n(846293),
    m = n(198982),
    I = n(235986),
    N = n(976860),
    h = n(4274),
    C = n(652215),
    A = n(985018),
    S = n(250310),
    E = n(906471),
    g = n(168482);
let D = "hTKzmak",
    T =
        ((i = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == i && ((i = location.host), (l = C.BVt.INVITE(""))),
        `${location.protocol}//${i}${l}/`),
    L = [D, `${T}${D}`, `${T}wumpus-friends`],
    x = (e) => {
        let { onClick: t } = e;
        return (0, a.jsxs)(o.D, {
            className: S.qd,
            onClick: () => {
                t(), (0, N.pX)(C.BVt.GUILD_DISCOVERY);
            },
            children: [
                (0, a.jsx)("img", { width: 40, height: 40, className: S.aL, alt: "", src: g }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(c.D, {
                            className: S.qg,
                            variant: "heading-md/semibold",
                            children: A.intl.string(A.t.DwDxDU),
                        }),
                        (0, a.jsx)(u.E, {
                            className: S.qg,
                            variant: "text-xs/normal",
                            children: A.intl.string(A.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, a.jsx)("img", { className: S.y8, alt: "", src: E }),
            ],
        });
    };
function U(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [l, N] = r.useState(""),
        [C, E] = r.useState(!1),
        [g, U] = r.useState(null),
        w = r.useRef(null);
    r.useEffect(() => {
        i && w.current?.focus();
    }, [i]);
    let b = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void U(A.intl.string(A.t.IRq5ah));
        U(null), E(!0);
        let i = t.split("/"),
            a = i[i.length - 1];
        f.Ay.resolveInvite(a, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((E(!1), null == t)) return void U(A.intl.string(A.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = f.Ay.getInviteContext("Join Guild", t);
                    f.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), f.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof m.Wl || e instanceof m.LG ? U((0, h.s)(e.code)) : U(A.intl.string(A.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                E(!1);
                let t = new m.Wl(e);
                U((0, h.s)(t.code));
            },
        );
    };
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                className: S.wx,
                direction: I.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, a.jsx)(c.D, {
                        className: S.DD,
                        variant: "heading-xl/semibold",
                        children: A.intl.string(A.t.riOUtB),
                    }),
                    (0, a.jsx)(u.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: A.intl.string(A.t["7jub2t"]),
                    }),
                    (0, a.jsx)(d.s_, { "data-migration-pending": !0, className: S.b, onClick: n }),
                ],
            }),
            (0, a.jsxs)(d.$m, {
                "data-migration-pending": !0,
                className: S.__invalid_content,
                children: [
                    (0, a.jsx)("form", {
                        onSubmit: b,
                        className: S.$j,
                        children: (0, a.jsx)(_.k, {
                            label: A.intl.string(A.t.qreV25),
                            required: !0,
                            error: g,
                            value: l,
                            onChange: N,
                            placeholder: `${T}${D}`,
                            inputRef: w,
                        }),
                    }),
                    (0, a.jsx)(u.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t.Bnq46H),
                    }),
                    (0, a.jsx)("div", {
                        className: S.eU,
                        children: L.map((e) =>
                            (0, a.jsx)(o.D, { className: S.Bb, onClick: () => N(e), children: e }, e),
                        ),
                    }),
                    (0, a.jsx)(x, { onClick: n }),
                ],
            }),
            (0, a.jsxs)(d.jl, {
                "data-migration-pending": !0,
                className: S.qr,
                children: [
                    (0, a.jsx)(p.$, { variant: "primary", text: A.intl.string(A.t["Ts/9Ac"]), loading: C, onClick: b }),
                    (0, a.jsx)(s.$n, {
                        "data-migration-pending": !0,
                        color: s.$n.Colors.PRIMARY,
                        look: s.$n.Looks.LINK,
                        size: s.$n.Sizes.MIN,
                        onClick: t,
                        children: A.intl.string(A.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
