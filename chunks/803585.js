let r, l;
n.d(t, { A: () => g }), n(896048), n(733351), n(747238);
var a = n(627968),
    o = n(64700),
    i = n(421380),
    c = n(397927),
    s = n(846293),
    u = n(198982),
    d = n(235986),
    p = n(976860),
    f = n(4274),
    b = n(652215),
    _ = n(985018),
    m = n(516073),
    S = n(906471),
    N = n(168482);
let I = "hTKzmak",
    O =
        ((r = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == r && ((r = location.host), (l = b.BVt.INVITE(""))),
        "".concat(location.protocol, "//").concat(r).concat(l, "/")),
    T = [I, "".concat(O).concat(I), "".concat(O).concat("wumpus-friends")],
    E = (e) => {
        let { onClick: t } = e;
        return (0, a.jsxs)(c.DUT, {
            className: m.qd,
            onClick: () => {
                t(), (0, p.pX)(b.BVt.GUILD_DISCOVERY);
            },
            children: [
                (0, a.jsx)("img", {
                    width: 40,
                    height: 40,
                    className: m.aL,
                    alt: "",
                    src: N,
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(c.Heading, {
                            className: m.qg,
                            variant: "heading-md/semibold",
                            children: _.intl.string(_.t.DwDxDU),
                        }),
                        (0, a.jsx)(c.Text, {
                            className: m.qg,
                            variant: "text-xs/normal",
                            children: _.intl.string(_.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    className: m.y8,
                    alt: "",
                    src: S,
                }),
            ],
        });
    };
function g(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [l, p] = o.useState(""),
        [b, S] = o.useState(!1),
        [N, g] = o.useState(null),
        A = o.useRef(null);
    o.useEffect(() => {
        var e;
        r && (null == (e = A.current) || e.focus());
    }, [r]);
    let C = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void g(_.intl.string(_.t.IRq5ah));
        g(null), S(!0);
        let r = t.split("/"),
            a = r[r.length - 1];
        s.Ay.resolveInvite(a, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((S(!1), null == t)) return void g(_.intl.string(_.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = s.Ay.getInviteContext("Join Guild", t);
                    s.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), s.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof u.Wl || e instanceof u.LG ? g((0, f.s)(e.code)) : g(_.intl.string(_.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                S(!1);
                let t = new u.Wl(e);
                g((0, f.s)(t.code));
            },
        );
    };
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(c.rQ0, {
                "data-migration-pending": !0,
                className: m.wx,
                direction: d.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: m.DD,
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t.riOUtB),
                    }),
                    (0, a.jsx)(c.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: _.intl.string(_.t["7jub2t"]),
                    }),
                    (0, a.jsx)(c.s_y, {
                        "data-migration-pending": !0,
                        className: m.b,
                        onClick: n,
                    }),
                ],
            }),
            (0, a.jsxs)(c.$mQ, {
                "data-migration-pending": !0,
                className: m.__invalid_content,
                children: [
                    (0, a.jsx)("form", {
                        onSubmit: C,
                        className: m.$j,
                        children: (0, a.jsx)(c.ksK, {
                            label: _.intl.string(_.t.qreV25),
                            required: !0,
                            error: N,
                            value: l,
                            onChange: p,
                            placeholder: "".concat(O).concat(I),
                            inputRef: A,
                        }),
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: _.intl.string(_.t.Bnq46H),
                    }),
                    (0, a.jsx)("div", {
                        className: m.eU,
                        children: T.map((e) =>
                            (0, a.jsx)(
                                c.DUT,
                                {
                                    className: m.Bb,
                                    onClick: () => p(e),
                                    children: e,
                                },
                                e,
                            ),
                        ),
                    }),
                    (0, a.jsx)(E, { onClick: n }),
                ],
            }),
            (0, a.jsxs)(c.jlY, {
                "data-migration-pending": !0,
                className: m.qr,
                children: [
                    (0, a.jsx)(c.Button, {
                        variant: "primary",
                        text: _.intl.string(_.t["Ts/9Ac"]),
                        loading: b,
                        onClick: C,
                    }),
                    (0, a.jsx)(i.$n, {
                        "data-migration-pending": !0,
                        color: i.$n.Colors.PRIMARY,
                        look: i.$n.Looks.LINK,
                        size: i.$n.Sizes.MIN,
                        onClick: t,
                        children: _.intl.string(_.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
