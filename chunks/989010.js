l.d(t, { A: () => ey });
var n = l(477900),
    a = l(582128),
    i = l(855986),
    r = l(834730),
    s = l(408278),
    o = l(983851),
    c = l(358618),
    u = l(192308),
    d = l(825484),
    m = l(866665),
    f = l(27232),
    h = l(505930),
    p = l(241326),
    x = l(365199),
    v = l(92446),
    g = l(972213),
    b = l(95362),
    j = l(821609),
    y = l(428610),
    C = l(48507),
    N = l(750943),
    k = l(342073),
    E = l(831544),
    w = l(7807),
    A = l(663341),
    I = l(442433),
    L = l(793574),
    R = l(688810),
    T = l(429913),
    S = l(769015),
    D = l(540999),
    M = l(419490),
    P = l(489496),
    O = l(253799),
    _ = l(721610),
    z = l(686320),
    U = l(105009),
    $ = l(645655),
    G = l(352527),
    B = l(635793),
    X = l(923904),
    H = l(503698),
    W = l.n(H),
    F = l(31300),
    K = l(646270),
    V = l(748562),
    Y = l(477155),
    Z = l(939249),
    Q = l(417270),
    q = l(696016),
    J = l(683825),
    ee = l(792996),
    et = l(301187),
    el = l(367454);
