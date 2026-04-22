n.d(t, { A: () => _ });
var a = n(627968),
    l = n(64700),
    i = n(349288),
    r = n(834730),
    s = n(155718),
    o = n(975807),
    d = n(194362),
    c = n(409626),
    u = n(652215),
    m = n(985018);
function _(e) {
    let { application: t, trackAction: n } = e,
        _ = l.useCallback(async () => {
            n(c.Ws.ClaimGame);
            let e = await (0, d.a)(u.dSh.DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY);
            (0, o.A)(e);
        }, [n]),
        h = l.useCallback((e) => (0, a.jsx)(i.Anchor, { onClick: _, children: e }), [_]);
    return t.linkedGames?.some((e) => e.type === s.Mh.OFFICIAL)
        ? null
        : (0, a.jsx)(r.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: m.intl.format(m.t.KAjfKl, { claimLink: h }),
          });
}
