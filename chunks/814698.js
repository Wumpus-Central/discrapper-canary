n.d(t, { A: () => x });
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(155718),
    s = n(975807),
    c = n(602859),
    o = n(194362),
    d = n(409626),
    u = n(652215),
    m = n(985018);
function x(e) {
    let { application: t, trackAction: n } = e,
        x = (0, c.s)("GameProfile"),
        h = l.useCallback(async () => {
            n(d.Ws.ClaimGame);
            let e = await (0, o.a)(u.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, s.A)(e);
        }, [n]),
        f = l.useCallback((e) => (0, a.jsx)(i.MzZ, { onClick: h, children: e }), [h]);
    return !x || t.linkedGames?.some((e) => e.type === r.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(i.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: m.intl.format(m.t.KAjfKl, { claimLink: f }),
          });
}
