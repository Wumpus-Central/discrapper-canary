let i, l;
n.d(t, { A: () => D });
var s = n(627968),
    a = n(64700),
    r = n(862482),
    o = n(939249),
    c = n(534514),
    d = n(834730),
    u = n(935462),
    p = n(292666),
    m = n(821609),
    x = n(846293),
    g = n(198982),
    h = n(235986),
    C = n(976860),
    N = n(4274),
    b = n(652215),
    j = n(985018),
    E = n(250310),
    A = n(906471),
    v = n(168482);
let S = "hTKzmak",
    I =
        ((i = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == i && ((i = location.host), (l = b.BVt.INVITE(""))),
        `${location.protocol}//${i}${l}/`),
    f = [S, `${I}${S}`, `${I}wumpus-friends`],
    y = (e) => {
        let { onClick: t } = e;
        return (0, s.jsxs)(o.D, {
            className: E.qd,
            onClick: () => {
                t(), (0, C.pX)(b.BVt.GUILD_DISCOVERY);
            },
            children: [
                (0, s.jsx)("img", { width: 40, height: 40, className: E.aL, alt: "", src: v }),
                (0, s.jsxs)("div", {
                    children: [
                        (0, s.jsx)(c.D, {
                            className: E.qg,
                            variant: "heading-md/semibold",
                            children: j.intl.string(j.t.DwDxDU),
                        }),
                        (0, s.jsx)(d.E, {
                            className: E.qg,
                            variant: "text-xs/normal",
                            children: j.intl.string(j.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, s.jsx)("img", { className: E.y8, alt: "", src: A }),
            ],
        });
    };
function D(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [l, C] = a.useState(""),
        [b, A] = a.useState(!1),
        [v, D] = a.useState(null),
        T = a.useRef(null);
    a.useEffect(() => {
        i && T.current?.focus();
    }, [i]);
    let k = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void D(j.intl.string(j.t.IRq5ah));
        D(null), A(!0);
        let i = t.split("/"),
            s = i[i.length - 1];
        x.Ay.resolveInvite(s, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((A(!1), null == t)) return void D(j.intl.string(j.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = x.Ay.getInviteContext("Join Guild", t);
                    x.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), x.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof g.Wl || e instanceof g.LG ? D((0, N.s)(e.code)) : D(j.intl.string(j.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                A(!1);
                let t = new g.Wl(e);
                D((0, N.s)(t.code));
            },
        );
    };
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(u.rQ, {
                "data-migration-pending": !0,
                className: E.wx,
                direction: h.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, s.jsx)(c.D, {
                        className: E.DD,
                        variant: "heading-xl/semibold",
                        children: j.intl.string(j.t.riOUtB),
                    }),
                    (0, s.jsx)(d.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: j.intl.string(j.t["7jub2t"]),
                    }),
                    (0, s.jsx)(u.s_, { "data-migration-pending": !0, className: E.b, onClick: n }),
                ],
            }),
            (0, s.jsxs)(u.$m, {
                "data-migration-pending": !0,
                className: E.__invalid_content,
                children: [
                    (0, s.jsx)("form", {
                        onSubmit: k,
                        className: E.$j,
                        children: (0, s.jsx)(p.k, {
                            label: j.intl.string(j.t.qreV25),
                            required: !0,
                            error: v,
                            value: l,
                            onChange: C,
                            placeholder: `${I}${S}`,
                            inputRef: T,
                        }),
                    }),
                    (0, s.jsx)(d.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: j.intl.string(j.t.Bnq46H),
                    }),
                    (0, s.jsx)("div", {
                        className: E.eU,
                        children: f.map((e) =>
                            (0, s.jsx)(o.D, { className: E.Bb, onClick: () => C(e), children: e }, e),
                        ),
                    }),
                    (0, s.jsx)(y, { onClick: n }),
                ],
            }),
            (0, s.jsxs)(u.jl, {
                "data-migration-pending": !0,
                className: E.qr,
                children: [
                    (0, s.jsx)(m.$, { variant: "primary", text: j.intl.string(j.t["Ts/9Ac"]), loading: b, onClick: k }),
                    (0, s.jsx)(r.$n, {
                        "data-migration-pending": !0,
                        color: r.$n.Colors.PRIMARY,
                        look: r.$n.Looks.LINK,
                        size: r.$n.Sizes.MIN,
                        onClick: t,
                        children: j.intl.string(j.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
