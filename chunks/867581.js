let r, o;
n.d(t, { Z: () => g }), n(388685), n(781311), n(35282);
var a = n(54381),
    i = n(473749),
    l = n(755721),
    c = n(481060),
    s = n(447543),
    u = n(881052),
    d = n(600164),
    f = n(703656),
    p = n(782605),
    m = n(981631),
    _ = n(388032),
    b = n(391972),
    I = n(216019),
    N = n(286359);
let T = "hTKzmak",
    O =
        ((r = window.GLOBAL_ENV.INVITE_HOST),
        (o = ""),
        null == r && ((r = location.host), (o = m.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(r).concat(o, "/")),
    S = [T, "".concat(O).concat(T), "".concat(O).concat("wumpus-friends")],
    E = (e) => {
        let { onClick: t } = e;
        return (0, a.jsxs)(c.P3F, {
            className: b.rowContainer,
            onClick: () => {
                t(), (0, f.uL)(m.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, a.jsx)("img", {
                    width: 40,
                    height: 40,
                    className: b.rowIcon,
                    alt: "",
                    src: N,
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(c.Heading, {
                            className: b.rowText,
                            variant: "heading-md/semibold",
                            children: _.intl.string(_.t.DwDxDU),
                        }),
                        (0, a.jsx)(c.Text, {
                            className: b.rowText,
                            variant: "text-xs/normal",
                            children: _.intl.string(_.t["5RL4CD"]),
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    className: b.rowArrow,
                    alt: "",
                    src: I,
                }),
            ],
        });
    };
function g(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [o, f] = i.useState(""),
        [m, I] = i.useState(!1),
        [N, g] = i.useState(null),
        C = i.useRef(null);
    i.useEffect(() => {
        var e;
        r && (null == (e = C.current) || e.focus());
    }, [r]);
    let h = (e) => {
        e.preventDefault();
        let t = o.trim();
        if ("" === t) return void g(_.intl.string(_.t.IRq5ah));
        g(null), I(!0);
        let r = t.split("/"),
            a = r[r.length - 1];
        s.ZP.resolveInvite(a, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((I(!1), null == t)) return void g(_.intl.string(_.t["GEYI+Z"]));
                if (null != t.channel) {
                    let e = s.ZP.getInviteContext("Join Guild", t);
                    s.ZP.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), s.ZP.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof u.yZ || e instanceof u.Hx ? g((0, p.O)(e.code)) : g(_.intl.string(_.t.dDZRdy));
                        },
                    );
                }
            },
            (e) => {
                I(!1);
                let t = new u.yZ(e);
                g((0, p.O)(t.code));
            },
        );
    };
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsxs)(c.xBx, {
                "data-migration-pending": !0,
                className: b.header,
                direction: d.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: b.title,
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t.riOUtB),
                    }),
                    (0, a.jsx)(c.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: _.intl.string(_.t["7jub2t"]),
                    }),
                    (0, a.jsx)(c.olH, {
                        "data-migration-pending": !0,
                        className: b.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, a.jsxs)(c.hzk, {
                "data-migration-pending": !0,
                className: b.__invalid_content,
                children: [
                    (0, a.jsx)("form", {
                        onSubmit: h,
                        className: b.inputForm,
                        children: (0, a.jsx)(c.oil, {
                            label: _.intl.string(_.t.qreV25),
                            required: !0,
                            error: N,
                            value: o,
                            onChange: f,
                            placeholder: "".concat(O).concat(T),
                            inputRef: C,
                        }),
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: _.intl.string(_.t.Bnq46H),
                    }),
                    (0, a.jsx)("div", {
                        className: b.sampleLinks,
                        children: S.map((e) =>
                            (0, a.jsx)(
                                c.P3F,
                                {
                                    className: b.sampleLink,
                                    onClick: () => f(e),
                                    children: e,
                                },
                                e,
                            ),
                        ),
                    }),
                    (0, a.jsx)(E, { onClick: n }),
                ],
            }),
            (0, a.jsxs)(c.mzw, {
                "data-migration-pending": !0,
                className: b.footer,
                children: [
                    (0, a.jsx)(c.Button, {
                        variant: "primary",
                        text: _.intl.string(_.t["Ts/9Ac"]),
                        loading: m,
                        onClick: h,
                    }),
                    (0, a.jsx)(l.zx, {
                        "data-migration-pending": !0,
                        color: l.zx.Colors.PRIMARY,
                        look: l.zx.Looks.LINK,
                        size: l.zx.Sizes.MIN,
                        onClick: t,
                        children: _.intl.string(_.t["13/7kX"]),
                    }),
                ],
            }),
        ],
    });
}
