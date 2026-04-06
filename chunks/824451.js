"use strict";
n.d(t, { Ay: () => b, wF: () => C });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(317097),
    o = n(311907),
    d = n(36525),
    c = n(397927),
    u = n(793574),
    m = n(688810),
    g = n(48736),
    x = n(20851),
    h = n(997509),
    _ = n(555337),
    p = n(657421),
    A = n(652215),
    f = n(381941),
    j = n(985018),
    N = n(908328),
    E = n(480972);
function C() {
    let e,
        {
            guild: t,
            submitting: n,
            errors: s,
        } = (0, o.cf)([_.A], () => ({
            submitting: _.A.isSubmitting(),
            guild: _.A.getGuild(),
            errors: _.A.getErrors(),
        })),
        l = Object.keys(s),
        r = l.length > 0 ? l[0] : null;
    return (
        (e = null != r ? s[r] : void 0),
        (0, i.jsx)(d.A, {
            submitting: n,
            onReset: () => {
                null != t && h.A.init(t.id);
            },
            onSave: () => {
                null != t && h.A.saveGuild(t.id, { officialMessageColor: t.officialMessageColor ?? f.aj });
            },
            errorMessage: e,
        })
    );
}
function b() {
    let e = (0, o.bG)([_.A], () => _.A.getProps().guild),
        { analyticsLocations: t } = (0, m.Ay)(u.A.GUILD_SETTINGS_OFFICIAL_MESSAGES),
        n = (0, o.bG)([_.A], () => _.A.getError("official_message_color")),
        l = s.useCallback((e) => {
            h.A.updateGuild({ officialMessageColor: e });
        }, []);
    if (null == e) return null;
    let r = e.officialMessageColor ?? f.aj;
    return (0, i.jsx)(m.f5, {
        value: t,
        children: (0, i.jsxs)(c.BJc, {
            gap: 40,
            children: [
                (0, i.jsxs)(c.BJc, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(c.Heading, { variant: "heading-lg/semibold", children: j.intl.string(j.t.xHEzFh) }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.JTlr3L),
                        }),
                    ],
                }),
                (0, i.jsx)(c.D0$, { errorMessage: n, children: (0, i.jsx)(T, { color: r, onColorChange: l }) }),
                (0, i.jsx)(I, { guildId: e.id, color: r }),
            ],
        }),
    });
}
function T(e) {
    let { color: t, onColorChange: n } = e;
    return (0, i.jsxs)(c.BJc, {
        gap: 8,
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: j.intl.string(j.t["2uQ6wZ"]),
            }),
            (0, i.jsx)(g.default, { defaultColor: f.aj, colors: A._tK, value: t, onChange: n }),
        ],
    });
}
function I(e) {
    let { guildId: t, color: n } = e,
        s = (0, p.A)(j.intl.string(j.t.Mi9Kbe)),
        l = {
            nick: s.author.username,
            guildId: t,
            authorId: s.author.id,
            colorRoleId: void 0,
            colorStrings: null,
            colorString: null,
        },
        o = [A.NJ8.DARK, A.NJ8.DARKER, A.NJ8.MIDNIGHT, A.NJ8.LIGHT],
        d = {
            "--custom-guild-official-message": (0, a.$k)(n, !0),
            "--custom-guild-official-message-hsl": (0, a.BK)(n, !0),
        };
    return (0, i.jsx)(c.M1G, {
        children: (0, i.jsxs)(c.BJc, {
            gap: 8,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: j.intl.string(j.t.VI0jGW),
                }),
                (0, i.jsx)("div", {
                    className: N.i1,
                    style: d,
                    "aria-hidden": !0,
                    children: o.map((e) =>
                        (0, i.jsx)(
                            c.NPJ,
                            {
                                theme: e,
                                disableAdaptiveTheme: !0,
                                children: (e) =>
                                    (0, i.jsx)("div", {
                                        className: r()(e, N.$O),
                                        children: (0, i.jsx)("div", {
                                            className: N.zC,
                                            children: (0, i.jsx)(x.A, {
                                                author: l,
                                                message: s,
                                                previewGuildId: t,
                                                isGroupStart: !0,
                                                className: E.Sg,
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
