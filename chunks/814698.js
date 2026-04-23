n.d(t, { A: () => h });
var l = n(627968),
    a = n(64700),
    i = n(349288),
    r = n(834730),
    s = n(155718),
    o = n(975807),
    c = n(194362),
    d = n(409626),
    u = n(652215),
    m = n(985018);
function h(e) {
    let { application: t, trackAction: n } = e,
        h = a.useCallback(async () => {
            n(d.Ws.ClaimGame);
            let e = await (0, c.a)(u.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, o.A)(e);
        }, [n]),
        f = a.useCallback((e) => (0, l.jsx)(i.Anchor, { onClick: h, children: e }), [h]);
    return t.linkedGames?.some((e) => e.type === s.Mh.OFFICIAL)
        ? null
        : (0, l.jsx)(r.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: m.intl.format(m.t.KAjfKl, { claimLink: f }),
          });
}
