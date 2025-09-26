n.d(t, { J: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(457165),
    d = n(469121),
    p = n(626135),
    m = n(998502),
    f = n(743498),
    b = n(778033),
    y = n(967021),
    g = n(709706),
    v = n(56848),
    O = n(378441),
    j = n(981631),
    h = n(509571),
    x = n(388032),
    P = n(478875);
function _(e) {
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
function w(e, t) {
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
let C = (e) => {
    let { voiceFilter: t, hasNitro: n, analyticsContext: o } = e,
        { activeVoice: C, mostRecentlyRequestedVoiceId: E } = (0, O.o)(),
        I = (0, v.z)(t.id),
        S = t.id === C,
        T = !t.available && !t.temporarilyAvailable,
        N = t.temporarilyAvailable && !n && !S,
        D = !S && t.id === E,
        [Z, k] = i.useState(!1);
    i.useEffect(() => {
        let e = D ? setTimeout(() => k(D), 200) : void 0;
        return () => {
            clearTimeout(e), k(!1);
        };
    }, [D]);
    let M = (0, y.J_)({
            location: "voice_filter_item",
            autoTrackExposure: !0,
            disable: !m.ZP.canCheckVoiceFilterFilesExist(),
        }),
        A = (0, a.e7)([g.Z], () => g.Z.isVoiceFilterDownloaded(t.id), [t]),
        R = null == I ? void 0 : I.previewSoundURLs,
        [V, F] = i.useState(0),
        {
            isPlaying: L,
            playSound: U,
            stopSound: Y,
            preloadSound: H,
        } = (0, d.Z)(null != R ? R[V] : null, { soundId: t.id }),
        z = P[t.styleKey],
        q = i.useCallback(() => {
            n || !T
                ? ((0, f.v6)(C === t.id ? null : t.id, o),
                  N &&
                      p.default.track(
                          j.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED,
                          _({ voice_filter_id: t.id }, (0, b.w)(o)),
                      ))
                : (0, u.i)();
        }, [n, T, C, t.id, o, N]),
        B = i.useCallback(() => {
            p.default.track(j.rMx.VOICE_FILTER_PREVIEW_PLAYED, _({ voice_filter_id: t.id }, (0, b.w)(o))),
                U({
                    volume: 0.5,
                    outputChannel: h.w.VOICE,
                }),
                (0.25 > Math.random() || V > 0) && null != R && F((e) => (e + 1) % R.length);
        }, [o, U, V, R, t.id]),
        W = null != I ? x.intl.string(I.name) : "";
    return (0, r.jsxs)("div", {
        className: l()(P.filter, z, {
            [P.selected]: S,
            [P.locked]: T && !S,
        }),
        children: [
            (0, r.jsx)(c.ua7, {
                shouldShow: M && !A,
                "aria-label": x.intl.string(x.t.SQ7qMD),
                text: (0, r.jsxs)("div", {
                    className: P.downloadRequiredContent,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            children: x.intl.string(x.t.SQ7qMD),
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: x.intl.string(x.t.TbnPVl),
                        }),
                    ],
                }),
                children: (e) =>
                    (0, r.jsxs)(
                        c.P3F,
                        w(_({ className: P.selector }, e), {
                            onClick: () => {
                                var t;
                                q(), null == e || null == (t = e.onClick) || t.call(e);
                            },
                            onMouseEnter: () => {
                                var t;
                                H(), null == e || null == (t = e.onMouseEnter) || t.call(e);
                            },
                            children: [
                                (0, r.jsxs)("div", {
                                    className: P.iconTreatmentsWrapper,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: l()(P.profile, { [P.underDevelopment]: t.underDevelopment }),
                                            children: [
                                                (0, r.jsx)("img", {
                                                    className: P.thumbnail,
                                                    alt: "",
                                                    src: null == I ? void 0 : I.iconURL,
                                                    draggable: !1,
                                                }),
                                                (0, r.jsx)("div", { className: P.insetBorder }),
                                            ],
                                        }),
                                        S &&
                                            (0, r.jsx)("div", {
                                                className: P.iconCircle,
                                                children: (0, r.jsx)(c.owK, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    colorClass: P.checkmark,
                                                    secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css,
                                                }),
                                            }),
                                        T &&
                                            !S &&
                                            (0, r.jsx)("div", {
                                                className: l()([P.iconCircle, P.lockedCircle]),
                                                children: (0, r.jsx)(c.mBM, {
                                                    size: "custom",
                                                    height: 16,
                                                    width: 16,
                                                    color: "currentColor",
                                                    colorClass: P.lockedIcon,
                                                }),
                                            }),
                                        N &&
                                            (0, r.jsx)("div", {
                                                className: l()([P.iconCircle, P.iconBorder]),
                                                children: (0, r.jsx)("div", {
                                                    className: l()([P.clockCircle]),
                                                    children: (0, r.jsx)(c.T39, {
                                                        size: "custom",
                                                        height: 16,
                                                        width: 16,
                                                        color: "currentColor",
                                                        colorClass: P.clockIcon,
                                                    }),
                                                }),
                                            }),
                                        Z &&
                                            (0, r.jsx)("div", {
                                                className: P.spinnerWrapper,
                                                children: (0, r.jsx)(c.$jN, {
                                                    type: c.$jN.Type.CHASING_DOTS,
                                                    animated: !0,
                                                    className: P.spinner,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: P.filterName,
                                    children: [
                                        (0, r.jsxs)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: t.underDevelopment ? "header-muted" : "header-primary",
                                            children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", W],
                                        }),
                                        M && !A ? (0, r.jsx)(c._8t, { size: "xxs" }) : null,
                                    ],
                                }),
                            ],
                        }),
                    ),
            }),
            null != R &&
                (0, r.jsx)(c.ua7, {
                    text: x.intl.string(L ? x.t.ItuPbm : x.t["0gtbEx"]),
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            w(_({}, e), {
                                className: l()([P.hoverButtonCircle, P.previewButton], { [P.visible]: L }),
                                onClick: L ? Y : B,
                                "aria-label": x.intl.formatToPlainString(x.t.gDzvjY, { voiceFilterName: W }),
                                children: L
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
