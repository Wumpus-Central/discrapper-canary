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
    x = n(556389),
    g = n(615161),
    _ = n(396678),
    v = n(37113),
    j = n(65154),
    b = n(637824),
    S = n(388032),
    y = n(214795);
function C() {
    return (0, r.jsx)("span", {
        className: y.ellipsis,
        children: "\u2022",
    });
}
function O(e) {
    let { source: t } = e,
        { data: n } = (0, c.IX)(null != t && (0, x.T)(t) ? t.id : void 0);
    return null == t
        ? (0, r.jsx)(a.hGI, {
              className: y.screenArrowIcon,
              size: "md",
              color: "currentColor",
          })
        : (0, x.T)(t)
          ? (0, r.jsx)(d.Z, {
                game: n,
                pid: t.pid,
            })
          : null == t.icon || "" === t.icon
            ? (0, r.jsx)(a.hGI, {
                  className: y.screenArrowIcon,
                  size: "md",
                  color: "currentColor",
              })
            : (0, r.jsx)("img", {
                  src: t.icon,
                  alt: "",
                  className: y.sourceIcon,
              });
}
function w() {
    var e, t, n, i;
    let [{ preset: c, resolution: d, fps: x, muteStreamAudio: w, selectedSource: Z, sourceType: I, audioSourceId: N }] =
            (0, g.E_)(),
        [P, T] = (0, u.Ls)(j.h7.AUDIO_INPUT, { location: "StreamSettingsSummary" }),
        E = P.concat(T),
        [R, A] = null != (n = (0, _.Z)(c)) ? n : [d, x],
        k = (0, h.L)(c),
        M = (0, p.M)(R),
        D = I === s.vA.CAMERA,
        L = null != Z,
        B = null != Z ? (null == Z || null == (e = Z.id) ? void 0 : e.startsWith(s.vA.CAMERA)) : D,
        G = L
            ? void 0
            : c === v.tI.PRESET_VIDEO
              ? S.intl.string(b.default.MuHUFR)
              : c === v.tI.PRESET_DOCUMENTS
                ? S.intl.string(b.default.y0JuYW)
                : void 0,
        U = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, m.isLinux)());
    return (0, r.jsxs)("div", {
        className: y.root,
        children: [
            L && (0, r.jsx)(O, { source: Z }),
            (0, r.jsxs)("div", {
                className: y.summary,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: y.sourceOrPresetName,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: L
                            ? null != (i = null == Z ? void 0 : Z.name)
                                ? i
                                : S.intl.string(b.default["hJMA+/"])
                            : k,
                    }),
                    (0, r.jsxs)(a.Text, {
                        className: y.summaryDetail,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: [
                            L &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("span", {
                                            className: y.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.ewm, {
                                                    className: y.icon,
                                                    size: "xxs",
                                                    color: "currentColor",
                                                }),
                                                k,
                                            ],
                                        }),
                                        (0, r.jsx)(C, {}),
                                    ],
                                }),
                            null != G &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", { children: G }), (0, r.jsx)(C, {})],
                                }),
                            (0, r.jsx)("span", { children: M }),
                            (0, r.jsx)(C, {}),
                            (0, r.jsx)("span", { children: "".concat(A, "fps") }),
                            w &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(C, {}),
                                        (0, r.jsxs)("span", {
                                            className: y.iconSummaryContainer,
                                            children: [
                                                (0, r.jsx)(a.OyP, {
                                                    className: l()(y.icon, y.mutedIcon),
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
                                U &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(C, {}), S.intl.string(b.default["n9/rUl"])],
                                }),
                            B
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(C, {}),
                                          (0, r.jsx)("span", {
                                              children:
                                                  null ==
                                                  (t = E.find((e) => {
                                                      let { id: t } = e;
                                                      return N === t;
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
