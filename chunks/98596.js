i.d(t, { k: () => w });
var n = i(419954),
    s = i(780964),
    l = i(665267),
    r = i(375708);
let a = (0, n.E2)(s.X.APPEARANCE_CLIENT_THEMES, { useSearchTerms: () => [r.intl.string(r.t.Ksh3ik)], Component: l.sB });
var o = i(627968);
i(64700);
var u = i(503698),
    d = i.n(u),
    c = i(562708),
    g = i(821609),
    m = i(534514),
    A = i(834730),
    h = i(688810),
    E = i(139286),
    T = i(793943),
    x = i(996254),
    S = i(830543),
    p = i(738419),
    N = i(693227),
    f = i(176409),
    _ = i(114149);
function C(e) {
    let { className: t } = e,
        { analyticsLocations: i } = (0, h.Ay)();
    (0, E.A)({
        name: c.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: c.ImpressionTypes.VIEW,
        properties: { location_stack: i },
    });
    let n = (0, x.X)({ "en-US": N.default["f/cLEi"], "en-GB": N.default["f/cLEi"] }, N.default.CARxAC);
    return (0, o.jsxs)("div", {
        className: d()(f.kL, t),
        children: [
            (0, o.jsx)("div", { className: f.zc, children: (0, o.jsx)("img", { src: _.A, className: f._e, alt: "" }) }),
            (0, o.jsxs)("div", {
                className: f.P_,
                children: [
                    (0, o.jsx)(m.D, { variant: "heading-lg/semibold", color: "text-strong", children: n }),
                    (0, o.jsx)(A.E, { variant: "text-sm/normal", children: r.intl.string(N.default.nla4RG) }),
                ],
            }),
            (0, o.jsx)("div", {
                className: f.UD,
                children: (0, o.jsx)(g.$, {
                    variant: "primary",
                    text: r.intl.string(r.t.uw9zI7),
                    onClick: () => {
                        (0, p.b0)(p.G8.APPEARANCE_SETTINGS),
                            (0, T.nf)(T.HP.CUSTOM_THEME, { from: T.xv.SETTING }),
                            (0, S.default)();
                    },
                }),
            }),
        ],
    });
}
let I = (0, n.E2)(s.X.APPEARANCE_CUSTOM_THEMES_UPSELL, {
    useSearchTerms: () => [r.intl.string(r.t.Ksh3ik)],
    Component: function () {
        return (0, o.jsx)(C, { className: f.YH });
    },
});
var b = i(366010),
    v = i(17928),
    j = i(955572),
    y = i(775602),
    O = i(47671),
    R = i(97469),
    L = i(363195),
    D = i(885386),
    P = i(818348);
let G = (0, n.zD)(s.X.APPEARANCE_DARK_SIDEBAR, {
    useTitle: () => r.intl.string(r.t.EpSHAQ),
    useSearchTerms: () => [r.intl.string(r.t.Ksh3ik)],
    useValue: function () {
        let e = (0, R.qo)();
        return (0, v.bG)([L.A, y.A], () => {
            let t = L.A.theme,
                i = y.A.useForcedColors;
            return e && (0, b.q)(t) && !i;
        });
    },
    usePredicate: function () {
        let e = null != D.eh.useSetting().customUserThemeSettings;
        return (0, v.bG)([L.A, O.A], () => {
            let t = L.A.theme,
                i = O.A.gradientPreset;
            return (0, b.q)(t) && null == i && !e;
        });
    },
    useDisabled: function () {
        return (0, v.bG)([L.A, y.A], () => {
            let e = L.A.theme,
                t = y.A.useForcedColors;
            return e !== P.NJ.LIGHT || t;
        });
    },
    setValue: j.LO,
});
var U = i(331322),
    M = i(487245),
    V = i(385803);
let k = (0, n.E2)(s.X.APPEARANCE_DEFAULT_THEMES, {
        useSearchTerms: () => [r.intl.string(r.t.Ksh3ik)],
        Component: function () {
            return (0, o.jsxs)(M.Ay, {
                type: M.v0.SETTINGS,
                children: [
                    (0, o.jsx)(m.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: r.intl.string(r.t["0EzVst"]),
                    }),
                    (0, o.jsx)(U.B, {
                        direction: "horizontal",
                        wrap: !0,
                        gap: 8,
                        padding: { top: 24 },
                        children: (0, o.jsx)(M.t6, { size: V.ni.SIZE_48 }),
                    }),
                ],
            });
        },
    }),
    w = (0, n.FW)(s.X.APPEARANCE_THEME_FIELDSET, {
        useTitle: () => r.intl.string(r.t.Ksh3ik),
        isTitleHiddenVisually: !0,
        buildLayout: () => [k, G, I, a],
    });
