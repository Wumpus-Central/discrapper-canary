n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(493683),
    r = n(599059),
    s = n(933557),
    o = n(210975),
    c = n(981631),
    d = n(388032),
    u = n(189145);
let h = (e) => {
    let { channel: t } = e,
        n = (0, s.ZP)(t),
        h = (0, o.m$)({
            channelId: t.id,
            location: 'ChannelName'
        });
    return (0, i.jsxs)('div', {
        className: u.container,
        onDoubleClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(r.Z, {
                minLen: 1,
                maxLen: c.HN8,
                className: u.channelName,
                name: 'channel_name',
                autoComplete: 'off',
                value: null != n ? n : '',
                onBlur: (e) => {
                    n !== e.currentTarget.value && a.Z.setName(t.id, e.currentTarget.value);
                }
            }),
            h &&
                (0, i.jsx)(l.ua7, {
                    text: d.intl.string(d.t.QyZ4TU),
                    children: (e) =>
                        (0, i.jsx)(l.tQf, {
                            ...e,
                            size: 'xs',
                            'aria-label': d.intl.string(d.t.VHXh8f),
                            color: l.TVs.colors.INTERACTIVE_NORMAL
                        })
                })
        ]
    });
};
