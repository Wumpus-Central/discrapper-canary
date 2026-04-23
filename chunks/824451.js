n.d(t, { Ay: () => y, wF: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(36525),
    d = n(331322),
    c = n(534514),
    u = n(834730),
    m = n(452027),
    g = n(247928),
    h = n(43990),
    x = n(793574),
    _ = n(688810),
    p = n(48736),
    A = n(20851),
    E = n(537174),
    f = n(997509),
    j = n(555337),
    N = n(657421),
    I = n(652215),
    C = n(381941),
    b = n(985018),
    v = n(996408),
    S = n(701628);
function T() {
    let e,
        {
            guild: t,
            submitting: n,
            errors: l,
        } = (0, a.cf)([j.A], () => ({
            submitting: j.A.isSubmitting(),
            guild: j.A.getGuild(),
            errors: j.A.getErrors(),
        })),
        s = Object.keys(l),
        r = s.length > 0 ? s[0] : null;
    return (
        (e = null != r ? l[r] : void 0),
        (0, i.jsx)(o.A, {
            submitting: n,
            onReset: () => {
                null != t && f.A.init(t.id);
            },
            onSave: () => {
                null != t && f.A.saveGuild(t.id, { officialMessageColor: t.officialMessageColor ?? C.aj });
            },
            errorMessage: e,
        })
    );
}
function y() {
    let e = (0, a.bG)([j.A], () => j.A.getProps().guild),
        { analyticsLocations: t } = (0, _.Ay)(x.A.GUILD_SETTINGS_OFFICIAL_MESSAGES),
        n = (0, a.bG)([j.A], () => j.A.getError("official_message_color")),
        s = l.useCallback((e) => {
            f.A.updateGuild({ officialMessageColor: e });
        }, []);
    if (null == e) return null;
    let r = e.officialMessageColor ?? C.aj;
    return (0, i.jsx)(_.f5, {
        value: t,
        children: (0, i.jsxs)(d.B, {
            gap: 40,
            children: [
                (0, i.jsxs)(d.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(c.D, { variant: "heading-lg/semibold", children: b.intl.string(b.t.xHEzFh) }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: b.intl.string(b.t.JTlr3L),
                        }),
                    ],
                }),
                (0, i.jsx)(m.D, { errorMessage: n, children: (0, i.jsx)(R, { color: r, onColorChange: s }) }),
                (0, i.jsx)(D, { guildId: e.id, color: r }),
            ],
        }),
    });
}
function R(e) {
    let { color: t, onColorChange: n } = e;
    return (0, i.jsxs)(d.B, {
        gap: 8,
        children: [
            (0, i.jsx)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                children: b.intl.string(b.t["2uQ6wZ"]),
            }),
            (0, i.jsx)(p.default, {
                defaultColor: C.aj,
                colors: I._tK,
                value: t,
                onChange: n,
                allowBlackCustomColor: !0,
            }),
        ],
    });
}
function L(e) {
    let { themeClass: t, color: n, author: l, message: s, guildId: a } = e,
        o = (0, E.A)(n);
    return (0, i.jsx)("div", {
        className: r()(t, v.$O),
        style: o,
        children: (0, i.jsx)("div", {
            className: v.zC,
            children: (0, i.jsx)(A.A, { author: l, message: s, previewGuildId: a, isGroupStart: !0, className: S.Sg }),
        }),
    });
}
function D(e) {
    let { guildId: t, color: n } = e,
        l = (0, N.A)(b.intl.string(b.t.Mi9Kbe)),
        s = {
            nick: l.author.username,
            guildId: t,
            authorId: l.author.id,
            colorRoleId: void 0,
            colorStrings: null,
            colorString: null,
        },
        r = [I.NJ8.DARK, I.NJ8.DARKER, I.NJ8.MIDNIGHT, I.NJ8.LIGHT];
    return (0, i.jsx)(g.M, {
        children: (0, i.jsxs)(d.B, {
            gap: 8,
            children: [
                (0, i.jsx)(u.E, {
                    variant: "text-md/medium",
                    color: "text-default",
                    children: b.intl.string(b.t.VI0jGW),
                }),
                (0, i.jsx)("div", {
                    className: v.i1,
                    "aria-hidden": !0,
                    children: r.map((e) =>
                        (0, i.jsx)(
                            h.N,
                            {
                                theme: e,
                                disableAdaptiveTheme: !0,
                                children: (e) =>
                                    (0, i.jsx)(L, { themeClass: e, color: n, author: s, message: l, guildId: t }),
                            },
                            e,
                        ),
                    ),
                }),
            ],
        }),
    });
}
