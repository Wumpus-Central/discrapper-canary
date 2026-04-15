"use strict";
n.d(t, { Ay: () => T, wF: () => C });
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
    x = n(537174),
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
        } = (0, a.cf)([_.A], () => ({
            submitting: _.A.isSubmitting(),
            guild: _.A.getGuild(),
            errors: _.A.getErrors(),
        })),
        l = Object.keys(s),
        r = l.length > 0 ? l[0] : null;
    return (
        (e = null != r ? s[r] : void 0),
        (0, i.jsx)(o.A, {
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
function T() {
    let e = (0, a.bG)([_.A], () => _.A.getProps().guild),
        { analyticsLocations: t } = (0, u.Ay)(c.A.GUILD_SETTINGS_OFFICIAL_MESSAGES),
        n = (0, a.bG)([_.A], () => _.A.getError("official_message_color")),
        l = s.useCallback((e) => {
            h.A.updateGuild({ officialMessageColor: e });
        }, []);
    if (null == e) return null;
    let r = e.officialMessageColor ?? f.aj;
    return (0, i.jsx)(u.f5, {
        value: t,
        children: (0, i.jsxs)(d.BJc, {
            gap: 40,
            children: [
                (0, i.jsxs)(d.BJc, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(d.Heading, { variant: "heading-lg/semibold", children: j.intl.string(j.t.xHEzFh) }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: j.intl.string(j.t.JTlr3L),
                        }),
                    ],
                }),
                (0, i.jsx)(d.D0$, { errorMessage: n, children: (0, i.jsx)(I, { color: r, onColorChange: l }) }),
                (0, i.jsx)(v, { guildId: e.id, color: r }),
            ],
        }),
    });
}
function I(e) {
    let { color: t, onColorChange: n } = e;
    return (0, i.jsxs)(d.BJc, {
        gap: 8,
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: j.intl.string(j.t["2uQ6wZ"]),
            }),
            (0, i.jsx)(m.default, {
                defaultColor: f.aj,
                colors: A._tK,
                value: t,
                onChange: n,
                allowBlackCustomColor: !0,
            }),
        ],
    });
}
function b(e) {
    let { themeClass: t, color: n, author: s, message: l, guildId: a } = e,
        o = (0, x.A)(n);
    return (0, i.jsx)("div", {
        className: r()(t, N.$O),
        style: o,
        children: (0, i.jsx)("div", {
            className: N.zC,
            children: (0, i.jsx)(g.A, { author: s, message: l, previewGuildId: a, isGroupStart: !0, className: E.Sg }),
        }),
    });
}
function v(e) {
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
        r = [A.NJ8.DARK, A.NJ8.DARKER, A.NJ8.MIDNIGHT, A.NJ8.LIGHT];
    return (0, i.jsx)(d.M1G, {
        children: (0, i.jsxs)(d.BJc, {
            gap: 8,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: j.intl.string(j.t.VI0jGW),
                }),
                (0, i.jsx)("div", {
                    className: N.i1,
                    "aria-hidden": !0,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            d.NPJ,
                            {
                                theme: e,
                                disableAdaptiveTheme: !0,
                                children: (e) =>
                                    (0, i.jsx)(b, { themeClass: e, color: n, author: l, message: s, guildId: t }),
                            },
                            e,
                        ),
                    ),
                }),
            ],
        }),
    });
}
