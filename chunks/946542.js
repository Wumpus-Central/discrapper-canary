n.d(t, { Z: () => b }), n(953529), n(388685);
var r = n(54381),
    a = n(473749),
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
    g = n(431085);
function f(e) {
    let { applicationId: t, similarApplications: n, onSelectApplication: l, similarLoadId: s } = e,
        o = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                [r, l] = a.useState(),
                s = (0, i.O)((e) => {
                    e && l(t);
                });
            return (
                a.useEffect(() => {
                    r === t &&
                        (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n,
                        });
                }, [r, t, n]),
                s
            );
        })({
            applicationId: t,
            similarAppIds: a.useMemo(() => n.map((e) => e.id), [n]),
        });
    return (0, r.jsx)("div", {
        className: g.contentContainer,
        ref: o,
        children: n.map((e, n) =>
            (0, r.jsx)(
                _,
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
function _(e) {
    var t, n, i;
    let { applicationId: o, similarApplication: u, onSelectApplication: h, position: f, similarLoadId: _ } = e,
        b = (0, p.Z)({ application: u }),
        x = null == (t = u.categories) ? void 0 : t[0],
        v = a.useMemo(
            () =>
                s.ZP.getApplicationIconURL({
                    id: u.id,
                    icon: u.icon,
                    size: 48,
                }),
            [u],
        ),
        C = a.useCallback(() => {
            (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: "product",
                application_id: o,
                suggested_application_id: u.id,
                position: f,
                load_id: _,
                shown_mutual_guilds_count: b.length,
            }),
                h(u.id);
        }, [h, u.id, o, b.length, _, f]);
    return (0, r.jsxs)(l.P3F, {
        onClick: C,
        className: g.appContainer,
        children: [
            (0, r.jsxs)("div", {
                className: g.appHeader,
                children: [
                    (0, r.jsx)("img", {
                        src: v,
                        alt: "",
                        className: g.avatar,
                        height: 48,
                        width: 48,
                    }),
                    (0, r.jsxs)("div", {
                        className: g.titleContainer,
                        children: [
                            (0, r.jsx)("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: "hidden",
                                },
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    className: g.appName,
                                    children: u.name,
                                }),
                            }),
                            null != x
                                ? (0, r.jsx)(l.Text, {
                                      className: g.appCategory,
                                      variant: "text-xs/medium",
                                      color: "text-muted",
                                      children: x.name,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(l.Text, {
                className: g.appDescription,
                variant: "text-sm/medium",
                color: "text-default",
                lineClamp: 2,
                children:
                    null != (i = null == (n = u.directory_entry) ? void 0 : n.short_description) ? i : u.description,
            }),
            (0, r.jsx)(d.Z, {
                application: u,
                textVariant: "text-xs/medium",
                mutualGuilds: b,
                mutualGuildShownMax: 3,
                guildIconSize: d.x.SMALL,
                compact: !0,
            }),
        ],
    });
}
let b = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: a, onSelectApplication: i, similarLoadId: s } = e;
    return n !== o.M.FETCHING && (null == a || 0 === a.length)
        ? null
        : (0, r.jsxs)("div", {
              className: g.sectionContainer,
              children: [
                  (0, r.jsx)("div", { className: g.divider }),
                  (0, r.jsx)(l.Heading, {
                      variant: "heading-sm/semibold",
                      color: "header-primary",
                      className: g.sectionHeader,
                      children: h.intl.string(h.t.E8wCnk),
                  }),
                  (0, r.jsx)(u.Z, {
                      loading: n === o.M.FETCHING,
                      children:
                          null != a
                              ? (0, r.jsx)(f, {
                                    applicationId: t,
                                    similarApplications: a,
                                    onSelectApplication: i,
                                    similarLoadId: s,
                                })
                              : null,
                  }),
              ],
          });
};