let en = [
    { preset: q.yz.ORIGINAL, icon: F.ScreenIcon, label: J.default.CujCES },
    { preset: q.yz.PORTRAIT_9_16, icon: K.MobilePhoneIcon, label: J.default["34PW6m"] },
    { preset: q.yz.LANDSCAPE_16_9, icon: V.TvIcon, label: J.default.ywAdnD },
];
function ea() {
    let { cropPreset: e, setCropPreset: t, setActiveTool: l } = (0, X.T)();
    return (0, n.jsxs)("div", {
        className: et.XV,
        children: [
            (0, n.jsx)("div", {
                className: el.CD,
                children: (0, n.jsx)(j.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Y.ArrowSmallLeftIcon,
                    iconPosition: "start",
                    text: ee.intl.string(J.default["7yBrfD"]),
                    onClick: () => l(B.Y.NONE),
                }),
            }),
            (0, n.jsxs)(b.Ip, {
                className: el.hX,
                children: [
                    (0, n.jsx)(r.E, {
                        variant: "body-md/semibold",
                        color: "text-default",
                        children: ee.intl.string(J.default["1TOrU3"]),
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsx)(r.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default.r15Wrn),
                            }),
                            (0, n.jsx)("div", {
                                className: el.si,
                                children: en.map((l) => {
                                    let { preset: a, icon: i, label: s } = l,
                                        o = e === a;
                                    return (0, n.jsxs)(
                                        Z.D,
                                        {
                                            "aria-pressed": o,
                                            className: W()(el.is, o && el.j5),
                                            onClick: () => t(a),
                                            children: [
                                                (0, n.jsx)(i, { size: "md" }),
                                                (0, n.jsx)(r.E, {
                                                    variant: "body-xs/medium",
                                                    children: ee.intl.string(s),
                                                }),
                                            ],
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(b.Ip, {
                className: et.G3,
                children: (0, n.jsx)(j.$, {
                    fullWidth: !0,
                    variant: "secondary",
                    icon: Q.RetryIcon,
                    iconPosition: "start",
                    text: ee.intl.string(J.default.XdZS9I),
                    onClick: () => t(q.yz.ORIGINAL),
                }),
            }),
        ],
    });
}
var ei = l(818433),
    er = l(317097),
    es = l(48736),
    eo = l(1093),
    ec = l(393688),
    eu = l(839578);
let ed = [
        { value: q.Hz.NONE, label: J.default.IqUUKg },
        { value: q.Hz.SMALL, label: J.default.VearyN },
        { value: q.Hz.MEDIUM, label: J.default.AJsDsD },
        { value: q.Hz.LARGE, label: J.default.k5w7Jy },
    ],
    em = [0, 0xffffff, 0xfe6e0d, 5793266, 0xff4cd2];
function ef(e) {
    let { track: t } = e,
        { updateImageTrackData: l, pickAndReplaceImage: a, setSelectedTrackId: i, removeTrack: s } = (0, eo.fn)(),
        o = t.data.shadow ?? "none",
        c = t.data.shadowColor ?? q.pk;
    return (0, n.jsxs)("div", {
        className: et.XV,
        children: [
            (0, n.jsx)("div", {
                className: el.CD,
                children: (0, n.jsx)(j.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: Y.ArrowSmallLeftIcon,
                    iconPosition: "start",
                    text: ee.intl.string(J.default["7yBrfD"]),
                    onClick: () => i(null),
                }),
            }),
            (0, n.jsxs)(b.Ip, {
                className: el.hX,
                children: [
                    (0, n.jsx)("div", {
                        className: eu.r5,
                        children: (0, n.jsx)(r.E, {
                            variant: "body-md/semibold",
                            color: "text-default",
                            children: ee.intl.string(J.default.S0ODmT),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    (0, n.jsx)("img", { className: ec.Z, src: t.data.src, alt: "", "aria-hidden": !0 }),
                                    (0, n.jsx)(r.E, {
                                        variant: "body-sm/medium",
                                        color: "text-default",
                                        className: el.FA,
                                        children: t.data.fileName,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(j.$, {
                                variant: "secondary",
                                icon: N.ImagePlusIcon,
                                iconPosition: "start",
                                fullWidth: !0,
                                text: ee.intl.string(J.default.wR5R9w),
                                onClick: () => a(t.id),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: el.Ln,
                        children: [
                            (0, n.jsx)(r.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default["/v2zZ+"]),
                            }),
                            (0, n.jsx)("div", {
                                className: ec.p,
                                children: ed.map((e) => {
                                    let { value: a, label: i } = e,
                                        s = o === a;
                                    return (0, n.jsx)(
                                        Z.D,
                                        {
                                            "aria-pressed": s,
                                            className: W()(el.is, s && el.j5),
                                            onClick: () => l(t.id, (e) => ({ ...e, shadow: a })),
                                            children: (0, n.jsx)(r.E, {
                                                variant: "body-sm/medium",
                                                children: ee.intl.string(i),
                                            }),
                                        },
                                        a,
                                    );
                                }),
                            }),
                        ],
                    }),
                    o !== q.Hz.NONE &&
                        (0, n.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.P5dSl0),
                                }),
                                (0, n.jsx)(es.default, {
                                    defaultColor: (0, er.LX)(q.pk),
                                    colors: em,
                                    className: eu.Ei,
                                    colorContainerClassName: eu.oP,
                                    value: (0, er.LX)(c),
                                    onChange: (e) => l(t.id, (t) => ({ ...t, shadowColor: (0, er.Hl)(e) })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)(b.Ip, {
                className: et.G3,
                children: (0, n.jsx)(j.$, {
                    size: "md",
                    variant: "secondary",
                    icon: p.TrashIcon,
                    iconPosition: "start",
                    fullWidth: !0,
                    text: ee.intl.string(J.default.ytiENm),
                    onClick: () => s(t.id),
                }),
            }),
        ],
    });
}
var eh = l(95477);
let ep = [
        { value: 0.04, label: J.default.zYVcjp },
        { value: 0.06, label: J.default.LGX80j },
        { value: 0.09, label: J.default.sa6Q0q },
    ],
    ex = [
        { value: q.UY.NONE, label: J.default["tYuPp+"] },
        { value: q.UY.SMALL, label: J.default["42Skzz"] },
        { value: q.UY.MEDIUM, label: J.default["Ujlm+F"] },
        { value: q.UY.LARGE, label: J.default.lT4Cq2 },
    ],
    ev = [0xfe6e0d, 0xffe047, 3534206, 5793266, 0xff4cd2];
function eg(e) {
    let { track: t } = e,
        { updateTextTrackData: l, setSelectedTrackId: i, removeTrack: s, textTrackIdToFocus: o } = (0, eo.fn)(),
        c = a.useRef(null);
    return (
        a.useEffect(() => {
            o === t.id && (c.current?.focus(), c.current?.select());
        }, [o, t.id]),
        (0, n.jsxs)("div", {
            className: et.XV,
            children: [
                (0, n.jsx)("div", {
                    className: el.CD,
                    children: (0, n.jsx)(j.$, {
                        size: "sm",
                        variant: "secondary",
                        icon: Y.ArrowSmallLeftIcon,
                        iconPosition: "start",
                        text: ee.intl.string(J.default["7yBrfD"]),
                        onClick: () => i(null),
                    }),
                }),
                (0, n.jsxs)(b.Ip, {
                    className: el.hX,
                    children: [
                        (0, n.jsx)("div", {
                            className: eu.r5,
                            children: (0, n.jsx)(r.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                children: ee.intl.string(J.default.GtvDbf),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: el.Ln,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default["R/JN4b"]),
                                }),
                                (0, n.jsx)(eh.k, {
                                    inputRef: c,
                                    "aria-label": ee.intl.string(J.default["R/JN4b"]),
                                    value: t.data.text,
                                    onChange: (e) => l(t.id, (t) => ({ ...t, text: e })),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: el.Ln,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default["4eAE08"]),
                                }),
                                (0, n.jsx)("div", {
                                    className: el.si,
                                    children: ep.map((e) => {
                                        let { value: a, label: i } = e,
                                            s = t.data.style.fontSize === a;
                                        return (0, n.jsx)(
                                            Z.D,
                                            {
                                                "aria-pressed": s,
                                                className: W()(el.is, s && el.j5),
                                                onClick: () =>
                                                    l(t.id, (e) => ({ ...e, style: { ...e.style, fontSize: a } })),
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "body-sm/medium",
                                                    children: ee.intl.string(i),
                                                }),
                                            },
                                            a,
                                        );
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: eu.zo,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default["9oleCI"]),
                                }),
                                (0, n.jsx)(es.default, {
                                    defaultColor: 0xffffff,
                                    colors: ev,
                                    className: eu.Ei,
                                    colorContainerClassName: eu.oP,
                                    value: (0, er.LX)(t.data.style.color),
                                    onChange: (e) =>
                                        l(t.id, (t) => ({ ...t, style: { ...t.style, color: (0, er.Hl)(e) } })),
                                    allowBlackCustomColor: !0,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: el.Ln,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.huZ6Mm),
                                }),
                                (0, n.jsx)("div", {
                                    className: el.si,
                                    children: ex.map((e) => {
                                        let { value: a, label: i } = e,
                                            s = t.data.style.strokeWidth === a;
                                        return (0, n.jsx)(
                                            Z.D,
                                            {
                                                "aria-pressed": s,
                                                className: W()(el.is, s && el.j5),
                                                onClick: () =>
                                                    l(t.id, (e) => ({ ...e, style: { ...e.style, strokeWidth: a } })),
                                                children: (0, n.jsx)(r.E, {
                                                    variant: "body-sm/medium",
                                                    children: ee.intl.string(i),
                                                }),
                                            },
                                            a,
                                        );
                                    }),
                                }),
                            ],
                        }),
                        t.data.style.strokeWidth !== q.UY.NONE &&
                            (0, n.jsxs)("div", {
                                className: eu.zo,
                                children: [
                                    (0, n.jsx)(r.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-subtle",
                                        children: ee.intl.string(J.default.iQZQyA),
                                    }),
                                    (0, n.jsx)(es.default, {
                                        defaultColor: 0,
                                        colors: ev,
                                        className: eu.Ei,
                                        colorContainerClassName: eu.oP,
                                        value: (0, er.LX)(t.data.style.strokeColor),
                                        onChange: (e) =>
                                            l(t.id, (t) => ({
                                                ...t,
                                                style: { ...t.style, strokeColor: (0, er.Hl)(e) },
                                            })),
                                        allowBlackCustomColor: !0,
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, n.jsx)(b.Ip, {
                    className: et.G3,
                    children: (0, n.jsx)(j.$, {
                        size: "md",
                        variant: "secondary",
                        icon: p.TrashIcon,
                        iconPosition: "start",
                        fullWidth: !0,
                        text: ee.intl.string(J.default.LYpz7y),
                        onClick: () => s(t.id),
                    }),
                }),
            ],
        })
    );
}
let eb = O.I.difference(new Set([O.C.EXPORT_TO_SOUNDBOARD, O.C.FAVORITE, O.C.DELETE, O.C.MAIN_ACTION, O.C.EDIT]));
function ej(e) {
    let { icon: t, label: l, count: a, enabled: i, disabled: u = !1, onToggle: d } = e;
    return (0, n.jsxs)("div", {
        className: el.l3,
        children: [
            (0, n.jsx)("div", { className: el.sW, children: t }),
            (0, n.jsx)(r.E, { variant: "body-sm/normal", color: "text-default", className: el.RZ, children: l }),
            null != a &&
                a > 0 &&
                (0, n.jsx)("div", {
                    className: el.Mo,
                    children: (0, n.jsx)(r.E, { variant: "body-xs/medium", color: "text-muted", children: a }),
                }),
            (0, n.jsx)("div", {
                className: el.To,
                children: (0, n.jsx)(s.K, {
                    size: "sm",
                    variant: "icon-only",
                    disabled: u,
                    icon: i ? o.VoiceNormalIcon : c.VoiceXIcon,
                    onClick: () => d(!i),
                    "aria-label": l,
                    "aria-pressed": i,
                }),
            }),
        ],
    });
}
function ey(e) {
    let { activeTool: t } = (0, X.T)(),
        { tracks: l, selectedTrackId: a } = (0, eo.fn)(),
        i = l.find((e) => e.id === a);
    if (null != i)
        switch (i.type) {
            case q.Me.TEXT:
                return (0, n.jsx)(eg, { track: i });
            case q.Me.IMAGE:
                return (0, n.jsx)(ef, { track: i });
        }
    switch (t) {
        case B.Y.CROP:
            return (0, n.jsx)(ea, {});
        case B.Y.NONE:
        default:
            return (0, n.jsx)(eC, { ...e });
    }
}
function eC(e) {
    let { channelId: t, onEdit: o, onClose: c, onExit: O } = e,
        {
            getEditedClip: H,
            voiceAudioEnabled: W,
            setVoiceAudioEnabled: F,
            applicationAudioEnabled: K,
            setApplicationAudioEnabled: V,
            soundboardAudioEnabled: Y,
            setSoundboardAudioEnabled: Z,
            pause: Q,
            clip: en,
            editOnly: ea,
            setActiveTool: er,
            audioTracks: es,
        } = (0, X.T)(),
        { analyticsLocations: ec } = (0, R.Ay)(L.A.CLIPS_EDITOR),
        { addTextTrack: eu, pickAndAddImageTrack: ed, setSelectedTrackId: em } = (0, eo.fn)(),
        { isCropEnabled: ef } = (0, eo.As)(),
        eh = en.type === q.nQ.SCREENSHOT,
        ep = en.type === q.nQ.VOICE_CLIP,
        ex = (0, T.h)(en.applicationId),
        ev = (0, i.bG)([M.Ay], () => M.Ay.isClipExporting(en.id)),
        { onShareClick: eg } = (0, G.A)(t),
        { picker: ey } = a.useContext(_.$),
        eC = (0, z.$)(ey?.action),
        eN = (0, i.bG)([D.A], () => D.A.isDeveloper),
        ek = a.useMemo(() => es.filter((e) => e.trackName.includes(q.gC.VOICE)).length, [es]),
        eE = a.useMemo(() => es.filter((e) => e.trackName.includes(q.gC.SOUNDBOARD)).length, [es]),
        ew = ex?.name ?? en.applicationName ?? ee.intl.string(ee.t.GnQui9);
    return (0, n.jsxs)("div", {
        className: et.XV,
        children: [
            (0, n.jsxs)("div", {
                className: et.eW,
                children: [
                    (0, n.jsxs)(d.e, {
                        wrap: !1,
                        size: "sm",
                        align: "center",
                        justify: "start",
                        direction: "horizontal",
                        children: [
                            (0, n.jsx)(m.m, {
                                position: "bottom",
                                text: en.isFavorite
                                    ? ee.intl.string(J.default.IZsalP)
                                    : ee.intl.string(J.default.ihBfyA),
                                children: (0, n.jsx)(s.K, {
                                    onClick: () => (0, P.XK)(en),
                                    variant: "icon-only",
                                    "aria-label": en.isFavorite
                                        ? ee.intl.string(J.default.IZsalP)
                                        : ee.intl.string(J.default.ihBfyA),
                                    icon: en.isFavorite ? f.StarIcon : h.StarOutlineIcon,
                                }),
                            }),
                            (0, n.jsx)(m.m, {
                                position: "bottom",
                                text: ee.intl.string(ee.t.oyYWHE),
                                children: (0, n.jsx)(s.K, {
                                    onClick: (e) => (0, $.A)(e, { clips: [en], onAfterDelete: c }),
                                    variant: "icon-only",
                                    "aria-label": ee.intl.string(ee.t.oyYWHE),
                                    icon: p.TrashIcon,
                                }),
                            }),
                            (0, n.jsx)(m.m, {
                                position: "bottom",
                                text: ee.intl.string(ee.t.PdRCRg),
                                children: (0, n.jsx)(s.K, {
                                    onClick: function (e) {
                                        (Q(),
                                            (0, I.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e(249169),
                                                    l.e(657266),
                                                    l.e(715867),
                                                    l.e(595429),
                                                    l.e(115472),
                                                    l.e(320891),
                                                    l.e(531279),
                                                    l.e(371863),
                                                    l.e(398793),
                                                    l.e(338601),
                                                    l.e(218489),
                                                    l.e(4328),
                                                    l.e(886456),
                                                    l.e(218307),
                                                    l.e(520342),
                                                    l.e(401343),
                                                ]).then(l.bind(l, 590146));
                                                return (l) =>
                                                    (0, n.jsx)(e, {
                                                        ...l,
                                                        clips: [H()],
                                                        analyticsLocations: ec,
                                                        channelId: t,
                                                        onAfterDelete: c,
                                                        displayConfiguration: eb,
                                                    });
                                            }));
                                    },
                                    variant: "icon-only",
                                    "aria-label": ee.intl.string(ee.t.PdRCRg),
                                    icon: x.MoreHorizontalIcon,
                                }),
                            }),
                            eN &&
                                (0, n.jsx)(m.m, {
                                    position: "bottom",
                                    text: "Clip Debug",
                                    children: (0, n.jsx)(s.K, {
                                        onClick: function () {
                                            (0, u.mM)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        l.e(860350),
                                                        l.e(848625),
                                                        l.e(883952),
                                                        l.e(31e4),
                                                    ]).then(l.bind(l, 224883));
                                                    return (t) => (0, n.jsx)(e, { ...t, clip: en });
                                                },
                                                { stackingBehavior: "stack" },
                                            );
                                        },
                                        icon: v.BugIcon,
                                        variant: "icon-only",
                                        "aria-label": "Clip Debug",
                                    }),
                                }),
                        ],
                    }),
                    (0, n.jsx)(m.m, {
                        position: "bottom",
                        text: ee.intl.string(ee.t.cpT0Cq),
                        children: (0, n.jsx)(s.K, {
                            onClick: O ?? c,
                            icon: g.XLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ee.intl.string(ee.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)(b.Ip, {
                className: et.Md,
                children: [
                    (0, n.jsxs)("div", {
                        className: el.uW,
                        children: [
                            (0, n.jsx)(r.E, {
                                variant: "body-sm/semibold",
                                color: "text-subtle",
                                children: ee.intl.string(J.default.JrcRaE),
                            }),
                            (0, n.jsxs)("div", {
                                className: el.L0,
                                children: [
                                    "" !== en.thumbnail &&
                                        (0, n.jsx)("img", {
                                            className: el.Nf,
                                            src: en.thumbnail,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                    (0, n.jsx)(ei.A, {
                                        variant: "body-sm/medium",
                                        className: el.FA,
                                        containerClassName: el.vt,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !eh &&
                        !ep &&
                        (0, n.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.FmXxW6),
                                }),
                                ef &&
                                    (0, n.jsx)(j.$, {
                                        variant: "secondary",
                                        icon: y.CropIcon,
                                        iconPosition: "start",
                                        fullWidth: !0,
                                        text: ee.intl.string(J.default.RiEyiS),
                                        onClick: () => {
                                            (em(null), er(B.Y.CROP));
                                        },
                                    }),
                                (0, n.jsx)(j.$, {
                                    variant: "secondary",
                                    icon: C.LettersIcon,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: ee.intl.string(J.default.zSN9vp),
                                    onClick: eu,
                                }),
                                (0, n.jsx)(j.$, {
                                    variant: "secondary",
                                    icon: N.ImagePlusIcon,
                                    iconPosition: "start",
                                    fullWidth: !0,
                                    text: ee.intl.string(J.default.iFo3gj),
                                    onClick: ed,
                                }),
                            ],
                        }),
                    !eh &&
                        (0, n.jsxs)("div", {
                            className: el.uW,
                            children: [
                                (0, n.jsx)(r.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-subtle",
                                    children: ee.intl.string(J.default.KRnA2D),
                                }),
                                (0, n.jsxs)("div", {
                                    className: el.VZ,
                                    children: [
                                        (0, n.jsx)(ej, {
                                            icon:
                                                null != ex
                                                    ? (0, n.jsx)(S.A, { game: ex, size: S.M.XXSMALL })
                                                    : (0, n.jsx)(k.WaveformIcon, { size: "sm", color: "currentColor" }),
                                            label: ew,
                                            enabled: K,
                                            onToggle: V,
                                        }),
                                        (0, n.jsx)(ej, {
                                            icon: (0, n.jsx)(E.MicrophoneIcon, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(J.default.ai9fWO),
                                            count: ek,
                                            enabled: W,
                                            disabled: 0 === ek,
                                            onToggle: F,
                                        }),
                                        (0, n.jsx)(ej, {
                                            icon: (0, n.jsx)(w.SoundboardIcon, { size: "sm", color: "currentColor" }),
                                            label: ee.intl.string(J.default["/VVQKJ"]),
                                            enabled: Y,
                                            disabled: 0 === eE,
                                            onToggle: Z,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)(b.Ip, {
                className: et.G3,
                children: (0, n.jsx)(d.e, {
                    direction: "vertical",
                    fullWidth: !0,
                    children: ea
                        ? (0, n.jsx)(j.$, {
                              loading: ev,
                              disabled: ev,
                              variant: "primary",
                              onClick: () =>
                                  eg({
                                      clips: [H()],
                                      onShareComplete: () => {
                                          (o?.(), c());
                                      },
                                  }),
                              text: ee.intl.string(ee.t["R3BPH+"]),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(j.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "secondary",
                                      icon: A.PlusLargeIcon,
                                      iconPosition: "start",
                                      onClick: async function () {
                                          await (0, U.n)(H(), { channelId: t, analyticsLocations: ec });
                                      },
                                      text: ee.intl.string(J.default.HH4Tjj),
                                  }),
                                  (0, n.jsx)(j.$, {
                                      loading: ev,
                                      disabled: ev,
                                      variant: "primary",
                                      icon: eC.icon,
                                      iconPosition: "start",
                                      onClick: null != ey ? () => ey.onPick(H()) : () => eg({ clips: [H()] }),
                                      text: eC.label,
                                  }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
