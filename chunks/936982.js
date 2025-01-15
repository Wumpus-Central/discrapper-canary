var i = n(200651),
    r = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(457330),
    o = n(497321),
    c = n(410030),
    d = n(246946),
    u = n(388032);
t.Z = () => {
    let e = (0, s.e7)([d.Z], () => d.Z.hidePersonalInformation),
        t = (0, c.ZP)();
    return (r.useEffect(() => {
        l.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(o.Z, {})
        : (0, i.jsx)(a.FormSection, {
              tag: a.FormTitleTags.H1,
              title: u.intl.string(u.t['Ig/XFR']),
              children: (0, i.jsxs)(a.EmptyState, {
                  theme: t,
                  children: [
                      (0, i.jsx)(a.EmptyStateImage, {
                          darkSrc: n(703152),
                          lightSrc: n(548617),
                          width: 230,
                          height: 220
                      }),
                      (0, i.jsx)(a.EmptyStateText, {
                          note: u.intl.string(u.t.WenGZ2),
                          children: u.intl.string(u.t['aoLS8/'])
                      })
                  ]
              })
          });
};
