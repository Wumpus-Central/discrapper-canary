a.r(t), a.d(t, { default: () => f }), a(388685), a(35282), a(65234), a(111804), a(490233), a(97749);
var s = a(54381),
    n = a(473749),
    i = a(873546),
    l = a(442837),
    r = a(481060),
    c = a(830064),
    d = a(388905),
    g = a(625128),
    o = a(362762),
    m = a(703656),
    x = a(22095),
    h = a(113434),
    u = a(110560),
    p = a(46140),
    _ = a(981631),
    T = a(186901),
    j = a(388032),
    E = a(596009),
    v = a(74830),
    N = a(13299);
l.ZP.initialize();
let k = i.tq || i.Em;
function f(e) {
    let { match: t } = e,
        a = (0, l.e7)([o.Z], () => o.Z.getState("quest-preview")),
        i = t.params.questId,
        f = (function (e) {
            let [t, a] = n.useState(null);
            return (
                n.useEffect(() => {
                    (0, x.gU)(e)
                        .then((e) =>
                            a({
                                status: "ok",
                                value: e,
                            }),
                        )
                        .catch(() => a({ status: "error" }));
                }, [a, e]),
                t
            );
        })(i);
    n.useEffect(() => {
        if (!k) {
            if (null == a)
                g.Z.openNativeAppModal("quest-preview", _.Etm.DEEP_LINK, {
                    type: T.jE.QUEST_PREVIEW_TOOL,
                    params: { questId: i },
                });
            else if (a === _.kEZ.OPEN_FAIL) {
                let e = new URLSearchParams();
                e.set(h.tR.TAB, h.e5.PREVIEW_TOOL),
                    e.set(h.tR.QUEST_ID, i),
                    (0, m.dL)({
                        pathname: _.Z5c.QUEST_HOME_V2,
                        search: "?".concat(e.toString()),
                    });
            }
        }
    }, [a, i]);
    let b = n.useCallback(() => (0, u.openAppWithQuestPreview)(i), [i]);
    if (k)
        return (0, s.jsxs)("div", {
            className: E.page,
            children: [
                (0, s.jsx)("img", {
                    className: E.bgImg,
                    src: N.ZP,
                    alt: "",
                }),
                (0, s.jsx)("div", {
                    className: E.logoContainer,
                    children: (0, s.jsx)("img", {
                        src: v,
                        alt: "",
                    }),
                }),
                null != f &&
                    (0, s.jsx)("div", {
                        className: E.card,
                        children:
                            "ok" === f.status
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: E.gameTile,
                                              children: (0, s.jsx)("img", {
                                                  src: ""
                                                      .concat(p.HO)
                                                      .concat(i, "/dark/")
                                                      .concat(f.value.assets.gameTile),
                                                  alt: "",
                                                  className: E.gameTileImg,
                                              }),
                                          }),
                                          (0, s.jsx)(r.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: E.headingText,
                                              children: f.value.messages.questName,
                                          }),
                                          (0, s.jsx)(r.Text, {
                                              variant: "text-md/normal",
                                              className: E.bodyText,
                                              children: j.intl.string(j.t.bWuKqh),
                                          }),
                                          (0, s.jsx)(r.Button, {
                                              variant: "primary",
                                              text: j.intl.string(j.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: b,
                                          }),
                                      ],
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(r.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: E.headingText,
                                              children: j.intl.string(j.t.k4z4er),
                                          }),
                                          (0, s.jsx)(r.Text, {
                                              variant: "text-md/normal",
                                              className: E.bodyText,
                                              children: j.intl.string(j.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let I = null == a || a === _.kEZ.OPENING || a === _.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(c.Z, {
                className: E.backgroundArtwork,
                preserveAspectRatio: "xMinYMin slice",
            }),
            (0, s.jsx)("div", {
                className: E.container,
                children: (0, s.jsx)(d.ZP, {
                    children: I
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, { children: j.intl.string(j.t["Z+hCVU"]) }),
                                  (0, s.jsx)(d.Hh, {}),
                              ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, {
                                      className: E.appOpenedTitle,
                                      children: j.intl.string(j.t.csrAMJ),
                                  }),
                                  (0, s.jsx)(d.DK, { children: j.intl.string(j.t.ghBJz9) }),
                              ],
                          }),
                }),
            }),
        ],
    });
}
