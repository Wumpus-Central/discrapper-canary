n.d(t, {
    j: () => _,
}),
    n(321073);
var a = n(627968);
n(64700);
var l = n(311907),
    r = n(827734),
    i = n(582754),
    s = n(397927),
    o = n(544028),
    c = n(427157),
    d = n(351906),
    u = n(287809),
    m = n(954571),
    p = n(427262),
    h = n(429707),
    x = n(274303),
    g = n(994125),
    f = n(347853),
    b = n(652215),
    v = n(985018),
    j = n(877347);

function _(e) {
    let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        n = (0, l.bG)([d.A], () => d.A.hidePersonalInformation),
        _ = (0, l.bG)([o.A], () => (0, i.Mw)(o.A.theme)),
        { multiAccountUsers: y } = (0, g.K)(),
        A = y.map((l) => {
            let i = new c.A(l),
                o = i.id === (null == t ? void 0 : t.id),
                d = l.tokenStatus === x.U.INVALID,
                u = n ? null : "#".concat(i.discriminator);
            return (0, a.jsx)(
                s.Drp,
                {
                    id: i.id,
                    focusedClassName: j.in,
                    void_label: (e) => {
                        let { isFocused: t } = e;
                        return (0, a.jsxs)("div", {
                            className: j.ci,
                            children: [
                                (0, a.jsx)(s.euF, {
                                    src: i.getAvatarURL(void 0, 40),
                                    size: s._3J.SIZE_24,
                                    "aria-label": l.username,
                                }),
                                (0, a.jsxs)("div", {
                                    className: j.DD,
                                    children: [
                                        (0, a.jsx)(s.Text, {
                                            className: j.gE,
                                            variant: "text-sm/normal",
                                            children: p.Ay.getUserTag(i, {
                                                mode: "username",
                                                identifiable: n ? "never" : "always",
                                            }),
                                        }),
                                        !i.hasUniqueUsername() &&
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
                                        color: t ? r.A.unsafe_rawColors.WHITE.css : r.A.unsafe_rawColors.BRAND_500.css,
                                        secondaryColor:
                                            (t && _) || (t && !_)
                                                ? r.A.unsafe_rawColors.BRAND_500.css
                                                : r.A.unsafe_rawColors.WHITE.css,
                                        className: j.s0,
                                    }),
                                d &&
                                    (0, a.jsx)(s.EpV, {
                                        color: r.A.unsafe_rawColors.RED_400.css,
                                        secondaryColor:
                                            (t && _) || (t && !_)
                                                ? r.A.unsafe_rawColors.BRAND_500.css
                                                : r.A.unsafe_rawColors.WHITE.css,
                                        size: "xs",
                                        className: j.s0,
                                    }),
                            ],
                        });
                    },
                    action: () => {
                        if ((null == e || e(), d)) (0, f.A)();
                        else {
                            var n;
                            (n = i.id) !== (null == t ? void 0 : t.id) &&
                                (m.default.track(b.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                    location: {
                                        section: b.JJy.USER_PROFILE,
                                    },
                                }),
                                h.Mx(n));
                        }
                    },
                },
                i.id,
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
                            null == e || e(), (0, f.A)();
                        },
                    }),
                ],
            }),
        ),
        A
    );
}
