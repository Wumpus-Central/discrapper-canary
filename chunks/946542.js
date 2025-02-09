n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(481060),
    l = n(434650),
    s = n(303383),
    o = n(924489),
    c = n(125909),
    d = n(824606),
    u = n(768581),
    m = n(881294),
    h = n(981631),
    p = n(388032),
    g = n(250363);
function _(e) {
    let { applicationId: t, similarApplications: n, onSelectApplication: r, similarLoadId: s } = e,
        o = (function (e) {
            let { applicationId: t, similarAppIds: n } = e,
                [i, r] = a.useState(),
                s = (0, l.O)((e) => {
                    e && r(t);
                });
            return (
                a.useEffect(() => {
                    i === t &&
                        (0, m.zZ)(h.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                            application_id: t,
                            suggested_application_ids: n
                        });
                }, [i, t, n]),
                s
            );
        })({
            applicationId: t,
            similarAppIds: a.useMemo(() => n.map((e) => e.id), [n])
        });
    return (0, i.jsx)('div', {
        className: g.contentContainer,
        ref: o,
        children: n.map((e, n) =>
            (0, i.jsx)(
                x,
                {
                    applicationId: t,
                    similarApplication: e,
                    onSelectApplication: r,
                    similarLoadId: s,
                    position: n
                },
                e.id
            )
        )
    });
}
function x(e) {
    var t, n, l;
    let { applicationId: s, similarApplication: c, onSelectApplication: p, position: _, similarLoadId: x } = e,
        C = (0, d.Z)({ application: c }),
        v = null === (t = c.categories) || void 0 === t ? void 0 : t[0],
        f = a.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: c.id,
                    icon: c.icon,
                    size: 48
                }),
            [c]
        ),
        I = a.useCallback(() => {
            (0, m.zZ)(h.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                current_page: 'product',
                application_id: s,
                suggested_application_id: c.id,
                position: _,
                load_id: x,
                shown_mutual_guilds_count: C.length
            }),
                p(c.id);
        }, [p, c.id, s, C.length, x, _]);
    return (0, i.jsxs)(r.P3F, {
        onClick: I,
        className: g.appContainer,
        children: [
            (0, i.jsxs)('div', {
                className: g.appHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: f,
                        alt: '',
                        className: g.avatar,
                        height: 48,
                        width: 48
                    }),
                    (0, i.jsxs)('div', {
                        className: g.titleContainer,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: 'hidden'
                                },
                                children: (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: g.appName,
                                    children: c.name
                                })
                            }),
                            null != v
                                ? (0, i.jsx)(r.Text, {
                                      className: g.appCategory,
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: v.name
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(r.Text, {
                className: g.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (l = null === (n = c.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== l ? l : c.description
            }),
            (0, i.jsx)(o.Z, {
                application: c,
                textVariant: 'text-xs/medium',
                mutualGuilds: C,
                mutualGuildShownMax: 3,
                guildIconSize: o.x.SMALL,
                compact: !0
            })
        ]
    });
}
let C = function (e) {
    let { applicationId: t, fetchState: n, similarApplications: a, onSelectApplication: l, similarLoadId: o } = e;
    return n !== s.M.FETCHING && (null == a || 0 === a.length)
        ? null
        : (0, i.jsxs)('div', {
              className: g.sectionContainer,
              children: [
                  (0, i.jsx)('div', { className: g.divider }),
                  (0, i.jsx)(r.X6q, {
                      variant: 'heading-sm/semibold',
                      color: 'header-primary',
                      className: g.sectionHeader,
                      children: p.intl.string(p.t.E8wCnp)
                  }),
                  (0, i.jsx)(c.Z, {
                      loading: n === s.M.FETCHING,
                      children:
                          null != a
                              ? (0, i.jsx)(_, {
                                    applicationId: t,
                                    similarApplications: a,
                                    onSelectApplication: l,
                                    similarLoadId: o
                                })
                              : null
                  })
              ]
          });
};
