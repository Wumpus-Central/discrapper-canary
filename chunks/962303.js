n.d(t, { j: () => j }), n(321073);
var a = n(627968);
n(64700);
var i = n(311907),
    l = n(827734),
    s = n(582754),
    r = n(397927),
    o = n(544028),
    d = n(427157),
    c = n(351906),
    u = n(287809),
    m = n(954571),
    h = n(427262),
    x = n(429707),
    p = n(274303),
    g = n(994125),
    _ = n(347853),
    f = n(652215),
    v = n(985018),
    b = n(848193);
function j(e) {
    let t = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        n = (0, i.bG)([c.A], () => c.A.hidePersonalInformation),
        j = (0, i.bG)([o.A], () => (0, s.Mw)(o.A.theme)),
        { multiAccountUsers: A } = (0, g.K)(),
        C = A.map((i) => {
            let s = new d.A(i),
                o = s.id === t?.id,
                c = i.tokenStatus === p.U.INVALID,
                u = n ? null : `#${s.discriminator}`;
            return (0, a.jsx)(
                r.Drp,
                {
                    id: s.id,
                    focusedClassName: b.in,
                    void_label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: b.ci,
                            children: [
                                (0, a.jsx)(r.euF, {
                                    src: s.getAvatarURL(void 0, 40),
                                    size: r._3J.SIZE_24,
                                    "aria-label": i.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: b.DD,
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            className: b.gE,
                                            variant: "text-sm/normal",
                                            children: h.Ay.getUserTag(s, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !s.hasUniqueUsername() &&
                                            (0, a.jsx)(r.Text, {
                                                className: b.df,
                                                variant: "text-sm/normal",
                                                children: u,
                                            }),
                                    ],
                                }),
                                o &&
                                    (0, a.jsx)(r.yr3, {
                                        size: "sm",
                                        color: t ? l.A.unsafe_rawColors.WHITE.css : l.A.unsafe_rawColors.BRAND_500.css,
                                        secondaryColor:
                                            (t && j) || (t && !j)
                                                ? l.A.unsafe_rawColors.BRAND_500.css
                                                : l.A.unsafe_rawColors.WHITE.css,
                                        className: b.s0,
                                    }),
                                c &&
                                    (0, a.jsx)(r.EpV, {
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
                        if ((e?.(), c)) (0, _.A)();
                        else {
                            var n;
                            (n = s.id) !== t?.id &&
                                (m.default.track(f.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: { section: f.JJy.USER_PROFILE },
                                }),
                                x.Mx(n));
                        }
                    },
                },
                s.id,
            );
        });
    return (
        C.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(r.bXX, {}),
                    (0, a.jsx)(r.Drp, {
                        id: "manage-accounts",
                        label: v.intl.string(v.t.WbFpq4),
                        action: () => {
                            e?.(), (0, _.A)();
                        },
                    }),
                ],
            }),
        ),
        C
    );
}
