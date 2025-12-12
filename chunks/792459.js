a.r(t), a.d(t, { default: () => k }), a(388685), a(35282), a(65234), a(111804), a(490233), a(97749);
var s = a(54381),
    n = a(473749),
    i = a(873546),
    c = a(442837),
    l = a(481060),
    r = a(830064),
    d = a(388905),
    g = a(625128),
    o = a(362762),
    m = a(703656),
    x = a(22095),
    h = a(968843),
    u = a(110560),
    p = a(324805),
    b = a(981631),
    T = a(186901),
    j = a(388032),
    _ = a(227633),
    E = a(74830),
    v = a(770354);
c.ZP.initialize();
let N = i.tq || i.Em;
function k(e) {
    let { match: t } = e,
        a = (0, c.e7)([o.Z], () => o.Z.getState("quest-preview")),
        i = t.params.questId,
        k = (function (e) {
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
        if (!N) {
            if (null == a)
                g.Z.openNativeAppModal("quest-preview", b.Etm.DEEP_LINK, {
                    type: T.jE.QUEST_PREVIEW_TOOL,
                    params: { questId: i },
                });
            else if (a === b.kEZ.OPEN_FAIL) {
                let e = new URLSearchParams();
                e.set(h.tR.TAB, h.e5.PREVIEW_TOOL),
                    e.set(h.tR.QUEST_ID, i),
                    (0, m.dL)({
                        pathname: b.Z5c.QUEST_HOME_V2,
                        search: "?".concat(e.toString()),
                    });
            }
        }
    }, [a, i]);
    let f = n.useCallback(() => (0, u.openAppWithQuestPreview)(i), [i]);
    if (N)
        return (0, s.jsxs)("div", {
            className: _.page,
            children: [
                (0, s.jsx)("img", {
                    className: _.bgImg,
                    src: v.ZP,
                    alt: "",
                }),
                (0, s.jsx)("div", {
                    className: _.logoContainer,
                    children: (0, s.jsx)("img", {
                        src: E,
                        alt: "",
                    }),
                }),
                null != k &&
                    (0, s.jsx)("div", {
                        className: _.card,
                        children:
                            "ok" === k.status
                                ? (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: _.gameTile,
                                              children: (0, s.jsx)("img", {
                                                  src: ""
                                                      .concat(p.HO)
                                                      .concat(i, "/dark/")
                                                      .concat(k.value.assets.gameTile),
                                                  alt: "",
                                                  className: _.gameTileImg,
                                              }),
                                          }),
                                          (0, s.jsx)(l.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: _.headingText,
                                              children: k.value.messages.questName,
                                          }),
                                          (0, s.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              className: _.bodyText,
                                              children: j.intl.string(j.t.bWuKqh),
                                          }),
                                          (0, s.jsx)(l.Button, {
                                              variant: "primary",
                                              text: j.intl.string(j.t.UQvCf7),
                                              fullWidth: !0,
                                              onClick: f,
                                          }),
                                      ],
                                  })
                                : (0, s.jsxs)(s.Fragment, {
                                      children: [
                                          (0, s.jsx)(l.Heading, {
                                              variant: "heading-lg/semibold",
                                              color: "text-default",
                                              className: _.headingText,
                                              children: j.intl.string(j.t.k4z4er),
                                          }),
                                          (0, s.jsx)(l.Text, {
                                              variant: "text-md/normal",
                                              className: _.bodyText,
                                              children: j.intl.string(j.t.gtZK09),
                                          }),
                                      ],
                                  }),
                    }),
            ],
        });
    let I = null == a || a === b.kEZ.OPENING || a === b.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.Z, {
                className: _.backgroundArtwork,
                preserveAspectRatio: "xMinYMin slice",
            }),
            (0, s.jsx)("div", {
                className: _.container,
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
                                      className: _.appOpenedTitle,
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
