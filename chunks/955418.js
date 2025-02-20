n.d(t, { Z: () => g }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    o = n(906732),
    a = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(131704),
    u = n(5192),
    d = n(785717),
    f = n(698305),
    p = n(981631),
    _ = n(388032),
    h = n(995773);
let m = (0, c.kt)({
    id: '1',
    type: p.d4z.DM
});
function g(e) {
    let { user: t, guildId: n, channelId: c, onClose: p } = e,
        { newestAnalyticsLocation: g } = (0, o.ZP)(),
        { trackUserProfileAction: E } = (0, d.KZ)(),
        [v, b] = i.useState(''),
        [y, O] = i.useState((0, s.JM)(v)),
        S = i.useRef(!1);
    return (0, r.jsx)(l.Z, {
        className: h.container,
        innerClassName: h.inner,
        editorClassName: h.editor,
        type: a.Ie.USER_PROFILE,
        placeholder: _.NW.formatToPlainString(_.t['0ZQw/f'], { name: u.ZP.getName(n, c, t) }),
        channel: m,
        textValue: v,
        richValue: y,
        onChange: (e, t, n) => {
            t !== v && (b(t), O(n));
        },
        focused: S.current,
        onFocus: () => {
            S.current = !0;
        },
        onBlur: () => {
            S.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    E({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, f.Z)({
                        userId: t.id,
                        content: n.trim(),
                        location: g
                    }),
                    null == p || p(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch (e) {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
