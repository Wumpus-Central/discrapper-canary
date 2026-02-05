let i, l;
n.d(t, { A: () => D });
var r = n(627968),
    s = n(64700),
    a = n(421380),
    o = n(397927),
    c = n(846293),
    _ = n(198982),
    u = n(235986),
    d = n(976860),
    I = n(4274),
    p = n(652215),
    N = n(985018),
    S = n(516073),
    m = n(906471),
    A = n(168482);
let T = "hTKzmak",
    E =
        ((i = window.GLOBAL_ENV.INVITE_HOST),
        (l = ""),
        null == i && ((i = location.host), (l = p.BVt.INVITE(""))),
        `${location.protocol}//${i}${l}/`),
    C = [T, `${E}${T}`, `${E}wumpus-friends`],
    f = (e) => {
        let { onClick: t } = e;
        return (0, r.jsxs)(o.DUT, {
            className: S.qd,
            onClick: () => {
                t(), (0, d.pX)(p.BVt.GUILD_DISCOVERY);
            },
            children: [
                (0, r.jsx)("img", { width: 40, height: 40, className: S.aL, alt: "", src: A }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(o.Heading, {
                            className: S.qg,
                            variant: "heading-md/semibold",
                            children: N.intl.string(N.t.DwDxDU),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: S.qg,
                            variant: "text-xs/normal",
                            children: N.intl.string(N.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, r.jsx)("img", { className: S.y8, alt: "", src: m }),
            ],
        });
    };
function D(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [l, d] = s.useState(""),
        [p, m] = s.useState(!1),
        [A, D] = s.useState(null),
        L = s.useRef(null);
    s.useEffect(() => {
        i && L.current?.focus();
    }, [i]);
    let g = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ("" === t) return void D(N.intl.string(N.t.IRq5ah));
        D(null), m(!0);
        let i = t.split("/"),
            r = i[i.length - 1];
        c.Ay.resolveInvite(r, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((m(!1), null == t)) return void D(N.intl.string(N.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = c.Ay.getInviteContext("Join Guild", t);
                    c.Ay.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), c.Ay.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof _.Wl || e instanceof _.LG ? D((0, I.s)(e.code)) : D(N.intl.string(N.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                m(!1);
                let t = new _.Wl(e);
                D((0, I.s)(t.code));
            },
        );
    };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: S.wx,
                direction: u.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)(o.Heading, {
                        className: S.DD,
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t.riOUtB),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: N.intl.string(N.t["7jub2t"]),
                    }),
                    (0, r.jsx)(o.s_y, { "data-migration-pending": !0, className: S.b, onClick: n }),
                ],
            }),
            (0, r.jsxs)(o.$mQ, {
                "data-migration-pending": !0,
                className: S.__invalid_content,
                children: [
                    (0, r.jsx)("form", {
                        onSubmit: g,
                        className: S.$j,
                        children: (0, r.jsx)(o.ksK, {
                            label: N.intl.string(N.t.qreV25),
                            required: !0,
                            error: A,
                            value: l,
                            onChange: d,
                            placeholder: `${E}${T}`,
                            inputRef: L,
                        }),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: N.intl.string(N.t.Bnq46H),
                    }),
                    (0, r.jsx)("div", {
                        className: S.eU,
                        children: C.map((e) =>
                            (0, r.jsx)(o.DUT, { className: S.Bb, onClick: () => d(e), children: e }, e),
                        ),
                    }),
                    (0, r.jsx)(f, { onClick: n }),
                ],
            }),
            (0, r.jsxs)(o.jlY, {
                "data-migration-pending": !0,
                className: S.qr,
                children: [
                    (0, r.jsx)(o.Button, {
                        variant: "primary",
                        text: N.intl.string(N.t["Ts/9Ac"]),
                        loading: p,
                        onClick: g,
                    }),
                    (0, r.jsx)(a.$n, {
                        "data-migration-pending": !0,
                        color: a.$n.Colors.PRIMARY,
                        look: a.$n.Looks.LINK,
                        size: a.$n.Sizes.MIN,
                        onClick: t,
                        children: N.intl.string(N.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
