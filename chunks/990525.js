n.d(t, { J: () => P }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(457165),
    d = n(469121),
    p = n(626135),
    f = n(998502),
    m = n(743498),
    g = n(778033),
    v = n(967021),
    _ = n(709706),
    b = n(56848),
    h = n(378441),
    y = n(981631),
    O = n(509571),
    j = n(388032),
    S = n(478875);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: l } = e,
        { activeVoice: P, mostRecentlyRequestedVoiceId: C } = (0, h.o)(),
        E = (0, b.z)(t.id),
        w = t.id === P,
        T = !t.available && !t.temporarilyAvailable,
        N = t.temporarilyAvailable && !n && !w,
        Z = !w && t.id === C,
        [A, D] = i.useState(!1);
    i.useEffect(() => {
        let e = Z ? setTimeout(() => D(Z), 200) : void 0;
        return () => {
            clearTimeout(e), D(!1);
        };
    }, [Z]);
    let k = (0, v.J_)({
            location: "voice_filter_item",
            autoTrackExposure: !0,
            disable: !f.ZP.canCheckVoiceFilterFilesExist(),
        }),
        L = (0, o.e7)([_.Z], () => _.Z.isVoiceFilterDownloaded(t.id), [t]),
        M = null == E ? void 0 : E.previewSoundURLs,
        [U, R] = i.useState(0),
        {
            isPlaying: V,
            playSound: F,
            stopSound: B,
            preloadSound: W,
        } = (0, d.Z)(null != M ? M[U] : null, { soundId: t.id }),
        Y = S[t.styleKey],
        H = i.useCallback(() => {
            n || !T
                ? ((0, m.v6)(P === t.id ? null : t.id, l),
                  N &&
                      p.default.track(
                          y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED,
                          x({ voice_filter_id: t.id }, (0, g.w)(l)),
                      ))
                : (0, u.i)();
        }, [n, T, P, t.id, l, N]),
        G = i.useCallback(() => {
            p.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, x({ voice_filter_id: t.id }, (0, g.w)(l))),
                F({
                    volume: 0.5,
                    outputChannel: O.w.VOICE,
                }),
                (0.25 > Math.random() || U > 0) && null != M && R((e) => (e + 1) % M.length);
        }, [l, F, U, M, t.id]),
        z = null != E ? j.intl.string(E.name) : "";
    return (0, r.jsxs)("div", {
        className: a()(S.filter, Y, {
            [S.selected]: w,
            [S.locked]: T && !w,
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: k && !L,
                "aria-label": j.intl.string(j.t.SQ7qMD),
                text: (0, r.jsxs)("div", {
                    className: S.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            children: j.intl.string(j.t.SQ7qMD),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: j.intl.string(j.t.TbnPVl),
                        }),
                    ],
                }),
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        I(x({ className: S.selector }, e), {
                            onClick: () => {
                                var t;
                                H(), null == e || null == (t = e.onClick) || t.call(e);
                            },
                            onMouseEnter: () => {
                                var t;
                                W(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                            },
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: a()(S.profile, { [S.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)("img", {
                                                    className: S.thumbnail,
                                                    alt: "",
                                                    src: null == E ? void 0 : E.iconURL,
                                                    draggable: !1,
                                                }),
                                                (0, r.jsx)("div", { className: S.insetBorder }),
                                            ],
                                        }),
                                        w &&
                                            (0, r.jsx)("div", {
                                                className: S.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    colorClass: S.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css,
                                                }),
                                            }),
                                        T &&
                                            !w &&
                                            (0, r.jsx)("div", {
                                                className: a()([S.iconCircle, S.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: "custom",
                                                    height: 16,
                                                    width: 16,
                                                    color: "currentColor",
                                                    colorClass: S.lockedIcon,
                                                }),
                                            }),
                                        N &&
                                            (0, r.jsx)("div", {
                                                className: a()([S.iconCircle, S.iconBorder]),
                                                children: (0, r.jsx)("div", {
                                                    className: a()([S.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: "custom",
                                                        height: 16,
                                                        width: 16,
                                                        color: "currentColor",
                                                        colorClass: S.clockIcon,
                                                    }),
                                                }),
                                            }),
                                        A &&
                                            (0, r.jsx)("div", {
                                                className: S.spinnerWrapper,
                                                children: (0, r.jsx)(c.$jN, {
                                                    type: c.$jN.Type.CHASING_DOTS,
                                                    animated: !0,
                                                    className: S.spinner,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: S.filterName,
                                    children: [
                                        (0, r.jsxs)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: t.underDevelopment ? "header-muted" : "header-primary",
                                            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", z],
                                        }),
                                        k && !L ? (0, r.jsx)(c._8t, { size: "xxs" }) : null,
                                    ],
                                }),
                            ],
                        }),
                    ),
            }),
            null != M &&
                (0, r.jsx)(c.ua7, {
                    text: j.intl.string(V ? j.t.ItuPbm : j.t["0gtbEx"]),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            I(x({}, e), {
                                className: a()([S.hoverButtonCircle, S.previewButton], { [S.visible]: V }),
                                onClick: V ? B : G,
                                "aria-label": j.intl.formatToPlainString(j.t.gDzvjY, { voiceFilterName: z }),
                                children: V
                                    ? (0, r.jsx)(c.wNq, {
                                          size: "custom",
                                          height: 16,
                                          width: 16,
                                          color: "white",
                                      })
                                    : (0, r.jsx)(c.o1U, {
                                          size: "custom",
                                          height: 16,
                                          width: 16,
                                          color: "white",
                                      }),
                            }),
                        ),
                }),
        ],
    });
};
