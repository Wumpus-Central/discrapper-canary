t(47120);
var a = t(200651),
    i = t(192379),
    r = t(481060),
    l = t(434650),
    o = t(303383),
    s = t(924489),
    c = t(125909),
    d = t(824606),
    u = t(768581),
    m = t(881294),
    p = t(981631),
    _ = t(388032),
    g = t(69812);
function v(e) {
    let { applicationId: n, similarApplications: t, onSelectApplication: r, similarLoadId: o } = e,
        s = (function (e) {
            let { applicationId: n, similarAppIds: t } = e,
                [a, r] = i.useState(),
                o = (0, l.O)((e) => {
                    e && r(n);
                });
            return (
                i.useEffect(() => {
                    a === n &&
                        (0, m.zZ)(p.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: n,
                            suggested_application_ids: t
                        });
                }, [a, n, t]),
                o
            );
        })({
            applicationId: n,
            similarAppIds: i.useMemo(() => t.map((e) => e.id), [t])
        });
    return (0, a.jsx)('div', {
        className: g.contentContainer,
        ref: s,
        children: t.map((e, t) =>
            (0, a.jsx)(
                f,
                {
                    applicationId: n,
                    similarApplication: e,
                    onSelectApplication: r,
                    similarLoadId: o,
                    position: t
                },
                e.id
            )
        )
    });
}
function f(e) {
    var n, t, l;
    let { applicationId: o, similarApplication: c, onSelectApplication: _, position: v, similarLoadId: f } = e,
        C = (0, d.Z)({ application: c }),
        x = null === (n = c.categories) || void 0 === n ? void 0 : n[0],
        h = i.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: c.id,
                    icon: c.icon,
                    size: 48
                }),
            [c]
        ),
        b = i.useCallback(() => {
            (0, m.zZ)(p.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: 'product',
                application_id: o,
                suggested_application_id: c.id,
                position: v,
                load_id: f,
                shown_mutual_guilds_count: C.length
            }),
                _(c.id);
        }, [_, c.id, o, C.length, f, v]);
    return (0, a.jsxs)(r.Clickable, {
        onClick: b,
        className: g.appContainer,
        children: [
            (0, a.jsxs)('div', {
                className: g.appHeader,
                children: [
                    (0, a.jsx)('img', {
                        src: h,
                        alt: '',
                        className: g.avatar,
                        height: 48,
                        width: 48
                    }),
                    (0, a.jsxs)('div', {
                        className: g.titleContainer,
                        children: [
                            (0, a.jsx)('div', {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: 'hidden'
                                },
                                children: (0, a.jsx)(r.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: g.appName,
                                    children: c.name
                                })
                            }),
                            null != x
                                ? (0, a.jsx)(r.Text, {
                                      className: g.appCategory,
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: x.name
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, a.jsx)(r.Text, {
                className: g.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (l = null === (t = c.directory_entry) || void 0 === t ? void 0 : t.short_description) && void 0 !== l ? l : c.description
            }),
            (0, a.jsx)(s.Z, {
                application: c,
                textVariant: 'text-xs/medium',
                mutualGuilds: C,
                mutualGuildShownMax: 3,
                guildIconSize: s.x.SMALL,
                compact: !0
            })
        ]
    });
}
n.Z = function (e) {
    let { applicationId: n, fetchState: t, similarApplications: i, onSelectApplication: l, similarLoadId: s } = e;
    return t !== o.M.FETCHING && (null == i || 0 === i.length)
        ? null
        : (0, a.jsxs)('div', {
              className: g.sectionContainer,
              children: [
                  (0, a.jsx)('div', { className: g.divider }),
                  (0, a.jsx)(r.Heading, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      className: g.sectionHeader,
                      children: _.intl.string(_.t.E8wCnp)
                  }),
                  (0, a.jsx)(c.Z, {
                      loading: t === o.M.FETCHING,
                      children:
                          null != i
                              ? (0, a.jsx)(v, {
                                    applicationId: n,
                                    similarApplications: i,
                                    onSelectApplication: l,
                                    similarLoadId: s
                                })
                              : null
                  })
              ]
          });
};
