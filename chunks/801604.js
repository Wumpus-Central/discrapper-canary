n.d(t, { Z: () => w }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(268146),
    o = n(442837),
    a = n(481060),
    c = n(728345),
    d = n(925329),
    u = n(72897),
    f = n(131951),
    m = n(358085),
    h = n(672811),
    p = n(891180),
    g = n(556389),
    x = n(615161),
    _ = n(396678),
    v = n(37113),
    j = n(65154),
    b = n(637824),
    S = n(388032),
    C = n(214795);
function y() {
    return (0, r.jsx)("span", {
        className: C.ellipsis,
        children: "\u2022",
    });
}
function O(e) {
    let { source: t } = e,
        { data: n } = (0, c.IX)(null != t && (0, g.T)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: C.screenArrowIcon,
              size: "md",
              color: "currentColor",
          })
        : (0, g.T)(t)
          ? (0, r.jsx)(d.Z, {
                game: n,
                pid: t.pid,
            })
          : null == t.icon || "" === t.icon
            ? (0, r.jsx)(a.hGI, {
                  className: C.screenArrowIcon,
                  size: "md",
                  color: "currentColor",
              })
            : (0, r.jsx)("img", {
                  src: t.icon,
                  alt: "",
                  className: C.sourceIcon,
              });
}
function w() {
    var e, t, n, i;
    let [{ preset: c, resolution: d, fps: g, muteStreamAudio: w, selectedSource: Z, sourceType: I, audioSourceId: P }] =
            (0, x.E_)(),
        [N, T] = (0, u.Ls)(j.h7.AUDIO_INPUT, { location: "StreamSettingsSummary" }),
        E = N.concat(T),
        [R, A] = null != (n = (0, _.Z)(c)) ? n : [d, g],
        k = (0, h.L)(c),
        M = (0, p.M)(R),
        D = I === s.vA.CAMERA,
        L = null != Z,
        B = null != Z ? (null == Z || null == (e = Z.id) ? void 0 : e.startsWith(s.vA.CAMERA)) : D,
        G = c === v.tI.PRESET_AUTO,
        U = L
            ? void 0
            : c === v.tI.PRESET_VIDEO
              ? S.intl.string(b.default.MuHUFR)
              : c === v.tI.PRESET_DOCUMENTS
                ? S.intl.string(b.default.y0JuYW)
                : c === v.tI.PRESET_AUTO
                  ? S.intl.string(b.default.m4jtlZ)
                  : void 0,
        W = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, m.isLinux)());
    return (0, r.jsxs)("div", {
        className: C.root,
        children: [
            L && (0, r.jsx)(O, { source: Z }),
            (0, r.jsxs)("div", {
                className: C.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: C.sourceOrPresetName,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: L
                            ? null != (i = null == Z ? void 0 : Z.name)
                                ? i
                                : S.intl.string(b.default["hJMA+/"])
                            : k,
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: C.summaryDetail,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            className: C.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: C.icon,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                k,
                                            ],
                                        }),
                                        (0, r.jsx)(y, {}),
                                    ],
                                }),
                            null != U && (0, r.jsx)("span", { children: U }),
                            !G &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsx)("span", { children: M }),
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsx)("span", { children: "".concat(A, "fps") }),
                                    ],
                                }),
                            w &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(y, {}),
                                        (0, r.jsxs)("span", {
                                            className: C.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: l()(C.icon, C.mutedIcon),
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                S.intl.string(b.default.FzMGWV),
                                            ],
                                        }),
                                    ],
                                }),
                            !w &&
                                !B &&
                                W &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(y, {}), S.intl.string(b.default["n9/rUl"])],
                                }),
                            B
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(y, {}),
                                          (0, r.jsx)("span", {
                                              children:
                                                  null ==
                                                  (t = E.find((e) => {
                                                      let { id: t } = e;
                                                      return P === t;
                                                  }))
                                                      ? void 0
                                                      : t.name,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        ],
    });
}
