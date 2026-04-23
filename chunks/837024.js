n.d(t, { A: () => c });
var i = n(64700),
    l = n(554146),
    a = n(843472),
    s = n(155718),
    r = n(464962),
    o = n(49999);
function c(e) {
    let [t, n] = (0, r.A)(e),
        c = i.useRef(null);
    i.useEffect(() => {
        null == t ||
            ((null == c.current || c.current.visibleContent !== t || c.current.channelId !== e.id) &&
                (t === l.M.FIRST_BOOSTER_UPSELL &&
                    a.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: s.Mk.FIRST_BOOSTER }),
                (c.current = { visibleContent: t, channelId: e.id }),
                n(o.i.AUTO_DISMISS)));
    }, [t, e.id, n]);
}
