let r, o;
n.d(t, { Z: () => w }), n(388685), n(781311), n(35282);
var l = n(951288),
    i = n(647438),
    a = n(120356),
    s = n.n(a),
    c = n(755721),
    u = n(481060),
    _ = n(447543),
    d = n(881052),
    m = n(600164),
    p = n(313201),
    f = n(703656),
    I = n(782605),
    N = n(981631),
    T = n(388032),
    b = n(604509),
    S = n(216019),
    O = n(286359);
let E = "hTKzmak",
    C = (0, p.hQ)(),
    x =
        ((r = window.GLOBAL_ENV.INVITE_HOST),
        (o = ""),
        null == r && ((r = location.host), (o = N.Z5c.INVITE(""))),
        "".concat(location.protocol, "//").concat(r).concat(o, "/")),
    h = [E, "".concat(x).concat(E), "".concat(x).concat("wumpus-friends")],
    g = (e) => {
        let { onClick: t } = e;
        return (0, l.jsxs)(u.P3F, {
            className: b.rowContainer,
            onClick: () => {
                t(), (0, f.uL)(N.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, l.jsx)("img", {
                    width: 40,
                    height: 40,
                    className: b.rowIcon,
                    alt: "",
                    src: O,
                }),
                (0, l.jsxs)("div", {
                    children: [
                        (0, l.jsx)(u.X6q, {
                            className: b.rowText,
                            variant: "heading-md/semibold",
                            children: T.intl.string(T.t.DwDxDQ),
                        }),
                        (0, l.jsx)(u.Text, {
                            className: b.rowText,
                            variant: "text-xs/normal",
                            children: T.intl.string(T.t["5RL4CA"]),
                        }),
                    ],
                }),
                (0, l.jsx)("img", {
                    className: b.rowArrow,
                    alt: "",
                    src: S,
                }),
            ],
        });
    };
function w(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [o, a] = i.useState(""),
        [p, f] = i.useState(!1),
        [N, S] = i.useState(null),
        O = i.useRef(null);
    i.useEffect(() => {
        var e;
        r && (null == (e = O.current) || e.focus());
    }, [r]);
    let w = (e) => {
        e.preventDefault();
        let t = o.trim();
        if ("" === t) return void S(T.intl.string(T.t.IRq5am));
        S(null), f(!0);
        let r = t.split("/"),
            l = r[r.length - 1];
        _.ZP.resolveInvite(l, "Join Guild", { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((f(!1), null == t)) return void S(T.intl.string(T.t["GEYI+f"]));
                if (null != t.channel) {
                    let e = _.ZP.getInviteContext("Join Guild", t);
                    _.ZP.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), _.ZP.transitionToInvite(e);
                        },
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof d.yZ || e instanceof d.Hx ? S((0, I.O)(e.code)) : S(T.intl.string(T.t.dDZRd3));
                        },
                    );
                }
            },
            (e) => {
                f(!1);
                let t = new d.yZ(e);
                S((0, I.O)(t.code));
            },
        );
    };
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(u.xBx, {
                className: b.header,
                direction: m.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)(u.X6q, {
                        className: b.title,
                        variant: "heading-xl/semibold",
                        children: T.intl.string(T.t.riOUtL),
                    }),
                    (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: T.intl.string(T.t["7jub2t"]),
                    }),
                    (0, l.jsx)(u.olH, {
                        className: b.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, l.jsxs)(u.hzk, {
                className: b.__invalid_content,
                children: [
                    (0, l.jsx)("form", {
                        onSubmit: w,
                        className: b.inputForm,
                        children: (0, l.jsxs)(u.xJW, {
                            children: [
                                (0, l.jsx)(u.vwX, {
                                    id: C,
                                    error: N,
                                    className: s()(b.formTitle, { [b.error]: null != N }),
                                    required: !0,
                                    children: T.intl.string(T.t.qreV29),
                                }),
                                (0, l.jsx)(u.oil, {
                                    value: o,
                                    onChange: a,
                                    placeholder: "".concat(x).concat(E),
                                    inputRef: O,
                                    required: !0,
                                    "aria-labelledby": C,
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(u.xJW, {
                        title: T.intl.string(T.t.Bnq46O),
                        titleClassName: b.formTitle,
                        className: b.examplesForm,
                        children: h.map((e) =>
                            (0, l.jsx)(
                                u.P3F,
                                {
                                    className: b.sampleLink,
                                    onClick: () => a(e),
                                    children: e,
                                },
                                e,
                            ),
                        ),
                    }),
                    (0, l.jsx)(g, { onClick: n }),
                ],
            }),
            (0, l.jsxs)(u.mzw, {
                className: b.footer,
                children: [
                    (0, l.jsx)(u.zxk, {
                        variant: "primary",
                        text: T.intl.string(T.t["Ts/9AQ"]),
                        loading: p,
                        onClick: w,
                    }),
                    (0, l.jsx)(c.zx, {
                        color: c.zx.Colors.PRIMARY,
                        look: c.zx.Looks.LINK,
                        size: c.zx.Sizes.MIN,
                        onClick: t,
                        children: T.intl.string(T.t["13/7kZ"]),
                    }),
                ],
            }),
        ],
    });
}
