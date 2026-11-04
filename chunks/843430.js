(n.r(t), n.d(t, { baseRules: () => S, customRules: () => U }));
var l = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(478676),
    u = n.n(o);
(n(323874), n(14289), n(35956), n(321073));
let i = "media.discordapp.net",
    c = /^\/attachments\/\d+\/\d+\/[^/]+$/,
    p = /\.gif$/i,
    d = /^(\d{1,5})x(\d{1,5})$/;
function m(e) {
    try {
        return new URL(e);
    } catch {
        return null;
    }
}
function g(e) {
    let t = m(e);
    return (
        null != t && "https:" === t.protocol && ("cdn.discordapp.com" === t.host || t.host === i) && c.test(t.pathname)
    );
}
function h(e, t) {
    return null == e ? [] : "text" === e.type && "string" == typeof e.content ? [{ ...e, content: t(e.content) }] : [e];
}
var f = n(707554),
    R = n(192308),
    b = n(28863),
    k = n(398590),
    y = n(693875),
    x = n(253932),
    v = n(910379);
let A = /^([a-z][a-z\d+.-]*:|\/\/)/i;
function N(e) {
    let t,
        a,
        { target: r, alt: o, title: u } = e,
        c = x.kt.useSetting(),
        [h, f] = s.useState(!1),
        [R, b] = s.useState(!1),
        k = g(r),
        N = k
            ? r
            : (function (e) {
                  if (A.test(e)) return null;
                  try {
                      return n(274516)(`./${e}`);
                  } catch {
                      return null;
                  }
              })(r);
    if (null == N || h) return null;
    let C = k
            ? (function (e) {
                  let t = null != e ? d.exec(e.trim()) : null;
                  if (null == t) return null;
                  let n = Number(t[1]),
                      l = Number(t[2]);
                  return n > 0 && l > 0 ? { width: n, height: l } : null;
              })(u)
            : null,
        j =
            null != C
                ? ((t = Math.max(0, Math.min(1, 432 / C.width, 400 / C.height))),
                  { width: Math.max(1, Math.round(C.width * t)), height: Math.max(1, Math.round(C.height * t)) })
                : null,
        w =
            k && !c && null != (a = m(N)) && p.test(a.pathname)
                ? (function (e) {
                      if (!g(e)) return null;
                      let t = new URL(e);
                      return ((t.host = i), t.searchParams.set("format", "webp"), t.toString());
                  })(N)
                : null,
        E = null != w,
        _ = E && !R;
    function I() {
        b(!0);
    }
    function L() {
        b(!1);
    }
    return (0, l.jsxs)("div", {
        className: v.inlineImage,
        children: [
            (0, l.jsx)("img", {
                className: v.inlineImageMedia,
                src: _ ? w : N,
                alt: o,
                width: j?.width,
                height: j?.height,
                loading: "lazy",
                tabIndex: E ? 0 : void 0,
                onMouseEnter: E ? I : void 0,
                onMouseLeave: E ? L : void 0,
                onFocus: E ? I : void 0,
                onBlur: E ? L : void 0,
                onError: () => f(!0),
            }),
            _ ? (0, l.jsx)(y.A, { className: v.inlineImageGifTag }) : null,
        ],
    });
}
var C = n(46054),
    j = n(551965),
    w = n(976860),
    E = n(780964),
    _ = n(766075),
    I = n(129230),
    L = n(652215),
    M = n(559868),
    O = n(736541);
let D = u().defaultRules.link,
    T = { section: L.JJy.SETTINGS_CHANGELOG };
