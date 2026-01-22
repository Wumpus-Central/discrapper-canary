n.d(t, {
    j: () => y,
}),
    n(321073);
var a = n(627968);
n(64700);
var l = n(311907),
    i = n(827734),
    r = n(582754),
    s = n(397927),
    o = n(544028),
    c = n(427157),
    d = n(351906),
    u = n(287809),
    m = n(954571),
    p = n(427262),
    h = n(429707),
    f = n(274303),
    x = n(994125),
    b = n(347853),
    g = n(652215),
    v = n(985018),
    j = n(877347);

function y(e) {
    let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        n = (0, l.bG)([d.A], () => d.A.hidePersonalInformation),
        y = (0, l.bG)([o.A], () => (0, r.Mw)(o.A.theme)),
        { multiAccountUsers: _ } = (0, x.K)(),
        A = _.map((l) => {
            let r = new c.A(l),
                o = r.id === (null == t ? void 0 : t.id),
                d = l.tokenStatus === f.U.INVALID,
                u = n ? null : "#".concat(r.discriminator);
            return (0, a.jsx)(
                s.Drp,
                {
                    id: r.id,
                    focusedClassName: j.in,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.ci,
                            children: [
                                (0, a.jsx)(s.euF, {
                                    src: r.getAvatarURL(void 0, 40),
                                    size: s._3J.SIZE_24,
                                    "aria-label": l.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.DD,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            className: j.gE,
                                            variant: "text-sm/normal",
                                            children: p.Ay.getUserTag(r, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !r.hasUniqueUsername() &&
                                            (0, a.jsx)(s.Text, {
                                                className: j.df,
                                                variant: "text-sm/normal",
                                                children: u,
                                            }),
                                    ],
                                }),
                                o &&
                                    (0, a.jsx)(s.yr3, {
                                        size: "sm",
                                        color: t ? i.A.unsafe_rawColors.WHITE.css : i.A.unsafe_rawColors.BRAND_500.css,
                                        secondaryColor:
                                            (t && y) || (t && !y)
                                                ? i.A.unsafe_rawColors.BRAND_500.css
                                                : i.A.unsafe_rawColors.WHITE.css,
                                        className: j.s0,
                                    }),
                                d &&
                                    (0, a.jsx)(s.EpV, {
                                        color: i.A.unsafe_rawColors.RED_400.css,
                                        secondaryColor:
                                            (t && y) || (t && !y)
                                                ? i.A.unsafe_rawColors.BRAND_500.css
                                                : i.A.unsafe_rawColors.WHITE.css,
                                        size: "xs",
                                        className: j.s0,
                                    }),
                            ],
                        });
                    },
                    action: () => {
                        if ((null == e || e(), d)) (0, b.A)();
                        else {
                            var n;
                            (n = r.id) !== (null == t ? void 0 : t.id) &&
                                (m.default.track(g.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: {
                                        section: g.JJy.USER_PROFILE,
                                    },
                                }),
                                h.Mx(n));
                        }
                    },
                },
                r.id,
            );
        });
    return (
        A.push(
            (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(s.bXX, {}),
                    (0, a.jsx)(s.Drp, {
                        id: "manage-accounts",
                        label: v.intl.string(v.t.WbFpq4),
                        action: () => {
                            null == e || e(), (0, b.A)();
                        },
                    }),
                ],
            }),
        ),
        A
    );
}
