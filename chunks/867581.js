let r, o;
n.d(t, { Z: () => C }), n(388685), n(781311), n(35282);
var l = n(54381),
    i = n(473749),
    a = n(755721),
    s = n(481060),
    c = n(447543),
    u = n(881052),
    _ = n(600164),
    d = n(703656),
    p = n(782605),
    m = n(981631),
    f = n(388032),
    I = n(927931),
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
        return (0, l.jsxs)(s.P3F, {
            className: I.rowContainer,
            onClick: () => {
                t(), (0, d.uL)(m.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, l.jsx)("img", {
                    width: 40,
                    height: 40,
                    className: I.rowIcon,
                    alt: "",
                    src: T,
                }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(s.Heading, {
                            className: I.rowText,
                            variant: "heading-md/semibold",
                            children: f.intl.string(f.t.DwDxDU),
                        }),
                        (0, l.jsx)(s.Text, {
                            className: I.rowText,
                            variant: "text-xs/normal",
                            children: f.intl.string(f.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, l.jsx)("img", {
                    className: I.rowArrow,
                    alt: "",
                    src: N,
                }),
            ],
        });
    };
function C(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [o, d] = i.useState(""),
        [m, N] = i.useState(!1),
        [T, C] = i.useState(null),
        h = i.useRef(null);
    i.useEffect(() => {
        var e;
        r && (null == (e = h.current) || e.focus());
    }, [r]);
    let g = (e) => {
        e.preventDefault();
        let t = o.trim();
        if ("" === t) return void C(f.intl.string(f.t.IRq5ah));
        C(null), N(!0);
        let r = t.split("/"),
            l = r[r.length - 1];
        c.ZP.resolveInvite(l, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((N(!1), null == t)) return void C(f.intl.string(f.t["GEYI+Z"]));
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
                            e instanceof u.yZ || e instanceof u.Hx ? C((0, p.O)(e.code)) : C(f.intl.string(f.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                N(!1);
                let t = new u.yZ(e);
                C((0, p.O)(t.code));
            },
        );
    };
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(s.xBx, {
                className: I.header,
                direction: _.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)(s.Heading, {
                        className: I.title,
                        variant: "heading-xl/semibold",
                        children: f.intl.string(f.t.riOUtB),
                    }),
                    (0, l.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: f.intl.string(f.t["7jub2t"]),
                    }),
                    (0, l.jsx)(s.olH, {
                        className: I.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, l.jsxs)(s.hzk, {
                className: I.__invalid_content,
                children: [
                    (0, l.jsx)("form", {
                        onSubmit: g,
                        className: I.inputForm,
                        children: (0, l.jsx)(s.oil, {
                            label: f.intl.string(f.t.qreV25),
                            required: !0,
                            error: T,
                            value: o,
                            onChange: d,
                            placeholder: "".concat(S).concat(O),
                            inputRef: h,
                        }),
                    }),
                    (0, l.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: f.intl.string(f.t.Bnq46H),
                    }),
                    (0, l.jsx)("div", {
                        className: I.sampleLinks,
                        children: E.map((e) =>
                            (0, l.jsx)(
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
                    (0, l.jsx)(b, { onClick: n }),
                ],
            }),
            (0, l.jsxs)(s.mzw, {
                className: I.footer,
                children: [
                    (0, l.jsx)(s.Button, {
                        variant: "primary",
                        text: f.intl.string(f.t["Ts/9Ac"]),
                        loading: m,
                        onClick: g,
                    }),
                    (0, l.jsx)(a.zx, {
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