function G(e) {
    let { level: t, children: n, className: l } = e,
        a = (0, f.$)(),
        r = parseInt(t, 10),
        o = isNaN(r) ? 1 : r;
    return s.createElement(`h${a + o - 1}`, { className: l }, n);
}
let S = (function () {
        if (null == C.A) return null;
        let { emoji: e, customEmoji: t } = C.A.createReactRules({
            enableBuildOverrides: !0,
            enableEmojiClick: !1,
            emojiFocusable: !1,
        });
        return (0, j.A)([C.A.defaultRules, { emoji: e, customEmoji: t }]);
    })(),
    U = {
        link: {
            parse(e, t, n) {
                let l,
                    s = e[2],
                    a = s.startsWith("https://discordapp.com/nitro") || s.startsWith("https://discord.com/nitro"),
                    r = s.startsWith("/activities");
                return (
                    (l = a
                        ? (e) => {
                              (I.default.track(L.HAw.PREMIUM_PROMOTION_OPENED, { location: T }),
                                  (0, _.openUserSettings)(E.X.NITRO_PANEL),
                                  n.changeLog.track(L.HAw.CHANGE_LOG_CTA_CLICKED, { cta_type: "nitro" }),
                                  (0, R.Oo)(M.lb),
                                  e.preventDefault());
                          }
                        : r
                          ? (e) => {
                                ((0, w.pX)(s),
                                    n.changeLog.track(L.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        ...I.default.getCampaignParams(s),
                                    }),
                                    (0, k.bz)(),
                                    (0, R.Oo)(M.lb),
                                    e.preventDefault());
                            }
                          : () => {
                                (n && "function" == typeof n.onLinkClick && n.onLinkClick(s),
                                    n.changeLog.track(L.HAw.CHANGE_LOG_CTA_CLICKED, {
                                        target: s,
                                        cta_type: "inline_link",
                                        ...I.default.getCampaignParams(s),
                                    }));
                            }),
                    { ...D.parse(e, t, n), callToAction: l }
                );
            },
            react: (e, t, n) =>
                (0, l.jsx)(
                    b.Anchor,
                    {
                        href: u().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: "_blank",
                        className: e.callToAction ? "cta" : void 0,
                        children: t(e.content, n),
                    },
                    n.key,
                ),
        },
        lheading: (e) => ({
            react: (t, n, s) => {
                var a;
                return (0, l.jsx)(
                    G,
                    {
                        level: t.level,
                        className: r()(
                            O["heading-sm/semibold"],
                            ...(null == (a = t.className) ? [] : a.split(" ").map((t) => e[t])),
                        ),
                        children: n(t.content, s),
                    },
                    s.key,
                );
            },
        }),
        heading: {
            react: (e, t, n) =>
                (0, l.jsx)(
                    G,
                    { level: e.level, className: O["heading-sm/semibold"], children: t(e.content, n) },
                    n.key,
                ),
        },
        image: {
            react: (e, t, n) =>
                !0 !== n.changelogBlockImage
                    ? null
                    : (0, l.jsx)(N, { target: e.target, alt: e.alt, title: e.title }, n.key),
        },
        blockQuote: { react: (e, t, n) => S?.blockQuote.react(e, t, { ...n, changelogImagesDisabled: !0 }) },
        list: (e) => ({
            react(t, n, s) {
                let a = t.ordered ? "ol" : "ul",
                    o = t.items.map((t, a) =>
                        (0, l.jsx)(
                            "li",
                            {
                                className: r()(O["body-md/normal"], e.listItem),
                                children: n(t, { ...s, changelogImagesDisabled: !0 }),
                            },
                            a,
                        ),
                    );
                return (0, l.jsx)(a, { className: e.list, start: t.start, children: o }, s.key);
            },
        }),
        paragraph: (e) => ({
            react(t, n, a) {
                let o = r()(O["body-md/normal"], e.paragraph),
                    u = (function (e) {
                        let t = [],
                            n = [],
                            l = !1;
                        function s(e) {
                            let s = n;
                            if (e) {
                                let e = s[s.length - 1];
                                s = [...s.slice(0, -1), ...h(e, (e) => e.trimEnd())];
                            }
                            (l && (s = [...h(s[0], (e) => e.trimStart()), ...s.slice(1)]),
                                s.some(
                                    (e) =>
                                        "br" !== e.type &&
                                        "newline" !== e.type &&
                                        ("text" !== e.type || "string" != typeof e.content || "" !== e.content.trim()),
                                ) && t.push({ type: "text", nodes: s }),
                                (n = []));
                        }
                        return (
                            e.forEach((e) => {
                                "image" === e.type ? (s(!0), t.push({ type: "image", node: e }), (l = !0)) : n.push(e);
                            }),
                            s(!1),
                            t
                        );
                    })(t.content);
                return !0 !== a.changelogImagesDisabled && u.some((e) => "image" === e.type)
                    ? (0, l.jsx)(
                          s.Fragment,
                          {
                              children: u.map((e, t) =>
                                  "image" === e.type
                                      ? (0, l.jsx)(
                                            s.Fragment,
                                            { children: n([e.node], { ...a, changelogBlockImage: !0 }) },
                                            t,
                                        )
                                      : (0, l.jsx)("p", { className: o, children: n(e.nodes, a) }, t),
                              ),
                          },
                          a.key,
                      )
                    : (0, l.jsx)("p", { className: o, children: n(t.content, a) }, a.key);
            },
        }),
    };
