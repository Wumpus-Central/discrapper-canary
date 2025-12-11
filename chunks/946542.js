n.d(t, { Z: () => x }), n(953529), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(907331),
    l = n(481060),
    s = n(768581),
    o = n(255333),
    c = n(881294),
    d = n(194594),
    u = n(523311),
    p = n(359993),
    m = n(981631),
    h = n(388032),
    f = n(411317);
function g(e) {
    let { applicationId: t, similarApplications: n, onSelectApplication: l, similarLoadId: s } = e,
        o = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                [a, l] = r.useState(),
                s = (0, i.O)((e) => {
                    e && l(t);
                });
            return (
                r.useEffect(() => {
                    a === t &&
                        (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n,
                        });
                }, [a, t, n]),
                s
            );
        })({
            applicationId: t,
            similarAppIds: r.useMemo(() => n.map((e) => e.id), [n]),
        });
    return (0, a.jsx)("div", {
        className: f.contentContainer,
        ref: o,
        children: n.map((e, n) =>
            (0, a.jsx)(
                b,
                {
                    applicationId: t,
                    similarApplication: e,
                    onSelectApplication: l,
                    similarLoadId: s,
                    position: n,
                },
                e.id,
            ),
        ),
    });
}
function b(e) {
    var t, n, i;
    let { applicationId: o, similarApplication: u, onSelectApplication: h, position: g, similarLoadId: b } = e,
        x = (0, p.Z)({ application: u }),
        v = null == (t = u.categories) ? void 0 : t[0],
        C = r.useMemo(
            () =>
                s.ZP.getApplicationIconURL({
                    id: u.id,
                    icon: u.icon,
                    size: 48,
                }),
            [u],
        ),
        j = r.useCallback(() => {
            (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: o,
                suggested_application_id: u.id,
                position: g,
                load_id: b,
                shown_mutual_guilds_count: x.length,
            }),
                h(u.id);
        }, [h, u.id, o, x.length, b, g]);
    return (0, a.jsxs)(l.P3F, {
        onClick: j,
        className: f.appContainer,
        children: [
            (0, a.jsxs)("div", {
                className: f.appHeader,
                children: [
                    (0, a.jsx)("img", {
                        src: C,
                        alt: "",
                        className: f.avatar,
                        height: 48,
                        width: 48,
                    }),
                    (0, a.jsxs)("div", {
                        className: f.titleContainer,
                        children: [
                            (0, a.jsx)("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: "hidden",
                                },
                                children: (0, a.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    className: f.appName,
                                    children: u.name,
                                }),
                            }),
                            null != v
                                ? (0, a.jsx)(l.Text, {
                                      className: f.appCategory,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: v.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(l.Text, {
                className: f.appDescription,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children:
                    null != (i = null == (n = u.directory_entry) ? void 0 : n.short_description) ? i : u.description,
            }),
            (0, a.jsx)(d.Z, {
                application: u,
                textVariant: "text-xs/medium",
                mutualGuilds: x,
                mutualGuildShownMax: 3,
                guildIconSize: d.x.SMALL,
                compact: !0,
            }),
        ],
    });
}
let x = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: r, onSelectApplication: i, similarLoadId: s } = e;
    return n !== o.M.FETCHING && (null == r || 0 === r.length)
        ? null
        : (0, a.jsxs)("div", {
              className: f.sectionContainer,
              children: [
                  (0, a.jsx)("div", { className: f.divider }),
                  (0, a.jsx)(l.Heading, {
                      variant: "heading-sm/semibold",
                      color: "text-strong",
                      className: f.sectionHeader,
                      children: h.intl.string(h.t.E8wCnk),
                  }),
                  (0, a.jsx)(u.Z, {
                      loading: n === o.M.FETCHING,
                      children:
                          null != r
                              ? (0, a.jsx)(g, {
                                    applicationId: t,
                                    similarApplications: r,
                                    onSelectApplication: i,
                                    similarLoadId: s,
                                })
                              : null,
                  }),
              ],
          });
};
