n.d(t, { Z: () => o }), n(627341);
var i = n(278074),
    r = n(90712),
    a = n(981631),
    s = n(388032);
function o(e) {
    let t = (0, r.Z)(e);
    return {
        text: (0, i.EQ)([e, null == t ? void 0 : t.type])
            .with([{ type: a.IIU.PLAYING }, a.ABu.XBOX], () => s.intl.formatToPlainString(s.t.Sq9xJy, { game: s.intl.string(s.t['Nfvo7+']) }))
            .with([{ type: a.IIU.PLAYING }, a.ABu.PLAYSTATION], () => s.intl.formatToPlainString(s.t.Sq9xJy, { game: s.intl.string(s.t.fFl4jo) }))
            .with([{ type: a.IIU.STREAMING }, a.ABu.TWITCH], () => s.intl.formatToPlainString(s.t['4CQq9f'], { name: s.intl.string(s.t.q4pBGx) }))
            .with([{ type: a.IIU.STREAMING }, a.ABu.YOUTUBE], () => s.intl.formatToPlainString(s.t['4CQq9f'], { name: s.intl.string(s.t.aS6cKy) }))
            .with([{ type: a.IIU.PLAYING }, i.P.any], () => s.intl.string(s.t.BMTj29))
            .with([{ type: a.IIU.STREAMING }, i.P.any], () => s.intl.string(s.t['Jpkr/v']))
            .with(
                [
                    {
                        type: a.IIU.LISTENING,
                        details: i.P.string
                    },
                    i.P.any
                ],
                () => s.intl.formatToPlainString(s.t['b+lA5+'], { name: e.name })
            )
            .with([{ type: a.IIU.LISTENING }, i.P.any], () => s.intl.string(s.t.dBISa2))
            .with(
                [
                    {
                        type: a.IIU.WATCHING,
                        details: i.P.string
                    },
                    i.P.any
                ],
                () => s.intl.formatToPlainString(s.t.mqdfDQ, { name: e.name })
            )
            .with([{ type: a.IIU.WATCHING }, i.P.any], () => s.intl.string(s.t.GpNXjI))
            .with(
                [
                    {
                        type: a.IIU.COMPETING,
                        details: i.P.string
                    },
                    i.P.any
                ],
                () => s.intl.formatToPlainString(s.t.oHF7Cg, { name: e.name })
            )
            .with([{ type: a.IIU.COMPETING }, i.P.any], () => s.intl.string(s.t.OzCsIC))
            .otherwise(() => void 0),
        platformIcon: null == t ? void 0 : t.icon
    };
}
