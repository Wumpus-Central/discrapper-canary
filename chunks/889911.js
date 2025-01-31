n.d(t, { Z: () => a });
var i = n(433517),
    r = n(981631);
function a(e, t) {
    if (0 === e.length) return 'No logs';
    let n = i.K.get(r.JkL),
        a = i.K.get(r.scU),
        s = null != n ? 'Device Token: '.concat(n) : '',
        o = null != a ? 'Device Voip Token: '.concat(a) : '',
        l = e
            .map((e) => {
                let n = e.silent ? 'Silent' : 'Displayed',
                    i = t ? ''.concat(e.channelId, ' - ').concat(e.messageId) : ''.concat(e.title, ' - ').concat(e.content);
                return ''.concat(new Date(e.receivedTimestamp).toISOString(), ' [').concat(e.type, '] ').concat(n, ' - ').concat(i);
            })
            .join('\n');
    return ''.concat(s, '\n').concat(o, '\n\n').concat(l);
}
