n.d(t, { j: () => j }), n(321073);
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    a = n(462887),
    r = n(477782),
    o = n(97808),
    d = n(778712),
    c = n(834730),
    u = n(628284),
    p = n(695366),
    h = n(544028),
    m = n(427157),
    _ = n(351906),
    A = n(287809),
    f = n(954571),
    g = n(427262),
    x = n(429707),
    E = n(274303),
    C = n(994125),
    T = n(347853),
    v = n(652215),
    S = n(985018),
    b = n(335020);
function j(e) {
    let t = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        n = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        j = (0, s.bG)([h.A], () => (0, a.M)(h.A.theme)),
        { multiAccountUsers: I } = (0, C.K)(),
        R = I.map((s) => {
            let a = new m.A(s),
                h = a.id === t?.id,
                _ = s.tokenStatus === E.U.INVALID,
                A = n ? null : `#${a.discriminator}`;
            return (0, i.jsx)(
                r.Dr,
                {
                    id: a.id,
                    focusedClassName: b.in,
                    void_label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)("div", {
                            className: b.ci,
                            children: [
                                (0, i.jsx)(o.eu, {
                                    src: a.getAvatarURL(void 0, 40),
                                    size: d._3.SIZE_24,
                                    "aria-label": s.username,
                                }),
                                (0, i.jsxs)("div", {
                                    className: b.DD,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            className: b.gE,
                                            variant: "text-sm/normal",
                                            children: g.Ay.getUserTag(a, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !a.hasUniqueUsername() &&
                                            (0, i.jsx)(c.E, {
                                                className: b.df,
                                                variant: "text-sm/normal",
                                                children: A,
                                            }),
                                    ],
                                }),
                                h &&
                                    (0, i.jsx)(u.y, {
                                        size: "sm",
                                        color: t ? l.A.unsafe_rawColors.WHITE.css : l.A.unsafe_rawColors.BRAND_500.css,
                                        secondaryColor:
                                            (t && j) || (t && !j)
                                                ? l.A.unsafe_rawColors.BRAND_500.css
                                                : l.A.unsafe_rawColors.WHITE.css,
                                        className: b.s0,
                                    }),
                                _ &&
                                    (0, i.jsx)(p.E, {
                                        color: l.A.unsafe_rawColors.RED_400.css,
                                        secondaryColor:
                                            (t && j) || (t && !j)
                                                ? l.A.unsafe_rawColors.BRAND_500.css
                                                : l.A.unsafe_rawColors.WHITE.css,
                                        size: "xs",
                                        className: b.s0,
                                    }),
                            ],
                        });
                    },
                    action: () => {
                        if ((e?.(), _)) (0, T.A)();
                        else {
                            var n;
                            (n = a.id) !== t?.id &&
                                (f.default.track(v.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: { section: v.JJy.USER_PROFILE },
                                }),
                                x.Mx(n));
                        }
                    },
                },
                a.id,
            );
        });
    return (
        R.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.bX, {}),
                    (0, i.jsx)(r.Dr, {
                        id: "manage-accounts",
                        label: S.intl.string(S.t.WbFpq4),
                        action: () => {
                            e?.(), (0, T.A)();
                        },
                    }),
                ],
            }),
        ),
        R
    );
}
