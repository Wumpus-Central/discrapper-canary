n.d(t, { Z: () => s }), n(627341);
var r = n(278074),
    i = n(90712),
    o = n(981631),
    a = n(388032);
function s(e) {
    let t = (0, i.Z)(e);
    return {
        text: (0, r.EQ)([e, null == t ? void 0 : t.type])
            .with([{ type: o.IIU.PLAYING }, o.ABu.XBOX], () => a.NW.formatToPlainString(a.t.Sq9xJy, { game: a.NW.string(a.t['Nfvo7+']) }))
            .with([{ type: o.IIU.PLAYING }, o.ABu.PLAYSTATION], () => a.NW.formatToPlainString(a.t.Sq9xJy, { game: a.NW.string(a.t.fFl4jo) }))
            .with([{ type: o.IIU.STREAMING }, o.ABu.TWITCH], () => a.NW.formatToPlainString(a.t['4CQq9f'], { name: a.NW.string(a.t.q4pBGx) }))
            .with([{ type: o.IIU.STREAMING }, o.ABu.YOUTUBE], () => a.NW.formatToPlainString(a.t['4CQq9f'], { name: a.NW.string(a.t.aS6cKy) }))
            .with([{ type: o.IIU.PLAYING }, r.P.any], () => a.NW.string(a.t.BMTj29))
            .with([{ type: o.IIU.STREAMING }, r.P.any], () => a.NW.string(a.t['Jpkr/v']))
            .with(
                [
                    {
                        type: o.IIU.LISTENING,
                        details: r.P.string
                    },
                    r.P.any
                ],
                () => a.NW.formatToPlainString(a.t['b+lA5+'], { name: e.name })
            )
            .with([{ type: o.IIU.LISTENING }, r.P.any], () => a.NW.string(a.t.dBISa2))
            .with(
                [
                    {
                        type: o.IIU.WATCHING,
                        details: r.P.string
                    },
                    r.P.any
                ],
                () => a.NW.formatToPlainString(a.t.mqdfDQ, { name: e.name })
            )
            .with([{ type: o.IIU.WATCHING }, r.P.any], () => a.NW.string(a.t.GpNXjI))
            .with(
                [
                    {
                        type: o.IIU.COMPETING,
                        details: r.P.string
                    },
                    r.P.any
                ],
                () => a.NW.formatToPlainString(a.t.oHF7Cg, { name: e.name })
            )
            .with([{ type: o.IIU.COMPETING }, r.P.any], () => a.NW.string(a.t.OzCsIC))
            .otherwise(() => void 0),
        platformIcon: null == t ? void 0 : t.icon
    };
}
