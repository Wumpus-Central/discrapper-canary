n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(28664),
    c = n(481060),
    s = n(313201),
    u = n(224724),
    d = n(817053),
    f = n(890814),
    g = n(394606),
    p = n(388032),
    b = n(713603),
    m = n(813347);
function h(e) {
    let { applicationId: t, userId: n, onClick: i } = e,
        { coverImageUrl: a, gameName: s, isLoading: f } = (0, g.Z)(t),
        h = (0, l.e7)([u.Z], () => u.Z.suggestedFetchIsLoading),
        y = p.intl.formatToPlainString(p.t["3mb1s5"], { game: s });
    return f || h
        ? (0, r.jsx)("div", { className: b.loadingCover })
        : (0, r.jsx)(o.u, {
              text: y,
              ariaHidden: !0,
              children: (0, r.jsxs)(c.P3F, {
                  className: m.addButton,
                  onClick: i,
                  "aria-label": y,
                  children: [
                      (0, r.jsx)(d.Z, {
                          className: m.cover,
                          imageSrc: a,
                          gameName: s,
                          applicationId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, r.jsx)(c.svS, {
                          size: "md",
                          className: m.addIcon,
                          color: c.TVs.colors.WHITE,
                      }),
                  ],
              }),
          });
}
function y(e) {
    let { userId: t, games: n, onDismiss: i, onClick: l, className: o } = e,
        u = (0, s.Dt)();
    return (0, r.jsxs)("aside", {
        className: a()(m.container, o),
        "aria-labelledby": u,
        children: [
            (0, r.jsxs)("div", {
                className: m.header,
                children: [
                    (0, r.jsx)(c.P3F, {
                        className: m.dismissButton,
                        "aria-label": p.intl.string(p.t["pUR+3g"]),
                        onClick: i,
                        children: (0, r.jsx)(c.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(c.Heading, {
                        id: u,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: p.intl.string(p.t.zMUr6Z),
                    }),
                ],
            }),
            (0, r.jsx)(f.Z, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n } = e;
                    return (0, r.jsx)(h, {
                        onClick: () => l(n),
                        userId: t,
                        applicationId: n,
                    });
                },
            }),
        ],
    });
}
