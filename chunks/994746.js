r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(627341);
var a = r(278074),
    o = r(90712),
    s = r(981631),
    l = r(388032);
function u(e) {
    let n = (0, o.Z)(e);
    return {
        text: (0, a.EQ)([e, null == n ? void 0 : n.type])
            .with([{ type: s.IIU.PLAYING }, s.ABu.XBOX], () => l.intl.formatToPlainString(l.t.Sq9xJy, { game: l.intl.string(l.t['Nfvo7+']) }))
            .with([{ type: s.IIU.PLAYING }, s.ABu.PLAYSTATION], () => l.intl.formatToPlainString(l.t.Sq9xJy, { game: l.intl.string(l.t.fFl4jo) }))
            .with([{ type: s.IIU.STREAMING }, s.ABu.TWITCH], () => l.intl.formatToPlainString(l.t['4CQq9f'], { name: l.intl.string(l.t.q4pBGx) }))
            .with([{ type: s.IIU.STREAMING }, s.ABu.YOUTUBE], () => l.intl.formatToPlainString(l.t['4CQq9f'], { name: l.intl.string(l.t.aS6cKy) }))
            .with([{ type: s.IIU.PLAYING }, a.P.any], () => l.intl.string(l.t.BMTj29))
            .with([{ type: s.IIU.STREAMING }, a.P.any], () => l.intl.string(l.t['Jpkr/v']))
            .with(
                [
                    {
                        type: s.IIU.LISTENING,
                        details: a.P.string
                    },
                    a.P.any
                ],
                () => l.intl.formatToPlainString(l.t['b+lA5+'], { name: e.name })
            )
            .with([{ type: s.IIU.LISTENING }, a.P.any], () => l.intl.string(l.t.dBISa2))
            .with(
                [
                    {
                        type: s.IIU.WATCHING,
                        details: a.P.string
                    },
                    a.P.any
                ],
                () => l.intl.formatToPlainString(l.t.mqdfDQ, { name: e.name })
            )
            .with([{ type: s.IIU.WATCHING }, a.P.any], () => l.intl.string(l.t.GpNXjI))
            .with(
                [
                    {
                        type: s.IIU.COMPETING,
                        details: a.P.string
                    },
                    a.P.any
                ],
                () => l.intl.formatToPlainString(l.t.oHF7Cg, { name: e.name })
            )
            .with([{ type: s.IIU.COMPETING }, a.P.any], () => l.intl.string(l.t.OzCsIC))
            .with([{ type: s.IIU.HANG_STATUS }, a.P.any], () => l.intl.string(l.t['04B8fH']))
            .otherwise(() => void 0),
        platformIcon: null == n ? void 0 : n.icon
    };
}
