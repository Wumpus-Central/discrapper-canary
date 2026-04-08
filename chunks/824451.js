"use strict";
n.d(t, { Ay: () => C, wF: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(36525),
    d = n(397927),
    c = n(793574),
    u = n(688810),
    m = n(48736),
    g = n(20851),
    x = n(997509),
    h = n(555337),
    _ = n(657421),
    p = n(652215),
    A = n(381941),
    f = n(985018),
    j = n(908328),
    N = n(480972);
function E() {
    let e,
        {
            guild: t,
            submitting: n,
            errors: s,
        } = (0, a.cf)([h.A], () => ({
            submitting: h.A.isSubmitting(),
            guild: h.A.getGuild(),
            errors: h.A.getErrors(),
        })),
        l = Object.keys(s),
        r = l.length > 0 ? l[0] : null;
    return (
        (e = null != r ? s[r] : void 0),
        (0, i.jsx)(o.A, {
            submitting: n,
            onReset: () => {
                null != t && x.A.init(t.id);
            },
            onSave: () => {
                null != t && x.A.saveGuild(t.id, { officialMessageColor: t.officialMessageColor ?? A.aj });
            },
            errorMessage: e,
        })
    );
}
function C() {
    let e = (0, a.bG)([h.A], () => h.A.getProps().guild),
        { analyticsLocations: t } = (0, u.Ay)(c.A.GUILD_SETTINGS_OFFICIAL_MESSAGES),
        n = (0, a.bG)([h.A], () => h.A.getError("official_message_color")),
        l = s.useCallback((e) => {
            x.A.updateGuild({ officialMessageColor: e });
        }, []);
    if (null == e) return null;
    let r = e.officialMessageColor ?? A.aj;
    return (0, i.jsx)(u.f5, {
        value: t,
        children: (0, i.jsxs)(d.BJc, {
            gap: 40,
            children: [
                (0, i.jsxs)(d.BJc, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(d.Heading, { variant: "heading-lg/semibold", children: f.intl.string(f.t.xHEzFh) }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.string(f.t.JTlr3L),
                        }),
                    ],
                }),
                (0, i.jsx)(d.D0$, { errorMessage: n, children: (0, i.jsx)(T, { color: r, onColorChange: l }) }),
                (0, i.jsx)(I, { guildId: e.id, color: r }),
            ],
        }),
    });
}
function T(e) {
    let { color: t, onColorChange: n } = e;
    return (0, i.jsxs)(d.BJc, {
        gap: 8,
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: f.intl.string(f.t["2uQ6wZ"]),
            }),
            (0, i.jsx)(m.default, { defaultColor: A.aj, colors: p._tK, value: t, onChange: n }),
        ],
    });
}
function I(e) {
    let { guildId: t, color: n } = e,
        s = (0, _.A)(f.intl.string(f.t.Mi9Kbe)),
        l = {
            nick: s.author.username,
            guildId: t,
            authorId: s.author.id,
            colorRoleId: void 0,
            colorStrings: null,
            colorString: null,
        },
        a = [p.NJ8.DARK, p.NJ8.DARKER, p.NJ8.MIDNIGHT, p.NJ8.LIGHT],
        o = (0, A.L)(n);
    return (0, i.jsx)(d.M1G, {
        children: (0, i.jsxs)(d.BJc, {
            gap: 8,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: f.intl.string(f.t.VI0jGW),
                }),
                (0, i.jsx)("div", {
                    className: j.i1,
                    style: o,
                    "aria-hidden": !0,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            d.NPJ,
                            {
                                theme: e,
                                disableAdaptiveTheme: !0,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: r()(e, j.$O),
                                        children: (0, i.jsx)("div", {
                                            className: j.zC,
                                            children: (0, i.jsx)(g.A, {
                                                author: l,
                                                message: s,
                                                previewGuildId: t,
                                                isGroupStart: !0,
                                                className: N.Sg,
                                            }),
                                        }),
                                    }),
                            },
                            e,
                        ),
                    ),
                }),
            ],
        }),
    });
}
