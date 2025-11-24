let r, o;
n.d(t, { Z: () => g }), n(388685), n(781311), n(35282);
var i = n(54381),
    l = n(473749),
    a = n(755721),
    s = n(481060),
    c = n(447543),
    u = n(881052),
    _ = n(600164),
    d = n(703656),
    p = n(782605),
    m = n(981631),
    f = n(388032),
    I = n(604509),
    N = n(216019),
    T = n(286359);
let O = "hTKzmak",
    S =
        ((r = window.GLOBAL_ENV.INVITE_HOST),
        (o = ""),
        null == r && ((r = location.host), (o = m.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(r).concat(o, "/")),
    E = [O, "".concat(S).concat(O), "".concat(S).concat("wumpus-friends")],
    b = (e) => {
        let { onClick: t } = e;
        return (0, i.jsxs)(s.P3F, {
            className: I.rowContainer,
            onClick: () => {
                t(), (0, d.uL)(m.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, i.jsx)("img", {
                    width: 40,
                    height: 40,
                    className: I.rowIcon,
                    alt: "",
                    src: T,
                }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(s.Heading, {
                            className: I.rowText,
                            variant: "heading-md/semibold",
                            children: f.intl.string(f.t.DwDxDU),
                        }),
                        (0, i.jsx)(s.Text, {
                            className: I.rowText,
                            variant: "text-xs/normal",
                            children: f.intl.string(f.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, i.jsx)("img", {
                    className: I.rowArrow,
                    alt: "",
                    src: N,
                }),
            ],
        });
    };
function g(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [o, d] = l.useState(""),
        [m, N] = l.useState(!1),
        [T, g] = l.useState(null),
        C = l.useRef(null);
    l.useEffect(() => {
        var e;
        r && (null == (e = C.current) || e.focus());
    }, [r]);
    let h = (e) => {
        e.preventDefault();
        let t = o.trim();
        if ("" === t) return void g(f.intl.string(f.t.IRq5ah));
        g(null), N(!0);
        let r = t.split("/"),
            i = r[r.length - 1];
        c.ZP.resolveInvite(i, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((N(!1), null == t)) return void g(f.intl.string(f.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = c.ZP.getInviteContext("Join Guild", t);
                    c.ZP.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), c.ZP.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof u.yZ || e instanceof u.Hx ? g((0, p.O)(e.code)) : g(f.intl.string(f.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                N(!1);
                let t = new u.yZ(e);
                g((0, p.O)(t.code));
            },
        );
    };
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(s.xBx, {
                "data-migration-pending": !0,
                className: I.header,
                direction: _.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: I.title,
                        variant: "heading-xl/semibold",
                        children: f.intl.string(f.t.riOUtB),
                    }),
                    (0, i.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: f.intl.string(f.t["7jub2t"]),
                    }),
                    (0, i.jsx)(s.olH, {
                        "data-migration-pending": !0,
                        className: I.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, i.jsxs)(s.hzk, {
                "data-migration-pending": !0,
                className: I.__invalid_content,
                children: [
                    (0, i.jsx)("form", {
                        onSubmit: h,
                        className: I.inputForm,
                        children: (0, i.jsx)(s.oil, {
                            label: f.intl.string(f.t.qreV25),
                            required: !0,
                            error: T,
                            value: o,
                            onChange: d,
                            placeholder: "".concat(S).concat(O),
                            inputRef: C,
                        }),
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: f.intl.string(f.t.Bnq46H),
                    }),
                    (0, i.jsx)("div", {
                        className: I.sampleLinks,
                        children: E.map((e) =>
                            (0, i.jsx)(
                                s.P3F,
                                {
                                    className: I.sampleLink,
                                    onClick: () => d(e),
                                    children: e,
                                },
                                e,
                            ),
                        ),
                    }),
                    (0, i.jsx)(b, { onClick: n }),
                ],
            }),
            (0, i.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: I.footer,
                children: [
                    (0, i.jsx)(s.Button, {
                        variant: "primary",
                        text: f.intl.string(f.t["Ts/9Ac"]),
                        loading: m,
                        onClick: h,
                    }),
                    (0, i.jsx)(a.zx, {
                        "data-migration-pending": !0,
                        color: a.zx.Colors.PRIMARY,
                        look: a.zx.Looks.LINK,
                        size: a.zx.Sizes.MIN,
                        onClick: t,
                        children: f.intl.string(f.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
