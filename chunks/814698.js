n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    i = n(397927),
    r = n(155718),
    s = n(975807),
    o = n(194362),
    c = n(409626),
    d = n(652215),
    u = n(985018);
function m(e) {
    let { application: t, trackAction: n } = e,
        m = a.useCallback(async () => {
            n(c.Ws.ClaimGame);
            let e = await (0, o.a)(d.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, s.A)(e);
        }, [n]),
        f = a.useCallback((e) => (0, l.jsx)(i.MzZ, { onClick: m, children: e }), [m]);
    return t.linkedGames?.some((e) => e.type === r.Mh.OFFICIAL)
        ? null
        : (0, l.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: u.intl.format(u.t.KAjfKl, { claimLink: f }),
          });
}
